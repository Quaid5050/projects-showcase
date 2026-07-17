'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import DashboardShell from '@/components/layout/DashboardShell';
import { useAuth } from '@/components/auth/AuthContext';
import { getStatusColor, formatRelativeTime } from '@/lib/utils';
import { Users, FolderKanban, CheckSquare, Bot, TrendingUp, AlertCircle, ArrowRight, UserCircle, Loader2, Zap } from 'lucide-react';

interface Stats {
  clients: { total: number; active: number };
  projects: { total: number; active: number; completed: number };
  tasks: { pending: number; overdue: number };
  leads: { new: number; total: number };
  aiReplies: { pending: number };
  byService: { googleAds: number; metaAds: number; development: number };
}
interface Project {
  _id: string; name: string; status: string; progressPercentage: number;
  currentStage: string; updatedAt: string;
  clientId: { name: string; companyName?: string } | null;
  serviceId: { name: string } | null;
}

export default function DashboardPage() {
  const { user, isAdminCEOOrManager } = useAuth();
  const [stats, setStats] = useState<Stats | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/stats', { credentials: 'include' }).then(r => r.json()),
      fetch('/api/projects?status=in_progress', { credentials: 'include' }).then(r => r.json()),
    ]).then(([s, p]) => {
      const sd = s as { success: boolean; data: Stats };
      const pd = p as { success: boolean; data: Project[] };
      if (sd.success) setStats(sd.data);
      if (pd.success) setProjects(pd.data.slice(0, 6));
    }).finally(() => setLoading(false));
  }, []);

  const cards = stats ? [
    { label: 'Active Clients', value: stats.clients.active, sub: `${stats.clients.total} total`, icon: Users, color: '#c8f000', href: '/clients' },
    { label: 'Active Projects', value: stats.projects.active, sub: `${stats.projects.completed} completed`, icon: FolderKanban, color: '#7c3aed', href: '/projects' },
    { label: 'Pending Tasks', value: stats.tasks.pending, sub: stats.tasks.overdue > 0 ? `${stats.tasks.overdue} overdue` : 'on track', icon: CheckSquare, color: '#f59e0b', href: '/tasks', warn: stats.tasks.overdue > 0 },
    { label: 'AI Replies', value: stats.aiReplies.pending, sub: 'awaiting review', icon: Bot, color: '#a78bfa', href: '/ai-replies' },
    { label: 'Google Ads', value: stats.byService.googleAds, sub: 'active campaigns', icon: TrendingUp, color: '#34d399', href: '/projects?type=google_ads' },
    { label: 'Meta Ads', value: stats.byService.metaAds, sub: 'active campaigns', icon: TrendingUp, color: '#f472b6', href: '/projects?type=meta_ads' },
    { label: 'Dev Projects', value: stats.byService.development, sub: 'in progress', icon: FolderKanban, color: '#60a5fa', href: '/projects?type=website_development' },
    { label: 'New Leads', value: stats.leads.new, sub: `${stats.leads.total} total`, icon: UserCircle, color: '#c8f000', href: '/leads' },
  ] : [];

  return (
    <DashboardShell title={`Welcome back, ${user?.name?.split(' ')[0]} 👋`} subtitle="Agency operations overview">
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {loading ? Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-xl p-5 animate-pulse" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
            <div className="h-8 rounded" style={{ background: '#1e1e2e' }} />
          </div>
        )) : cards.map(c => {
          const Icon = c.icon;
          return (
            <Link key={c.label} href={c.href}>
              <div className="rounded-xl p-4 transition-all hover:scale-[1.02] cursor-pointer"
                style={{ background: '#13131f', border: '1px solid #1e1e2e' }}
                onMouseEnter={e => (e.currentTarget.style.border = `1px solid ${c.color}33`)}
                onMouseLeave={e => (e.currentTarget.style.border = '1px solid #1e1e2e')}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium" style={{ color: '#6b7280' }}>{c.label}</span>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}>
                    <Icon className="w-4 h-4" style={{ color: c.color }} />
                  </div>
                </div>
                <p className="text-2xl font-black text-white">{c.value}</p>
                <p className={`text-xs mt-0.5 ${c.warn ? 'text-red-400' : ''}`}
                  style={c.warn ? {} : { color: '#4b5563' }}>
                  {c.warn && <AlertCircle className="w-3 h-3 inline mr-1" />}{c.sub}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Active Projects */}
        <div className="lg:col-span-2 rounded-xl overflow-hidden" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid #1e1e2e' }}>
            <h2 className="font-bold text-white text-sm">Active Projects</h2>
            <Link href="/projects" className="text-xs flex items-center gap-1 transition-colors"
              style={{ color: '#c8f000' }}>View all <ArrowRight className="w-3 h-3" /></Link>
          </div>
          {loading ? <div className="p-5 flex items-center justify-center h-32"><Loader2 className="w-6 h-6 animate-spin" style={{ color: '#7c3aed' }} /></div>
            : projects.length === 0 ? (
              <div className="p-10 text-center">
                <FolderKanban className="w-10 h-10 mx-auto mb-3" style={{ color: '#2d2d4e' }} />
                <p className="text-sm" style={{ color: '#4b5563' }}>No active projects yet</p>
              </div>
            ) : (
              <div className="divide-y" style={{ borderColor: '#1e1e2e' }}>
                {projects.map(p => (
                  <Link key={p._id} href={`/projects/${p._id}`}
                    className="flex items-center gap-4 px-5 py-3.5 transition-colors"
                    style={{ color: 'inherit' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(200,240,0,0.03)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{p.name}</p>
                      <p className="text-xs truncate" style={{ color: '#4b5563' }}>{p.clientId?.name} · {p.serviceId?.name}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="w-24">
                        <div className="flex justify-between mb-1">
                          <span className="text-xs" style={{ color: '#6b7280' }}>{p.progressPercentage}%</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ background: '#1e1e2e' }}>
                          <div className="h-full rounded-full" style={{ width: `${p.progressPercentage}%`, background: 'linear-gradient(90deg, #c8f000, #7c3aed)' }} />
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(p.status)}`}>
                        {p.status.replace('_', ' ')}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
        </div>

        {/* Quick actions */}
        <div className="rounded-xl overflow-hidden" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
          <div className="px-5 py-4" style={{ borderBottom: '1px solid #1e1e2e' }}>
            <h2 className="font-bold text-white text-sm">Quick Actions</h2>
          </div>
          <div className="p-3 space-y-1">
            {[
              { href: '/ai-assistant', icon: Bot, label: 'Ask AI Assistant', color: '#a78bfa' },
              { href: '/clients', icon: Users, label: 'Add Client', color: '#c8f000' },
              { href: '/projects', icon: FolderKanban, label: 'New Project', color: '#60a5fa' },
              { href: '/progress', icon: TrendingUp, label: 'Add Progress Update', color: '#34d399' },
              { href: '/leads', icon: UserCircle, label: 'Add Lead', color: '#f472b6' },
              { href: '/ai-replies', icon: Bot, label: 'Review AI Replies', color: '#f59e0b' },
            ].map(a => {
              const Icon = a.icon;
              return (
                <Link key={a.href} href={a.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all"
                  onMouseEnter={e => (e.currentTarget.style.background = `${a.color}08`)}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${a.color}15` }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: a.color }} />
                  </div>
                  <span className="text-sm font-medium text-white flex-1">{a.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" style={{ color: '#2d2d4e' }} />
                </Link>
              );
            })}
          </div>

          {/* AI promo */}
          <div className="mx-3 mb-3 p-4 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(200,240,0,0.05), rgba(124,58,237,0.1))', border: '1px solid rgba(200,240,0,0.15)' }}>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4" style={{ color: '#c8f000' }} />
              <span className="text-xs font-bold" style={{ color: '#c8f000' }}>AI AUTOMATION</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>
              Ask the AI anything in English or Urdu. It answers from real panel data.
            </p>
            <Link href="/ai-assistant" className="mt-3 flex items-center gap-1 text-xs font-semibold" style={{ color: '#c8f000' }}>
              Open AI Assistant <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
