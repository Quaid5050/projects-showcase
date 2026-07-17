import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Lead from '@/models/Lead';
import { getAuthUser } from '@/lib/auth';
import { canViewAllLeads } from '@/lib/permissions';
import { leadSchema } from '@/lib/validators';

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const { searchParams } = new URL(req.url);
    const query: Record<string, unknown> = {};
    if (!canViewAllLeads(auth.role)) query.assignedTo = auth.userId;
    const stage = searchParams.get('stage');
    const search = searchParams.get('search');
    if (stage) query.stage = stage;
    if (search) query.$or = [{ name: { $regex: search, $options: 'i' } }, { companyName: { $regex: search, $options: 'i' } }];
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const [leads, total] = await Promise.all([
      Lead.find(query).populate('assignedTo','name').sort({ createdAt: -1 }).skip((page-1)*limit).limit(limit),
      Lead.countDocuments(query),
    ]);
    return NextResponse.json({ success: true, data: leads, total, page, totalPages: Math.ceil(total/limit) });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const body = await req.json() as unknown;
    const p = leadSchema.safeParse(body);
    if (!p.success) return NextResponse.json({ success: false, error: p.error.issues[0]?.message }, { status: 400 });
    const lead = await Lead.create({
      ...p.data,
      assignedTo: p.data.assignedTo || undefined,
    });
    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
