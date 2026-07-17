import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import AIReply from '@/models/AIReply';
import { getAuthUser } from '@/lib/auth';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    await connectDB();
    const reply = await AIReply.findById(id).populate('clientId','name').populate('projectId','name').populate('generatedBy','name').populate('approvedBy','name');
    if (!reply) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: reply });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    await connectDB();
    const body = await req.json() as { editedContent?: string; reviewNotes?: string };
    const reply = await AIReply.findByIdAndUpdate(id, { editedContent: body.editedContent, reviewNotes: body.reviewNotes, status: 'edited' }, { new: true });
    if (!reply) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: reply });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
