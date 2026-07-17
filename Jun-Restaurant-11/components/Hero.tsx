import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, MapPinIcon, ClockIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a0a00]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B0000] via-[#FFD700] to-[#8B0000]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="text-center lg:text-left">
          {/* Decorative Chinese characters */}
          <div className="flex justify-center lg:justify-start gap-4 mb-6">
            <span className="text-[#FFD700] text-4xl font-bold opacity-80">口得福</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Authentic{' '}
            <span className="text-[#FFD700]">Chinese Cuisine</span>{' '}
            in Burnaby
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Enjoy freshly prepared Chinese favourites from Burnaby Palace Restaurant. Order online
            for easy pickup and enjoy quality flavours made with care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-[#8B0000] hover:bg-[#a00000] text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all duration-200 hover:shadow-lg hover:shadow-[#8B0000]/30 hover:-translate-y-0.5"
            >
              View Menu
            </Link>
            <a
              href="tel:+16044371818"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1a0a00] font-semibold px-8 py-3.5 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <PhoneIcon className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Restaurant Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-[#8B0000] flex-shrink-0" />
              <span>3110 Boundary Rd, Burnaby, BC</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-[#8B0000] flex-shrink-0" />
              <span>Open Daily: 11 AM – 9:30 PM</span>
            </div>
          </div>
        </div>

        {/* Right: Logo / Visual */}
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-4 border-[#FFD700]/20 scale-110" />
            <div className="absolute inset-0 rounded-full border-2 border-[#8B0000]/30 scale-125" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#FFD700]/40 bg-[#0d0500] shadow-2xl">
              <Image
                src="/images/logo.png"
                alt="Burnaby Palace Restaurant"
                fill
                className="object-contain p-6"
                sizes="(max-width: 640px) 256px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 30C1080 60 720 0 360 30L0 0L0 60Z" fill="#f9f5f0" />
        </svg>
      </div>
    </section>
  );
}
