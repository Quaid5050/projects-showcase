'use client';
import { useEffect, useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { Search, Trash2, Eye, ChevronLeft, ChevronRight, RefreshCw, Filter } from 'lucide-react';
import AdminShell from '@/components/admin/AdminShell';

interface Inquiry {
  _id: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  businessType: string;
  inquiryCategory: string;
  productOrServiceNeeded: string;
  message: string;
  status: string;
  source: string;
  createdAt: string;
}

const statusColors: Record<string, string> = {
  new: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  reviewed: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  contacted: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  closed: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
};

export default function InquiriesPage() {
  const { data: session } = useSession();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), status: statusFilter, search });
    const res = await fetch(`/api/admin/inquiries?${params}`);
    const data = await res.json();
    if (data.success) {
      setInquiries(data.data);
      setTotal(data.total);
      setPages(data.pages);
    }
    setLoading(false);
  }, [page, statusFilter, search]);

  useEffect(() => { fetchInquiries(); }, [fetchInquiries]);

  const updateStatus = async (id: string, status: string) => {
    await fetch('/api/admin/inquiries', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    fetchInquiries();
    if (selectedInquiry?._id === id) setSelectedInquiry(prev => prev ? { ...prev, status } : null);
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm('Delete this inquiry? This cannot be undone.')) return;
    await fetch('/api/admin/inquiries', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchInquiries();
    if (selectedInquiry?._id === id) setSelectedInquiry(null);
  };

  return (
    <AdminShell title="Inquiries" username={session?.user?.name || 'admin'}>
      <div className="flex flex-col lg:flex-row gap-6 h-full">
        {/* List panel */}
        <div className="flex-1 min-w-0">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search by name, email, company..."
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={statusFilter}
                onChange={e => { setStatusFilter(e.target.value); setPage(1); }}
                className="bg-gray-900 border border-gray-700 rounded-xl text-white text-sm px-3 py-2.5 focus:outline-none focus:border-teal-500 [&>option]:bg-gray-900"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="reviewed">Reviewed</option>
                <option value="contacted">Contacted</option>
                <option value="closed">Closed</option>
              </select>
              <button onClick={fetchInquiries} className="p-2.5 bg-gray-900 border border-gray-700 rounded-xl text-gray-400 hover:text-white transition-colors">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-gray-500 text-sm mb-3">{total} inquiries found</div>

          {/* Table */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-gray-500">Loading...</div>
            ) : inquiries.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-gray-400 text-lg">No inquiries found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left px-4 py-3 text-gray-500 text-xs font-medium uppercase tracking-wider">Contact</th>
                      <th className="text-left px-4 py-3 text-gray-500 text-xs font-medium uppercase tracking-wider hidden md:table-cell">Category</th>
                      <th className="text-left px-4 py-3 text-gray-500 text-xs font-medium uppercase tracking-wider">Status</th>
                      <th className="text-left px-4 py-3 text-gray-500 text-xs font-medium uppercase tracking-wider hidden lg:table-cell">Date</th>
                      <th className="px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries.map(inq => (
                      <tr
                        key={inq._id}
                        className={`border-b border-gray-800/50 hover:bg-gray-800/40 transition-colors cursor-pointer ${selectedInquiry?._id === inq._id ? 'bg-gray-800/60' : ''}`}
                        onClick={() => setSelectedInquiry(inq)}
                      >
                        <td className="px-4 py-4">
                          <p className="text-white text-sm font-medium">{inq.fullName}</p>
                          <p className="text-gray-500 text-xs">{inq.companyName}</p>
                          <p className="text-gray-600 text-xs">{inq.email}</p>
                        </td>
                        <td className="px-4 py-4 hidden md:table-cell">
                          <p className="text-gray-300 text-sm">{inq.inquiryCategory}</p>
                          <p className="text-gray-500 text-xs">{inq.businessType}</p>
                        </td>
                        <td className="px-4 py-4">
                          <select
                            value={inq.status}
                            onChange={e => { e.stopPropagation(); updateStatus(inq._id, e.target.value); }}
                            onClick={e => e.stopPropagation()}
                            className={`text-xs font-medium border rounded-full px-2.5 py-1 cursor-pointer focus:outline-none ${statusColors[inq.status]} [&>option]:bg-gray-900 [&>option]:text-white`}
                          >
                            <option value="new">New</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="contacted">Contacted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                        <td className="px-4 py-4 hidden lg:table-cell">
                          <p className="text-gray-500 text-xs">{new Date(inq.createdAt).toLocaleDateString()}</p>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={e => { e.stopPropagation(); setSelectedInquiry(inq); }}
                              className="p-1.5 text-gray-400 hover:text-teal-400 hover:bg-teal-500/10 rounded-lg transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={e => { e.stopPropagation(); deleteInquiry(inq._id); }}
                              className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Pagination */}
          {pages > 1 && (
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-500 text-sm">Page {page} of {pages}</p>
              <div className="flex items-center gap-2">
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                  className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white disabled:opacity-40 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={() => setPage(p => Math.min(pages, p + 1))} disabled={page === pages}
                  className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white disabled:opacity-40 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Detail panel */}
        {selectedInquiry && (
          <div className="w-full lg:w-96 bg-gray-900 border border-gray-800 rounded-2xl overflow-y-auto max-h-screen">
            <div className="sticky top-0 bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
              <h3 className="font-semibold text-white">Inquiry Details</h3>
              <button onClick={() => setSelectedInquiry(null)} className="text-gray-400 hover:text-white text-xl leading-none">×</button>
            </div>
            <div className="p-6 space-y-4">
              <DetailRow label="Name" value={selectedInquiry.fullName} />
              <DetailRow label="Company" value={selectedInquiry.companyName} />
              <DetailRow label="Email" value={selectedInquiry.email} link={`mailto:${selectedInquiry.email}`} />
              <DetailRow label="Phone" value={selectedInquiry.phone} link={`tel:${selectedInquiry.phone}`} />
              <DetailRow label="Country" value={selectedInquiry.country} />
              <DetailRow label="Business Type" value={selectedInquiry.businessType} />
              <DetailRow label="Inquiry Category" value={selectedInquiry.inquiryCategory} />
              <DetailRow label="Product / Service" value={selectedInquiry.productOrServiceNeeded} />
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Message</p>
                <p className="text-gray-200 text-sm leading-relaxed bg-gray-800 rounded-xl p-3">{selectedInquiry.message}</p>
              </div>
              <DetailRow label="Source" value={selectedInquiry.source} />
              <DetailRow label="Date" value={new Date(selectedInquiry.createdAt).toLocaleString()} />

              <div className="pt-3">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Update Status</p>
                <div className="grid grid-cols-2 gap-2">
                  {['new', 'reviewed', 'contacted', 'closed'].map(s => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selectedInquiry._id, s)}
                      className={`py-2 rounded-xl text-xs font-medium border transition-all capitalize ${
                        selectedInquiry.status === s
                          ? statusColors[s]
                          : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => deleteInquiry(selectedInquiry._id)}
                className="w-full py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors mt-2"
              >
                Delete Inquiry
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminShell>
  );
}

function DetailRow({ label, value, link }: { label: string; value: string; link?: string }) {
  return (
    <div>
      <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{label}</p>
      {link ? (
        <a href={link} className="text-teal-400 text-sm hover:underline">{value}</a>
      ) : (
        <p className="text-gray-200 text-sm">{value}</p>
      )}
    </div>
  );
}
