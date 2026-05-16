'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';
import { clearStoredToken } from '@/lib/auth';
import type { AdminUser } from '@/lib/types';

type Props = {
  admin: AdminUser | null;
  onMenuClick?: () => void;
};

export default function Topbar({ admin, onMenuClick }: Props) {
  const router = useRouter();

  function onLogout() {
    clearStoredToken();
    router.replace('/login');
  }

  const initials = (admin?.name || admin?.email || '?')
    .split(/\s+/)
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
      {/* Left: hamburger (mobile) + brand (mobile) */}
      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuClick}
          className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 md:hidden"
          aria-label="Open menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Brand — mobile only (desktop shows it in sidebar) */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600 text-white text-xs font-bold">
            MCP
          </div>
          <span className="font-semibold text-slate-900 text-sm">Control Panel</span>
        </div>
      </div>

      {/* Right: user info + logout */}
      <div className="flex items-center gap-2 md:gap-3">
        {admin && (
          <div className="flex items-center gap-2">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700 flex-shrink-0">
              {initials}
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-medium text-slate-900">{admin.name}</div>
              <div className="text-xs text-slate-500">{admin.email}</div>
            </div>
          </div>
        )}
        <Button variant="secondary" size="sm" onClick={onLogout}>
          Log out
        </Button>
      </div>
    </header>
  );
}
