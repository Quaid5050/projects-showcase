import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "10 HVAC Maintenance Tips Every Ontario Homeowner Should Know | JP Home Comfort",
  description: "Regular HVAC maintenance keeps your system running efficiently and prevents costly breakdowns. Expert tips from JP Home Comfort — serving all of Ontario.",
};

export default function HvacMaintenanceTips() {
  return (
    <>
      <PageHeader title="HVAC Maintenance" highlight="Tips" subtitle="Keep your system running at peak performance all year long." />

      <article className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-8">
            <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">Maintenance</span>
            <span>June 5, 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>

          <img src="/Air-Conditioner-Maintenance-1-1.webp" alt="HVAC Maintenance" className="w-full rounded-2xl mb-10 object-cover h-72" />

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-[16px]">
            <p>
              Your HVAC system works hard year-round to keep your Ontario home comfortable — through freezing winters and humid summers. A little regular maintenance goes a long way in preventing costly breakdowns and keeping your energy bills in check.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">1. Replace Your Air Filter Every 1–3 Months</h2>
            <p>
              A clogged filter forces your system to work harder, reducing efficiency and straining the blower motor. For homes with pets or allergies, change filters monthly. For standard homes, every 2–3 months is usually sufficient.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">2. Keep Your Outdoor Unit Clear</h2>
            <p>
              Make sure there is at least 2 feet of clearance around your outdoor AC or heat pump unit. Remove leaves, grass clippings, and debris regularly. In winter, gently remove snow buildup — but never chip ice off with sharp tools.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">3. Clean Your Vents and Registers</h2>
            <p>
              Dusty vents restrict airflow throughout your home. Vacuum them every few months and make sure none are blocked by furniture, rugs, or curtains. Balanced airflow keeps every room comfortable.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">4. Schedule Annual Professional Tune-Ups</h2>
            <p>
              Have a certified technician inspect your furnace in the fall and your AC in the spring. A professional tune-up catches small issues before they become expensive repairs and keeps your manufacturer's warranty valid.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">5. Check Your Thermostat Settings</h2>
            <p>
              A programmable or smart thermostat can save up to 10% on heating and cooling costs. Set it to lower temperatures when you're away or sleeping, and raise it before you return home.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">6. Inspect Your Ductwork for Leaks</h2>
            <p>
              Leaky ducts can waste up to 30% of your conditioned air. Look for disconnected sections, visible gaps, or areas where you feel air blowing from unexpected places. Sealing leaks improves comfort and lowers bills.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">7. Test Your Carbon Monoxide Detectors</h2>
            <p>
              Gas furnaces and boilers produce CO as a byproduct. Test your CO detectors monthly and replace batteries annually. This is a simple step that can save lives.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">8. Keep the Area Around Your Furnace Clear</h2>
            <p>
              Maintain at least 3 feet of clear space around your furnace. Never store flammable materials nearby. Keep the area dry and well-ventilated.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">9. Check Refrigerant Lines on Your AC</h2>
            <p>
              The insulation on refrigerant lines connecting your indoor and outdoor units can degrade over time. Check for damage or missing insulation. If lines are frosting over, call a technician — you may have a refrigerant issue.
            </p>

            <h2 className="font-heading text-2xl font-bold text-brand-navy mt-10 mb-4">10. Know When to Call a Professional</h2>
            <p>
              Strange noises, unusual smells, inconsistent temperatures, or a sudden spike in energy bills are all signs your system needs professional attention. Catching problems early always saves money in the long run.
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mt-12">
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">Ready to Book a Maintenance Visit?</h3>
              <p className="text-slate-500 mb-5">JP Home Comfort offers annual maintenance plans for homeowners across Ontario. Our licensed technicians will keep your system in top shape year-round.</p>
              <Link href="/contact" className="btn-red text-sm px-6 py-3">Book a Tune-Up</Link>
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