import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function DashboardAnnouncementsPage() {
  const items = await prisma.announcement.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-dark font-display">Announcements</h1>
        <p className="text-gray-600 mt-1">Network-wide updates.</p>
      </div>

      <div className="space-y-4">
        {items.map((a) => (
          <Card key={a.id}>
            <CardHeader>
              <CardTitle className="text-navy-dark">{a.title}</CardTitle>
              <p className="text-xs text-gray-500">{a.createdAt.toLocaleDateString()}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 whitespace-pre-wrap">{a.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Link href="/dashboard" className="text-gold font-semibold text-sm hover:underline">
        ← Back to dashboard
      </Link>
    </div>
  )
}
