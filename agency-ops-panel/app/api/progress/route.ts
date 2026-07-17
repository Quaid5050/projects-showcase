import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import ProgressUpdate from '@/models/ProgressUpdate';
import Project from '@/models/Project';
import { getAuthUser } from '@/lib/auth';
import { progressSchema } from '@/lib/validators';
import mongoose from 'mongoose';

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const { searchParams } = new URL(req.url);
    const query: Record<string, unknown> = {};
    const projectId = searchParams.get('projectId');
    const clientId = searchParams.get('clientId');
    const visibility = searchParams.get('visibility');
    if (projectId) query.projectId = projectId;
    if (clientId) query.clientId = clientId;
    if (visibility) query.visibility = visibility;
    const updates = await ProgressUpdate.find(query).populate('createdBy','name').populate('projectId','name').sort({ createdAt: -1 }).limit(50);
    return NextResponse.json({ success: true, data: updates });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const body = await req.json() as unknown;
    const p = progressSchema.safeParse(body);
    if (!p.success) return NextResponse.json({ success: false, error: p.error.issues[0]?.message }, { status: 400 });
    const update = await ProgressUpdate.create({ ...p.data, createdBy: new mongoose.Types.ObjectId(auth.userId) });
    // Also update project latestUpdate
    await Project.findByIdAndUpdate(p.data.projectId, { latestUpdate: p.data.updateText, updatedAt: new Date() });
    return NextResponse.json({ success: true, data: update }, { status: 201 });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
