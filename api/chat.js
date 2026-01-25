import OpenAI from "openai";

function detectLanguage(text) {
  const t = text.toLowerCase();

  // русский
  if (/[а-яё]/i.test(t)) return "ru";

  // немецкий — по словам
  if (
    /\b(ich|und|sie|nicht|mit|für|eine|alles|liegt|ihrem|bitte|hallo)\b/i.test(t)
  ) {
    return "de";
  }

  // английский — по умолчанию
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

   // оставляем только user-сообщения
const userOnlyMessages = messages.filter(
  (m) => m.role === "user"
);

// system + только user
const messagesWithSystem = [
  {
  role: "system",
  content: `
Ты — профессиональный ассистент студии дизайна.

${languageInstruction}

СТРОГО:
— Используй ТОЛЬКО этот язык
— Не переключай язык ни при каких условиях
— Даже если пользователь пишет коротко или нейтрально
— Даже если ранее диалог был на другом языке

Отвечай уверенно, профессионально, без смешения языков.
  `.trim(),
},
  ...userOnlyMessages,
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
