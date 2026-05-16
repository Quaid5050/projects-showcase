import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'

export default async function AdminCrisisAlertsPage() {
  await requireAdmin()
  const rows = await prisma.crisisAlert.findMany({ orderBy: { createdAt: 'desc' }, take: 100 })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Crisis alerts</h1>
          <p className="text-gray-600 mt-1">Create alerts and notify churches when activated.</p>
        </div>
        <Link href="/admin/crisis-alerts/new">
          <Button className="bg-gold hover:bg-gold-light text-navy-dark">
            <Plus className="h-4 w-4 mr-2" />
            New alert
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {rows.map((r) => (
          <Card key={r.id}>
            <CardContent className="p-6 flex flex-wrap justify-between gap-4">
              <div>
                <p className="font-bold text-lg">{r.title}</p>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{r.body}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {r.active ? <span className="text-red-700 font-semibold">ACTIVE</span> : 'Inactive'} ·{' '}
                  {r.notifyByEmail ? 'Email on activate' : 'No email'}
                </p>
              </div>
              <Link href={`/admin/crisis-alerts/${r.id}`}>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {rows.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center text-gray-500">No crisis alerts yet.</CardContent>
        </Card>
      )}
    </div>
  )
}
