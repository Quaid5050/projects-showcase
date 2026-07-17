import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

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

      // Notify owner of new lead
      await transporter.sendMail({
        from: SMTP_USER, to: OWNER_EMAIL,
        subject: `New Lead: ${name} signed up for 10% discount`,
        text: `New subscriber:\nName: ${name}\nEmail: ${email}`,
      });

      // Send discount code to customer
      await transporter.sendMail({
        from: SMTP_USER, to: email,
        subject: "Your 10% Discount — Spice Route",
        text: `Hi ${name}!\n\nThank you for joining Spice Route.\n\nYour 10% discount code: WELCOME10\n\nUse this on your first order. Just mention it in the order notes or contact us with your order.\n\nShop now: https://yourwebsite.com/shop\n\nHappy cooking!\nSpice Route Team\n+1 437 243 7862`,
      });
    } else {
      console.log(`New discount signup: ${name} <${email}>`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Discount signup error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
