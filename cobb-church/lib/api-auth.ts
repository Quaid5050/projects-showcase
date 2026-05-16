import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '@/lib/auth'
import { isAdminRole, isChurchUserRole } from '@/lib/roles'

export async function requireAdminApi() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id || !isAdminRole(session.user.role)) {
    return { session: null, response: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }
  }
  return { session, response: null as NextResponse | null }
}

/** Church dashboard APIs: authenticated user with a church and a role allowed on /dashboard. */
export async function requireChurchDashboardApi() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return { session: null, response: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }
  }
  const churchId = session.user.churchId
  if (!churchId) {
    return { session: null, response: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }
  }
  if (!isChurchUserRole(session.user.role)) {
    return { session: null, response: NextResponse.json({ error: 'Forbidden' }, { status: 403 }) }
  }
  return {
    session: {
      ...session,
      user: {
        ...session.user,
        churchId,
      },
    },
    response: null as NextResponse | null,
  }
}
