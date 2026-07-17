'use client';
import { useSession } from 'next-auth/react';
import AdminShell from '@/components/admin/AdminShell';
import EntityManager from '@/components/admin/EntityManager';

const partnershipFields = [
  { key: 'title', label: 'Title', required: true, colSpan: 2 as const },
  { key: 'slug', label: 'Slug', required: true },
  { key: 'icon', label: 'Icon (Lucide name)', placeholder: 'Handshake' },
  { key: 'order', label: 'Display Order', type: 'number' as const },
  { key: 'description', label: 'Description', type: 'textarea' as const, required: true, colSpan: 2 as const },
  { key: 'image', label: 'Image Path', placeholder: '/hero-background.png', colSpan: 2 as const },
];

export default function AdminPartnershipsPage() {
  const { data: session } = useSession();

  return (
    <AdminShell title="Partnerships" username={session?.user?.name || 'admin'}>
      <EntityManager
        title="Partnership Types"
        description="Manage partnership types stored in MongoDB. These appear on the partnership page and public API."
        apiPath="/api/admin/partnerships"
        publicPath="/partnerships"
        fields={partnershipFields}
      />
    </AdminShell>
  );
}
