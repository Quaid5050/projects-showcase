import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function AdminEmailLogsPage() {
  await requireAdmin()
  const rows = await prisma.emailLog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 150,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Email log</h1>
        <p className="text-gray-600 mt-1">Sent, logged (no provider), or failed messages from the platform.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent entries</CardTitle>
        </CardHeader>
        <CardContent>
          {rows.length === 0 ? (
            <p className="text-gray-500 text-sm">No email log entries yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b text-gray-600">
                    <th className="py-2 pr-4">Date</th>
                    <th className="py-2 pr-4">To</th>
                    <th className="py-2 pr-4">Template</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2 pr-4">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((e) => (
                    <tr key={e.id} className="border-b border-gray-100">
                      <td className="py-2 pr-4 whitespace-nowrap">{e.createdAt.toLocaleString()}</td>
                      <td className="py-2 pr-4 max-w-[180px] truncate">{e.to}</td>
                      <td className="py-2 pr-4">{e.template}</td>
                      <td className="py-2 pr-4">{e.status}</td>
                      <td className="py-2 pr-4 max-w-[240px] truncate">{e.subject}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      <Link href="/admin/dashboard" className="text-gold text-sm font-semibold hover:underline">
        ← Admin dashboard
      </Link>
    </div>
  )
}
