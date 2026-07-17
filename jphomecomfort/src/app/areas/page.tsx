import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const areas = [
  // GTA Core
  { city: "Toronto", areas: "Downtown, North York, Scarborough, Etobicoke, East York" },
  { city: "Mississauga", areas: "Port Credit, Streetsville, Meadowvale, Erin Mills" },
  { city: "Brampton", areas: "Bramalea, Heart Lake, Springdale, Castlemore" },
  { city: "Markham", areas: "Unionville, Thornhill, Cornell, Milliken" },
  { city: "Vaughan", areas: "Woodbridge, Maple, Kleinburg, Concord" },
  { city: "Richmond Hill", areas: "Oak Ridges, Jefferson, Mill Pond, Bayview" },
  { city: "Oakville", areas: "Downtown, Bronte, Glen Abbey, Palermo" },
  { city: "Burlington", areas: "Downtown, Aldershot, Tyandaga, Orchard" },
  { city: "Hamilton", areas: "Downtown, Ancaster, Dundas, Stoney Creek" },
  { city: "Ajax", areas: "Downtown, Pickering Village, Westney Heights" },
  { city: "Pickering", areas: "Bay Ridges, Liverpool, Dunbarton, Rouge" },
  { city: "Oshawa", areas: "Downtown, North, South, Kedron, Taunton" },
  { city: "Whitby", areas: "Downtown, Brooklin, Blue Grass Meadows" },
  { city: "Milton", areas: "Downtown, Bronte Meadows, Harrison, Scott" },
  { city: "Newmarket", areas: "Downtown, Upper Canada, Stonehaven" },
  { city: "Aurora", areas: "Downtown, Bayview, St Andrews, Highland Gate" },
  // East of GTA
  { city: "Clarington", areas: "Bowmanville, Courtice, Newcastle, Orono" },
  { city: "Durham Region", areas: "Port Perry, Brooklin, Uxbridge, Beaverton" },
  { city: "Cobourg", areas: "Downtown, East End, West End" },
  { city: "Port Hope", areas: "Downtown, Campbellford, Norwood" },
  { city: "Peterborough", areas: "Downtown, East City, Ashburnham, Monaghan" },
  { city: "Belleville", areas: "Downtown, East Hill, West End, Quinte West" },
  { city: "Kingston", areas: "Downtown, East End, West End, Cataraqui" },
  // West of GTA
  { city: "Halton Hills", areas: "Georgetown, Acton, Limehouse" },
  { city: "Guelph", areas: "Downtown, Stone Road, Kortright, Pineridge" },
  { city: "Cambridge", areas: "Downtown, Galt, Preston, Hespeler" },
  { city: "Kitchener", areas: "Downtown, Doon, Chicopee, Forest Heights" },
  { city: "Waterloo", areas: "Uptown, Beechwood, Columbia, University" },
  { city: "Brantford", areas: "Downtown, Brant, East Ward, Holmedale" },
  { city: "Woodstock", areas: "Downtown, North, East, West" },
  { city: "London", areas: "Downtown, South, East, North, Masonville" },
  { city: "Chatham", areas: "Downtown, Chatham-Kent, Wallaceburg, Tilbury" },
  { city: "Windsor", areas: "Downtown, East End, South Windsor, Tecumseh" },
];

export default function AreasPage() {
  return (
    <>
      <PageHeader title="Service" highlight="Areas" subtitle="Professional HVAC services across Ontario — from Windsor to Kingston." />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Coverage</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
              Serving <span className="text-brand-red">All of Ontario</span> — Windsor to Kingston
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Fast response times. No travel surcharge. Same-day service available across Ontario.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {areas.map(a => (
              <div key={a.city} className="bg-white rounded-xl border border-slate-200 p-5 hover:border-brand-cyan hover:shadow-md transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" className="flex-shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"/><circle cx="12" cy="9" r="3"/></svg>
                  <h3 className="font-heading font-bold text-brand-navy group-hover:text-brand-red transition-colors">{a.city}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{a.areas}</p>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="mt-16 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.96122797358!2d-79.87438495!3d43.6534817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15eaa5c5e039%3A0x9a426b00c02df3e8!2sBrampton%2C%20ON!5e0!3m2!1sen!2sca!4v1718000000000"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JP Home Comfort Service Area Map"
            />
          </div>

          {/* Badges */}
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {["30-Minute Average Response","No Travel Surcharge","Same-Day Service","Licensed & Insured Technicians"].map(b => (
              <div key={b} className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0099D6" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M8 12L11 15L16 9"/></svg>
                <span className="text-slate-600 font-semibold text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4">Not sure if we service your area?</h2>
          <p className="text-slate-300 text-lg mb-8">Give us a call. We are always expanding our coverage across Ontario.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-red text-lg px-8 py-4">Contact Us</Link>
            <a href="tel:+16479485859" className="btn-outline-white text-lg px-8 py-4 text-center">+1 647-948-5859</a>
          </div>
        </div>
      </section>
    </>
  );
}