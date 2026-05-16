import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { isAdminRole } from '@/lib/roles'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  // If not authenticated, show children without layout (for login page)
  if (!session) {
    return <>{children}</>
  }

  const role = (session.user as { role?: string }).role
  if (!isAdminRole(role)) {
    redirect('/dashboard')
  }

  // If authenticated, show full admin layout
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader session={session} />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
