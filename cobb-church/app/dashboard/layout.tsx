import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { isAdminRole, isChurchUserRole } from '@/lib/roles'
import DashboardNav from '@/components/dashboard/DashboardNav'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session?.user) redirect('/login')

  const role = session.user.role
  if (!isChurchUserRole(role)) redirect('/login')

  if (isAdminRole(role) && !session.user.churchId) {
    redirect('/admin/dashboard')
  }

  if (!isAdminRole(role) && !session.user.churchId) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">{children}</div>
    </div>
  )
}
