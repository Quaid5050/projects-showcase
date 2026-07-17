'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import DashboardShell from '@/components/layout/DashboardShell';
import { getStatusColor, getPriorityColor, formatRelativeTime } from '@/lib/utils';
import { UserCircle, Plus, Search, ChevronRight, Loader2 } from 'lucide-react';

interface Lead { _id: string; name: string; email?: string; companyName?: string; serviceInterest?: string; stage: string; priority: string; qualificationScore?: number; createdAt: string; assignedTo?: { name: string } | null; }

const IS = { background: '#1a1a2e', border: '1px solid #2d2d4e', color: 'white' };
const STAGES = ['','new','contacted','qualifying','proposal_sent','negotiation','won','lost'];

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [stage, setStage] = useState('');
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', companyName: '', serviceInterest: '', message: '', source: '', priority: 'medium' });
  const [saving, setSaving] = useState(false);

  const fetch_ = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ limit: '50' });
    if (search) params.set('search', search);
    if (stage) params.set('stage', stage);
    const res = await fetch(`/api/leads?${params}`, { credentials: 'include' });
    const d = await res.json() as { success: boolean; data: Lead[]; total: number };
    if (d.success) { setLeads(d.data); setTotal(d.total); }
    setLoading(false);
  }, [search, stage]);

  useEffect(() => { fetch_(); }, [fetch_]);

  const handleCreate = async () => {
    if (!form.name || !form.message) return;
    setSaving(true);
    try {
      const res = await fetch('/api/leads', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const d = await res.json() as { success: boolean };
      if (d.success) { setShowModal(false); fetch_(); }
    } finally { setSaving(false); }
  };

  const updateStage = async (id: string, s: string) => {
    await fetch(`/api/leads/${id}`, { method: 'PUT', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ stage: s }) });
    fetch_();
  };

  return (
    <DashboardShell title="Leads" subtitle={`${total} total leads`}>
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#6b7280' }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search leads..." className="w-full h-9 pl-9 pr-3 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none" style={IS} />
        </div>
        <select value={stage} onChange={e => setStage(e.target.value)} className="h-9 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
          {STAGES.map(s => <option key={s} value={s} style={{ background: '#1a1a2e' }}>{s ? s.replace('_',' ') : 'All stages'}</option>)}
        </select>
        <button onClick={() => setShowModal(true)} className="h-9 px-4 text-sm font-bold rounded-lg flex items-center gap-2 text-black" style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>
          <Plus className="w-4 h-4" /> New Lead
        </button>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid #1e1e2e', background: '#0d0d12' }}>
                {['Lead','Service','Stage','Score','Added',''].map(h => (
                  <th key={h} className={`text-left text-xs font-semibold px-4 py-3 ${h===''?'w-8':''}`} style={{ color: '#4b5563' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? Array.from({length:5}).map((_,i) => (
                <tr key={i} style={{borderBottom:'1px solid #1a1a2e'}}>{[1,2,3,4,5,6].map(j=><td key={j} className="px-4 py-3"><div className="h-4 rounded animate-pulse" style={{background:'#1e1e2e'}}/></td>)}</tr>
              )) : leads.length===0 ? (
                <tr><td colSpan={6} className="px-4 py-16 text-center">
                  <UserCircle className="w-10 h-10 mx-auto mb-3" style={{color:'#2d2d4e'}}/>
                  <p className="text-sm" style={{color:'#4b5563'}}>No leads found</p>
                </td></tr>
              ) : leads.map(l => (
                <tr key={l._id} style={{borderBottom:'1px solid #1a1a2e'}}
                  onMouseEnter={e=>(e.currentTarget.style.background='rgba(200,240,0,0.02)')}
                  onMouseLeave={e=>(e.currentTarget.style.background='transparent')}>
                  <td className="px-4 py-3">
                    <p className="text-sm font-semibold text-white">{l.name}</p>
                    <p className="text-xs" style={{color:'#4b5563'}}>{l.companyName||l.email||'—'}</p>
                  </td>
                  <td className="px-4 py-3"><span className="text-sm" style={{color:'#6b7280'}}>{l.serviceInterest||'—'}</span></td>
                  <td className="px-4 py-3">
                    <select value={l.stage} onChange={e=>updateStage(l._id,e.target.value)} className={`text-xs px-2 py-1 rounded-full font-medium cursor-pointer focus:outline-none ${getStatusColor(l.stage)}`} style={{background:'transparent',border:'none'}}>
                      {['new','contacted','qualifying','proposal_sent','negotiation','won','lost'].map(s=><option key={s} value={s} style={{background:'#1a1a2e',color:'white'}}>{s.replace('_',' ')}</option>)}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    {l.qualificationScore!=null ? (
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold" style={{color:'#c8f000'}}>{l.qualificationScore}</span>
                        <div className="w-12 h-1.5 rounded-full" style={{background:'#1e1e2e'}}>
                          <div className="h-full rounded-full" style={{width:`${l.qualificationScore}%`,background:'linear-gradient(90deg,#c8f000,#7c3aed)'}}/>
                        </div>
                      </div>
                    ) : <span style={{color:'#2d2d4e'}}>—</span>}
                  </td>
                  <td className="px-4 py-3"><span className="text-xs" style={{color:'#4b5563'}}>{formatRelativeTime(l.createdAt)}</span></td>
                  <td className="px-4 py-3">
                    <Link href={`/leads/${l._id}`} style={{color:'#4b5563'}}
                      onMouseEnter={e=>((e.currentTarget as HTMLElement).style.color='#c8f000')}
                      onMouseLeave={e=>((e.currentTarget as HTMLElement).style.color='#4b5563')}>
                      <ChevronRight className="w-4 h-4"/>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{background:'rgba(0,0,0,0.8)'}}>
          <div className="w-full max-w-lg rounded-2xl shadow-2xl" style={{background:'#13131f',border:'1px solid #2d2d4e'}}>
            <div className="flex items-center justify-between px-6 py-4" style={{borderBottom:'1px solid #1e1e2e'}}>
              <h2 className="text-lg font-bold text-white">New Lead</h2>
              <button onClick={()=>setShowModal(false)} className="text-2xl" style={{color:'#6b7280'}}>&times;</button>
            </div>
            <div className="p-6 space-y-3">
              {[{l:'Name *',k:'name'},{l:'Email',k:'email'},{l:'Phone',k:'phone'},{l:'Company',k:'companyName'},{l:'Service Interest',k:'serviceInterest'},{l:'Source',k:'source'}].map(f=>(
                <div key={f.k}>
                  <label className="block text-sm font-semibold mb-1.5" style={{color:'#9ca3af'}}>{f.l}</label>
                  <input type="text" value={(form as Record<string,string>)[f.k]} onChange={e=>setForm(p=>({...p,[f.k]:e.target.value}))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}/>
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{color:'#9ca3af'}}>Message *</label>
                <textarea rows={3} value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} className="w-full px-3 py-2 rounded-lg text-sm text-white focus:outline-none resize-none" style={IS}/>
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4" style={{borderTop:'1px solid #1e1e2e'}}>
              <button onClick={()=>setShowModal(false)} className="flex-1 h-10 rounded-lg text-sm font-semibold text-white" style={{background:'#1a1a2e',border:'1px solid #2d2d4e'}}>Cancel</button>
              <button onClick={handleCreate} disabled={saving||!form.name||!form.message} className="flex-1 h-10 rounded-lg text-sm font-bold text-black disabled:opacity-40" style={{background:'linear-gradient(135deg, #c8f000, #a0d000)'}}>{saving?'Creating...':'Create Lead'}</button>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
