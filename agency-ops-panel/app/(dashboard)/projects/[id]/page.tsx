'use client';
import { useState, useEffect, useCallback, use } from 'react';
import Link from 'next/link';
import DashboardShell from '@/components/layout/DashboardShell';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getStatusColor, getPriorityColor, formatDateTime } from '@/lib/utils';
import {
  ChevronLeft, Bot, Loader2, CheckSquare, TrendingUp, Plus,
  Globe, Copy, CheckCircle, EyeOff,
} from 'lucide-react';

interface ProjectDetail {
  project: {
    _id: string; name: string; description: string; status: string; priority: string;
    progressPercentage: number; currentStage: string; latestUpdate: string;
    risks: string; nextStep: string; dueDate?: string;
    clientPortalEnabled?: boolean; clientPortalToken?: string;
    clientId: { name: string; companyName?: string; email?: string } | null;
    serviceId: { name: string } | null;
    assignedManager?: { name: string } | null;
    assignedTeam: { name: string }[];
  };
  tasks: Array<{ _id: string; title: string; status: string; priority: string; dueDate?: string; assignedTo?: { name: string } | null }>;
  progress: Array<{ _id: string; updateTitle: string; updateText: string; completedWork: string; pendingWork: string; visibility: string; createdAt: string; createdBy?: { name: string } | null }>;
}

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [data, setData] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'progress'>('overview');

  // Progress update modal
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [progressForm, setProgressForm] = useState({ updateTitle: '', updateText: '', completedWork: '', pendingWork: '', blockers: '', nextSteps: '', eta: '', visibility: 'internal' });
  const [saving, setSaving] = useState(false);

  // AI
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSummary, setAiSummary] = useState('');
  const [editProgress, setEditProgress] = useState(0);

  // Client portal
  const [portalEnabled, setPortalEnabled] = useState(false);
  const [portalUrl, setPortalUrl] = useState('');
  const [portalLoading, setPortalLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showPortalPanel, setShowPortalPanel] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`/api/projects/${id}`, { credentials: 'include' });
      const d = await res.json() as { success: boolean; data: ProjectDetail };
      if (d.success) {
        setData(d.data);
        setEditProgress(d.data.project.progressPercentage);
        setPortalEnabled(d.data.project.clientPortalEnabled || false);
        if (d.data.project.clientPortalEnabled && d.data.project.clientPortalToken) {
          setPortalUrl(`${window.location.origin}/client-portal/${d.data.project.clientPortalToken}`);
        }
      }
    } finally { setLoading(false); }
  }, [id]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const updateProgress = async () => {
    await fetch(`/api/projects/${id}`, {
      method: 'PUT', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ progressPercentage: editProgress }),
    });
    fetchData();
  };

  const addProgressUpdate = async () => {
    if (!progressForm.updateTitle || !progressForm.updateText) return;
    setSaving(true);
    try {
      const res = await fetch('/api/progress', {
        method: 'POST', credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...progressForm, projectId: id,
          clientId: (data?.project.clientId as { _id?: string } | null)?._id || '',
          serviceId: (data?.project.serviceId as { _id?: string } | null)?._id || '',
        }),
      });
      const d = await res.json() as { success: boolean };
      if (d.success) { setShowProgressModal(false); fetchData(); }
    } finally { setSaving(false); }
  };

  const generateSummary = async () => {
    setAiLoading(true);
    try {
      const res = await fetch('/api/ai/generate-project-summary', {
        method: 'POST', credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId: id }),
      });
      const d = await res.json() as { success: boolean; data?: { clientMessage: string } };
      if (d.success && d.data) setAiSummary(d.data.clientMessage);
    } finally { setAiLoading(false); }
  };

  // Toggle client portal on/off
  const togglePortal = async (enable: boolean) => {
    setPortalLoading(true);
    try {
      const res = await fetch(`/api/projects/${id}/client-portal`, {
        method: 'POST', credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enable }),
      });
      const d = await res.json() as { success: boolean; data?: { enabled: boolean; portalUrl?: string } };
      if (d.success && d.data) {
        setPortalEnabled(d.data.enabled);
        setPortalUrl(d.data.portalUrl || '');
        if (d.data.enabled) setShowPortalPanel(true);
      }
    } finally { setPortalLoading(false); }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(portalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) return (
    <DashboardShell title="Project">
      <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>
    </DashboardShell>
  );

  if (!data) return (
    <DashboardShell title="Not Found">
      <div className="text-center py-20 text-gray-400">Project not found</div>
    </DashboardShell>
  );

  const { project, tasks, progress } = data;

  return (
    <DashboardShell title={project.name} subtitle={`${project.clientId?.name} · ${project.serviceId?.name}`}>
      {/* Back + status */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <Link href="/projects" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
          <ChevronLeft className="w-4 h-4" /> Projects
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(project.status)}`}>
            {project.status.replace('_', ' ')}
          </span>
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${getPriorityColor(project.priority)}`}>
            {project.priority}
          </span>
          {/* Give Client Access button */}
          <button
            onClick={() => portalEnabled ? setShowPortalPanel(!showPortalPanel) : togglePortal(true)}
            disabled={portalLoading}
            className={`flex items-center gap-2 text-xs px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 ${
              portalEnabled
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {portalLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Globe className="w-3.5 h-3.5" />}
            {portalEnabled ? 'Client Access: On' : 'Give Client Access'}
          </button>
        </div>
      </div>

      {/* Client Portal Panel */}
      {showPortalPanel && portalEnabled && portalUrl && (
        <div className="mb-5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-blue-900 text-sm flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" /> Client Portal is Active
              </h3>
              <p className="text-xs text-blue-600 mt-0.5">Share this link with your client. They can view progress, tasks, and chat with the AI assistant.</p>
            </div>
            <button
              onClick={() => togglePortal(false)}
              disabled={portalLoading}
              className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 flex-shrink-0 ml-4"
            >
              <EyeOff className="w-3.5 h-3.5" /> Revoke
            </button>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 bg-white border border-blue-200 rounded-lg px-3 py-2">
              <p className="text-xs text-gray-500 truncate">{portalUrl}</p>
            </div>
            <button
              onClick={copyLink}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0 ${
                copied ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {copied ? <><CheckCircle className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy Link</>}
            </button>
            <Link
              href={portalUrl}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-blue-300 text-blue-700 hover:bg-blue-100 transition-colors flex-shrink-0"
            >
              <Globe className="w-4 h-4" /> Preview
            </Link>
          </div>
          <p className="text-xs text-blue-500 mt-2">
            ✓ Client can see: project progress, tasks, client-safe updates, and AI chat &nbsp;
            ✗ Client cannot see: internal notes, blockers, team info
          </p>
        </div>
      )}

      {/* Progress bar */}
      <Card className="mb-5">
        <CardContent className="pt-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Project Progress</span>
            <div className="flex items-center gap-2">
              <input
                type="number" min={0} max={100} value={editProgress}
                onChange={e => setEditProgress(parseInt(e.target.value) || 0)}
                className="w-16 h-7 px-2 border border-gray-300 rounded text-sm text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-500">%</span>
              <button onClick={updateProgress} className="h-7 px-3 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700">Update</button>
            </div>
          </div>
          <Progress value={project.progressPercentage} className="h-3" />
          {project.currentStage && <p className="text-xs text-gray-500 mt-2">Current: {project.currentStage}</p>}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-3 space-y-4">
          {/* Tabs */}
          <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
            {(['overview', 'tasks', 'progress'] as const).map(t => (
              <button key={t} onClick={() => setActiveTab(t)}
                className={`flex-1 py-1.5 text-xs font-medium rounded-md capitalize transition-colors ${activeTab === t ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                {t}
              </button>
            ))}
          </div>

          {/* Overview */}
          {activeTab === 'overview' && (
            <Card>
              <CardContent className="pt-5 space-y-4">
                {project.latestUpdate && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Latest Update</p>
                    <p className="text-sm text-gray-700 bg-blue-50 rounded-lg p-3">{project.latestUpdate}</p>
                  </div>
                )}
                {project.nextStep && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Next Step</p>
                    <p className="text-sm text-gray-700">{project.nextStep}</p>
                  </div>
                )}
                {project.risks && (
                  <div>
                    <p className="text-xs font-semibold text-red-500 uppercase mb-1">Risks</p>
                    <p className="text-sm text-red-700 bg-red-50 rounded-lg p-3">{project.risks}</p>
                  </div>
                )}
                <div className="flex gap-2 flex-wrap">
                  <button onClick={generateSummary} disabled={aiLoading}
                    className="flex items-center gap-2 bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50">
                    {aiLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Bot className="w-4 h-4" />} Generate AI Summary
                  </button>
                  <button onClick={() => setShowProgressModal(true)}
                    className="flex items-center gap-2 bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700">
                    <Plus className="w-4 h-4" /> Add Progress Update
                  </button>
                </div>
                {aiSummary && (
                  <div>
                    <p className="text-xs font-semibold text-purple-600 uppercase mb-1">AI Generated Client Message</p>
                    <textarea rows={5} value={aiSummary} onChange={e => setAiSummary(e.target.value)}
                      className="w-full px-3 py-2.5 bg-purple-50 border border-purple-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-400" />
                    <p className="text-xs text-gray-400 mt-1">Review and approve before sending to client</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Tasks */}
          {activeTab === 'tasks' && (
            <Card>
              <div className="divide-y divide-gray-50">
                {tasks.length === 0 ? (
                  <div className="text-center py-12 text-gray-400 text-sm">
                    <CheckSquare className="w-8 h-8 mx-auto mb-2 text-gray-300" />No tasks yet
                  </div>
                ) : tasks.map(t => (
                  <div key={t._id} className="flex items-center justify-between px-5 py-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{t.title}</p>
                      <p className="text-xs text-gray-400">{t.assignedTo?.name || 'Unassigned'}{t.dueDate ? ` · Due ${t.dueDate}` : ''}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getPriorityColor(t.priority)}`}>{t.priority}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(t.status)}`}>{t.status.replace('_', ' ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Progress */}
          {activeTab === 'progress' && (
            <div className="space-y-3">
              <button onClick={() => setShowProgressModal(true)}
                className="flex items-center gap-2 bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700">
                <Plus className="w-4 h-4" /> Add Progress Update
              </button>
              {progress.length === 0 ? (
                <div className="text-center py-12 text-gray-400 text-sm">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-gray-300" />No progress updates yet
                </div>
              ) : progress.map(u => (
                <Card key={u._id}>
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium text-gray-900 text-sm">{u.updateTitle}</p>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${u.visibility === 'client_safe' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                          {u.visibility.replace('_', ' ')}
                        </span>
                        <span className="text-xs text-gray-400">{formatDateTime(u.createdAt)}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{u.updateText}</p>
                    {u.completedWork && <p className="text-xs text-green-700 bg-green-50 rounded px-2 py-1 mb-1">✓ Completed: {u.completedWork}</p>}
                    {u.pendingWork && <p className="text-xs text-orange-700 bg-orange-50 rounded px-2 py-1">⏳ Pending: {u.pendingWork}</p>}
                    {u.createdBy && <p className="text-xs text-gray-400 mt-2">By {u.createdBy.name}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Side info */}
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-5 space-y-2">
              <p className="text-sm font-semibold text-gray-900 mb-3">Project Info</p>
              {[
                ['Client', project.clientId?.name || '—'],
                ['Service', project.serviceId?.name || '—'],
                ['Manager', project.assignedManager?.name || '—'],
                ['Team', project.assignedTeam.map(t => t.name).join(', ') || '—'],
                ['Due Date', project.dueDate || '—'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-xs text-gray-500">{k}</span>
                  <span className="text-xs font-medium text-gray-900 text-right truncate max-w-[60%]">{v}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Client Portal Card */}
          <Card className={`border-2 ${portalEnabled ? 'border-green-300 bg-green-50' : 'border-dashed border-gray-300'}`}>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 mb-2">
                <Globe className={`w-4 h-4 ${portalEnabled ? 'text-green-600' : 'text-gray-400'}`} />
                <p className="text-sm font-semibold text-gray-900">Client Portal</p>
              </div>
              {portalEnabled ? (
                <>
                  <p className="text-xs text-green-700 mb-3">Active — client can view project and chat with AI</p>
                  <button onClick={copyLink} className={`w-full h-8 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5 ${copied ? 'bg-green-600 text-white' : 'bg-white border border-green-300 text-green-700 hover:bg-green-100'}`}>
                    {copied ? <><CheckCircle className="w-3.5 h-3.5" /> Copied!</> : <><Copy className="w-3.5 h-3.5" /> Copy Client Link</>}
                  </button>
                  <button onClick={() => togglePortal(false)} disabled={portalLoading} className="w-full h-8 mt-1.5 text-xs text-red-500 hover:text-red-700 transition-colors flex items-center justify-center gap-1">
                    <EyeOff className="w-3.5 h-3.5" /> Revoke Access
                  </button>
                </>
              ) : (
                <>
                  <p className="text-xs text-gray-500 mb-3">Give your client a private link to view progress and chat with AI.</p>
                  <button onClick={() => togglePortal(true)} disabled={portalLoading} className="w-full h-8 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-1.5">
                    {portalLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Globe className="w-3.5 h-3.5" />}
                    Give Client Access
                  </button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Add Progress Modal */}
      {showProgressModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-semibold">Add Progress Update</h2>
              <button onClick={() => setShowProgressModal(false)} className="text-gray-400 text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              {[
                { l: 'Title *', k: 'updateTitle' }, { l: 'Update *', k: 'updateText' },
                { l: 'Completed Work', k: 'completedWork' }, { l: 'Pending Work', k: 'pendingWork' },
                { l: 'Blockers', k: 'blockers' }, { l: 'Next Steps', k: 'nextSteps' }, { l: 'ETA', k: 'eta' },
              ].map(f => (
                <div key={f.k}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{f.l}</label>
                  <textarea rows={2} value={(progressForm as Record<string, string>)[f.k]}
                    onChange={e => setProgressForm(p => ({ ...p, [f.k]: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Visibility</label>
                <select value={progressForm.visibility} onChange={e => setProgressForm(p => ({ ...p, visibility: e.target.value }))}
                  className="w-full h-9 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="internal">Internal Only</option>
                  <option value="client_safe">Client Safe (visible in client portal + used by AI)</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4 border-t">
              <button onClick={() => setShowProgressModal(false)} className="flex-1 h-9 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Cancel</button>
              <button onClick={addProgressUpdate} disabled={saving}
                className="flex-1 h-9 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 disabled:opacity-50">
                {saving ? 'Saving...' : 'Save Update'}
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
