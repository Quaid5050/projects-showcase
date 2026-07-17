import nodemailer from "nodemailer";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "Afreensd123@gmail.com";
const SMTP_USER = process.env.SMTP_USER || "Afreensd123@gmail.com";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // TLS via STARTTLS on port 587
  auth: {
    user: SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export interface BookingEmailData {
  name: string;
  phone: string;
  email?: string;
  patientType: string;
  concernType: string;
  preferredDate?: string;
  message: string;
}

export async function sendBookingEmail(data: BookingEmailData): Promise<void> {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Georgia, serif; background: #FFF8EF; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #FFFCF8; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(122,31,61,0.1); }
        .header { background: linear-gradient(135deg, #7A1F3D, #4B1025); padding: 32px; text-align: center; }
        .header h1 { color: #F6C85F; font-size: 24px; margin: 0; letter-spacing: 1px; }
        .header p { color: #FFE8F0; margin: 8px 0 0; font-size: 14px; }
        .body { padding: 32px; }
        .body h2 { color: #7A1F3D; font-size: 18px; margin-bottom: 20px; }
        .field { margin-bottom: 16px; padding: 12px 16px; background: #FFE8F0; border-radius: 8px; border-left: 3px solid #F7A8C4; }
        .field label { font-size: 11px; font-weight: 700; color: #7A1F3D; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px; }
        .field span { font-size: 15px; color: #2B1821; }
        .footer { padding: 20px 32px; background: #FFF0F5; text-align: center; font-size: 12px; color: #9B3057; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🌙 Moon Homeopathy</h1>
          <p>New Booking Inquiry</p>
        </div>
        <div class="body">
          <h2>New Consultation Inquiry</h2>
          <div class="field"><label>Name</label><span>${data.name}</span></div>
          <div class="field"><label>Phone</label><span>${data.phone}</span></div>
          ${data.email ? `<div class="field"><label>Email</label><span>${data.email}</span></div>` : ""}
          <div class="field"><label>Patient Type</label><span>${data.patientType}</span></div>
          <div class="field"><label>Concern Type</label><span>${data.concernType}</span></div>
          ${data.preferredDate ? `<div class="field"><label>Preferred Date</label><span>${data.preferredDate}</span></div>` : ""}
          <div class="field"><label>Message</label><span>${data.message}</span></div>
        </div>
        <div class="footer">
          Moon Homeopathy — Toronto, Canada &nbsp;|&nbsp; WhatsApp: +1 647 781 9461
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"Moon Homeopathy Website" <${SMTP_USER}>`,
    to: ADMIN_EMAIL,
    subject: "New Booking Inquiry - Moon Homeopathy",
    html: htmlContent,
  });
}

export async function sendContactEmail(data: {
  name: string;
  phone: string;
  email?: string;
  message: string;
}): Promise<void> {
  await transporter.sendMail({
    from: `"Moon Homeopathy Website" <${SMTP_USER}>`,
    to: ADMIN_EMAIL,
    subject: "New Contact Inquiry - Moon Homeopathy",
    html: `
      <div style="font-family: Georgia, serif; padding: 24px; background: #FFF8EF; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7A1F3D;">New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
        <p><strong>Message:</strong> ${data.message}</p>
      </div>
    `,
  });
}
