"use client";
import Link from "next/link";

const services = [
  { title: "Furnace Services", desc: "High-efficiency furnace installation, repair & maintenance for all brands.", img: "/4.png" },
  { title: "Air Conditioning", desc: "Central AC, ductless mini-splits, repairs & seasonal tune-ups.", img: "/6.png" },
  { title: "Water Heaters", desc: "Tankless & traditional water heater installation and repair.", img: "/3.png" },
  { title: "Heat Pumps", desc: "Energy-efficient heat pumps for year-round heating and cooling.", img: "/2.png" },
  { title: "Water Systems", desc: "Complete water filtration, softening, and plumbing system solutions.", img: "/8.png" },
  { title: "Air Systems", desc: "Indoor air quality solutions — purifiers, HRVs, and ventilation.", img: "/1.png" },
  { title: "Duct Cleaning", desc: "Professional duct cleaning for healthier indoor air quality.", img: "/8.png" },
  { title: "Maintenance Plans", desc: "Preventive care to extend equipment life and avoid breakdowns.", img: "/5.png" },
];

export default function HomeServices() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-label justify-center">Our Services</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy mb-4">
            Professional HVAC <span className="text-brand-red">Solutions</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Heating, cooling, water and air system services for homes across the Greater Toronto Area.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-brand-navy/8 transition-all duration-400 hover:-translate-y-1">
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-brand-navy mb-1.5 group-hover:text-brand-red transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                <Link href="/services" className="text-brand-cyan font-semibold text-sm inline-flex items-center gap-1 group-hover:text-brand-red group-hover:gap-2 transition-all">
                  Learn More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-red text-[15px]">
            View All Services <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}