import laser from "@/assets/lazer-removal.jpg";
import teeth from "@/assets/organic-teeth-whitening.jpg";
import contour from "@/assets/body-contouring.jpg";
import brazilian from "@/assets/waxing.jpg";
import cryo from "@/assets/cryotherapy.jpg";

import laser1 from "@/assets/laser-1.jpg";
import laser2 from "@/assets/laser-2.jpg";
import laser3 from "@/assets/laser-3.jpg";
import teeth1 from "@/assets/teeth-1.jpg";
import teeth2 from "@/assets/teeth-2.jpg";
import teeth3 from "@/assets/teeth-3.jpg";
import contour1 from "@/assets/contour-1.jpg";
import contour2 from "@/assets/contour-2.jpg";
import contour3 from "@/assets/contour-3.jpg";
import wax1 from "@/assets/wax-1.jpg";
import wax2 from "@/assets/wax-2.jpg";
import wax3 from "@/assets/wax-3.jpg";
import cryo1 from "@/assets/cryo-1.jpg";
import cryo2 from "@/assets/cryo-2.jpg";
import cryo3 from "@/assets/cryo-3.jpg";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  detailHeading: string;
  detailBody: string;
  benefitsIntro: string;
  image: string;
  benefits: string[];
  forWho: string[];
  experience: string;
  faqs: { q: string; a: string }[];
  cta?: { heading: string; body: string; primaryLabel: string; secondaryLabel: string };
  gallery?: [string, string, string];
};

export const services: Service[] = [
  {
    slug: "localized-cryotherapy",
    title: "Cryotherapy (Aesthetic & Orthopaedic Care)",
    tagline: "Supports skin rejuvenation, reduces puffiness, and helps relieve pain and inflammation for better recovery and wellness.",
    description:
      "Target stubborn areas with precision using our localized cryotherapy treatment. This non-invasive solution uses controlled cooling to help reduce fat cells, support skin tightening, and enhance body contour — without surgery or downtime.",
    detailHeading: "Sculpt Your Body with Advanced Cryotherapy",
    detailBody:
      "Target stubborn areas with precision using our localized cryotherapy treatment. This non-invasive solution uses controlled cooling to help reduce fat cells, support skin tightening, and enhance body contour — without surgery or downtime.\n\nWe use the advanced Sub Zero cryotherapy system, which delivers precise, controlled low temperatures to targeted areas. This triggers the natural breakdown of fat cells while preserving surrounding tissue and also stimulates circulation, improving skin firmness for a more sculpted appearance.",
    benefitsIntro:
      "Each session is tailored to your target areas and body goals, ensuring safe, effective, and gradual results over time.",
    image: cryo,
    benefits: [
      "Helps reduce stubborn fat in targeted areas",
      "Supports skin tightening and firmness",
      "Enhances body contour and definition",
      "Non-invasive with no downtime",
      "Natural, gradual results",
    ],
    forWho: [
      "Individuals with localized fat that resists diet and exercise",
      "People looking for non-surgical fat reduction",
      "Those wanting to improve body contour and skin firmness",
      "Suitable for both men and women",
      "Ideal for areas like abdomen, thighs, arms, and love handles",
    ],
    experience:
      "Each session is quick, comfortable, and focused on specific areas. You'll feel a cooling sensation as the treatment works beneath the skin. There is no downtime, allowing you to return to your daily routine immediately. With a consistent treatment plan, you'll notice a more sculpted, smoother, and refined look over time.",
    faqs: [
      { q: "Does localized cryotherapy hurt?", a: "Most clients feel a cold, tingling, or mild numbness sensation during treatment. The Sub Zero system is designed to be comfortable, targeting only the treatment area while keeping surrounding tissue safe." },
      { q: "How many sessions will I need?", a: "Results vary depending on your body type and target areas, but most clients see noticeable improvement after 4–6 sessions. Your plan can be tailored to achieve gradual, natural-looking results." },
      { q: "Is it safe for all areas of the body?", a: "Yes! Localized cryotherapy with Sub Zero is safe for areas like the abdomen, thighs, arms, and love handles, and it is non-invasive with no downtime." },
    ],
    gallery: [cryo1, cryo2, cryo3],
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    tagline: "Smooth skin. Precision care. Long-term confidence.\n- Pain-free & non-invasive laser hair removal\n- No discomfort, no downtime\n- Quick sessions with long-lasting smooth skin",
    description:
      "Laser hair removal is a clinic-based treatment that uses concentrated light energy to target the pigment in hair follicles and reduce future hair growth at the root level.",
    detailHeading: "What is laser hair removal?",
    detailBody:
      "Laser hair removal is a clinic-based treatment that uses concentrated light energy (laser) to target the pigment in hair follicles and reduce future hair growth at the root level.\n\nNow, with Primelase, this treatment becomes more advanced and efficient. Primelase is a medical-grade diode laser system that delivers high-speed, controlled energy into the hair follicle to damage it safely and effectively.",
    benefitsIntro:
      "The Approach\n\nEach session is tailored based on skin type, hair density, and treatment area. The focus is on safe energy delivery and consistent results, ensuring effective hair reduction without unnecessary discomfort.\n\nThe aim is simple: smoother skin that feels effortless, clean, and low-maintenance.",
    image: laser,
    benefits: [
      "Advanced Laser Technology: Powered by Primelase for effective results",
      "Long-Term Hair Reduction: Targets hair at the root level",
      "Suitable for Multiple Areas: Face, body, and sensitive zones",
      "Skin-Safe Precision: Designed to protect surrounding skin",
      "Low-Maintenance Solution: Reduces the need for frequent hair removal",
    ],
    forWho: [
      "Want a long-term solution for unwanted hair",
      "Struggle with frequent shaving or waxing",
      "Experience irritation from traditional hair removal methods",
      "Prefer a clean, low-maintenance grooming routine",
    ],
    experience:
      "BEFORE||Shaved & Clean Skin|Skin should be free from hair, makeup, or creams for best results.|Avoid Sun Exposure|Do not expose the area to direct sunlight or tanning before treatment.|No Waxing or Plucking|Hair roots must remain intact for effective laser targeting.||DURING||Precise Laser Application|Controlled laser energy targets hair follicles for effective reduction.|Comfortable Treatment Experience|Cooling technology helps keep the skin comfortable during the session.|Quick & Efficient Procedure|Treatment is fast and tailored according to the area being treated.||AFTER||Mild Redness Possible|Temporary redness or warmth may appear and settle shortly.|No Downtime|You can return to your daily routine immediately after treatment.|Gradual Hair Reduction|Hair sheds over time, leading to smoother skin with continued sessions.",
    faqs: [
      { q: "Does laser hair removal hurt?", a: "Most clients describe it as a slight warming or tingling sensation. Our trained team uses gentle techniques to make each session as comfortable as possible." },
      { q: "How many laser sessions will I need?", a: "Everyone's hair growth is different, but most clients see significant results within 6–8 sessions. Our unlimited yearly plan ensures you get the full benefit without worrying about extra costs." },
      { q: "Can laser be done on darker skin tones?", a: "Yes! We use advanced technology that is safe and effective for all skin tones, including darker skin." },
    ],
    cta: {
      heading: "Ready to Experience Smoother, Hair-Free Skin?",
      body: "Whether you're looking to reduce unwanted hair, achieve long-lasting smoothness, or enjoy a low-maintenance grooming routine, laser hair removal offers visible, progressive results without downtime or discomfort.\n\nAt Hands That Heal, we deliver advanced laser technology for safe, effective, and comfortable treatments tailored to your skin.",
      primaryLabel: "Book Your Laser Session",
      secondaryLabel: "Get a Free Consultation",
    },
    gallery: [laser1, laser2, laser3],
  },
  {
    slug: "organic-teeth-whitening",
    title: "Organic Teeth Whitening",
    tagline: "For a brighter smile, without compromising comfort.\n- Gentle organic whitening\n- No downtime, no harsh chemicals\n- Quick, visible glow results",
    description:
      "Teeth whitening is a cosmetic dental treatment that lightens the shade of your teeth and removes surface stains. It helps restore a brighter, cleaner-looking smile.",
    detailHeading: "What is organic teeth whitening?",
    detailBody:
      "Teeth whitening is a cosmetic dental treatment that lightens the shade of your teeth and removes surface stains. It helps restore a brighter, cleaner-looking smile. The process is quick, non-invasive, and improves overall smile aesthetics. At Hands That Heal, our Organic Teeth Whitening treatment is designed for individuals seeking visible results without compromising ingredient integrity.\n\nPowered by the globally recognised Sunna system, this treatment delivers professional-grade whitening using a formulation that is vegan, cruelty-free, and free from aggressive bleaching agents.",
    benefitsIntro:
      "The Approach\n\nThis isn't a one-size-fits-all treatment. Every session is done with care and attention to your smile, making sure the whitening is applied evenly and gently across all visible teeth, so the result looks natural, fresh, and still feels like you.",
    image: teeth,
    benefits: [
      "Vegan & Cruelty-Free: Ethically formulated with no animal-derived ingredients",
      "Low-Sensitivity Protocol: Designed to minimise discomfort during and after treatment",
      "Enamel-Conscious: No harsh erosion or damage to tooth structure",
      "Even Natural Results: Brightens without creating uneven patches or excessive whiteness",
    ],
    forWho: [
      "Want to enhance their smile without harsh chemical exposure",
      "Experience sensitivity with traditional whitening methods",
      "Prefer ethical, clean beauty-aligned treatments",
      "People looking for a subtle yet impactful aesthetic upgrade",
    ],
    experience:
      "BEFORE||Consultation|You'll have a short consultation to understand your whitening goals and check suitability.|No Preparation Needed|No special prep is required, just arrive normally and comfortably.|Relaxed Setup|You'll be comfortably seated while the clinician prepares for the procedure.||DURING||Shade Assessment|Your current tooth shade is assessed to track visible improvement.|Whitening Application|A professional whitening gel is carefully applied to the teeth.|Controlled Treatment|The process is monitored throughout for comfort and effective results.||AFTER||Immediate Brightening|You'll notice a visibly brighter smile right after the session.|Post-Care Guidance|Simple instructions are shared to maintain and enhance results.|Natural Finish|Teeth look cleaner, fresher, and more radiant over the next few hours.",
    faqs: [
      { q: "Is teeth whitening safe?", a: "Yes, we use organic, gentle ingredients that minimize sensitivity while effectively reducing stains." },
      { q: "How long does a session take?", a: "A standard session lasts 30–45 minutes, and results are often visible immediately." },
      { q: "Can it damage my enamel?", a: "Not at all. Our method is designed to protect enamel while brightening your smile." },
    ],
    cta: {
      heading: "Ready to Reveal a Brighter Smile?",
      body: "Whether you're preparing for a special occasion or simply want to enhance your everyday confidence, professional teeth whitening at Hands That Heal delivers fast, noticeable results in a safe clinical setting. A brighter smile is just one session away. We help lift stains and restore your natural shine—quickly and effectively.",
      primaryLabel: "Book Your Whitening Session",
      secondaryLabel: "Get a Free Consultation",
    },
    gallery: [teeth2, teeth1, teeth3],
  },
  {
    slug: "body-contouring",
    title: "Body Contouring",
    tagline: "Helping you achieve a naturally contoured body\n- Non-invasive body contouring\n- No surgery, no downtime\n- Quick sessions, visible results",
    description:
      "Body contouring is a non-surgical aesthetic treatment designed to reshape and refine specific areas of the body by reducing localised fat and improving overall definition.",
    detailHeading: "What is body contouring?",
    detailBody:
      "Body contouring is a non-surgical aesthetic treatment designed to reshape and refine specific areas of the body by reducing localised fat and improving overall definition.\n\nIt targets stubborn fat pockets that are often resistant to diet and exercise, helping enhance natural body shape. The results are gradual, with improved contours and a more sculpted appearance over time.\n\nAt Hands That Heal, our Body Contouring treatment using MC1 PLUS that is designed for individuals who need visible body refinement without invasive procedures.",
    benefitsIntro:
      "The Approach\n\nThis is not a generic body treatment. Each session is altered according to body type, target areas, and desired outcome. The focus is on structured contouring rather than drastic change, ensuring results look natural and proportionate to your frame.\n\nThe goal is simple: a more refined silhouette that still looks like you but just more defined.",
    image: contour,
    benefits: [
      "Non-Surgical Approach: No incisions, no invasive procedures",
      "Targeted Fat Reduction: Focuses on stubborn, localized fat areas",
      "Body Contouring Effect: Helps enhance natural shape and definition",
      "No Downtime Protocol: Designed to fit into everyday routines",
      "Safe & Controlled Technology: Gentle on surrounding tissues",
    ],
    forWho: [
      "Struggle with stubborn fat in specific areas despite lifestyle efforts",
      "Prefer non-invasive body shaping options",
      "Want subtle, natural-looking body refinement",
      "People looking for gradual contour enhancement without surgery",
    ],
    experience:
      "BEFORE||Consultation & Assessment|You'll start with a brief consultation to understand your body goals and identify target areas for contouring using MC1 PLUS (VaserShape).|No Special Preparation Needed|No fasting or extensive prep is required; just arrive comfortably as you are.|Comfortable Setup|You'll be positioned comfortably while the treatment area is prepared for the session.||DURING||Targeted Contouring|MC1 PLUS (VaserShape) is applied to the selected areas to help break down and contour stubborn fat deposits.|Controlled Treatment|The procedure is performed in a safe, controlled manner for effective and even results.|Comfort-Focused Process|The session is designed to be comfortable, with no invasive steps involved.||AFTER||Visible Smoothing|You may notice a more defined and contoured appearance in the treated area.|No Downtime|You can return to your daily routine immediately after the session.|Gradual Enhancement|Results continue to improve over the following days as the body naturally responds to the treatment.",
    faqs: [
      { q: "Is body contouring safe?", a: "Absolutely. Our treatments are non-invasive and gentle, using proven techniques to reduce fat without surgery." },
      { q: "Will I need downtime after treatment?", a: "No downtime is required. You can resume your daily routine immediately." },
      { q: "When will I see results?", a: "Most clients notice subtle changes after the first few sessions, with more visible results over multiple treatments." },
    ],
    cta: {
      heading: "Ready to Sculpt Your Ideal Shape?",
      body: "Whether you're targeting stubborn fat areas, enhancing body definition, or looking for a non-invasive way to refine your silhouette, body contouring delivers visible, progressive results without surgery or downtime.\n\nAt Hands That Heal, we help you reshape and refine, safely, effectively, and comfortably.",
      primaryLabel: "Book Your Contouring Session",
      secondaryLabel: "Get a Free Consultation",
    },
    gallery: [contour1, contour2, contour3],
  },
  {
    slug: "brazilian-laser",
    title: "Brazilian Laser",
    tagline: "Clean, hygienic, and comfortable waxing service with full care and privacy.",
    description:
      "Experience smooth, hair-free skin with our Brazilian laser hair removal treatment, designed for both men and women. This treatment targets hair at the root using advanced laser technology, helping reduce hair growth over time while keeping the skin soft, clean, and irritation-free.",
    detailHeading: "Precision Brazilian Laser Treatment for Lasting Results",
    detailBody:
      "Experience smooth, hair-free skin with our Brazilian laser hair removal treatment, designed for both men and women. This treatment targets hair at the root using advanced laser technology, helping reduce hair growth over time while keeping the skin soft, clean, and irritation-free.\n\nWe use premium equipment like Primelase, a high-powered diode laser known for its precision, speed, and comfort. Its advanced cooling system ensures a safe and comfortable experience, even on sensitive intimate areas, while delivering effective and long-lasting results.",
    benefitsIntro:
      "Each session is tailored to your hair type, skin tone, and sensitivity level. Over multiple sessions, hair becomes finer, lighter, and significantly reduced, leaving the area smooth and well-maintained.",
    image: brazilian,
    benefits: [
      "Long-term reduction in intimate hair growth",
      "Smoother, cleaner, and irritation-free skin",
      "Helps prevent ingrown hairs and razor bumps",
      "Safe for sensitive areas",
      "Quick sessions with minimal discomfort",
    ],
    forWho: [
      "Individuals tired of shaving or waxing intimate areas",
      "People dealing with ingrown hairs or irritation",
      "Suitable for both men and women",
      "Those looking for a hygienic and long-term solution",
      "Anyone wanting smooth, low-maintenance results",
    ],
    experience:
      "Each session is designed to be quick, discreet, and comfortable. You may feel a mild warming or snapping sensation, but advanced cooling technology helps minimize discomfort. There's no downtime, and you can return to your routine immediately after treatment. With a proper treatment plan, you'll notice a visible reduction and smoother skin after just a few sessions.",
    faqs: [
      { q: "Is Brazilian laser safe for sensitive skin?", a: "Yes. Our trained professionals prioritize comfort and hygiene, making every session private and gentle." },
      { q: "How often should I schedule sessions?", a: "Typically every 4–6 weeks until desired results are achieved. After that, touch-ups are usually needed every few months." },
      { q: "Will it cause irritation?", a: "Minimal redness may occur, which usually disappears within a few hours. We also provide tips to care for your skin post-treatment." },
    ],
    gallery: [wax1, wax2, wax3],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
