import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import AIReply from '@/models/AIReply';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    await connectDB();
    const reply = await AIReply.findByIdAndUpdate(id, { status: 'approved', approvedBy: new mongoose.Types.ObjectId(auth.userId) }, { new: true });
    if (!reply) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: reply });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
