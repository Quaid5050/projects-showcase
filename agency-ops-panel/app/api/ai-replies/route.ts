import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import AIReply from '@/models/AIReply';
import { getAuthUser } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const { searchParams } = new URL(req.url);
    const query: Record<string, unknown> = {};
    const status = searchParams.get('status');
    const clientId = searchParams.get('clientId');
    const replyType = searchParams.get('replyType');
    if (status) query.status = status;
    if (clientId) query.clientId = clientId;
    if (replyType) query.replyType = replyType;
    if (auth.role === 'team' || auth.role === 'sales') query.generatedBy = auth.userId;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const [replies, total] = await Promise.all([
      AIReply.find(query)
        .populate('clientId','name companyName')
        .populate('projectId','name')
        .populate('leadId','name')
        .populate('generatedBy','name')
        .populate('approvedBy','name')
        .sort({ createdAt: -1 }).skip((page-1)*limit).limit(limit),
      AIReply.countDocuments(query),
    ]);
    return NextResponse.json({ success: true, data: replies, total, page, totalPages: Math.ceil(total/limit) });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
