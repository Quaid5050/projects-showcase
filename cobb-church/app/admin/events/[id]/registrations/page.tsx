import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Card, CardContent } from '@/components/ui/card'

interface Props {
  params: Promise<{ id: string }>
}

export default async function EventRegistrationsPage({ params }: Props) {
  await requireAdmin()
  const { id } = await params
  const event = await prisma.event.findUnique({ where: { id } })
  if (!event) notFound()

  const registrations = await prisma.eventRegistration.findMany({
    where: { eventId: id },
    orderBy: { createdAt: 'desc' },
    include: {
      user: { select: { name: true, email: true } },
      church: { select: { name: true, slug: true } },
    },
  })

  return (
    <div className="space-y-6">
      <Link href="/admin/events" className="text-sm text-gold hover:underline">
        ← Events
      </Link>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Registrations</h1>
        <p className="text-gray-600 mt-1">{event.title}</p>
        <p className="text-sm text-gray-500">
          {registrations.length} registered · Capacity {event.capacity ?? '—'} · Count {event.registered}
        </p>
      </div>

      <div className="space-y-2">
        {registrations.map((r) => (
          <Card key={r.id}>
            <CardContent className="p-4 text-sm">
              <p className="font-semibold">{r.attendeeName}</p>
              <p className="text-gray-600">{r.attendeeEmail}</p>
              <p className="text-gray-500 text-xs mt-1">
                {r.church.name} · {r.user.email} · {r.createdAt.toLocaleString()} · {r.status}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {registrations.length === 0 && <p className="text-gray-500">No registrations yet.</p>}
    </div>
  )
}
