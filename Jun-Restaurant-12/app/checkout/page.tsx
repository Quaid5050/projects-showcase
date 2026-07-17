import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutForm from "@/components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-[#f5f5f5]">
        <div className="bg-[#111111] text-white py-8">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h1 className="text-2xl md:text-3xl font-bold">Checkout</h1>
            <p className="text-gray-400 text-sm mt-1">
              Fill in your details and complete your order
            </p>
          </div>
        </div>
        <div className="max-w-lg mx-auto px-4 md:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <CheckoutForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
