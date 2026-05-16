import { getCurrentUserWithChurch } from '@/lib/auth-helpers'
import ChurchProfileForm from './ChurchProfileForm'

export default async function DashboardProfilePage() {
  const { user } = await getCurrentUserWithChurch()
  const church = user.church
  if (!church) {
    return <p className="text-gray-600">No church linked.</p>
  }

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-dark font-display">Church Profile</h1>
        <p className="text-gray-600 mt-1">Update how your church appears across the network.</p>
      </div>
      <ChurchProfileForm church={church} />
    </div>
  )
}
