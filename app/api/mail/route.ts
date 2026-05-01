import nodemailer from "nodemailer";
import { z } from "zod";
import { NextResponse } from "next/server";

const contactSchema = z.object({
  type: z.literal("contact"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  session: z.string().min(1, "Please select a session type"),
  source: z.string().optional(),
  message: z.string().max(2000).optional(),
});

const newsletterSchema = z.object({
  type: z.literal("newsletter"),
  email: z.string().email("Enter a valid email address"),
});

const homeContactSchema = z.object({
  type: z.literal("home-contact"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().max(2000).optional(),
});

const mailSchema = z.discriminatedUnion("type", [
  contactSchema,
  newsletterSchema,
  homeContactSchema,
]);

function env(name: string) {
  return process.env[name]?.trim();
}

function getTransporter() {
  const service = env("MAIL_SERVICE");
  const host = env("EMAIL_HOST");
  const port = Number(env("EMAIL_PORT") || 587);
  const user = env("USER_EMAIL") || env("EMAIL_USER");
  const rawPass = env("USER_PASSWORD") || env("EMAIL_PASS");
  const pass = rawPass?.replace(/\s+/g, "");
  const secure = env("EMAIL_SECURE") === "true";

  if (!user || !pass) {
    throw new Error(
      "Mail settings are incomplete. Please set USER_EMAIL and USER_PASSWORD.",
    );
  }

  if (service) {
    return nodemailer.createTransport({
      service,
      auth: { user, pass },
    });
  }

  if (!host) {
    throw new Error("SMTP host is missing. Set MAIL_SERVICE or EMAIL_HOST.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toHtmlWithBreaks(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

async function sendMail(
  to: string,
  subject: string,
  html: string,
  text: string,
) {
  const transporter = getTransporter();
  const fromEmail =
    env("USER_EMAIL") || env("EMAIL_FROM_EMAIL") || env("EMAIL_USER");

  if (!fromEmail) {
    throw new Error(
      "Missing sender email. Set USER_EMAIL or EMAIL_FROM_EMAIL.",
    );
  }

  return transporter.sendMail({
    from: `${env("EMAIL_FROM_NAME") || "SK Photography"} <${fromEmail}>`,
    to,
    subject,
    html,
    text,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = mailSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: result.error.errors[0].message },
        { status: 400 },
      );
    }

    const data = result.data;
    const ownerEmail =
      env("EMAIL_TO") || env("USER_EMAIL") || env("EMAIL_USER");

    if (!ownerEmail) {
      throw new Error(
        "Recipient email is missing. Set EMAIL_TO or USER_EMAIL.",
      );
    }

    if (data.type === "contact") {
      const safeName = escapeHtml(data.name);
      const safeEmail = escapeHtml(data.email);
      const safeSession = escapeHtml(data.session);
      const safeSource = data.source ? escapeHtml(data.source) : "Not provided";
      const safeMessage = data.message
        ? toHtmlWithBreaks(data.message)
        : "No message provided.";

      await sendMail(
        ownerEmail,
        `New inquiry from ${data.name}`,
        `<div style="font-family:system-ui, sans-serif;line-height:1.6;color:#111">
          <h2>New photography inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Session type:</strong> ${safeSession}</p>
          <p><strong>How they heard about you:</strong> ${safeSource}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>`,
        `New contact inquiry\n
Name: ${data.name}\nEmail: ${data.email}\nSession type: ${data.session}\nHeard about you via: ${data.source || "Not provided"}\n\nMessage:\n${data.message || "No message provided."}`,
      );

      await sendMail(
        data.email,
        "We received your photography inquiry",
        `<div style="font-family:Arial,Helvetica,sans-serif;line-height:1.7;color:#1f2937;max-width:640px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:16px;background:#ffffff;">
          <h2 style="margin:0 0 12px;color:#111827;">Thank you for reaching out, ${safeName}</h2>
          <p style="margin:0 0 16px;">Your inquiry has been received successfully. We are reviewing your requirements and will get back to you shortly with the next steps.</p>
          <p style="margin:0 0 12px;"><strong>Session:</strong> ${safeSession}</p>
          <p style="margin:0 0 20px;"><strong>Submitted Email:</strong> ${safeEmail}</p>
          <div style="padding:12px 14px;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0;">
            <p style="margin:0;font-size:14px;color:#475569;">This is an automated acknowledgement from SK Photography.</p>
          </div>
          <p style="margin:18px 0 0;color:#111827;">Regards,<br /><strong>SK Photography Team</strong></p>
        </div>`,
        `Thank you for reaching out, ${data.name}. Your photography inquiry has been received and our team will contact you shortly.\n\nSession: ${data.session}\nSubmitted Email: ${data.email}\n\nRegards,\nSK Photography Team`,
      );

      return NextResponse.json({ status: "ok" });
    }

    if (data.type === "newsletter") {
      await sendMail(
        ownerEmail,
        `Newsletter subscription request`,
        `<div style="font-family:system-ui, sans-serif;line-height:1.6;color:#111">
          <h2>Newsletter subscription</h2>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p>The visitor wants to subscribe to your newsletter.</p>
        </div>`,
        `Newsletter subscription request\n\nEmail: ${data.email}`,
      );

      await sendMail(
        data.email,
        "Welcome to SK Photography updates",
        `<div style="font-family:Arial,Helvetica,sans-serif;line-height:1.7;color:#1f2937;max-width:640px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:16px;background:#ffffff;">
          <h2 style="margin:0 0 12px;color:#111827;">You are subscribed</h2>
          <p style="margin:0 0 16px;">Thank you for subscribing to SK Photography updates. We will share fresh work, stories, and announcements in your inbox.</p>
          <p style="margin:0;"><strong>Subscribed Email:</strong> ${escapeHtml(data.email)}</p>
        </div>`,
        `Thank you for subscribing to SK Photography updates.\nSubscribed Email: ${data.email}`,
      );

      return NextResponse.json({ status: "ok" });
    }

    if (data.type === "home-contact") {
      const fullName = `${data.firstName} ${data.lastName}`.trim();
      const safeName = escapeHtml(fullName);
      const safeEmail = escapeHtml(data.email);
      const safePhone = data.phone ? escapeHtml(data.phone) : "Not provided";
      const safeSubject = data.subject
        ? escapeHtml(data.subject)
        : "General inquiry";
      const safeMessage = data.message
        ? toHtmlWithBreaks(data.message)
        : "No message provided.";

      await sendMail(
        ownerEmail,
        `Homepage inquiry from ${fullName}`,
        `<div style="font-family:system-ui, sans-serif;line-height:1.6;color:#111">
          <h2>New homepage contact inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>`,
        `Homepage contact inquiry\n\nName: ${fullName}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nSubject: ${data.subject || "General inquiry"}\n\nMessage:\n${data.message || "No message provided."}`,
      );

      await sendMail(
        data.email,
        "We received your message",
        `<div style="font-family:Arial,Helvetica,sans-serif;line-height:1.7;color:#1f2937;max-width:640px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:16px;background:#ffffff;">
          <h2 style="margin:0 0 12px;color:#111827;">Thank you for your message, ${safeName}</h2>
          <p style="margin:0 0 16px;">Your inquiry has been received successfully. Our team will connect with you soon.</p>
          <p style="margin:0 0 8px;"><strong>Subject:</strong> ${safeSubject}</p>
          <p style="margin:0 0 20px;"><strong>Submitted Email:</strong> ${safeEmail}</p>
          <div style="padding:12px 14px;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0;">
            <p style="margin:0;font-size:14px;color:#475569;">This is an automated acknowledgement from SK Photography.</p>
          </div>
          <p style="margin:18px 0 0;color:#111827;">Regards,<br /><strong>SK Photography Team</strong></p>
        </div>`,
        `Thank you for your message, ${fullName}. We have received your inquiry and will connect with you soon.\n\nSubject: ${data.subject || "General inquiry"}\nSubmitted Email: ${data.email}\n\nRegards,\nSK Photography Team`,
      );

      return NextResponse.json({ status: "ok" });
    }

    return NextResponse.json(
      { message: "Invalid mail request type" },
      { status: 400 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    );
  }
}
