'use client';
import { useEffect, useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { Search, Trash2, RefreshCw } from 'lucide-react';
import AdminShell from '@/components/admin/AdminShell';

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  businessType?: string;
  status: string;
  createdAt: string;
}

export default function LeadsPage() {
  const { data: session } = useSession();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ search });
    const res = await fetch(`/api/admin/leads?${params}`);
    const data = await res.json();
    if (data.success) { setLeads(data.data); setTotal(data.total); }
    setLoading(false);
  }, [search]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const deleteLead = async (id: string) => {
    if (!confirm('Delete this lead?')) return;
    await fetch('/api/admin/leads', {
      method: 'DELETE', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchLeads();
  };

  return (
    <AdminShell title="Leads" username={session?.user?.name || 'admin'}>
      <div className="flex items-center gap-3 mb-5">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input type="text" placeholder="Search leads..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-teal-500" />
        </div>
        <button onClick={fetchLeads} className="p-2.5 bg-gray-900 border border-gray-700 rounded-xl text-gray-400 hover:text-white transition-colors">
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
      <p className="text-gray-500 text-sm mb-3">{total} leads</p>
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading...</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                {['Name', 'Email', 'Company', 'Business Type', 'Date', ''].map(h => (
                  <th key={h} className="text-left px-5 py-3 text-gray-500 text-xs font-medium uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead._id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                  <td className="px-5 py-4"><p className="text-white text-sm font-medium">{lead.name}</p></td>
                  <td className="px-5 py-4"><a href={`mailto:${lead.email}`} className="text-teal-400 text-sm hover:underline">{lead.email}</a></td>
                  <td className="px-5 py-4"><p className="text-gray-400 text-sm">{lead.company || '—'}</p></td>
                  <td className="px-5 py-4"><p className="text-gray-400 text-sm">{lead.businessType || '—'}</p></td>
                  <td className="px-5 py-4"><p className="text-gray-500 text-xs">{new Date(lead.createdAt).toLocaleDateString()}</p></td>
                  <td className="px-5 py-4">
                    <button onClick={() => deleteLead(lead._id)} className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminShell>
  );
}
