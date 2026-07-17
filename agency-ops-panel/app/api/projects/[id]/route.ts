import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Project from '@/models/Project';
import Task from '@/models/Task';
import ProgressUpdate from '@/models/ProgressUpdate';
import { getAuthUser } from '@/lib/auth';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    await connectDB();
    const [project, tasks, progress] = await Promise.all([
      Project.findById(id).populate('clientId','name companyName email phone').populate('serviceId','name slug').populate('assignedTeam','name').populate('assignedManager','name'),
      Task.find({ projectId: id }).populate('assignedTo','name').sort({ priority: -1 }),
      ProgressUpdate.find({ projectId: id }).populate('createdBy','name').sort({ createdAt: -1 }).limit(20),
    ]);
    if (!project) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: { project, tasks, progress } });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    await connectDB();
    const body = await req.json() as Record<string, unknown>;
    const project = await Project.findByIdAndUpdate(id, body, { new: true }).populate('clientId','name').populate('serviceId','name');
    if (!project) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: project });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    await connectDB();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
