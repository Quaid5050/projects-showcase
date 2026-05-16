const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Resource = require('../models/Resource');
const Event = require('../models/Event');
const Story = require('../models/Story');
const Crisis = require('../models/Crisis');
const { protect, authorize } = require('../middleware/auth');
const { sendApprovalEmail, sendRejectionEmail } = require('../utils/email');

const isAdmin = [protect, authorize('admin', 'superadmin')];

// Dashboard stats
router.get('/stats', ...isAdmin, async (req, res) => {
  try {
    const [totalChurches, pendingApps, totalResources, activeAlerts, upcomingEvents, publishedStories] = await Promise.all([
      User.countDocuments({ status: 'approved', role: { $ne: 'superadmin' } }),
      User.countDocuments({ status: 'pending' }),
      Resource.countDocuments({ isActive: true }),
      Crisis.countDocuments({ isActive: true }),
      Event.countDocuments({ isActive: true, date: { $gte: new Date() } }),
      Story.countDocuments({ isPublished: true })
    ]);
    res.json({ success: true, stats: { totalChurches, pendingApps, totalResources, activeAlerts, upcomingEvents, publishedStories } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all users/churches
router.get('/churches', ...isAdmin, async (req, res) => {
  try {
    const { status, role } = req.query;
    const query = {};
    if (status) query.status = status;
    if (role) query.role = role;

    const churches = await User.find(query)
      .select('-password')
      .sort({ createdAt: -1 });
    res.json({ success: true, count: churches.length, churches });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Pending applications
router.get('/applications', ...isAdmin, async (req, res) => {
  try {
    const applications = await User.find({ status: 'pending' })
      .select('-password')
      .sort({ createdAt: -1 });
    res.json({ success: true, count: applications.length, applications });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Approve application
router.put('/churches/:id/approve', ...isAdmin, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { status: 'approved', approvedAt: Date.now(), approvedBy: req.user.id },
      { new: true }
    );
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    await sendApprovalEmail(user);
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Reject application
router.put('/churches/:id/reject', ...isAdmin, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { status: 'rejected', rejectionReason: req.body.reason },
      { new: true }
    );
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    await sendRejectionEmail(user, req.body.reason);
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Suspend / change status
router.put('/churches/:id/status', ...isAdmin, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Change role
router.put('/churches/:id/role', protect, authorize('superadmin'), async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { role: req.body.role }, { new: true });
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete church
router.delete('/churches/:id', protect, authorize('superadmin'), async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Church removed' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all resources (admin view)
router.get('/resources', ...isAdmin, async (req, res) => {
  try {
    const resources = await Resource.find()
      .populate('church', 'churchName pastorName')
      .sort({ createdAt: -1 });
    res.json({ success: true, resources });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all stories (admin view)
router.get('/stories', ...isAdmin, async (req, res) => {
  try {
    const stories = await Story.find().populate('church', 'churchName').sort({ createdAt: -1 });
    res.json({ success: true, stories });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all crisis alerts (admin view)
router.get('/crisis', ...isAdmin, async (req, res) => {
  try {
    const alerts = await Crisis.find()
      .populate('createdBy', 'churchName pastorName')
      .sort({ createdAt: -1 });
    res.json({ success: true, alerts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
