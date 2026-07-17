'use client';
import { useState, useEffect, useCallback, use } from 'react';
import Link from 'next/link';
import DashboardShell from '@/components/layout/DashboardShell';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getStatusColor, getPriorityColor, formatDateTime, formatRelativeTime } from '@/lib/utils';
import { ChevronLeft, Bot, FolderKanban, CheckSquare, TrendingUp, Loader2, MessageSquare, Send } from 'lucide-react';

interface ClientDetail {
  client: { _id: string; name: string; companyName?: string; email?: string; phone?: string; businessType?: string; status: string; notes: string; assignedSales?: { name: string } | null; assignedManager?: { name: string } | null };
  projects: Array<{ _id: string; name: string; status: string; progressPercentage: number; currentStage: string; updatedAt: string; serviceId: { name: string } | null }>;
  recentProgress: Array<{ _id: string; updateTitle: string; updateText: string; completedWork: string; pendingWork: string; visibility: string; createdAt: string; createdBy: { name: string } | null }>;
  pendingTasks: Array<{ _id: string; title: string; status: string; priority: string; dueDate?: string; assignedTo?: { name: string } | null }>;
}

export default function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [data, setData] = useState<ClientDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiReply, setAiReply] = useState('');
  const [clientMsg, setClientMsg] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'tasks' | 'progress' | 'ai'>('overview');

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`/api/clients/${id}`, { credentials: 'include' });
      const d = await res.json() as { success: boolean; data: ClientDetail };
      if (d.success) setData(d.data);
    } finally { setLoading(false); }
  }, [id]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const generateReply = async () => {
    if (!clientMsg.trim()) return;
    setAiLoading(true);
    try {
      const res = await fetch('/api/ai/generate-client-reply', {
        method: 'POST', credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientMessage: clientMsg, clientId: id }),
      });
      const d = await res.json() as { success: boolean; data?: { suggestedReply: string } };
      if (d.success && d.data) { setAiReply(d.data.suggestedReply); setActiveTab('ai'); }
    } finally { setAiLoading(false); }
  };

  if (loading) return <DashboardShell title="Client"><div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div></DashboardShell>;
  if (!data) return <DashboardShell title="Client"><div className="text-center py-20 text-gray-400">Client not found</div></DashboardShell>;

  const { client, projects, recentProgress, pendingTasks } = data;

  return (
    <DashboardShell title={client.name} subtitle={client.companyName || client.businessType || 'Client Detail'}>
      <div className="flex items-center justify-between mb-4">
        <Link href="/clients" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"><ChevronLeft className="w-4 h-4" /> Clients</Link>
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(client.status)}`}>{client.status}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-3 space-y-4">
          {/* Tabs */}
          <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
            {(['overview','projects','tasks','progress','ai'] as const).map(t => (
              <button key={t} onClick={() => setActiveTab(t)}
                className={`flex-1 py-1.5 text-xs font-medium rounded-md capitalize transition-colors ${activeTab === t ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                {t === 'ai' ? 'AI Reply' : t}
              </button>
            ))}
          </div>

          {/* Overview */}
          {activeTab === 'overview' && (
            <Card><CardContent className="pt-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[['Email', client.email || '—'], ['Phone', client.phone || '—'], ['Business Type', client.businessType || '—'], ['Status', client.status], ['Sales', client.assignedSales?.name || '—'], ['Manager', client.assignedManager?.name || '—']].map(([k,v]) => (
                  <div key={k} className="bg-gray-50 rounded-lg p-3"><p className="text-xs text-gray-500">{k}</p><p className="text-sm font-medium text-gray-900">{v}</p></div>
                ))}
              </div>
              {client.notes && <div><p className="text-sm font-medium text-gray-700 mb-1">Notes</p><p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">{client.notes}</p></div>}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Generate AI Client Reply</p>
                <textarea rows={3} value={clientMsg} onChange={e => setClientMsg(e.target.value)} placeholder="Paste client message here..." className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button onClick={generateReply} disabled={aiLoading || !clientMsg.trim()} className="mt-2 flex items-center gap-2 bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors">
                  {aiLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Bot className="w-4 h-4" />} Generate AI Reply
                </button>
              </div>
            </CardContent></Card>
          )}

          {/* Projects */}
          {activeTab === 'projects' && (
            <div className="space-y-3">
              {projects.length === 0 ? <div className="text-center py-12 text-gray-400 text-sm"><FolderKanban className="w-8 h-8 mx-auto mb-2 text-gray-300" />No projects yet</div>
                : projects.map(p => (
                  <Link key={p._id} href={`/projects/${p._id}`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="pt-4">
                        <div className="flex items-start justify-between mb-3">
                          <div><p className="font-medium text-gray-900 text-sm">{p.name}</p><p className="text-xs text-gray-500">{p.serviceId?.name} · {formatRelativeTime(p.updatedAt)}</p></div>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(p.status)}`}>{p.status.replace('_',' ')}</span>
                        </div>
                        <div className="flex items-center gap-3"><Progress value={p.progressPercentage} className="flex-1" /><span className="text-xs text-gray-500 flex-shrink-0">{p.progressPercentage}%</span></div>
                        {p.currentStage && <p className="text-xs text-gray-500 mt-2">{p.currentStage}</p>}
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          )}

          {/* Tasks */}
          {activeTab === 'tasks' && (
            <Card><div className="divide-y divide-gray-50">
              {pendingTasks.length === 0 ? <div className="text-center py-12 text-gray-400 text-sm"><CheckSquare className="w-8 h-8 mx-auto mb-2 text-gray-300" />No pending tasks</div>
                : pendingTasks.map(t => (
                  <div key={t._id} className="flex items-center justify-between px-5 py-3">
                    <div><p className="text-sm font-medium text-gray-900">{t.title}</p><p className="text-xs text-gray-400">{t.assignedTo?.name || 'Unassigned'}{t.dueDate ? ` · Due ${t.dueDate}` : ''}</p></div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getPriorityColor(t.priority)}`}>{t.priority}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(t.status)}`}>{t.status.replace('_',' ')}</span>
                    </div>
                  </div>
                ))}
            </div></Card>
          )}

          {/* Progress */}
          {activeTab === 'progress' && (
            <div className="space-y-3">
              {recentProgress.length === 0 ? <div className="text-center py-12 text-gray-400 text-sm"><TrendingUp className="w-8 h-8 mx-auto mb-2 text-gray-300" />No progress updates</div>
                : recentProgress.map(u => (
                  <Card key={u._id}><CardContent className="pt-4">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium text-gray-900 text-sm">{u.updateTitle}</p>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${u.visibility === 'client_safe' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>{u.visibility.replace('_',' ')}</span>
                        <span className="text-xs text-gray-400">{formatDateTime(u.createdAt)}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{u.updateText}</p>
                    {u.completedWork && <p className="text-xs text-green-700 bg-green-50 rounded px-2 py-1 mb-1">✓ {u.completedWork}</p>}
                    {u.pendingWork && <p className="text-xs text-orange-700 bg-orange-50 rounded px-2 py-1">⏳ {u.pendingWork}</p>}
                  </CardContent></Card>
                ))}
            </div>
          )}

          {/* AI Reply */}
          {activeTab === 'ai' && (
            <Card><CardContent className="pt-5 space-y-4">
              <p className="text-sm font-semibold text-gray-700">Client Message</p>
              <textarea rows={3} value={clientMsg} onChange={e => setClientMsg(e.target.value)} placeholder="Paste client message..." className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button onClick={generateReply} disabled={aiLoading || !clientMsg.trim()} className="flex items-center gap-2 bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50">
                {aiLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Bot className="w-4 h-4" />} Generate Reply
              </button>
              {aiReply && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">AI Draft Reply</p>
                  <textarea rows={6} value={aiReply} onChange={e => setAiReply(e.target.value)} className="w-full px-3 py-2.5 bg-purple-50 border border-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" />
                  <p className="text-xs text-gray-400 mt-1.5">Review, edit, and approve before sending. AI uses only client-safe progress data.</p>
                </div>
              )}
            </CardContent></Card>
          )}
        </div>

        {/* Info card */}
        <div>
          <Card><CardContent className="pt-5">
            <p className="text-sm font-semibold text-gray-900 mb-3">Quick Stats</p>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-xs text-gray-500">Projects</span><span className="text-xs font-medium text-gray-900">{projects.length}</span></div>
              <div className="flex justify-between"><span className="text-xs text-gray-500">Pending Tasks</span><span className="text-xs font-medium text-gray-900">{pendingTasks.length}</span></div>
              <div className="flex justify-between"><span className="text-xs text-gray-500">Progress Updates</span><span className="text-xs font-medium text-gray-900">{recentProgress.length}</span></div>
            </div>
            <div className="mt-4 space-y-2">
              <Link href={`/conversations?clientId=${id}`} className="flex items-center gap-2 text-xs text-blue-600 hover:underline"><MessageSquare className="w-3.5 h-3.5" /> View Conversations</Link>
              <Link href={`/projects?clientId=${id}`} className="flex items-center gap-2 text-xs text-blue-600 hover:underline"><FolderKanban className="w-3.5 h-3.5" /> View Projects</Link>
            </div>
          </CardContent></Card>
        </div>
      </div>
    </DashboardShell>
  );
}
