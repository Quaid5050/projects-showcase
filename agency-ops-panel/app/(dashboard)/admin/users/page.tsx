'use client';
import { useState, useEffect, useCallback } from 'react';
import DashboardShell from '@/components/layout/DashboardShell';
import { useAuth } from '@/components/auth/AuthContext';
import { UserCog, Plus, Edit3, Trash2, Loader2 } from 'lucide-react';

interface User { _id: string; name: string; email: string; role: string; isActive: boolean; }
const IS = { background: '#1a1a2e', border: '1px solid #2d2d4e', color: 'white' };
const roleColors: Record<string, React.CSSProperties> = {
  admin: { background: 'rgba(200,240,0,0.1)', color: '#c8f000', border: '1px solid rgba(200,240,0,0.3)' },
  ceo: { background: 'rgba(124,58,237,0.1)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.3)' },
  manager: { background: 'rgba(96,165,250,0.1)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)' },
  sales: { background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.3)' },
  team: { background: 'rgba(251,146,60,0.1)', color: '#fb923c', border: '1px solid rgba(251,146,60,0.3)' },
};

export default function UsersPage() {
  const { user: me } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<User | null>(null);
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'sales', isActive: true });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const fetch_ = useCallback(async () => {
    setLoading(true);
    const res = await fetch('/api/admin/users', { credentials: 'include' });
    const d = await res.json() as { success: boolean; data: User[] };
    if (d.success) setUsers(d.data);
    setLoading(false);
  }, []);

  useEffect(() => { fetch_(); }, [fetch_]);

  const openCreate = () => { setEditing(null); setForm({ name: '', email: '', password: '', role: 'sales', isActive: true }); setError(''); setShowModal(true); };
  const openEdit = (u: User) => { setEditing(u); setForm({ name: u.name, email: u.email, password: '', role: u.role, isActive: u.isActive }); setError(''); setShowModal(true); };

  const save = async () => {
    if (!form.name || !form.email) { setError('Name and email required'); return; }
    if (!editing && !form.password) { setError('Password required'); return; }
    setSaving(true); setError('');
    try {
      const url = editing ? `/api/admin/users/${editing._id}` : '/api/admin/users';
      const payload = editing ? { name: form.name, email: form.email, role: form.role, isActive: form.isActive, ...(form.password ? { password: form.password } : {}) } : form;
      const res = await fetch(url, { method: editing ? 'PUT' : 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const d = await res.json() as { success: boolean; error?: string };
      if (!d.success) throw new Error(d.error);
      setShowModal(false); fetch_();
    } catch (e: unknown) { setError(e instanceof Error ? e.message : 'Failed'); }
    finally { setSaving(false); }
  };

  const del = async (id: string) => {
    if (id === me?.id) { alert('Cannot delete your own account'); return; }
    if (!confirm('Delete this user?')) return;
    await fetch(`/api/admin/users/${id}`, { method: 'DELETE', credentials: 'include' });
    fetch_();
  };

  return (
    <DashboardShell title="Users" subtitle="Manage team members">
      <div className="flex justify-end mb-4">
        <button onClick={openCreate} className="h-9 px-4 text-sm font-bold rounded-lg flex items-center gap-2 text-black" style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>
          <Plus className="w-4 h-4" /> Add User
        </button>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
        {loading ? <div className="flex items-center justify-center h-48"><Loader2 className="w-6 h-6 animate-spin" style={{ color: '#7c3aed' }} /></div>
          : (
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid #1e1e2e', background: '#0d0d12' }}>
                  {['User','Role','Status','Actions'].map(h => <th key={h} className={`text-left text-xs font-semibold px-5 py-3 ${h==='Actions'?'text-right':''}`} style={{ color: '#4b5563' }}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u._id} style={{ borderBottom: '1px solid #1a1a2e' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black" style={{ background: 'linear-gradient(135deg, #c8f000, #7c3aed)' }}>
                          {u.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{u.name}{u._id === me?.id && <span className="ml-1 text-xs" style={{ color: '#4b5563' }}>(you)</span>}</p>
                          <p className="text-xs" style={{ color: '#4b5563' }}>{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={roleColors[u.role] || {}}>{u.role}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={u.isActive ? { background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' } : { background: 'rgba(255,255,255,0.05)', color: '#6b7280', border: '1px solid #2d2d4e' }}>
                        {u.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => openEdit(u)} className="p-1.5 rounded-lg transition-colors" style={{ color: '#4b5563' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#c8f000'; (e.currentTarget as HTMLElement).style.background = 'rgba(200,240,0,0.08)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#4b5563'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => del(u._id)} disabled={u._id === me?.id} className="p-1.5 rounded-lg transition-colors disabled:opacity-30" style={{ color: '#4b5563' }}
                          onMouseEnter={e => { if (u._id !== me?.id) { (e.currentTarget as HTMLElement).style.color = '#f87171'; (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.08)'; } }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#4b5563'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)' }}>
          <div className="w-full max-w-md rounded-2xl shadow-2xl" style={{ background: '#13131f', border: '1px solid #2d2d4e' }}>
            <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid #1e1e2e' }}>
              <h2 className="text-lg font-bold text-white">{editing ? 'Edit User' : 'Add User'}</h2>
              <button onClick={() => setShowModal(false)} className="text-2xl" style={{ color: '#6b7280' }}>&times;</button>
            </div>
            <div className="p-6 space-y-4">
              {error && <div className="p-3 rounded-lg text-sm" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}>{error}</div>}
              {[{l:'Name *',k:'name',t:'text'},{l:'Email *',k:'email',t:'email'},{l:editing?'New Password (blank = keep)':'Password *',k:'password',t:'password'}].map(f=>(
                <div key={f.k}>
                  <label className="block text-sm font-semibold mb-1.5" style={{color:'#9ca3af'}}>{f.l}</label>
                  <input type={f.t} value={(form as Record<string,string|boolean>)[f.k] as string} onChange={e=>setForm(p=>({...p,[f.k]:e.target.value}))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}/>
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{color:'#9ca3af'}}>Role</label>
                <select value={form.role} onChange={e=>setForm(p=>({...p,role:e.target.value}))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
                  {['admin','ceo','manager','sales','team'].map(r=><option key={r} value={r} style={{background:'#1a1a2e'}}>{r}</option>)}
                </select>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.isActive} onChange={e=>setForm(p=>({...p,isActive:e.target.checked}))} className="w-4 h-4" style={{accentColor:'#c8f000'}}/>
                <span className="text-sm font-semibold" style={{color:'#9ca3af'}}>Active</span>
              </label>
            </div>
            <div className="flex gap-3 px-6 py-4" style={{borderTop:'1px solid #1e1e2e'}}>
              <button onClick={()=>setShowModal(false)} className="flex-1 h-10 rounded-lg text-sm font-semibold text-white" style={{background:'#1a1a2e',border:'1px solid #2d2d4e'}}>Cancel</button>
              <button onClick={save} disabled={saving} className="flex-1 h-10 rounded-lg text-sm font-bold text-black disabled:opacity-40" style={{background:'linear-gradient(135deg, #c8f000, #a0d000)'}}>{saving?'Saving...':'Save'}</button>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
