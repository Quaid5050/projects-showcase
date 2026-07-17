'use client';
import { useState, useEffect, useCallback } from 'react';
import DashboardShell from '@/components/layout/DashboardShell';
import { getStatusColor, getPriorityColor, formatDate } from '@/lib/utils';
import { CheckSquare, Plus, Loader2, AlertCircle } from 'lucide-react';

interface Task { _id: string; title: string; status: string; priority: string; dueDate?: string; blockers: string; projectId: { name: string } | null; clientId: { name: string } | null; assignedTo?: { name: string } | null; }

const IS = { background: '#1a1a2e', border: '1px solid #2d2d4e', color: 'white' };
const STATUSES = ['','todo','in_progress','review','completed','blocked'];

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState<{ _id: string; name: string; clientId: { _id: string } | null; serviceId: { _id: string } | null }[]>([]);
  const [users, setUsers] = useState<{ _id: string; name: string }[]>([]);
  const [form, setForm] = useState({ projectId: '', clientId: '', serviceId: '', title: '', priority: 'medium', assignedTo: '', dueDate: '', description: '' });
  const [saving, setSaving] = useState(false);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (status) params.set('status', status);
    const res = await fetch(`/api/tasks?${params}`, { credentials: 'include' });
    const d = await res.json() as { success: boolean; data: Task[] };
    if (d.success) setTasks(d.data);
    setLoading(false);
  }, [status]);

  useEffect(() => { fetchTasks(); }, [fetchTasks]);
  useEffect(() => {
    Promise.all([
      fetch('/api/projects', { credentials: 'include' }).then(r => r.json()),
      fetch('/api/admin/users', { credentials: 'include' }).then(r => r.json()),
    ]).then(([pr, us]) => {
      const p = pr as { success: boolean; data: typeof projects };
      const u = us as { success: boolean; data: typeof users };
      if (p.success) setProjects(p.data);
      if (u.success) setUsers(u.data);
    });
  }, []);

  const onProjectChange = (projectId: string) => {
    const p = projects.find(x => x._id === projectId);
    setForm(f => ({ ...f, projectId, clientId: (p?.clientId as { _id: string } | null)?._id || '', serviceId: (p?.serviceId as { _id: string } | null)?._id || '' }));
  };

  const handleCreate = async () => {
    if (!form.title || !form.projectId) return;
    setSaving(true);
    try {
      const res = await fetch('/api/tasks', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const d = await res.json() as { success: boolean };
      if (d.success) { setShowModal(false); fetchTasks(); }
    } finally { setSaving(false); }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    await fetch(`/api/tasks/${id}`, { method: 'PUT', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: newStatus }) });
    fetchTasks();
  };

  const isOverdue = (t: Task) => t.dueDate && new Date(t.dueDate) < new Date() && t.status !== 'completed';

  return (
    <DashboardShell title="Tasks" subtitle={`${tasks.length} tasks`}>
      <div className="flex gap-2 mb-4 flex-wrap">
        <div className="flex gap-1 p-1 rounded-lg" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
          {STATUSES.map(s => (
            <button key={s} onClick={() => setStatus(s)}
              className="px-3 py-1.5 rounded-md text-xs font-semibold capitalize transition-all"
              style={status === s ? { background: 'linear-gradient(135deg, rgba(200,240,0,0.15), rgba(124,58,237,0.15))', color: '#c8f000', border: '1px solid rgba(200,240,0,0.2)' } : { color: '#4b5563', border: '1px solid transparent' }}>
              {s ? s.replace('_',' ') : 'All'}
            </button>
          ))}
        </div>
        <button onClick={() => setShowModal(true)} className="ml-auto h-9 px-4 text-sm font-bold rounded-lg flex items-center gap-2 text-black" style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>
          <Plus className="w-4 h-4" /> New Task
        </button>
      </div>

      {loading ? <div className="flex items-center justify-center h-48"><Loader2 className="w-6 h-6 animate-spin" style={{ color: '#7c3aed' }} /></div>
        : tasks.length === 0 ? (
          <div className="text-center py-16 rounded-xl" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
            <CheckSquare className="w-10 h-10 mx-auto mb-3" style={{ color: '#2d2d4e' }} />
            <p className="text-sm" style={{ color: '#4b5563' }}>No tasks found</p>
          </div>
        ) : (
          <div className="rounded-xl overflow-hidden" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
            <div className="divide-y" style={{ borderColor: '#1a1a2e' }}>
              {tasks.map(t => (
                <div key={t._id} className="flex items-start gap-4 px-5 py-4 transition-colors"
                  style={{ background: isOverdue(t) ? 'rgba(239,68,68,0.05)' : 'transparent' }}
                  onMouseEnter={e => { if (!isOverdue(t)) (e.currentTarget.style.background = 'rgba(200,240,0,0.02)'); }}
                  onMouseLeave={e => { (e.currentTarget.style.background = isOverdue(t) ? 'rgba(239,68,68,0.05)' : 'transparent'); }}>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-white truncate">{t.title}</p>
                      {isOverdue(t) && <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#f87171' }} />}
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: '#4b5563' }}>
                      {t.clientId?.name} · {t.projectId?.name} · {t.assignedTo?.name || 'Unassigned'}
                    </p>
                    {t.blockers && <p className="text-xs mt-1" style={{ color: '#f87171' }}>⚠ {t.blockers}</p>}
                    {t.dueDate && <p className={`text-xs mt-0.5 ${isOverdue(t) ? 'font-semibold' : ''}`} style={{ color: isOverdue(t) ? '#f87171' : '#4b5563' }}>Due: {formatDate(t.dueDate)}</p>}
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getPriorityColor(t.priority)}`}>{t.priority}</span>
                    <select value={t.status} onChange={e => updateStatus(t._id, e.target.value)}
                      className={`text-xs px-2 py-1 rounded-full font-medium cursor-pointer focus:outline-none ${getStatusColor(t.status)}`}
                      style={{ background: 'transparent', border: 'none' }}>
                      {['todo','in_progress','review','completed','blocked'].map(s => <option key={s} value={s} style={{ background: '#1a1a2e', color: 'white' }}>{s.replace('_',' ')}</option>)}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)' }}>
          <div className="w-full max-w-lg rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto" style={{ background: '#13131f', border: '1px solid #2d2d4e' }}>
            <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid #1e1e2e' }}>
              <h2 className="text-lg font-bold text-white">New Task</h2>
              <button onClick={() => setShowModal(false)} className="text-2xl" style={{ color: '#6b7280' }}>&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div><label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Title *</label><input type="text" value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS} /></div>
              <div><label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Project *</label>
                <select value={form.projectId} onChange={e => onProjectChange(e.target.value)} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
                  <option value="" style={{ background: '#1a1a2e' }}>Select project...</option>
                  {projects.map(p => <option key={p._id} value={p._id} style={{ background: '#1a1a2e' }}>{p.name}</option>)}
                </select></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Priority</label>
                  <select value={form.priority} onChange={e => setForm(p => ({ ...p, priority: e.target.value }))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
                    {['low','medium','high','urgent'].map(v => <option key={v} value={v} style={{ background: '#1a1a2e' }}>{v}</option>)}
                  </select></div>
                <div><label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Assign To</label>
                  <select value={form.assignedTo} onChange={e => setForm(p => ({ ...p, assignedTo: e.target.value }))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS}>
                    <option value="" style={{ background: '#1a1a2e' }}>Unassigned</option>
                    {users.map(u => <option key={u._id} value={u._id} style={{ background: '#1a1a2e' }}>{u.name}</option>)}
                  </select></div>
              </div>
              <div><label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Due Date</label><input type="date" value={form.dueDate} onChange={e => setForm(p => ({ ...p, dueDate: e.target.value }))} className="w-full h-10 px-3 rounded-lg text-sm text-white focus:outline-none" style={IS} /></div>
              <div><label className="block text-sm font-semibold mb-1.5" style={{ color: '#9ca3af' }}>Description</label><textarea rows={2} value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} className="w-full px-3 py-2 rounded-lg text-sm text-white focus:outline-none resize-none" style={IS} /></div>
            </div>
            <div className="flex gap-3 px-6 py-4" style={{ borderTop: '1px solid #1e1e2e' }}>
              <button onClick={() => setShowModal(false)} className="flex-1 h-10 rounded-lg text-sm font-semibold text-white" style={{ background: '#1a1a2e', border: '1px solid #2d2d4e' }}>Cancel</button>
              <button onClick={handleCreate} disabled={saving || !form.title || !form.projectId} className="flex-1 h-10 rounded-lg text-sm font-bold text-black disabled:opacity-40" style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>{saving ? 'Creating...' : 'Create Task'}</button>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
