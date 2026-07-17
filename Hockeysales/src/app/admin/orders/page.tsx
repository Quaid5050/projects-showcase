"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";

interface Order {
  id: string;
  name: string;
  email: string;
  phone: string;
  product: string;
  quantity: number;
  details: string;
  status: string;
  createdAt: string | null;
}

const STATUS_OPTIONS = ["new", "confirmed", "rejected", "shipped", "completed"];

const statusStyle: Record<string, string> = {
  new: "bg-[#67bafd]/20 text-[#006399] border border-[#67bafd]",
  confirmed: "bg-green-100 text-green-700 border border-green-300",
  rejected: "bg-red-100 text-red-700 border border-red-300",
  shipped: "bg-purple-100 text-purple-700 border border-purple-300",
  completed: "bg-gray-200 text-gray-700 border border-gray-300",
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);

  const load = async () => {
    const res = await fetch("/api/admin/orders");
    if (res.ok) {
      const data = await res.json();
      setOrders(data.orders || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const setStatus = async (id: string, status: string) => {
    setBusy(id);
    await fetch(`/api/admin/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
    setBusy(null);
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this order?")) return;
    await fetch(`/api/admin/orders/${id}`, { method: "DELETE" });
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <AdminShell title="Orders">
      <p className="font-inter text-sm text-[#44474d] mb-6">
        Confirming or rejecting an order automatically emails the customer.
      </p>
      {loading ? (
        <p className="font-inter text-[#44474d]">Loading...</p>
      ) : orders.length === 0 ? (
        <p className="font-inter text-[#44474d]">No orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((o) => (
            <div key={o.id} className="bg-white border border-[#c5c6cd] rounded-xl p-6">
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-montserrat font-bold text-lg text-black">{o.product}</span>
                    <span className="font-inter text-xs bg-[#f8f9fa] border border-[#c5c6cd] px-2 py-0.5 rounded">Qty: {o.quantity}</span>
                    <span className={`font-inter text-xs font-bold px-2 py-0.5 rounded capitalize ${statusStyle[o.status] || ""}`}>{o.status}</span>
                  </div>
                  <p className="font-inter text-sm text-black font-semibold">{o.name}</p>
                  <p className="font-inter text-sm text-[#44474d]">
                    <a href={`mailto:${o.email}`} className="text-[#006399] underline">{o.email}</a>
                    {o.phone && <> · {o.phone}</>}
                  </p>
                  {o.details && <p className="font-inter text-sm text-[#44474d] mt-2 whitespace-pre-wrap">{o.details}</p>}
                  {o.createdAt && <p className="font-inter text-xs text-[#75777e] mt-2">{new Date(o.createdAt).toLocaleString()}</p>}
                </div>
                <div className="flex flex-col gap-2 shrink-0 lg:w-56">
                  <label className="font-inter text-xs font-semibold text-[#44474d] uppercase tracking-wider">Update Status</label>
                  <select
                    value={o.status}
                    disabled={busy === o.id}
                    onChange={(e) => setStatus(o.id, e.target.value)}
                    className="px-3 py-2 bg-[#f8f9fa] border border-[#c5c6cd] rounded font-inter text-sm outline-none focus:border-[#006399] capitalize"
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s} value={s} className="capitalize">{s}</option>
                    ))}
                  </select>
                  <button onClick={() => remove(o.id)} className="bg-red-600 text-white px-4 py-2 rounded font-inter text-xs font-semibold hover:bg-red-700 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
