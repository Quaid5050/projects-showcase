'use client';
import { Bell, Search } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthContext';
import { getInitials } from '@/lib/utils';

interface TopbarProps { title: string; subtitle?: string; }

export default function Topbar({ title, subtitle }: TopbarProps) {
  const { user } = useAuth();
  return (
    <header className="h-14 flex items-center justify-between px-6 sticky top-0 z-30"
      style={{ background: '#0d0d12', borderBottom: '1px solid #1a1a2e' }}>
      <div>
        <h1 className="text-sm font-bold text-white">{title}</h1>
        {subtitle && <p className="text-xs" style={{ color: '#6b7280' }}>{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg transition-colors" style={{ color: '#6b7280' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#c8f000'; (e.currentTarget as HTMLElement).style.background = 'rgba(200,240,0,0.08)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6b7280'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
          <Search className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-lg transition-colors" style={{ color: '#6b7280' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#c8f000'; (e.currentTarget as HTMLElement).style.background = 'rgba(200,240,0,0.08)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6b7280'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
          <Bell className="w-4 h-4" />
        </button>
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-black"
          style={{ background: 'linear-gradient(135deg, #c8f000, #7c3aed)' }}>
          {getInitials(user?.name || 'U')}
        </div>
      </div>
    </header>
  );
}
