import type { Metadata } from 'next';
import { AdminProviders } from '@/components/Providers';

/** Admin pages use session/auth — skip static prerender to save build disk I/O */
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Admin Panel | YUVAAN INTERNATIONAL',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProviders>
      <div className="min-h-screen bg-gray-950 font-inter">
        {children}
      </div>
    </AdminProviders>
  );
}
