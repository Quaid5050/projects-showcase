import Link from 'next/link'
import { getCurrentUserWithChurch } from '@/lib/auth-helpers'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CrisisRespondForm from '@/components/dashboard/CrisisRespondForm'

function profileCompletionPct(c: {
  name: string
  pastorName: string
  email: string
  phone: string
  website: string | null
  address: string
  city: string
  state: string
  zip: string
  description: string
  denomination: string | null
  ministries: string[]
}) {
  const checks = [
    !!c.name,
    !!c.pastorName,
    !!c.email,
    !!c.phone,
    !!c.address && c.address !== 'TBD — update in dashboard',
    !!c.city,
    !!c.state,
    !!c.zip && c.zip !== '00000',
    !!c.description,
    !!c.website,
    !!c.denomination,
    (c.ministries?.length ?? 0) > 0,
  ]
  const filled = checks.filter(Boolean).length
  return Math.round((filled / checks.length) * 100)
}

export default async function DashboardHomePage() {
  const { user } = await getCurrentUserWithChurch()
  const churchId = user.churchId!
  const church = user.church
  if (!church) {
    return <p className="text-gray-600">No church profile linked to this account.</p>
  }

  const pastorFirst = (user.name || church.pastorName || 'Pastor').split(' ')[0] || 'Pastor'

  const [
    offers,
    requests,
    churchCount,
    recentChurches,
    upcomingEvents,
    unreadMessages,
    announcements,
    crisisAlerts,
    myRegistrations,
  ] = await Promise.all([
    prisma.resource.findMany({
      where: { churchId, type: 'OFFER', status: 'ACTIVE' },
      take: 5,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.resource.findMany({
      where: { churchId, type: 'REQUEST', status: 'ACTIVE' },
      take: 5,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.church.count({ where: { published: true, approvalStatus: 'APPROVED' } }),
    prisma.church.findMany({
      where: { published: true, approvalStatus: 'APPROVED' },
      orderBy: { createdAt: 'desc' },
      take: 4,
      select: { id: true, name: true, slug: true, city: true, state: true, pastorName: true },
    }),
    prisma.event.findMany({
      where: { published: true, date: { gte: new Date() } },
      orderBy: { date: 'asc' },
      take: 4,
    }),
    prisma.message.count({
      where: { recipientChurchId: churchId, read: false },
    }),
    prisma.announcement.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      take: 3,
    }),
    prisma.crisisAlert.findMany({
      where: { active: true },
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
    prisma.eventRegistration.findMany({
      where: { churchId, userId: user.id },
      include: { event: { select: { id: true, title: true, slug: true, date: true, location: true } } },
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
  ])

  const completion = profileCompletionPct(church)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-navy-dark font-display">
          Welcome back, Pastor {pastorFirst}
        </h1>
        <p className="text-gray-600 mt-2">
          Here&apos;s what&apos;s happening across the Cobb Church Network today.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button asChild className="bg-navy-dark hover:bg-navy-medium text-white">
          <Link href="/dashboard/profile">Update Church Profile</Link>
        </Button>
        <Button asChild className="bg-gold hover:bg-gold-light text-navy-dark">
          <Link href="/dashboard/resources/new?type=offer">Offer a Resource</Link>
        </Button>
        <Button asChild variant="outline" className="border-navy-dark text-navy-dark">
          <Link href="/dashboard/resources/new?type=request">Request Help</Link>
        </Button>
        <Button asChild variant="outline" className="border-navy-dark text-navy-dark">
          <Link href="/directory">View Directory</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-navy-dark">My Church Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-700">
            <p>
              <span className="font-semibold">{church.name}</span>
            </p>
            <p>Pastor {church.pastorName}</p>
            <p>
              {church.city}, {church.state}
            </p>
            <p>{church.phone}</p>
            <p className="break-all">{church.email}</p>
            <p className="break-all">{church.website || '—'}</p>
            <p className="text-gold font-semibold">Profile completion: {completion}%</p>
            <Button asChild size="sm" className="mt-2 bg-navy-dark hover:bg-navy-medium text-white">
              <Link href="/dashboard/profile">Edit Profile</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-navy-dark">Resources We Offer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {offers.length === 0 ? (
              <p className="text-gray-600">No active offers yet.</p>
            ) : (
              <ul className="list-disc pl-5 text-gray-700">
                {offers.map((r) => (
                  <li key={r.id}>{r.title}</li>
                ))}
              </ul>
            )}
            <Button asChild size="sm" variant="outline" className="mt-2 border-navy-dark">
              <Link href="/dashboard/resources/new?type=offer">Add Resource</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-navy-dark">Resources We Need</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {requests.length === 0 ? (
              <p className="text-gray-600">No active requests yet.</p>
            ) : (
              <ul className="list-disc pl-5 text-gray-700">
                {requests.map((r) => (
                  <li key={r.id}>{r.title}</li>
                ))}
              </ul>
            )}
            <Button asChild size="sm" variant="outline" className="mt-2 border-navy-dark">
              <Link href="/dashboard/resources/new?type=request">Request Resource</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-navy-dark">Church Directory</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-gray-700">
            <p>
              <span className="font-semibold text-navy-dark">{churchCount}</span> approved churches in the network.
            </p>
            <div>
              <p className="font-semibold text-navy-dark mb-1">Recently added</p>
              <ul className="space-y-1">
                {recentChurches.map((c) => (
                  <li key={c.id}>
                    <Link href={`/directory/${c.slug}`} className="text-gold hover:underline">
                      {c.name}
                    </Link>
                    <span className="text-gray-500">
                      {' '}
                      — {c.city}, {c.state}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <Button asChild size="sm" className="bg-navy-dark text-white hover:bg-navy-medium">
                <Link href="/directory">Search Directory</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-navy-dark">
                <Link href="/directory">View All Churches</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-navy-dark">Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {upcomingEvents.length === 0 ? (
              <p className="text-gray-600">No upcoming events listed.</p>
            ) : (
              <ul className="space-y-2 text-gray-700">
                {upcomingEvents.map((ev) => (
                  <li key={ev.id}>
                    <Link href={`/events/${ev.slug}`} className="font-medium text-navy-dark hover:text-gold">
                      {ev.title}
                    </Link>
                    <p className="text-gray-500 text-xs">
                      {ev.date.toLocaleDateString()} · {ev.location}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            {myRegistrations.length > 0 && (
              <div className="pt-3 mt-3 border-t border-gray-200">
                <p className="font-semibold text-navy-dark text-xs mb-2">Your RSVPs</p>
                <ul className="space-y-1 text-gray-700 text-xs">
                  {myRegistrations.map((r) => (
                    <li key={r.id}>
                      <Link href={`/events/${r.event.slug}`} className="text-gold hover:underline">
                        {r.event.title}
                      </Link>{' '}
                      <span className="text-gray-500">({r.status})</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-2 pt-2">
              <Button asChild size="sm" className="mt-1 bg-gold text-navy-dark hover:bg-gold-light">
                <Link href="/events">View Events</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="mt-1 border-navy-dark">
                <Link href="/dashboard/events">My RSVPs</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-navy-dark">Crisis Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-gray-700">
            {crisisAlerts.length === 0 ? (
              <p>No active crisis alerts at this time.</p>
            ) : (
              crisisAlerts.map((a) => (
                <div key={a.id} className="border border-red-100 rounded-lg p-4 bg-red-50/40">
                  <p className="font-bold text-navy-dark">{a.title}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Urgency: {a.urgency}
                    {a.location?.trim() ? ` · ${a.location}` : ''}
                  </p>
                  <p className="mt-2 whitespace-pre-wrap">{a.body}</p>
                  <div className="mt-4">
                    <CrisisRespondForm
                      crisisAlertId={a.id}
                      defaultName={user.name || church.pastorName || ''}
                      defaultEmail={user.email || ''}
                    />
                  </div>
                </div>
              ))
            )}
            <Button asChild size="sm" variant="outline" className="border-navy-dark">
              <Link href="/dashboard/crisis">View all crisis alerts</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-navy-dark">Messages / Connections</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-700">
            <p>
              <span className="font-semibold text-navy-dark">{unreadMessages}</span> unread messages for your church.
            </p>
            <Button asChild size="sm" className="bg-navy-dark text-white hover:bg-navy-medium">
              <Link href="/dashboard/messages">Open Messages</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-navy-dark">Announcements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            {announcements.length === 0 ? (
              <p className="text-gray-600">No announcements yet.</p>
            ) : (
              announcements.map((a) => (
                <div key={a.id} className="border-b border-gray-200 pb-3 last:border-0">
                  <p className="font-semibold text-navy-dark">{a.title}</p>
                  <p className="text-gray-700 mt-1">{a.body}</p>
                </div>
              ))
            )}
            <Button asChild size="sm" variant="outline" className="border-navy-dark">
              <Link href="/dashboard/announcements">View All Announcements</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
