'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type NavItem = { href: string; label: string; icon: string; matchExact?: boolean };

const items: NavItem[] = [
  { href: '/dashboard', label: 'Restaurants', icon: '🏪', matchExact: true },
  { href: '/dashboard/restaurants/new', label: 'New Restaurant', icon: '➕' },
  { href: '/dashboard/restaurant-users/new', label: 'New Owner', icon: '👤' },
];

type Props = {
  open?: boolean;
  onClose?: () => void;
};

export default function Sidebar({ open, onClose }: Props) {
  const pathname = usePathname();

  function isActive(item: NavItem) {
    if (item.matchExact) return pathname === item.href;
    return pathname === item.href || pathname.startsWith(item.href + '/');
  }

  const nav = (
    <>
      <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-5">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white text-xs font-bold">
          MCP
        </div>
        <span className="font-semibold text-slate-900">Control Panel</span>
        {/* Close button — mobile only */}
        {onClose && (
          <button
            onClick={onClose}
            className="ml-auto rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 md:hidden"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <nav className="flex-1 px-3 py-4">
        <ul className="flex flex-col gap-1">
          {items.map((item) => {
            const active = isActive(item);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    active
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-700 hover:bg-slate-100'
                  )}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-slate-200 px-5 py-3 text-xs text-slate-400">
        v0.1.0
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-60 flex-shrink-0 border-r border-slate-200 bg-white md:flex md:flex-col">
        {nav}
      </aside>

      {/* Mobile drawer backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm md:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-200 md:hidden',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {nav}
      </aside>
    </>
  );
}
