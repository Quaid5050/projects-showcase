import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';
import LeadSignup from '@/models/LeadSignup';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();

  const [
    totalInquiries,
    newInquiries,
    reviewedInquiries,
    contactedInquiries,
    closedInquiries,
    totalLeads,
    recentInquiries,
  ] = await Promise.all([
    Inquiry.countDocuments(),
    Inquiry.countDocuments({ status: 'new' }),
    Inquiry.countDocuments({ status: 'reviewed' }),
    Inquiry.countDocuments({ status: 'contacted' }),
    Inquiry.countDocuments({ status: 'closed' }),
    LeadSignup.countDocuments(),
    Inquiry.find({}).sort({ createdAt: -1 }).limit(5).lean(),
  ]);

  // Inquiries by source
  const bySource = await Inquiry.aggregate([
    { $group: { _id: '$source', count: { $sum: 1 } } }
  ]);

  // Inquiries last 7 days
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const last7Days = await Inquiry.countDocuments({ createdAt: { $gte: sevenDaysAgo } });

  return NextResponse.json({
    success: true,
    data: {
      totalInquiries,
      newInquiries,
      reviewedInquiries,
      contactedInquiries,
      closedInquiries,
      totalLeads,
      last7Days,
      bySource,
      recentInquiries,
    },
  });
}
