import express from 'express';
import nodemailer from 'nodemailer';
import Booking from '../models/Booking.js';
import Slot from '../models/Slot.js';
import { protect } from '../middleware/auth.js';
import { createBookingEvent } from '../utils/googleCalendar.js';

const router = express.Router();

const createTransporter = () => nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// POST /api/booking — public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, preferredDate, preferredTime, message } = req.body;
    if (!name || !email || !phone || !service) {
      return res.status(400).json({ success: false, message: 'Name, email, phone, and service are required' });
    }

    if (preferredDate && preferredTime) {
      const slot = await Slot.findOne({ date: preferredDate, time: preferredTime });
      if (slot && slot.isBooked) {
        return res.status(409).json({ success: false, message: 'This time slot has just been booked. Please choose another.' });
      }
    }

    const booking = await Booking.create({ name, email, phone, service, preferredDate, preferredTime, message });

    if (preferredDate && preferredTime) {
      await Slot.findOneAndUpdate({ date: preferredDate, time: preferredTime }, { isBooked: true });
    }

    let calendarEvent = null;
    try {
      calendarEvent = await createBookingEvent(booking);
      if (calendarEvent) {
        booking.googleEventId = calendarEvent.eventId;
        booking.meetLink = calendarEvent.meetLink;
        booking.calendarEventLink = calendarEvent.htmlLink;
        await booking.save();
      }
    } catch (calendarError) {
      console.error('Google Calendar event creation failed:', calendarError.message);
    }

    try {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: `"Ray Stephens Tax Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_RECEIVER,
        subject: `New Booking Request — ${name} (${service})`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;">
            <h2 style="color:#5C3D14;">New Booking Request</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${name}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${email}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Phone:</td><td style="padding:8px;">${phone}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Service:</td><td style="padding:8px;">${service}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Preferred Date:</td><td style="padding:8px;">${preferredDate || 'Flexible'}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Preferred Time:</td><td style="padding:8px;">${preferredTime || 'Flexible'}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Notes:</td><td style="padding:8px;">${message || 'None'}</td></tr>
            </table>
          </div>
        `,
      });

      await transporter.sendMail({
        from: `"Ray Stephens Tax Services" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Booking Request Received — Ray Stephens Tax Services',
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;">
            <h2 style="color:#5C3D14;">Booking Confirmed, ${name}!</h2>
            <p>We've received your booking request for <strong>${service}</strong>.</p>
            <p>We will confirm your appointment within 1 business day.</p>
            ${calendarEvent?.meetLink ? `<p>A calendar invite has been sent to your email with a Google Meet link: <a href="${calendarEvent.meetLink}">${calendarEvent.meetLink}</a></p>` : ''}
            <p>Questions? Call us: <strong>(416) 824-9772</strong></p>
            <br/>
            <p style="color:#6B7280;font-size:14px;">Ray Stephens Tax Services | raystephens.ca</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Booking email notification failed:', emailError.message);
    }

    res.status(201).json({ success: true, message: 'Booking submitted successfully', id: booking._id });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit booking. Please try again.' });
  }
});

// GET /api/booking — admin only
router.get('/', protect, async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const filter = status ? { status } : {};
    const bookings = await Booking.find(filter).sort({ createdAt: -1 }).limit(limit * 1).skip((page - 1) * limit);
    const total = await Booking.countDocuments(filter);
    res.json({ success: true, bookings, total, pages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH /api/booking/:id — admin only
router.patch('/:id', protect, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
