const router = require('express').Router();
const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');
const { protect, adminOnly } = require('../middleware/auth');

router.get('/', protect, adminOnly, async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayEnd = new Date(today);
    todayEnd.setHours(23, 59, 59, 999);

    const [todayOrders, allOrders, totalProducts, totalCustomers, recentOrders, revenueAgg] = await Promise.all([
      Order.countDocuments({ createdAt: { $gte: today, $lte: todayEnd } }),
      Order.countDocuments(),
      Product.countDocuments({ isActive: true }),
      User.countDocuments({ role: 'customer' }),
      Order.find().sort('-createdAt').limit(10),
      Order.aggregate([
        { $match: { status: { $ne: 'cancelled' } } },
        { $group: { _id: null, totalRevenue: { $sum: '$total' }, avgOrder: { $avg: '$total' } } }
      ])
    ]);

    const todayRevenue = await Order.aggregate([
      { $match: { createdAt: { $gte: today, $lte: todayEnd }, status: { $ne: 'cancelled' } } },
      { $group: { _id: null, total: { $sum: '$total' } } }
    ]);

    const pendingOrders = await Order.countDocuments({ status: { $in: ['pending', 'confirmed', 'picking'] } });
    const lowStock = await Product.countDocuments({ stock: { $lt: 10 }, isActive: true });

    const revenue = revenueAgg[0] || { totalRevenue: 0, avgOrder: 0 };

    const monthlyRevenue = await Order.aggregate([
      { $match: { status: { $ne: 'cancelled' } } },
      { $group: { _id: { $month: '$createdAt' }, revenue: { $sum: '$total' }, orders: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);

    res.json({
      success: true,
      data: {
        todayOrders,
        todayRevenue: todayRevenue[0]?.total || 0,
        totalOrders: allOrders,
        totalRevenue: revenue.totalRevenue,
        avgOrderValue: revenue.avgOrder,
        totalProducts,
        totalCustomers,
        pendingOrders,
        lowStock,
        recentOrders,
        monthlyRevenue
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
