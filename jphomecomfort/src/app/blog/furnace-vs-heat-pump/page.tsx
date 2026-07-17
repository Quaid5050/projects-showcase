import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Furnace vs Heat Pump: Which Is Right for Your Ontario Home? | JP Home Comfort",
  description: "Choosing between a furnace and a heat pump in Ontario? We break down costs, efficiency, and climate suitability to help you decide.",
};

export default function FurnaceVsHeatPump() {
  return (
    <>
      <PageHeader title="Furnace vs" highlight="Heat Pump" subtitle="Which heating system is the right choice for your Ontario home?" />

      <article className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-8">
            <span className="bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-full">Buying Guide</span>
            <span>May 28, 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>

          <img src="/Heat-Pump3-2.webp" alt="Heat Pump vs Furnace" className="w-full rounded-2xl mb-10 object-cover h-72" />

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-[16px]">
            <p>
              If you're replacing your home's heating system, you'll likely face this question: should you go with a traditional furnace or upgrade to a heat pump? Both have real advantages — and the right choice depends on your home, your budget, and your Ontario climate zone.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">How Each System Works</h2>
            <p>
              A <strong>gas furnace</strong> burns natural gas to generate heat, which is distributed throughout your home via ductwork. It&apos;s a tried-and-true technology that&apos;s been heating Ontario homes for decades.
            </p>
            <p>
              A <strong>heat pump</strong> doesn&apos;t generate heat — it moves it. In winter, it extracts heat energy from outdoor air (even at -20°C with a cold-climate heat pump) and transfers it inside. In summer, it reverses to act as an air conditioner.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">Efficiency Comparison</h2>
            <p>
              Modern gas furnaces are 95–98% efficient. Heat pumps can deliver 2–4 units of heat for every unit of electricity consumed — making them 200–400% efficient. However, as temperatures drop below -15°C, heat pump efficiency decreases, which is relevant for northern Ontario.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">Upfront Cost vs Long-Term Savings</h2>
            <p>
              A furnace typically costs $3,000–$6,000 installed. A cold-climate heat pump system runs $5,000–$12,000 installed. However, with Ontario Greener Homes rebates and lower operating costs, many homeowners recoup the difference within 5–7 years.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">What About Ontario's Winters?</h2>
            <p>
              Modern cold-climate heat pumps (like those from Daikin, Mitsubishi, and Bosch) are rated down to -30°C. For most of southern Ontario — including the GTA, Hamilton, London, and Windsor — a heat pump handles 90%+ of heating needs. Many homeowners pair a heat pump with a gas furnace backup for the coldest days.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">The Verdict</h2>
            <p>
              If you want the lowest upfront cost and proven reliability: <strong>go with a high-efficiency gas furnace.</strong>
            </p>
            <p>
              If you want year-round efficiency, lower operating costs over time, and you care about reducing your carbon footprint: <strong>a cold-climate heat pump is the better long-term investment.</strong>
            </p>
            <p>
              Many of our customers in the GTA and southern Ontario choose a dual-fuel system — a heat pump paired with a gas furnace backup. You get the best of both worlds.
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mt-12">
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">Not Sure Which Is Right for You?</h3>
              <p className="text-slate-500 mb-5">Our licensed technicians will assess your home, your heating needs, and your budget — and give you an honest recommendation with a free quote.</p>
              <Link href="/contact" className="btn-red text-sm px-6 py-3">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </article>

      <div className="py-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Link href="/blog" className="text-brand-cyan font-semibold hover:underline flex items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </>
  );
}