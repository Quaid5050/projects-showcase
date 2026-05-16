import Link from 'next/link'
import { getCurrentUserWithChurch } from '@/lib/auth-helpers'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function DashboardNotificationsPage() {
  const { user } = await getCurrentUserWithChurch()

  const items = await prisma.notification.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
    take: 50,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-dark font-display">Notifications</h1>
        <p className="text-gray-600 mt-1">Updates for your account.</p>
      </div>

      {items.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-gray-600">No notifications yet.</CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {items.map((n) => (
            <Card key={n.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-navy-dark">{n.title}</CardTitle>
                <p className="text-xs text-gray-500">{n.createdAt.toLocaleString()}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{n.body}</p>
                {n.actionUrl && (
                  <Link href={n.actionUrl} className="text-gold text-sm font-semibold mt-2 inline-block hover:underline">
                    Open
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Link href="/dashboard" className="text-gold font-semibold text-sm hover:underline">
        ← Back to dashboard
      </Link>
    </div>
  )
}
