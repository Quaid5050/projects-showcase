import express from 'express';
import Contact from '../models/Contact.js';
import Booking from '../models/Booking.js';
import Service from '../models/Service.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// GET /api/admin/stats
router.get('/stats', protect, async (req, res) => {
  try {
    const [totalContacts, newContacts, totalBookings, pendingBookings, totalServices] = await Promise.all([
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'new' }),
      Booking.countDocuments(),
      Booking.countDocuments({ status: 'pending' }),
      Service.countDocuments({ isActive: true }),
    ]);

    const recentContacts = await Contact.find().sort({ createdAt: -1 }).limit(5);
    const recentBookings = await Booking.find().sort({ createdAt: -1 }).limit(5);

    res.json({
      success: true,
      stats: { totalContacts, newContacts, totalBookings, pendingBookings, totalServices },
      recentContacts,
      recentBookings,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
