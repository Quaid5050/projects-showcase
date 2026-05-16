import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AnnouncementCreateForm from '@/components/admin/AnnouncementCreateForm'

export default async function AdminAnnouncementsPage() {
  await requireAdmin()
  const rows = await prisma.announcement.findMany({ orderBy: { createdAt: 'desc' }, take: 50 })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
        <p className="text-gray-600 mt-1">Create network-wide announcements for church dashboards.</p>
      </div>

      <AnnouncementCreateForm />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent</h2>
        {rows.length === 0 ? (
          <p className="text-gray-500">No announcements yet.</p>
        ) : (
          rows.map((a) => (
            <Card key={a.id}>
              <CardHeader>
                <CardTitle className="text-lg">{a.title}</CardTitle>
                <p className="text-xs text-gray-500">
                  {a.published ? 'Published' : 'Draft'} · {a.notifyByEmail ? 'Email requested' : 'No email'} ·{' '}
                  {a.createdAt.toLocaleString()}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{a.body}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
