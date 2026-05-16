import { prisma } from '@/lib/prisma'

export async function notifyUsersAtChurch(
  churchId: string,
  items: { type: string; title: string; body: string; actionUrl?: string | null }[]
) {
  const users = await prisma.user.findMany({
    where: { churchId, status: 'ACTIVE' },
    select: { id: true },
  })
  if (users.length === 0 || items.length === 0) return
  const data = users.flatMap((u) =>
    items.map((n) => ({
      userId: u.id,
      churchId,
      type: n.type,
      title: n.title,
      body: n.body,
      actionUrl: n.actionUrl ?? null,
    }))
  )
  await prisma.notification.createMany({ data })
}

export async function activeChurchUserEmails() {
  const recipients = await activeChurchUserRecipients()
  return [...new Set(recipients.map((r) => r.email))]
}

/** Active church users with a display name for personalized emails (pastor / leader). */
export async function activeChurchUserRecipients() {
  const users = await prisma.user.findMany({
    where: { churchId: { not: null }, status: 'ACTIVE', role: 'CHURCH_USER' },
    select: {
      email: true,
      name: true,
      church: { select: { pastorName: true } },
    },
  })
  return users.map((u) => ({
    email: u.email,
    pastorName: (u.church?.pastorName || u.name || 'Pastor').trim() || 'Pastor',
  }))
}
