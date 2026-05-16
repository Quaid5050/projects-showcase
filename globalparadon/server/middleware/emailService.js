const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send confirmation to client
const sendClientConfirmation = async (lead) => {
  await transporter.sendMail({
    from: `"GlobalPardon Pardons & US Waivers" <${process.env.EMAIL_USER}>`,
    to: lead.email,
    subject: 'We Received Your Application — GlobalPardon Pardons',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0B1F3A;padding:24px;text-align:center">
          <h1 style="color:#C9A84C;margin:0;font-size:22px">GlobalPardon Pardons & US Waivers</h1>
        </div>
        <div style="padding:32px;background:#fff;border:1px solid #e5e7eb">
          <h2 style="color:#0B1F3A">Hi ${lead.firstName}, we've received your request!</h2>
          <p style="color:#6b7280;line-height:1.7">Thank you for reaching out. A GlobalPardon specialist will review your case and contact you within <strong>24 business hours</strong>.</p>
          <div style="background:#f9fafb;border-left:4px solid #C9A84C;padding:16px;margin:24px 0">
            <p style="margin:0;color:#374151"><strong>Service Requested:</strong> ${lead.service || 'Not specified'}</p>
            <p style="margin:8px 0 0;color:#374151"><strong>Reference:</strong> CP-${Date.now().toString().slice(-6)}</p>
          </div>
          <p style="color:#6b7280">In the meantime, if you have urgent questions:<br>
            📞 <strong>1-877-226-6612</strong> (Toll-Free)<br>
            ✉️ info@GlobalPardonpardons.ca
          </p>
          <a href="https://GlobalPardonpardons.ca" style="display:inline-block;background:#C9A84C;color:#0B1F3A;padding:12px 24px;text-decoration:none;border-radius:4px;font-weight:bold;margin-top:16px">Visit Our Website</a>
        </div>
        <div style="padding:16px;text-align:center;color:#9ca3af;font-size:12px">
          © 2026 GlobalPardon Pardons & US Waivers — Mississauga, ON<br>
          <a href="#" style="color:#9ca3af">Unsubscribe</a> | <a href="#" style="color:#9ca3af">Privacy Policy</a>
        </div>
      </div>
    `,
  });
};

// Notify admin of new lead
const sendAdminNotification = async (lead) => {
  await transporter.sendMail({
    from: `"GlobalPardon Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `🔔 New Lead: ${lead.firstName} ${lead.lastName} — ${lead.service}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px">
        <h2 style="color:#0B1F3A">New Lead Received</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #e5e7eb">${lead.firstName} ${lead.lastName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #e5e7eb">${lead.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #e5e7eb">${lead.phone || 'N/A'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Province</td><td style="padding:8px;border:1px solid #e5e7eb">${lead.province || 'N/A'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #e5e7eb">${lead.service}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #e5e7eb">${lead.message || 'None'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Source</td><td style="padding:8px;border:1px solid #e5e7eb">${lead.source}</td></tr>
        </table>
        <p style="margin-top:16px;color:#6b7280">Log in to the admin dashboard to manage this lead.</p>
      </div>
    `,
  });
};

module.exports = { sendClientConfirmation, sendAdminNotification };
