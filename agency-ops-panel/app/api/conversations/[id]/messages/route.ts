import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Conversation from '@/models/Conversation';
import { getAuthUser } from '@/lib/auth';
import { z } from 'zod';
import mongoose from 'mongoose';

const schema = z.object({
  senderType: z.enum(['client','sales','team','ai','system']),
  content: z.string().min(1),
  direction: z.enum(['inbound','outbound','internal']),
  status: z.enum(['draft','approved','sent']).default('sent'),
});

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    await connectDB();
    const body = await req.json() as unknown;
    const p = schema.safeParse(body);
    if (!p.success) return NextResponse.json({ success: false, error: p.error.issues[0]?.message }, { status: 400 });
    const msg = { ...p.data, createdBy: new mongoose.Types.ObjectId(auth.userId), createdAt: new Date() };
    const conv = await Conversation.findByIdAndUpdate(
      id,
      { $push: { messages: msg }, lastMessageAt: new Date() },
      { new: true }
    ).populate('messages.createdBy','name');
    if (!conv) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: conv.messages });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
