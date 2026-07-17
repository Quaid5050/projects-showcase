import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"876 Tree Removal Website" <${process.env.EMAIL_USER}>`,
      to: "876treeremoval@gmail.com",
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #F5F5F0; padding: 32px;">
          <div style="border-bottom: 3px solid #D4A017; padding-bottom: 20px; margin-bottom: 24px;">
            <h2 style="color: #D4A017; margin: 0; font-size: 1.4rem;">New Quote Request — 876 Tree Removal</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #D4A017; font-weight: bold; width: 140px;">Name:</td><td style="padding: 10px 0; color: #F5F5F0;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: #D4A017; font-weight: bold;">Email:</td><td style="padding: 10px 0; color: #F5F5F0;">${email}</td></tr>
            <tr><td style="padding: 10px 0; color: #D4A017; font-weight: bold;">Phone:</td><td style="padding: 10px 0; color: #F5F5F0;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding: 10px 0; color: #D4A017; font-weight: bold;">Service:</td><td style="padding: 10px 0; color: #F5F5F0;">${service || "Not specified"}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 20px; background: #1C1C1C; border-left: 3px solid #D4A017;">
            <h3 style="color: #D4A017; margin: 0 0 12px;">Message:</h3>
            <p style="color: #F5F5F0; line-height: 1.7; margin: 0;">${message}</p>
          </div>
          <p style="margin-top: 24px; color: rgba(245,245,240,0.5); font-size: 0.8rem;">This message was sent from the 876treeremoval.com contact form.</p>
        </div>
      `,
    });

    // Auto-reply to customer
    await transporter.sendMail({
      from: `"876 Tree Removal" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your request — 876 Tree Removal",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #F5F5F0; padding: 32px;">
          <div style="border-bottom: 3px solid #D4A017; padding-bottom: 20px; margin-bottom: 24px;">
            <h2 style="color: #D4A017;">876 Tree Removal</h2>
          </div>
          <h3 style="color: #F5F5F0;">Hi ${name},</h3>
          <p style="color: rgba(245,245,240,0.75); line-height: 1.8;">Thank you for reaching out to 876 Tree Removal. We have received your request and will get back to you shortly with a free quote.</p>
          <p style="color: rgba(245,245,240,0.75); line-height: 1.8;">For urgent matters, you can reach us directly:</p>
          <p style="color: #D4A017; font-size: 1.1rem; font-weight: bold;">📞 876-478-1248</p>
          <p style="color: rgba(245,245,240,0.5); font-size: 0.85rem; margin-top: 32px;">Jamaica&apos;s Trusted Tree Service Professionals</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try calling us directly." }, { status: 500 });
  }
}
