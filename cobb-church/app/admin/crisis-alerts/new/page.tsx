import Link from 'next/link'
import { requireAdmin } from '@/lib/auth-helpers'
import CrisisAlertNewForm from '@/components/admin/CrisisAlertNewForm'

export default async function NewCrisisAlertPage() {
  await requireAdmin()
  return (
    <div className="space-y-6">
      <Link href="/admin/crisis-alerts" className="text-sm text-gold hover:underline">
        ← Back to crisis alerts
      </Link>
      <CrisisAlertNewForm />
    </div>
  )
}
