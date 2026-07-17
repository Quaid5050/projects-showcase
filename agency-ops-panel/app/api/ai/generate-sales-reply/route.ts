import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/auth';
import { generateSalesReply } from '@/lib/ai/salesAgent';
import '@/lib/models';
import AIReply from '@/models/AIReply';
import Lead from '@/models/Lead';
import Service from '@/models/Service';
import connectDB from '@/lib/db';
import mongoose from 'mongoose';

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const { message, leadId } = await req.json() as { message: string; leadId?: string };
    if (!message?.trim()) return NextResponse.json({ success: false, error: 'message required' }, { status: 400 });
    const lead = leadId ? await Lead.findById(leadId) : null;
    const services = await Service.find({ isActive: true }).select('name description').limit(10);
    const servicesText = services.map(s => s.name).join(', ');
    const leadDetails = lead ? `Name: ${lead.name}, Service Interest: ${lead.serviceInterest || 'Unknown'}, Budget: ${lead.budget || 'Unknown'}, Stage: ${lead.stage}` : 'New lead - no details yet';
    const result = await generateSalesReply(message, leadDetails, servicesText);
    const saved = await AIReply.create({
      leadId: leadId ? new mongoose.Types.ObjectId(leadId) : undefined,
      replyType: 'sales_reply',
      generatedBy: new mongoose.Types.ObjectId(auth.userId),
      inputMessage: message,
      suggestedReply: result.suggestedReply,
      shortReply: result.shortReply,
      internalSummary: result.internalSummary,
      missingInfo: result.missingInfo,
      riskLevel: result.riskLevel,
      nextStep: result.nextStep,
      status: 'draft',
    });
    if (lead && result.qualificationScore) {
      await Lead.findByIdAndUpdate(leadId, { qualificationScore: result.qualificationScore, serviceInterest: result.serviceDetected });
    }
    return NextResponse.json({ success: true, data: { ...result, savedId: saved._id } });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
