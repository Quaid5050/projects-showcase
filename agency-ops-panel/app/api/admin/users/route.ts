import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import User from '@/models/User';
import { getAuthUser } from '@/lib/auth';
import { canManageUsers } from '@/lib/permissions';
import { z } from 'zod';

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth || !canManageUsers(auth.role)) return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
    await connectDB();
    const users = await User.find({}).select('-passwordHash').sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: users });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

const createSchema = z.object({
  name: z.string().min(2), email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['admin','ceo','manager','sales','team']).default('sales'),
});

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth || !canManageUsers(auth.role)) return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
    await connectDB();
    const body = await req.json() as unknown;
    const p = createSchema.safeParse(body);
    if (!p.success) return NextResponse.json({ success: false, error: p.error.issues[0]?.message }, { status: 400 });
    if (await User.findOne({ email: p.data.email })) return NextResponse.json({ success: false, error: 'Email exists' }, { status: 409 });
    const passwordHash = await bcrypt.hash(p.data.password, 12);
    const user = await User.create({ ...p.data, passwordHash });
    return NextResponse.json({ success: true, data: user }, { status: 201 });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
