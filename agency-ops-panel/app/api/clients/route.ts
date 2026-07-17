import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Client from '@/models/Client';
import { getAuthUser } from '@/lib/auth';
import { canViewAllClients } from '@/lib/permissions';
import { clientSchema } from '@/lib/validators';

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const { searchParams } = new URL(req.url);
    const query: Record<string, unknown> = {};
    if (!canViewAllClients(auth.role)) query.assignedSales = auth.userId;
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    if (status) query.status = status;
    if (search) query.$or = [{ name: { $regex: search, $options: 'i' } }, { companyName: { $regex: search, $options: 'i' } }];
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const [clients, total] = await Promise.all([
      Client.find(query).populate('assignedSales', 'name').populate('assignedManager', 'name').sort({ createdAt: -1 }).skip((page-1)*limit).limit(limit),
      Client.countDocuments(query),
    ]);
    return NextResponse.json({ success: true, data: clients, total, page, totalPages: Math.ceil(total/limit) });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const body = await req.json() as unknown;
    const p = clientSchema.safeParse(body);
    if (!p.success) return NextResponse.json({ success: false, error: p.error.issues[0]?.message }, { status: 400 });
    const client = await Client.create({
      ...p.data,
      assignedSales: p.data.assignedSales || undefined,
      assignedManager: p.data.assignedManager || undefined,
    });
    return NextResponse.json({ success: true, data: client }, { status: 201 });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
