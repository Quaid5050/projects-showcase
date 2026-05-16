import { requireAdmin } from '@/lib/auth-helpers'
import ChurchForm from '@/components/admin/ChurchForm'

export default async function NewChurchPage() {
  await requireAdmin()
  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Add New Church</h1>
        <p className="text-gray-600 mt-1">Create a new church profile</p>
      </div>
      <ChurchForm />
    </div>
  )
}
