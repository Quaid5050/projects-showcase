"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import AdminLayout from "@/components/AdminLayout";
import Link from "next/link";

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-gray-100 text-gray-600",
  paid: "bg-blue-100 text-blue-700",
  preparing: "bg-yellow-100 text-yellow-700",
  ready: "bg-green-100 text-green-700",
  completed: "bg-green-200 text-green-800",
  cancelled: "bg-red-100 text-red-600",
};

const PAY_COLORS: Record<string, string> = {
  unpaid: "bg-gray-100 text-gray-500",
  paid: "bg-green-100 text-green-700",
  failed: "bg-red-100 text-red-600",
  refunded: "bg-purple-100 text-purple-700",
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  const seenPaidIds = useRef<Set<string>>(new Set());
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isFirstLoad = useRef(true);

  const fetchOrders = useCallback(async () => {
    const params = search ? `?search=${encodeURIComponent(search)}` : "";
    const res = await fetch(`/api/admin/orders${params}`);
    const data = await res.json();
    if (!Array.isArray(data)) return;

    if (isFirstLoad.current) {
      data.filter((o: any) => o.paymentStatus === "paid").forEach((o: any) => seenPaidIds.current.add(o._id));
      isFirstLoad.current = false;
    } else if (alertsEnabled && !search) {
      const newPaid = data.filter((o: any) => o.paymentStatus === "paid" && !seenPaidIds.current.has(o._id));
      if (newPaid.length > 0) {
        newPaid.forEach((o: any) => seenPaidIds.current.add(o._id));
        audioRef.current?.play().catch(() => {});
      }
    }

    setOrders(data);
    setLoading(false);
  }, [search, alertsEnabled]);

  useEffect(() => { fetchOrders(); }, [fetchOrders]);

  useEffect(() => {
    if (!alertsEnabled || search) return;
    const interval = setInterval(fetchOrders, 30000);
    return () => clearInterval(interval);
  }, [alertsEnabled, search, fetchOrders]);

  const enableAlerts = () => {
    if (!audioRef.current) audioRef.current = new Audio("/sounds/order-notification.mp3");
    audioRef.current.play().then(() => { audioRef.current!.pause(); audioRef.current!.currentTime = 0; }).catch(() => {});
    setAlertsEnabled(true);
    localStorage.setItem("orderAlertsEnabled", "true");
  };

  useEffect(() => {
    if (localStorage.getItem("orderAlertsEnabled") === "true") {
      audioRef.current = new Audio("/sounds/order-notification.mp3");
      setAlertsEnabled(true);
    }
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/admin/orders/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchOrders();
  };

  return (
    <AdminLayout>
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-black text-[#1a1a1a]">Orders</h1>
        {!alertsEnabled ? (
          <button
            onClick={enableAlerts}
            className="bg-[#c8102e] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors self-start sm:self-auto"
          >
            🔔 Enable Order Alerts
          </button>
        ) : (
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold self-start sm:self-auto">
            🔔 Alerts On
          </span>
        )}
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by order #, name, or email..."
          className="w-full sm:max-w-md border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]"
        />
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-400">Loading orders...</div>
      ) : orders.length === 0 ? (
        <div className="text-center py-20 text-gray-400">No orders found</div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    {["Order #", "Customer", "Total", "Payment", "Status", "Stripe PI", "Actions"].map(h => (
                      <th key={h} className="text-left px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr key={order._id} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${i % 2 === 0 ? "" : "bg-gray-50/30"}`}>
                      <td className="px-4 py-3 font-mono font-bold text-[#c8102e] whitespace-nowrap">
                        <Link href={`/admin/orders/${order._id}`} className="hover:underline">{order.orderNumber}</Link>
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-gray-800">{order.customerName}</p>
                        <p className="text-gray-400 text-xs">{order.customerEmail}</p>
                      </td>
                      <td className="px-4 py-3 font-bold text-gray-800">${order.total?.toFixed(2)}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${PAY_COLORS[order.paymentStatus] || "bg-gray-100 text-gray-500"}`}>
                          {order.paymentStatus}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[order.orderStatus] || "bg-gray-100 text-gray-500"}`}>
                          {order.orderStatus}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-gray-400 max-w-[120px] truncate">
                        {order.stripePaymentIntentId || "—"}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <select
                            value={order.orderStatus}
                            onChange={e => updateStatus(order._id, e.target.value)}
                            className="border border-gray-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-[#c8102e]"
                          >
                            {["pending","paid","preparing","ready","completed","cancelled"].map(s => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          <Link href={`/admin/orders/${order._id}`} className="text-[#c8102e] hover:underline text-xs font-semibold whitespace-nowrap">
                            Details →
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {orders.map(order => (
              <div key={order._id} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <Link href={`/admin/orders/${order._id}`} className="font-mono font-bold text-[#c8102e] text-sm hover:underline">
                      {order.orderNumber}
                    </Link>
                    <p className="font-semibold text-gray-800 text-sm mt-0.5">{order.customerName}</p>
                    <p className="text-gray-400 text-xs">{order.customerEmail}</p>
                  </div>
                  <span className="font-black text-[#1a1a1a] text-base">${order.total?.toFixed(2)}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${PAY_COLORS[order.paymentStatus] || "bg-gray-100 text-gray-500"}`}>
                    {order.paymentStatus}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[order.orderStatus] || "bg-gray-100 text-gray-500"}`}>
                    {order.orderStatus}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={order.orderStatus}
                    onChange={e => updateStatus(order._id, e.target.value)}
                    className="flex-1 border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:border-[#c8102e]"
                  >
                    {["pending","paid","preparing","ready","completed","cancelled"].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <Link href={`/admin/orders/${order._id}`} className="bg-[#c8102e] text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap">
                    Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </AdminLayout>
  );
}
