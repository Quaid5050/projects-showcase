'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FileText, ArrowRight, Globe, Handshake, Factory, Phone, Info, Package } from 'lucide-react';
import AdminShell from '@/components/admin/AdminShell';

const pages = [
  { path: '/', label: 'Home Page', icon: Globe, content: 'hero, about preview, products preview, partnership preview, industries preview, CTA', editSection: 'hero' },
  { path: '/about', label: 'About Page', icon: Info, content: 'about overview, mission, vision, values', editSection: 'about' },
  { path: '/products', label: 'Products Page', icon: Package, content: 'product categories, inquiry modal', editSection: 'products' },
  { path: '/partnerships', label: 'Partnerships Page', icon: Handshake, content: 'distributors wanted, partnership types, process, inquiry CTAs', editSection: 'partnership' },
  { path: '/industries', label: 'Industries Page', icon: Factory, content: 'industry cards, custom requirement CTA', editSection: 'industries' },
  { path: '/contact', label: 'Contact Page', icon: Phone, content: 'inquiry form, contact details', editSection: 'contact' },
];

export default function PagesPage() {
  const { data: session } = useSession();
  return (
    <AdminShell title="Pages" username={session?.user?.name || 'admin'}>
      <p className="text-gray-400 text-sm mb-6">
        Click &quot;Edit Content&quot; to edit the text for each page in the Site Content Editor.
        Click &quot;View Page&quot; to preview the live page.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {pages.map((page) => (
          <div key={page.path} className="bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                <page.icon className="w-5 h-5 text-teal-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white text-base">{page.label}</h3>
                <code className="text-gray-500 text-xs">{page.path}</code>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-5">{page.content}</p>
            <div className="flex items-center gap-2">
              <Link
                href={`/admin/content`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium hover:bg-teal-500/20 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                Edit Content
              </Link>
              <Link
                href={page.path}
                target="_blank"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 text-sm hover:border-gray-600 transition-all"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
