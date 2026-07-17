import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/auth';
import { generateClientReply } from '@/lib/ai/clientCommunicationAgent';
import '@/lib/models';
import AIReply from '@/models/AIReply';
import Conversation from '@/models/Conversation';
import connectDB from '@/lib/db';
import mongoose from 'mongoose';

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const { clientMessage, clientId, projectId, conversationId } = await req.json() as {
      clientMessage: string; clientId: string; projectId?: string; conversationId?: string;
    };
    if (!clientMessage?.trim() || !clientId) return NextResponse.json({ success: false, error: 'clientMessage and clientId required' }, { status: 400 });

    // Get conversation history if provided
    let history: Array<{ senderType: string; content: string; createdAt?: string }> = [];
    if (conversationId) {
      const conv = await Conversation.findById(conversationId);
      if (conv) history = conv.messages.slice(-10).map(m => ({ senderType: m.senderType, content: m.content }));
    }

    const result = await generateClientReply(clientMessage, clientId, history);

    const saved = await AIReply.create({
      clientId: new mongoose.Types.ObjectId(clientId),
      projectId: projectId ? new mongoose.Types.ObjectId(projectId) : undefined,
      conversationId: conversationId ? new mongoose.Types.ObjectId(conversationId) : undefined,
      replyType: 'client_reply',
      generatedBy: new mongoose.Types.ObjectId(auth.userId),
      inputMessage: clientMessage,
      suggestedReply: result.suggestedReply,
      shortReply: result.shortReply,
      internalSummary: result.internalSummary,
      missingInfo: result.missingInfo,
      riskLevel: result.riskLevel,
      nextStep: result.nextStep,
      status: 'draft',
    });

    return NextResponse.json({ success: true, data: { ...result, savedId: saved._id } });
  } catch (e) { console.error('[AI client-reply]', e); return NextResponse.json({ success: false, error: 'AI request failed' }, { status: 500 }); }
}
