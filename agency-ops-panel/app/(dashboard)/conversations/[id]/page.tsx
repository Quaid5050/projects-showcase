'use client';
import { useState, useEffect, useCallback, use, useRef } from 'react';
import Link from 'next/link';
import DashboardShell from '@/components/layout/DashboardShell';
import { useAuth } from '@/components/auth/AuthContext';
import { formatRelativeTime } from '@/lib/utils';
import { Bot, Send, ChevronLeft, Loader2, CheckCircle, User, AlertCircle } from 'lucide-react';

interface Message { _id: string; senderType: string; content: string; direction: string; status: string; createdAt: string; createdBy?: { name: string } | null; }
interface ConvDetail { _id: string; channel: string; status: string; messages: Message[]; clientId?: { _id: string; name: string; companyName?: string; businessType?: string; status: string } | null; leadId?: { name: string } | null; projectId?: { _id: string; name: string; status: string; progressPercentage: number } | null; }
type InputMode = 'client' | 'sales';

export default function ConvDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { user } = useAuth();
  const [conv, setConv] = useState<ConvDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [inputMode, setInputMode] = useState<InputMode>('client');
  const [sending, setSending] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiDraft, setAiDraft] = useState('');
  const [aiReplyId, setAiReplyId] = useState('');
  const [error, setError] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const fetch_ = useCallback(async () => {
    try {
      const res = await fetch(`/api/conversations/${id}`, { credentials: 'include' });
      const d = await res.json() as { success: boolean; data: ConvDetail };
      if (d.success) setConv(d.data);
    } finally { setLoading(false); }
  }, [id]);

  useEffect(() => { fetch_(); }, [fetch_]);
  useEffect(() => { setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100); }, [conv?.messages.length]);

  const postMessage = async (content: string, senderType: string, direction: string, status: string) => {
    const res = await fetch(`/api/conversations/${id}/messages`, { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ senderType, content, direction, status }) });
    const d = await res.json() as { success: boolean; error?: string };
    if (!d.success) throw new Error(d.error);
  };

  const handleSend = async () => {
    const text = message.trim(); if (!text) return;
    setError(''); setSending(true);
    try {
      if (inputMode === 'client') await postMessage(text, 'client', 'inbound', 'sent');
      else await postMessage(text, 'sales', 'outbound', 'sent');
      setMessage(''); await fetch_();
    } catch (e: unknown) { setError(e instanceof Error ? e.message : 'Failed'); }
    finally { setSending(false); }
  };

  const generateAI = async () => {
    if (!conv?.clientId) { setError('Link a client to this conversation first'); return; }
    const lastClientMsg = [...(conv.messages || [])].reverse().find(m => m.senderType === 'client')?.content || '';
    if (!lastClientMsg) { setError('Add a client message first, then generate AI reply'); return; }
    setError(''); setAiLoading(true);
    try {
      const res = await fetch('/api/ai/generate-client-reply', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ clientMessage: lastClientMsg, clientId: conv.clientId._id, conversationId: id, projectId: conv.projectId?._id }) });
      const d = await res.json() as { success: boolean; data?: { suggestedReply: string; savedId: string }; error?: string };
      if (!d.success) throw new Error(d.error);
      if (d.data) { setAiDraft(d.data.suggestedReply); setAiReplyId(d.data.savedId); }
    } catch (e: unknown) { setError(e instanceof Error ? e.message : 'AI generation failed. Check Groq API key.'); }
    finally { setAiLoading(false); }
  };

  const approveAndSend = async () => {
    if (!aiDraft) return; setError('');
    try {
      if (aiReplyId) await fetch(`/api/ai-replies/${aiReplyId}/approve`, { method: 'POST', credentials: 'include' });
      await postMessage(aiDraft, 'ai', 'outbound', 'approved');
      setAiDraft(''); setAiReplyId(''); await fetch_();
    } catch (e: unknown) { setError(e instanceof Error ? e.message : 'Failed'); }
  };

  const bubbleStyle: Record<string, string> = { client: 'bg-gray-100 text-gray-900 rounded-2xl rounded-tl-sm', sales: 'bg-blue-600 text-white rounded-2xl rounded-tr-sm', ai: 'bg-purple-100 text-purple-900 border border-purple-200 rounded-2xl rounded-tr-sm', system: 'bg-yellow-50 text-yellow-800 text-xs italic rounded-lg' };
  const isOut = (s: string) => s === 'sales' || s === 'ai';

  if (loading) return <DashboardShell title="Conversation"><div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div></DashboardShell>;

  return (
    <DashboardShell title={conv?.clientId?.name || conv?.leadId?.name || 'Conversation'} subtitle={conv?.projectId?.name || conv?.channel || ''}>
      <div className="flex items-center gap-3 mb-4">
        <Link href="/conversations" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"><ChevronLeft className="w-4 h-4" /> Back</Link>
        {conv?.clientId && <Link href={`/clients/${conv.clientId._id}`} className="text-sm text-blue-600 hover:underline">View Client →</Link>}
        {conv?.projectId && <Link href={`/projects/${conv.projectId._id}`} className="text-sm text-blue-600 hover:underline">View Project →</Link>}
      </div>

      {error && <div className="flex items-center gap-2 mb-3 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700"><AlertCircle className="w-4 h-4 flex-shrink-0" />{error}<button onClick={() => setError('')} className="ml-auto text-red-400 hover:text-red-600">✕</button></div>}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4" style={{ height: 'calc(100vh - 240px)' }}>
        <div className="lg:col-span-3 flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
            {conv?.messages.length === 0 && <div className="flex flex-col items-center justify-center h-full text-center py-12"><MessageSquarePlaceholder /><p className="text-gray-400 text-sm font-medium mt-3">No messages yet</p><p className="text-gray-300 text-xs mt-1">Select "Client message" and type to start</p></div>}
            {conv?.messages.map(msg => (
              <div key={msg._id} className={`flex ${isOut(msg.senderType) ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] ${bubbleStyle[msg.senderType] || 'bg-gray-100 rounded-2xl'} px-4 py-3`}>
                  <p className={`text-xs font-medium mb-1 ${isOut(msg.senderType) ? 'text-blue-200' : 'text-gray-500'}`}>
                    {msg.senderType === 'ai' ? '🤖 AI Draft' : msg.senderType === 'client' ? (conv.clientId?.name || 'Client') : (msg.createdBy?.name || user?.name)}
                    {msg.status === 'approved' && <span className="ml-1 text-green-400">✓</span>}
                    {msg.status === 'draft' && <span className="ml-1 text-yellow-400">• draft</span>}
                  </p>
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                  <p className={`text-xs mt-1 ${isOut(msg.senderType) ? 'text-blue-200' : 'text-gray-400'}`}>{formatRelativeTime(msg.createdAt)}</p>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* AI Draft */}
          {aiDraft && (
            <div className="mx-3 mb-3 p-4 bg-purple-50 border border-purple-200 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-purple-700 flex items-center gap-1.5"><Bot className="w-4 h-4" /> AI Reply Draft <span className="text-xs font-normal text-purple-400">— based on actual project progress</span></span>
                <button onClick={() => { setAiDraft(''); setAiReplyId(''); }} className="text-gray-400 hover:text-gray-600">✕</button>
              </div>
              <textarea value={aiDraft} onChange={e => setAiDraft(e.target.value)} rows={5} className="w-full px-3 py-2.5 bg-white border border-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" />
              <div className="flex gap-2 mt-2">
                <button onClick={approveAndSend} className="flex items-center gap-2 bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700"><CheckCircle className="w-4 h-4" /> Approve &amp; Add to Chat</button>
                <button onClick={async () => { await postMessage(aiDraft, 'ai', 'outbound', 'draft'); setAiDraft(''); setAiReplyId(''); await fetch_(); }} className="flex items-center gap-2 border border-gray-300 text-gray-600 text-sm px-4 py-2 rounded-lg hover:bg-gray-50">Save as Draft</button>
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-100 p-3 bg-gray-50">
            <div className="flex gap-1 mb-2 bg-white border border-gray-200 rounded-lg p-1 w-fit">
              <button onClick={() => setInputMode('client')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${inputMode === 'client' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-700'}`}><User className="w-3 h-3" /> Client message</button>
              <button onClick={() => setInputMode('sales')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${inputMode === 'sales' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-700'}`}><Send className="w-3 h-3" /> My reply</button>
            </div>
            <p className="text-xs text-gray-400 mb-1.5">{inputMode === 'client' ? "👤 Paste client's message — this is used for AI analysis" : '💬 Type your own reply'}</p>
            <div className="flex gap-2">
              <textarea value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }} rows={2} placeholder={inputMode === 'client' ? "Paste client's message..." : 'Type your reply...'} className={`flex-1 px-3 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 resize-none transition-colors ${inputMode === 'client' ? 'border-gray-300 focus:ring-gray-400' : 'border-blue-300 focus:ring-blue-500'}`} />
              <button onClick={handleSend} disabled={sending || !message.trim()} className={`w-10 flex-shrink-0 rounded-xl flex items-center justify-center disabled:opacity-40 transition-colors ${inputMode === 'client' ? 'bg-gray-700 hover:bg-gray-800 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : inputMode === 'client' ? <User className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-200">
              <button onClick={generateAI} disabled={aiLoading} className="flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700 disabled:opacity-50">
                {aiLoading ? <><Loader2 className="w-4 h-4 animate-spin" /> Generating...</> : <><Bot className="w-4 h-4" /> Generate AI Client Reply</>}
              </button>
              <p className="text-xs text-gray-400 mt-0.5">AI uses real project progress data — no invented information</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-sm font-semibold text-gray-900 mb-3">Context</p>
            {conv?.clientId && <div className="space-y-1.5 mb-3">{[['Client', conv.clientId.name], ['Status', conv.clientId.status], ['Type', conv.clientId.businessType || '—']].map(([k,v]) => <div key={k} className="flex justify-between"><span className="text-xs text-gray-500">{k}</span><span className="text-xs font-medium text-gray-900">{v}</span></div>)}</div>}
            {conv?.projectId && <div className="bg-blue-50 rounded-lg p-3 mb-3"><p className="text-xs font-medium text-blue-700">{conv.projectId.name}</p><p className="text-xs text-blue-500">{conv.projectId.status.replace('_',' ')} · {conv.projectId.progressPercentage}%</p></div>}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-xs font-semibold text-amber-800 mb-1.5">How to use</p>
              <ol className="text-xs text-amber-700 space-y-1 list-decimal list-inside">
                <li>Select <strong>Client message</strong></li>
                <li>Paste client text &amp; send</li>
                <li>Click <strong>Generate AI Reply</strong></li>
                <li>Edit draft if needed</li>
                <li>Click <strong>Approve &amp; Add</strong></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

function MessageSquarePlaceholder() {
  return <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center"><Bot className="w-6 h-6 text-gray-300" /></div>;
}
