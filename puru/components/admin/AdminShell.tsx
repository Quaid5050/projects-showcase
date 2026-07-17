'use client';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import {
  LayoutDashboard, MessageSquare, Users, FileEdit, Globe,
  LogOut, Menu, X, ChevronRight, Bell, Settings, Factory,
  Handshake, BarChart3, Tag
} from 'lucide-react';
import AdminBrand from './AdminBrand';

const navItems = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
  { href: '/admin/inquiries', icon: MessageSquare, label: 'Inquiries' },
  { href: '/admin/leads', icon: Users, label: 'Leads' },
  { href: '/admin/content', icon: FileEdit, label: 'Site Content' },
  { href: '/admin/pages', icon: Globe, label: 'Pages' },
  { href: '/admin/products', icon: Factory, label: 'Products' },
  { href: '/admin/partnerships', icon: Handshake, label: 'Partnerships' },
  { href: '/admin/industries', icon: Tag, label: 'Industries' },
  { href: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
];

interface AdminShellProps {
  children: React.ReactNode;
  title?: string;
  username?: string;
}

export default function AdminShell({ children, title = 'Dashboard', username = 'admin' }: AdminShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-950 overflow-hidden">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 flex flex-col transition-transform duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-5 py-5 border-b border-gray-800">
          <div className="flex items-start gap-2">
            <AdminBrand compact showLink />
            <button
              onClick={() => setSidebarOpen(false)}
              className="ml-auto lg:hidden text-gray-400 hover:text-white mt-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                  active
                    ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <item.icon className={`w-4 h-4 flex-shrink-0 ${active ? 'text-teal-400' : 'text-gray-500 group-hover:text-gray-300'}`} />
                {item.label}
                {active && <ChevronRight className="w-3.5 h-3.5 ml-auto text-teal-400" />}
              </Link>
            );
          })}
        </nav>

        <div className="px-4 py-4 border-t border-gray-800">
          <div className="flex items-center gap-3 mb-3 px-1">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold uppercase ring-2 ring-teal-500/20">
              {username.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{username}</p>
              <p className="text-gray-500 text-xs">Administrator</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 w-full px-3 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 text-sm transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <header className="bg-gray-900/95 backdrop-blur border-b border-gray-800 px-4 sm:px-6 py-3.5 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-400 hover:text-white p-1"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex-1 min-w-0">
            <h1 className="text-white font-semibold text-lg font-sora truncate">{title}</h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline text-gray-400 hover:text-white text-xs bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700 transition-colors"
            >
              View Site ↗
            </Link>
            <button className="relative p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-950">
          {children}
        </main>
      </div>
    </div>
  );
}
