import Link from "next/link";
import LogoImage from "@/components/LogoImage";

export default function Hero() {
  return (
    <section className="bg-[#111111] text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#d60000] text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
              Online Ordering Now Available
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Authentic Chinese Cuisine{" "}
              <span className="text-[#d60000]">in New Westminster</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Freshly prepared dishes, family favourites, and easy online
              ordering from Chan&apos;s Garden.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/menu"
                className="bg-[#d60000] hover:bg-[#b00000] text-white font-semibold px-8 py-3 rounded-lg transition-colors text-center"
              >
                View Full Menu
              </Link>
              <Link
                href="/menu"
                className="border border-white text-white hover:bg-white hover:text-[#111111] font-semibold px-8 py-3 rounded-lg transition-colors text-center"
              >
                Order Now
              </Link>
            </div>
          </div>

          {/* Logo / Image area */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <LogoImage width={160} height={160} />
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">Open Daily</p>
              <p className="text-white font-semibold text-sm">
                11:30 am – 9:30 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
