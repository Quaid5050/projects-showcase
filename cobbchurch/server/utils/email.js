const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const sendEmail = async ({ to, subject, html }) => {
  try {
    await transporter.sendMail({
      from: `"${process.env.FROM_NAME || 'Cobb Church Network'}" <${process.env.FROM_EMAIL || 'noreply@cobbchurchnetwork.org'}>`,
      to,
      subject,
      html
    });
  } catch (err) {
    console.error('Email send error:', err.message);
  }
};

// Email templates
exports.sendApplicationReceived = async (user) => {
  await sendEmail({
    to: user.email,
    subject: 'Request Received — Cobb Church Network',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a2744; padding: 30px; text-align: center;">
          <h1 style="color: #d4a853; margin: 0;">Cobb Church Network</h1>
          <p style="color: #fff; margin: 5px 0;">Stronger Churches. Stronger Community.</p>
        </div>
        <div style="padding: 30px; background: #fff;">
          <h2>Request Received</h2>
          <p>Dear Pastor ${user.pastorName},</p>
          <p>Thank you for requesting access to Cobb Church Network.</p>
          <p>Our team will review your application for <strong>${user.churchName}</strong> and follow up soon.</p>
          <p>We appreciate your desire to help strengthen churches and community throughout Cobb County.</p>
          <p style="color: #888; margin-top: 30px;">Together, we make an impact.</p>
        </div>
        <div style="background: #1a2744; padding: 20px; text-align: center;">
          <p style="color: #888; margin: 0; font-size: 12px;">© 2026 Cobb Church Network. All Rights Reserved.</p>
        </div>
      </div>
    `
  });
};

exports.sendApprovalEmail = async (user) => {
  await sendEmail({
    to: user.email,
    subject: 'Welcome to Cobb Church Network',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a2744; padding: 30px; text-align: center;">
          <h1 style="color: #d4a853; margin: 0;">Cobb Church Network</h1>
        </div>
        <div style="padding: 30px; background: #fff;">
          <h2 style="color: #d4a853;">Welcome, Pastor ${user.pastorName}!</h2>
          <p>Congratulations — <strong>${user.churchName}</strong> has been approved.</p>
          <p>You now have access to the Cobb Church Network private platform.</p>
          <p>Use your dashboard to update your church profile, share resources, submit needs, view alerts, and connect with other churches.</p>
          <a href="${process.env.CLIENT_URL}/login" style="display: inline-block; background: #d4a853; color: #fff; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin-top: 20px;">Login to Your Dashboard</a>
          <p style="margin-top: 30px;">We look forward to building stronger relationships and stronger community impact together.</p>
        </div>
        <div style="background: #1a2744; padding: 20px; text-align: center;">
          <p style="color: #888; margin: 0; font-size: 12px;">© 2026 Cobb Church Network. All Rights Reserved.</p>
        </div>
      </div>
    `
  });
};

exports.sendRejectionEmail = async (user, reason) => {
  await sendEmail({
    to: user.email,
    subject: 'Application Update — Cobb Church Network',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a2744; padding: 30px; text-align: center;">
          <h1 style="color: #d4a853; margin: 0;">Cobb Church Network</h1>
        </div>
        <div style="padding: 30px; background: #fff;">
          <h2>Application Update</h2>
          <p>Dear Pastor ${user.pastorName},</p>
          <p>Thank you for your interest in Cobb Church Network.</p>
          ${reason ? `<p>After review, we are unable to approve your application at this time. ${reason}</p>` : '<p>After review, we are unable to approve your application at this time.</p>'}
          <p>Please feel free to contact us for more information.</p>
        </div>
        <div style="background: #1a2744; padding: 20px; text-align: center;">
          <p style="color: #888; margin: 0; font-size: 12px;">© 2026 Cobb Church Network. All Rights Reserved.</p>
        </div>
      </div>
    `
  });
};

exports.sendCrisisAlert = async (emails, crisis) => {
  for (const email of emails) {
    await sendEmail({
      to: email,
      subject: 'Crisis Response Alert — Cobb Church Network',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #c0392b; padding: 30px; text-align: center;">
            <h1 style="color: #fff; margin: 0;">⚠️ Crisis Response Alert</h1>
            <p style="color: #fff; margin: 5px 0;">Cobb Church Network</p>
          </div>
          <div style="padding: 30px; background: #fff;">
            <h2>${crisis.title}</h2>
            <p><strong>Urgency:</strong> ${crisis.urgency.toUpperCase()}</p>
            <p><strong>Type:</strong> ${crisis.type}</p>
            <p>${crisis.description}</p>
            <a href="${process.env.CLIENT_URL}/dashboard/crisis" style="display: inline-block; background: #c0392b; color: #fff; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin-top: 20px;">View Alert & Respond</a>
            <p style="margin-top: 30px; color: #888;">Thank you for serving together.</p>
          </div>
        </div>
      `
    });
  }
};

exports.sendEventConfirmation = async (user, event) => {
  await sendEmail({
    to: user.email,
    subject: 'Event Registration Confirmed — Cobb Church Network',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a2744; padding: 30px; text-align: center;">
          <h1 style="color: #d4a853; margin: 0;">Cobb Church Network</h1>
        </div>
        <div style="padding: 30px; background: #fff;">
          <h2>Event Registration Confirmed</h2>
          <p>Dear Pastor ${user.pastorName},</p>
          <p>Thank you for registering for <strong>${event.title}</strong>.</p>
          <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p><strong>Location:</strong> ${event.isVirtual ? 'Virtual Event' : event.location}</p>
          <p>We look forward to seeing you at the upcoming Cobb Church Network gathering.</p>
          <p>Together, we're building stronger churches and stronger community.</p>
        </div>
        <div style="background: #1a2744; padding: 20px; text-align: center;">
          <p style="color: #888; margin: 0; font-size: 12px;">© 2026 Cobb Church Network. All Rights Reserved.</p>
        </div>
      </div>
    `
  });
};

exports.sendContactEmail = async (data) => {
  await sendEmail({
    to: process.env.FROM_EMAIL || 'admin@cobbchurchnetwork.org',
    subject: `Contact Form: ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
  });
};

module.exports = { sendApplicationReceived: exports.sendApplicationReceived, sendApprovalEmail: exports.sendApprovalEmail, sendRejectionEmail: exports.sendRejectionEmail, sendCrisisAlert: exports.sendCrisisAlert, sendEventConfirmation: exports.sendEventConfirmation, sendContactEmail: exports.sendContactEmail, sendEmail };
