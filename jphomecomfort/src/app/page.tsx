import Hero from "@/components/Hero";
import QuickBooking from "@/components/QuickBooking";
import HomeServices from "@/components/HomeServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BrandLogos from "@/components/BrandLogos";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickBooking />
      <div className="pt-8" />

      <HomeServices />

      {/* Brands strip */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-8">Trusted Brands We Install & Service</p>
          <BrandLogos />
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />

      {/* Financing Partners */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label justify-center">Financing</div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
            Flexible <span className="text-brand-red">Payment Options</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
            We partner with leading financing companies so you can get the comfort you need with affordable monthly payments.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: "Finance It", desc: "Low monthly payments with flexible terms for HVAC installations." },
              { name: "Abode Financial", desc: "Quick approvals and competitive rates for home comfort upgrades." },
              { name: "Vista Rentals", desc: "Rental programs for furnaces, ACs, and water heaters." },
            ].map(p => (
              <div key={p.name} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0099D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">{p.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Original image — same as before */}
            <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1569982615761-66697da68502?q=80&w=1200&auto=format&fit=crop"
                alt="Ontario province map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-3">
                  {[{num:"30+",l:"Cities"},{num:"30 min",l:"Avg Response"},{num:"$0",l:"Travel Fee"}].map(s=>(
                    <div key={s.l} className="bg-white/10 backdrop-blur-md rounded-lg p-3 text-center border border-white/10">
                      <div className="font-heading font-extrabold text-xl text-white">{s.num}</div>
                      <div className="text-white/70 text-xs font-medium">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="section-label">Coverage Area</div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-6">
                Serving <span className="text-brand-red">All of Ontario</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                From Windsor to Kingston and everywhere in between — our HVAC professionals are ready to serve you across Ontario. Fast response, no travel surcharge.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Brampton","Toronto","Mississauga","Markham","Vaughan","Richmond Hill","Oakville","Burlington","Hamilton","Guelph","Kitchener","London","Windsor","Kingston","Oshawa","Peterborough"].map(c=>(
                  <span key={c} className="bg-slate-100 text-slate-600 text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-brand-red/10 hover:text-brand-red transition-colors cursor-default">{c}</span>
                ))}
                <span className="text-brand-cyan font-semibold text-sm px-3 py-1.5">+14 more</span>
              </div>
              <Link href="/areas" className="btn-red text-[15px]">View All Areas <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg></Link>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2000&auto=format&fit=crop" alt="HVAC equipment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-navy-dark/85" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Ready for <span className="text-brand-red">Perfect</span> Home Comfort?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">Get a free, no-obligation quote today. Flexible financing available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-red text-lg px-10 py-5 shadow-2xl shadow-brand-red/30">Get Free Quote</Link>
            <a href="tel:+16479485859" className="btn-outline-white text-lg px-10 py-5 flex items-center justify-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 2.83 13.42 3.03 3.92C3.05 3.41 3.49 3 4 3H7C7.55 3 8 3.45 8 4C8 5.25 8.21 6.45 8.59 7.57L6.78 9.38C8.06 12.15 10.36 14.45 13.13 15.73L14.94 13.92C16.06 14.3 17.26 14.51 18.51 14.51C19.05 14.51 19.5 14.95 19.5 15.51V16.92Z"/></svg>
              +1 647-948-5859
            </a>
          </div>
        </div>
      </section>
    </>
  );
}