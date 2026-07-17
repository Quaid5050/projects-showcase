const User = require('../models/User');
const Product = require('../models/Product');
const Referral = require('../models/Referral');
const Inquiry = require('../models/Inquiry');

exports.getDashboardStats = async (req, res) => {
  try {
    const [totalUsers, totalProducts, totalReferrals, newInquiries, activeSubscriptions] = await Promise.all([
      User.countDocuments({ role: 'user' }),
      Product.countDocuments({ isActive: true }),
      Referral.countDocuments(),
      Inquiry.countDocuments({ status: 'new' }),
      User.countDocuments({ 'subscription.isActive': true })
    ]);

    const recentUsers = await User.find({ role: 'user' })
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email groupId createdAt subscription');

    const recentInquiries = await Inquiry.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('productInterest', 'name');

    res.json({
      stats: { totalUsers, totalProducts, totalReferrals, newInquiries, activeSubscriptions },
      recentUsers,
      recentInquiries
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: 'user' }).sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
