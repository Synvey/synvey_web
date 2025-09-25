import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
export const runtime = "nodejs";
type ContactPayload = {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  topic: string;
  message: string;
};

function validatePayload(body: unknown): { valid: boolean; errors?: string[]; data?: ContactPayload } {
  const errors: string[] = [];
  const data = body as Partial<ContactPayload>;

  if (!data) {
    return { valid: false, errors: ["Invalid JSON body"] };
  }
  if (!data.fullName || typeof data.fullName !== "string") errors.push("fullName is required");
  if (!data.email || typeof data.email !== "string") errors.push("email is required");
  if (!data.topic || typeof data.topic !== "string") errors.push("topic is required");
  if (!data.message || typeof data.message !== "string") errors.push("message is required");

  if (errors.length) return { valid: false, errors };

  return {
    valid: true,
    data: {
      fullName: data.fullName!,
      email: data.email!,
      company: data.company ?? "",
      phone: data.phone ?? "",
      topic: data.topic!,
      message: data.message!,
    },
  };
}

export async function POST(request: Request) {
  try {
    const startedAt = Date.now();
    const reqId = Math.random().toString(36).slice(2, 10);
    console.info(`[contact_api][${reqId}] Received POST /api/contact`);
    const body = await request.json();
    const { valid, errors, data } = validatePayload(body);
    if (!valid || !data) {
      console.warn(`[contact_api][${reqId}] Validation failed`, { errors });
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const portEnv = process.env.SMTP_PORT;
    const user = process.env.SMTP_USERNAME;
    const pass = process.env.SMTP_PASSWORD;
    const from = process.env.SMTP_FROM_EMAIL || user;
    const to = process.env.SMTP_USERNAME || user;

    if (!host || !portEnv || !user || !pass || !from || !to) {
      console.error(`[contact_api][${reqId}] Missing SMTP configuration`, {
        hasHost: !!host,
        hasPort: !!portEnv,
        hasUser: !!user,
        hasPass: !!pass,
        hasFrom: !!from,
        hasTo: !!to,
      });
      return NextResponse.json(
        { ok: false, error: "Missing SMTP configuration. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO." },
        { status: 500 }
      );
    }

    const port = Number.parseInt(String(portEnv), 10);
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    } as SMTPTransport.Options);

    const subject = `[Contact] ${data.topic} - ${data.fullName}`;
    const text = `New contact submission\n\nName: ${data.fullName}\nEmail: ${data.email}\nCompany: ${data.company || "-"}\nPhone: ${data.phone || "-"}\nTopic: ${data.topic}\n\nMessage:\n${data.message}`;
    const html = `
      <div>
        <h2>New contact submission</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || "-"}</p>
        <p><strong>Phone:</strong> ${data.phone || "-"}</p>
        <p><strong>Topic:</strong> ${data.topic}</p>
        <hr />
        <p style="white-space:pre-wrap">${data.message}</p>
      </div>
    `;
    console.info(`[contact_api][${reqId}] Sending email`, {
      to,
      from,
      subject,
      topic: data.topic,
    });
    const info = await transporter.sendMail({ from, to, subject, text, html, replyTo: data.email });
    console.info(`[contact_api][${reqId}] Email sent`, { messageId: info.messageId });

    const durationMs = Date.now() - startedAt;
    console.info(`[contact_api][${reqId}] Completed successfully in ${durationMs}ms`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(`[contact_api] Error while processing request`, error);
    return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 500 });
  }
}


