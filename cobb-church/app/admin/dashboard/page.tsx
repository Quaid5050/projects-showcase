import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Church, Calendar, Package, AlertCircle, MessageSquare, Users } from 'lucide-react'

export default async function DashboardPage() {
  await requireAdmin()
  const [
    churchCount,
    eventCount,
    resourceCount,
    crisisCount,
    storyCount,
    userCount,
    recentEvents,
    recentCrisis,
  ] = await Promise.all([
    prisma.church.count(),
    prisma.event.count(),
    prisma.resource.count(),
    prisma.crisisNeed.count({ where: { status: 'active' } }),
    prisma.pastorStory.count(),
    prisma.user.count(),
    prisma.event.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: { id: true, title: true, date: true, location: true },
    }),
    prisma.crisisNeed.findMany({
      take: 5,
      where: { status: 'active' },
      orderBy: { createdAt: 'desc' },
      select: { id: true, title: true, urgency: true, createdAt: true },
    }),
  ])

  const stats = [
    {
      title: 'Total Churches',
      value: churchCount,
      icon: Church,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Events',
      value: eventCount,
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Resources',
      value: resourceCount,
      icon: Package,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Active Crisis Needs',
      value: crisisCount,
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      title: 'Pastor Stories',
      value: storyCount,
      icon: MessageSquare,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'Admin Users',
      value: userCount,
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to the admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Recent Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentEvents.length === 0 ? (
              <p className="text-gray-500 text-sm">No events yet</p>
            ) : (
              <div className="space-y-3">
                {recentEvents.map((event) => (
                  <div key={event.id} className="flex justify-between items-start border-b pb-3 last:border-0">
                    <div>
                      <p className="font-medium text-sm">{event.title}</p>
                      <p className="text-xs text-gray-500">{event.location}</p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Active Crisis Needs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              Active Crisis Needs
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentCrisis.length === 0 ? (
              <p className="text-gray-500 text-sm">No active crisis needs</p>
            ) : (
              <div className="space-y-3">
                {recentCrisis.map((crisis) => (
                  <div key={crisis.id} className="flex justify-between items-start border-b pb-3 last:border-0">
                    <div>
                      <p className="font-medium text-sm">{crisis.title}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        crisis.urgency === 'urgent' 
                          ? 'bg-red-100 text-red-700' 
                          : crisis.urgency === 'high'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {crisis.urgency}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(crisis.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
