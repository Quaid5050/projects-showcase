'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import DashboardShell from '@/components/layout/DashboardShell';
import { getStatusColor, formatRelativeTime } from '@/lib/utils';
import { Users, Plus, Search, ChevronRight, Loader2 } from 'lucide-react';

interface Client { _id: string; name: string; companyName?: string; email?: string; phone?: string; businessType?: string; status: string; createdAt: string; assignedSales?: { name: string } | null; }

const STATUSES = ['', 'lead','active','paused','completed','lost'];

const inputStyle = { background: '#1a1a2e', border: '1px solid #2d2d4e', color: 'white' };
const selectStyle = { background: '#1a1a2e', border: '1px solid #2d2d4e', color: 'white' };

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', companyName: '', email: '', phone: '', businessType: '', source: '', status: 'active' });
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  const fetchClients = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ limit: '50' });
    if (search) params.set('search', search);
    if (status) params.set('status', status);
    const res = await fetch(`/api/clients?${params}`, { credentials: 'include' });
    const d = await res.json() as { success: boolean; data: Client[]; total: number };
    if (d.success) { setClients(d.data); setTotal(d.total); }
    setLoading(false);
  }, [search, status]);

  useEffect(() => { fetchClients(); }, [fetchClients]);

  const handleCreate = async () => {
    if (!form.name) { setFormError('Name is required'); return; }
    setSaving(true); setFormError('');
    try {
      const res = await fetch('/api/clients', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const d = await res.json() as { success: boolean; error?: string };
      if (!d.success) throw new Error(d.error);
      setShowModal(false); setForm({ name: '', companyName: '', email: '', phone: '', businessType: '', source: '', status: 'active' });
      fetchClients();
    } catch (e: unknown) { setFormError(e instanceof Error ? e.message : 'Failed'); }
    finally { setSaving(false); }
  };

  return (
    <DashboardShell title="Clients" subtitle={`${total} total clients`}>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#6b7280' }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search clients..."
            className="w-full h-9 pl-9 pr-3 rounded-lg text-sm focus:outline-none placeholder:text-gray-600"
            style={inputStyle} />
        </div>
        <select value={status} onChange={e => setStatus(e.target.value)}
          className="h-9 px-3 rounded-lg text-sm focus:outline-none" style={selectStyle}>
          {STATUSES.map(s => <option key={s} value={s} style={{ background: '#1a1a2e' }}>{s || 'All statuses'}</option>)}
        </select>
        <button onClick={() => setShowModal(true)}
          className="h-9 px-4 text-sm font-bold rounded-lg flex items-center gap-2 flex-shrink-0 text-black"
          style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>
          <Plus className="w-4 h-4" /> New Client
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl overflow-hidden" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid #1e1e2e', background: '#0d0d12' }}>
                {['Client','Business Type','Status','Assigned To','Added',''].map(h => (
                  <th key={h} className={`text-left text-xs font-semibold px-4 py-3 ${h === '' ? 'w-8' : ''} ${['Assigned To','Added'].includes(h) ? 'hidden lg:table-cell' : ''} ${h === 'Business Type' ? 'hidden md:table-cell' : ''}`}
                    style={{ color: '#4b5563' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #1a1a2e' }}>
                  {[1,2,3,4,5,6].map(j => <td key={j} className="px-4 py-3"><div className="h-4 rounded animate-pulse" style={{ background: '#1e1e2e' }} /></td>)}
                </tr>
              )) : clients.length === 0 ? (
                <tr><td colSpan={6} className="px-4 py-16 text-center">
                  <Users className="w-10 h-10 mx-auto mb-3" style={{ color: '#2d2d4e' }} />
                  <p className="text-sm" style={{ color: '#4b5563' }}>No clients found</p>
                </td></tr>
              ) : clients.map(c => (
                <tr key={c._id} style={{ borderBottom: '1px solid #1a1a2e' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(200,240,0,0.02)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                  <td className="px-4 py-3">
                    <p className="text-sm font-semibold text-white">{c.name}</p>
                    <p className="text-xs" style={{ color: '#4b5563' }}>{c.companyName || c.email || '—'}</p>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell"><span className="text-sm" style={{ color: '#6b7280' }}>{c.businessType || '—'}</span></td>
                  <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(c.status)}`}>{c.status}</span></td>
                  <td className="px-4 py-3 hidden lg:table-cell"><span className="text-sm" style={{ color: '#6b7280' }}>{c.assignedSales?.name || '—'}</span></td>
                  <td className="px-4 py-3 hidden lg:table-cell"><span className="text-xs" style={{ color: '#4b5563' }}>{formatRelativeTime(c.createdAt)}</span></td>
                  <td className="px-4 py-3">
                    <Link href={`/clients/${c._id}`} style={{ color: '#4b5563' }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#c8f000')}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#4b5563')}>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)' }}>
          <div className="w-full max-w-lg rounded-2xl shadow-2xl" style={{ background: '#13131f', border: '1px solid #2d2d4e' }}>
            <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid #1e1e2e' }}>
              <h2 className="text-lg font-bold text-white">New Client</h2>
              <button onClick={() => setShowModal(false)} className="text-2xl leading-none" style={{ color: '#6b7280' }}>&times;</button>
            </div>
            <div className="p-6 space-y-4">
              {formError && <div className="p-3 rounded-lg text-sm" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}>{formError}</div>}
              {[{ l:'Name *',k:'name' },{ l:'Company',k:'companyName' },{ l:'Email',k:'email' },{ l:'Phone',k:'phone' },{ l:'Business Type',k:'businessType' },{ l:'Source',k:'source' }].map(f => (
                <div key={f.k}>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>{f.l}</label>
                  <input type="text" value={(form as Record<string,string>)[f.k]} onChange={e => setForm(p => ({ ...p, [f.k]: e.target.value }))}
                    className="w-full h-10 px-3 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none" style={inputStyle} />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Status</label>
                <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))}
                  className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={selectStyle}>
                  {['lead','active','paused','completed','lost'].map(s => <option key={s} value={s} style={{ background: '#1a1a2e' }}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4" style={{ borderTop: '1px solid #1e1e2e' }}>
              <button onClick={() => setShowModal(false)} className="flex-1 h-10 rounded-lg text-sm font-semibold text-white" style={{ background: '#1a1a2e', border: '1px solid #2d2d4e' }}>Cancel</button>
              <button onClick={handleCreate} disabled={saving} className="flex-1 h-10 rounded-lg text-sm font-bold text-black disabled:opacity-50" style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>{saving ? 'Creating...' : 'Create Client'}</button>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
