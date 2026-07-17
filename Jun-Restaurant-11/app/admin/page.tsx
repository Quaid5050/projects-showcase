'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AdminSidebar from '@/components/AdminSidebar';
import AdminStatsCards from '@/components/AdminStatsCards';
import { IOrder } from '@/types';

interface Stats {
  totalOrders: number;
  paidOrders: number;
  pendingOrders: number;
  completedOrders: number;
  cancelledOrders: number;
  revenue: number;
  recentOrders: IOrder[];
  popularItems: { _id: string; count: number; revenue: number }[];
}

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-900/30 text-blue-300',
  pending: 'bg-yellow-900/30 text-yellow-300',
  paid: 'bg-green-900/30 text-green-300',
  completed: 'bg-gray-700/30 text-gray-300',
  cancelled: 'bg-red-900/30 text-red-300',
};

export default function AdminOverviewPage() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const res = await fetch('/api/admin/stats');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
      setLoading(false);
    }
    fetchStats();
  }, [router]);

  return (
    <div className="flex min-h-screen bg-[#111]">
      <AdminSidebar />

      <main className="flex-1 p-6 overflow-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-gray-500 text-sm mt-1">Burnaby Palace Restaurant</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-[#8B0000] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : stats ? (
          <div className="space-y-6">
            {/* Stats Cards */}
            <AdminStatsCards
              totalOrders={stats.totalOrders}
              revenue={stats.revenue}
              pendingOrders={stats.pendingOrders}
              completedOrders={stats.completedOrders}
            />

            {/* Popular Items + Recent Orders */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Popular Items */}
              {stats.popularItems.length > 0 && (
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5">
                  <h2 className="text-white font-semibold mb-4">Popular Items</h2>
                  <ul className="space-y-3">
                    {stats.popularItems.map((item, idx) => (
                      <li key={item._id} className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-[#8B0000]/30 text-[#FFD700] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {idx + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-200 text-sm truncate">{item._id}</p>
                          <p className="text-gray-500 text-xs">{item.count} sold</p>
                        </div>
                        <span className="text-[#FFD700] text-xs font-medium">${item.revenue.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recent Orders */}
              <div className={`bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden ${stats.popularItems.length > 0 ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                <div className="flex items-center justify-between p-5 border-b border-gray-800">
                  <h2 className="text-white font-semibold">Recent Orders</h2>
                  <Link
                    href="/admin/orders"
                    className="text-[#FFD700] text-xs hover:underline"
                  >
                    View all →
                  </Link>
                </div>
                {stats.recentOrders.length === 0 ? (
                  <div className="py-10 text-center text-gray-500 text-sm">No orders yet</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left p-3 text-gray-500 text-xs font-medium">Order</th>
                          <th className="text-left p-3 text-gray-500 text-xs font-medium">Customer</th>
                          <th className="text-right p-3 text-gray-500 text-xs font-medium">Total</th>
                          <th className="text-center p-3 text-gray-500 text-xs font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {stats.recentOrders.map((order) => (
                          <tr key={order._id} className="hover:bg-white/5 transition-colors">
                            <td className="p-3">
                              <Link
                                href="/admin/orders"
                                className="text-[#FFD700] hover:underline text-xs font-medium"
                              >
                                #{order.orderNumber}
                              </Link>
                              <p className="text-gray-600 text-xs">
                                {new Date(order.createdAt).toLocaleDateString('en-CA')}
                              </p>
                            </td>
                            <td className="p-3 text-gray-300 text-xs">{order.customerName}</td>
                            <td className="p-3 text-right text-white text-xs font-medium">
                              ${order.total.toFixed(2)}
                            </td>
                            <td className="p-3 text-center">
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_COLORS[order.orderStatus]}`}>
                                {order.orderStatus}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">Failed to load stats.</div>
        )}
      </main>
    </div>
  );
}
