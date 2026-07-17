import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/auth';
import { askOperationsAgent } from '@/lib/ai/operationsAgent';
import AIReply from '@/models/AIReply';
import connectDB from '@/lib/db';
import '@/lib/models';
import mongoose from 'mongoose';

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();

    const body = await req.json() as { question?: string; clientId?: string };
    const question = body.question?.trim();
    const clientId = body.clientId;

    if (!question) return NextResponse.json({ success: false, error: 'Question is required' }, { status: 400 });

    const result = await askOperationsAgent(question, auth.role, clientId);

    // Save as auto-approved AI reply (internal use)
    try {
      await AIReply.create({
        replyType: 'operations_answer',
        generatedBy: new mongoose.Types.ObjectId(auth.userId),
        inputMessage: question,
        suggestedReply: result.answer,
        shortReply: result.answer.slice(0, 200),
        internalSummary: result.groupedSummary || '',
        missingInfo: result.missingData || [],
        riskLevel: 'low',
        nextStep: '',
        status: 'approved',
      });
    } catch (saveErr) {
      console.error('[AI ask-operations] Failed to save reply:', saveErr);
      // Continue — saving is non-critical
    }

    return NextResponse.json({ success: true, data: result });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'AI request failed';
    console.error('[AI ask-operations]', e);
    // Return specific error to help debug
    return NextResponse.json({
      success: false,
      error: message.includes('GROQ_API_KEY') ? 'Groq API key not set. Add GROQ_API_KEY to .env.local' :
             message.includes('401') ? 'Invalid Groq API key. Check GROQ_API_KEY in .env.local' :
             message.includes('model') ? `Model error: ${message}` :
             message,
    }, { status: 500 });
  }
}
