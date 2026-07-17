import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const services = [
  { id: "furnace", title: "Furnace Services", desc: "Keep your home warm all winter with our expert furnace services. We install, repair, and maintain all major brands.", features: ["High-efficiency furnace installation", "Furnace repair & troubleshooting", "Annual furnace tune-up & inspection", "Filter replacement & cleaning", "Gas & electric furnace service", "Warranty-backed parts & labor"], img: "/4.png" },
  { id: "ac", title: "Air Conditioning", desc: "Stay cool with energy-efficient AC installation and repair services for your home.", features: ["Central AC installation", "AC repair & troubleshooting", "Seasonal AC tune-up", "Refrigerant recharge", "Ductless mini-split systems", "Smart thermostat integration"], img: "/6.png" },
  { id: "water-heater", title: "Water Heaters", desc: "Never run out of hot water. Tankless and traditional water heater installation and repair.", features: ["Tankless water heater install", "Traditional tank water heaters", "Water heater repair", "Energy-efficient upgrades", "Same-day hot water solutions", "Annual maintenance plans"], img: "/3.png" },
  { id: "heat-pump", title: "Heat Pumps", desc: "Year-round comfort with a single system. Heat pumps provide efficient heating and cooling.", features: ["Air-source heat pump install", "Geothermal systems", "Heat pump repair & service", "Government rebate assistance", "Energy audit & sizing", "Hybrid heating systems"], img: "/2.png" },
  { id: "water-systems", title: "Water Systems", desc: "Complete water solutions for your home — filtration, softening, purification, and plumbing systems.", features: ["Water filtration systems", "Water softener installation", "Reverse osmosis systems", "Plumbing repairs & upgrades", "Water quality testing", "Whole-home water treatment"], img: "/8.png" },
  { id: "air-systems", title: "Air Systems", desc: "Improve your indoor air quality with professional ventilation, purification, and humidity control.", features: ["HRV / ERV installation", "Air purifier systems", "Whole-home humidifiers", "Indoor air quality testing", "Ventilation upgrades", "UV germicidal lights"], img: "/1.png" },
  { id: "duct", title: "Duct Cleaning", desc: "Professional duct cleaning to remove dust, allergens, and contaminants from your home.", features: ["Complete duct system cleaning", "Dryer vent cleaning", "Duct sanitizing & deodorizing", "Camera inspection", "Air duct sealing", "HEPA filtration upgrade"], img: "/9.png" },
  { id: "maintenance", title: "Maintenance Plans", desc: "Preventive maintenance extends equipment life and prevents costly breakdowns.", features: ["Annual HVAC inspection", "Priority service scheduling", "Discounted repair rates", "Filter & parts included", "Seasonal tune-ups", "Extended warranty coverage"], img: "/5.png" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our" highlight="Services" subtitle="Heating, cooling, water and air system solutions for your home." />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:[direction:rtl] lg:[&>*]:![direction:ltr]" : ""}`}>
              <div>
                <div className="section-label">{s.title}</div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">{s.title}</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0099D6" strokeWidth="2.5" className="flex-shrink-0"><circle cx="12" cy="12" r="10"/><path d="M8 12L11 15L16 9"/></svg>
                      <span className="text-slate-600 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-red text-[15px]">
                  Get a Quote <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
                </Link>
              </div>

              {/* Image + info card */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-64 lg:h-80">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[{l:"Response",v:"< 2 Hrs"},{l:"Warranty",v:"Up to 10 Yrs"},{l:"Pricing",v:"Free Quote"},{l:"Financing",v:"Available"}].map(m=>(
                    <div key={m.l} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                      <div className="text-slate-400 text-xs font-semibold uppercase tracking-wide mb-1">{m.l}</div>
                      <div className="text-brand-navy font-bold">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Financing */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-heading font-bold text-2xl text-brand-navy mb-3">Flexible Financing Available</h3>
          <p className="text-slate-500 mb-6">We partner with <strong>Finance It</strong>, <strong>Abode Financial</strong>, and <strong>Vista Rentals</strong> for affordable payment options.</p>
          <Link href="/about" className="text-brand-cyan font-semibold inline-flex items-center gap-2 hover:text-brand-red transition-colors">
            Learn About Financing <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 text-lg mb-8">Contact us for a free consultation and quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-red text-lg px-8 py-4">Get Free Quote</Link>
            <a href="tel:+16479485859" className="btn-outline-white text-lg px-8 py-4 text-center">+1 647-948-5859</a>
          </div>
        </div>
      </section>
    </>
  );
}