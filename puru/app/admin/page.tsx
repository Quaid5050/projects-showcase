'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { MessageSquare, Users, TrendingUp, Clock, Phone, Mail, ArrowRight } from 'lucide-react';
import AdminShell from '@/components/admin/AdminShell';
import Link from 'next/link';

interface Stats {
  totalInquiries: number;
  newInquiries: number;
  reviewedInquiries: number;
  contactedInquiries: number;
  closedInquiries: number;
  totalLeads: number;
  last7Days: number;
  recentInquiries: Array<{
    _id: string;
    fullName: string;
    companyName: string;
    email: string;
    inquiryCategory: string;
    status: string;
    createdAt: string;
  }>;
}

const statusColors: Record<string, string> = {
  new: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  reviewed: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  contacted: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  closed: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
};

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then(r => r.json())
      .then(d => { if (d.success) setStats(d.data); })
      .finally(() => setLoading(false));
  }, []);

  const username = session?.user?.name || 'admin';

  return (
    <AdminShell title="Dashboard" username={username}>
      {/* Welcome */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white font-sora">Welcome back, {username} 👋</h2>
        <p className="text-gray-400 mt-1">Here&apos;s what&apos;s happening with YUVAAN INTERNATIONAL today.</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[1,2,3,4].map(i => <div key={i} className="h-32 bg-gray-800 rounded-2xl animate-pulse" />)}
        </div>
      ) : (
        <>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <StatCard icon={MessageSquare} label="Total Inquiries" value={stats?.totalInquiries || 0} sub={`${stats?.last7Days || 0} this week`} color="teal" />
            <StatCard icon={Clock} label="New Inquiries" value={stats?.newInquiries || 0} sub="Awaiting review" color="blue" urgent={stats?.newInquiries ? stats.newInquiries > 0 : false} />
            <StatCard icon={TrendingUp} label="Contacted" value={stats?.contactedInquiries || 0} sub="In progress" color="green" />
            <StatCard icon={Users} label="Leads" value={stats?.totalLeads || 0} sub="Newsletter signups" color="purple" />
          </div>

          {/* Status breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Status cards */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Inquiry Status</h3>
              <div className="space-y-3">
                {[
                  { label: 'New', value: stats?.newInquiries || 0, color: 'bg-blue-500' },
                  { label: 'Reviewed', value: stats?.reviewedInquiries || 0, color: 'bg-yellow-500' },
                  { label: 'Contacted', value: stats?.contactedInquiries || 0, color: 'bg-teal-500' },
                  { label: 'Closed', value: stats?.closedInquiries || 0, color: 'bg-gray-500' },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${s.color}`} />
                    <span className="text-gray-400 text-sm flex-1">{s.label}</span>
                    <span className="text-white font-semibold text-sm">{s.value}</span>
                    <div className="w-20 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${s.color}`}
                        style={{ width: `${stats?.totalInquiries ? (s.value / stats.totalInquiries) * 100 : 0}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {[
                  { href: '/admin/inquiries?status=new', label: 'Review New Inquiries', color: 'text-blue-400' },
                  { href: '/admin/content', label: 'Edit Site Content', color: 'text-teal-400' },
                  { href: '/admin/leads', label: 'View All Leads', color: 'text-purple-400' },
                  { href: '/admin/pages', label: 'Manage Pages', color: 'text-green-400' },
                  { href: '/', label: 'View Live Site ↗', color: 'text-gray-400' },
                ].map(a => (
                  <Link
                    key={a.href}
                    href={a.href}
                    target={a.label.includes('↗') ? '_blank' : undefined}
                    className={`flex items-center justify-between p-3 rounded-xl hover:bg-gray-800 transition-colors group ${a.color}`}
                  >
                    <span className="text-sm font-medium">{a.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl">
                  <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs">Phone</p>
                    <p className="text-white text-sm">(778) 828-3610</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl">
                  <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <p className="text-white text-sm break-all">pacifictrade2010@gmail.com</p>
                  </div>
                </div>
                <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl">
                  <p className="text-teal-400 text-xs font-medium">Admin Panel v1.0</p>
                  <p className="text-gray-500 text-xs mt-0.5">YUVAAN INTERNATIONAL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Inquiries */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <h3 className="font-semibold text-white">Recent Inquiries</h3>
              <Link href="/admin/inquiries" className="text-teal-400 text-sm hover:underline flex items-center gap-1">
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left px-6 py-3 text-gray-500 text-xs font-medium uppercase tracking-wider">Name</th>
                    <th className="text-left px-6 py-3 text-gray-500 text-xs font-medium uppercase tracking-wider hidden md:table-cell">Company</th>
                    <th className="text-left px-6 py-3 text-gray-500 text-xs font-medium uppercase tracking-wider hidden lg:table-cell">Category</th>
                    <th className="text-left px-6 py-3 text-gray-500 text-xs font-medium uppercase tracking-wider">Status</th>
                    <th className="text-left px-6 py-3 text-gray-500 text-xs font-medium uppercase tracking-wider hidden lg:table-cell">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats?.recentInquiries?.map((inq) => (
                    <tr key={inq._id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-white text-sm font-medium">{inq.fullName}</p>
                        <p className="text-gray-500 text-xs">{inq.email}</p>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <p className="text-gray-300 text-sm">{inq.companyName}</p>
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <p className="text-gray-400 text-sm">{inq.inquiryCategory}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[inq.status] || statusColors.new}`}>
                          {inq.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <p className="text-gray-500 text-xs">{new Date(inq.createdAt).toLocaleDateString()}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </AdminShell>
  );
}

function StatCard({ icon: Icon, label, value, sub, color, urgent }: {
  icon: React.ComponentType<{ className?: string }>; label: string; value: number;
  sub: string; color: string; urgent?: boolean;
}) {
  const colors: Record<string, string> = {
    teal: 'from-teal-600 to-cyan-500',
    blue: 'from-blue-600 to-blue-400',
    green: 'from-green-600 to-emerald-400',
    purple: 'from-purple-600 to-violet-400',
  };

  return (
    <div className={`bg-gray-900 border rounded-2xl p-6 ${urgent ? 'border-blue-500/30' : 'border-gray-800'}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors[color]} flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        {urgent && (
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
        )}
      </div>
      <p className="text-3xl font-bold text-white mb-1">{value.toLocaleString()}</p>
      <p className="text-white text-sm font-medium mb-0.5">{label}</p>
      <p className="text-gray-500 text-xs">{sub}</p>
    </div>
  );
}
