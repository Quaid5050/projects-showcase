import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Log the submission (in production you'd send an email here via nodemailer)
    console.log('📩 New Contact Form Submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // In production, integrate nodemailer here:
    // const transporter = nodemailer.createTransporter({ ... });
    // await transporter.sendMail({
    //   from: process.env.SMTP_FROM,
    //   to: 'thackerdalescott@gmail.com',
    //   subject: `FTR Contact: ${subject} from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    // });

    return NextResponse.json({ success: true, message: 'Message received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
