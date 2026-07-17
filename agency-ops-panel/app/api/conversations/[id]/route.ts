import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Conversation from '@/models/Conversation';
import { getAuthUser } from '@/lib/auth';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    await connectDB();
    const conv = await Conversation.findById(id)
      .populate('clientId','name companyName email phone businessType status')
      .populate('leadId','name email serviceInterest stage')
      .populate('projectId','name status progressPercentage currentStage')
      .populate('assignedTo','name')
      .populate('messages.createdBy','name');
    if (!conv) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: conv });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
