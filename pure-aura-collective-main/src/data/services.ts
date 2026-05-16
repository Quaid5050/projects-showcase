import laser from "@/assets/service-laser.jpg";
import teeth from "@/assets/service-teeth.jpg";
import contour from "@/assets/service-contouring.jpg";
import brazilian from "@/assets/service-brazilian.jpg";
import cryo from "@/assets/service-cryo.jpg";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  benefits: string[];
  forWho: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    tagline: "Smooth skin without the constant shaving or waxing.",
    description:
      "Long-lasting, gentle hair reduction tailored to your skin tone. Our medical-grade lasers safely treat all skin types — including darker tones — for visible results from the very first sessions.",
    image: laser,
    benefits: [
      "Permanent hair reduction with minimal discomfort",
      "Safe and effective for all skin tones, including darker skin",
      "Clinically tested medical-grade equipment",
      "No more ingrown hairs or razor burn",
    ],
    forWho: [
      "Anyone tired of shaving or waxing routines",
      "People with sensitive or reactive skin",
      "Clients with darker skin tones who were turned away elsewhere",
    ],
    faqs: [
      { q: "How many sessions will I need?", a: "Most clients see optimal results in 6–8 sessions, spaced 4–6 weeks apart depending on the area." },
      { q: "Is it painful?", a: "Most people describe it as a warm snap. Our cooling technology keeps treatments comfortable." },
      { q: "Is it safe for dark skin?", a: "Yes. We use Nd:YAG technology specifically designed to safely treat melanin-rich skin." },
    ],
  },
  {
    slug: "organic-teeth-whitening",
    title: "Organic Teeth Whitening",
    tagline: "A brighter smile using gentle, safe whitening methods.",
    description:
      "Reveal a luminous smile with our organic, non-peroxide whitening system. Visibly whiter teeth in a single session — without the sensitivity.",
    image: teeth,
    benefits: [
      "Up to 8 shades brighter in one visit",
      "100% organic, peroxide-free formula",
      "No tooth sensitivity afterwards",
      "Vegan and cruelty-free ingredients",
    ],
    forWho: [
      "Coffee, tea, and wine enthusiasts",
      "People with sensitive teeth",
      "Anyone preparing for a special event",
    ],
    faqs: [
      { q: "How long does it last?", a: "Results typically last 6–12 months depending on diet and lifestyle." },
      { q: "Will it damage my enamel?", a: "No. Our organic formula is enamel-safe and gentle." },
    ],
  },
  {
    slug: "body-contouring",
    title: "Body Contouring",
    tagline: "Shape and define areas that don't change with diet or workouts.",
    description:
      "Sculpt and refine stubborn areas with non-invasive body contouring. Visible silhouette improvements without downtime or surgery.",
    image: contour,
    benefits: [
      "Non-invasive, no downtime",
      "Targets stubborn fat pockets",
      "Skin tightening included",
      "Visible results within weeks",
    ],
    forWho: [
      "People close to their goal weight",
      "Post-pregnancy bodies seeking definition",
      "Anyone wanting smoother contours",
    ],
    faqs: [
      { q: "How quickly will I see results?", a: "Most clients see visible changes after 2–3 sessions, with full results at 8 weeks." },
      { q: "Is there downtime?", a: "None. You can return to all activities immediately." },
    ],
  },
  {
    slug: "brazilian-laser",
    title: "Brazilian Laser (M/F)",
    tagline: "Comfortable, private care for sensitive areas and all skin tones.",
    description:
      "Discreet, expert care for both men and women. A judgment-free, deeply private experience with specialists trained in intimate-area treatments for all skin tones.",
    image: brazilian,
    benefits: [
      "Private treatment rooms with same-gender option",
      "Specialized technique for sensitive skin",
      "Safe and effective on darker skin tones",
      "Long-lasting smoothness and confidence",
    ],
    forWho: [
      "Men and women seeking expert intimate care",
      "Clients with sensitive or reactive skin",
      "People who've had uncomfortable experiences elsewhere",
    ],
    faqs: [
      { q: "Is the experience really private?", a: "Absolutely. Single-client rooms, draped privately, with same-gender practitioner if requested." },
      { q: "How should I prepare?", a: "Shave the area 24 hours before. Avoid sun exposure for two weeks prior." },
    ],
  },
  {
    slug: "localized-cryotherapy",
    title: "Localized Cryotherapy",
    tagline: "Target stubborn areas with advanced cryotherapy for a sculpted appearance.",
    description:
      "Precision-cold therapy that tightens, sculpts, and revitalizes. Perfect for spot-targeting areas resistant to traditional approaches.",
    image: cryo,
    benefits: [
      "Skin tightening and toning",
      "Reduces inflammation and puffiness",
      "Boosts collagen production",
      "Quick 15-minute sessions",
    ],
    forWho: [
      "Anyone wanting targeted skin tightening",
      "People with localized stubborn areas",
      "Athletes and active lifestyles",
    ],
    faqs: [
      { q: "Is it cold?", a: "Yes — but in a refreshing, controlled way. Sessions last only 10–15 minutes." },
      { q: "How many sessions for results?", a: "Most see visible changes after 4–6 sessions." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
