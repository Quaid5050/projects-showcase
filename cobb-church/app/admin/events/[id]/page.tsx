import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import { notFound } from 'next/navigation'
import EventForm from '@/components/admin/EventForm'

export default async function EditEventPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin()
  const { id } = await params
  const event = await prisma.event.findUnique({
    where: { id },
  })

  if (!event) {
    notFound()
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Edit Event</h1>
        <p className="text-gray-600 mt-1">Update event information</p>
      </div>
      <EventForm event={event} />
    </div>
  )
}
