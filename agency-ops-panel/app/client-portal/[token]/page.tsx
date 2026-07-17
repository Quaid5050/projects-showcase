'use client';

import { useState, useEffect, useRef, use } from 'react';
import { Bot, Send, CheckCircle, Clock, AlertCircle, Loader2, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectData {
  project: {
    id: string; name: string; description: string; status: string;
    progressPercentage: number; currentStage: string; latestUpdate: string;
    nextStep: string; dueDate?: string; type: string; service?: string;
    client?: { name: string; companyName?: string };
  };
  tasks: Array<{ title: string; status: string; priority: string; dueDate?: string }>;
  progress: Array<{ updateTitle: string; updateText: string; completedWork: string; pendingWork: string; nextSteps: string; eta: string; createdAt: string }>;
}

interface ChatMessage { role: 'user' | 'ai'; content: string; }

const statusColors: Record<string, string> = {
  not_started: 'bg-gray-100 text-gray-600',
  in_progress: 'bg-blue-100 text-blue-700',
  waiting_client: 'bg-yellow-100 text-yellow-700',
  review: 'bg-purple-100 text-purple-700',
  completed: 'bg-green-100 text-green-700',
  paused: 'bg-orange-100 text-orange-700',
};

const taskStatusIcon: Record<string, React.ReactNode> = {
  completed: <CheckCircle className="w-4 h-4 text-green-500" />,
  in_progress: <Clock className="w-4 h-4 text-blue-500" />,
  todo: <div className="w-4 h-4 rounded-full border-2 border-gray-300" />,
  blocked: <AlertCircle className="w-4 h-4 text-red-500" />,
  review: <Clock className="w-4 h-4 text-purple-500" />,
};

export default function ClientPortalPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);
  const [data, setData] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [showUpdates, setShowUpdates] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`/api/client-portal/${token}`)
      .then(r => r.json())
      .then((d: { success: boolean; data: ProjectData; error?: string }) => {
        if (d.success) setData(d.data);
        else setError(d.error || 'Invalid link');
      })
      .catch(() => setError('Failed to load project'))
      .finally(() => setLoading(false));
  }, [token]);

  useEffect(() => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  }, [messages]);

  const askAI = async () => {
    const q = input.trim();
    if (!q || aiLoading) return;
    setMessages(p => [...p, { role: 'user', content: q }]);
    setInput('');
    setAiLoading(true);
    try {
      const res = await fetch(`/api/client-portal/${token}/ask`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q }),
      });
      const d = await res.json() as { success: boolean; data?: { answer: string }; error?: string };
      setMessages(p => [...p, { role: 'ai', content: d.success && d.data ? d.data.answer : "I'll check with the team and get back to you shortly." }]);
    } catch {
      setMessages(p => [...p, { role: 'ai', content: "I'll check with the team and get back to you shortly." }]);
    } finally { setAiLoading(false); }
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center"><Loader2 className="w-10 h-10 animate-spin text-blue-600 mx-auto mb-3" /><p className="text-gray-500">Loading your project...</p></div>
    </div>
  );

  if (error || !data) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><AlertCircle className="w-8 h-8 text-red-500" /></div>
        <h1 className="text-xl font-bold text-gray-900 mb-2">Link Not Found</h1>
        <p className="text-gray-500 text-sm">{error || 'This project link is invalid or has expired. Please contact your agency for a new link.'}</p>
      </div>
    </div>
  );

  const { project, tasks, progress } = data;
  const completedTasks = tasks.filter(t => t.status === 'completed').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Agency Panel</p>
              <p className="text-blue-300 text-xs">Client Portal</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white text-sm font-medium">{project.client?.name || project.client?.companyName}</p>
            <p className="text-blue-300 text-xs">{project.service}</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Project Hero */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 mb-6">
          <div className="flex items-start justify-between mb-5 flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">{project.name}</h1>
              {project.description && <p className="text-blue-200 text-sm">{project.description}</p>}
            </div>
            <span className={`text-sm px-4 py-1.5 rounded-full font-medium ${statusColors[project.status] || 'bg-gray-100 text-gray-600'}`}>
              {project.status.replace('_', ' ')}
            </span>
          </div>

          {/* Progress */}
          <div className="mb-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-blue-200">Overall Progress</span>
              <span className="text-2xl font-bold text-white">{project.progressPercentage}%</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500" style={{ width: `${project.progressPercentage}%` }} />
            </div>
          </div>

          {/* Key info grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Current Stage', value: project.currentStage || 'In progress', icon: TrendingUp },
              { label: 'Tasks Done', value: `${completedTasks}/${tasks.length}`, icon: CheckCircle },
              { label: 'Next Step', value: project.nextStep || 'Team is working on it', icon: Clock },
              { label: 'Due Date', value: project.dueDate ? new Date(project.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Not set', icon: AlertCircle },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white/10 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-1"><Icon className="w-3.5 h-3.5 text-blue-300" /><span className="text-xs text-blue-300">{item.label}</span></div>
                  <p className="text-sm font-medium text-white leading-tight">{item.value}</p>
                </div>
              );
            })}
          </div>

          {project.latestUpdate && (
            <div className="mt-4 bg-blue-500/20 border border-blue-400/30 rounded-xl p-4">
              <p className="text-xs font-semibold text-blue-300 mb-1">📌 Latest Update</p>
              <p className="text-sm text-white">{project.latestUpdate}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Tasks + Progress */}
          <div className="space-y-5">
            {/* Tasks */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-5">
              <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" /> Project Tasks
                <span className="ml-auto text-xs bg-white/20 text-blue-200 px-2.5 py-0.5 rounded-full">{completedTasks}/{tasks.length} done</span>
              </h2>
              {tasks.length === 0 ? <p className="text-blue-300 text-sm text-center py-4">No tasks yet</p>
                : (
                  <div className="space-y-2">
                    {tasks.map((t, i) => (
                      <div key={i} className={`flex items-center gap-3 p-3 rounded-xl transition-all ${t.status === 'completed' ? 'bg-green-500/10 border border-green-500/20' : 'bg-white/5 border border-white/10'}`}>
                        <div className="flex-shrink-0">{taskStatusIcon[t.status] || <div className="w-4 h-4 rounded-full border-2 border-gray-400" />}</div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium ${t.status === 'completed' ? 'text-green-300 line-through' : 'text-white'}`}>{t.title}</p>
                          {t.dueDate && <p className="text-xs text-blue-300 mt-0.5">Due {new Date(t.dueDate).toLocaleDateString()}</p>}
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${t.priority === 'urgent' ? 'bg-red-500/30 text-red-300' : t.priority === 'high' ? 'bg-orange-500/30 text-orange-300' : 'bg-white/10 text-blue-200'}`}>{t.priority}</span>
                      </div>
                    ))}
                  </div>
                )}
            </div>

            {/* Progress Updates */}
            {progress.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-5">
                <button onClick={() => setShowUpdates(!showUpdates)} className="w-full flex items-center justify-between mb-1">
                  <h2 className="text-base font-semibold text-white flex items-center gap-2"><TrendingUp className="w-4 h-4 text-blue-400" /> Progress Updates</h2>
                  {showUpdates ? <ChevronUp className="w-4 h-4 text-blue-300" /> : <ChevronDown className="w-4 h-4 text-blue-300" />}
                </button>
                {showUpdates && (
                  <div className="space-y-3 mt-3">
                    {progress.map((u, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-sm font-semibold text-white mb-2">{u.updateTitle}</p>
                        <p className="text-sm text-blue-200 mb-2">{u.updateText}</p>
                        {u.completedWork && <p className="text-xs text-green-300 bg-green-500/10 rounded-lg px-3 py-1.5 mb-1.5">✓ {u.completedWork}</p>}
                        {u.pendingWork && <p className="text-xs text-yellow-300 bg-yellow-500/10 rounded-lg px-3 py-1.5 mb-1.5">⏳ {u.pendingWork}</p>}
                        {u.nextSteps && <p className="text-xs text-blue-300 bg-blue-500/10 rounded-lg px-3 py-1.5 mb-1.5">→ {u.nextSteps}</p>}
                        {u.eta && <p className="text-xs text-purple-300">ETA: {u.eta}</p>}
                        <p className="text-xs text-blue-400 mt-2">{new Date(u.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: AI Assistant */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col" style={{ minHeight: '500px' }}>
            <div className="p-5 border-b border-white/10">
              <h2 className="text-base font-semibold text-white flex items-center gap-2"><Bot className="w-4 h-4 text-blue-400" /> Project Assistant</h2>
              <p className="text-xs text-blue-300 mt-0.5">Ask anything about your project</p>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <Bot className="w-10 h-10 text-blue-400/50 mx-auto mb-3" />
                  <p className="text-blue-300 text-sm mb-4">I can answer questions about your project progress, tasks, and timeline.</p>
                  <div className="space-y-2">
                    {[
                      'What is the current progress?',
                      'When will the project be done?',
                      'What has been completed so far?',
                      'What is being worked on now?',
                    ].map(q => (
                      <button key={q} onClick={() => { setInput(q); }} className="block w-full text-left text-xs bg-white/10 hover:bg-white/20 text-blue-200 px-3 py-2 rounded-lg transition-colors">
                        💬 {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-white/15 text-white rounded-tl-sm border border-white/10'}`}>
                    {msg.role === 'ai' && <p className="text-xs text-blue-300 mb-1 font-medium">🤖 Assistant</p>}
                    <p className="leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
              {aiLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/15 rounded-2xl rounded-tl-sm border border-white/10 px-4 py-3">
                    <div className="flex gap-1 items-center"><Loader2 className="w-4 h-4 animate-spin text-blue-300" /><span className="text-xs text-blue-300">Thinking...</span></div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  value={input} onChange={e => setInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); askAI(); } }}
                  placeholder="Ask about your project..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <button onClick={askAI} disabled={aiLoading || !input.trim()}
                  className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 disabled:opacity-40 flex-shrink-0">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-blue-400/60 mt-2 text-center">Powered by AI • Answers based on real project data</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-blue-400/40 text-xs">
        Secure client portal · Project data is private
      </div>
    </div>
  );
}
