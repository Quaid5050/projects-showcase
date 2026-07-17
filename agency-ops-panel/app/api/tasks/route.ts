import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Task from '@/models/Task';
import { getAuthUser } from '@/lib/auth';
import { taskSchema } from '@/lib/validators';

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const { searchParams } = new URL(req.url);
    const query: Record<string, unknown> = {};
    const projectId = searchParams.get('projectId');
    const clientId = searchParams.get('clientId');
    const status = searchParams.get('status');
    const assignedTo = searchParams.get('assignedTo');
    if (projectId) query.projectId = projectId;
    if (clientId) query.clientId = clientId;
    if (status) query.status = status;
    if (assignedTo) query.assignedTo = assignedTo;
    // Team members see only their tasks
    if (auth.role === 'team') query.assignedTo = auth.userId;
    const tasks = await Task.find(query)
      .populate('projectId','name')
      .populate('clientId','name companyName')
      .populate('serviceId','name')
      .populate('assignedTo','name')
      .sort({ priority: -1, dueDate: 1 });
    return NextResponse.json({ success: true, data: tasks });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const body = await req.json() as unknown;
    const p = taskSchema.safeParse(body);
    if (!p.success) return NextResponse.json({ success: false, error: p.error.issues[0]?.message }, { status: 400 });
    const task = await Task.create({
      ...p.data,
      assignedTo: p.data.assignedTo || undefined,
    });
    return NextResponse.json({ success: true, data: task }, { status: 201 });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
