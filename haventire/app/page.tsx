import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Zap, Shield, ShieldCheck, Eye, Circle, Palette, Camera, RotateCcw, Tag, Settings, Award, Sun, Wrench } from 'lucide-react';
import {
  services, stats, whyChooseUs, portfolio, blogPosts, locations, googleReviews,
  WHEEL_IMG, HERO_IMG1, HERO_IMG2, DOTTED_GRID, DOTTED_GRID2, DC_CAR, ELLIPSE_IMG,
  WRENCH_IMG, TECH_TIRES, CTA_TECH, HERO_BG, HERO_MAIN, GR_ARROW, WHY_CHOOSE_IMG, BANNER2, MAN_FOOTER,
} from '@/lib/data';
import HomeFAQBooking from '@/components/home/HomeFAQBooking';
import PhoneCTA from '@/components/shared/PhoneCTA';
import ReviewsSlider from '@/components/home/ReviewsSlider';
import CarDiagnostic from '@/components/home/CarDiagnostic';

const skills = [
  { label: 'Window Tinting', pct: 85 },
  { label: 'Ceramic Coating', pct: 90 },
  { label: 'Paint Protection Film', pct: 80 },
  { label: 'Tire Installation', pct: 95 },
];

const badges = [
  { icon: '✦', label: 'Certified Detailers' },
  { icon: '✦', label: 'Premium Materials' },
  { icon: '✦', label: 'Modern Equipments' },
];

const tickerItems = [
  'WINDOW TINTING', 'CERAMIC COATING', 'PAINT PROTECTION FILM',
  'TIRE SERVICES', 'VINYL WRAPS', 'DASHCAM INSTALLATION',
  'WHEEL BALANCING', 'HEADLIGHT RESTORATION', 'LOGO BLACKOUT',
];

const circularStats = [
  { pct: 75, label: 'Quickest Response', sub: 'Average response time under 30 minutes' },
  { pct: 95, label: 'Customer Satisfaction', sub: 'Rated 5-stars by our happy clients' },
];

const svcIconMap: Record<string, React.ReactNode> = {
  Zap:         <Zap         size={22} className="text-white" />,
  Shield:      <Shield      size={22} className="text-white" />,
  ShieldCheck: <ShieldCheck size={22} className="text-white" />,
  Eye:         <Eye         size={22} className="text-white" />,
  Circle:      <Circle      size={22} className="text-white" />,
  Palette:     <Palette     size={22} className="text-white" />,
  Camera:      <Camera      size={22} className="text-white" />,
  RotateCcw:   <RotateCcw   size={22} className="text-white" />,
  Tag:         <Tag         size={22} className="text-white" />,
  Settings:    <Settings    size={22} className="text-white" />,
  Award:       <Award       size={22} className="text-white" />,
  Sun:         <Sun         size={22} className="text-white" />,
};

function RingChart({ pct, label, sub }: { pct: number; label: string; sub: string }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="flex items-center gap-5">
      <div className="relative w-28 h-28 shrink-0">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={r} strokeWidth="7" className="ring-track" />
          <circle cx="60" cy="60" r={r} strokeWidth="7" className="ring-fill"
            strokeDasharray={circ} strokeDashoffset={offset} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-black text-xl leading-none">{pct}%</span>
        </div>
      </div>
      <div>
        <p className="text-white font-black text-sm mb-1">{label}</p>
        <p className="text-gray-400 text-xs leading-relaxed max-w-[130px]">{sub}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          1. HERO — full-viewport background photo
      ═══════════════════════════════════════ */}
      <section className="relative bg-[#0f0f0f] overflow-hidden" style={{ minHeight: '100svh', paddingTop: '80px' }}>

        {/* Full-width hero background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_MAIN}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark gradient — covers left half so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-[#0a0a0a]/10" />
          {/* Extra dark at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
        </div>

        {/* Dotted grid — top left decoration */}
        <div className="absolute top-[100px] left-0 opacity-70 pointer-events-none z-[1] hidden lg:block float-anim">
          <Image src={DOTTED_GRID} alt="" width={220} height={220} className="object-contain" />
        </div>

        {/* SPINNING WHEEL — bottom left, partially off-screen */}
        <div className="absolute -bottom-20 -left-20 z-[2] pointer-events-none hidden lg:block">
          <div className="wheel-spin opacity-60">
            <Image src={WHEEL_IMG} alt="" width={380} height={380} className="object-contain" />
          </div>
        </div>

        {/* Text content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 flex items-center" style={{ minHeight: 'calc(100svh - 80px)' }}>
          <div className="py-20 lg:py-0 max-w-2xl">

            <p className="text-white text-[0.72rem] font-bold uppercase tracking-[0.2em] mb-6">
              Driven by Detail. Defined by Quality.
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-black text-white leading-[1.05] mb-10">
              Advanced Auto<br />
              Maintenance &amp;<br />
              Professional<br />
              Detailing in Canada
            </h1>

            {/* Split CTA button */}
            <div className="flex items-stretch w-fit">
              <Link href="/booking" className="btn-split-main">
                BOOK YOUR APPOINTMENT NOW
              </Link>
              <Link href="/about" className="btn-split-plus">
                +
              </Link>
            </div>

          </div>
        </div>

      </section>

      {/* ═══════════════════════════════════════
          2. ABOUT PREVIEW (3-column)
      ═══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">

        {/* Large red chevron arrows — far LEFT (partially off-screen) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block z-0"
          style={{ transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'center center', marginLeft: '-30px' }}>
          <Image src={GR_ARROW} alt="" width={80} height={220} className="object-contain opacity-90" />
        </div>

        {/* Large red chevron arrows — BOTTOM RIGHT (partially off-screen) */}
        <div className="absolute right-0 bottom-8 pointer-events-none hidden lg:block z-0"
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'right center', marginRight: '-20px' }}>
          <Image src={GR_ARROW} alt="" width={80} height={220} className="object-contain opacity-90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.4fr_1fr] gap-10 items-center">

            {/* Col 1 — Left image with chamfered top-right corner */}
            <div className="relative hidden lg:block">
              {/* Red dotted grid — below left of image */}
              <div className="absolute -bottom-6 -left-6 pointer-events-none z-0">
                <Image src={DOTTED_GRID2} alt="" width={140} height={140} className="object-contain" />
              </div>
              <div className="relative h-[460px] overflow-hidden z-10"
                style={{ clipPath: 'polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)' }}>
                <Image src={HERO_IMG1} alt="Technician" fill className="object-cover" sizes="380px" />
              </div>
            </div>

            {/* Col 2 — Center text */}
            <div className="text-center lg:text-left px-2">
              <p className="text-[#1a1a1a] text-[0.72rem] font-black uppercase tracking-[0.18em] mb-3">
                Premium Car Care
              </p>
              <h2 className="text-[1.9rem] md:text-[2.4rem] font-black text-[#e01e25] leading-tight mb-5">
                An Impressive Collection of Modern Protection &amp; Performance Treatments
              </h2>
              <div className="w-10 h-[3px] bg-[#e01e25] mb-6 mx-auto lg:mx-0" />
              <p className="text-[#555] text-sm leading-relaxed mb-3">
                Your car works hard shouldn&apos;t it get treated like royalty?
              </p>
              <p className="text-[#555] text-sm leading-relaxed mb-3">
                At <strong className="text-[#1a1a1a]">Haven Tint &amp; Tire Garage</strong>, we protect, polish, and perfect every inch. Window tinting, coatings, tires, and alignment, we handle it all with precision, care, and a little love.
              </p>
              <p className="text-[#555] text-sm leading-relaxed mb-3">
                The road throws challenges at your car every day, but we make sure it looks good, drives smooth, and feels unstoppable.
              </p>
              <p className="text-[#555] text-sm leading-relaxed mb-8">
                Because every car deserves confidence on the road, and every driver deserves peace of mind. Drive smarter, shine brighter, and enjoy every mile that&apos;s the Haven promise.
              </p>

              {/* Split CTA button */}
              <div className="flex items-stretch w-fit mx-auto lg:mx-0">
                <Link href="/about" className="btn-split-main">
                  KNOW MORE ABOUT US
                </Link>
                <Link href="/about" className="btn-split-plus">
                  +
                </Link>
              </div>
            </div>

            {/* Col 3 — Right image with chamfered bottom-left corner */}
            <div className="relative hidden lg:block">
              {/* Red dotted grid — top right of image */}
              <div className="absolute -top-6 -right-6 pointer-events-none z-0">
                <Image src={DOTTED_GRID} alt="" width={140} height={140} className="object-contain" />
              </div>
              <div className="relative h-[460px] overflow-hidden z-10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 36px 100%, 0 calc(100% - 36px))' }}>
                <Image src={HERO_IMG2} alt="Technician" fill className="object-cover" sizes="380px" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. SERVICES GRID
      ═══════════════════════════════════════ */}
      <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">

        {/* gr-arrow — top left, partially off-screen */}
        <div className="absolute -top-4 left-0 pointer-events-none hidden lg:block z-0 opacity-90">
          <Image src={GR_ARROW} alt="" width={72} height={200} className="object-contain" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-14">
            <div>
              <p className="text-[#e01e25] text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-3">
                The Services Your Car Deserves
              </p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1a1a1a] leading-tight">
                The Ultimate Car Care{' '}
                <span className="text-[#e01e25]">Experience</span>
              </h2>
              {/* Three short red dashes */}
              <div className="flex gap-1.5 mt-4">
                <span className="block w-8 h-[3px] bg-[#e01e25]" />
                <span className="block w-8 h-[3px] bg-[#e01e25]" />
                <span className="block w-8 h-[3px] bg-[#e01e25]" />
              </div>
            </div>
            {/* CONTACT US + split button */}
            <div className="flex items-stretch w-fit shrink-0 mt-2">
              <Link href="/contact"
                className="bg-[#e01e25] hover:bg-[#b8191f] text-white font-black text-xs uppercase tracking-[0.12em] px-6 py-3.5 transition-colors">
                Contact Us
              </Link>
              <Link href="/contact"
                className="bg-[#2a2a2a] hover:bg-[#e01e25] text-white font-black text-xl px-4 py-3.5 leading-none flex items-center transition-colors">
                +
              </Link>
            </div>
          </div>

          {/* 3-column cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.slug} className="group bg-[#f5f5f5] border border-transparent hover:border-[#e01e25] hover:shadow-xl transition-all duration-300">
                {/* Text area — centered */}
                <div className="px-6 pt-8 pb-10 text-center">
                  <h3 className="text-[#1a1a1a] font-bold text-[1.1rem] leading-snug mb-3">{svc.name}</h3>
                  <p className="text-[#666] text-sm leading-relaxed line-clamp-3 mb-4">{svc.shortDesc}</p>
                  <Link href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#1a1a1a] hover:text-[#e01e25] text-xs font-bold uppercase tracking-widest transition-colors">
                    Read More <ArrowRight size={11} />
                  </Link>
                </div>

                {/* Icon + Image */}
                <div className="relative">
                  {/* Circular service icon — sits on top of the image */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10
                    w-14 h-14 bg-[#e01e25] rounded-full border-4 border-white
                    flex items-center justify-center shadow-md
                    group-hover:scale-110 transition-transform duration-300">
                    {svcIconMap[svc.icon] ?? <Settings size={22} className="text-white" />}
                  </div>
                  {/* Service image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={svc.image} alt={svc.name} fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. SKILLS / EXPERTISE SECTION
      ═══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — wrench, heading, badges, bars, CTA */}
            <div>
              {/* Wrench image at top */}
              <div className="mb-5">
                <Image src={WRENCH_IMG} alt="Wrench" width={70} height={50} className="object-contain" />
              </div>

              <h2 className="text-[2rem] md:text-[2.5rem] font-black text-[#1a1a1a] leading-tight mb-8">
                Delivering Quality ,<br />
                Precision , And Reliability<br />
                With Every Service!
              </h2>

              {/* 3 circular badge icons — horizontal row */}
              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { icon: <ShieldCheck size={22} className="text-[#555]" />, label: 'Certified\nDetailers' },
                  { icon: <Wrench size={22} className="text-[#555]" />,      label: 'Premium\nMaterials' },
                  { icon: <Settings size={22} className="text-[#555]" />,    label: 'Modern\nEquipments' },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full border-2 border-[#ddd] flex items-center justify-center shrink-0 bg-white">
                      {b.icon}
                    </div>
                    <span className="text-[#1a1a1a] text-sm font-semibold leading-snug whitespace-pre-line">{b.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#666] text-sm leading-relaxed mb-8">
                We provide expert detailing across Mississauga to ensure every car looks flawless and performs at its best. Bring your car to us and enjoy peace of mind knowing it is in expert hands.
              </p>

              {/* Skill bars — 2 bars with large % number */}
              <div className="space-y-5 mb-10">
                {[
                  { label: 'Consultation', pct: 85 },
                  { label: 'Car Detailing', pct: 90 },
                ].map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-bold text-[#1a1a1a]">{skill.label}</span>
                      <span className="text-3xl font-black text-[#aaa] leading-none">{skill.pct}%</span>
                    </div>
                    <div className="h-[6px] bg-[#ebebeb] w-full">
                      <div className="h-[6px] bg-[#e01e25]" style={{ width: `${skill.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA — "+ See More About Services +" split button */}
              <div className="flex items-stretch w-fit">
                <Link href="/services"
                  className="bg-[#e01e25] hover:bg-[#b8191f] text-white font-black text-xs uppercase tracking-[0.12em] px-6 py-4 flex items-center gap-2 transition-colors">
                  <span className="font-black text-base">+</span> See More About Services
                </Link>
                <Link href="/services"
                  className="bg-[#2a2a2a] hover:bg-[#e01e25] text-white font-black text-xl px-5 py-4 flex items-center transition-colors">
                  +
                </Link>
              </div>
            </div>

            {/* Right — interactive car diagnostic */}
            <div className="hidden lg:block">
              <CarDiagnostic />
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. STATS BAR (RED)
      ═══════════════════════════════════════ */}
      <section className="bg-[#e01e25] py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-5 px-8 py-6 md:py-4">
                {/* Icon box */}
                <div className="w-14 h-14 bg-white/15 border border-white/30 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-black text-white leading-none">{s.value}</div>
                  <div className="text-white/90 font-bold text-xs uppercase tracking-wider mt-1">{s.label}</div>
                  <div className="text-white/60 text-[0.65rem] uppercase tracking-wide">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. WHY CHOOSE US
      ═══════════════════════════════════════ */}
      <section className="bg-white overflow-hidden">
        {/* Centered header */}
        <div className="py-16 lg:py-20 text-center max-w-4xl mx-auto px-4 lg:px-8">
          <p className="sec-label">Why Choose Haven?</p>
          <p className="text-[1.1rem] md:text-[1.45rem] font-semibold text-[#1a1a1a] leading-tight mb-2">
            Because Every Scratch, Dent, or Fading Paint
          </p>
          <h2 className="text-[1.9rem] md:text-[2.7rem] font-black text-[#1a1a1a] leading-tight mb-7">
            Deserves Care from Someone Who Understands
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[3px] bg-[#e01e25] inline-block" />
            <span className="w-8 h-[3px] bg-[#e01e25] inline-block" />
            <span className="w-8 h-[3px] bg-[#e01e25] inline-block" />
          </div>
        </div>

        {/* Full-width: image left | diagonal grid right */}
        <div className="flex flex-col lg:flex-row">
          {/* Left — mechanic image, full height */}
          <div className="relative hidden lg:block" style={{ flex: '0 0 55%', minHeight: '620px' }}>
            <Image src={WHY_CHOOSE_IMG} alt="Mechanic at work" fill className="object-cover" sizes="55vw" />
          </div>

          {/* Right — 2×2 diagonal color grid: i=0,3 red; i=1,2 white→hover red */}
          <div className="flex-1 grid grid-cols-2">
            {whyChooseUs.map((item, i) => {
              const isRed = i === 0 || i === 3;
              return (
                <div key={item.title}
                  className={`group p-8 xl:p-10 transition-colors duration-300 ${
                    isRed ? 'bg-[#e01e25]' : 'bg-white hover:bg-[#e01e25]'
                  }`}>
                  <div className={`mb-6 transition-colors duration-300 ${
                    isRed ? 'text-white' : 'text-[#e01e25] group-hover:text-white'
                  }`}>
                    {i === 0 && <ShieldCheck size={52} strokeWidth={1.2} />}
                    {i === 1 && <Shield size={52} strokeWidth={1.2} />}
                    {i === 2 && <Wrench size={52} strokeWidth={1.2} />}
                    {i === 3 && <Settings size={52} strokeWidth={1.2} />}
                  </div>
                  <h3 className={`font-black text-base leading-snug mb-3 transition-colors duration-300 ${
                    isRed ? 'text-white' : 'text-[#1a1a1a] group-hover:text-white'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-[0.82rem] leading-relaxed transition-colors duration-300 ${
                    isRed ? 'text-white/80' : 'text-[#555] group-hover:text-white/85'
                  }`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. SERVICE TICKERS
      ═══════════════════════════════════════ */}
      <div className="overflow-hidden">
        {/* Ticker 1 — dark diagonal */}
        <div className="bg-[#1a1a1a] py-4 overflow-hidden">
          <div className="ticker-ltr flex whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-5 text-white font-black text-sm uppercase tracking-[0.15em]">
                <span className="text-[#e01e25] text-lg font-black">//</span>
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* Ticker 2 — red */}
        <div className="bg-[#e01e25] py-4 overflow-hidden">
          <div className="ticker-rtl flex whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-5 text-white font-black text-sm uppercase tracking-[0.15em]">
                <span className="text-white/40 text-lg font-black">//</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          8. FAQ + BOOKING FORM
      ═══════════════════════════════════════ */}
      <HomeFAQBooking />

      {/* ═══════════════════════════════════════
          9. CIRCULAR STATS
      ═══════════════════════════════════════ */}
      <section className="relative py-14 overflow-hidden">
        <Image src={HERO_BG} alt="" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-12 lg:gap-20">
            {circularStats.map((s) => (
              <RingChart key={s.label} pct={s.pct} label={s.label} sub={s.sub} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          10. EVERY DRIVE DESERVES PEACE OF MIND
      ═══════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Left — mechanic image with garage bg behind (desktop only) */}
            <div className="relative lg:w-[42%] shrink-0">
              {/* Garage bg — desktop only, absolute behind mechanic */}
              <div className="absolute inset-0 hidden lg:block overflow-hidden">
                <Image src={CTA_TECH} alt="" fill className="object-cover"
                  style={{ objectPosition: '-80px top' }} sizes="42vw" />
              </div>
              {/* Mechanic image — natural flow so mobile works */}
              <div className="relative z-10">
                <Image src={BANNER2} alt="Mechanic with tires"
                  width={500} height={700}
                  className="w-full h-auto"
                  sizes="(max-width:1024px) 100vw, 42vw"
                />
              </div>
              {/* Red chevrons bottom-left */}
              <div className="absolute bottom-10 left-0 z-20">
                <Image src={GR_ARROW} alt="" width={44} height={140} className="object-contain" />
              </div>
            </div>

            {/* Right — content with decorations top-right */}
            <div className="relative flex-1">
              {/* Blurry ellipse blob */}
              <div className="absolute -top-10 -right-40 pointer-events-none hidden lg:block">
                <Image src={ELLIPSE_IMG} alt="" width={320} height={320} className="object-contain opacity-80" />
              </div>
              {/* Car — pushed right so only left portion shows */}
              <div className="absolute -top-10 -right-40 pointer-events-none hidden lg:block">
                <Image src={DC_CAR} alt="" width={320} height={320} className="object-contain" />
              </div>

              <div className="relative z-10">
                {/* Wrench icon */}
                <div className="mb-5">
                  <Image src={WRENCH_IMG} alt="" width={72} height={52} className="object-contain" />
                </div>

                {/* Heading — title case, NOT uppercase */}
                <h2 className="text-[2.4rem] md:text-[3rem] font-black text-[#1a1a1a] leading-[1.1] mb-6 max-w-[460px]">
                  Every Drive Deserves Peace of Mind
                </h2>

                {/* Single paragraph */}
                <p className="text-[#555] text-[0.9rem] leading-relaxed mb-8 max-w-[500px]">
                  At Haven Tint &amp; Tire Garage Your car isn&apos;t just metal and paint, it&apos;s memories, freedom, and pride! We understand how stressful dents, scratches, or fading can feel. That&apos;s why our team treats every vehicle as if it&apos;s our own : protecting, restoring, and enhancing every inch with precision. When you leave, your car looks flawless and you drive away worry-free.
                </p>

                {/* CONTACT US split button */}
                <div className="flex items-stretch w-fit">
                  <Link href="/contact"
                    className="bg-[#e01e25] hover:bg-[#b8191f] text-white font-black text-[0.72rem] uppercase tracking-[0.12em] px-7 py-4 flex items-center transition-colors">
                    Contact Us
                  </Link>
                  <Link href="/contact"
                    className="bg-[#2a2a2a] hover:bg-[#e01e25] text-white font-black text-xl px-5 py-4 flex items-center transition-colors">
                    +
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          11. GOOGLE REVIEWS SLIDER
      ═══════════════════════════════════════ */}
      <ReviewsSlider />

      {/* ═══════════════════════════════════════
          12. CALL TO ACTION PHONE BANNER
      ═══════════════════════════════════════ */}
      <PhoneCTA />
    </>
  );
}
