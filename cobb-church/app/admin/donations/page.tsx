import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function AdminDonationsPage() {
  await requireAdmin()
  const rows = await prisma.donation.findMany({
    orderBy: { createdAt: 'desc' },
    take: 100,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Donations</h1>
        <p className="text-gray-600 mt-1">Gifts recorded after Stripe confirms payment (webhook).</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent donations</CardTitle>
        </CardHeader>
        <CardContent>
          {rows.length === 0 ? (
            <p className="text-gray-500 text-sm">No donations recorded yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b text-gray-600">
                    <th className="py-2 pr-4">Date</th>
                    <th className="py-2 pr-4">Amount</th>
                    <th className="py-2 pr-4">Frequency</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2 pr-4">Donor</th>
                    <th className="py-2 pr-4">Stripe session</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((d) => (
                    <tr key={d.id} className="border-b border-gray-100">
                      <td className="py-2 pr-4 whitespace-nowrap">{d.createdAt.toLocaleString()}</td>
                      <td className="py-2 pr-4">
                        {(d.amountTotal / 100).toLocaleString('en-US', { style: 'currency', currency: d.currency })}
                      </td>
                      <td className="py-2 pr-4">{d.frequency}</td>
                      <td className="py-2 pr-4">{d.status}</td>
                      <td className="py-2 pr-4">
                        {d.donorName || '—'} {d.donorEmail ? <span className="text-gray-500">({d.donorEmail})</span> : null}
                      </td>
                      <td className="py-2 pr-4 font-mono text-xs max-w-[140px] truncate">{d.stripeSessionId || '—'}</td>
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
