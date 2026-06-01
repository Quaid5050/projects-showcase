"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/site";

export default function Services() {
  // duplicate the list so the marquee can loop seamlessly
  const track = [...SERVICES, ...SERVICES];

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[120px]" />

      <div className="section">
        <SectionHeading
          eyebrow="What We Do"
          title={<>End-to-End <span className="text-gradient-brand">Digital Services</span></>}
          subtitle="Everything you need to launch, grow and scale — delivered by one senior team with a single standard of quality."
        />
      </div>

      {/* single-line auto-scrolling marquee (pauses on hover) */}
      <div
        className="group relative mt-16 w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        }}
      >
        <div className="flex w-max items-stretch gap-6 px-6 animate-marquee group-hover:[animation-play-state:paused]">
          {track.map((s, i) => (
            <div key={i} className="w-[17rem] shrink-0 sm:w-72">
              <ServiceCard service={s} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}