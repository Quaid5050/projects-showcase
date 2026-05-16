import { Link, useLocation, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GradientBlobs } from "@/components/GradientBlobs";
import cryo from "@/assets/service-cryo.jpg";
import cryoAesthetic from "@/assets/cryo-aesthetic.jpg";
import cryoOrtho from "@/assets/cryo-ortho.jpg";
import cryoSports from "@/assets/cryo-sports.jpg";
import cryoPostsurgery from "@/assets/cryo-postsurgery.jpg";

// ── GALLERY IMAGES ────────────────────────────────────────────────────────────
// Place 3 images per sub-service in src/assets/ with these exact filenames:
//
//   Aesthetic:    cryo-aesthetic-1.jpg  cryo-aesthetic-2.jpg  cryo-aesthetic-3.jpg
//   Orthopaedic:  cryo-ortho-1.jpg      cryo-ortho-2.jpg      cryo-ortho-3.jpg
//   Sports:       cryo-sports-1.jpg     cryo-sports-2.jpg     cryo-sports-3.jpg
//   Post-Surgery: cryo-postsurgery-1.jpg cryo-postsurgery-2.jpg cryo-postsurgery-3.jpg
//
// Then uncomment the imports below and remove the placeholder strings in galleryMap.
// ─────────────────────────────────────────────────────────────────────────────
import cryoAesthetic1 from "@/assets/cryo-aesthetic-1.jpg";
import cryoAesthetic2 from "@/assets/cryo-aesthetic-2.jpg";
import cryoAesthetic3 from "@/assets/cryo-aesthetic-3.jpg";
import cryoOrtho1     from "@/assets/cryo-ortho-1.jpg";
import cryoOrtho2     from "@/assets/cryo-ortho-2.jpg";
import cryoOrtho3     from "@/assets/cryo-ortho-3.jpg";
import cryoSports1    from "@/assets/cryo-sports-1.jpg";
import cryoSports2    from "@/assets/cryo-sports-2.jpg";
import cryoSports3    from "@/assets/cryo-sports-3.jpg";
import cryoPost1      from "@/assets/cryo-postsurgery-1.jpg";
import cryoPost2      from "@/assets/cryo-postsurgery-2.jpg";
import cryoPost3      from "@/assets/cryo-postsurgery-3.jpg";

const galleryMap: Record<string, [string, string, string]> = {
  "cryo-aesthetic":   [cryoAesthetic1, cryoAesthetic2, cryoAesthetic3],
  "cryo-ortho":       [cryoOrtho1,     cryoOrtho2,     cryoOrtho3],
  "cryo-sports":      [cryoSports1,    cryoSports2,    cryoSports3],
  "cryo-postsurgery": [cryoPost1,      cryoPost2,      cryoPost3],
};

const heroImages: Record<string, string> = {
  "cryo-aesthetic": cryoAesthetic,
  "cryo-ortho": cryoOrtho,
  "cryo-sports": cryoSports,
  "cryo-postsurgery": cryoPostsurgery,
};

type Step = { title: string; desc: string };
type Phase = { phase: string; steps: Step[] };
type FAQ = { q: string; a: string };
type Stat = { value: string; label: string };
type SubService = { name: string; slug?: string; desc: string };

type CryoSubService = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  stats?: Stat[];
  subServices?: SubService[];
  subServicesHeading?: string;
  benefits: string[];
  forWho: string[];
  experience: Phase[];
  faqs: FAQ[];
  cta: { heading: string; body: string };
};

const subServiceData: CryoSubService[] = [
  {
    slug: "cryo-aesthetic",
    title: "Aesthetic Cryotherapy",
    tagline: "Non-invasive cold therapy for visible aesthetic improvements — body sculpting, skin rejuvenation, and facial treatments.",
    description: [
      "At Hands That Heal, we bring you non-invasive body sculpting, facial rejuvenation, and skin healing in Hamilton using advanced SubZero CO₂ technology. Safe, effective, and completely non-surgical.",
    ],
    stats: [
      { value: "5 min", label: "Per session" },
      { value: "1 inch", label: "Avg. Girth Reduction" },
      { value: "−110°F", label: "Treatment" },
      { value: "Zero", label: "Downtime" },
    ],
    subServicesHeading: "Body Sculpting - Only at Hands That Heal",
    subServices: [
      {
        name: "Cryo Slimming",
        slug: "cryo-slimming",
        desc: "Tired of stubborn fat that doesn't seem to go away? At Hands That Heal, our Cryo Slimming treatment uses the SubZero device to freeze and permanently eliminate fat cells in specific areas. Many of our clients notice a full one-inch reduction in girth after their very first session, with zero pain, zero surgery and zero downtime.",
      },
      {
        name: "Frotox Facial Treatment",
        slug: "frotox",
        desc: "Imagine achieving the youthful, refreshed look of Botox without a single needle. At Hands That Heal, our Frotox facial is a signature non-invasive alternative to injectable treatments. Using SubZero cryotherapy, we naturally relax facial muscles and stimulate collagen production, helping reduce the appearance of wrinkles and fine lines.",
      },
      {
        name: "Skin Conditions",
        slug: "skin-conditions",
        desc: "Living with chronic skin conditions is exhausting and many treatments only mask the symptoms. At Hands That Heal, our cryotherapy approach addresses skin conditions at their root. By cooling the skin, flushing toxins from the bloodstream and reducing inflammation, our SubZero treatments help your body heal itself naturally and without harsh chemicals.",
      },
    ],
    benefits: [
      "Non-invasive with no needles or surgery",
      "Visible results from the first session",
      "Targets fat, fine lines, and skin conditions",
      "No downtime — return to daily routine immediately",
      "Safe and comfortable for all skin types",
    ],
    forWho: [
      "Looking for non-surgical body sculpting or slimming",
      "Want to reduce fine lines without Botox injections",
      "Dealing with skin inflammation, redness, or uneven texture",
      "Prefer clean, non-invasive aesthetic treatments",
    ],
    experience: [
      {
        phase: "Before Your Session",
        steps: [
          { title: "Consultation", desc: "A brief consultation to understand your aesthetic goals and identify the right treatment focus." },
          { title: "No Preparation Needed", desc: "No special prep required — arrive as you are." },
          { title: "Comfortable Setup", desc: "You'll be comfortably positioned while the clinician prepares the targeted area." },
        ],
      },
      {
        phase: "During Your Session",
        steps: [
          { title: "Targeted CO₂ Application", desc: "The SubZero device delivers controlled cold to the treatment area for precise aesthetic results." },
          { title: "Quick & Comfortable", desc: "Sessions are short, non-invasive, and generally well tolerated." },
          { title: "Monitored Throughout", desc: "Your clinician monitors the treatment for comfort and effectiveness." },
        ],
      },
      {
        phase: "After Your Session",
        steps: [
          { title: "No Downtime", desc: "Return to your daily activities immediately after treatment." },
          { title: "Immediate Improvement", desc: "Many clients notice visible changes right after their first session." },
          { title: "Progressive Results", desc: "Results continue to improve with repeated sessions over time." },
        ],
      },
    ],
    faqs: [
      { q: "What is Cryo Slimming?", a: "Cryo Slimming uses controlled cold to target and break down fat cells in specific areas, helping reduce localised fat without surgery or downtime." },
      { q: "What is Frotox?", a: "Frotox is a non-invasive alternative to Botox that uses cryotherapy to temporarily tighten skin and reduce the appearance of fine lines." },
      { q: "How many sessions do I need?", a: "Most clients see visible improvement after 1–3 sessions. A personalised plan will be recommended based on your goals." },
    ],
    cta: {
      heading: "Ready to Reveal Your Best Look?",
      body: "Whether you're targeting stubborn fat, refreshing your skin, or exploring non-invasive facial rejuvenation, Aesthetic Cryotherapy at Hands That Heal delivers visible results safely and comfortably.\n\nBook your session today and experience the difference.",
    },
  },
  {
    slug: "cryo-ortho",
    title: "Orthopaedic Cryotherapy",
    tagline: "Targeted cold therapy to support joint health, reduce inflammation, and aid recovery from orthopaedic conditions.",
    description: [
      "Orthopaedic Cryotherapy uses the SubZero device to deliver precise, controlled cold to joints and soft tissue areas affected by pain, inflammation, or injury. It's a non-invasive, drug-free approach to managing orthopaedic conditions.",
      "At Hands That Heal, this treatment is designed for individuals dealing with chronic joint pain, recovering from injuries, or seeking post-operative support — all without medication or invasive procedures.",
    ],
    benefits: [
      "Reduces joint inflammation and swelling",
      "Provides natural, drug-free pain relief",
      "Supports faster recovery from injuries",
      "Non-invasive with no downtime",
      "Safe for chronic and acute conditions",
    ],
    forWho: [
      "Dealing with chronic joint pain or arthritis",
      "Recovering from soft tissue injuries or sprains",
      "Seeking post-operative pain and swelling relief",
      "Looking for a non-medication pain management option",
    ],
    experience: [
      {
        phase: "Before Your Session",
        steps: [
          { title: "Intake Consultation", desc: "A brief discussion to understand your condition, pain areas, and treatment goals." },
          { title: "No Preparation Needed", desc: "No special prep required — arrive comfortably as you are." },
          { title: "Comfortable Positioning", desc: "You'll be positioned to allow easy access to the target joint or area." },
        ],
      },
      {
        phase: "During Your Session",
        steps: [
          { title: "Precise Cold Application", desc: "The SubZero device targets the affected joint or tissue with controlled CO₂ cold." },
          { title: "Non-Invasive & Comfortable", desc: "No needles, no contact — just a brief, intense cooling sensation." },
          { title: "Monitored for Safety", desc: "Your clinician ensures the treatment is applied safely and effectively." },
        ],
      },
      {
        phase: "After Your Session",
        steps: [
          { title: "No Downtime", desc: "Resume normal activities immediately after treatment." },
          { title: "Reduced Pain & Swelling", desc: "Many clients experience noticeable relief shortly after their session." },
          { title: "Cumulative Benefits", desc: "Regular sessions provide progressive improvement in pain management and mobility." },
        ],
      },
    ],
    faqs: [
      { q: "Is cryotherapy safe for arthritis?", a: "Yes. Localized cryotherapy is a gentle, non-invasive option that can help reduce inflammation and discomfort associated with arthritis." },
      { q: "Can it replace physiotherapy?", a: "Cryotherapy is a complementary treatment. It works well alongside physiotherapy and other orthopaedic care to support recovery." },
      { q: "How quickly will I feel relief?", a: "Many clients notice reduced pain and swelling shortly after their first session, with progressive improvement over multiple treatments." },
    ],
    cta: {
      heading: "Ready to Move Without Pain?",
      body: "Whether you're managing a chronic condition or recovering from an injury, Orthopaedic Cryotherapy at Hands That Heal offers a safe, effective, and drug-free path to relief.\n\nBook your session today.",
    },
  },
  {
    slug: "cryo-sports",
    title: "Sports Cryotherapy",
    tagline: "Performance-focused cryotherapy to support athletic recovery, reduce muscle soreness, and enhance mobility.",
    description: [
      "Sports Cryotherapy uses targeted cold therapy to accelerate muscle recovery, reduce inflammation, and support peak athletic performance. The SubZero device delivers precise CO₂ cold to overworked muscles and joints, helping athletes recover faster between sessions.",
      "At Hands That Heal, this treatment is tailored for athletes and active individuals who want to maintain performance, reduce soreness, and improve mobility — without downtime.",
    ],
    benefits: [
      "Faster muscle recovery after training",
      "Reduces delayed onset muscle soreness (DOMS)",
      "Supports peak athletic performance",
      "Improves mobility and range of motion",
      "Non-invasive with no downtime",
    ],
    forWho: [
      "Athletes looking to recover faster between sessions",
      "Active individuals dealing with muscle soreness",
      "Those wanting to improve mobility and flexibility",
      "Anyone seeking a performance edge without medication",
    ],
    experience: [
      {
        phase: "Before Your Session",
        steps: [
          { title: "Performance Consultation", desc: "A brief discussion about your training routine, recovery goals, and target muscle groups." },
          { title: "No Preparation Needed", desc: "No special prep required — arrive as you are after training." },
          { title: "Comfortable Setup", desc: "You'll be positioned comfortably while the clinician prepares the treatment area." },
        ],
      },
      {
        phase: "During Your Session",
        steps: [
          { title: "Targeted Muscle Recovery", desc: "The SubZero device delivers controlled cold to overworked muscles and joints." },
          { title: "Quick & Efficient", desc: "Sessions are fast and focused, designed to fit into your training schedule." },
          { title: "Comfortable Experience", desc: "Non-invasive and generally well tolerated, even on sensitive muscle groups." },
        ],
      },
      {
        phase: "After Your Session",
        steps: [
          { title: "No Downtime", desc: "Return to training or daily activities immediately after treatment." },
          { title: "Reduced Soreness", desc: "Many athletes notice reduced muscle soreness and improved mobility shortly after." },
          { title: "Progressive Performance", desc: "Regular sessions support consistent recovery and long-term performance improvement." },
        ],
      },
    ],
    faqs: [
      { q: "When should I book a session relative to training?", a: "Ideally within a few hours after intense training for best recovery results. Your clinician can advise on optimal timing." },
      { q: "How often should athletes use cryotherapy?", a: "This depends on your training intensity. Many athletes benefit from 2–3 sessions per week during heavy training periods." },
      { q: "Is it suitable for all sports?", a: "Yes. Sports Cryotherapy is beneficial for any sport or physical activity that involves repetitive muscle use or high-intensity effort." },
    ],
    cta: {
      heading: "Ready to Train Harder, Recover Faster?",
      body: "Whether you're a competitive athlete or an active individual, Sports Cryotherapy at Hands That Heal helps you recover smarter and perform at your best.\n\nBook your recovery session today.",
    },
  },
  {
    slug: "cryo-postsurgery",
    title: "Post-Surgery Cryotherapy",
    tagline: "Gentle, targeted cold therapy to support healing, reduce post-operative swelling, and manage pain after surgery.",
    description: [
      "Post-Surgery Cryotherapy uses the SubZero device to deliver precise, controlled cold to post-operative areas, helping manage swelling, reduce pain, and support the body's natural healing process — without medication or invasive procedures.",
      "At Hands That Heal, this treatment is designed for individuals in the recovery phase following surgical procedures, offering a safe, gentle, and effective complement to post-operative care.",
    ],
    benefits: [
      "Reduces post-surgical swelling and fluid retention",
      "Provides natural, drug-free pain relief",
      "Supports faster healing and tissue recovery",
      "Non-invasive and gentle on healing tissue",
      "No downtime — safe to use during recovery",
    ],
    forWho: [
      "Recovering from surgical procedures",
      "Dealing with post-operative swelling or pain",
      "Looking for a drug-free complement to post-op care",
      "Wanting to support faster, more comfortable healing",
    ],
    experience: [
      {
        phase: "Before Your Session",
        steps: [
          { title: "Post-Op Consultation", desc: "A brief discussion about your surgery, recovery stage, and treatment goals." },
          { title: "Clinician Assessment", desc: "Your clinician will assess the area to ensure cryotherapy is appropriate at your stage of recovery." },
          { title: "Gentle Setup", desc: "You'll be positioned carefully and comfortably to protect the healing area." },
        ],
      },
      {
        phase: "During Your Session",
        steps: [
          { title: "Gentle Cold Application", desc: "The SubZero device delivers controlled cold around the post-operative area." },
          { title: "Non-Contact & Safe", desc: "The treatment is non-invasive and does not disturb healing tissue or incisions." },
          { title: "Monitored Throughout", desc: "Your clinician carefully monitors the session for comfort and safety." },
        ],
      },
      {
        phase: "After Your Session",
        steps: [
          { title: "No Additional Downtime", desc: "The treatment does not add to your recovery period." },
          { title: "Reduced Swelling & Pain", desc: "Many clients notice reduced swelling and improved comfort after their session." },
          { title: "Ongoing Support", desc: "Regular sessions can be scheduled throughout your recovery to support progressive healing." },
        ],
      },
    ],
    faqs: [
      { q: "How soon after surgery can I start cryotherapy?", a: "This depends on your surgery type and your surgeon's guidance. Your clinician will assess your recovery stage before beginning treatment." },
      { q: "Is it safe near surgical incisions?", a: "Yes. The SubZero device is non-contact and does not touch the skin directly, making it safe to use near healing incisions." },
      { q: "How many sessions will I need?", a: "This varies by surgery type and recovery progress. Your clinician will recommend a plan tailored to your healing timeline." },
    ],
    cta: {
      heading: "Supporting Your Recovery, Every Step of the Way",
      body: "Post-surgery recovery can be challenging. Cryotherapy at Hands That Heal offers a safe, gentle, and effective way to manage pain and swelling while supporting your body's natural healing process.\n\nBook your post-surgery session today.",
    },
  },
];

const otherCryoServices = (currentSlug: string) =>
  subServiceData.filter((s) => s.slug !== currentSlug);

const CryoSubDetail = () => {
  const { pathname } = useLocation();
  const slug = pathname.split("/").pop() || "";
  const service = subServiceData.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services/localized-cryotherapy" replace />;

  const others = otherCryoServices(service.slug);

  return (
    <>
      <title>{`${service.title} — Hands That Heal`}</title>
      <meta name="description" content={service.tagline} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImages[service.slug] ?? cryo} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-deep-gradient opacity-85" />
        </div>
        <div className="container-luxe relative z-10 pt-16">
          <Link to="/services/localized-cryotherapy" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Cryotherapy
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] max-w-4xl"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-xl text-white/85 max-w-2xl font-display italic"
          >
            {service.tagline}
          </motion.p>
          <Button asChild variant="gold" size="lg" className="mt-10">
            <Link to="/booking">Book This Treatment</Link>
          </Button>
        </div>
      </section>

      {/* Main content */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <GradientBlobs />
        <div className="container-luxe relative grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Localized Cryotherapy</p>
              <h2 className="font-display text-3xl md:text-4xl mb-6">{service.title}</h2>
              {service.description.map((para, i) => (
                <p key={i} className="text-foreground leading-relaxed mt-4">{para}</p>
              ))}
              {/* Stats */}
              {service.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                  {service.stats.map((st) => (
                    <div key={st.label} className="glass rounded-2xl p-5 text-center">
                      <p className="font-display text-3xl text-primary">{st.value}</p>
                      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{st.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sub-services */}
            {service.subServices && (
              <div>
                {service.subServicesHeading && (
                  <h2 className="font-display text-3xl mb-8">{service.subServicesHeading}</h2>
                )}
                <div className="space-y-6">
                  {service.subServices.map((sv) => (
                    <div key={sv.name} className="glass rounded-2xl p-7">
                      <h3 className="font-display text-xl text-foreground mb-3">{sv.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{sv.desc}</p>
                      {sv.slug && (
                        <Button asChild variant="outline" size="sm" className="mt-4">
                          <Link to={`/services/${sv.slug}`}>View Details <ArrowRight className="ml-1 h-3 w-3" /></Link>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            <div>
              <h2 className="font-display text-3xl mb-6">Benefits:</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((b) => (
                  <div key={b} className="glass rounded-2xl p-5 flex gap-3">
                    <span className="h-7 w-7 rounded-full bg-deep-gradient grid place-items-center shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary-foreground" />
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who it's for */}
            <div>
              <h2 className="font-display text-3xl mb-4">Who It's For</h2>
              <p className="text-muted-foreground mb-4">This treatment is ideal for individuals who:</p>
              <ul className="space-y-3">
                {service.forWho.map((w) => (
                  <li key={w} className="flex gap-3 text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-accent mt-1 shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery mosaic */}
            {galleryMap[service.slug] && (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="sm:col-span-2 sm:row-span-2 rounded-3xl overflow-hidden shadow-elegant"
                  >
                    <img
                      src={galleryMap[service.slug][0]}
                      alt={`${service.title} treatment`}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="rounded-3xl overflow-hidden shadow-soft aspect-square"
                  >
                    <img
                      src={galleryMap[service.slug][1]}
                      alt={`${service.title} treatment`}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-3xl overflow-hidden shadow-soft aspect-square"
                  >
                    <img
                      src={galleryMap[service.slug][2]}
                      alt={`${service.title} treatment`}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </div>
            )}

            {/* Experience */}
            <div>
              <h2 className="font-display text-3xl mb-6">Treatment Experience</h2>
              <div className="space-y-8">
                {service.experience.map((phase) => (
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
              <Accordion type="single" collapsible className="bg-card rounded-3xl shadow-soft px-6">
                {service.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`} className="border-border">
                    <AccordionTrigger className="text-left font-display text-lg hover:no-underline">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
                {[
                  { label: "Aesthetic",    slug: "cryo-aesthetic" },
                  { label: "Orthopaedic", slug: "cryo-ortho" },
                  { label: "Sports",       slug: "cryo-sports" },
                  { label: "Post Surgery", slug: "cryo-postsurgery" },
                ].map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className={`flex items-center justify-center w-full px-4 py-4 rounded-2xl font-medium text-sm text-center transition-all duration-200 ${
                      item.slug === service.slug
                        ? "bg-primary text-primary-foreground border-2 border-primary/30"
                        : "bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-luxe">
          <div className="relative overflow-hidden rounded-[2rem] bg-deep-gradient p-8 sm:p-12 md:p-16 shadow-elegant">
            <div className="blob bg-primary-glow h-[500px] w-[500px] -top-40 -right-20 opacity-30" />
            <div className="blob bg-accent h-[400px] w-[400px] -bottom-40 -left-20 opacity-20" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground leading-[1.05]">
                {service.cta.heading}
              </h2>
              <div className="mt-6 space-y-3">
                {service.cta.body.split("\n\n").map((para, i) => (
                  <p key={i} className="text-lg text-primary-foreground/80 leading-relaxed">{para}</p>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="gold" size="xl">
                  <Link to="/booking">Book Your Session <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to="/contact">Get a Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue exploring */}
      <section className="py-12 sm:py-16 bg-soft-gradient">
        <div className="container-luxe">
          <h2 className="font-display text-4xl mb-10">Continue exploring</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {others.slice(0, 3).map((o) => (
              <Link key={o.slug} to={`/services/${o.slug}`} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={heroImages[o.slug] ?? cryo} alt={o.title} loading="lazy" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl group-hover:text-primary transition-colors">{o.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 italic">{o.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CryoSubDetail;
