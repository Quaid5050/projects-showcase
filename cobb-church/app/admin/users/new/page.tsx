import { requireAdmin } from '@/lib/auth-helpers'
import UserForm from '@/components/admin/UserForm'

export default async function NewUserPage() {
  await requireAdmin()
  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Create User</h1>
        <p className="text-gray-600 mt-1">Add a new admin user to the system</p>
      </div>
      <UserForm />
    </div>
  )
}
