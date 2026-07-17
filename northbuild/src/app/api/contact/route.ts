import nodemailer from "nodemailer";

export async function POST(request: Request) {
  let body: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    address?: string;
    interest?: string;
    serviceType?: string;
    message?: string;
  };

  try {
    body = await request.json();
  } catch (err) {
    console.error("[contact] failed to parse request body:", err);
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, address, interest, serviceType, message } = body;

  if (!firstName || !lastName || !email || !phone || !interest || !serviceType) {
    console.warn("[contact] rejected submission, missing required fields:", body);
    return Response.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.CONTACT_TO_EMAIL || gmailUser;

  if (!gmailUser || !gmailAppPassword) {
    console.error(
      "[contact] email not sent: GMAIL_USER or GMAIL_APP_PASSWORD is missing from environment variables."
    );
    return Response.json(
      { ok: false, error: "Email service is not configured. Please contact us directly by phone." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.verify();
  } catch (err) {
    console.error("[contact] Gmail app password auth failed, email NOT sent:", err);
    return Response.json(
      { ok: false, error: "Could not authenticate with the email service." },
      { status: 500 }
    );
  }

  const mailBody = `
New contact form submission from Northbuilt Door & Dock website

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Address: ${address || "-"}
Interested In: ${interest}
Service Type: ${serviceType}

Message:
${message || "-"}
`.trim();

  try {
    const info = await transporter.sendMail({
      from: `"Northbuilt Website" <${gmailUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Submission — ${firstName} ${lastName}`,
      text: mailBody,
    });
    console.log("[contact] email sent successfully:", info.messageId);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] sendMail failed, email NOT sent:", err);
    return Response.json(
      { ok: false, error: "Failed to send email. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
