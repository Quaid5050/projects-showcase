import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface InquiryEmailData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  website?: string;
  businessType: string;
  inquiryCategory: string;
  productOrServiceNeeded: string;
  quantityOrVolume?: string;
  targetMarket?: string;
  message: string;
  source: string;
}

function escapeHtml(value: string | undefined) {
  return (value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br />');
}

export async function sendInquiryEmail(data: InquiryEmailData) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.ADMIN_EMAIL) {
    throw new Error('Missing SMTP configuration');
  }

  const submittedAt = new Date().toLocaleString('en-CA', { timeZone: 'America/Vancouver' });

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background: #06293A; color: #F8FAFC; padding: 30px; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2A8C8C; padding-bottom: 20px;">
        <h1 style="color: #4DB8D5; font-size: 24px; margin: 0;">YUVAAN INTERNATIONAL</h1>
        <p style="color: #D9683A; margin: 8px 0 0; font-size: 14px; letter-spacing: 2px;">NEW TRADE INQUIRY</p>
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr><td colspan="2" style="padding: 8px 0; border-bottom: 1px solid rgba(77,184,213,0.2);">
          <strong style="color: #4DB8D5;">Contact Information</strong>
        </td></tr>
        <tr><td style="padding: 8px 16px; color: #9CA3AF; width: 40%;">Full Name</td>
            <td style="padding: 8px 16px;">${escapeHtml(data.fullName)}</td></tr>
        <tr><td style="padding: 8px 16px; color: #9CA3AF;">Company Name</td>
            <td style="padding: 8px 16px;">${escapeHtml(data.companyName)}</td></tr>
        <tr><td style="padding: 8px 16px; color: #9CA3AF;">Email</td>
            <td style="padding: 8px 16px;"><a href="mailto:${escapeHtml(data.email)}" style="color: #4DB8D5;">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 8px 16px; color: #9CA3AF;">Phone</td>
            <td style="padding: 8px 16px;">${escapeHtml(data.phone)}</td></tr>
        <tr><td style="padding: 8px 16px; color: #9CA3AF;">Country</td>
            <td style="padding: 8px 16px;">${escapeHtml(data.country)}</td></tr>
        ${data.website ? `<tr><td style="padding: 8px 16px; color: #9CA3AF;">Website</td>
            <td style="padding: 8px 16px;"><a href="${escapeHtml(data.website)}" style="color: #4DB8D5;">${escapeHtml(data.website)}</a></td></tr>` : ''}

        <tr><td colspan="2" style="padding: 16px 0 8px; border-bottom: 1px solid rgba(77,184,213,0.2);">
          <strong style="color: #4DB8D5;">Inquiry Details</strong>
        </td></tr>
        <tr><td style="padding: 8px 16px; color: #9CA3AF;">Business Type</td>
            <td style="padding: 8px 16px;">${escapeHtml(data.businessType)}</td></tr>
        <tr><td style="padding: 8px 16px; color: #9CA3AF;">Inquiry Category</td>
            <td style="padding: 8px 16px;">${escapeHtml(data.inquiryCategory)}</td></tr>
        <tr><td style="padding: 8px 16px; color: #9CA3AF;">Product / Service</td>
            <td style="padding: 8px 16px;">${escapeHtml(data.productOrServiceNeeded)}</td></tr>
        ${data.quantityOrVolume ? `<tr><td style="padding: 8px 16px; color: #9CA3AF;">Quantity / Volume</td>
            <td style="padding: 8px 16px;">${escapeHtml(data.quantityOrVolume)}</td></tr>` : ''}
        ${data.targetMarket ? `<tr><td style="padding: 8px 16px; color: #9CA3AF;">Target Market</td>
            <td style="padding: 8px 16px;">${escapeHtml(data.targetMarket)}</td></tr>` : ''}

        <tr><td colspan="2" style="padding: 16px 0 8px; border-bottom: 1px solid rgba(77,184,213,0.2);">
          <strong style="color: #4DB8D5;">Message</strong>
        </td></tr>
        <tr><td colspan="2" style="padding: 12px 16px; background: rgba(255,255,255,0.05); border-radius: 6px;">${escapeHtml(data.message)}</td></tr>

        <tr><td colspan="2" style="padding: 16px 0 8px; border-bottom: 1px solid rgba(77,184,213,0.2);">
          <strong style="color: #4DB8D5;">Submission Info</strong>
        </td></tr>
        <tr><td style="padding: 8px 16px; color: #9CA3AF;">Source Page</td>
            <td style="padding: 8px 16px;">${escapeHtml(data.source)}</td></tr>
        <tr><td style="padding: 8px 16px; color: #9CA3AF;">Date Submitted</td>
            <td style="padding: 8px 16px;">${submittedAt} (PST)</td></tr>
      </table>

      <div style="margin-top: 30px; text-align: center; padding-top: 20px; border-top: 1px solid rgba(77,184,213,0.2);">
        <p style="color: #6B7280; font-size: 12px;">YUVAAN International Trade Canada — pacifictrade2010@gmail.com — (778) 828-3610</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"YUVAAN INTERNATIONAL" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Trade Inquiry - YUVAAN INTERNATIONAL | ${data.inquiryCategory}`,
    html: htmlBody,
    replyTo: data.email,
  });
}
