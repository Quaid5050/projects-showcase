'use client';

import { IOrder } from '@/types';
import { CloseIcon, CheckCircleIcon } from './Icons';

interface OrderDetailsModalProps {
  order: IOrder;
  onClose: () => void;
}

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-900/40 text-blue-300 border-blue-700/30',
  pending: 'bg-yellow-900/40 text-yellow-300 border-yellow-700/30',
  paid: 'bg-green-900/40 text-green-300 border-green-700/30',
  completed: 'bg-gray-700/40 text-gray-300 border-gray-600/30',
  cancelled: 'bg-red-900/40 text-red-300 border-red-700/30',
};

const PAYMENT_COLORS: Record<string, string> = {
  paid: 'bg-green-900/40 text-green-300',
  unpaid: 'bg-red-900/40 text-red-300',
};

export default function OrderDetailsModal({ order, onClose }: OrderDetailsModalProps) {
  const statusColor = STATUS_COLORS[order.orderStatus] || 'bg-gray-700 text-gray-300';
  const paymentColor = PAYMENT_COLORS[order.paymentStatus] || 'bg-gray-700 text-gray-300';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#1a1a1a] border border-[#8B0000]/30 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#8B0000]/20">
          <div>
            <h2 className="text-white font-bold text-lg">Order #{order.orderNumber}</h2>
            <p className="text-gray-500 text-xs mt-0.5">
              {new Date(order.createdAt).toLocaleString('en-CA', {
                dateStyle: 'medium',
                timeStyle: 'short',
              })}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-5">
          {/* Status Row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColor}`}>
              {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${paymentColor}`}>
              Payment: {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
            </span>
            {order.confirmationEmailSent && (
              <span className="flex items-center gap-1 text-xs text-green-400">
                <CheckCircleIcon className="w-3.5 h-3.5" />
                Email sent
              </span>
            )}
          </div>

          {/* Customer Details */}
          <div className="bg-[#0d0500] rounded-xl p-4">
            <h3 className="text-[#FFD700] text-sm font-semibold mb-3">Customer Details</h3>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-500 text-xs">Name</p>
                <p className="text-white">{order.customerName}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Phone</p>
                <p className="text-white">{order.customerPhone}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-gray-500 text-xs">Email</p>
                <p className="text-white">{order.customerEmail}</p>
              </div>
              {order.notes && (
                <div className="sm:col-span-2">
                  <p className="text-gray-500 text-xs">Notes</p>
                  <p className="text-white">{order.notes}</p>
                </div>
              )}
            </div>
          </div>

          {/* Items */}
          <div>
            <h3 className="text-[#FFD700] text-sm font-semibold mb-3">Order Items</h3>
            <div className="border border-gray-700 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0d0500] text-gray-400">
                    <th className="text-left p-3 text-xs">Item</th>
                    <th className="text-center p-3 text-xs">Qty</th>
                    <th className="text-right p-3 text-xs">Price</th>
                    <th className="text-right p-3 text-xs">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {order.items.map((item, i) => (
                    <tr key={i}>
                      <td className="p-3 text-white">{item.name}</td>
                      <td className="p-3 text-center text-gray-300">{item.quantity}</td>
                      <td className="p-3 text-right text-gray-300">${item.price.toFixed(2)}</td>
                      <td className="p-3 text-right text-white">${item.subtotal.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Totals */}
          <div className="bg-[#0d0500] rounded-xl p-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax (5% GST)</span>
                <span>${order.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-white border-t border-gray-700 pt-2">
                <span>Total</span>
                <span className="text-[#FFD700] text-base">${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Stripe Info */}
          {(order.stripeCheckoutSessionId || order.stripePaymentIntentId) && (
            <div className="bg-[#0d0500] rounded-xl p-4">
              <h3 className="text-[#FFD700] text-sm font-semibold mb-2">Payment Reference</h3>
              {order.stripeCheckoutSessionId && (
                <p className="text-xs text-gray-500 break-all">
                  Session: {order.stripeCheckoutSessionId}
                </p>
              )}
              {order.stripePaymentIntentId && (
                <p className="text-xs text-gray-500 break-all mt-1">
                  Intent: {order.stripePaymentIntentId}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
