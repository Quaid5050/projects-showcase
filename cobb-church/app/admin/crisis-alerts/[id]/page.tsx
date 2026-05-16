import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CrisisAlertActions from '@/components/admin/CrisisAlertActions'
import CrisisAlertEditForm from '@/components/admin/CrisisAlertEditForm'

interface Props {
  params: Promise<{ id: string }>
}

export default async function AdminCrisisAlertDetailPage({ params }: Props) {
  await requireAdmin()
  const { id } = await params
  const alert = await prisma.crisisAlert.findUnique({
    where: { id },
    include: {
      responses: {
        orderBy: { createdAt: 'desc' },
        include: {
          church: { select: { name: true, slug: true } },
          user: { select: { name: true, email: true } },
        },
      },
    },
  })
  if (!alert) notFound()

  return (
    <div className="space-y-6">
      <Link href="/admin/crisis-alerts" className="text-sm text-gold hover:underline">
        ← Back
      </Link>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{alert.title}</CardTitle>
          <p className="text-sm text-gray-500">
            {alert.active ? 'Active' : 'Inactive'} · Email on activate: {alert.notifyByEmail ? 'yes' : 'no'}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xs text-gray-500">
            Urgency: {alert.urgency}
            {alert.location?.trim() ? ` · Location: ${alert.location}` : ''}
          </p>
          <p className="text-gray-800 whitespace-pre-wrap">{alert.body}</p>
          {alert.instructions?.trim() ? (
            <div className="rounded border border-amber-200 bg-amber-50 p-3 text-sm">
              <p className="font-semibold text-navy-dark mb-1">Instructions</p>
              <p className="whitespace-pre-wrap">{alert.instructions}</p>
            </div>
          ) : null}
          <CrisisAlertActions id={alert.id} active={alert.active} />
        </CardContent>
      </Card>

      <CrisisAlertEditForm
        id={alert.id}
        initial={{
          title: alert.title,
          body: alert.body,
          urgency: alert.urgency,
          location: alert.location,
          instructions: alert.instructions,
          notifyByEmail: alert.notifyByEmail,
        }}
      />

      <div>
        <h2 className="text-xl font-semibold mb-3">Church responses</h2>
        {alert.responses.length === 0 ? (
          <p className="text-gray-500 text-sm">No responses yet.</p>
        ) : (
          <div className="space-y-3">
            {alert.responses.map((r) => (
              <Card key={r.id}>
                <CardContent className="p-4 text-sm">
                  <p className="font-semibold text-navy-dark">{r.church.name}</p>
                  <p className="text-xs text-gray-500">
                    {r.contactName} · {r.contactEmail} · {r.contactPhone} · {r.createdAt.toLocaleString()}
                  </p>
                  <p className="mt-2 text-gray-700 whitespace-pre-wrap">{r.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
