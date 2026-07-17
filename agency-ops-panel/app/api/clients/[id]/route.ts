import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Client from '@/models/Client';
import Project from '@/models/Project';
import ProgressUpdate from '@/models/ProgressUpdate';
import Task from '@/models/Task';
import { getAuthUser } from '@/lib/auth';
import { canDeleteClients } from '@/lib/permissions';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    await connectDB();
    const [client, projects, recentProgress, pendingTasks] = await Promise.all([
      Client.findById(id).populate('assignedSales', 'name email').populate('assignedManager', 'name email'),
      Project.find({ clientId: id }).populate('serviceId', 'name slug').populate('assignedTeam', 'name').sort({ createdAt: -1 }),
      ProgressUpdate.find({ clientId: id }).populate('createdBy', 'name').sort({ createdAt: -1 }).limit(10),
      Task.find({ clientId: id, status: { $nin: ['completed'] } }).populate('assignedTo', 'name').sort({ priority: -1 }).limit(20),
    ]);
    if (!client) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: { client, projects, recentProgress, pendingTasks } });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    await connectDB();
    const body = await req.json() as Record<string, unknown>;
    const client = await Client.findByIdAndUpdate(id, body, { new: true });
    if (!client) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: client });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth || !canDeleteClients(auth.role)) return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
    const { id } = await params;
    await connectDB();
    await Client.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
