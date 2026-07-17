'use client';

import { useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/components/CartProvider';
import { CheckCircleIcon, MapPinIcon, PhoneIcon, ClockIcon } from '@/components/Icons';

function SuccessContent() {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Clear the cart after successful payment
    if (sessionId) {
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <div className="min-h-screen bg-[#f9f5f0]">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">Order Confirmed!</h1>
          <p className="text-gray-600 mb-2">
            Thank you for your order at Burnaby Palace Restaurant.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            A confirmation email has been sent to your email address with your order details.
          </p>

          {/* Info Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 text-left">
            <h2 className="font-semibold text-gray-900 mb-4 text-center">Pickup Information</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 text-[#8B0000] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Pickup Location</p>
                  <p className="text-sm text-gray-500">3110 Boundary Rd, Burnaby, BC V5M 4A2</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-4 h-4 text-[#8B0000] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Phone</p>
                  <a href="tel:+16044371818" className="text-sm text-gray-500 hover:text-[#8B0000]">
                    +1 604-437-1818
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="w-4 h-4 text-[#8B0000] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Hours</p>
                  <p className="text-sm text-gray-500">Open Daily: 11:00 AM – 9:30 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
            🍜 Your order has been received and will be prepared for pickup. Please come to the
            restaurant to collect your order.
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center bg-[#8B0000] hover:bg-[#a00000] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
            >
              Order Again
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-full transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#8B0000] border-t-transparent rounded-full animate-spin" /></div>}>
      <SuccessContent />
    </Suspense>
  );
}
