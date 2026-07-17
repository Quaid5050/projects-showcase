import Image from 'next/image';
import { Phone } from 'lucide-react';
import { DC_CAR, MAN_FOOTER } from '@/lib/data';

export default function PhoneCTA() {
  return (
    <section className="bg-white relative lg:pt-[130px]">
      {/* Faint car watermark — desktop only */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.07] pointer-events-none hidden lg:block">
        <Image src={DC_CAR} alt="" width={700} height={460} className="object-contain" />
      </div>

      {/* Red banner */}
      <div className="relative lg:ml-[6%] bg-[#e01e25] overflow-hidden lg:overflow-visible">

        {/* ── Mobile layout ── */}
        <div className="lg:hidden px-6 py-8">
          <p className="text-white/80 text-[0.6rem] font-bold uppercase tracking-[0.18em] mb-3">
            /// If you&apos;re experiencing any car-related issues
          </p>
          <h2 className="text-white font-black text-[1.4rem] leading-tight mb-6">
            Give Haven Tint &amp; Tire a Call Today
          </h2>
          <div className="space-y-4">
            <a href="tel:+19058030000" className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white/70 text-[0.6rem]">Mississauga — Available 24x7</p>
                <p className="text-white font-black text-base">+ 905-803-0000</p>
              </div>
            </a>
          </div>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden lg:flex items-end">
          {/* Left — text */}
          <div className="py-10 pl-10 pr-4 flex-1">
            <p className="flex items-center gap-2 text-white/75 text-[0.58rem] font-bold uppercase tracking-[0.18em] mb-4">
              <span className="text-white font-black text-base leading-none italic select-none">///</span>
              IF YOU&apos;RE EXPERIENCING ANY CAR-RELATED ISSUES
            </p>
            <h2 className="text-white font-black text-[1.5rem] md:text-[2rem] leading-tight max-w-[260px]">
              Give Haven Tint &amp; Tire a Call Today
            </h2>
          </div>

          {/* Center — mechanic overflowing above */}
          <div className="shrink-0 self-end" style={{ marginTop: '-130px' }}>
            <Image src={MAN_FOOTER} alt="Mechanic with tire" width={290} height={400} className="object-contain" />
          </div>

          {/* Right — phone numbers */}
          <div className="ml-auto py-10 pr-10 pl-6 space-y-5 shrink-0">
            <a href="tel:+14164315255" className="flex items-center gap-4 group">
              <div className="w-[62px] h-[62px] rounded-full border-2 border-white/50 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white/70 text-[0.62rem] mb-0.5">We are Available 24x7</p>
                <p className="text-white font-black text-[1.1rem]">+ 416-431-5255</p>
              </div>
            </a>
            <a href="tel:+19058030000" className="flex items-center gap-4 group">
              <div className="w-[62px] h-[62px] rounded-full border-2 border-white/50 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white/70 text-[0.62rem] mb-0.5">We are Available 24x7</p>
                <p className="text-white font-black text-[1.1rem]">+ 905-803-0000</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
