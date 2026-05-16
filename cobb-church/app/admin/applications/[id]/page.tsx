import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ApplicationActions from './ApplicationActions'

export default async function AdminApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin()
  const { id } = await params
  const application = await prisma.onboardingApplication.findUnique({ where: { id } })
  if (!application) notFound()

  return (
    <div className="max-w-3xl space-y-6">
      <Link href="/admin/applications" className="text-sm text-gold font-semibold hover:underline">
        ← All applications
      </Link>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Application</h1>
        <p className="text-gray-600 mt-1">{application.churchName}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Applicant</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Name:</span> {application.firstName} {application.lastName}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {application.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {application.phone}
          </p>
          <p>
            <span className="font-semibold">Role:</span> {application.roleTitle}
          </p>
          <p>
            <span className="font-semibold">Church city:</span> {application.churchCity}
          </p>
          <p>
            <span className="font-semibold">Website:</span> {application.churchWebsite || '—'}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {application.status}
          </p>
          <p>
            <span className="font-semibold">Submitted:</span> {application.createdAt.toLocaleString()}
          </p>
        </CardContent>
      </Card>

      {application.message && (
        <Card>
          <CardHeader>
            <CardTitle>Message / connection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{application.message}</p>
          </CardContent>
        </Card>
      )}

      {application.howToConnect.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>How they want to connect</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {application.howToConnect.map((h: string) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <ApplicationActions applicationId={application.id} status={application.status} />
    </div>
  )
}
