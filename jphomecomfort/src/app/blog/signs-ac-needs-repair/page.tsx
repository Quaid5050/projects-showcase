import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "6 Warning Signs Your Air Conditioner Needs Repair Before Summer | JP Home Comfort",
  description: "Catch AC problems early before the summer heat hits. JP Home Comfort explains the 6 warning signs your air conditioner needs professional attention.",
};

export default function SignsAcNeedsRepair() {
  return (
    <>
      <PageHeader title="Signs Your AC" highlight="Needs Repair" subtitle="Catch problems early — before the summer heat leaves you stranded." />

      <article className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-8">
            <span className="bg-brand-cyan text-white text-xs font-bold px-3 py-1 rounded-full">AC Repair</span>
            <span>May 15, 2026</span>
            <span>·</span>
            <span>4 min read</span>
          </div>

          <img src="/Close-up-of-Air-Conditioning-Repair-1.webp" alt="AC Repair" className="w-full rounded-2xl mb-10 object-cover h-72" />

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-[16px]">
            <p>
              Summer in Ontario can be brutal — and the worst time to discover your air conditioner isn't working is on the hottest day of the year. The good news? Most AC failures give you warning signs weeks or months in advance. Here's what to look for.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">1. Warm Air Coming from Vents</h2>
            <p>
              If your AC is blowing warm or room-temperature air when set to cool, the issue could be a refrigerant leak, a failing compressor, or a restricted airflow issue. Don't ignore this — refrigerant leaks need professional handling.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">2. Unusual Noises</h2>
            <p>
              Your AC should run quietly. Grinding, squealing, or banging sounds indicate something is wrong mechanically — possibly a worn belt, loose components, or motor bearing failure. Shut the unit off and call a technician.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">3. High Humidity Indoors</h2>
            <p>
              Air conditioners naturally remove humidity as they cool. If your home feels muggy even when the AC is running, the system may be undersized, have a refrigerant issue, or need its evaporator coil cleaned.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">4. Water Leaks Around the Indoor Unit</h2>
            <p>
              A small amount of condensation is normal. But pooled water or active dripping around your indoor air handler means the condensate drain is clogged — or, more seriously, ice is forming on the evaporator coil and melting.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">5. Skyrocketing Energy Bills</h2>
            <p>
              If your summer electricity bills are noticeably higher than previous years with no change in usage habits, your AC may be losing efficiency. Dirty coils, low refrigerant, or aging components all force the system to work harder.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">6. Frequent Short Cycling</h2>
            <p>
              If your AC turns on and off rapidly (short cycling) rather than running full cooling cycles, it's a sign of an oversized unit, a refrigerant issue, or an electrical problem. Short cycling wastes energy and puts stress on the compressor.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">When Should You Replace Instead of Repair?</h2>
            <p>
              If your AC is over 12–15 years old and repair costs exceed 50% of the unit's value, it often makes more sense to replace. Newer units are significantly more energy-efficient and may qualify for Ontario rebates.
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mt-12">
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">Book an AC Inspection Before Summer</h3>
              <p className="text-slate-500 mb-5">Don't wait for a breakdown. JP Home Comfort's licensed technicians serve all of Ontario — from Windsor to Kingston. Book a spring AC tune-up today.</p>
              <Link href="/contact" className="btn-red text-sm px-6 py-3">Book AC Inspection</Link>
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