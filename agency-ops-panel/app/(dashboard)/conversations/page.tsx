'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import DashboardShell from '@/components/layout/DashboardShell';
import { Card } from '@/components/ui/card';
import { formatRelativeTime } from '@/lib/utils';
import { MessageSquare, Plus, Loader2 } from 'lucide-react';

interface Conv { _id: string; channel: string; status: string; lastMessageAt: string; messages: unknown[]; clientId?: { name: string; companyName?: string } | null; leadId?: { name: string } | null; projectId?: { name: string } | null; }

export default function ConversationsPage() {
  const [convs, setConvs] = useState<Conv[]>([]);
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState<{ _id: string; name: string }[]>([]);
  const [leads, setLeads] = useState<{ _id: string; name: string }[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ clientId: '', leadId: '', channel: 'manual' });
  const [saving, setSaving] = useState(false);

  const fetch_ = useCallback(async () => {
    setLoading(true);
    const res = await fetch('/api/conversations', { credentials: 'include' });
    const d = await res.json() as { success: boolean; data: Conv[] };
    if (d.success) setConvs(d.data);
    setLoading(false);
  }, []);

  useEffect(() => { fetch_(); }, [fetch_]);

  useEffect(() => {
    Promise.all([
      fetch('/api/clients?limit=100', { credentials: 'include' }).then(r => r.json()),
      fetch('/api/leads?limit=100', { credentials: 'include' }).then(r => r.json()),
    ]).then(([cli, leds]) => {
      const c = cli as { success: boolean; data: { _id: string; name: string }[] };
      const l = leds as { success: boolean; data: { _id: string; name: string }[] };
      if (c.success) setClients(c.data);
      if (l.success) setLeads(l.data);
    });
  }, []);

  const handleCreate = async () => {
    setSaving(true);
    try {
      const payload = { channel: form.channel, ...(form.clientId ? { clientId: form.clientId } : {}), ...(form.leadId ? { leadId: form.leadId } : {}) };
      const res = await fetch('/api/conversations', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const d = await res.json() as { success: boolean; data: { _id: string } };
      if (d.success) { setShowModal(false); window.location.href = `/conversations/${d.data._id}`; }
    } finally { setSaving(false); }
  };

  const channelColors: Record<string, string> = { manual: 'bg-gray-100 text-gray-700', whatsapp: 'bg-green-100 text-green-700', email: 'bg-blue-100 text-blue-700', instagram: 'bg-pink-100 text-pink-700' };

  return (
    <DashboardShell title="Conversations" subtitle={`${convs.length} conversations`}>
      <div className="flex justify-end mb-4">
        <button onClick={() => setShowModal(true)} className="h-9 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 flex items-center gap-2"><Plus className="w-4 h-4" /> New Conversation</button>
      </div>

      {loading ? <div className="flex items-center justify-center h-48"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>
        : convs.length === 0 ? <div className="text-center py-16 bg-white rounded-xl border border-gray-200"><MessageSquare className="w-10 h-10 text-gray-300 mx-auto mb-3" /><p className="text-gray-400 text-sm">No conversations yet</p></div>
        : (
          <Card className="overflow-hidden">
            <div className="divide-y divide-gray-50">
              {convs.map(c => (
                <Link key={c._id} href={`/conversations/${c._id}`} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"><MessageSquare className="w-5 h-5 text-blue-600" /></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{c.clientId?.name || c.leadId?.name || 'Unknown'}</p>
                    <p className="text-xs text-gray-400">{c.projectId?.name || 'General'} · {c.messages.length} messages</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${channelColors[c.channel] || 'bg-gray-100 text-gray-700'}`}>{c.channel}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${c.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>{c.status}</span>
                    <span className="text-xs text-gray-400 hidden sm:block">{formatRelativeTime(c.lastMessageAt)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b"><h2 className="text-lg font-semibold">New Conversation</h2><button onClick={() => setShowModal(false)} className="text-gray-400 text-xl">&times;</button></div>
            <div className="p-6 space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Client (optional)</label><select value={form.clientId} onChange={e => setForm(p => ({ ...p, clientId: e.target.value }))} className="w-full h-9 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="">Select client...</option>{clients.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}</select></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Lead (optional)</label><select value={form.leadId} onChange={e => setForm(p => ({ ...p, leadId: e.target.value }))} className="w-full h-9 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="">Select lead...</option>{leads.map(l => <option key={l._id} value={l._id}>{l.name}</option>)}</select></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Channel</label><select value={form.channel} onChange={e => setForm(p => ({ ...p, channel: e.target.value }))} className="w-full h-9 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">{['manual','whatsapp','email','instagram','facebook','website'].map(c => <option key={c} value={c}>{c}</option>)}</select></div>
            </div>
            <div className="flex gap-3 px-6 py-4 border-t">
              <button onClick={() => setShowModal(false)} className="flex-1 h-9 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Cancel</button>
              <button onClick={handleCreate} disabled={saving} className="flex-1 h-9 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50">{saving ? 'Creating...' : 'Create'}</button>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
