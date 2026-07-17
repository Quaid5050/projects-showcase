import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { verifyAdminRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  if (!verifyAdminRequest(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();

    const [
      totalOrders,
      paidOrders,
      pendingOrders,
      completedOrders,
      cancelledOrders,
      revenueAgg,
      recentOrders,
    ] = await Promise.all([
      Order.countDocuments({}),
      Order.countDocuments({ paymentStatus: 'paid' }),
      Order.countDocuments({ orderStatus: { $in: ['pending', 'new'] } }),
      Order.countDocuments({ orderStatus: 'completed' }),
      Order.countDocuments({ orderStatus: 'cancelled' }),
      Order.aggregate([
        { $match: { paymentStatus: 'paid' } },
        { $group: { _id: null, total: { $sum: '$total' } } },
      ]),
      Order.find({})
        .sort({ createdAt: -1 })
        .limit(10)
        .lean(),
    ]);

    const revenue = revenueAgg[0]?.total || 0;

    // Popular items
    const popularItems = await Order.aggregate([
      { $match: { paymentStatus: 'paid' } },
      { $unwind: '$items' },
      {
        $group: {
          _id: '$items.name',
          count: { $sum: '$items.quantity' },
          revenue: { $sum: '$items.subtotal' },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ]);

    return NextResponse.json({
      totalOrders,
      paidOrders,
      pendingOrders,
      completedOrders,
      cancelledOrders,
      revenue,
      recentOrders,
      popularItems,
    });
  } catch (error) {
    console.error('GET /api/admin/stats error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
