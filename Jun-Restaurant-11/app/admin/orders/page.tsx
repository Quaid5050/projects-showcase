'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';
import OrderDetailsModal from '@/components/OrderDetailsModal';
import OrderAlertToggle from '@/components/OrderAlertToggle';
import { IOrder } from '@/types';
import { SearchIcon } from '@/components/Icons';
import toast from 'react-hot-toast';

// Polling interval in ms
const POLL_INTERVAL = 12000;

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-900/30 text-blue-300 border-blue-700/30',
  pending: 'bg-yellow-900/30 text-yellow-300 border-yellow-700/30',
  paid: 'bg-green-900/30 text-green-300 border-green-700/30',
  completed: 'bg-gray-700/30 text-gray-300 border-gray-600/30',
  cancelled: 'bg-red-900/30 text-red-300 border-red-700/30',
};

const ORDER_STATUSES = ['new', 'pending', 'paid', 'completed', 'cancelled'];

export default function AdminOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterPayment, setFilterPayment] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
  const [newOrderIds, setNewOrderIds] = useState<Set<string>>(new Set());
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [showAutoplayMsg, setShowAutoplayMsg] = useState(false);

  // Ref for last seen paid order ID (persisted in localStorage)
  const lastSeenPaidIdRef = useRef<string>('');
  // Ref to track if this is the initial load (don't alert on first load)
  const isInitialLoad = useRef(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ---- Audio setup ----
  // Place your sound file at: public/sounds/new-order.mp3
  // The code below will fail gracefully if the file doesn't exist yet
  useEffect(() => {
    const audio = new Audio('/sounds/new-order.mp3');
    audio.preload = 'auto';
    audioRef.current = audio;
  }, []);

  const playNotificationSound = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => setShowAutoplayMsg(false))
      .catch((err) => {
        console.warn('Audio autoplay blocked:', err);
        setShowAutoplayMsg(true);
      });
  }, []);

  // Allow sound after first user click on the page
  useEffect(() => {
    const handleInteraction = () => {
      setUserInteracted(true);
      setShowAutoplayMsg(false);
    };
    document.addEventListener('click', handleInteraction, { once: true });
    return () => document.removeEventListener('click', handleInteraction);
  }, []);

  // Restore last seen paid order ID from localStorage
  useEffect(() => {
    lastSeenPaidIdRef.current = localStorage.getItem('bp_last_paid_order_id') || '';
  }, []);

  // ---- Fetch orders ----
  const fetchOrders = useCallback(
    async (silent = false) => {
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      if (filterStatus) params.set('orderStatus', filterStatus);
      if (filterPayment) params.set('paymentStatus', filterPayment);

      const res = await fetch(`/api/admin/orders?${params.toString()}`);
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      if (!res.ok) return;

      const data = await res.json();
      const fetched: IOrder[] = data.orders || [];
      if (!silent) setLoading(false);
      setOrders(fetched);

      // Check for new paid orders (polling logic)
      if (!isInitialLoad.current) {
        const latestPaid = fetched.find((o) => o.paymentStatus === 'paid');
        if (
          latestPaid &&
          latestPaid._id !== lastSeenPaidIdRef.current &&
          alertsEnabled
        ) {
          // New paid order detected
          setNewOrderIds((prev) => new Set([...prev, latestPaid._id]));
          lastSeenPaidIdRef.current = latestPaid._id;
          localStorage.setItem('bp_last_paid_order_id', latestPaid._id);

          toast.success(`New paid order #${latestPaid.orderNumber}`, {
            duration: 5000,
            icon: '🔔',
            style: {
              background: '#0d0500',
              color: '#FFD700',
              border: '1px solid #8B0000',
            },
          });

          if (userInteracted) {
            playNotificationSound();
          } else {
            setShowAutoplayMsg(true);
          }

          // Remove highlight after 8s
          setTimeout(() => {
            setNewOrderIds((prev) => {
              const next = new Set(prev);
              next.delete(latestPaid._id);
              return next;
            });
          }, 8000);
        }
      } else {
        // On initial load — record the most recent paid order without alerting
        const latestPaid = fetched.find((o) => o.paymentStatus === 'paid');
        if (latestPaid) {
          lastSeenPaidIdRef.current = latestPaid._id;
          localStorage.setItem('bp_last_paid_order_id', latestPaid._id);
        }
        isInitialLoad.current = false;
        setLoading(false);
      }
    },
    [search, filterStatus, filterPayment, alertsEnabled, userInteracted, playNotificationSound, router]
  );

  // Initial fetch
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  // Polling for new orders
  useEffect(() => {
    const interval = setInterval(() => fetchOrders(true), POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchOrders]);

  // Update order status
  const handleStatusUpdate = async (orderId: string, newStatus: string) => {
    const res = await fetch(`/api/admin/orders/${orderId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderStatus: newStatus }),
    });
    if (res.ok) {
      setOrders((prev) =>
        prev.map((o) => (o._id === orderId ? { ...o, orderStatus: newStatus as IOrder['orderStatus'] } : o))
      );
      toast.success('Status updated');
    } else {
      toast.error('Failed to update status');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#111]">
      <AdminSidebar />

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Page header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-white">Orders</h1>
            <p className="text-gray-500 text-sm mt-0.5">{orders.length} orders loaded</p>
          </div>
          {/* Alert toggle */}
          <OrderAlertToggle onChange={setAlertsEnabled} />
        </div>

        {/* Autoplay blocked notice */}
        {showAutoplayMsg && (
          <div className="mb-4 bg-yellow-900/30 border border-yellow-700/30 rounded-xl px-4 py-3 text-yellow-300 text-sm flex items-center gap-2">
            🔔 Click anywhere on the page to enable order notification sounds.
          </div>
        )}

        {/* Filters */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 mb-5 flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name, email, order #..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#0d0500] border border-gray-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000] placeholder-gray-600"
            />
          </div>

          {/* Status filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 bg-[#0d0500] border border-gray-700 text-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#8B0000]"
          >
            <option value="">All Statuses</option>
            {ORDER_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>

          {/* Payment filter */}
          <select
            value={filterPayment}
            onChange={(e) => setFilterPayment(e.target.value)}
            className="px-3 py-2 bg-[#0d0500] border border-gray-700 text-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#8B0000]"
          >
            <option value="">All Payments</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden">
          {loading ? (
            <div className="py-16 text-center">
              <div className="w-8 h-8 border-4 border-[#8B0000] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-gray-500 text-sm">Loading orders...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="py-16 text-center">
              <span className="text-5xl block mb-3">📋</span>
              <p className="text-gray-400">No orders found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800 bg-[#0d0500]">
                    <th className="text-left p-3 text-gray-500 text-xs font-medium">Order ID</th>
                    <th className="text-left p-3 text-gray-500 text-xs font-medium">Customer</th>
                    <th className="text-left p-3 text-gray-500 text-xs font-medium hidden md:table-cell">Email</th>
                    <th className="text-left p-3 text-gray-500 text-xs font-medium hidden lg:table-cell">Phone</th>
                    <th className="text-right p-3 text-gray-500 text-xs font-medium">Total</th>
                    <th className="text-center p-3 text-gray-500 text-xs font-medium">Payment</th>
                    <th className="text-center p-3 text-gray-500 text-xs font-medium">Status</th>
                    <th className="text-center p-3 text-gray-500 text-xs font-medium">Update</th>
                    <th className="text-center p-3 text-gray-500 text-xs font-medium">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {orders.map((order) => {
                    const isNew = newOrderIds.has(order._id);
                    return (
                      <tr
                        key={order._id}
                        className={`hover:bg-white/5 transition-all duration-500 ${
                          isNew ? 'bg-[#FFD700]/5 animate-pulse' : ''
                        }`}
                      >
                        <td className="p-3">
                          <p className="text-[#FFD700] font-medium text-xs">#{order.orderNumber}</p>
                          <p className="text-gray-600 text-xs">
                            {new Date(order.createdAt).toLocaleDateString('en-CA')}
                          </p>
                          {isNew && (
                            <span className="text-xs bg-[#FFD700] text-[#1a0a00] px-1.5 py-0.5 rounded-full font-bold">NEW</span>
                          )}
                        </td>
                        <td className="p-3 text-gray-200 text-xs">{order.customerName}</td>
                        <td className="p-3 text-gray-400 text-xs hidden md:table-cell">{order.customerEmail}</td>
                        <td className="p-3 text-gray-400 text-xs hidden lg:table-cell">{order.customerPhone}</td>
                        <td className="p-3 text-right text-white font-medium text-xs">${order.total.toFixed(2)}</td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            order.paymentStatus === 'paid'
                              ? 'bg-green-900/40 text-green-300'
                              : 'bg-red-900/40 text-red-300'
                          }`}>
                            {order.paymentStatus}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${STATUS_COLORS[order.orderStatus]}`}>
                            {order.orderStatus}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <select
                            value={order.orderStatus}
                            onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                            className="bg-[#0d0500] border border-gray-700 text-gray-300 text-xs rounded-lg px-2 py-1 focus:outline-none focus:border-[#8B0000]"
                          >
                            {ORDER_STATUSES.map((s) => (
                              <option key={s} value={s}>
                                {s.charAt(0).toUpperCase() + s.slice(1)}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="text-xs bg-[#8B0000]/20 hover:bg-[#8B0000]/40 text-[#FFD700] border border-[#8B0000]/30 px-2.5 py-1 rounded-lg transition-colors"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Sound file note (for developer reference) */}
        {/* 
          📢 NOTIFICATION SOUND SETUP:
          Place your notification sound file at:
            public/sounds/new-order.mp3
          
          The sound will automatically play when a new paid order arrives.
          Supported formats: .mp3, .wav, .ogg
        */}
      </main>

      {/* Order Details Modal */}
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
}
