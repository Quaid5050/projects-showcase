import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBlobs } from "@/components/GradientBlobs";
import { services } from "@/data/services";
import cryo from "@/assets/cryotherapy.jpg";
import cryo1 from "@/assets/cryo-1.jpg";
import cryo2 from "@/assets/cryo-2.jpg";
import cryo3 from "@/assets/cryo-3.jpg";

// Sub-service images — place these files in src/assets/:
//   cryo-aesthetic.jpg  → image 3 (woman lying, body/abdomen treatment)
//   cryo-ortho.jpg      → image 1 (man on table, shoulder treatment)
//   cryo-sports.jpg     → image 4 (athlete, leg/ankle in gym)
//   cryo-postsurgery.jpg → image 2 (woman with bandaged knee)
const cryoImages: Record<string, string> = {
  aesthetic: new URL("../assets/cryo-aesthetic.jpg", import.meta.url).href,
  ortho: new URL("../assets/cryo-ortho.jpg", import.meta.url).href,
  sports: new URL("../assets/cryo-sports.jpg", import.meta.url).href,
  postsurgery: new URL("../assets/cryo-postsurgery.jpg", import.meta.url).href,
};

const subServices = [
  {
    id: "aesthetic",
    label: "Aesthetic",
    image: cryoImages.aesthetic,
    heading: "Aesthetic Cryotherapy",
    description:
      "Targeted cold therapy for visible aesthetic improvements including body sculpting, skin rejuvenation, and facial treatments.",
    services: [
      { name: "Cryo Slimming", desc: "Targeted fat reduction using controlled cold exposure to break down fat cells naturally." },
      { name: "Frotox", desc: "A non-invasive alternative to Botox using cryotherapy to temporarily reduce fine lines and tighten skin." },
      { name: "Skin Conditions", desc: "Helps manage skin concerns such as inflammation, redness, and uneven texture using precise cold application." },
    ],
    detailLink: "/services/cryo-aesthetic",
    bookLink: "/booking",
  },
  {
    id: "ortho",
    label: "Orthopaedic",
    image: cryoImages.ortho,
    heading: "Orthopaedic Cryotherapy",
    description:
      "Targeted cold therapy to support joint health, reduce inflammation, and aid recovery from orthopaedic conditions.",
    services: [
      { name: "Joint Pain Relief", desc: "Reduces inflammation and discomfort in joints affected by arthritis or chronic pain." },
      { name: "Injury Recovery", desc: "Accelerates healing of soft tissue injuries, sprains, and strains." },
      { name: "Post-Op Support", desc: "Supports recovery after orthopaedic procedures by reducing swelling and pain." },
    ],
    detailLink: "/services/cryo-ortho",
    bookLink: "/booking",
  },
  {
    id: "sports",
    label: "Sports",
    image: cryoImages.sports,
    heading: "Sports Cryotherapy",
    description:
      "Performance-focused cryotherapy designed to support athletic recovery, reduce muscle soreness, and enhance mobility.",
    services: [
      { name: "Muscle Recovery", desc: "Reduces delayed onset muscle soreness (DOMS) after intense training sessions." },
      { name: "Performance Support", desc: "Helps athletes maintain peak performance by accelerating between-session recovery." },
      { name: "Mobility Enhancement", desc: "Reduces stiffness and supports improved range of motion for better athletic output." },
    ],
    detailLink: "/services/cryo-sports",
    bookLink: "/booking",
  },
  {
    id: "postsurgery",
    label: "Post Surgery",
    image: cryoImages.postsurgery,
    heading: "Post-Surgery Cryotherapy",
    description:
      "Gentle, targeted cold therapy to support healing, reduce post-operative swelling, and manage pain after surgery.",
    services: [
      { name: "Swelling Reduction", desc: "Helps manage post-surgical swelling and fluid retention in treated areas." },
      { name: "Pain Management", desc: "Provides natural, drug-free pain relief during the post-operative recovery phase." },
      { name: "Healing Support", desc: "Stimulates circulation and the body's natural healing response to support faster recovery." },
    ],
    detailLink: "/services/cryo-postsurgery",
    bookLink: "/booking",
  },
];

// ── Experience data ───────────────────────────────────────────────────────────
const experiencePhases = [
  {
    phase: "Before Your Session",
    steps: [
      { title: "Consultation", desc: "You'll begin with a brief intake consultation to identify your treatment goals and target areas." },
      { title: "No Preparation Needed", desc: "No fasting, skin prep, or special clothing is required. Simply arrive as you are." },
      { title: "Comfortable Setup", desc: "You'll be seated or lying comfortably on a treatment bed while your clinician prepares the targeted area." },
    ],
  },
  {
    phase: "During Your Session",
    steps: [
      { title: "Targeted Cryotherapy Delivery", desc: "A handheld device delivers a controlled stream of pressurized CO₂ to the treatment area." },
      { title: "Cold, Not Painful", desc: "The treatment is non-invasive, contact-free, and generally well tolerated. You may feel a brief, intense cooling sensation." },
      { title: "Quick & Efficient", desc: "Sessions typically last a few minutes, allowing enough time to stimulate therapeutic effects without discomfort." },
    ],
  },
  {
    phase: "After Your Session",
    steps: [
      { title: "No Downtime", desc: "Return to your normal daily activities immediately — no restrictions or recovery period required." },
      { title: "Immediate Benefits", desc: "Many clients report reduced pain, inflammation, and improved mobility shortly after treatment." },
      { title: "Progressive Results", desc: "Visible and measurable improvements can begin after your first session and continue to build over time with repeated treatments." },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const CryotherapyDetail = () => {
  const [activeTab, setActiveTab] = useState("aesthetic");
  const active = subServices.find((s) => s.id === activeTab)!;

  return (
    <>
      <title>Localized Cryotherapy — Hands That Heal</title>
      <meta name="description" content="Hamilton's only provider of SubZero Cryotherapy. Aesthetic, orthopaedic, sports, and post-surgery treatments." />

      {/* ── Hero ── */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={cryo} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-deep-gradient opacity-85" />
        </div>
        <div className="container-luxe relative z-10 pt-16">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors">
            ← All Services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] max-w-4xl"
          >
            Localized Cryotherapy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-xl text-white/85 max-w-2xl font-display italic"
          >
            Experience targeted body sculpting, Frotox, and sports recovery for aesthetic improvement and overall wellness support. As Hamilton's only provider of SubZero Cryotherapy, we use controlled cold exposure to activate the body's natural healing response, delivering visible results from the very first session.
          </motion.p>

          {/* Trust anchors */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {[
              { icon: ShieldCheck, label: "Pain-free & non-invasive" },
              { icon: Zap,         label: "No needles, no downtime" },
              { icon: Sparkles,    label: "Quick sessions, visible results" },
            ].map((a) => (
              <div key={a.label} className="flex items-center gap-2 glass rounded-full px-5 py-2.5">
                <a.icon className="h-4 w-4 text-primary-glow shrink-0" />
                <span className="text-sm text-white font-medium">{a.label}</span>
              </div>
            ))}
          </motion.div>

          <Button asChild variant="gold" size="lg" className="mt-10">
            <Link to="/booking">Book This Treatment</Link>
          </Button>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <GradientBlobs />
        <div className="container-luxe relative grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* What is it */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Advanced Cold Therapy</p>
              <h2 className="font-display text-3xl md:text-4xl mb-6">What Is Localized Cryotherapy?</h2>
              <p className="text-foreground leading-relaxed mt-4">
                Localized cryotherapy is a precisely targeted application of ultra-cold CO₂ gas to a specific area of the body, delivering concentrated therapeutic benefits exactly where it's needed!
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Unlike whole-body cryo chambers or traditional ice packs, the America Cryo's SubZero handheld device delivers short bursts of pressurized CO₂ at -110°F, rapidly cooling targeted areas of the body. This localized cryotherapy triggers natural physiological responses that support body sculpting (cryoslimming), visible aesthetic improvement, and fast relief from pain and inflammation.
              </p>
            </div>

            {/* Sub-service tabs */}
            <div>
              <h2 className="font-display text-3xl mb-6">Our Cryotherapy Services</h2>

              {/* Tab buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                {subServices.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(s.id)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === s.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-secondary text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="bg-card rounded-3xl overflow-hidden shadow-soft"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={active.image}
                      alt={active.heading}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => { (e.target as HTMLImageElement).src = cryo; }}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl mb-3">{active.heading}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{active.description}</p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {active.services.map((sv) => (
                        <div key={sv.name} className="glass rounded-2xl p-5">
                          <h4 className="font-medium text-foreground mb-2">{sv.name}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{sv.desc}</p>
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="hero" size="lg" className="mt-6">
                      <Link to={active.bookLink}>Book {active.label} Session <ArrowRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="mt-6 ml-3">
                      <Link to={active.detailLink}>View Full Details</Link>
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="font-display text-3xl mb-2">Benefits:</h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  { title: "Faster Recovery Time", desc: "Get instant relief with advanced cryo-technology that helps reduce recovery time faster than traditional methods." },
                  { title: "Enhanced Performance", desc: "SubZero supports quicker recovery, helping athletes perform at their peak more consistently." },
                  { title: "Reduced Pain & Inflammation", desc: "Helps ease muscle soreness and inflammation caused by intense training or sports." },
                  { title: "Improved Mobility & Flexibility", desc: "Reduces stiffness and supports smoother movement for better overall performance." },
                ].map((b) => (
                  <div key={b.title} className="glass rounded-2xl p-5">
                    <p className="font-medium text-foreground mb-1">{b.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery mosaic */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.6 }}
                  className="sm:col-span-2 sm:row-span-2 rounded-3xl overflow-hidden shadow-elegant"
                >
                  <img src={cryo1} alt="Cryotherapy treatment" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-3xl overflow-hidden shadow-soft aspect-square"
                >
                  <img src={cryo2} alt="Cryotherapy treatment" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-3xl overflow-hidden shadow-soft aspect-square"
                >
                  <img src={cryo3} alt="Cryotherapy treatment" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                </motion.div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="font-display text-3xl mb-6">Treatment Experience</h2>              <div className="space-y-8">
                {experiencePhases.map((phase) => (
                  <div key={phase.phase}>
                    <h3 className="font-display text-xl text-primary mb-4">{phase.phase}</h3>
                    <div className="space-y-3">
                      {phase.steps.map((step) => (
                        <div key={step.title} className="glass rounded-2xl p-5">
                          <p className="font-medium text-foreground mb-1">{step.title}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="font-display text-3xl mb-8">Frequently Asked</h2>
              <div className="bg-card rounded-3xl shadow-soft divide-y divide-border">
                {[
                  { q: "Does localized cryotherapy hurt?", a: "Most clients feel a cold, tingling, or mild numbness sensation during treatment. The SubZero system is designed to be comfortable, targeting only the treatment area while keeping surrounding tissue safe." },
                  { q: "How many sessions will I need?", a: "Results vary depending on your goals and target areas, but most clients see noticeable improvement after 4–6 sessions. Your plan can be tailored to achieve gradual, natural-looking results." },
                  { q: "Is it safe for all areas of the body?", a: "Yes! Localized cryotherapy with SubZero is safe for areas like the abdomen, thighs, arms, and love handles, and it is non-invasive with no downtime." },
                ].map((f, i) => (
                  <details key={i} className="group px-6 py-5 cursor-pointer">
                    <summary className="font-display text-lg list-none flex justify-between items-center">
                      {f.q}
                      <span className="ml-4 text-primary group-open:rotate-45 transition-transform duration-200 text-xl leading-none">+</span>
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 self-start space-y-6">
            <div className="bg-deep-gradient rounded-3xl p-6 sm:p-8 text-primary-foreground shadow-elegant">
              <p className="text-xs uppercase tracking-[0.3em] text-primary-glow mb-2">Ready to start?</p>
              <h3 className="font-display text-3xl">Relax Your Body, Restore with Hands That Heal</h3>
              <p className="mt-3 text-primary-foreground/80 text-sm">Book a private consultation today.</p>
              <Button asChild variant="gold" size="lg" className="mt-6 w-full">
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="mt-3 w-full">
                <Link to="/contact">Ask a Question</Link>
              </Button>
            </div>

            {/* Services navigation card */}
            <div className="bg-card rounded-3xl shadow-soft overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <h4 className="font-display text-xl text-primary-foreground text-center">Services</h4>
              </div>
              <div className="p-4 space-y-2">
                {/* Current service highlighted */}
                <Link
                  to="/services/localized-cryotherapy"
                  className="flex items-center justify-center w-full px-4 py-4 rounded-2xl bg-primary text-primary-foreground font-medium text-sm text-center border-2 border-primary/30 transition-all"
                >
                  Cryotherapy
                </Link>
                {/* Other services */}
                {services.filter(s => s.slug !== "localized-cryotherapy").map(s => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="flex items-center justify-center w-full px-4 py-4 rounded-2xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-medium text-sm text-center transition-all duration-200"
                  >
                    {s.title.split("(")[0].trim()}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16">
        <div className="container-luxe">
          <div className="relative overflow-hidden rounded-[2rem] bg-deep-gradient p-6 sm:p-12 md:p-16 shadow-elegant">
            <div className="blob bg-primary-glow h-[500px] w-[500px] -top-40 -right-20 opacity-30" />
            <div className="blob bg-accent h-[400px] w-[400px] -bottom-40 -left-20 opacity-20" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground leading-[1.05]">
                Ready to Experience the Difference?
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Whether you're managing a chronic condition, recovering from surgery, optimizing athletic performance, or pursuing a non-invasive aesthetic solution, Localized Cryotherapy with the SubZero delivers clinically meaningful results, fast.
              </p>
              <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
                Your body has everything it needs to heal. At Hands that Heal, we just accelerate the process!
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="gold" size="xl">
                  <Link to="/booking">Book Your Cryo Session <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to="/contact">Get a Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CryotherapyDetail;
