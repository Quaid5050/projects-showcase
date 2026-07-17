'use client';
import { useState, useEffect, useCallback } from 'react';
import DashboardShell from '@/components/layout/DashboardShell';
import { getRiskBadgeColor, formatRelativeTime } from '@/lib/utils';
import { Bot, CheckCircle, XCircle, Edit3, Loader2, ChevronRight } from 'lucide-react';

interface AIReply { _id: string; replyType: string; status: string; riskLevel: string; suggestedReply: string; inputMessage: string; internalSummary: string; createdAt: string; clientId?: { name: string } | null; projectId?: { name: string } | null; leadId?: { name: string } | null; generatedBy?: { name: string } | null; }

const IS = { background: '#1a1a2e', border: '1px solid #2d2d4e', color: 'white' };
const STATUS_STYLES: Record<string, React.CSSProperties> = {
  draft: { background: 'rgba(234,179,8,0.1)', color: '#facc15', border: '1px solid rgba(234,179,8,0.3)' },
  approved: { background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' },
  rejected: { background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)' },
  edited: { background: 'rgba(124,58,237,0.1)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.3)' },
};
const TABS = ['all','draft','approved','rejected','edited'];

export default function AIRepliesPage() {
  const [replies, setReplies] = useState<AIReply[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('all');
  const [selected, setSelected] = useState<AIReply | null>(null);
  const [editContent, setEditContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [total, setTotal] = useState(0);

  const fetch_ = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ limit: '50' });
    if (status !== 'all') params.set('status', status);
    const res = await fetch(`/api/ai-replies?${params}`, { credentials: 'include' });
    const d = await res.json() as { success: boolean; data: AIReply[]; total: number };
    if (d.success) { setReplies(d.data); setTotal(d.total); }
    setLoading(false);
  }, [status]);

  useEffect(() => { fetch_(); }, [fetch_]);

  const approve = async (id: string) => { setSaving(true); try { await fetch(`/api/ai-replies/${id}/approve`, { method: 'POST', credentials: 'include' }); fetch_(); if (selected?._id === id) setSelected(null); } finally { setSaving(false); } };
  const reject = async (id: string) => { setSaving(true); try { await fetch(`/api/ai-replies/${id}/reject`, { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reason: 'Manually rejected' }) }); fetch_(); if (selected?._id === id) setSelected(null); } finally { setSaving(false); } };
  const saveEdit = async () => { if (!selected) return; setSaving(true); try { await fetch(`/api/ai-replies/${selected._id}`, { method: 'PUT', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ editedContent: editContent }) }); fetch_(); setSelected(null); } finally { setSaving(false); } };

  return (
    <DashboardShell title="AI Replies" subtitle={`${total} total generated replies`}>
      <div className="flex gap-1 mb-4 p-1 rounded-lg w-fit" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setStatus(t)} className="px-4 py-1.5 rounded-md text-xs font-semibold capitalize transition-all"
            style={status === t ? { background: 'linear-gradient(135deg, rgba(200,240,0,0.15), rgba(124,58,237,0.15))', color: '#c8f000', border: '1px solid rgba(200,240,0,0.2)' } : { color: '#4b5563', border: '1px solid transparent' }}>
            {t}
          </button>
        ))}
      </div>

      <div className={`grid gap-4 ${selected ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
        <div className="rounded-xl overflow-hidden" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
          {loading ? <div className="flex items-center justify-center h-48"><Loader2 className="w-6 h-6 animate-spin" style={{ color: '#7c3aed' }} /></div>
            : replies.length === 0 ? (
              <div className="text-center py-16">
                <Bot className="w-10 h-10 mx-auto mb-3" style={{ color: '#2d2d4e' }} />
                <p className="text-sm" style={{ color: '#4b5563' }}>No AI replies</p>
              </div>
            ) : (
              <div className="divide-y" style={{ borderColor: '#1a1a2e' }}>
                {replies.map(r => (
                  <div key={r._id} onClick={() => { setSelected(r); setEditContent(r.suggestedReply); }}
                    className="px-5 py-4 cursor-pointer transition-all"
                    style={{ background: selected?._id === r._id ? 'rgba(200,240,0,0.03)' : 'transparent', borderLeft: selected?._id === r._id ? '2px solid #c8f000' : '2px solid transparent' }}
                    onMouseEnter={e => { if (selected?._id !== r._id) (e.currentTarget.style.background = 'rgba(255,255,255,0.02)'); }}
                    onMouseLeave={e => { if (selected?._id !== r._id) (e.currentTarget.style.background = 'transparent'); }}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-sm font-semibold text-white">{r.clientId?.name || r.leadId?.name || 'Internal'}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={STATUS_STYLES[r.status] || {}}>{r.status}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getRiskBadgeColor(r.riskLevel)}`}>{r.riskLevel} risk</span>
                          <span className="text-xs capitalize" style={{ color: '#4b5563' }}>{r.replyType.replace('_', ' ')}</span>
                        </div>
                        <p className="text-xs line-clamp-2" style={{ color: '#6b7280' }}>{r.suggestedReply}</p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <span className="text-xs" style={{ color: '#2d2d4e' }}>{formatRelativeTime(r.createdAt)}</span>
                        <ChevronRight className="w-4 h-4" style={{ color: '#2d2d4e' }} />
                      </div>
                    </div>
                    {r.status === 'draft' && (
                      <div className="flex gap-2 mt-3" onClick={e => e.stopPropagation()}>
                        <button onClick={() => approve(r._id)} disabled={saving}
                          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-semibold disabled:opacity-50 text-black"
                          style={{ background: 'rgba(34,197,94,0.8)' }}>
                          <CheckCircle className="w-3.5 h-3.5" /> Approve
                        </button>
                        <button onClick={() => reject(r._id)} disabled={saving}
                          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-semibold disabled:opacity-50"
                          style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}>
                          <XCircle className="w-3.5 h-3.5" /> Reject
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
        </div>

        {selected && (
          <div className="rounded-xl overflow-hidden h-fit sticky top-20" style={{ background: '#13131f', border: '1px solid #2d2d4e' }}>
            <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid #1e1e2e' }}>
              <h3 className="font-bold text-white text-sm">Reply Detail</h3>
              <button onClick={() => setSelected(null)} className="text-xl" style={{ color: '#6b7280' }}>&times;</button>
            </div>
            <div className="p-5 space-y-4 overflow-y-auto max-h-[calc(100vh-280px)]">
              {selected.inputMessage && (
                <div>
                  <p className="text-xs font-semibold uppercase mb-1" style={{ color: '#4b5563' }}>Input Message</p>
                  <p className="text-sm text-white p-3 rounded-lg" style={{ background: '#1a1a2e' }}>{selected.inputMessage}</p>
                </div>
              )}
              <div>
                <p className="text-xs font-semibold uppercase mb-1 flex items-center gap-1" style={{ color: '#4b5563' }}>
                  <Edit3 className="w-3 h-3" /> Edit Reply
                </p>
                <textarea rows={7} value={editContent} onChange={e => setEditContent(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm text-white focus:outline-none resize-none" style={IS} />
              </div>
              {selected.internalSummary && (
                <div>
                  <p className="text-xs font-semibold uppercase mb-1" style={{ color: '#4b5563' }}>Internal Summary</p>
                  <p className="text-xs p-3 rounded-lg" style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', color: '#facc15' }}>{selected.internalSummary}</p>
                </div>
              )}
              {selected.status === 'draft' && (
                <div className="flex flex-col gap-2 pt-2" style={{ borderTop: '1px solid #1e1e2e' }}>
                  <button onClick={saveEdit} disabled={saving} className="flex items-center justify-center gap-2 h-10 rounded-lg text-sm font-bold disabled:opacity-50 text-black" style={{ background: 'linear-gradient(135deg, #7c3aed, #5b21b6)', color: 'white' }}>
                    <Edit3 className="w-4 h-4" /> Save Edits
                  </button>
                  <button onClick={() => approve(selected._id)} disabled={saving} className="flex items-center justify-center gap-2 h-10 rounded-lg text-sm font-bold text-black disabled:opacity-50" style={{ background: 'rgba(34,197,94,0.8)' }}>
                    <CheckCircle className="w-4 h-4" /> Approve
                  </button>
                  <button onClick={() => reject(selected._id)} disabled={saving} className="flex items-center justify-center gap-2 h-10 rounded-lg text-sm font-semibold disabled:opacity-50" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}>
                    <XCircle className="w-4 h-4" /> Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
