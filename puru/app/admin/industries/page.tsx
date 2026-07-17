'use client';
import { useSession } from 'next-auth/react';
import AdminShell from '@/components/admin/AdminShell';
import EntityManager from '@/components/admin/EntityManager';

const industryFields = [
  { key: 'title', label: 'Title', required: true, colSpan: 2 as const },
  { key: 'slug', label: 'Slug', required: true },
  { key: 'icon', label: 'Icon (Lucide name)', placeholder: 'Factory' },
  { key: 'order', label: 'Display Order', type: 'number' as const },
  { key: 'description', label: 'Description', type: 'textarea' as const, required: true, colSpan: 2 as const },
  { key: 'image', label: 'Image Path', placeholder: '/hero-background.png', colSpan: 2 as const },
];

export default function AdminIndustriesPage() {
  const { data: session } = useSession();

  return (
    <AdminShell title="Industries" username={session?.user?.name || 'admin'}>
      <EntityManager
        title="Industries We Serve"
        description="Manage industry sectors stored in MongoDB. These power the industries listing page and public API."
        apiPath="/api/admin/industries"
        publicPath="/industries"
        fields={industryFields}
      />
    </AdminShell>
  );
}
