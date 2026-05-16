import { requireAdmin } from '@/lib/auth-helpers'
import PastorStoryForm from '@/components/admin/PastorStoryForm'

export default async function NewPastorStoryPage() {
  await requireAdmin()
  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Create Pastor Story</h1>
        <p className="text-gray-600 mt-1">Add a new pastor testimony or story</p>
      </div>
      <PastorStoryForm />
    </div>
  )
}
