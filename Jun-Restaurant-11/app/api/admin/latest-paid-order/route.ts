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
    const latestPaid = await Order.findOne({ paymentStatus: 'paid' })
      .sort({ createdAt: -1 })
      .select('_id orderNumber createdAt total customerName')
      .lean();

    return NextResponse.json({ order: latestPaid });
  } catch (error) {
    console.error('GET /api/admin/latest-paid-order error:', error);
    return NextResponse.json({ error: 'Failed to fetch latest paid order' }, { status: 500 });
  }
}
