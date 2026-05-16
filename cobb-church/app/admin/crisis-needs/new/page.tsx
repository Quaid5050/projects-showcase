import { requireAdmin } from '@/lib/auth-helpers'
import CrisisNeedForm from '@/components/admin/CrisisNeedForm'

export default async function NewCrisisNeedPage() {
  await requireAdmin()
  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Create Crisis Need</h1>
        <p className="text-gray-600 mt-1">Add a new crisis need to the system</p>
      </div>
      <CrisisNeedForm />
    </div>
  )
}
