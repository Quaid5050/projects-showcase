const express = require('express');
const router  = express.Router();
const Lead    = require('../models/Lead');
const { protect } = require('../middleware/authMiddleware');
const { sendClientConfirmation, sendAdminNotification } = require('../middleware/emailService');

// POST /api/leads — Public: submit application form
router.post('/', async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();

    // Fire-and-forget emails
    try {
      await sendClientConfirmation(lead);
      await sendAdminNotification(lead);
    } catch (emailErr) {
      console.error('Email error (non-fatal):', emailErr.message);
    }

    res.status(201).json({ success: true, message: 'Application received!', id: lead._id });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// GET /api/leads — Protected: list all leads with filters
router.get('/', protect, async (req, res) => {
  try {
    const { status, service, search, page = 1, limit = 20 } = req.query;
    const filter = { isArchived: false };
    if (status)  filter.status  = status;
    if (service) filter.service = service;
    if (search) {
      filter.$or = [
        { firstName: new RegExp(search, 'i') },
        { lastName:  new RegExp(search, 'i') },
        { email:     new RegExp(search, 'i') },
        { phone:     new RegExp(search, 'i') },
      ];
    }
    const skip  = (parseInt(page) - 1) * parseInt(limit);
    const total = await Lead.countDocuments(filter);
    const leads = await Lead.find(filter).sort({ createdAt: -1 }).skip(skip).limit(parseInt(limit));
    res.json({ leads, total, page: parseInt(page), pages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/leads/:id — Protected: single lead
router.get('/:id', protect, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/leads/:id — Protected: update status/notes/assignment
router.put('/:id', protect, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// POST /api/leads/:id/notes — Protected: add a note
router.post('/:id/notes', protect, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    lead.notes.push({ text: req.body.text, addedBy: req.user.name });
    await lead.save();
    res.json(lead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/leads/:id — Protected: archive
router.delete('/:id', protect, async (req, res) => {
  try {
    await Lead.findByIdAndUpdate(req.params.id, { isArchived: true });
    res.json({ message: 'Lead archived' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/leads/stats/summary — Protected: dashboard stats
router.get('/stats/summary', protect, async (req, res) => {
  try {
    const total    = await Lead.countDocuments({ isArchived: false });
    const newLeads = await Lead.countDocuments({ status: 'New Lead', isArchived: false });
    const approved = await Lead.countDocuments({ status: 'Approved' });
    const pipeline = await Lead.aggregate([
      { $match: { isArchived: false } },
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);
    const byService = await Lead.aggregate([
      { $match: { isArchived: false } },
      { $group: { _id: '$service', count: { $sum: 1 } } },
    ]);
    res.json({ total, newLeads, approved, pipeline, byService });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
