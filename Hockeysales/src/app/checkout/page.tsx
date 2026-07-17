import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutClient from "@/components/CheckoutClient";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Strides Hockey Sales",
  description: "Complete your order with Strides Hockey Sales.",
};

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8f9fa]">
        <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-16">
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center gap-1 font-inter text-sm font-semibold text-[#006399] hover:gap-2 transition-all">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Products
            </Link>
            <h1 className="font-montserrat text-[32px] md:text-[40px] font-extrabold text-black mt-3">Checkout</h1>
          </div>
          <CheckoutClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
