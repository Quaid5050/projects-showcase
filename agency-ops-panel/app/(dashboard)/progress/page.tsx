'use client';
import { useState, useEffect, useCallback } from 'react';
import DashboardShell from '@/components/layout/DashboardShell';
import { formatDateTime } from '@/lib/utils';
import { TrendingUp, Plus, Loader2 } from 'lucide-react';

interface ProgressUpdate { _id: string; updateTitle: string; updateText: string; completedWork: string; pendingWork: string; blockers: string; nextSteps: string; eta: string; visibility: string; createdAt: string; createdBy?: { name: string } | null; projectId?: { name: string } | null; }

const IS = { background: '#1a1a2e', border: '1px solid #2d2d4e', color: 'white' };

export default function ProgressPage() {
  const [updates, setUpdates] = useState<ProgressUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibility, setVisibility] = useState('');
  const [projects, setProjects] = useState<{ _id: string; name: string; clientId: { _id: string } | null; serviceId: { _id: string } | null }[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ projectId: '', clientId: '', serviceId: '', updateTitle: '', updateText: '', completedWork: '', pendingWork: '', blockers: '', nextSteps: '', eta: '', visibility: 'internal' });
  const [saving, setSaving] = useState(false);

  const fetch_ = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (visibility) params.set('visibility', visibility);
    const res = await fetch(`/api/progress?${params}`, { credentials: 'include' });
    const d = await res.json() as { success: boolean; data: ProgressUpdate[] };
    if (d.success) setUpdates(d.data);
    setLoading(false);
  }, [visibility]);

  useEffect(() => { fetch_(); }, [fetch_]);
  useEffect(() => {
    fetch('/api/projects', { credentials: 'include' }).then(r => r.json())
      .then((d: { success: boolean; data: typeof projects }) => { if (d.success) setProjects(d.data); });
  }, []);

  const onProjectChange = (projectId: string) => {
    const p = projects.find(x => x._id === projectId);
    setForm(f => ({ ...f, projectId, clientId: (p?.clientId as { _id: string } | null)?._id || '', serviceId: (p?.serviceId as { _id: string } | null)?._id || '' }));
  };

  const handleCreate = async () => {
    if (!form.projectId || !form.updateTitle || !form.updateText) return;
    setSaving(true);
    try {
      const res = await fetch('/api/progress', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const d = await res.json() as { success: boolean };
      if (d.success) { setShowModal(false); setForm({ projectId: '', clientId: '', serviceId: '', updateTitle: '', updateText: '', completedWork: '', pendingWork: '', blockers: '', nextSteps: '', eta: '', visibility: 'internal' }); fetch_(); }
    } finally { setSaving(false); }
  };

  return (
    <DashboardShell title="Progress Updates" subtitle="Track all project progress">
      <div className="flex gap-2 mb-4 flex-wrap">
        <div className="flex gap-1 p-1 rounded-lg" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
          {[['','All'],['internal','Internal'],['client_safe','Client Safe']].map(([v,l]) => (
            <button key={v} onClick={() => setVisibility(v)}
              className="px-3 py-1.5 rounded-md text-xs font-semibold transition-all"
              style={visibility === v ? { background: 'linear-gradient(135deg, rgba(200,240,0,0.15), rgba(124,58,237,0.15))', color: '#c8f000', border: '1px solid rgba(200,240,0,0.2)' } : { color: '#4b5563', border: '1px solid transparent' }}>
              {l}
            </button>
          ))}
        </div>
        <button onClick={() => setShowModal(true)} className="ml-auto h-9 px-4 text-sm font-bold rounded-lg flex items-center gap-2 text-black" style={{ background: 'linear-gradient(135deg, #34d399, #059669)' }}>
          <Plus className="w-4 h-4" /> Add Update
        </button>
      </div>

      {loading ? <div className="flex items-center justify-center h-48"><Loader2 className="w-6 h-6 animate-spin" style={{ color: '#7c3aed' }} /></div>
        : updates.length === 0 ? (
          <div className="text-center py-16 rounded-xl" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
            <TrendingUp className="w-10 h-10 mx-auto mb-3" style={{ color: '#2d2d4e' }} />
            <p className="text-sm" style={{ color: '#4b5563' }}>No progress updates yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {updates.map(u => (
              <div key={u._id} className="rounded-xl p-5" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-white text-sm">{u.updateTitle}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#4b5563' }}>{u.projectId?.name} · {u.createdBy?.name} · {formatDateTime(u.createdAt)}</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ml-2"
                    style={u.visibility === 'client_safe'
                      ? { background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }
                      : { background: 'rgba(255,255,255,0.05)', color: '#6b7280', border: '1px solid #2d2d4e' }}>
                    {u.visibility.replace('_', ' ')}
                  </span>
                </div>
                <p className="text-sm mb-3" style={{ color: '#9ca3af' }}>{u.updateText}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {u.completedWork && <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}><p className="text-xs font-semibold mb-0.5" style={{ color: '#4ade80' }}>✓ Completed</p><p className="text-xs" style={{ color: '#6ee7b7' }}>{u.completedWork}</p></div>}
                  {u.pendingWork && <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(251,146,60,0.08)', border: '1px solid rgba(251,146,60,0.2)' }}><p className="text-xs font-semibold mb-0.5" style={{ color: '#fb923c' }}>⏳ Pending</p><p className="text-xs" style={{ color: '#fdba74' }}>{u.pendingWork}</p></div>}
                  {u.blockers && <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}><p className="text-xs font-semibold mb-0.5" style={{ color: '#f87171' }}>🚫 Blocker</p><p className="text-xs" style={{ color: '#fca5a5' }}>{u.blockers}</p></div>}
                  {u.nextSteps && <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}><p className="text-xs font-semibold mb-0.5" style={{ color: '#a78bfa' }}>→ Next Steps</p><p className="text-xs" style={{ color: '#c4b5fd' }}>{u.nextSteps}</p></div>}
                </div>
                {u.eta && <p className="text-xs mt-2" style={{ color: '#4b5563' }}>ETA: {u.eta}</p>}
              </div>
            ))}
          </div>
        )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)' }}>
          <div className="w-full max-w-lg rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto" style={{ background: '#13131f', border: '1px solid #2d2d4e' }}>
            <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid #1e1e2e' }}>
              <h2 className="text-lg font-bold text-white">Add Progress Update</h2>
              <button onClick={() => setShowModal(false)} className="text-2xl" style={{ color: '#6b7280' }}>&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Project *</label>
                <select value={form.projectId} onChange={e => onProjectChange(e.target.value)} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
                  <option value="" style={{ background: '#1a1a2e' }}>Select project...</option>
                  {projects.map(p => <option key={p._id} value={p._id} style={{ background: '#1a1a2e' }}>{p.name}</option>)}
                </select>
              </div>
              {[{ l: 'Title *', k: 'updateTitle', r: 1 }, { l: 'Update *', k: 'updateText', r: 3 }, { l: 'Completed Work', k: 'completedWork', r: 2 }, { l: 'Pending Work', k: 'pendingWork', r: 2 }, { l: 'Blockers', k: 'blockers', r: 2 }, { l: 'Next Steps', k: 'nextSteps', r: 2 }, { l: 'ETA', k: 'eta', r: 1 }].map(f => (
                <div key={f.k}>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>{f.l}</label>
                  <textarea rows={f.r} value={(form as Record<string, string>)[f.k]} onChange={e => setForm(p => ({ ...p, [f.k]: e.target.value }))} className="w-full px-3 py-2 rounded-lg text-sm text-white focus:outline-none resize-none" style={IS} />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Visibility</label>
                <select value={form.visibility} onChange={e => setForm(p => ({ ...p, visibility: e.target.value }))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
                  <option value="internal" style={{ background: '#1a1a2e' }}>Internal Only</option>
                  <option value="client_safe" style={{ background: '#1a1a2e' }}>Client Safe (visible in portal + used by AI)</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4" style={{ borderTop: '1px solid #1e1e2e' }}>
              <button onClick={() => setShowModal(false)} className="flex-1 h-10 rounded-lg text-sm font-semibold text-white" style={{ background: '#1a1a2e', border: '1px solid #2d2d4e' }}>Cancel</button>
              <button onClick={handleCreate} disabled={saving || !form.projectId || !form.updateTitle || !form.updateText} className="flex-1 h-10 rounded-lg text-sm font-bold text-black disabled:opacity-40" style={{ background: 'linear-gradient(135deg, #34d399, #059669)' }}>{saving ? 'Saving...' : 'Save Update'}</button>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
