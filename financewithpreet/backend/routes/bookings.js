const router = require('express').Router()
const Booking = require('../models/Booking')
const auth = require('../middleware/auth')
const { sendAdminNotification } = require('../config/mailer')

router.get('/', auth, async (req, res) => {
  try { res.json(await Booking.find().sort({ createdAt: -1 })) } catch (e) { res.status(500).json({ error: e.message }) }
})

router.post('/', async (req, res) => {
  try {
    const booking = await Booking.create(req.body)

    // Email notification to admin
    await sendAdminNotification(
      `📅 New Booking Request — ${booking.name}`,
      `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #060d1f; color: #e5e7eb; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0a1128, #111c3a); padding: 28px 32px; border-bottom: 2px solid #f59e0b;">
          <h2 style="margin: 0; color: #f59e0b; font-size: 20px;">📅 New Booking Request</h2>
          <p style="margin: 6px 0 0; color: #9ca3af; font-size: 13px;">Finance With Preet — Admin Notification</p>
        </div>
        <div style="padding: 28px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #ffffff; font-weight: 600; font-size: 15px;">${booking.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top; border-top: 1px solid #1a2a52;">Email</td>
              <td style="padding: 10px 0; border-top: 1px solid #1a2a52;">
                <a href="mailto:${booking.email}" style="color: #fbbf24;">${booking.email}</a>
              </td>
            </tr>
            ${booking.phone ? `
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top; border-top: 1px solid #1a2a52;">Phone</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px; border-top: 1px solid #1a2a52;">
                <a href="tel:${booking.phone}" style="color: #ffffff;">${booking.phone}</a>
              </td>
            </tr>` : ''}
            ${booking.service ? `
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top; border-top: 1px solid #1a2a52;">Service</td>
              <td style="padding: 10px 0; border-top: 1px solid #1a2a52;">
                <span style="background: #f59e0b20; border: 1px solid #f59e0b40; color: #fbbf24; padding: 3px 10px; border-radius: 20px; font-size: 13px;">${booking.service}</span>
              </td>
            </tr>` : ''}
            ${booking.date ? `
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top; border-top: 1px solid #1a2a52;">Preferred Date</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px; border-top: 1px solid #1a2a52;">📆 ${booking.date}${booking.time ? ` at ${booking.time}` : ''}</td>
            </tr>` : ''}
            ${booking.language ? `
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top; border-top: 1px solid #1a2a52;">Language</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px; border-top: 1px solid #1a2a52;">${booking.language}</td>
            </tr>` : ''}
            ${booking.message ? `
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top; border-top: 1px solid #1a2a52;">Message</td>
              <td style="padding: 10px 0; color: #d1d5db; font-size: 14px; line-height: 1.6; border-top: 1px solid #1a2a52;">${booking.message}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top; border-top: 1px solid #1a2a52;">Received</td>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; border-top: 1px solid #1a2a52;">${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} EST</td>
            </tr>
          </table>
        </div>
        <div style="padding: 20px 32px; background: #0a1128; text-align: center;">
          <a href="${process.env.FRONTEND_URL}/admin/bookings"
             style="display: inline-block; background: #f59e0b; color: #060d1f; font-weight: 700; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 14px;">
            View in Admin Panel →
          </a>
        </div>
      </div>
      `
    )

    res.status(201).json(booking)
  } catch (e) { res.status(400).json({ error: e.message }) }
})

router.patch('/:id', auth, async (req, res) => {
  try { res.json(await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true })) } catch (e) { res.status(400).json({ error: e.message }) }
})
router.delete('/:id', auth, async (req, res) => {
  try { await Booking.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }) } catch (e) { res.status(400).json({ error: e.message }) }
})

module.exports = router
