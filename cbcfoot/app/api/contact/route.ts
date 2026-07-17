import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    // Configure transporter using Gmail App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,       // e.g. cbcfoot@gmail.com
        pass: process.env.EMAIL_APP_PASS,   // 16-char Gmail App Password
      },
    });

    const mailOptions = {
      from: `"CBC Foot Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || "cbcfoot@live.ca",
      replyTo: email,
      subject: `New Enquiry from ${name} — CBC Foot Products`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #1B4332; color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Website Enquiry</h1>
            <p style="margin: 8px 0 0; color: #D4A017; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em;">CBC Foot Products Ltd.</p>
          </div>
          <div style="background-color: #f9f5ef; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 120px; font-size: 14px; font-weight: bold; text-transform: uppercase;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; font-weight: bold; text-transform: uppercase;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #1B4332;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; font-weight: bold; text-transform: uppercase;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111;">${phone || "Not provided"}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; font-weight: bold; text-transform: uppercase;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111;">${service || "Not specified"}</td></tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="color: #6b7280; font-size: 14px; font-weight: bold; text-transform: uppercase; margin-bottom: 8px;">Message</p>
              <div style="background: white; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; color: #374151; line-height: 1.7;">
                ${message.replace(/\n/g, "<br/>")}
              </div>
            </div>
          </div>
          <div style="background-color: #1B4332; color: rgba(255,255,255,0.6); padding: 16px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px;">
            Sent from CBC Foot Products website · cbcfoot@live.ca · +1 403 259 2474
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Auto-reply to the client
    const autoReplyOptions = {
      from: `"Lance Colins — CBC Foot Products" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting CBC Foot Products",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #1B4332; color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">Thank You, ${name}!</h1>
            <p style="color: #D4A017; margin: 8px 0 0; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;">CBC Foot Products Ltd.</p>
          </div>
          <div style="padding: 30px; border: 1px solid #e5e7eb; border-top: none; background: #f9f5ef;">
            <p style="color: #374151; line-height: 1.8;">Hi ${name},</p>
            <p style="color: #374151; line-height: 1.8;">Thank you for reaching out. I received your message and will be in touch shortly.</p>
            <p style="color: #374151; line-height: 1.8;">For a faster response, please call me directly:</p>
            <div style="background: #1B4332; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;">
              <a href="tel:+14032592474" style="color: #D4A017; font-size: 24px; font-weight: bold; text-decoration: none;">+1 403 259 2474</a>
            </div>
            <p style="color: #374151; line-height: 1.8;">As a reminder, your foot and back assessment is completely FREE — no time limits, no obligations.</p>
            <p style="color: #374151; line-height: 1.8; margin-top: 20px;">— Lance Colins<br/><span style="color: #6b7280; font-size: 14px;">Founder, CBC Foot Products Ltd.</span></p>
          </div>
          <div style="background-color: #1B4332; color: rgba(255,255,255,0.5); padding: 16px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px;">
            © CBC Foot Products Ltd. · Calgary, Alberta, Canada
          </div>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again or call us directly." }, { status: 500 });
  }
}
