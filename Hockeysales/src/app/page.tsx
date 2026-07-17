import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strides Hockey Sales | Elite Hockey Equipment",
  description: "Your trusted source for professional-grade hockey equipment.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#f8f9fa] ice-texture">
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center">
          <div className="w-40 h-40 sm:w-52 sm:h-52 mb-8 sm:mb-12 mt-12 sm:mt-16 relative">
            <Image
              src="/mainlogo1.png"
              alt="Strides Hockey Sales Logo"
              fill
              className="object-contain drop-shadow-xl mix-blend-multiply"
            />
          </div>
          <h1 className="font-montserrat text-[36px] sm:text-[48px] font-extrabold leading-tight tracking-tighter text-black mb-6">
            Your Trusted Source for Hockey Equipment
          </h1>
          <p className="font-inter text-base sm:text-lg text-[#44474d] max-w-2xl mx-auto mb-12">
            Elite performance starts with premium gear. We supply professional-grade sticks, skates, and protective equipment for athletes who demand the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/products" className="bg-black text-white font-inter font-semibold tracking-wide px-10 py-6 rounded hover:bg-[#006399] transition-all active:scale-95 shadow-lg">
              Shop Products
            </Link>
            <Link href="/contact" className="bg-white text-black border border-[#75777e] font-inter font-semibold tracking-wide px-10 py-6 rounded hover:bg-[#f8f9fa] transition-all active:scale-95">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 hero-gradient" />
      </section>

      {/* ── Featured Categories ── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-6 max-w-[1280px] mx-auto">
  <div className="text-center mb-10 sm:mb-14 lg:mb-20">
    <h2 className="font-montserrat text-2xl sm:text-[28px] lg:text-[32px] font-bold text-black mb-1">
      Featured Product Categories
    </h2>
    <div className="w-16 sm:w-20 h-1 bg-[#006399] mx-auto mt-3" />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
    {[
      {
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlmNyY9KhjohNNq4AGjn4fmEpY7iINbFkEBoNfAp3WEnZQDiMCUjgvAlwT2kS_Jp4S1bOFjin6kuaHiTFEUd7u6uw4aTzi-CkGdXiJL4Zwpw69BkvIPmX6kBzP65iv7amWSZ5oET7e3zt4Qg4pMCD12txhux5SSP5Hh632FECYtPt5kQNBbkOc84Zzl_XvEnR00Ybmxm6IvuuJKHV_Q6Gt9y_woiYTXp04zMKvo77WtKpEeTYxpaWyUnMpbRN25m9_ptAig6M9Bg",
        alt: "Hockey sticks",
        title: "Hockey Sticks",
        desc: "Ultra-light carbon fiber sticks engineered for maximum power and precision.",
        href: "/products#sticks",
        cta: "Explore Sticks",
      },
      {
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaGDGL_rNEgH3NyuujS_EVTUQKormwZKrTxvKIHIiAWz53PBE75H0nkFRzsNJDxkD8mz2R1uMK-djAb5NFyCjAzXyltDan_PXn_agWUkOEFI-jWmledBMgvxKUV033RWe9zN9q5pCdWTJ00q6JxKMGm-aM3F3mt7h3ean_VROr2T9jmQ8EUG8tAW30rNqe-mOGxC64Oh1jkme-dTHZDXHAEhBfuEFe07AVSOVdEOU3fupSmPJOFr98lHoqYgUwRcJ2mlXbBQRZMw",
        alt: "Hockey skates",
        title: "Professional Skates",
        desc: "Next-generation fit and blade technology for unmatched agility and speed.",
        href: "/products#skates",
        cta: "View Skates",
      },
      {
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDASapxT8s8K7fIbb2IeRyROKCmtzGWANU5FBQqXrx0PtAGGNitwS14o1QfJcKP6DFANjys6lEY2y2g4EVp0uV8o-mXqVzRau_4E4VDSOEnllho-o3oyujN4J_ln6NlyPDHLSWvJoWaanwm8Qn9-hcLF76U5EX2PWVSRiDhoH4cr6Ov-I7AuWjQUbBUhMUxC_Lu5eovO8o9JhAyGuujHjMeH97689_HtCZha6V0WPQwR4AndxtpRmYN90W5kkWQxlmy6WBXE6j-0Q",
        alt: "CCM and Knapper gear",
        title: "CCM & Knapper Gear",
        desc: "Official protective gear and apparel from the industry's most trusted brands.",
        href: "/products",
        cta: "Shop Brands",
      },
    ].map((cat) => (
      <div
        key={cat.title}
        className="group relative overflow-hidden rounded-lg bg-white border border-[#c5c6cd] hover-card transition-all duration-300"
      >
        <div className="aspect-[4/3] sm:aspect-[4/5] overflow-hidden relative">
          <Image
            src={cat.img}
            alt={cat.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5 sm:p-6 lg:p-8">
          <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2">
            {cat.title}
          </h3>
          <p className="font-inter text-sm sm:text-base text-[#44474d] mb-3 sm:mb-4">
            {cat.desc}
          </p>
          <Link
            href={cat.href}
            className="flex items-center gap-1 text-[#006399] font-inter font-semibold text-sm tracking-wide group-hover:gap-2 transition-all"
          >
            {cat.cta}
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* ── Why Choose Us ── */}
      <section className="bg-[#edeeef] py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-montserrat text-[32px] font-bold text-black mb-12">Engineered for the Elite Athlete</h2>
              <div className="space-y-10">
                {[
                  { icon: "verified", color: "bg-black", title: "Uncompromising Quality", desc: "We only stock gear that meets the rigorous standards of professional league play. Every item is hand-selected for durability and performance." },
                  { icon: "sports_hockey", color: "bg-[#006399]", title: "Professional Grade", desc: "Access the same equipment used by pro players. From custom curves to specialized skate sharpening, we speak your language." },
                  { icon: "lightbulb", color: "bg-[#0d1c32]", title: "Expert Advice", desc: "Our team consists of former players and coaches who understand the nuances of the game and how gear impacts performance." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 ${item.color} text-white flex items-center justify-center rounded`}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-sm tracking-wide mb-1">{item.title}</h4>
                      <p className="font-inter text-base text-[#44474d]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-white relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx0XfINxfEDTk66YdA8At8HR-Am_iZja7dnFa3bz6un9O7PZqK9KYEXJHMVz5gVxjarMv_CMIjh1lnNST9LaKaLN3hX-pS59jFNGInaPA5nT-44eUcUb3yBKBxKWC95o8zNwT4QmjmyfzlOYwyNotFdYjWXgt9MOrZjztL8lCOA7SqOt1kd2eHt1y3hDy8yhbBV7ZI9ZNf9pHhh-8eARkNaYsilWboffrbd9hFVvL8GnC0n26uWJgxN4G9yptgd6kFQidsgfPB5w"
                  alt="Hockey player in full gear"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#006399] text-white p-8 rounded shadow-xl hidden md:block">
                <p className="font-montserrat text-2xl font-bold">15+ Years</p>
                <p className="font-inter text-xs uppercase tracking-widest">Industry Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-montserrat text-[32px] font-bold text-black mb-2">What the Pros Say</h2>
          <p className="font-inter text-base text-[#44474d]">Trusted by players at every level of the game.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { quote: "The stick selection at Strides is unmatched. Found exactly what I needed for my shot style, and the delivery was incredibly fast.", name: "Alex MacKenzie", role: "Semi-Pro Forward" },
            { quote: "Excellent service and high-quality products. They really take the time to make sure you're getting the right equipment for your level.", name: "James Chen", role: "League Coordinator" },
            { quote: "The CCM skates I got from Strides are the best I've ever worn. The fit was perfect right out of the box. I won't shop anywhere else.", name: "Marcus Thompson", role: "AAA Defenseman" },
          ].map((r) => (
            <div key={r.name} className="bg-white p-8 border border-[#c5c6cd] rounded-lg">
              <div className="flex text-[#006399] mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined star-filled" style={{ fontSize: "18px" }}>star</span>
                ))}
              </div>
              <p className="font-inter text-base italic mb-8">&quot;{r.quote}&quot;</p>
              <p className="font-inter font-semibold text-sm text-black">{r.name}</p>
              <p className="font-inter text-xs text-[#44474d]">{r.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden bg-black text-white">
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="font-montserrat text-[48px] font-extrabold mb-6">Ready to Elevate Your Game?</h2>
          <p className="font-inter text-lg mb-12 max-w-2xl mx-auto opacity-90">
            Visit our shop or contact our experts today for a personalized gear consultation. We ship nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-white text-black font-inter font-semibold tracking-wide px-10 py-6 rounded hover:bg-[#cde5ff] transition-all shadow-xl">
              Contact Our Experts
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white font-inter font-semibold tracking-wide px-10 py-6 rounded hover:bg-white/10 transition-all">
              Find Our Store
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}