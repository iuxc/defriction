import type { VercelRequest, VercelResponse } from "@vercel/node";
import sgMail from "@sendgrid/mail";

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
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || "noreply@defriction.design";

    const result = await sgMail.send({
      from: { email: fromEmail, name },
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

    return res.json({ success: true, id: result[0]?.headers?.["x-message-id"] });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
