import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    const body = await request.json();
    const { valid, errors, data } = validatePayload(body);
    if (!valid || !data) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "0", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.MAIL_FROM || user;
    const to = process.env.MAIL_TO || user;

    if (!host || !port || !user || !pass || !from || !to) {
      return NextResponse.json(
        { ok: false, error: "Missing SMTP configuration. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

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

    await transporter.sendMail({ from, to, subject, text, html, replyTo: data.email });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 500 });
  }
}


