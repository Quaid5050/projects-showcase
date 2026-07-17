"use client";

const UNSPLASH = "https://images.unsplash.com";

const services = [
  {
    num: "01",
    title: "PPF Service",
    sub: "Invisible Paint Protection Film",
    img: `/ppf.webp`,
    desc: "Our Paint Protection Film is the ultimate shield for your vehicle's most vulnerable panels. Applied by certified technicians, this self-healing, optically clear film absorbs rock chips, road debris, and minor abrasions before they ever touch your paint. Invisible from arm's length, unstoppable up close.",
    features: [
      "Self-healing top coat technology",
      "Optically clear — invisible finish",
      "Full-front, partial, or full-body packages",
      "10-year manufacturer warranty",
      "Hydrophobic surface for easy cleaning",
    ],
  },
  {
    num: "02",
    title: "Ceramic Coating",
    sub: "Showroom Shine That Endures",
    img: `/ceramic.webp`,
    desc: "Professional-grade nano-ceramic coatings bond to your paintwork at a molecular level, creating a semi-permanent layer of protection against UV degradation, oxidation, bird droppings, water spots, and light scratches. We prep every panel to perfection before application, and cure the coating under controlled conditions for maximum durability.",
    features: [
      "9H hardness nano-ceramic formula",
      "Full paint decontamination prep",
      "Wheel face and brake caliper coating",
      "5-year protection warranty",
      "Graphene-infused upgrade available",
    ],
  },
  {
    num: "03",
    title: "Dashcams",
    sub: "Professional Hardwired Setup",
    img: `/dashcam.webp`,
    desc: "Protect yourself on the road with a professionally installed dashcam. We hardwire front and rear cameras with clean, hidden cable routing through your headliner and trim panels. Parking mode enabled so your camera stays active even when you walk away. We carry top brands including BlackVue, Thinkware, and Viofo.",
    features: [
      "Front and rear camera installation",
      "Hardwired with parking mode",
      "Clean hidden cable routing",
      "BlackVue, Thinkware, Viofo brands",
      "Cloud-ready and GPS enabled",
    ],
  },
  {
    num: "04",
    title: "CarPlay Integration",
    sub: "Factory-Fit Apple CarPlay",
    img: `${UNSPLASH}/photo-1492144534655-ae79c964c9d7?w=800&q=80`,
    desc: "Factory-fit Apple CarPlay installation with clean wiring and seamless integration. A modern cockpit that looks OEM from day one. Our technicians route every cable invisibly through factory channels, delivering a finished result indistinguishable from a factory-optioned system.",
    features: [
      "OEM-quality wiring and integration",
      "Wireless CarPlay available",
      "Android Auto compatible units",
      "Steering wheel control retention",
      "Reverse camera integration",
    ],
  },
  {
    num: "05",
    title: "Ambient Lights",
    sub: "Multi-Zone Custom LED Lighting",
    img: `https://images.unsplash.com/photo-1776639520962-dad59bd15197?q=80`,
    desc: "Multi-zone custom LED lighting with smart colour control. Set the mood, sync with music, and transform your interior into something extraordinary. Available in 64+ colour options with app control, our ambient light kits are fitted with factory-level precision and zero visible wiring.",
    features: [
      "64+ colour options via app",
      "Music sync mode",
      "Zero visible wiring install",
      "Door, footwell, and dash zones",
      "OEM-style integration",
    ],
  },
  {
    num: "06",
    title: "Wheel Lights",
    sub: "Unmissable Day or Night",
    img: `https://images.unsplash.com/photo-1615775918890-040745dd38d5?q=80`,
    desc: "Vibration-proof, weather-resistant LED kits that make your rims unmissable — day or night, rain or shine. Each kit is balanced to avoid any wheel wobble, rated IP67 for waterproofing, and designed to last the full life of your tyres without attention.",
    features: [
      "IP67 waterproof rated",
      "Balanced for zero vibration",
      "Multiple colour and flash modes",
      "Easy removal for tyre changes",
      "12-month warranty included",
    ],
  },
  {
    num: "07",
    title: "Starlights",
    sub: "Your Private Galaxy Every Drive",
    img: `https://images.unsplash.com/photo-1707085301609-10a63d3f0a8e?q=80`,
    desc: "Thousands of hand-placed fibre-optic LEDs installed in your headliner create a breathtaking starfield effect across the entire roof. Each fibre is individually placed and trimmed flush with the headliner fabric, giving an OEM appearance with an otherworldly result.",
    features: [
      "Hand-placed fibre-optic strands",
      "Twinkle effect with RGB controller",
      "Full headliner or partial panel",
      "No visible hardware or wiring",
      "Custom constellation layouts available",
    ],
  },
  {
    num: "08",
    title: "Tire Services",
    sub: "Precision Mounting and Balancing",
    img: `/tire.webp`,
    desc: "Our certified technicians use state-of-the-art mounting and balancing equipment to ensure every tyre is fitted to OEM torque specifications. We handle everything from economy commuters to exotic supercars, with the same obsessive attention to detail on every single job.",
    features: [
      "Computer spin balancing on all axles",
      "OEM torque spec compliance",
      "Road force balancing available",
      "Valve stem inspection and replacement",
      "TPMS reset and calibration",
    ],
  },
  {
    num: "09",
    title: "Ceramic Tint",
    sub: "99% UV Block, Zero Signal Interference",
    img: `/tint.webp`,
    desc: "Our ceramic and carbon window films block up to 99% of UV radiation and dramatically reduce cabin heat without compromising visibility or signal. We cut every film on-site using plotted templates for a perfect fit, applied by hand in a dust-controlled environment. Legal VLT levels matched for every region.",
    features: [
      "Ceramic and carbon film options",
      "99% UV block on all films",
      "Heat rejection up to 65%",
      "Plotted template precision cutting",
      "Lifetime delamination warranty",
    ],
  },
  {
    num: "10",
    title: "Tail Lights",
    sub: "Bold Smoked OEM-Quality Finish",
    img: `/light.webp`,
    desc: "Smoked or custom-tinted tail lights with an OEM-quality finish — a bold, distinctive rear presence that turns heads everywhere. Applied using professional-grade tint films or custom vinyl overlays, finished with a clear protective layer for longevity in all weather conditions.",
    features: [
      "Smoked, red, or custom tint options",
      "OEM-quality film application",
      "UV-protected clear coat finish",
      "Reversible process — no damage",
      "Pair with full exterior tint package",
    ],
  },
  {
    num: "11",
    title: "Car Protection",
    sub: "Complete Exterior and Interior Defence",
    img: `/protect.webp`,
    desc: "Complete exterior and interior protection packages — paint correction, sealants, and coatings for all-year defence. From a single panel touch-up to a full multi-stage correction and ceramic coating, our protection packages keep your vehicle looking factory-fresh in every season.",
    features: [
      "Single and multi-stage paint correction",
      "Sealant and wax protection options",
      "Interior fabric and leather guard",
      "Engine bay detailing available",
      "Bundled PPF and ceramic packages",
    ],
  },
  {
    num: "12",
    title: "Custom Upgrades",
    sub: "Vinyl Wraps, Blackouts, and More",
    img: `/upg.webp`,
    desc: "Vinyl wraps, logo blackouts, full interior makeovers — if you can imagine it for your build, we can execute it. Our custom shop handles everything from partial accent wraps to full-vehicle colour changes, chrome deletes, and bespoke interior retrimming.",
    features: [
      "Full and partial vinyl wrap",
      "Chrome delete and blackout packages",
      "Custom interior retrim",
      "Logo and emblem blackout",
      "Colour-change consultation included",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main style={{ background: "#080808", paddingTop: "100px" }}>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.05)", minHeight: "420px", display: "flex", alignItems: "center" }}>
  <div style={{ position: "absolute", inset: 0, backgroundImage: `url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80)`, backgroundSize: "cover", backgroundPosition: "center" }} />
  <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.82)" }} />
  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(8,8,8,0.95) 40%,rgba(8,8,8,0.4) 100%)" }} />
  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,transparent,#e8001d 30%,#e8001d 70%,transparent)" }} />
  <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "80px 60px 100px", width: "100%" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "'Orbitron',sans-serif", fontSize: "13px", letterSpacing: "6px", color: "#e8001d", textTransform: "uppercase", marginBottom: "20px" }}>
            <span style={{ width: "28px", height: "1px", background: "#e8001d", display: "block" }} />What We Do
          </span>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(60px,8vw,110px)", lineHeight: .9, color: "#f0f0f0", letterSpacing: "2px", marginBottom: "24px" }}>
            OUR<br /><span style={{ color: "#e8001d" }}>SERVICES</span>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(240,240,240,0.88)", letterSpacing: "1.5px", maxWidth: "500px", lineHeight: 1.85 }}>
            Twelve premium services. One obsession: making sure every vehicle that leaves our shop is better than when it arrived.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section style={{ padding: "0 60px 120px", maxWidth: "1400px", margin: "0 auto" }}>
        {services.map((s, idx) => (
          <div key={s.num} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "80px 0" }} className="svc-row">
            {/* Image */}
            <div style={{ order: idx % 2 === 0 ? 1 : 2, position: "relative", overflow: "hidden", minHeight: "420px", background: "#111" }} className="svc-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.6) saturate(1.2)", transition: "transform .65s ease,filter .4s" }}
                className="img-zoom"
                onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="img-overlay" />
              <div style={{ position: "absolute", top: "24px", left: "24px", fontFamily: "'Orbitron',sans-serif", fontSize: "42px", fontWeight: 900, color: "rgba(232,0,29,0.15)", letterSpacing: "2px" }}>{s.num}</div>
            </div>
            {/* Content */}
            <div style={{ order: idx % 2 === 0 ? 2 : 1, background: "#0d0d0d", padding: "60px", display: "flex", flexDirection: "column", justifyContent: "center" }} className="svc-content">
              <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "13px", letterSpacing: "5px", color: "#e8001d", textTransform: "uppercase", marginBottom: "12px" }}>{s.sub}</span>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(36px,3.5vw,52px)", color: "#f0f0f0", marginBottom: "20px", lineHeight: .95 }}>{s.title}</h2>
              <div style={{ width: "60px", height: "2px", background: "#e8001d", marginBottom: "24px" }} />
              <p style={{ fontSize: "16px", color: "rgba(240,240,240,0.88)", lineHeight: 1.85, marginBottom: "28px" }}>{s.desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {s.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "rgba(240,240,240,0.88)" }}>
                    <span style={{ width: "20px", height: "20px", border: "1px solid #e8001d", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#e8001d" strokeWidth="1.5"><path d="M2 5 L4 7 L8 3" /></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <style>{`
        .img-zoom:hover { transform: scale(1.04); filter: brightness(0.75) saturate(1.4) !important; }
        .img-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(232,0,29,0.08) 0%, transparent 60%); }
        @media(max-width:900px) {
          .svc-row { grid-template-columns: 1fr !important; }
          .svc-img { order: 1 !important; min-height: 260px !important; }
          .svc-content { order: 2 !important; padding: 36px 24px !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </main>
  );
}