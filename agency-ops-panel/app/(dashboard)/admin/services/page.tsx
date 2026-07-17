'use client';
import { useState, useEffect, useCallback } from 'react';
import DashboardShell from '@/components/layout/DashboardShell';
import { Wrench, Plus, Edit3, Loader2 } from 'lucide-react';

interface Service { _id: string; name: string; slug: string; description: string; discoveryQuestions: string[]; isActive: boolean; }
const IS = { background: '#1a1a2e', border: '1px solid #2d2d4e', color: 'white' };

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState({ name: '', description: '', isActive: true, discoveryQuestions: '' });
  const [saving, setSaving] = useState(false);

  const fetch_ = useCallback(async () => {
    setLoading(true);
    const res = await fetch('/api/admin/services?active=false', { credentials: 'include' });
    const d = await res.json() as { success: boolean; data: Service[] };
    if (d.success) setServices(d.data);
    setLoading(false);
  }, []);

  useEffect(() => { fetch_(); }, [fetch_]);

  const openEdit = (s: Service) => { setEditing(s); setForm({ name: s.name, description: s.description, isActive: s.isActive, discoveryQuestions: s.discoveryQuestions.join('\n') }); setShowModal(true); };

  const save = async () => {
    setSaving(true);
    try {
      const payload = { ...form, discoveryQuestions: form.discoveryQuestions.split('\n').map(q => q.trim()).filter(Boolean) };
      const url = editing ? `/api/admin/services/${editing._id}` : '/api/admin/services';
      const res = await fetch(url, { method: editing ? 'PUT' : 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const d = await res.json() as { success: boolean };
      if (d.success) { setShowModal(false); setEditing(null); fetch_(); }
    } finally { setSaving(false); }
  };

  return (
    <DashboardShell title="Services" subtitle="Manage agency service categories">
      <div className="flex justify-end mb-4">
        <button onClick={() => { setEditing(null); setForm({ name: '', description: '', isActive: true, discoveryQuestions: '' }); setShowModal(true); }}
          className="h-9 px-4 text-sm font-bold rounded-lg flex items-center gap-2 text-black" style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      {loading ? <div className="flex items-center justify-center h-48"><Loader2 className="w-6 h-6 animate-spin" style={{ color: '#7c3aed' }} /></div>
        : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(s => (
              <div key={s._id} className="rounded-xl p-5 transition-all" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}
                onMouseEnter={e => (e.currentTarget.style.border = '1px solid rgba(200,240,0,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.border = '1px solid #1e1e2e')}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-bold text-white text-sm">{s.name}</p>
                    <p className="text-xs font-mono mt-0.5" style={{ color: '#4b5563' }}>{s.slug}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={s.isActive ? { background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' } : { background: 'rgba(255,255,255,0.05)', color: '#6b7280', border: '1px solid #2d2d4e' }}>
                      {s.isActive ? 'Active' : 'Inactive'}
                    </span>
                    <button onClick={() => openEdit(s)} className="p-1.5 rounded-lg transition-colors" style={{ color: '#4b5563' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#c8f000'; (e.currentTarget as HTMLElement).style.background = 'rgba(200,240,0,0.08)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#4b5563'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                {s.description && <p className="text-xs line-clamp-2 mb-2" style={{ color: '#6b7280' }}>{s.description}</p>}
                <p className="text-xs" style={{ color: '#2d2d4e' }}>{s.discoveryQuestions.length} discovery questions</p>
              </div>
            ))}
            {services.length === 0 && (
              <div className="col-span-3 text-center py-16 rounded-xl" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
                <Wrench className="w-10 h-10 mx-auto mb-3" style={{ color: '#2d2d4e' }} />
                <p className="text-sm" style={{ color: '#4b5563' }}>No services yet</p>
              </div>
            )}
          </div>
        )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)' }}>
          <div className="w-full max-w-lg rounded-2xl shadow-2xl max-h-[90vh] flex flex-col" style={{ background: '#13131f', border: '1px solid #2d2d4e' }}>
            <div className="flex items-center justify-between px-6 py-4 flex-shrink-0" style={{ borderBottom: '1px solid #1e1e2e' }}>
              <h2 className="text-lg font-bold text-white">{editing ? 'Edit Service' : 'Add Service'}</h2>
              <button onClick={() => setShowModal(false)} className="text-2xl" style={{ color: '#6b7280' }}>&times;</button>
            </div>
            <div className="p-6 space-y-4 overflow-y-auto">
              <div><label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Name *</label><input type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS} /></div>
              <div><label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Description</label><textarea rows={2} value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} className="w-full px-3 py-2 rounded-lg text-sm text-white focus:outline-none resize-none" style={IS} /></div>
              <div><label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Discovery Questions (one per line)</label><textarea rows={5} value={form.discoveryQuestions} onChange={e => setForm(p => ({ ...p, discoveryQuestions: e.target.value }))} placeholder="What is your monthly budget?&#10;Do you have a website?" className="w-full px-3 py-2 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none resize-none" style={IS} /></div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.isActive} onChange={e => setForm(p => ({ ...p, isActive: e.target.checked }))} className="w-4 h-4" style={{ accentColor: '#c8f000' }} />
                <span className="text-sm font-semibold" style={{ color: '#9ca3af' }}>Active</span>
              </label>
            </div>
            <div className="flex gap-3 px-6 py-4 flex-shrink-0" style={{ borderTop: '1px solid #1e1e2e' }}>
              <button onClick={() => setShowModal(false)} className="flex-1 h-10 rounded-lg text-sm font-semibold text-white" style={{ background: '#1a1a2e', border: '1px solid #2d2d4e' }}>Cancel</button>
              <button onClick={save} disabled={saving || !form.name} className="flex-1 h-10 rounded-lg text-sm font-bold text-black disabled:opacity-40" style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>{saving ? 'Saving...' : 'Save'}</button>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
