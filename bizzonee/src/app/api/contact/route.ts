import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "General inquiry").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please fill in your name, email and message." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const {
      SMTP_HOST = "smtp.gmail.com",
      SMTP_PORT = "465",
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO,
    } = process.env;

    if (!SMTP_USER || !SMTP_PASS) {
      return NextResponse.json({ error: "Email is not configured on the server yet." }, { status: 500 });
    }

    const port = Number(SMTP_PORT);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465, // true for 465, false for 587
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const to = CONTACT_TO || SMTP_USER;
    const subject = `New inquiry — ${service} — ${name}`;
    const text =
      `New website inquiry\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "—"}\n` +
      `Service: ${service}\n\n` +
      `Message:\n${message}\n`;
    const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const html =
      `<div style="font-family:Arial,sans-serif;font-size:15px;color:#0f172a;line-height:1.6">` +
      `<h2 style="margin:0 0 12px">New website inquiry</h2>` +
      `<p><strong>Name:</strong> ${esc(name)}</p>` +
      `<p><strong>Email:</strong> ${esc(email)}</p>` +
      `<p><strong>Phone:</strong> ${esc(phone) || "—"}</p>` +
      `<p><strong>Service:</strong> ${esc(service)}</p>` +
      `<p><strong>Message:</strong><br>${esc(message).replace(/\n/g, "<br>")}</p>` +
      `<hr><p style="font-size:12px;color:#64748b">Sent from the BizzOne Digital website contact form.</p></div>`;

    await transporter.sendMail({
      from: `"BizzOne Digital Website" <${SMTP_USER}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send your message. Please try again." }, { status: 500 });
  }
}