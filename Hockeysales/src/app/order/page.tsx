import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderForm from "@/components/OrderForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Place an Order | Strides Hockey Sales",
  description: "Request an order for elite hockey sticks, skates, and gear from Strides Hockey Sales.",
};

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8f9fa]">
        {/* ── Hero ── */}
        <section className="relative bg-[#0d1c32] h-[320px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c32] to-[#0a1628]" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 w-full">
            <span className="bg-[#006399] text-white px-3 py-1 font-inter font-semibold text-sm inline-block mb-6">ORDER NOW</span>
            <h1 className="font-montserrat text-[40px] md:text-[48px] font-extrabold text-white mb-3">Place Your Order</h1>
            <p className="font-inter text-lg text-[#b9c7e4] max-w-2xl">
              Tell us what you need and we&apos;ll confirm availability and pricing by email. No payment required to submit.
            </p>
          </div>
        </section>

        {/* ── Form ── */}
        <section className="max-w-3xl mx-auto px-6 py-16 -mt-12 relative z-20">
          <div className="bg-white border border-[#c5c6cd] shadow-sm rounded-xl p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="font-montserrat text-[28px] font-bold mb-2">Order Request</h2>
              <p className="font-inter text-base text-[#44474d]">Fill in the details below. Our team reviews every order and emails you a confirmation.</p>
            </div>
            <OrderForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
