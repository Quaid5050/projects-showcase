import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import User from '@/models/User';
import { getAuthUser } from '@/lib/auth';
import { canManageUsers } from '@/lib/permissions';
import { z } from 'zod';

const updateSchema = z.object({
  name: z.string().min(2).optional(), email: z.string().email().optional(),
  password: z.string().min(8).optional(),
  role: z.enum(['admin','ceo','manager','sales','team']).optional(),
  isActive: z.boolean().optional(),
});

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth || !canManageUsers(auth.role)) return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
    const { id } = await params;
    await connectDB();
    const body = await req.json() as unknown;
    const p = updateSchema.safeParse(body);
    if (!p.success) return NextResponse.json({ success: false, error: p.error.issues[0]?.message }, { status: 400 });
    const updates: Record<string, unknown> = { ...p.data };
    if (p.data.password) { updates.passwordHash = await bcrypt.hash(p.data.password, 12); delete updates.password; }
    const user = await User.findByIdAndUpdate(id, updates, { new: true }).select('-passwordHash');
    if (!user) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: user });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth || !canManageUsers(auth.role)) return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
    const { id } = await params;
    if (id === auth.userId) return NextResponse.json({ success: false, error: 'Cannot delete own account' }, { status: 400 });
    await connectDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
