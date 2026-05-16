import { Link, useLocation, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GradientBlobs } from "@/components/GradientBlobs";
import cryo from "@/assets/service-cryo.jpg";
import cryoSlimming from "@/assets/cryo-slimming.png";
import frotox from "@/assets/frotox-facial-treatment.png";
import skinConditions from "@/assets/skin-conditions.png";

// ── GALLERY IMAGES ────────────────────────────────────────────────────────────
// Place 3 images per sub-service in src/assets/ with these exact filenames:
//
//   Cryo Slimming:          cryo-slimming-1.jpg   cryo-slimming-2.jpg   cryo-slimming-3.jpg
//   Frotox Facial:          frotox-1.jpg          frotox-2.jpg          frotox-3.jpg
//   Skin Conditions:        skin-conditions-1.jpg skin-conditions-2.jpg skin-conditions-3.jpg
//
// Then uncomment the imports below and replace the placeholder strings in aestheticGalleryMap.
// ─────────────────────────────────────────────────────────────────────────────
import cryoSlimming1    from "@/assets/cryo-slimming-1.jpg";
import cryoSlimming2    from "@/assets/cryo-slimming-2.jpg";
import cryoSlimming3    from "@/assets/cryo-slimming-3.jpg";
import frotox1          from "@/assets/frotox-1.jpg";
import frotox2          from "@/assets/frotox-2.jpg";
import frotox3          from "@/assets/frotox-3.jpg";
import skinConditions1  from "@/assets/skin-conditions-1.jpg";
import skinConditions2  from "@/assets/skin-conditions-2.jpg";
import skinConditions3  from "@/assets/skin-conditions-3.jpg";

const aestheticGalleryMap: Record<string, [string, string, string]> = {
  "cryo-slimming":   [cryoSlimming1,   cryoSlimming2,   cryoSlimming3],
  "frotox":          [frotox1,          frotox2,          frotox3],
  "skin-conditions": [skinConditions1,  skinConditions2,  skinConditions3],
};

const heroImages: Record<string, string> = {
  "cryo-slimming":    cryoSlimming,
  "frotox":           frotox,
  "skin-conditions":  skinConditions,
};

type Step = { title: string; desc: string };
type Phase = { phase: string; steps: Step[] };
type FAQ = { q: string; a: string };

type AestheticService = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  quote?: string;
  hideQuote?: boolean;
  treatmentAreas?: { title: string; desc: string }[];
  benefits: string[];
  benefitsHeading?: string;
  forWho: string[];
  experience: Phase[];
  hideExperience?: boolean;
  faqs: FAQ[];
  cta: { heading: string; body: string };
};

const aestheticServices: AestheticService[] = [
  {
    slug: "cryo-slimming",
    title: "Cryo Slimming",
    tagline: "Freeze and permanently eliminate stubborn fat cells — zero pain, zero surgery, zero downtime.",
    description: [
      "Tired of stubborn fat that doesn't seem to go away? At Hands That Heal, our Cryo Slimming treatment uses the SubZero device to freeze and permanently eliminate fat cells in specific areas. Many of our clients notice a full one-inch reduction in girth after their very first session, with zero pain, zero surgery and zero downtime.",
      "Unlike traditional fat-reduction methods, our SubZero Cryo Slimming precisely targets diet-resistant fat deposits without harming any surrounding tissue. It's the smart, safe, science-backed alternative to invasive procedures.",
      "At Hands That Heal, every session is delivered by certified cryotherapy specialists in a calm, professional environment. We use pressurized CO₂ gas to create a controlled \"thermal shock,\" activating your body's natural fat-flushing response and delivering results you can see and feel.",
    ],
    quote: "You'll be amazed at what just five minutes at Hands That Heal can do. Our clients walk in with problem areas and walk out with visible results — no bruising, no scarring, and no downtime. Just real change from your very first visit.",
    treatmentAreas: [
      { title: "Abdomen & Waist", desc: "Our specialists precisely target stubborn belly fat and love handles - the areas diet and exercise can't seem to crack." },
      { title: "Breast & Butt Lifts", desc: "Achieve a natural, non-surgical lift and tightening effect through our targeted cold-therapy application." },
      { title: "Thighs & Arms", desc: "Say goodbye to batwing arms and inner-thigh deposits. We treat areas that even the most dedicated gym routines leave behind." },
      { title: "Double Chin", desc: "Sculpt and define the under-chin area with no injections, no incisions, and no surgery, only at Hands That Heal." },
    ],
    benefits: [
      "Permanent fat cell elimination",
      "Completely painless & non-invasive",
      "No bruising, scarring or downtime",
      "Up to 1 inch girth reduction per session",
      "Targets diet-resistant fat deposits",
      "Lymphatic flush of toxins post-treatment",
    ],
    benefitsHeading: "Why Choose This Treatment:",
    hideExperience: true,
    forWho: [
      "Struggling with stubborn fat that resists diet and exercise",
      "Looking for a non-surgical fat reduction solution",
      "Want visible results without recovery time",
      "Prefer a safe, clinically-backed body sculpting approach",
    ],
    experience: [
      {
        phase: "Before Your Session",
        steps: [
          { title: "Consultation", desc: "A brief consultation to identify target areas and understand your body sculpting goals." },
          { title: "No Preparation Needed", desc: "No fasting or special prep required — arrive comfortably as you are." },
          { title: "Comfortable Setup", desc: "You'll be positioned comfortably while the clinician prepares the treatment area." },
        ],
      },
      {
        phase: "During Your Session",
        steps: [
          { title: "Targeted CO₂ Application", desc: "The SubZero device delivers -110°F pressurized CO₂ to the targeted fat area." },
          { title: "Quick & Painless", desc: "Sessions are fast, non-invasive, and completely pain-free." },
          { title: "Monitored Throughout", desc: "Your clinician monitors the session for comfort and precision." },
        ],
      },
      {
        phase: "After Your Session",
        steps: [
          { title: "No Downtime", desc: "Return to your daily activities immediately after treatment." },
          { title: "Immediate Visible Change", desc: "Many clients notice a visible reduction in the treated area right after their session." },
          { title: "Progressive Results", desc: "Fat cells continue to be eliminated naturally over the following days and weeks." },
        ],
      },
    ],
    faqs: [
      { q: "Is Cryo Slimming permanent?", a: "Yes. The SubZero device permanently damages targeted fat cells, which are then naturally eliminated by the body over time." },
      { q: "How many sessions will I need?", a: "Many clients see results after just one session. A personalised plan will be recommended based on your goals and target areas." },
      { q: "Is it safe for all body types?", a: "Yes. Cryo Slimming is safe and effective for a wide range of body types and skin tones." },
    ],
    cta: {
      heading: "Ready to Lose That Stubborn Fat?",
      body: "Cryo Slimming at Hands That Heal delivers real, visible fat reduction without surgery, pain, or downtime. One session could be all it takes to see the difference.\n\nBook your session today.",
    },
  },
  {
    slug: "frotox",
    title: "Frotox Facial Treatment",
    tagline: "The youthful, refreshed look of Botox — without a single needle.",
    description: [
      "Imagine achieving the youthful, refreshed look of Botox without a single needle. At Hands That Heal, our Frotox facial is a signature non-invasive alternative to injectable treatments.",
      "Using SubZero cryotherapy, we naturally relax facial muscles and stimulate collagen production, helping reduce the appearance of wrinkles and fine lines.",
    ],
    hideQuote: true,
    treatmentAreas: [
      { title: "Stimulates Collagen", desc: "The thermal shock triggers healthy collagen fiber growth, leaving your skin firmer and more youthful with each visit." },
      { title: "Wrinkle Reduction", desc: "We gently relax facial muscles to smooth fine lines and expression marks with no needles or toxins involved." },
      { title: "Boosts Circulation", desc: "Post-treatment, blood vessels open to 4× their normal size, flooding your skin with antioxidants and revitalising nutrients." },
      { title: "Instant Glow", desc: "Walk out of Hands That Heal with visibly reduced puffiness and tighter, more radiant skin after just one session." },
    ],
    benefits: [
      "Tightens & lifts skin naturally",
      "Reduces facial puffiness",
      "Boosts your own collagen production",
      "Minimizes fine lines & wrinkles",
      "Soothes skin inflammation",
      "Improves blood circulation",
      "No injections, no surgery, ever",
      "Zero recovery time needed",
    ],
    benefitsHeading: "Benefits of This Treatment:",
    forWho: [
      "Want to reduce fine lines without Botox injections",
      "Looking for a natural, non-invasive facial rejuvenation",
      "Prefer clean, needle-free aesthetic treatments",
      "Anyone wanting a fresher, more youthful appearance",
    ],
    hideExperience: true,
    experience: [],
    faqs: [
      { q: "How is Frotox different from Botox?", a: "Botox uses injections to paralyse facial muscles. Frotox uses cryotherapy to naturally relax muscles and stimulate collagen — no needles, no toxins." },
      { q: "How long do results last?", a: "Results vary by individual. Regular sessions help maintain and build on the improvements over time." },
      { q: "Is it safe for sensitive skin?", a: "Yes. The SubZero device is non-contact and gentle, making it suitable for sensitive skin types." },
    ],
    cta: {
      heading: "Ready for a Fresher, Younger-Looking You?",
      body: "Frotox at Hands That Heal gives you the rejuvenating results of Botox — naturally, safely, and without a single needle.\n\nBook your Frotox session today.",
    },
  },
  {
    slug: "skin-conditions",
    title: "Skin Conditions",
    tagline: "Address skin conditions at their root — naturally, without harsh chemicals.",
    description: [
      "Living with chronic skin conditions is exhausting and many treatments only mask the symptoms. At Hands That Heal, our cryotherapy approach addresses skin conditions at their root.",
      "By cooling the skin, flushing toxins from the bloodstream and reducing inflammation, our SubZero treatments help your body heal itself naturally and without harsh chemicals.",
    ],
    hideQuote: true,
    treatmentAreas: [
      { title: "Acne & Blemishes", desc: "By boosting your immune response, our sessions help your body naturally reduce acne-causing bacteria internally." },
      { title: "Psoriasis & Eczema", desc: "Hands That Heal clients with chronic skin conditions report significant relief from flare-ups, itching and irritation after regular cryo sessions." },
      { title: "Scars & Skin Repair", desc: "Our targeted cryo promotes healthy skin cell regeneration, gradually improving the appearance of scars and uneven texture over time." },
      { title: "Inflammation Relief", desc: "We flush toxins from your bloodstream to relieve heat sensations, redness, and persistent swelling at the source." },
    ],
    benefits: [
      "Reduces active acne breakouts",
      "Improves scar appearance over time",
      "Soothes psoriasis flare-ups",
      "Calms eczema irritation",
      "Decreases chronic skin inflammation",
      "Minimizes itching & heat sensations",
    ],
    benefitsHeading: "Benefits of This Treatment:",
    forWho: [
      "Dealing with chronic skin inflammation or redness",
      "Looking for a natural, chemical-free skin treatment",
      "Those whose skin conditions haven't responded to traditional treatments",
      "Anyone wanting to support long-term skin health",
    ],
    hideExperience: true,
    experience: [],
    faqs: [
      { q: "What skin conditions can be treated?", a: "Our cryotherapy approach can help with conditions involving inflammation, redness, and uneven texture. A consultation will determine suitability for your specific condition." },
      { q: "Is it safe for reactive or sensitive skin?", a: "Yes. The SubZero device is non-contact and delivers gentle, controlled cold — making it suitable even for sensitive skin types." },
      { q: "How many sessions are needed?", a: "This depends on the condition and its severity. Most clients benefit from a series of sessions, with a personalised plan recommended after consultation." },
    ],
    cta: {
      heading: "Ready to Heal Your Skin Naturally?",
      body: "Stop masking the symptoms. Cryotherapy at Hands That Heal helps your skin heal from the inside out — naturally, gently, and without harsh chemicals.\n\nBook your skin treatment session today.",
    },
  },
];

const AestheticSubDetail = () => {
  const { pathname } = useLocation();
  const slug = pathname.split("/").pop() || "";
  const service = aestheticServices.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services/cryo-aesthetic" replace />;

  const others = aestheticServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <title>{`${service.title} — Hands That Heal`}</title>
      <meta name="description" content={service.tagline} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImages[service.slug] ?? cryo} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-deep-gradient opacity-85" />
        </div>
        <div className="container-luxe relative z-10 pt-16">
          <Link to="/services/cryo-aesthetic" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Aesthetic Cryotherapy
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

      {/* Quote section */}
      {service.quote && !service.hideQuote && (
        <section className="py-12 bg-soft-gradient">
          <div className="container-luxe">
            <div className="max-w-3xl mx-auto">
              <div className="border-l-4 border-primary pl-8 py-4">
                <p className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed">
                  "{service.quote}"
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Treatment Areas */}
      {service.treatmentAreas && (
        <section className="py-16">
          <div className="container-luxe">
            {service.slug === "cryo-slimming" && (
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Treatment Areas</p>
            )}
            <h2 className="font-display text-3xl md:text-4xl mb-10">
              {service.slug === "cryo-slimming" ? "Treatment Areas We Specialise In" : "What This Treatment Does"}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.treatmentAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass rounded-2xl p-6"
                >
                  <h3 className="font-display text-lg text-foreground mb-3">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main content */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <GradientBlobs />
        <div className="container-luxe relative grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Aesthetic Cryotherapy</p>
              <h2 className="font-display text-3xl md:text-4xl mb-6">{service.title}</h2>
              {service.description.map((para, i) => (
                <p key={i} className="text-foreground leading-relaxed mt-4">{para}</p>
              ))}
            </div>

            {/* Benefits */}
            <div>
              <h2 className="font-display text-3xl mb-6">{service.benefitsHeading ?? "Benefits:"}</h2>
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

            {/* Gallery mosaic */}
            {aestheticGalleryMap[service.slug] && (
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
                      src={aestheticGalleryMap[service.slug][0]}
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
                      src={aestheticGalleryMap[service.slug][1]}
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
                      src={aestheticGalleryMap[service.slug][2]}
                      alt={`${service.title} treatment`}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </div>
            )}

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

            {/* Experience */}
            {!service.hideExperience && (
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
            )}

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
            <div className="bg-deep-gradient rounded-3xl p-8 text-primary-foreground shadow-elegant">
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
            {/* Aesthetic sub-services navigation card */}
            <div className="bg-card rounded-3xl shadow-soft overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <h4 className="font-display text-xl text-primary-foreground text-center">Aesthetic Cryotherapy</h4>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { label: "Cryo Slimming",          slug: "cryo-slimming" },
                  { label: "Frotox Facial Treatment", slug: "frotox" },
                  { label: "Skin Conditions",         slug: "skin-conditions" },
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
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((o) => (
              <Link key={o.slug} to={`/services/${o.slug}`} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={heroImages[o.slug] ?? cryo} alt={o.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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

export default AestheticSubDetail;
