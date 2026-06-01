import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fname, lname, email, phone, company, service, message, how } = body;

    if (!fname || !lname || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const GMAIL_USER = process.env.GMAIL_USER!;
    const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD!;

    console.log("Attempting email with user:", GMAIL_USER);
    console.log("Pass length:", GMAIL_PASS?.length);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP verified OK");

    const submittedAt = new Date().toLocaleString("en-CA", {
      timeZone: "America/Toronto",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Notification to AEM
    await transporter.sendMail({
      from: `"AEM Website" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: email,
      subject: `New Inquiry: ${fname} ${lname} — ${service || "General"}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#f4f7fb;padding:32px;border-radius:12px;">
          <div style="background:#0a1f44;border-radius:10px;padding:28px 32px;margin-bottom:24px;">
            <h1 style="color:#fff;font-size:22px;margin:0 0 4px;">AEM Quality ISO Consulting</h1>
            <p style="color:#3b82f6;font-size:12px;margin:0;letter-spacing:2px;text-transform:uppercase;">New Website Inquiry</p>
          </div>
          <div style="background:#fff;border-radius:10px;padding:32px;border:1px solid #e4eaf5;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f4f8;width:140px;color:#8492a6;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#0d1b35;font-size:15px;font-weight:600;">${fname} ${lname}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#8492a6;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0f4f8;font-size:15px;"><a href="mailto:${email}" style="color:#1a56db;">${email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#8492a6;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#0d1b35;font-size:15px;">${phone || "—"}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#8492a6;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Company</td><td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#0d1b35;font-size:15px;">${company || "—"}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#8492a6;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Service</td><td style="padding:10px 0;border-bottom:1px solid #f0f4f8;"><span style="background:#dbeafe;color:#1a56db;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700;">${service || "Not specified"}</span></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#8492a6;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Found Via</td><td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#0d1b35;font-size:15px;">${how || "—"}</td></tr>
              <tr><td style="padding:10px 0;color:#8492a6;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Submitted</td><td style="padding:10px 0;color:#0d1b35;font-size:14px;">${submittedAt} (ET)</td></tr>
            </table>
            <div style="margin-top:24px;">
              <p style="color:#8492a6;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Message</p>
              <div style="background:#f4f7fb;border-radius:8px;padding:18px;color:#0d1b35;font-size:15px;line-height:1.7;border-left:4px solid #1a56db;">${message.replace(/\n/g, "<br/>")}</div>
            </div>
            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#1a56db,#2563eb);color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:13px;letter-spacing:1px;">Reply to ${fname} →</a>
            </div>
          </div>
          <p style="text-align:center;margin-top:20px;color:#8492a6;font-size:12px;">AEM Quality ISO Consulting · Montréal, Québec, Canada</p>
        </div>
      `,
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Abdelali El-Magueri – AEM Quality ISO" <${GMAIL_USER}>`,
      to: email,
      subject: `Thank you ${fname} — We received your inquiry`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#0a1f44;padding:32px;border-radius:12px 12px 0 0;text-align:center;">
            <h1 style="color:#fff;font-size:24px;margin:0 0 6px;">AEM Quality ISO Consulting</h1>
            <p style="color:#3b82f6;margin:0;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Compliance · Quality · Excellence</p>
          </div>
          <div style="background:#fff;padding:36px;border:1px solid #e4eaf5;border-top:none;border-radius:0 0 12px 12px;">
            <h2 style="color:#0a1f44;font-size:20px;margin:0 0 16px;">Hello ${fname},</h2>
            <p style="color:#3d4f6b;font-size:15px;line-height:1.75;margin-bottom:16px;">Thank you for reaching out to <strong>AEM Quality ISO Consulting</strong>. We have received your message and Abdelali will personally get back to you within <strong>24 hours</strong>.</p>
            <p style="color:#3d4f6b;font-size:15px;line-height:1.75;margin-bottom:28px;">In the meantime, feel free to call us at <strong>+1 514 552 6936</strong>.</p>
            <div style="background:#f4f7fb;border-left:4px solid #1a56db;padding:18px 20px;border-radius:0 8px 8px 0;margin-bottom:28px;">
              <p style="color:#8492a6;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Your Service Interest</p>
              <p style="color:#0a1f44;font-size:15px;font-weight:600;margin:0;">${service || "General Inquiry"}</p>
            </div>
            <p style="color:#3d4f6b;font-size:14px;line-height:1.7;border-top:1px solid #e4eaf5;padding-top:24px;font-style:italic;">"Our mission is to simplify ISO 9001 certification through practical, efficient and results-driven support. <strong style="color:#1a56db;">Zero to Certified. Efficiently.</strong>"</p>
            <p style="color:#0a1f44;font-size:14px;font-weight:700;margin-top:20px;">Abdelali El-Magueri<br/><span style="color:#8492a6;font-weight:400;">Founder & Principal ISO Consultant</span></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("EMAIL SEND ERROR:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}