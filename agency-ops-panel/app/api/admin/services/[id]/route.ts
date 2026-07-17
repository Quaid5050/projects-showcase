import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Service from '@/models/Service';
import { getAuthUser } from '@/lib/auth';
import { canManageServices } from '@/lib/permissions';

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth || !canManageServices(auth.role)) return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
    const { id } = await params;
    await connectDB();
    const body = await req.json() as Record<string, unknown>;
    const service = await Service.findByIdAndUpdate(id, body, { new: true });
    if (!service) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: service });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth || !canManageServices(auth.role)) return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
    const { id } = await params;
    await connectDB();
    await Service.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
