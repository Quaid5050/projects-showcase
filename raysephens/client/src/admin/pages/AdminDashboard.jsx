import { useState, useEffect } from "react";
import api from "../../utils/api";

const StatCard = ({ label, value, sub, color = "amber" }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <div className={`text-3xl font-bold font-serif text-${color}-800 mb-1`}>{value}</div>
    <div className="font-semibold text-gray-700">{label}</div>
    {sub && <div className="text-sm text-gray-500 mt-1">{sub}</div>}
  </div>
);

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/stats").then(r => setData(r.data)).catch(() => {}).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex justify-center py-20"><div className="w-10 h-10 border-4 border-amber-800 border-t-transparent rounded-full animate-spin" /></div>;

  const { stats = {}, recentContacts = [], recentBookings = [] } = data || {};

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard label="Total Contacts" value={stats.totalContacts || 0} />
        <StatCard label="New Inquiries" value={stats.newContacts || 0} sub="Unread" color="green" />
        <StatCard label="Total Bookings" value={stats.totalBookings || 0} />
        <StatCard label="Pending Bookings" value={stats.pendingBookings || 0} sub="Need confirmation" color="green" />
        <StatCard label="Active Services" value={stats.totalServices || 0} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Recent Contact Inquiries</h3>
            <a href="/admin/contacts" className="text-amber-700 text-sm hover:underline">View all</a>
          </div>
          <div className="divide-y divide-gray-50">
            {recentContacts.length === 0 ? (
              <div className="px-6 py-8 text-center text-gray-400 text-sm">No inquiries yet</div>
            ) : recentContacts.map(c => (
              <div key={c._id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{c.name}</div>
                    <div className="text-gray-500 text-xs">{c.email} • {c.service || "General"}</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${c.status === "new" ? "bg-green-100 text-green-700" : c.status === "in-progress" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-600"}`}>{c.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Recent Bookings</h3>
            <a href="/admin/bookings" className="text-amber-700 text-sm hover:underline">View all</a>
          </div>
          <div className="divide-y divide-gray-50">
            {recentBookings.length === 0 ? (
              <div className="px-6 py-8 text-center text-gray-400 text-sm">No bookings yet</div>
            ) : recentBookings.map(b => (
              <div key={b._id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{b.name}</div>
                    <div className="text-gray-500 text-xs">{b.service} • {b.preferredDate || "Flexible"}</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${b.status === "pending" ? "bg-amber-100 text-amber-700" : b.status === "confirmed" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>{b.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
