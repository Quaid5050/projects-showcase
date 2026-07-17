import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

const PUBLIC = ['/', '/login', '/register'];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (
    PUBLIC.includes(pathname) ||
    pathname.startsWith('/client-portal/') ||   // client portal is public (token-protected)
    pathname.startsWith('/api/client-portal/') || // client portal API is public
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon')
  ) return NextResponse.next();
  const token = req.cookies.get('auth-token')?.value;
  if (!token) return NextResponse.redirect(new URL('/login', req.url));
  const payload = verifyToken(token);
  if (!payload) {
    const res = NextResponse.redirect(new URL('/login', req.url));
    res.cookies.delete('auth-token');
    return res;
  }
  if (pathname.startsWith('/admin')) {
    if (!['admin','ceo'].includes(payload.role)) return NextResponse.redirect(new URL('/dashboard', req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
