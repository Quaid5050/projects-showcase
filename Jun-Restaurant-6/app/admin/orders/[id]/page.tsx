"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AdminLayout from "@/components/AdminLayout";
import Link from "next/link";
import { toast } from "sonner";

export default function OrderDetailPage() {
  const { id } = useParams();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/orders/${id}`).then(r => r.json()).then(d => { setOrder(d); setLoading(false); });
  }, [id]);

  const updateStatus = async (status: string) => {
    const res = await fetch(`/api/admin/orders/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) { setOrder((prev: any) => ({ ...prev, orderStatus: status })); toast.success(`Status updated to ${status}`); }
  };

  if (loading) return <AdminLayout><div className="text-center py-20 text-gray-400">Loading...</div></AdminLayout>;
  if (!order) return <AdminLayout><div className="text-center py-20 text-gray-400">Order not found</div></AdminLayout>;

  return (
    <AdminLayout>
      <div className="max-w-3xl">
        {/* Back + title */}
        <div className="flex flex-wrap items-center gap-3 mb-5 sm:mb-6">
          <Link href="/admin/orders" className="text-gray-500 hover:text-[#c8102e] transition-colors text-sm">← Orders</Link>
          <h1 className="text-lg sm:text-2xl font-black text-[#1a1a1a]">Order {order.orderNumber}</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

          {/* Customer */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
            <h2 className="font-black text-base sm:text-lg mb-3 sm:mb-4">Customer</h2>
            <p className="font-semibold text-sm sm:text-base">{order.customerName}</p>
            <a href={`mailto:${order.customerEmail}`} className="text-[#c8102e] text-sm hover:underline block mt-1">{order.customerEmail}</a>
            <a href={`tel:${order.customerPhone}`} className="text-gray-600 text-sm hover:underline block mt-0.5">{order.customerPhone}</a>
          </div>

          {/* Status */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
            <h2 className="font-black text-base sm:text-lg mb-3 sm:mb-4">Status</h2>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Payment</span>
                <span className={`font-semibold ${order.paymentStatus === "paid" ? "text-green-600" : "text-gray-600"}`}>{order.paymentStatus}</span>
              </div>
              <div className="flex justify-between text-sm items-center gap-2">
                <span className="text-gray-500 flex-shrink-0">Order Status</span>
                <select
                  value={order.orderStatus}
                  onChange={e => updateStatus(e.target.value)}
                  className="border border-gray-200 rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-[#c8102e] flex-1 max-w-[140px]"
                >
                  {["pending","paid","preparing","ready","completed","cancelled"].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Pickup</span>
                <span className="font-semibold text-right">
                  {order.pickupType === "SCHEDULED" && order.pickupTime
                    ? new Date(order.pickupTime).toLocaleString("en-CA", { timeZone: "America/Vancouver" })
                    : "ASAP"}
                </span>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 sm:col-span-2">
            <h2 className="font-black text-base sm:text-lg mb-3 sm:mb-4">Items</h2>
            <div className="space-y-2 sm:space-y-3">
              {order.items?.map((item: any, i: number) => (
                <div key={i} className="flex justify-between items-start py-2 border-b border-gray-50 last:border-0 gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm sm:text-base">{item.quantity}× {item.name}</p>
                    {item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && (
                      <p className="text-xs text-gray-400 mt-0.5">{Object.entries(item.selectedOptions).map(([k, v]) => `${k}: ${v}`).join(", ")}</p>
                    )}
                    {item.notes && <p className="text-xs text-gray-400 italic mt-0.5">Note: {item.notes}</p>}
                  </div>
                  <span className="font-bold text-gray-800 text-sm sm:text-base flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-1 text-sm">
              <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>${order.subtotal?.toFixed(2)}</span></div>
              {order.discount > 0 && <div className="flex justify-between text-green-600"><span>Discount</span><span>-${order.discount?.toFixed(2)}</span></div>}
              <div className="flex justify-between text-gray-600"><span>Tax (13%)</span><span>${order.tax?.toFixed(2)}</span></div>
              {order.tip > 0 && <div className="flex justify-between text-gray-600"><span>Tip</span><span>${order.tip?.toFixed(2)}</span></div>}
              <div className="flex justify-between font-black text-base sm:text-lg pt-2 border-t border-gray-200">
                <span>Total</span><span className="text-[#c8102e]">${order.total?.toFixed(2)} CAD</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 sm:col-span-2">
            <h2 className="font-black text-base sm:text-lg mb-3 sm:mb-4">Details</h2>
            <div className="space-y-2 text-xs sm:text-sm">
              {order.notes && <div><span className="text-gray-500">Notes: </span><span>{order.notes}</span></div>}
              {order.promoCode && <div><span className="text-gray-500">Promo: </span><span className="font-mono">{order.promoCode}</span></div>}
              <div className="break-all"><span className="text-gray-500">Session ID: </span><span className="font-mono text-xs">{order.stripeCheckoutSessionId || "—"}</span></div>
              <div className="break-all"><span className="text-gray-500">Payment Intent: </span><span className="font-mono text-xs">{order.stripePaymentIntentId || "—"}</span></div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span><span className="text-gray-500">Confirmation Email: </span><span className={order.confirmationEmailSent ? "text-green-600" : "text-gray-400"}>{order.confirmationEmailSent ? "Sent ✓" : "Not sent"}</span></span>
                <span><span className="text-gray-500">Kitchen Email: </span><span className={order.merchantNotificationEmailSent ? "text-green-600" : "text-gray-400"}>{order.merchantNotificationEmailSent ? "Sent ✓" : "Not sent"}</span></span>
                <span><span className="text-gray-500">Order App: </span><span className={order.orderAppSynced ? "text-green-600" : "text-gray-400"}>{order.orderAppSynced ? "Synced ✓" : "Not synced"}</span></span>
              </div>
              {order.statusEmailLog?.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="text-gray-500">Status Emails:</span>
                  {order.statusEmailLog.map((l: any, i: number) => (
                    <span key={i} className="text-xs bg-gray-100 px-2 py-0.5 rounded">{l.status} → {l.recipient}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
