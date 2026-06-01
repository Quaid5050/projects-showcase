import type { Metadata } from 'next'
import { AdminAuthProvider } from '@/components/admin/AdminAuthProvider'
import { AdminShell } from '@/components/admin/AdminShell'

export const metadata: Metadata = {
  title: {
    default: 'Admin — Mascot Chinese',
    template: '%s | Admin — Mascot Chinese',
  },
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminShell>{children}</AdminShell>
    </AdminAuthProvider>
  )
}
