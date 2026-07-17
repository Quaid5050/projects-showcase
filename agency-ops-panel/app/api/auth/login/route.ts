import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import User from '@/models/User';
import { signToken, createAuthCookieHeader } from '@/lib/auth';
import { loginSchema } from '@/lib/validators';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json() as unknown;
    const p = loginSchema.safeParse(body);
    if (!p.success) return NextResponse.json({ success: false, error: p.error.issues[0]?.message }, { status: 400 });
    const user = await User.findOne({ email: p.data.email, isActive: true });
    if (!user) return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
    const valid = await bcrypt.compare(p.data.password, user.passwordHash);
    if (!valid) return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
    const token = signToken({ userId: user._id.toString(), email: user.email, role: user.role, name: user.name });
    const res = NextResponse.json({ success: true, data: { user: { id: user._id, name: user.name, email: user.email, role: user.role }, token } });
    res.headers.set('Set-Cookie', createAuthCookieHeader(token));
    return res;
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Login failed' }, { status: 500 }); }
}
