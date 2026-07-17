import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ReviewsSlider from '@/components/home/ReviewsSlider';
import PhoneCTA from '@/components/shared/PhoneCTA';
import { WHEEL_IMG, ABOUT_GARAGE, ABOUT_CAR, GTR_IMG } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Haven Tint & Tire — your trusted automotive protection specialists serving Mississauga with certified technicians and premium materials.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        bgImage={WHEEL_IMG}
        centered={true}
      />

      {/* ===== GARAGE IMAGE ===== */}
      <div className="mx-[6%] mt-16 lg:mt-20">
        <div className="relative w-full" style={{ aspectRatio: '16/6.5' }}>
          <Image
            src={ABOUT_GARAGE}
            alt="Haven Tint & Tire Garage"
            fill
            className="object-cover object-center"
            sizes="88vw"
            priority
          />
        </div>
      </div>

      {/* ===== OUR STORY ===== */}
      <section className="bg-white mt-16 lg:mt-20">
        <div className="grid lg:grid-cols-2">
          {/* Left: car image */}
          <div className="relative min-h-[480px] lg:min-h-0">
            <Image
              src={ABOUT_CAR}
              alt="Haven Tint & Tire"
              fill
              className="object-cover object-center"
              sizes="50vw"
            />
          </div>

          {/* Right: content */}
          <div className="py-16 lg:py-20 px-8 lg:px-14 xl:px-20 flex flex-col justify-center">
            <p className="sec-label mb-4">Our Story</p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-black text-[#1a1a1a] leading-tight mb-4">
              Dedicated to{' '}
              <span className="text-[#e01e25]">Performance,<br />Protection,</span>{' '}
              and{' '}
              <span className="text-[#e01e25]">Style</span>
            </h2>

            {/* Three red dashes */}
            <div className="flex gap-2 mb-7">
              <div className="w-8 h-[3px] bg-[#e01e25]" />
              <div className="w-8 h-[3px] bg-[#e01e25]" />
              <div className="w-8 h-[3px] bg-[#e01e25]" />
            </div>

            <div className="space-y-3 text-[#555] text-sm leading-relaxed mb-8">
              <p>Haven Tint &amp; Tire was created with a clear mission: to provide drivers with high-quality automotive protection and customization services they can trust.</p>
              <p>Too often, vehicle upgrades are rushed or done with low-quality materials. Our team set out to build a place where every service is handled with care, precision, and attention to detail.</p>
              <p>From window tinting that keeps your vehicle cool to protective coatings and tire services that improve performance, we focus on delivering solutions that drivers can rely on every day.</p>
              <p>At Haven Tint &amp; Tire, our commitment goes beyond basic automotive services. We focus on delivering long-lasting protection, precision installations, and modern customization options that enhance both the look and performance of your vehicle. Every project is handled with professional care, using industry-trusted techniques and premium materials to ensure results that drivers can rely on.</p>
            </div>

            {/* Progress bars */}
            <div className="space-y-4">
              {[
                { label: 'Customer Satisfaction',    pct: 99 },
                { label: 'Installation Precision',   pct: 95 },
                { label: 'Premium Material Quality', pct: 97 },
                { label: 'Vehicle Protection Results', pct: 96 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <p className="text-[#e01e25] font-bold text-sm mb-1.5">{label}</p>
                  <div className="relative h-5 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-[#e01e25]" style={{ width: `${pct}%` }} />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white font-bold">{pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-5">
              Why Drivers Choose{' '}
              <span className="text-[#e01e25]">Haven Tint &amp; Tire</span>
            </h2>
            <div className="flex gap-2 justify-center">
              <div className="w-8 h-[3px] bg-[#e01e25]" />
              <div className="w-8 h-[3px] bg-[#e01e25]" />
              <div className="w-8 h-[3px] bg-[#e01e25]" />
            </div>
          </div>

          {/* 3-column layout */}
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
            {/* Left features */}
            <div className="space-y-10">
              {[
                {
                  title: 'Certified Automotive Experts',
                  desc: 'Our experienced technicians use professional tools and proven techniques to deliver precise installations, reliable service, and long-lasting results for every vehicle.',
                  icon: (
                    <svg viewBox="0 0 64 64" fill="none" stroke="#e01e25" strokeWidth="2" className="w-14 h-14">
                      <rect x="4" y="20" width="44" height="24" rx="4"/>
                      <circle cx="14" cy="44" r="6"/>
                      <circle cx="38" cy="44" r="6"/>
                      <path d="M20 44h12"/>
                      <path d="M4 32h8M36 32h12"/>
                      <circle cx="52" cy="16" r="8" stroke="#e01e25"/>
                      <path d="M49 16l2 2 4-4" stroke="#e01e25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  title: 'Advanced Automotive Technology',
                  desc: 'Our shop is equipped with modern equipment and advanced technology to provide accurate installations and high-performance automotive services.',
                  icon: (
                    <svg viewBox="0 0 64 64" fill="none" stroke="#e01e25" strokeWidth="2" className="w-14 h-14">
                      <path d="M28 8c0-4 8-4 8 0v4l6 6-4 4-6-6h-8l-6 6-4-4 6-6V8z"/>
                      <path d="M32 12v8M20 36c0 8 6 14 12 14s12-6 12-14"/>
                      <path d="M22 36h20M24 42h16"/>
                      <circle cx="32" cy="30" r="4"/>
                    </svg>
                  ),
                },
                {
                  title: 'Reliable Tire Services',
                  desc: 'We offer professional tire installation, balancing, and maintenance services to improve driving comfort, stability, and overall vehicle safety.',
                  icon: (
                    <svg viewBox="0 0 64 64" fill="none" stroke="#e01e25" strokeWidth="2" className="w-14 h-14">
                      <rect x="8" y="28" width="36" height="18" rx="3"/>
                      <circle cx="16" cy="46" r="5"/>
                      <circle cx="36" cy="46" r="5"/>
                      <path d="M21 46h11"/>
                      <path d="M8 36h4M36 36h8"/>
                      <path d="M44 20h8v8h-8z" rx="1"/>
                      <path d="M48 20v-4M48 28v4M44 24h-4M52 24h4"/>
                    </svg>
                  ),
                },
              ].map(({ title, desc, icon }) => (
                <div key={title} className="flex flex-col gap-3">
                  <div>{icon}</div>
                  <h3 className="font-black text-[#1a1a1a] text-base">{title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Center: floating car */}
            <div className="hidden lg:flex justify-center items-center px-4">
              <div className="float-anim">
                <Image src={GTR_IMG} alt="Haven GTR" width={320} height={540} className="object-contain drop-shadow-2xl" />
              </div>
            </div>

            {/* Right features */}
            <div className="space-y-10">
              {[
                {
                  title: 'Premium Quality Materials',
                  desc: 'We use high-quality films, coatings, wraps, and tire products to ensure durability, superior protection, and a flawless finish for your vehicle. Our materials are selected for long-term performance and reliability.',
                  icon: (
                    <svg viewBox="0 0 64 64" fill="none" stroke="#e01e25" strokeWidth="2" className="w-14 h-14">
                      <circle cx="32" cy="32" r="20"/>
                      <circle cx="32" cy="32" r="10"/>
                      <path d="M32 12v8M32 44v8M12 32h8M44 32h8"/>
                      <path d="M38 26l4-4M22 42l4-4M42 42l-4-4M18 26l4 4"/>
                    </svg>
                  ),
                },
                {
                  title: 'Complete Vehicle Protection',
                  desc: 'From ceramic coating and PPF to window tinting and wraps, we provide services designed to protect your vehicle\'s paint and enhance its appearance.',
                  icon: (
                    <svg viewBox="0 0 64 64" fill="none" stroke="#e01e25" strokeWidth="2" className="w-14 h-14">
                      <rect x="6" y="36" width="52" height="6" rx="1"/>
                      <rect x="2" y="42" width="60" height="4" rx="1"/>
                      <rect x="14" y="24" width="36" height="12" rx="3"/>
                      <circle cx="20" cy="36" r="4"/>
                      <circle cx="44" cy="36" r="4"/>
                      <path d="M24 36h16"/>
                    </svg>
                  ),
                },
                {
                  title: 'Customer-Focused Service',
                  desc: 'We prioritize quality workmanship, transparent communication, and customer satisfaction to ensure every client receives dependable service they can trust.',
                  icon: (
                    <svg viewBox="0 0 64 64" fill="none" stroke="#e01e25" strokeWidth="2" className="w-14 h-14">
                      <path d="M10 54L28 36" strokeLinecap="round"/>
                      <circle cx="14" cy="50" r="6"/>
                      <path d="M36 8l4 4-4 4 12 12-4 4-12-12-4 4-4-4 12-12z"/>
                      <path d="M54 10L36 28" strokeLinecap="round"/>
                      <circle cx="50" cy="14" r="6"/>
                    </svg>
                  ),
                },
              ].map(({ title, desc, icon }) => (
                <div key={title} className="flex flex-col gap-3">
                  <div>{icon}</div>
                  <h3 className="font-black text-[#1a1a1a] text-base">{title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE REVIEWS SLIDER ===== */}
      <ReviewsSlider />

      {/* ===== CALL TO ACTION PHONE BANNER ===== */}
      <PhoneCTA />
    </>
  );
}
