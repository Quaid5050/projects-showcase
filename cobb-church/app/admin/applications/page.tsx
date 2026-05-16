import Link from 'next/link'
import type { OnboardingApplication } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default async function AdminApplicationsPage() {
  await requireAdmin()

  const applications = await prisma.onboardingApplication.findMany({
    orderBy: { createdAt: 'desc' },
  })

  const pending = applications.filter((a: OnboardingApplication) => a.status === 'PENDING')
  const done = applications.filter((a: OnboardingApplication) => a.status !== 'PENDING')

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Join applications</h1>
        <p className="text-gray-600 mt-1">Review churches applying to the network.</p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-navy-dark mb-4">Pending</h2>
        {pending.length === 0 ? (
          <p className="text-gray-500 text-sm">No pending applications.</p>
        ) : (
          <div className="space-y-3">
            {pending.map((a: OnboardingApplication) => (
              <Card key={a.id}>
                <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="font-semibold text-navy-dark">
                      {a.churchName}{' '}
                      <span className="text-gray-500 font-normal">
                        — {a.firstName} {a.lastName}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      {a.email} · {a.phone}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{a.createdAt.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>PENDING</Badge>
                    <Link
                      href={`/admin/applications/${a.id}`}
                      className="text-sm font-semibold text-gold hover:underline"
                    >
                      Review
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy-dark mb-4">Approved / Rejected</h2>
        {done.length === 0 ? (
          <p className="text-gray-500 text-sm">No completed applications yet.</p>
        ) : (
          <div className="space-y-3">
            {done.map((a: OnboardingApplication) => (
              <Card key={a.id}>
                <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="font-semibold">{a.churchName}</p>
                    <p className="text-sm text-gray-600">{a.email}</p>
                    <p className="text-xs text-gray-500">{a.createdAt.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={a.status === 'APPROVED' ? 'default' : 'destructive'}>{a.status}</Badge>
                    <Link href={`/admin/applications/${a.id}`} className="text-sm text-gold hover:underline">
                      View
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
