import Link from 'next/link'
import { getCurrentUserWithChurch } from '@/lib/auth-helpers'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default async function DashboardResourcesPage() {
  const { user } = await getCurrentUserWithChurch()
  const resources = await prisma.resource.findMany({
    where: { churchId: user.churchId! },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-navy-dark font-display">Our Resources</h1>
          <p className="text-gray-600 mt-1">Offers and requests visible to your church dashboard.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild className="bg-gold hover:bg-gold-light text-navy-dark">
            <Link href="/dashboard/resources/new?type=offer">New offer</Link>
          </Button>
          <Button asChild variant="outline" className="border-navy-dark text-navy-dark">
            <Link href="/dashboard/resources/new?type=request">New request</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {resources.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center text-gray-600">
              No resources yet. Create an offer or a request to get started.
            </CardContent>
          </Card>
        ) : (
          resources.map((r) => (
            <Card key={r.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg text-navy-dark">{r.title}</CardTitle>
                <div className="flex gap-2">
                  <Badge variant={r.type === 'OFFER' ? 'default' : 'secondary'}>{r.type}</Badge>
                  <Badge variant="outline">{r.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">{r.category}</p>
                <p className="text-gray-700 text-sm">{r.description}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
