"use client";

const reasons = [
  { icon: "M12 2L3 7V12C3 17.5 6.84 22.74 12 24C17.16 22.74 21 17.5 21 12V7L12 2Z M9 12L11 14L15 10", title: "Licensed & Insured", desc: "Fully certified HVAC technicians you can trust." },
  { icon: "M12 8a7 7 0 100 14 7 7 0 000-14z M8.21 13.89L7 23L12 20L17 23L15.79 13.88", title: "15+ Years Experience", desc: "Over a decade of trusted HVAC expertise." },
  { icon: "M1 3h15v13H1z M16 8h4l3 3v5h-7V8z M5.5 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z M18.5 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z", title: "Same-Day Service", desc: "Fast response, most repairs done same day." },
  { icon: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z", title: "5-Star Rated", desc: "4.9/5 rating from 500+ verified reviews." },
  { icon: "M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21 M12 13a4 4 0 100-8 4 4 0 000 8z", title: "Transparent Pricing", desc: "Upfront quotes, no hidden fees, ever." },
  { icon: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z", title: "Flexible Financing", desc: "Affordable payment plans through our financing partners." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid lg:grid-cols-2">
        <div className="bg-brand-navy-dark relative">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="hidden lg:block relative">
          <img src="/5.png" alt="HVAC technician" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-navy-dark/30" />
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:max-w-[55%]">
          <div className="section-label !text-brand-cyan before:!bg-brand-red">Why Choose Us</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white mb-4">Why <span className="text-brand-red">JP Home Comfort</span>?</h2>
          <p className="text-slate-400 text-lg max-w-lg mb-12">Homeowners across the GTA trust us for quality, reliability, and honest service.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group backdrop-blur-sm">
                <div className="w-11 h-11 rounded-lg bg-brand-red/15 flex items-center justify-center mb-4 group-hover:bg-brand-red/25 transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={r.icon}/></svg>
                </div>
                <h3 className="font-heading font-bold text-[17px] text-white mb-1.5">{r.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}