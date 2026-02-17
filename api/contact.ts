import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, budget, message, website, formLoadTime } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  // Honeypot
  if (website && website.length > 0) {
    return res.json({ success: true, id: "blocked" });
  }

  // Bot speed check
  if (formLoadTime) {
    const timeDiff = Date.now() - formLoadTime;
    if (timeDiff < 3000) {
      return res.json({ success: true, id: "blocked" });
    }
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    const result = await resend.emails.send({
      from: `${name} <${fromEmail}>`,
      to: "brian@defriction.design",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.json({ success: true, id: result.data?.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
