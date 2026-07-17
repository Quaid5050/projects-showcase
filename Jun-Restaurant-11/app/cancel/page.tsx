import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { XCircleIcon } from '@/components/Icons';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-[#f9f5f0]">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Cancel Icon */}
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircleIcon className="w-10 h-10 text-red-500" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">Payment Cancelled</h1>
          <p className="text-gray-600 mb-2">
            Your payment was cancelled. No charges have been made.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Your cart items are still saved. You can go back and try again.
          </p>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">Need help?</h2>
            <p className="text-sm text-gray-500 mb-4">
              If you experienced any issues with your payment, please contact us directly.
            </p>
            <a
              href="tel:+16044371818"
              className="inline-flex items-center gap-2 text-[#8B0000] hover:text-[#a00000] font-medium text-sm transition-colors"
            >
              📞 +1 604-437-1818
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/cart"
              className="inline-flex items-center justify-center bg-[#8B0000] hover:bg-[#a00000] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
            >
              Return to Cart
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-full transition-all duration-200"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
