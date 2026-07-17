import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Conversation from '@/models/Conversation';
import { getAuthUser } from '@/lib/auth';
import { z } from 'zod';

const schema = z.object({
  clientId: z.string().optional(),
  leadId: z.string().optional(),
  projectId: z.string().optional(),
  channel: z.enum(['manual','whatsapp','email','instagram','facebook','website']).default('manual'),
  assignedTo: z.string().optional(),
});

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const { searchParams } = new URL(req.url);
    const query: Record<string, unknown> = {};
    const clientId = searchParams.get('clientId');
    const leadId = searchParams.get('leadId');
    const projectId = searchParams.get('projectId');
    if (clientId) query.clientId = clientId;
    if (leadId) query.leadId = leadId;
    if (projectId) query.projectId = projectId;
    const convs = await Conversation.find(query)
      .populate('clientId','name companyName')
      .populate('leadId','name')
      .populate('projectId','name')
      .populate('assignedTo','name')
      .sort({ lastMessageAt: -1 })
      .limit(50);
    return NextResponse.json({ success: true, data: convs });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const body = await req.json() as unknown;
    const p = schema.safeParse(body);
    if (!p.success) return NextResponse.json({ success: false, error: p.error.issues[0]?.message }, { status: 400 });
    const conv = await Conversation.create({ ...p.data, assignedTo: p.data.assignedTo || auth.userId });
    return NextResponse.json({ success: true, data: conv }, { status: 201 });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
