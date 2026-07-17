'use client';
import { useSession } from 'next-auth/react';
import AdminShell from '@/components/admin/AdminShell';
export default function AnalyticsPage() {
  const { data: session } = useSession();
  return (
    <AdminShell title="Analytics" username={session?.user?.name || 'admin'}>
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center">
        <p className="text-gray-400 text-lg mb-2">Analytics Dashboard</p>
        <p className="text-gray-600 text-sm">Detailed analytics coming soon. View inquiry stats on the Dashboard.</p>
      </div>
    </AdminShell>
  );
}
