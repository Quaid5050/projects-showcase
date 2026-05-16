import Link from 'next/link'
import { getCurrentUserWithChurch } from '@/lib/auth-helpers'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MarkMessageReadButton from '@/components/dashboard/MarkMessageReadButton'

export default async function DashboardMessagesPage() {
  const { user } = await getCurrentUserWithChurch()
  const churchId = user.churchId!

  const [inbox, sent] = await Promise.all([
    prisma.message.findMany({
      where: { recipientChurchId: churchId },
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: {
        senderChurch: { select: { name: true } },
        senderUser: { select: { name: true, email: true } },
        relatedResource: { select: { id: true, title: true } },
      },
    }),
    prisma.message.findMany({
      where: { senderChurchId: churchId },
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: { recipientChurch: { select: { name: true } } },
    }),
  ])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-navy-dark font-display">Messages</h1>
        <p className="text-gray-600 mt-1">Inbox and sent mail for {user.church?.name}</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-navy-dark">Inbox</h2>
        {inbox.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-gray-600">
              No messages yet. When churches respond to your resources or requests, they&apos;ll appear here.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {inbox.map((m) => (
              <Card key={m.id}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg text-navy-dark">{m.subject}</CardTitle>
                      <p className="text-xs text-gray-500 mt-1">
                        From {m.senderChurch.name} · {m.createdAt.toLocaleString()} · {m.read ? 'Read' : 'Unread'}
                        {m.messageKind !== 'GENERAL' && (
                          <span className="ml-2 text-gold">· {m.messageKind.replace(/_/g, ' ')}</span>
                        )}
                      </p>
                    </div>
                    {!m.read ? <MarkMessageReadButton messageId={m.id} /> : null}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {m.relatedResource ? (
                    <p className="text-sm">
                      <span className="text-gray-500">Related resource: </span>
                      <Link href={`/resources/${m.relatedResource.id}`} className="text-gold font-semibold hover:underline">
                        {m.relatedResource.title}
                      </Link>
                    </p>
                  ) : null}
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{m.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-navy-dark">Sent</h2>
        {sent.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-gray-600">No sent messages yet.</CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {sent.map((m) => (
              <Card key={m.id}>
                <CardHeader>
                  <CardTitle className="text-lg text-navy-dark">{m.subject}</CardTitle>
                  <p className="text-xs text-gray-500">
                    To {m.recipientChurch.name} · {m.createdAt.toLocaleString()}
                    {m.messageKind !== 'GENERAL' && (
                      <span className="ml-2 text-gold">· {m.messageKind.replace(/_/g, ' ')}</span>
                    )}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{m.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <Link href="/dashboard" className="text-gold font-semibold text-sm hover:underline">
        ← Back to dashboard
      </Link>
    </div>
  )
}
