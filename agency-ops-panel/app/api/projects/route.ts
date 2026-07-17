import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Project from '@/models/Project';
import { getAuthUser } from '@/lib/auth';
import { canViewAllProjects } from '@/lib/permissions';
import { projectSchema } from '@/lib/validators';

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const { searchParams } = new URL(req.url);
    const query: Record<string, unknown> = {};
    if (!canViewAllProjects(auth.role)) query.assignedTeam = auth.userId;
    const clientId = searchParams.get('clientId');
    const status = searchParams.get('status');
    const type = searchParams.get('type');
    if (clientId) query.clientId = clientId;
    if (status) query.status = status;
    if (type) query.type = type;
    const projects = await Project.find(query)
      .populate('clientId', 'name companyName status')
      .populate('serviceId', 'name slug')
      .populate('assignedTeam', 'name')
      .populate('assignedManager', 'name')
      .sort({ updatedAt: -1 });
    return NextResponse.json({ success: true, data: projects });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const body = await req.json() as unknown;
    const p = projectSchema.safeParse(body);
    if (!p.success) return NextResponse.json({ success: false, error: p.error.issues[0]?.message }, { status: 400 });
    const project = await Project.create({
      ...p.data,
      assignedManager: p.data.assignedManager || undefined,
      assignedTeam: (p.data.assignedTeam || []).filter(Boolean),
    });
    const populated = await Project.findById(project._id).populate('clientId','name').populate('serviceId','name');
    return NextResponse.json({ success: true, data: populated }, { status: 201 });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
