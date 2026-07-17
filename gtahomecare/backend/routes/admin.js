const router = require('express').Router();
const Booking = require('../models/Booking');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');

// Dashboard stats
router.get('/stats', auth, async (req, res) => {
  try {
    const [
      totalBookings,
      newBookings,
      activeClients,
      totalContacts,
      unreadContacts,
      recentBookings,
      statusBreakdown
    ] = await Promise.all([
      Booking.countDocuments(),
      Booking.countDocuments({ status: 'New' }),
      Booking.countDocuments({ status: 'Active' }),
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'Unread' }),
      Booking.find().sort({ createdAt: -1 }).limit(5),
      Booking.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }])
    ]);
    res.json({ totalBookings, newBookings, activeClients, totalContacts, unreadContacts, recentBookings, statusBreakdown });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
