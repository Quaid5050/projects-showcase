"use client";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useCartStore } from "@/lib/store/cart-store";
import Link from "next/link";

export default function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCartStore();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [orderNumber, setOrderNumber] = useState("");
  const [pickupType, setPickupType] = useState("");
  const [pickupTime, setPickupTime] = useState<string | null>(null);
  const [prepTime, setPrepTime] = useState(20);
  const verified = useRef(false);

  useEffect(() => {
    if (!sessionId || verified.current) return;
    verified.current = true;

    const verify = async () => {
      try {
        const res = await fetch("/api/stripe/verify-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ session_id: sessionId }),
        });
        const data = await res.json();
        if (data.paid) {
          setOrderNumber(data.orderNumber);
          setPickupType(data.pickupType);
          setPickupTime(data.pickupTime);
          clearCart();
          setStatus("success");
          fetch("/api/site-settings").then(r => r.json()).then(s => {
            if (s?.pickupPrepareTimeMinutes) setPrepTime(s.pickupPrepareTimeMinutes);
          });
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    };
    verify();
  }, [sessionId, clearCart]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#c8102e] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-semibold">Confirming your order...</p>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-md w-full text-center">
          <p className="text-5xl mb-4">❌</p>
          <h2 className="text-2xl font-black text-gray-800 mb-2">Payment Not Confirmed</h2>
          <p className="text-gray-500 mb-6">We couldn&apos;t verify your payment. If you were charged, please contact us.</p>
          <Link href="/cart" className="bg-[#c8102e] text-white font-bold px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
            Return to Cart
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✅</span>
        </div>
        <h1 className="text-3xl font-black text-[#1a1a1a] mb-2">Order Confirmed!</h1>
        <p className="text-gray-500 mb-6">Thank you! Your order has been received.</p>

        <div className="bg-[#c8102e]/5 border border-[#c8102e]/20 rounded-xl p-4 mb-6">
          <p className="text-sm text-gray-500 mb-1">Order Number</p>
          <p className="text-2xl font-black text-[#c8102e]">{orderNumber}</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Pickup Type</span>
            <span className="font-semibold">{pickupType === "SCHEDULED" ? "Scheduled" : "ASAP"}</span>
          </div>
          {pickupType === "SCHEDULED" && pickupTime ? (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Pickup Time</span>
              <span className="font-semibold">
                {new Date(pickupTime).toLocaleString("en-CA", { timeZone: "America/Vancouver" })}
              </span>
            </div>
          ) : (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Estimated Ready</span>
              <span className="font-semibold">~{prepTime} minutes</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Location</span>
            <span className="font-semibold text-right">3800 Bayview St #105<br />Richmond, BC</span>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-6">A confirmation email has been sent to you.</p>

        <Link href="/menu" className="block w-full bg-[#c8102e] hover:bg-red-700 text-white font-black py-3 rounded-full transition-colors">
          Order Again
        </Link>
        <Link href="/" className="block mt-3 text-gray-500 hover:text-[#c8102e] text-sm transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
