import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import BrandLogos from "@/components/BrandLogos";

const blogs = [
  {
    slug: "hvac-maintenance-tips",
    title: "10 HVAC Maintenance Tips Every Ontario Homeowner Should Know",
    excerpt: "Regular maintenance prevents costly breakdowns and keeps your energy bills in check.",
    category: "Maintenance",
    image: "/Air-Conditioner-Maintenance-1-1.webp",
  },
  {
    slug: "furnace-vs-heat-pump",
    title: "Furnace vs Heat Pump: Which Is Right for Your Ontario Home?",
    excerpt: "We break down the pros, cons, and costs to help you make the best decision.",
    category: "Buying Guide",
    image: "/Heat-Pump3-2.webp",
  },
  {
    slug: "signs-ac-needs-repair",
    title: "6 Warning Signs Your Air Conditioner Needs Repair Before Summer",
    excerpt: "Learn the early warning signs before the hottest day of summer leaves you stranded.",
    category: "AC Repair",
    image: "/Close-up-of-Air-Conditioning-Repair-1.webp",
  },
];


export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" highlight="Us" subtitle="Your trusted HVAC partner — Comfort You Can Count On." />

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-6"><span className="text-brand-red">Comfort</span> You Can Count On</h2>
              <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                <p>JP Home Comfort was founded with a simple mission: to provide homeowners across Ontario with reliable, professional, and affordable HVAC services.</p>
                <p>With over 15 years of experience, our team of licensed technicians has helped thousands of families stay comfortable through every season. From furnace installations to AC repairs, water heater service to complete air quality solutions — we handle it all.</p>
                <p>Based in Brampton, we proudly serve all of Ontario from Windsor to Kingston. We believe in doing the job right the first time, with honest pricing and no hidden fees. That is why our customers keep coming back and recommending us to their friends and family.</p>
                <p>We also understand that HVAC investments can be significant. That is why we partner with leading financing companies like <strong>Finance It</strong>, <strong>Abode Financial</strong>, and <strong>Vista Rentals</strong> to make comfort affordable for every homeowner.</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[450px]">
              <img src="/5.png" alt="HVAC technician at work" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brand-navy-dark">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "15+", label: "Years of Experience", border: "border-brand-red" },
            { num: "5,000+", label: "Happy Customers", border: "border-brand-cyan" },
            { num: "30+", label: "Cities Served", border: "border-brand-red" },
            { num: "100%", label: "Satisfaction Rate", border: "border-brand-cyan" },
          ].map((s, i) => (
            <div key={i} className={`border-l-4 ${s.border} bg-white/5 rounded-lg p-6 text-center`}>
              <div className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-1">{s.num}</div>
              <div className="text-slate-400 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Our Values</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "M12 2L3 7V12C3 17.5 6.84 22.74 12 24C17.16 22.74 21 17.5 21 12V7L12 2Z", t: "Trust & Integrity", d: "Honest pricing, transparent service, no hidden fees." },
              { icon: "M12 8a7 7 0 100 14 7 7 0 000-14z M8.21 13.89L7 23L12 20L17 23L15.79 13.88", t: "Excellence", d: "Every job done right the first time, every time." },
              { icon: "M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21 M12 13a4 4 0 100-8 4 4 0 000 8z", t: "Customer First", d: "Your comfort and satisfaction drive everything we do." },
              { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", t: "Fast Response", d: "Same-day service available for most appointments." },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-7 border border-slate-100 hover:shadow-lg transition-shadow text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mx-auto mb-5">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={v.icon}/></svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">{v.t}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center">From Our Blog</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">HVAC <span className="text-brand-red">Tips & Guides</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Expert advice from our licensed technicians to help you make smart home comfort decisions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-brand-navy mb-2 group-hover:text-brand-red transition-colors leading-snug">{post.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{post.excerpt}</p>
                  <span className="text-brand-cyan font-semibold text-sm flex items-center gap-1">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="btn-red px-8 py-4">View All Blog Posts</Link>
          </div>
        </div>
      </section>

      {/* Financing Partners */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Financing</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">Our <span className="text-brand-red">Financing Partners</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We partner with trusted financing companies to make your home comfort upgrades affordable.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Finance It", desc: "Canada's leading home improvement financing provider. Get low monthly payments with flexible terms up to 15 years. Quick online application with instant approval.", features: ["Low monthly payments", "Terms up to 15 years", "Instant online approval"] },
              { name: "Abode Financial", desc: "Competitive rates and quick approvals for HVAC, plumbing, and home comfort upgrades. No hidden fees and flexible repayment options.", features: ["Competitive rates", "Quick approval process", "No hidden fees"] },
              { name: "Vista Rentals", desc: "Rental programs for furnaces, air conditioners, water heaters, and more. Low monthly rental with maintenance included.", features: ["Equipment rental programs", "Maintenance included", "Upgrade anytime"] },
            ].map(p => (
              <div key={p.name} className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0099D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">{p.name}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0099D6" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M8 12L11 15L16 9"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="font-heading font-bold text-lg text-slate-400 mb-8">Trusted Brands We Work With</h3>
          <BrandLogos />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4">Join 5,000+ Happy Homeowners</h2>
          <p className="text-slate-300 text-lg mb-8">Experience the JP Home Comfort difference. Flexible financing available.</p>
          <Link href="/contact" className="btn-red text-lg px-10 py-5 inline-block">Get Free Quote</Link>
        </div>
      </section>
    </>
  );
}