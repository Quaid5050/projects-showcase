const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const { protect, requireApproved, authorize } = require('../middleware/auth');
const { sendEventConfirmation } = require('../utils/email');

// @route GET /api/events - Public upcoming events
router.get('/', async (req, res) => {
  try {
    const query = { isActive: true, date: { $gte: new Date() } };
    const { publicOnly } = req.query;
    if (publicOnly === 'true') query.isPublic = true;

    const events = await Event.find(query)
      .populate('createdBy', 'churchName pastorName')
      .sort({ date: 1 });
    res.json({ success: true, events });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route GET /api/events/:id
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('createdBy', 'churchName pastorName');
    if (!event) return res.status(404).json({ success: false, message: 'Event not found' });
    res.json({ success: true, event });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route POST /api/events - Create event (admin)
router.post('/', protect, authorize('admin', 'superadmin'), async (req, res) => {
  try {
    const event = await Event.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json({ success: true, event });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route PUT /api/events/:id - Update event (admin)
router.put('/:id', protect, authorize('admin', 'superadmin'), async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, event });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route POST /api/events/:id/register - RSVP
router.post('/:id/register', protect, requireApproved, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ success: false, message: 'Event not found' });

    const alreadyRegistered = event.registrations.find(r => r.user.toString() === req.user.id);
    if (alreadyRegistered) return res.status(400).json({ success: false, message: 'Already registered' });

    if (event.capacity && event.registrations.length >= event.capacity) {
      return res.status(400).json({ success: false, message: 'Event is full' });
    }

    event.registrations.push({ user: req.user.id });
    await event.save();

    await sendEventConfirmation(req.user, event);

    res.json({ success: true, message: 'Registered successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @route DELETE /api/events/:id/register - Cancel RSVP
router.delete('/:id/register', protect, requireApproved, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    event.registrations = event.registrations.filter(r => r.user.toString() !== req.user.id);
    await event.save();
    res.json({ success: true, message: 'Registration cancelled' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
