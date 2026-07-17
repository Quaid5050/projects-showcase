import express from 'express';
import Slot from '../models/Slot.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// GET /api/slots — public, available (not booked) future slots grouped by date
router.get('/', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const slots = await Slot.find({ date: { $gte: today }, isBooked: false }).sort({ date: 1, time: 1 });
    res.json({ success: true, slots });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/slots/all — admin, every slot including booked/past
router.get('/all', protect, async (req, res) => {
  try {
    const slots = await Slot.find({}).sort({ date: 1, time: 1 });
    res.json({ success: true, slots });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/slots — admin, add one or many time slots for a date
router.post('/', protect, async (req, res) => {
  try {
    const { date, times } = req.body;
    if (!date || !Array.isArray(times) || times.length === 0) {
      return res.status(400).json({ success: false, message: 'Date and at least one time are required' });
    }

    const created = [];
    for (const time of times) {
      const slot = await Slot.findOneAndUpdate(
        { date, time },
        { date, time },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      created.push(slot);
    }

    res.status(201).json({ success: true, slots: created });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/slots/:id — admin
router.delete('/:id', protect, async (req, res) => {
  try {
    await Slot.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Slot removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
