import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartPageClient from "./CartPageClient";

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-[#f5f5f5]">
        <div className="bg-[#111111] text-white py-8">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h1 className="text-2xl md:text-3xl font-bold">Your Cart</h1>
          </div>
        </div>
        <CartPageClient />
      </main>
      <Footer />
    </>
  );
}
