import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/auth';
import { callAI } from '@/lib/ai/openai';
import '@/lib/models';
import AIReply from '@/models/AIReply';
import Client from '@/models/Client';
import connectDB from '@/lib/db';
import mongoose from 'mongoose';

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const { clientId, leadId, context } = await req.json() as { clientId?: string; leadId?: string; context?: string };
    const prompt = `You are an agency sales assistant. Generate a short, friendly follow-up message.
Context: ${context || 'General follow-up for a client or lead'}
Return JSON: { "followUp": "string" }`;
    const raw = await callAI(prompt);
    const parsed = JSON.parse(raw) as { followUp: string };
    const saved = await AIReply.create({
      clientId: clientId ? new mongoose.Types.ObjectId(clientId) : undefined,
      leadId: leadId ? new mongoose.Types.ObjectId(leadId) : undefined,
      replyType: 'followup',
      generatedBy: new mongoose.Types.ObjectId(auth.userId),
      inputMessage: context || '',
      suggestedReply: parsed.followUp,
      shortReply: parsed.followUp,
      riskLevel: 'low',
      status: 'draft',
    });
    return NextResponse.json({ success: true, data: { followUp: parsed.followUp, savedId: saved._id } });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
