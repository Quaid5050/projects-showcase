import { requireAdmin } from '@/lib/auth-helpers'
import EventForm from '@/components/admin/EventForm'

export default async function NewEventPage() {
  await requireAdmin()
  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Add New Event</h1>
        <p className="text-gray-600 mt-1">Create a new event</p>
      </div>
      <EventForm />
    </div>
  )
}
