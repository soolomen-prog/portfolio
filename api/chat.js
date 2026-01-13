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

    const answer = completion.choices[0]?.message?.content;

    return res.status(200).json({
      answer: answer || "Я не смог сформулировать ответ, попробуйте иначе.",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
