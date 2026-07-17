'use client';
import { useState, useEffect, useCallback, use } from 'react';
import Link from 'next/link';
import DashboardShell from '@/components/layout/DashboardShell';
import { Card, CardContent } from '@/components/ui/card';
import { getStatusColor, getPriorityColor } from '@/lib/utils';
import { ChevronLeft, Bot, Loader2, ArrowRight } from 'lucide-react';

interface Lead { _id: string; name: string; email?: string; phone?: string; companyName?: string; businessType?: string; serviceInterest?: string; budget?: string; timeline?: string; location?: string; message: string; stage: string; priority: string; aiSummary?: string; qualificationScore?: number; tags: string[]; convertedClientId?: string; assignedTo?: { name: string } | null; }

export default function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiReply, setAiReply] = useState('');
  const [converting, setConverting] = useState(false);

  const fetch_ = useCallback(async () => {
    const res = await fetch(`/api/leads/${id}`, { credentials: 'include' });
    const d = await res.json() as { success: boolean; data: Lead };
    if (d.success) setLead(d.data);
    setLoading(false);
  }, [id]);

  useEffect(() => { fetch_(); }, [fetch_]);

  const generateReply = async () => {
    if (!lead) return;
    setAiLoading(true);
    try {
      const res = await fetch('/api/ai/generate-sales-reply', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: lead.message, leadId: id }) });
      const d = await res.json() as { success: boolean; data?: { suggestedReply: string; qualificationScore: number; serviceDetected: string } };
      if (d.success && d.data) {
        setAiReply(d.data.suggestedReply);
        await fetch(`/api/leads/${id}`, { method: 'PUT', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ qualificationScore: d.data.qualificationScore, serviceInterest: d.data.serviceDetected }) });
        fetch_();
      }
    } finally { setAiLoading(false); }
  };

  const convertToClient = async () => {
    if (!lead) return;
    setConverting(true);
    try {
      const res = await fetch(`/api/leads/${id}/convert-to-client`, { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ companyName: lead.companyName }) });
      const d = await res.json() as { success: boolean; data?: { client: { _id: string } } };
      if (d.success && d.data) { window.location.href = `/clients/${d.data.client._id}`; }
    } finally { setConverting(false); }
  };

  if (loading) return <DashboardShell title="Lead"><div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div></DashboardShell>;
  if (!lead) return <DashboardShell title="Lead"><div className="text-center py-20 text-gray-400">Lead not found</div></DashboardShell>;

  return (
    <DashboardShell title={lead.name} subtitle={lead.serviceInterest || 'Lead Detail'}>
      <div className="flex items-center justify-between mb-4">
        <Link href="/leads" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"><ChevronLeft className="w-4 h-4" /> Leads</Link>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(lead.stage)}`}>{lead.stage.replace('_',' ')}</span>
          {!lead.convertedClientId && <button onClick={convertToClient} disabled={converting} className="h-8 px-3 bg-green-600 text-white text-xs font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center gap-1">{converting ? <Loader2 className="w-3 h-3 animate-spin" /> : <ArrowRight className="w-3 h-3" />} Convert to Client</button>}
          {lead.convertedClientId && <Link href={`/clients/${lead.convertedClientId}`} className="h-8 px-3 bg-blue-100 text-blue-700 text-xs font-medium rounded-lg hover:bg-blue-200 flex items-center gap-1">View Client <ArrowRight className="w-3 h-3" /></Link>}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-4">
          <Card><CardContent className="pt-5 space-y-4">
            <div><p className="text-sm font-semibold text-gray-700 mb-2">Original Message</p><p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-4 leading-relaxed">{lead.message}</p></div>
            <div className="flex gap-2">
              <button onClick={generateReply} disabled={aiLoading} className="flex items-center gap-2 bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50">
                {aiLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Bot className="w-4 h-4" />} Generate AI Sales Reply
              </button>
            </div>
            {aiReply && (
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">AI Sales Reply Draft</p>
                <textarea rows={6} value={aiReply} onChange={e => setAiReply(e.target.value)} className="w-full px-3 py-2.5 bg-purple-50 border border-purple-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-400" />
                <p className="text-xs text-gray-400 mt-1">Review, edit, and approve before sending.</p>
              </div>
            )}
            {lead.aiSummary && <div><p className="text-sm font-semibold text-gray-700 mb-2">AI Summary</p><p className="text-sm text-gray-600 bg-blue-50 border border-blue-100 rounded-lg p-3">{lead.aiSummary}</p></div>}
          </CardContent></Card>
        </div>

        <div className="space-y-4">
          <Card><CardContent className="pt-5">
            <p className="text-sm font-semibold text-gray-900 mb-3">Lead Info</p>
            <div className="space-y-2.5">
              {[['Email', lead.email], ['Phone', lead.phone], ['Company', lead.companyName], ['Business Type', lead.businessType], ['Service', lead.serviceInterest], ['Budget', lead.budget], ['Timeline', lead.timeline], ['Location', lead.location], ['Assigned To', lead.assignedTo?.name]].map(([k,v]) => v ? (
                <div key={k} className="flex justify-between gap-2"><span className="text-xs text-gray-500">{k}</span><span className="text-xs font-medium text-gray-900 text-right">{v}</span></div>
              ) : null)}
              {lead.qualificationScore !== undefined && lead.qualificationScore !== null && (
                <div className="flex justify-between gap-2"><span className="text-xs text-gray-500">Score</span>
                  <div className="flex items-center gap-1"><span className="text-xs font-bold text-gray-900">{lead.qualificationScore}/100</span><div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-blue-600 rounded-full" style={{ width: `${lead.qualificationScore}%` }} /></div></div>
                </div>
              )}
            </div>
          </CardContent></Card>
        </div>
      </div>
    </DashboardShell>
  );
}
