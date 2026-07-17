import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/auth';
import AdminSidebar from '@/components/AdminSidebar';

export const metadata = {
  title: 'Admin Dashboard - Burnaby Palace Restaurant',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Login page doesn't need auth check
  return (
    <div className="min-h-screen bg-[#111] text-gray-100 font-sans">
      {children}
    </div>
  );
}
