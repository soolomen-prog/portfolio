import OpenAI from "openai";

function detectLanguage(text = "") {
  // Русский (кириллица)
  if (/[а-яА-ЯёЁ]/.test(text)) return "ru";

  // Немецкий (умляуты/ß) — если есть, считаем немецким
  if (/[äöüÄÖÜß]/.test(text)) return "de";

  // Английский/латиница по умолчанию
  return "en";
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages format" });
    }

    // --- language detect from last user message ---
    const lastUserMessage =
      messages
        .slice()
        .reverse()
        .find((m) => m?.role === "user")?.content || "";

    const lang = detectLanguage(lastUserMessage);

    const languageInstruction = {
      ru: "Отвечай строго на русском языке. Не смешивай языки.",
      de: "Antworte strikt auf Deutsch. Mische keine Sprachen.",
      en: "Answer strictly in English. Do not mix languages.",
    }[lang];

    // добавляем system-инструкцию перед всей историей
    const messagesWithSystem = [
      {
        role: "system",
        content: `
Ты — профессиональный ассистент студии дизайна.
${languageInstruction}

ВАЖНО:
— Используй ТОЛЬКО этот язык
— Не переключайся на другой язык сам
— Не добавляй фразы на других языках
        `.trim(),
      },
      ...messages,
    ];
    // --- end language ---

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messagesWithSystem,
      temperature: 0.6,
      max_tokens: 500,
    });

    let answer =
      completion.choices[0]?.message?.content ||
      "Я не смог сформулировать ответ, попробуйте иначе.";

    // ---------- LEAD PARSING ----------
    let lead = null;

    const leadMatch = answer.match(
      /<<<LEAD>>>[\s\S]*?email:\s*(.+)\nsummary:\n([\s\S]*?)<<<END>>>/
    );

    if (leadMatch) {
      // ВАЖНО: НЕ const, а присваиваем внешней переменной lead
      lead = {
        email: leadMatch[1].trim(),
        summary: leadMatch[2].trim(),
      };

      console.log("LEAD FOUND:", lead);

      // отправляем лид на send-lead
      await fetch("https://www.andreisolomin.com/api/send-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lead),
      });

      console.log("SEND-LEAD CALLED");

      // убираем служебный блок из ответа пользователю
      answer = answer.replace(/<<<LEAD>>>[\s\S]*?<<<END>>>/, "").trim();
    }
    // ---------- END LEAD PARSING ----------

    return res.status(200).json({
      answer,
      lead,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
