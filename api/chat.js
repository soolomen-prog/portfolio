import OpenAI from "openai";

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

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // оптимально по цене/качеству
      messages,
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
      lead = {
        email: leadMatch[1].trim(),
        summary: leadMatch[2].trim(),
      };

      // убираем служебный блок из ответа пользователю
      answer = answer
        .replace(/<<<LEAD>>>[\s\S]*?<<<END>>>/, "")
        .trim();
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
