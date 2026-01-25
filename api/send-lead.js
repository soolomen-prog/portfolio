import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, summary } = req.body;

  if (!email || !summary) {
    return res.status(400).json({ error: "Missing data" });
  }

  try {
    const result = await resend.emails.send({
      from: "Studio <no-reply@andreisolomin.com>",
      to: ["soolomen@gmail.com"],
      reply_to: email, // ВАЖНО: строка, не массив
      subject: "Новый запрос с сайта",
      text: summary,
    });

    console.log("RESEND RESULT:", result);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return res.status(500).json({ error: "Email failed" });
  }
}
