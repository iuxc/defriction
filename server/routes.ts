import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getUncachableResendClient } from "./resend";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  budget: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  website: z.string().optional(),
  formLoadTime: z.number().optional(),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form email endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          error: "Validation failed", 
          details: result.error.flatten() 
        });
      }

      const { name, email, budget, message, website, formLoadTime } = result.data;

      if (website && website.length > 0) {
        console.log("Honeypot triggered - spam blocked");
        return res.json({ success: true, id: "blocked" });
      }

      if (formLoadTime) {
        const timeDiff = Date.now() - formLoadTime;
        if (timeDiff < 3000) {
          console.log("Form submitted too fast - likely bot");
          return res.json({ success: true, id: "blocked" });
        }
      }

      const { client, fromEmail } = await getUncachableResendClient();

      const emailResult = await client.emails.send({
        from: `${name} <${fromEmail || "onboarding@resend.dev"}>`,
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

      if (emailResult.error) {
        console.error("Resend error:", emailResult.error);
        return res.status(500).json({ error: "Failed to send email" });
      }

      return res.json({ success: true, id: emailResult.data?.id });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
