import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { isAdminRole, isChurchUserRole } from '@/lib/roles'

export async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session?.user) redirect('/login')
  return session
}

export async function requireAdmin() {
  const session = await requireAuth()
  const role = (session.user as { role?: string }).role
  if (!isAdminRole(role)) redirect('/admin/login')
  return session
}

export async function requireChurchUser() {
  const session = await requireAuth()
  const role = (session.user as { role?: string }).role
  if (!isChurchUserRole(role)) redirect('/login')
  return session
}

export async function getCurrentUserWithChurch() {
  const session = await requireAuth()
  const id = (session.user as { id?: string }).id
  if (!id) redirect('/login')
  const user = await prisma.user.findUnique({
    where: { id },
    include: { church: true },
  })
  if (!user || user.status === 'INACTIVE') redirect('/login')
  return { session, user }
}

/** Church users only (not admin) — for routes that must be tied to a church record */
export async function getChurchAccountContext() {
  const { session, user } = await getCurrentUserWithChurch()
  const role = (session.user as { role?: string }).role
  if (isAdminRole(role) && !user.churchId) {
    redirect('/admin/dashboard')
  }
  if (!user.churchId || !user.church) {
    redirect('/login')
  }
  return { session, user, church: user.church }
}
