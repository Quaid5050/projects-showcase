const router = require('express').Router()
const Subscriber = require('../models/Subscriber')
const auth = require('../middleware/auth')
const { sendAdminNotification } = require('../config/mailer')

router.get('/', auth, async (req, res) => {
  try { res.json(await Subscriber.find().sort({ createdAt: -1 })) } catch (e) { res.status(500).json({ error: e.message }) }
})

router.post('/', async (req, res) => {
  try {
    const sub = await Subscriber.create({ email: req.body.email })

    // Get total subscriber count for context
    const total = await Subscriber.countDocuments()

    // Email notification to admin
    await sendAdminNotification(
      `🎉 New Newsletter Subscriber — ${sub.email}`,
      `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #060d1f; color: #e5e7eb; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0a1128, #111c3a); padding: 28px 32px; border-bottom: 2px solid #f59e0b;">
          <h2 style="margin: 0; color: #f59e0b; font-size: 20px;">🎉 New Newsletter Subscriber</h2>
          <p style="margin: 6px 0 0; color: #9ca3af; font-size: 13px;">Finance With Preet — Admin Notification</p>
        </div>
        <div style="padding: 32px; text-align: center;">
          <div style="background: #0a1128; border: 1px solid #1a2a52; border-radius: 10px; padding: 24px; margin-bottom: 20px;">
            <p style="margin: 0 0 6px; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">New Subscriber</p>
            <p style="margin: 0; color: #fbbf24; font-size: 20px; font-weight: 700;">
              <a href="mailto:${sub.email}" style="color: #fbbf24; text-decoration: none;">${sub.email}</a>
            </p>
          </div>
          <div style="display: inline-block; background: #f59e0b20; border: 1px solid #f59e0b40; border-radius: 8px; padding: 10px 24px;">
            <p style="margin: 0; color: #fbbf24; font-size: 14px;">
              📊 Total Subscribers: <strong>${total}</strong>
            </p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            Subscribed on ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} EST
          </p>
        </div>
        <div style="padding: 20px 32px; background: #0a1128; text-align: center;">
          <a href="${process.env.FRONTEND_URL}/admin/subscribers"
             style="display: inline-block; background: #f59e0b; color: #060d1f; font-weight: 700; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 14px;">
            View All Subscribers →
          </a>
        </div>
      </div>
      `
    )

    res.status(201).json(sub)
  } catch (e) {
    if (e.code === 11000) return res.status(200).json({ message: 'Already subscribed' })
    res.status(400).json({ error: e.message })
  }
})

router.delete('/:id', auth, async (req, res) => {
  try { await Subscriber.findByIdAndDelete(req.params.id); res.json({ message: 'Removed' }) } catch (e) { res.status(400).json({ error: e.message }) }
})

module.exports = router
