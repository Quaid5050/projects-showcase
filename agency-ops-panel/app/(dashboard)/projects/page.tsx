'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import DashboardShell from '@/components/layout/DashboardShell';
import { getStatusColor, getPriorityColor, formatRelativeTime } from '@/lib/utils';
import { FolderKanban, Plus, Search, ChevronRight, Loader2 } from 'lucide-react';

interface Project { _id: string; name: string; status: string; priority: string; progressPercentage: number; currentStage: string; updatedAt: string; dueDate?: string; clientId: { name: string } | null; serviceId: { name: string } | null; assignedManager?: { name: string } | null; }

const IS = { background: '#1a1a2e', border: '1px solid #2d2d4e', color: 'white' };
const TYPES = [['','All Services'],['google_ads','Google Ads'],['meta_ads','Meta Ads'],['website_development','Website Dev'],['app_development','App Dev'],['seo','SEO'],['branding','Branding'],['social_media','Social Media'],['support','Support']];
const STATUSES = ['','not_started','in_progress','waiting_client','review','completed','paused','cancelled'];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const [services, setServices] = useState<{ _id: string; name: string }[]>([]);
  const [clients, setClients] = useState<{ _id: string; name: string }[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', clientId: '', serviceId: '', type: 'other', priority: 'medium', description: '' });
  const [saving, setSaving] = useState(false);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (status) params.set('status', status);
    if (type) params.set('type', type);
    const res = await fetch(`/api/projects?${params}`, { credentials: 'include' });
    const d = await res.json() as { success: boolean; data: Project[] };
    if (d.success) {
      let r = d.data;
      if (search) r = r.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.clientId?.name.toLowerCase().includes(search.toLowerCase()));
      setProjects(r);
    }
    setLoading(false);
  }, [status, type, search]);

  useEffect(() => { fetchProjects(); }, [fetchProjects]);
  useEffect(() => {
    Promise.all([
      fetch('/api/admin/services?active=true', { credentials: 'include' }).then(r => r.json()),
      fetch('/api/clients?limit=100', { credentials: 'include' }).then(r => r.json()),
    ]).then(([sv, cl]) => {
      const s = sv as { success: boolean; data: { _id: string; name: string }[] };
      const c = cl as { success: boolean; data: { _id: string; name: string }[] };
      if (s.success) setServices(s.data);
      if (c.success) setClients(c.data);
    });
  }, []);

  const handleCreate = async () => {
    if (!form.name || !form.clientId || !form.serviceId) return;
    setSaving(true);
    try {
      const res = await fetch('/api/projects', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const d = await res.json() as { success: boolean };
      if (d.success) { setShowModal(false); fetchProjects(); }
    } finally { setSaving(false); }
  };

  return (
    <DashboardShell title="Projects" subtitle={`${projects.length} projects`}>
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#6b7280' }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search projects..."
            className="w-full h-9 pl-9 pr-3 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none" style={IS} />
        </div>
        <select value={status} onChange={e => setStatus(e.target.value)} className="h-9 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
          {STATUSES.map(s => <option key={s} value={s} style={{ background: '#1a1a2e' }}>{s ? s.replace('_',' ') : 'All statuses'}</option>)}
        </select>
        <select value={type} onChange={e => setType(e.target.value)} className="h-9 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
          {TYPES.map(([v,l]) => <option key={v} value={v} style={{ background: '#1a1a2e' }}>{l}</option>)}
        </select>
        <button onClick={() => setShowModal(true)} className="h-9 px-4 text-sm font-bold rounded-lg flex items-center gap-2 flex-shrink-0 text-black" style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>
          <Plus className="w-4 h-4" /> New Project
        </button>
      </div>

      {loading ? <div className="flex items-center justify-center h-48"><Loader2 className="w-6 h-6 animate-spin" style={{ color: '#7c3aed' }} /></div>
        : projects.length === 0 ? (
          <div className="text-center py-16 rounded-xl" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
            <FolderKanban className="w-10 h-10 mx-auto mb-3" style={{ color: '#2d2d4e' }} />
            <p className="text-sm" style={{ color: '#4b5563' }}>No projects found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(p => (
              <Link key={p._id} href={`/projects/${p._id}`}>
                <div className="rounded-xl p-5 cursor-pointer transition-all h-full"
                  style={{ background: '#13131f', border: '1px solid #1e1e2e' }}
                  onMouseEnter={e => (e.currentTarget.style.border = '1px solid rgba(200,240,0,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.border = '1px solid #1e1e2e')}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white text-sm truncate">{p.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#4b5563' }}>{p.clientId?.name} · {p.serviceId?.name}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#2d2d4e' }} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(p.status)}`}>{p.status.replace('_',' ')}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getPriorityColor(p.priority)}`}>{p.priority}</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: '#4b5563' }}>Progress</span>
                      <span className="text-xs font-bold" style={{ color: '#c8f000' }}>{p.progressPercentage}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: '#1e1e2e' }}>
                      <div className="h-full rounded-full" style={{ width: `${p.progressPercentage}%`, background: 'linear-gradient(90deg, #c8f000, #7c3aed)' }} />
                    </div>
                  </div>
                  {p.currentStage && <p className="text-xs mt-2 truncate" style={{ color: '#4b5563' }}>{p.currentStage}</p>}
                  <p className="text-xs mt-1" style={{ color: '#2d2d4e' }}>{formatRelativeTime(p.updatedAt)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)' }}>
          <div className="w-full max-w-lg rounded-2xl shadow-2xl" style={{ background: '#13131f', border: '1px solid #2d2d4e' }}>
            <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid #1e1e2e' }}>
              <h2 className="text-lg font-bold text-white">New Project</h2>
              <button onClick={() => setShowModal(false)} className="text-2xl" style={{ color: '#6b7280' }}>&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Project Name *</label>
                <input type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full h-10 px-3 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none" style={IS} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Client *</label>
                <select value={form.clientId} onChange={e => setForm(p => ({ ...p, clientId: e.target.value }))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
                  <option value="" style={{ background: '#1a1a2e' }}>Select client...</option>
                  {clients.map(c => <option key={c._id} value={c._id} style={{ background: '#1a1a2e' }}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Service *</label>
                <select value={form.serviceId} onChange={e => setForm(p => ({ ...p, serviceId: e.target.value }))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
                  <option value="" style={{ background: '#1a1a2e' }}>Select service...</option>
                  {services.map(s => <option key={s._id} value={s._id} style={{ background: '#1a1a2e' }}>{s.name}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Priority</label>
                  <select value={form.priority} onChange={e => setForm(p => ({ ...p, priority: e.target.value }))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
                    {['low','medium','high','urgent'].map(v => <option key={v} value={v} style={{ background: '#1a1a2e' }}>{v}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Type</label>
                  <select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
                    {TYPES.map(([v,l]) => <option key={v} value={v || 'other'} style={{ background: '#1a1a2e' }}>{l}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Description</label>
                <textarea rows={2} value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} className="w-full px-3 py-2 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none resize-none" style={IS} />
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4" style={{ borderTop: '1px solid #1e1e2e' }}>
              <button onClick={() => setShowModal(false)} className="flex-1 h-10 rounded-lg text-sm font-semibold text-white" style={{ background: '#1a1a2e', border: '1px solid #2d2d4e' }}>Cancel</button>
              <button onClick={handleCreate} disabled={saving || !form.name || !form.clientId || !form.serviceId} className="flex-1 h-10 rounded-lg text-sm font-bold text-black disabled:opacity-40" style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>{saving ? 'Creating...' : 'Create Project'}</button>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
