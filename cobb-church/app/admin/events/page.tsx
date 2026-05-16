import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus, Edit, Trash2 } from 'lucide-react'
import DeleteButton from '@/components/admin/DeleteButton'

export default async function EventsPage() {
  await requireAdmin()
  const events = await prisma.event.findMany({
    orderBy: { date: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-600 mt-1">Manage events and activities</p>
        </div>
        <Link href="/admin/events/new">
          <Button className="bg-gold hover:bg-gold-light text-navy-dark">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-lg">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.location}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </p>
                  <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                    {event.category}
                  </span>
                </div>
                
                <div className="flex flex-col gap-2 pt-3 border-t">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/events/${event.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </Link>
                    <DeleteButton id={event.id} name={event.title} endpoint="events" />
                  </div>
                  <Link href={`/admin/events/${event.id}/registrations`} className="block">
                    <Button variant="secondary" size="sm" className="w-full">
                      Registrations ({event.registered})
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {events.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500">No events yet. Add your first event to get started.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
