import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    const emailBody = `
CONTACT MESSAGE — Spice Route
==============================
From: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
==============================
    `.trim();

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const OWNER_EMAIL = process.env.OWNER_EMAIL || "akshayprashar6@gmail.com";

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        host: SMTP_HOST, port: 587, secure: false,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });
      await transporter.sendMail({
        from: SMTP_USER, to: OWNER_EMAIL,
        subject: `Contact from ${name} — Spice Route Website`,
        text: emailBody,
      });
    } else {
      console.log("=== CONTACT MESSAGE ===");
      console.log(emailBody);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
