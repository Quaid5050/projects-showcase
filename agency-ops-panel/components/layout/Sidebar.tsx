'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthContext';
import { cn, getInitials } from '@/lib/utils';
import {
  LayoutDashboard, Bot, Users, FolderKanban, CheckSquare,
  TrendingUp, UserCircle, MessageSquare, FileText, Wrench,
  UserCog, Zap, LogOut, ChevronRight,
} from 'lucide-react';

const NAV = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['admin','ceo','manager','sales','team'] },
  { href: '/ai-assistant', label: 'AI Assistant', icon: Bot, roles: ['admin','ceo','manager','sales','team'] },
  { label: '─', roles: ['admin','ceo','manager','sales','team'] },
  { href: '/clients', label: 'Clients', icon: Users, roles: ['admin','ceo','manager','sales'] },
  { href: '/projects', label: 'Projects', icon: FolderKanban, roles: ['admin','ceo','manager','team'] },
  { href: '/tasks', label: 'Tasks', icon: CheckSquare, roles: ['admin','ceo','manager','team'] },
  { href: '/progress', label: 'Progress', icon: TrendingUp, roles: ['admin','ceo','manager','team'] },
  { href: '/leads', label: 'Leads', icon: UserCircle, roles: ['admin','ceo','manager','sales'] },
  { href: '/conversations', label: 'Conversations', icon: MessageSquare, roles: ['admin','ceo','manager','sales','team'] },
  { href: '/ai-replies', label: 'AI Replies', icon: FileText, roles: ['admin','ceo','manager','sales','team'] },
  { label: '─', roles: ['admin','ceo'] },
  { href: '/admin/services', label: 'Services', icon: Wrench, roles: ['admin','ceo'] },
  { href: '/admin/users', label: 'Users', icon: UserCog, roles: ['admin'] },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const visible = NAV.filter(item => !item.roles || item.roles.includes(user?.role || ''));

  return (
    <aside className="fixed inset-y-0 left-0 w-60 flex flex-col z-40"
      style={{ background: '#0d0d12', borderRight: '1px solid #1a1a2e' }}>

      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-4" style={{ borderBottom: '1px solid #1a1a2e' }}>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #c8f000, #7c3aed)' }}>
          <Zap className="w-5 h-5 text-black" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-black leading-tight">
            <span className="text-white">BizzOne</span>
            <span style={{ color: '#c8f000' }}>Digital</span>
          </p>
          <p className="text-xs capitalize" style={{ color: '#6b7280' }}>{user?.role}</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {visible.map((item, i) => {
          if ('label' in item && !item.href) {
            if (item.label === '─') return <div key={i} className="my-2" style={{ borderTop: '1px solid #1a1a2e' }} />;
            return null;
          }
          if (!item.href) return null;
          const Icon = item.icon!;
          const active = pathname === item.href || (item.href !== '/dashboard' && item.href !== '/admin' && pathname.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href}
              className={cn('flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group')}
              style={active ? {
                background: 'linear-gradient(135deg, rgba(200,240,0,0.15), rgba(124,58,237,0.15))',
                border: '1px solid rgba(200,240,0,0.2)',
                color: '#c8f000',
              } : {
                color: '#6b7280',
                border: '1px solid transparent',
              }}
              onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.color = '#d1d5db'; (e.currentTarget as HTMLElement).style.background = '#1a1a2e'; } }}
              onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.color = '#6b7280'; (e.currentTarget as HTMLElement).style.background = 'transparent'; } }}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1 truncate">{item.label}</span>
              {active && <ChevronRight className="w-3 h-3 opacity-60" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-3" style={{ borderTop: '1px solid #1a1a2e' }}>
        <div className="flex items-center gap-2.5 px-2 py-2 mb-1">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-black flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #c8f000, #7c3aed)' }}>
            {getInitials(user?.name || 'U')}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-white truncate">{user?.name}</p>
            <p className="text-xs truncate" style={{ color: '#6b7280' }}>{user?.email}</p>
          </div>
        </div>
        <button onClick={() => logout()}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          style={{ color: '#6b7280' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f87171'; (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.08)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6b7280'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
        >
          <LogOut className="w-4 h-4" /> Sign out
        </button>
      </div>
    </aside>
  );
}
