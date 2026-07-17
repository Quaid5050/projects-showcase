import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

const createTransporter = () => nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// POST /api/contact — public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required' });
    }

    // Save to DB
    const contact = await Contact.create({ name, email, phone, service, message });

    // Send email notification (non-blocking — contact is already saved above)
    try {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: `"Ray Stephens Tax Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_RECEIVER,
        subject: `New Contact Form Submission — ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;">
            <h2 style="color:#5C3D14;">New Contact Inquiry</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Name:</td><td style="padding:8px;">${name}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Email:</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Phone:</td><td style="padding:8px;">${phone || 'Not provided'}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Service:</td><td style="padding:8px;">${service || 'Not specified'}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Message:</td><td style="padding:8px;">${message}</td></tr>
            </table>
          </div>
        `,
      });

      // Auto-reply to sender
      await transporter.sendMail({
        from: `"Ray Stephens Tax Services" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Thank you for contacting Ray Stephens Tax Services',
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;">
            <h2 style="color:#5C3D14;">Thank You, ${name}!</h2>
            <p>We have received your inquiry and will get back to you within 1–2 business days.</p>
            <p>For urgent matters, please call us at <strong>(416) 824-9772</strong>.</p>
            <br/>
            <p style="color:#6B7280;font-size:14px;">Ray Stephens Tax Services<br/>raystephens.ca</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Contact email notification failed:', emailError.message);
    }

    res.status(201).json({ success: true, message: 'Message sent successfully', id: contact._id });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
});

// GET /api/contact — admin only
router.get('/', protect, async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const filter = status ? { status } : {};
    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    const total = await Contact.countDocuments(filter);
    res.json({ success: true, contacts, total, pages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH /api/contact/:id — admin only
router.patch('/:id', protect, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
