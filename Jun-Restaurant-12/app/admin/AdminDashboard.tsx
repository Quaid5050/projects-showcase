"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import LogoImage from "@/components/LogoImage";
import { useRouter } from "next/navigation";

interface OrderItem {
  menuItemId: string;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  _id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  specialInstructions: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  paymentStatus: "pending" | "paid" | "failed";
  orderStatus: "new" | "preparing" | "ready" | "completed" | "cancelled";
  stripeSessionId: string;
  stripePaymentIntentId: string;
  createdAt: string;
}

const STATUS_COLORS: Record<string, string> = {
  paid: "bg-green-900/40 text-green-400 border-green-800",
  pending: "bg-yellow-900/40 text-yellow-400 border-yellow-800",
  failed: "bg-red-900/40 text-red-400 border-red-800",
  new: "bg-blue-900/40 text-blue-400 border-blue-800",
  preparing: "bg-orange-900/40 text-orange-400 border-orange-800",
  ready: "bg-purple-900/40 text-purple-400 border-purple-800",
  completed: "bg-green-900/40 text-green-400 border-green-800",
  cancelled: "bg-red-900/40 text-red-400 border-red-800",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "orders">("overview");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [search, setSearch] = useState("");
  const [newOrderAlert, setNewOrderAlert] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const knownPaidIds = useRef<Set<string>>(new Set());
  const isFirstLoad = useRef(true);

  const fetchOrders = useCallback(async () => {
    try {
      const res = await fetch("/api/orders");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      if (!res.ok) return;
      const data = await res.json();
      const fetched: Order[] = data.orders || [];

      // Check for new paid orders (not on first load)
      if (!isFirstLoad.current) {
        const newPaid = fetched.filter(
          (o) =>
            o.paymentStatus === "paid" && !knownPaidIds.current.has(o._id)
        );
        if (newPaid.length > 0) {
          setNewOrderAlert(true);
          if (soundEnabled && audioRef.current) {
            audioRef.current.play().catch(() => {});
          }
          setTimeout(() => setNewOrderAlert(false), 8000);
        }
      }

      // Update known paid ids
      fetched
        .filter((o) => o.paymentStatus === "paid")
        .forEach((o) => knownPaidIds.current.add(o._id));

      if (isFirstLoad.current) isFirstLoad.current = false;
      setOrders(fetched);
    } catch {
    } finally {
      setLoading(false);
    }
  }, [router, soundEnabled]);

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 10000);
    return () => clearInterval(interval);
  }, [fetchOrders]);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  async function updateOrderStatus(id: string, orderStatus: string) {
    // Use the dedicated status route which fires status emails
    await fetch(`/api/admin/orders/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderStatus }),
    });
    fetchOrders();
    if (selectedOrder?._id === id) {
      setSelectedOrder((prev) =>
        prev ? { ...prev, orderStatus: orderStatus as Order["orderStatus"] } : null
      );
    }
  }

  // Stats
  const totalOrders = orders.length;
  const paidOrders = orders.filter((o) => o.paymentStatus === "paid");
  const revenue = paidOrders.reduce((s, o) => s + o.total, 0);
  const activePipeline = orders.filter((o) =>
    ["new", "preparing", "ready"].includes(o.orderStatus)
  ).length;
  const completed = orders.filter((o) => o.orderStatus === "completed").length;

  // Status breakdown
  const statusBreakdown = {
    Paid: paidOrders.length,
    Pending: orders.filter((o) => o.paymentStatus === "pending").length,
    Cancelled: orders.filter((o) => o.orderStatus === "cancelled").length,
    New: orders.filter((o) => o.orderStatus === "new").length,
    Completed: completed,
  };

  // Daily sales (last 7 days)
  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const dateStr = d.toLocaleDateString("en-CA");
    const dayTotal = paidOrders
      .filter(
        (o) => new Date(o.createdAt).toLocaleDateString("en-CA") === dateStr
      )
      .reduce((s, o) => s + o.total, 0);
    return {
      label: d.toLocaleDateString("en-CA", { weekday: "short", day: "numeric" }),
      total: dayTotal,
    };
  });
  const maxDayTotal = Math.max(...last7.map((d) => d.total), 1);

  const filteredOrders = orders.filter((o) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      o.orderNumber?.toLowerCase().includes(q) ||
      o.customerName.toLowerCase().includes(q) ||
      o.customerEmail.toLowerCase().includes(q)
    );
  });

  function formatDate(str: string) {
    return new Date(str).toLocaleDateString("en-CA", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="min-h-screen bg-[#0f1117] text-white flex">
      {/* Audio element */}
      <audio ref={audioRef} src="/sounds/order-notification.mp3" preload="auto" />

      {/* Sidebar */}
      <aside className="w-52 bg-[#1a1d27] border-r border-gray-800 flex flex-col shrink-0">
        <div className="p-5 border-b border-gray-800">
          <div className="flex items-center gap-2 mb-1">
            <LogoImage width={28} height={28} />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              CG Admin
            </span>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "overview"
                ? "bg-[#d60000] text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
              activeTab === "orders"
                ? "bg-[#d60000] text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Orders
            {orders.filter((o) => o.paymentStatus === "paid" && o.orderStatus === "new").length > 0 && (
              <span className="bg-[#d60000] text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                {orders.filter((o) => o.paymentStatus === "paid" && o.orderStatus === "new").length}
              </span>
            )}
          </button>
        </nav>

        <div className="p-3 border-t border-gray-800 space-y-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="w-full text-left px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-gray-300 hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <span>{soundEnabled ? "🔔" : "🔕"}</span>
            {soundEnabled ? "Sound on" : "Sound off"}
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-red-400 hover:bg-gray-800 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <div className="bg-[#1a1d27] border-b border-gray-800 px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Dashboard
            </p>
            <h1 className="text-white font-bold text-lg">Operations</h1>
          </div>
          {newOrderAlert && (
            <div className="bg-green-900/50 border border-green-700 text-green-400 px-4 py-2 rounded-lg text-sm font-medium animate-pulse">
              🔔 New Paid Order Received!
            </div>
          )}
        </div>

        <div className="p-6">
          {/* ===== OVERVIEW TAB ===== */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stat cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "TOTAL ORDERS", value: totalOrders },
                  {
                    label: "REVENUE (PAID)",
                    value: `$${revenue.toFixed(2)}`,
                    highlight: true,
                  },
                  { label: "ACTIVE PIPELINE", value: activePipeline },
                  { label: "COMPLETED", value: completed },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#1a1d27] border border-gray-800 rounded-xl p-5"
                  >
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                      {stat.label}
                    </p>
                    <p
                      className={`text-3xl font-bold ${
                        stat.highlight ? "text-[#d60000]" : "text-white"
                      }`}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Daily sales chart */}
                <div className="bg-[#1a1d27] border border-gray-800 rounded-xl p-5">
                  <h3 className="text-sm font-medium text-gray-400 mb-4">
                    Daily sales (7d, paid)
                  </h3>
                  <div className="flex items-end gap-2 h-32">
                    {last7.map((day) => (
                      <div
                        key={day.label}
                        className="flex-1 flex flex-col items-center gap-1"
                      >
                        <div
                          className="w-full bg-[#d60000] rounded-t opacity-80 hover:opacity-100 transition-opacity"
                          style={{
                            height: `${(day.total / maxDayTotal) * 100}%`,
                            minHeight: day.total > 0 ? "4px" : "0",
                          }}
                          title={`$${day.total.toFixed(2)}`}
                        />
                        <p className="text-gray-600 text-xs truncate w-full text-center">
                          {day.label.split(",")[0]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status breakdown */}
                <div className="bg-[#1a1d27] border border-gray-800 rounded-xl p-5">
                  <h3 className="text-sm font-medium text-gray-400 mb-4">
                    Order status breakdown
                  </h3>
                  <div className="space-y-2.5">
                    {Object.entries(statusBreakdown).map(([status, count]) => (
                      <div key={status} className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">{status}</span>
                        <span className="text-[#d60000] font-bold">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== ORDERS TAB ===== */}
          {activeTab === "orders" && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <h2 className="text-white font-bold text-xl">Orders</h2>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={soundEnabled}
                      onChange={() => setSoundEnabled(!soundEnabled)}
                      className="accent-[#d60000] cursor-pointer"
                    />
                    Order alerts on
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search..."
                      className="bg-[#0f1117] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#d60000] w-48"
                    />
                  </div>
                  <button
                    onClick={fetchOrders}
                    className="bg-[#d60000] hover:bg-[#b00000] text-white text-sm px-4 py-2 rounded-lg transition-colors font-medium"
                  >
                    Search
                  </button>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-16 text-gray-500">
                  Loading orders...
                </div>
              ) : filteredOrders.length === 0 ? (
                <div className="text-center py-16 text-gray-500">
                  No orders found
                </div>
              ) : (
                <div className="bg-[#1a1d27] border border-gray-800 rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-800">
                          {[
                            "ORDER",
                            "CUSTOMER",
                            "TOTAL",
                            "PAYMENT",
                            "STATUS",
                            "STRIPE PI",
                            "UPDATE",
                            "VIEW",
                          ].map((h) => (
                            <th
                              key={h}
                              className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredOrders.map((order) => (
                          <tr
                            key={order._id}
                            className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors"
                          >
                            <td className="px-4 py-3">
                              <span className="text-[#d60000] font-mono text-xs font-semibold">
                                {order.orderNumber || order._id.slice(-8).toUpperCase()}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <p className="text-white text-xs font-medium">
                                {order.customerName}
                              </p>
                              <p className="text-gray-500 text-xs">
                                {order.customerEmail}
                              </p>
                            </td>
                            <td className="px-4 py-3 text-white text-xs font-semibold">
                              ${order.total.toFixed(2)}
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                                  STATUS_COLORS[order.paymentStatus] || ""
                                }`}
                              >
                                {order.paymentStatus.charAt(0).toUpperCase() +
                                  order.paymentStatus.slice(1)}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                                  STATUS_COLORS[order.orderStatus] || ""
                                }`}
                              >
                                {order.orderStatus.charAt(0).toUpperCase() +
                                  order.orderStatus.slice(1)}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-gray-500 text-xs font-mono">
                                {order.stripePaymentIntentId
                                  ? order.stripePaymentIntentId.slice(0, 16) + "…"
                                  : "—"}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <select
                                value={order.orderStatus}
                                onChange={(e) =>
                                  updateOrderStatus(order._id, e.target.value)
                                }
                                className="bg-[#0f1117] border border-gray-700 text-gray-300 text-xs rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#d60000]"
                              >
                                {[
                                  "new",
                                  "preparing",
                                  "ready",
                                  "completed",
                                  "cancelled",
                                ].map((s) => (
                                  <option key={s} value={s}>
                                    {s}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td className="px-4 py-3">
                              <button
                                onClick={() => setSelectedOrder(order)}
                                className="text-[#d60000] hover:text-red-400 text-xs font-medium transition-colors"
                              >
                                Details →
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="bg-[#1a1d27] border border-gray-700 rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <div>
                <h2 className="text-white font-bold">
                  Order{" "}
                  {selectedOrder.orderNumber ||
                    selectedOrder._id.slice(-8).toUpperCase()}
                </h2>
                <p className="text-gray-500 text-xs mt-0.5">
                  {formatDate(selectedOrder.createdAt)}
                </p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-500 hover:text-white transition-colors text-xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Customer info */}
              <div className="bg-[#0f1117] rounded-xl p-4 space-y-2 text-sm">
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                  Customer
                </h3>
                <div className="flex justify-between">
                  <span className="text-gray-500">Name</span>
                  <span className="text-white font-medium">
                    {selectedOrder.customerName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Phone</span>
                  <a
                    href={`tel:${selectedOrder.customerPhone}`}
                    className="text-[#d60000]"
                  >
                    {selectedOrder.customerPhone}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Email</span>
                  <span className="text-white text-xs">
                    {selectedOrder.customerEmail}
                  </span>
                </div>
                {selectedOrder.specialInstructions && (
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-gray-500 shrink-0">Notes</span>
                    <span className="text-yellow-400 text-xs text-right">
                      {selectedOrder.specialInstructions}
                    </span>
                  </div>
                )}
              </div>

              {/* Items */}
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                  Items
                </h3>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center text-sm bg-[#0f1117] rounded-lg px-4 py-2.5"
                    >
                      <span className="text-white">
                        {item.name}{" "}
                        <span className="text-gray-500">×{item.quantity}</span>
                      </span>
                      <span className="text-gray-300">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals */}
              <div className="bg-[#0f1117] rounded-xl p-4 text-sm space-y-2">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>${selectedOrder.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Tax</span>
                  <span>${selectedOrder.tax.toFixed(2)}</span>
                </div>
                {(selectedOrder as any).tip > 0 && (
                  <div className="flex justify-between text-gray-500">
                    <span>Tip</span>
                    <span>${(selectedOrder as any).tip.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-white font-bold text-base border-t border-gray-800 pt-2">
                  <span>Total</span>
                  <span>${selectedOrder.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Status & payment */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-[#0f1117] rounded-xl p-3 text-center">
                  <p className="text-gray-500 text-xs mb-1">Payment</p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      STATUS_COLORS[selectedOrder.paymentStatus]
                    }`}
                  >
                    {selectedOrder.paymentStatus.charAt(0).toUpperCase() +
                      selectedOrder.paymentStatus.slice(1)}
                  </span>
                </div>
                <div className="bg-[#0f1117] rounded-xl p-3 text-center">
                  <p className="text-gray-500 text-xs mb-1">Order Status</p>
                  <select
                    value={selectedOrder.orderStatus}
                    onChange={(e) => {
                      updateOrderStatus(selectedOrder._id, e.target.value);
                    }}
                    className="bg-transparent border-none text-xs text-white focus:outline-none cursor-pointer"
                  >
                    {["new", "preparing", "ready", "completed", "cancelled"].map(
                      (s) => (
                        <option key={s} value={s} className="bg-[#1a1d27]">
                          {s.charAt(0).toUpperCase() + s.slice(1)}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              {selectedOrder.stripePaymentIntentId && (
                <div className="bg-[#0f1117] rounded-xl p-3 text-xs">
                  <p className="text-gray-500 mb-1">Stripe Payment Intent</p>
                  <p className="text-gray-300 font-mono break-all">
                    {selectedOrder.stripePaymentIntentId}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
