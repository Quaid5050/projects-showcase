'use client';
import { useSession } from 'next-auth/react';
import AdminShell from '@/components/admin/AdminShell';
import EntityManager from '@/components/admin/EntityManager';

const productFields = [
  { key: 'title', label: 'Title', required: true, colSpan: 2 as const },
  { key: 'slug', label: 'Slug', required: true },
  { key: 'category', label: 'Category', required: true },
  { key: 'icon', label: 'Icon (Lucide name)', placeholder: 'Package' },
  { key: 'order', label: 'Display Order', type: 'number' as const },
  { key: 'shortDescription', label: 'Short Description', type: 'textarea' as const, required: true, colSpan: 2 as const },
  { key: 'audience', label: 'Target Audience', placeholder: 'Importers, Exporters, ...', colSpan: 2 as const },
  { key: 'isFeatured', label: 'Featured on Homepage', type: 'checkbox' as const },
];

export default function AdminProductsPage() {
  const { data: session } = useSession();

  return (
    <AdminShell title="Products" username={session?.user?.name || 'admin'}>
      <EntityManager
        title="Product Categories"
        description="Manage product and machinery categories stored in MongoDB. Changes appear on the live products page and API."
        apiPath="/api/admin/products"
        publicPath="/products"
        fields={productFields}
      />
    </AdminShell>
  );
}
