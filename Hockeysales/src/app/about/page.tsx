import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Strides Hockey Sales",
  description: "Learn about Strides Hockey Sales, our mission, and our commitment to the hockey community.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative h-[614px] flex items-center justify-center overflow-hidden bg-[#0d1c32]">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7tGjZIfvpAlvz5RFOgeOxERtgVq4XgLda45vrq4pB8b1eASLeGkudxM8kDUYiIE9IgVPOTENjVB36WOgEvhGRwX2D47S1GO3ABpe5mGh3ijLPUzxmh0p3saomUMtE2eLrE5SB1NrDN0znBErEDV1OPU_tudeUr5nTu7Kc_Y4Yv7I2vBXEzLO5JHA5vNa3UeHlH4ePeDd6GHDuqueCSMkprw3K6gCtHv0XCJkTGZNqo-wk_izXzirMZaKURs9cVTqoUA_xJEsdDg"
              alt="Hockey player in action"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="font-montserrat text-[48px] font-extrabold text-white mb-6 tracking-tight uppercase">
              Elevating Every Stride
            </h1>
            <p className="font-inter text-lg text-[#b9c7e4] max-w-2xl mx-auto">
              Providing quality hockey equipment from head to toe for players who demand the best from their gear.
            </p>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className="py-20 px-6 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <span className="bg-black text-white px-3 py-1 font-inter font-semibold text-xs uppercase tracking-widest inline-block">
                Our Mission
              </span>
              <h2 className="font-montserrat text-[32px] font-bold text-black">
                Equipment Engineered for the Elite.
              </h2>
              <p className="font-inter text-base text-[#44474d] leading-relaxed">
                Strides Hockey Sales provides quality hockey equipment from head to toe. We are committed to helping players of all skill levels find the right gear, including sticks, skates, protective equipment, and trusted brands such as CCM and Knapper.
              </p>
              <p className="font-inter text-base text-[#44474d] leading-relaxed">
                Whether you&apos;re hitting the ice for the first time or competing at a professional level, we believe that the right equipment is the foundation of your success. Our curated selection focuses on performance, durability, and the latest technological advancements in the sport.
              </p>
              <div className="flex gap-8 pt-2">
                <div>
                  <span className="font-montserrat text-[32px] font-bold text-[#006399]">15+</span>
                  <p className="font-inter text-xs font-semibold uppercase tracking-widest text-[#75777e]">Years Experience</p>
                </div>
                <div className="w-px bg-[#c5c6cd]" />
                <div>
                  <span className="font-montserrat text-[32px] font-bold text-[#006399]">500+</span>
                  <p className="font-inter text-xs font-semibold uppercase tracking-widest text-[#75777e]">Products</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#67bafd] z-0" />
              <div className="relative z-10 w-full h-[500px] overflow-hidden shadow-xl rounded">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkn-W1nlHMsxRASifmeGkd0oG-tvXM-ahcAfA4NyROdYCtPYNCVil3VbDIuyPRS7OUEFTSoWOOF2zsh4zTwYCyljEs0cJ1H3O7QMrOnOgklr69euRQoaOaPu26BU0kzdRif5kTQBbQIcBruxoSZEQUMWlyZ6zG4evvrEKr-1657k0ZxX56eysWKP7HBkTgfj8Smjy8Mk4MpB5c02VEx-Bv7psThcKcJPRW-COGdybIckZwa_IjBZVQyVINg6kH3Muu9H2TJ0t46A"
                  alt="Hockey skates and stick"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Founder ── */}
        <section className="bg-[#edeeef] py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="bg-white p-8 md:p-16 rounded-xl flex flex-col md:flex-row gap-16 items-center shadow-md">
              <div className="w-full md:w-1/3 shrink-0">
                <div className="aspect-square bg-[#d9dadb] rounded overflow-hidden relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABdEEVxW0b9pUnNlLVDAalWf4Ob3UgAruRaWBaOBYHLMJW_jnTqlamxHBjQgO51dZtniy6ikxRvfiiQzeHTfpcl5uMudvCNdgn08ugmgzpzKecJ_36GC6Ivi4iiSnbDeDcsrrytO837RYkVJWIJgTgjQ82_IAPfr_U545J54tHXAAuUZ9PXF8flYan11BUmxRy6eRd4cPcpcuZfdVbfvmWv-zNk51hNhfkUiCl4Zu-hld4-s7vY5MhNwiHdC7epOiRNDzP5DMFqw"
                    alt="Harvey Boutilier"
                    fill
                    className="object-cover grayscale contrast-125"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-montserrat text-[32px] font-bold text-black">A Commitment to the Community</h3>
                <p className="font-inter text-lg italic text-black leading-relaxed">
                  &quot;My goal has always been simple: to ensure that every player who walks through our doors or visits our site walks away with the confidence that their gear will never hold them back. We aren&apos;t just selling equipment; we&apos;re supporting a passion.&quot;
                </p>
                <div>
                  <p className="font-montserrat text-2xl font-bold text-black">Harvey Boutilier</p>
                  <p className="font-inter text-sm font-semibold text-[#006399] uppercase tracking-widest">Founder &amp; Hockey Advocate</p>
                </div>
                <p className="font-inter text-base text-[#44474d]">
                  Harvey&apos;s dedication to the hockey community extends beyond the shop. From sponsoring local youth leagues to providing expert consultations for professional athletes, his commitment is rooted in a deep love for the sport.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Brand Partners ── */}
        <section className="py-20 px-6 max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-montserrat text-[32px] font-bold text-black mb-2 uppercase">World-Class Partners</h2>
            <p className="font-inter text-base text-[#44474d]">We stock only the most trusted names in the game.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f8f9fa] border border-[#c5c6cd] p-8 flex flex-col justify-between h-64 shadow-sm transition-all duration-300 hover:border-[#006399] group">
              <div className="font-montserrat text-[48px] font-extrabold text-[#0d1c32] opacity-20 group-hover:opacity-100 transition-opacity">CCM</div>
              <div>
                <h4 className="font-inter font-semibold text-sm text-black mb-1">Elite Performance</h4>
                <p className="font-inter text-xs text-[#44474d]">Industry leading sticks and skates designed for speed.</p>
              </div>
            </div>
            <div className="bg-black text-white p-8 flex flex-col justify-between h-64 shadow-sm">
              <div className="font-montserrat text-[48px] font-extrabold text-white opacity-30">KNAPPER</div>
              <div>
                <h4 className="font-inter font-semibold text-sm text-white mb-1">Specialized Protection</h4>
                <p className="font-inter text-xs text-[#e1e3e4]">Premium ball hockey and protective gear for every level.</p>
              </div>
            </div>
            <div className="bg-[#e1e3e4] p-8 flex flex-col justify-between h-64 shadow-sm border border-[#c5c6cd]">
              <span className="material-symbols-outlined text-[#006399]" style={{ fontSize: "48px", fontVariationSettings: "'FILL' 1" }}>verified</span>
              <div>
                <h4 className="font-inter font-semibold text-sm text-black mb-1">Quality Guaranteed</h4>
                <p className="font-inter text-xs text-[#44474d]">Every product is tested for durability and impact resistance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-black py-20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-montserrat text-[48px] font-extrabold text-white mb-6">Ready to Step Up Your Game?</h2>
            <p className="font-inter text-lg text-[#e1e3e4] mb-12">Explore our full catalog of pro-stock and performance hockey gear.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/products" className="bg-[#ed4a14] text-white px-10 py-6 font-inter font-semibold tracking-widest uppercase rounded-lg hover:brightness-110 active:scale-95 shadow-lg">
                Shop All Products
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-10 py-6 font-inter font-semibold tracking-widest uppercase rounded-lg hover:bg-white hover:text-black transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
