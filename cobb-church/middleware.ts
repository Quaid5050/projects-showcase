import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isAdminRole, isChurchUserRole } from '@/lib/roles'

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const role = token?.role as string | undefined
  const churchId = token?.churchId as string | null | undefined

  if (path.startsWith('/admin') && path !== '/admin/login') {
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
    if (!isAdminRole(role)) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  if (path.startsWith('/dashboard')) {
    if (!token || !isChurchUserRole(role)) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
    if (isAdminRole(role) && !churchId) {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url))
    }
    if (!isAdminRole(role) && !churchId) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  if (path === '/admin/login') {
    if (token && isAdminRole(role)) {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url))
    }
    if (token && !isAdminRole(role)) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  }

  if (path === '/login') {
    if (token && isChurchUserRole(role)) {
      if (isAdminRole(role)) {
        return NextResponse.redirect(new URL('/admin/dashboard', req.url))
      }
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  // Include `/admin` so the index route is protected (not only `/admin/...`).
  matcher: ['/admin', '/admin/:path*', '/dashboard/:path*', '/login'],
}
