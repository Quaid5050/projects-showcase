const nodemailer = require('nodemailer')

// Gmail transporter using App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

/**
 * Send notification email to admin
 * @param {string} subject
 * @param {string} html
 */
async function sendAdminNotification(subject, html) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.warn('⚠️  Email not configured — skipping notification')
    return
  }
  try {
    await transporter.sendMail({
      from: `"Finance With Preet" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,          // send to yourself
      subject,
      html,
    })
    console.log(`✉️  Email sent: ${subject}`)
  } catch (err) {
    console.error('Email send error:', err.message)
    // Never throw — don't let email failure break the API response
  }
}

module.exports = { sendAdminNotification }
