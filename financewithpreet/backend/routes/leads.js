const router = require('express').Router()
const Lead = require('../models/Lead')
const auth = require('../middleware/auth')
const { sendAdminNotification } = require('../config/mailer')

router.get('/', auth, async (req, res) => {
  try { res.json(await Lead.find().sort({ createdAt: -1 })) } catch (e) { res.status(500).json({ error: e.message }) }
})

router.post('/', async (req, res) => {
  try {
    const lead = await Lead.create(req.body)

    // Email notification to admin
    await sendAdminNotification(
      `📩 New Contact Message — ${lead.name}`,
      `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #060d1f; color: #e5e7eb; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0a1128, #111c3a); padding: 28px 32px; border-bottom: 2px solid #f59e0b;">
          <h2 style="margin: 0; color: #f59e0b; font-size: 20px;">📩 New Contact Message</h2>
          <p style="margin: 6px 0 0; color: #9ca3af; font-size: 13px;">Finance With Preet — Admin Notification</p>
        </div>
        <div style="padding: 28px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #ffffff; font-weight: 600; font-size: 15px;">${lead.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top; border-top: 1px solid #1a2a52;">Email</td>
              <td style="padding: 10px 0; color: #fbbf24; font-size: 14px; border-top: 1px solid #1a2a52;">
                <a href="mailto:${lead.email}" style="color: #fbbf24;">${lead.email}</a>
              </td>
            </tr>
            ${lead.phone ? `
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top; border-top: 1px solid #1a2a52;">Phone</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px; border-top: 1px solid #1a2a52;">
                <a href="tel:${lead.phone}" style="color: #ffffff;">${lead.phone}</a>
              </td>
            </tr>` : ''}
            ${lead.subject ? `
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top; border-top: 1px solid #1a2a52;">Subject</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px; border-top: 1px solid #1a2a52;">${lead.subject}</td>
            </tr>` : ''}
            ${lead.message ? `
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top; border-top: 1px solid #1a2a52;">Message</td>
              <td style="padding: 10px 0; color: #d1d5db; font-size: 14px; line-height: 1.6; border-top: 1px solid #1a2a52;">${lead.message}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top; border-top: 1px solid #1a2a52;">Received</td>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; border-top: 1px solid #1a2a52;">${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} EST</td>
            </tr>
          </table>
        </div>
        <div style="padding: 20px 32px; background: #0a1128; text-align: center;">
          <a href="${process.env.FRONTEND_URL}/admin/leads" 
             style="display: inline-block; background: #f59e0b; color: #060d1f; font-weight: 700; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 14px;">
            View in Admin Panel →
          </a>
        </div>
      </div>
      `
    )

    res.status(201).json(lead)
  } catch (e) { res.status(400).json({ error: e.message }) }
})

router.patch('/:id', auth, async (req, res) => {
  try { res.json(await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true })) } catch (e) { res.status(400).json({ error: e.message }) }
})
router.delete('/:id', auth, async (req, res) => {
  try { await Lead.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }) } catch (e) { res.status(400).json({ error: e.message }) }
})

module.exports = router
