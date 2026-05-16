import Link from 'next/link'
import { getCurrentUserWithChurch } from '@/lib/auth-helpers'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CrisisRespondForm from '@/components/dashboard/CrisisRespondForm'

export default async function DashboardCrisisPage() {
  const { user } = await getCurrentUserWithChurch()
  const church = user.church
  if (!church) {
    return <p className="text-gray-600">No church profile linked to this account.</p>
  }

  const crisisAlerts = await prisma.crisisAlert.findMany({
    where: { active: true },
    orderBy: { createdAt: 'desc' },
    take: 20,
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-navy-dark font-display">Crisis alerts</h1>
        <p className="text-gray-600 mt-1">Active network alerts and how your church can help.</p>
      </div>

      {crisisAlerts.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-gray-600">No active crisis alerts at this time.</CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {crisisAlerts.map((a) => (
            <Card key={a.id} className="border-red-100">
              <CardHeader>
                <CardTitle className="text-navy-dark text-xl">{a.title}</CardTitle>
                <p className="text-xs text-gray-500">
                  Urgency: {a.urgency}
                  {a.location?.trim() ? ` · Location: ${a.location}` : ''}
                </p>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-gray-800">
                <p className="whitespace-pre-wrap">{a.body}</p>
                {a.instructions?.trim() ? (
                  <div className="rounded-md bg-amber-50 border border-amber-200 p-3">
                    <p className="font-semibold text-navy-dark text-xs mb-1">Instructions</p>
                    <p className="whitespace-pre-wrap">{a.instructions}</p>
                  </div>
                ) : null}
                <CrisisRespondForm
                  crisisAlertId={a.id}
                  defaultName={user.name || church.pastorName || ''}
                  defaultEmail={user.email || ''}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Button asChild variant="outline" className="border-navy-dark">
        <Link href="/dashboard">← Back to dashboard</Link>
      </Button>
    </div>
  )
}
