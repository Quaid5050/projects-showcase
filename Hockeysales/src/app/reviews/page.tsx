import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewForm from "@/components/ReviewForm";
import ReviewsList from "@/components/ReviewsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | Strides Hockey Sales",
  description: "Read what our customers say about Strides Hockey Sales.",
};

const stats = [
  { value: "4.9", label: "Average Rating", icon: "star" },
  { value: "500+", label: "Happy Customers", icon: "people" },
  { value: "98%", label: "Would Recommend", icon: "thumb_up" },
  { value: "15+", label: "Years of Trust", icon: "workspace_premium" },
];

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative bg-[#0d1c32] py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaGDGL_rNEgH3NyuujS_EVTUQKormwZKrTxvKIHIiAWz53PBE75H0nkFRzsNJDxkD8mz2R1uMK-djAb5NFyCjAzXyltDan_PXn_agWUkOEFI-jWmledBMgvxKUV033RWe9zN9q5pCdWTJ00q6JxKMGm-aM3F3mt7h3ean_VROr2T9jmQ8EUG8tAW30rNqe-mOGxC64Oh1jkme-dTHZDXHAEhBfuEFe07AVSOVdEOU3fupSmPJOFr98lHoqYgUwRcJ2mlXbBQRZMw"
              alt="Hockey equipment background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-20 text-center">
            <span className="bg-[#006399] text-white px-3 py-1 font-inter font-semibold text-sm inline-block mb-6">PLAYER TESTIMONIALS</span>
            <h1 className="font-montserrat text-[48px] font-extrabold text-white mb-6">Trusted by Champions</h1>
            <p className="font-inter text-lg text-[#b9c7e4] max-w-2xl mx-auto">
              From beer leagues to professional players — here&apos;s what the hockey community says about Strides Hockey Sales.
            </p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-[#edeeef] py-12">
          <div className="max-w-[1280px] mx-auto px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center py-6">
                  <span className="material-symbols-outlined text-[#006399] mb-3 block" style={{ fontSize: "36px", fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                  <div className="font-montserrat text-[32px] font-bold text-black mb-1">{stat.value}</div>
                  <div className="font-inter text-xs font-semibold text-[#44474d] uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews Grid ── */}
        <section className="py-20 px-6 max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-montserrat text-[32px] font-bold text-black mb-3">What Our Players Say</h2>
            <div className="w-20 h-1 bg-[#006399] mx-auto" />
          </div>
          <ReviewsList />
        </section>

        {/* ── Why Choose Us ── */}
        <section className="bg-[#edeeef] py-20">
          <div className="max-w-[1280px] mx-auto px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="font-montserrat text-[32px] font-bold text-black">Why Players Choose Strides</h2>
                {[
                  { icon: "verified", title: "Pro-Stock Selection", desc: "Access the same equipment used by professional players." },
                  { icon: "support_agent", title: "Expert Consultation", desc: "Personalised advice from former players and coaches." },
                  { icon: "local_shipping", title: "Fast Nationwide Shipping", desc: "Quick, reliable delivery on every order." },
                  { icon: "workspace_premium", title: "Full Manufacturer Warranty", desc: "Every product backed by its full manufacturer warranty." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="w-10 h-10 bg-[#006399] text-white flex items-center justify-center rounded shrink-0">
                      <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="font-inter text-base text-[#44474d]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlmNyY9KhjohNNq4AGjn4fmEpY7iINbFkEBoNfAp3WEnZQDiMCUjgvAlwT2kS_Jp4S1bOFjin6kuaHiTFEUd7u6uw4aTzi-CkGdXiJL4Zwpw69BkvIPmX6kBzP65iv7amWSZ5oET7e3zt4Qg4pMCD12txhux5SSP5Hh632FECYtPt5kQNBbkOc84Zzl_XvEnR00Ybmxm6IvuuJKHV_Q6Gt9y_woiYTXp04zMKvo77WtKpEeTYxpaWyUnMpbRN25m9_ptAig6M9Bg"
                  alt="Premium hockey sticks"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Leave a Review ── */}
        <section className="py-20 px-6 max-w-[1280px] mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat text-[32px] font-bold text-black mb-3">Leave a Review</h2>
              <p className="font-inter text-base text-[#44474d]">Had a great experience? We&apos;d love to hear from you!</p>
              <div className="w-20 h-1 bg-[#006399] mx-auto mt-4" />
            </div>
            <div className="bg-white border border-[#c5c6cd] shadow-sm rounded-xl p-8 lg:p-12">
              <ReviewForm />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-black text-white text-center">
          <div className="max-w-[1280px] mx-auto px-6">
            <h2 className="font-montserrat text-[48px] font-extrabold mb-6">Join Our Community of Champions</h2>
            <p className="font-inter text-lg opacity-80 mb-12 max-w-xl mx-auto">
              Experience the Strides difference for yourself. Shop our elite selection or contact us for personalised gear advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/products" className="bg-white text-black font-inter font-semibold tracking-wide px-10 py-6 rounded hover:bg-[#cde5ff] transition-all shadow-xl">
                Shop Products
              </Link>
              <Link href="/contact" className="border-2 border-white text-white font-inter font-semibold tracking-wide px-10 py-6 rounded hover:bg-white/10 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}