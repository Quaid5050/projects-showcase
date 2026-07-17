"use client";

import { useEffect, useState, Suspense } from "react";
import { useCart } from "@/context/CartContext";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function SuccessContent() {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const orderId = searchParams.get("order_id");
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    clearCart();

    // Call verify-session as webhook fallback
    if (sessionId || orderId) {
      const params = new URLSearchParams();
      if (sessionId) params.set("session_id", sessionId);
      if (orderId) params.set("order_id", orderId);

      fetch(`/api/stripe/verify-session?${params.toString()}`)
        .then((r) => r.json())
        .then((data) => {
          if (data.orderNumber) setOrderNumber(data.orderNumber);
          setVerified(true);
        })
        .catch(() => setVerified(true));
    } else {
      setVerified(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-lg w-full mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-[#111111] mb-2">
          Order Confirmed!
        </h1>

        {orderNumber && (
          <p className="text-[#d60000] font-semibold text-sm mb-3">
            Order #{orderNumber}
          </p>
        )}

        <p className="text-gray-500 text-sm mb-2 leading-relaxed">
          Thank you for your order from Chan&apos;s Garden. Your payment has
          been confirmed.
        </p>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          A confirmation email has been sent to you. Please come pick up your
          order at:
        </p>

        <div className="bg-[#f5f5f5] rounded-xl p-4 mb-6 text-sm text-[#333333]">
          <p className="font-semibold">Chan&apos;s Garden</p>
          <p>441 E Columbia St, New Westminster, BC</p>
          <p className="text-gray-500 mt-1">+1 604-521-1871</p>
          <p className="text-gray-500">Mon–Sun: 11:30 am – 9:30 pm</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/menu"
            className="bg-[#d60000] hover:bg-[#b00000] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Order Again
          </Link>
          <Link
            href="/"
            className="border border-gray-200 text-[#333333] hover:border-[#d60000] hover:text-[#d60000] font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-[#f5f5f5] flex items-center justify-center">
        <Suspense
          fallback={
            <div className="text-center text-gray-500 py-16">Loading...</div>
          }
        >
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
