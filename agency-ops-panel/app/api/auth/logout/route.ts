import { NextResponse } from 'next/server';
import { clearAuthCookieHeader } from '@/lib/auth';
export async function POST() {
  const res = NextResponse.json({ success: true });
  res.headers.set('Set-Cookie', clearAuthCookieHeader());
  return res;
}
