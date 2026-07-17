'use client';
import { useState, useRef, useEffect } from 'react';
import DashboardShell from '@/components/layout/DashboardShell';
import { Bot, Send, Loader2, User, Zap } from 'lucide-react';

interface Message { role: 'user' | 'ai'; content: string; data?: Record<string, unknown>; ts: Date; }

const SUGGESTIONS = [
  'Google Ads ki progress kya hai?',
  'Active clients ki list do',
  'Development projects ka summary do',
  'Konse clients ko follow-up chahiye?',
  'Pending tasks by service batao',
  'This week ka delayed work batao',
];

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const ask = async (question: string) => {
    if (!question.trim() || loading) return;
    setMessages(p => [...p, { role: 'user', content: question, ts: new Date() }]);
    setInput(''); setLoading(true);
    try {
      const res = await fetch('/api/ai/ask-operations', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question }) });
      const d = await res.json() as { success: boolean; data?: { answer: string; relevantClients?: string[]; risks?: string[] }; error?: string };
      setMessages(p => [...p, { role: 'ai', content: d.success && d.data ? d.data.answer : (d.error || 'Something went wrong'), data: d.data as Record<string, unknown>, ts: new Date() }]);
    } catch {
      setMessages(p => [...p, { role: 'ai', content: 'Failed to connect. Check your Groq API key in .env.local', ts: new Date() }]);
    } finally { setLoading(false); }
  };

  return (
    <DashboardShell title="AI Assistant" subtitle="Ask anything about your agency — in English or Urdu">
      <div className="flex flex-col" style={{ height: 'calc(100vh - 160px)' }}>

        {/* Chat */}
        <div className="flex-1 overflow-y-auto space-y-4 pb-4 pr-1">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center py-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'linear-gradient(135deg, rgba(200,240,0,0.15), rgba(124,58,237,0.2))', border: '1px solid rgba(200,240,0,0.2)' }}>
                <Bot className="w-8 h-8" style={{ color: '#c8f000' }} />
              </div>
              <h2 className="text-xl font-black text-white mb-2">Agency AI Assistant</h2>
              <p className="text-sm mb-8 max-w-md" style={{ color: '#6b7280' }}>
                I have access to all your clients, projects, tasks, and progress updates.<br />Ask me anything in English or Urdu.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-xl w-full">
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => ask(s)}
                    className="text-left px-4 py-3 rounded-xl text-sm transition-all"
                    style={{ background: '#13131f', border: '1px solid #1e1e2e', color: '#9ca3af' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = '1px solid rgba(200,240,0,0.3)'; (e.currentTarget as HTMLElement).style.color = '#c8f000'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = '1px solid #1e1e2e'; (e.currentTarget as HTMLElement).style.color = '#9ca3af'; }}>
                    <Zap className="w-3.5 h-3.5 inline mr-2" style={{ color: '#c8f000' }} />{s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'ai' && (
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ background: 'linear-gradient(135deg, #c8f000, #7c3aed)' }}>
                  <Bot className="w-4 h-4 text-black" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user' ? 'rounded-tr-sm' : 'rounded-tl-sm'}`}
                style={msg.role === 'user'
                  ? { background: 'linear-gradient(135deg, #7c3aed, #5b21b6)', color: 'white' }
                  : { background: '#13131f', border: '1px solid #1e1e2e', color: '#d1d5db' }}>
                {msg.role === 'ai' && <p className="text-xs font-bold mb-1" style={{ color: '#c8f000' }}>AI Assistant</p>}
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                {msg.role === 'ai' && msg.data && (msg.data.relevantClients as string[] | undefined)?.length ? (
                  <div className="mt-3 pt-3" style={{ borderTop: '1px solid #1e1e2e' }}>
                    <p className="text-xs font-semibold mb-1.5" style={{ color: '#6b7280' }}>Relevant clients:</p>
                    <div className="flex flex-wrap gap-1">
                      {(msg.data.relevantClients as string[]).map((c, ci) => (
                        <span key={ci} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(200,240,0,0.1)', color: '#c8f000', border: '1px solid rgba(200,240,0,0.2)' }}>{c}</span>
                      ))}
                    </div>
                  </div>
                ) : null}
                <p className="text-xs mt-2" style={{ color: msg.role === 'user' ? 'rgba(255,255,255,0.4)' : '#2d2d4e' }}>
                  {msg.ts.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-1" style={{ background: '#1e1e2e' }}>
                  <User className="w-4 h-4" style={{ color: '#6b7280' }} />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #c8f000, #7c3aed)' }}>
                <Bot className="w-4 h-4 text-black" />
              </div>
              <div className="rounded-2xl rounded-tl-sm px-4 py-3" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
                <div className="flex gap-1 items-center">
                  <Loader2 className="w-4 h-4 animate-spin" style={{ color: '#c8f000' }} />
                  <span className="text-sm" style={{ color: '#6b7280' }}>Analyzing agency data...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="rounded-2xl p-3 mt-2" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
          <div className="flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(input); } }}
              placeholder="Ask anything — Google Ads ki progress kya hai? / Which clients need follow-up?"
              className="flex-1 text-sm px-2 py-1.5 bg-transparent focus:outline-none text-white placeholder:text-gray-600" />
            <button onClick={() => ask(input)} disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-black disabled:opacity-40 flex-shrink-0 font-bold"
              style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs mt-1.5 px-2" style={{ color: '#2d2d4e' }}>
            AI uses real panel data only. Add clients, projects, and progress updates first for best results.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
