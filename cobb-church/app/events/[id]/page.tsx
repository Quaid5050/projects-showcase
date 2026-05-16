import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { isChurchUserRole } from '@/lib/roles'
import HeroSection from '@/components/sections/HeroSection'
import { Button } from '@/components/ui/button'
import EventRegisterForm from '@/components/events/EventRegisterForm'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params
  const session = await getServerSession(authOptions)
  const isLoggedInChurch =
    !!session?.user?.churchId && isChurchUserRole(session.user.role)

  const event = await prisma.event.findFirst({
    where: {
      published: true,
      OR: [{ slug: id }, { id }],
    },
  })

  if (!event) {
    notFound()
  }

  const registration = isLoggedInChurch
    ? await prisma.eventRegistration.findFirst({
        where: { eventId: event.id, userId: session!.user!.id },
      })
    : null

  const isFull = event.capacity != null && event.registered >= event.capacity

  const dateLabel = event.date.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <HeroSection
        title={event.title}
        subtitle="Event Details"
        backgroundImage={event.image || '/images/event-gathering.jpg'}
        overlayOpacity={0.4}
      />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">About This Event</h2>
                <p className="text-medium-gray leading-relaxed text-lg">{event.description}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">Event Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">Date & Time</p>
                    <p className="text-dark-text text-lg">
                      {dateLabel} at {event.time}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">Location</p>
                    <p className="text-dark-text text-lg">{event.location}</p>
                    {event.address && <p className="text-medium-gray text-sm mt-1">{event.address}</p>}
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">Category</p>
                    <p className="text-dark-text text-lg">{event.category}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light-gray rounded-lg p-6 h-fit">
              <h3 className="text-xl font-bold text-dark-text mb-6">Register for This Event</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">Date</p>
                  <p className="text-dark-text">{dateLabel}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">Time</p>
                  <p className="text-dark-text">{event.time}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">Location</p>
                  <p className="text-dark-text text-sm">{event.location}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">Organizer</p>
                  <p className="text-dark-text">{event.organizer}</p>
                </div>
              </div>

              <EventRegisterForm
                eventId={event.id}
                isLoggedInChurch={isLoggedInChurch}
                alreadyRegistered={!!registration}
                isFull={isFull}
                defaultName={session?.user?.name || ''}
                defaultEmail={session?.user?.email || ''}
              />
              <Button asChild variant="outline" className="w-full border-navy-dark text-navy-dark font-bold mt-2">
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
