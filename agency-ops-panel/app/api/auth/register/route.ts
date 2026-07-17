import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import User from '@/models/User';
import { signToken, createAuthCookieHeader, getAuthUser } from '@/lib/auth';
import { registerSchema } from '@/lib/validators';
import { isAdmin } from '@/lib/permissions';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json() as unknown;
    const p = registerSchema.safeParse(body);
    if (!p.success) return NextResponse.json({ success: false, error: p.error.issues[0]?.message }, { status: 400 });
    const { name, email, password, role } = p.data;
    if (role !== 'sales') {
      const auth = await getAuthUser(req);
      if (!auth || !isAdmin(auth.role)) return NextResponse.json({ success: false, error: 'Only admins can create this role' }, { status: 403 });
    }
    if (await User.findOne({ email })) return NextResponse.json({ success: false, error: 'Email already exists' }, { status: 409 });
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, passwordHash, role });
    const token = signToken({ userId: user._id.toString(), email: user.email, role: user.role, name: user.name });
    const res = NextResponse.json({ success: true, data: { user: { id: user._id, name: user.name, email: user.email, role: user.role }, token } }, { status: 201 });
    res.headers.set('Set-Cookie', createAuthCookieHeader(token));
    return res;
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Registration failed' }, { status: 500 }); }
}
