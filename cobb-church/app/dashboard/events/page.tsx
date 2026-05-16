import Link from 'next/link'
import { getCurrentUserWithChurch } from '@/lib/auth-helpers'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default async function DashboardEventsPage() {
  const { user } = await getCurrentUserWithChurch()
  const churchId = user.churchId!

  const registrations = await prisma.eventRegistration.findMany({
    where: { churchId, userId: user.id },
    include: { event: true },
    orderBy: { createdAt: 'desc' },
    take: 50,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-dark font-display">My event RSVPs</h1>
        <p className="text-gray-600 mt-1">Registrations tied to your account and church.</p>
      </div>

      {registrations.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-gray-600">
            No RSVPs yet.{' '}
            <Link href="/events" className="text-gold font-semibold hover:underline">
              Browse events
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {registrations.map((r) => (
            <Card key={r.id}>
              <CardHeader>
                <CardTitle className="text-lg text-navy-dark">{r.event.title}</CardTitle>
                <p className="text-xs text-gray-500">
                  {r.event.date.toLocaleDateString()} · {r.event.time} · {r.status}
                </p>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Button asChild size="sm" variant="outline" className="border-navy-dark">
                  <Link href={`/events/${r.event.slug}`}>Event details</Link>
                </Button>
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
