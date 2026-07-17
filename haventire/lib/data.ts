const BASE = 'https://haventire.ca/wp-content/uploads';

export const services = [
  {
    slug: 'tail-light-tinting',
    name: 'Tail Light Tinting',
    image: `${BASE}/2026/03/ChatGPT-Image-Mar-14-2026-12_32_16-AM-822x600.png`,
    shortDesc: "Enhance your vehicle's rear appearance with sleek tail light tint that adds a bold, customized look while maintaining proper visibility.",
    icon: 'Zap',
    longDesc: `Tail light tinting is one of the most popular aesthetic upgrades for modern vehicles. At Haven Tint & Tire, we use premium smoked tint films that enhance the look of your tail lights while ensuring road safety is never compromised.\n\nOur expert technicians apply each film with precision, resulting in a smooth, bubble-free finish that integrates seamlessly with your car's design. Whether you prefer a subtle smoke effect or a deeper, more dramatic tint, we have options to suit your style.`,
    features: ['Premium smoked tint film', 'Professional bubble-free application', 'Full visibility maintained', 'Custom shade options', 'Long-lasting durable finish', 'Quick turnaround time'],
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    image: `${BASE}/2023/12/ChatGPT-Image-Mar-6-2026-01_54_52-AM-822x600.png`,
    shortDesc: 'Give your car a showroom shine that lasts. Our premium coating shields your paint from scratches, UV rays, and daily wear, keeping your vehicle flawless.',
    icon: 'Shield',
    longDesc: `Ceramic coating is the ultimate paint protection solution. Our nano-ceramic formula bonds chemically to your vehicle's factory paint, forming a permanent protective layer that is hydrophobic, scratch-resistant, and UV-resistant.\n\nAt Haven Tint & Tire, we use only the highest grade ceramic coatings applied by certified technicians in a controlled environment. The result is a showroom-quality, mirror-like finish that protects your investment for years to come.`,
    features: ['Professional-grade nano-ceramic formula', 'Hydrophobic self-cleaning properties', 'UV and oxidation protection', 'Scratch and swirl resistance', 'Enhanced gloss and depth', 'Multi-year protection warranty'],
  },
  {
    slug: 'paint-protection-film',
    name: 'Paint Protection Film',
    image: `${BASE}/2023/12/freepicdownloader.com-applying-protective-film-red-cars-hood-enhanced-durability-normal.jpg`,
    shortDesc: "Invisible armour for your car's most vulnerable areas. Stop chips, dents, and scratches before they happen, preserving your paint's perfect factory finish.",
    icon: 'ShieldCheck',
    longDesc: `Paint Protection Film (PPF) is the most comprehensive physical protection available for your vehicle's exterior. This virtually invisible urethane film acts as a shield against rock chips, road debris, bug splatter, and minor abrasions.\n\nHaven Tint & Tire installs premium PPF using computer-cut patterns precisely fitted to your vehicle's specific model and year. The film is self-healing — minor scratches disappear with heat exposure — keeping your car looking factory-fresh.`,
    features: ['Military-grade urethane film', 'Self-healing technology', 'Virtually invisible finish', 'Custom-cut computer patterns', 'Full or partial coverage options', 'Long-term protection warranty'],
  },
  {
    slug: 'window-tinting',
    name: 'Window Tinting',
    image: `${BASE}/2023/12/freepicdownloader.com-master-installs-tint-film-car-glass-with-soft-focus-normal.jpg`,
    shortDesc: 'Stay cool, protected, and stylish. Precision tinting reduces glare, blocks harmful UV rays, and adds privacy while making your car look effortlessly sleek.',
    icon: 'Eye',
    longDesc: `Window tinting is one of the best investments you can make for your vehicle's comfort, privacy, and protection. At Haven Tint & Tire, we carry a full range of window films — from standard dyed films to high-performance ceramic and carbon options.\n\nOur professional installers ensure flawless, bubble-free application on every window. We strictly comply with Ontario's window tinting regulations so you can drive with complete confidence.`,
    features: ['Full range of tint shades and film types', 'Ceramic, carbon, and dyed options', 'UV ray blocking up to 99%', 'Heat reduction technology', 'Ontario regulation compliant', 'Lifetime warranty available'],
  },
  {
    slug: 'tire-services',
    name: 'Tire Services',
    image: `${BASE}/2023/12/freepicdownloader.com-experienced-repairman-preparing-new-tire-be-mounted-wheel-normal.jpg`,
    shortDesc: 'Drive with confidence and control. From expert installation to balancing and alignment, our tire services ensure smooth handling, maximum safety, and peak performance.',
    icon: 'Circle',
    longDesc: `Your tires are the only contact point between your vehicle and the road, making them critical to your safety. Haven Tint & Tire's comprehensive tire services ensure your wheels are always in perfect condition.\n\nFrom seasonal changeovers and new tire installations to precision balancing and alignment checks, our certified technicians handle every aspect of your tire needs.`,
    features: ['All major tire brands available', 'Seasonal changeover service', 'Precision wheel balancing', ' checks', 'Tire pressure monitoring', 'TPMS sensor service'],
  },
  {
    slug: 'vinyl-wraps',
    name: 'Vinyl Wraps',
    image: `${BASE}/2023/12/ChatGPT-Image-Mar-6-2026-01_32_42-AM-822x600.png`,
    shortDesc: 'Turn your car into a statement piece without permanent paint changes. Customize colors, finishes, and style to make every drive unforgettable.',
    icon: 'Palette',
    longDesc: `Vinyl wrapping gives you the freedom to completely transform your vehicle's appearance without committing to a permanent paint job. Our expert installers use premium cast vinyl films to create stunning color changes, unique finishes, and bold designs.\n\nFrom gloss and matte to satin, chrome, and colour-shifting films, the possibilities are virtually endless.`,
    features: ['Premium cast vinyl materials', 'Full and partial wrap options', 'Gloss, matte, satin, chrome finishes', 'Colour-shifting and textured options', 'Original paint protection', 'Fully removable — no paint damage'],
  },
  {
    slug: 'dashcam-installation',
    name: 'DashCams',
    image: `${BASE}/2023/12/ChatGPT-Image-Mar-6-2026-02_05_32-AM-822x600.png`,
    shortDesc: 'Protect every drive with reliable dashcam recording. Capture road events clearly and securely store valuable video evidence when it matters most.',
    icon: 'Camera',
    longDesc: `A professionally installed dashcam is one of the most practical safety upgrades you can add to your vehicle. At Haven Tint & Tire, our technicians cleanly integrate front and rear dashcam systems into your vehicle with hidden wiring for a factory-fresh look.\n\nWe carry and install top-rated dashcam brands with features including 4K recording, GPS tracking, night vision, parking mode, and cloud connectivity.`,
    features: ['Front and rear camera systems', '4K and HD resolution options', 'Clean hidden wiring installation', 'GPS tracking integration', 'Night vision technology', 'Parking mode and cloud options'],
  },
  {
    slug: 'wheel-balancing',
    name: 'Wheel Balancing',
    image: `${BASE}/2023/11/post-image-2-822x600.jpg`,
    shortDesc: 'Professional wheel balancing that eliminates vibrations, ensures smooth driving, and extends tire life by evenly distributing weight across your wheels.',
    icon: 'RotateCcw',
    longDesc: `Unbalanced wheels cause vibrations, uneven tire wear, and unnecessary stress on your vehicle's suspension components. Haven Tint & Tire uses computerized wheel balancing equipment to precisely measure and correct imbalances in your wheel-tire assemblies.\n\nRegular wheel balancing extends tire life, improves fuel efficiency, and ensures a smooth, comfortable ride.`,
    features: ['Computerized balancing equipment', 'Static and dynamic balancing', 'Vibration diagnosis and correction', 'Extended tire life', 'Improved fuel efficiency', 'All vehicle types serviced'],
  },
  {
    slug: 'custom-stickers',
    name: 'Custom Stickers',
    image: `${BASE}/2023/11/Untitled-design-3.png`,
    shortDesc: 'Express yourself on the road with unique stickers and decals. Choose your design, colour, and finish — fully removable and damage-free.',
    icon: 'Tag',
    longDesc: `Custom stickers and decals are an affordable way to personalize your vehicle. At Haven Tint & Tire, we offer high-quality custom-cut vinyl decals in any design, size, colour, and finish you can imagine.\n\nOur premium outdoor-rated vinyl is designed to withstand the elements, maintaining vibrant colour and crisp edges for years.`,
    features: ['Custom designs in any size or colour', 'Premium outdoor-rated vinyl', 'Cut-vinyl and printed options', 'Gloss, matte, and metallic finishes', 'Fully removable without damage', 'Easy application and long lifespan'],
  },
  {
    slug: 'tire-installation',
    name: 'Tire Installation',
    image: `${BASE}/2023/12/freepicdownloader.com-unrecognizable-mechanic-uniform-gloves-detaching-wheel-from-vehicle-work-professional-garage-normal.jpg`,
    shortDesc: 'Get your tires professionally installed for a safer, smoother, and more stable drive. Our experts mount, balance, and secure every tire with precision.',
    icon: 'Settings',
    longDesc: `Professional tire installation is critical for vehicle safety and performance. At Haven Tint & Tire, our certified technicians mount and balance every tire using state-of-the-art equipment, ensuring precise fitment and proper torque specifications.\n\nWe service all vehicle types from compact cars to SUVs and trucks, working with all major tire brands.`,
    features: ['All tire brands and sizes', 'Professional mounting and balancing', 'Valve stem replacement', 'Proper torque specifications', 'TPMS reset and programming', 'Post-installation safety inspection'],
  },
  {
    slug: 'logo-blackout',
    name: 'Logo Blackout',
    image: `${BASE}/2023/11/ChatGPT-Image-Mar-12-2026-10_18_36-PM-822x600.png`,
    shortDesc: 'Sleek logo blackout that replaces bright chrome badges with a modern black finish, giving your vehicle a cleaner and more aggressive look.',
    icon: 'Award',
    longDesc: `Logo and badge blackout is a clean, modern aesthetic modification that gives your vehicle a stealthy, de-badged look. We replace shiny chrome or coloured factory emblems with a uniform gloss or matte black finish.\n\nOur blackout process uses high-quality vinyl overlays ensuring durability and a factory-quality appearance.`,
    features: ['Gloss and matte black options', 'High-quality vinyl overlay application', 'Factory badge appearance maintained', 'Custom colour matching available', 'Reversible process', 'Works on all vehicle makes and models'],
  },
  {
    slug: 'headlight-restoration',
    name: 'Headlight Restoration',
    image: `${BASE}/2023/11/headlight-lamp-car-2-scaled-822x600.jpg`,
    shortDesc: 'Professional headlight restoration that removes oxidation and cloudiness, restoring clarity and improving visibility for safer nighttime driving.',
    icon: 'Sun',
    longDesc: `Over time, plastic headlight lenses become yellowed and oxidized from UV exposure, significantly reducing light output. Haven Tint & Tire's professional headlight restoration service removes this oxidation and restores crystal-clear clarity.\n\nOur multi-step wet-sanding and polishing process removes the damaged outer layer and applies a UV-resistant protective coating to prevent future oxidation.`,
    features: ['Multi-step wet-sanding restoration', 'Professional polishing and buffing', 'UV-resistant protective coating', 'Restored light output and clarity', 'Improved nighttime visibility', 'Significantly cheaper than replacement'],
  },
];

export const servicesBySlug: Record<string, (typeof services)[number]> = Object.fromEntries(
  services.map((s) => [s.slug, s])
);

export const navServices = services.map((s) => ({ name: s.name, slug: s.slug }));

export const pricingPlans = {
  monthly: [
    {
      name: 'Detailing BASIC',
      price: '$250',
      unit: '/car',
      features: ['Ceramic Coating', 'Color Changing Indoor Light', 'Heavy Duty Bumper', 'Tinting & Polish', 'Water Proofing'],
      highlighted: false,
    },
    {
      name: 'PREMIUM FIT',
      price: '$335.99',
      unit: '/car',
      features: ['Water Proofing of Glass', 'Seat Cover Installation', 'Color Changing Indoor Light', 'Heavy Duty Bumper', 'Tinting & Polish', ' Checking'],
      highlighted: true,
    },
  ],
  yearly: [
    {
      name: 'Detailing BASIC',
      price: '$2,400',
      unit: '/car',
      features: ['Ceramic Coating', 'Color Changing Indoor Light', 'Heavy Duty Bumper', 'Tinting & Polish', 'Water Proofing'],
      highlighted: false,
    },
    {
      name: 'PREMIUM FIT',
      price: '$3,800',
      unit: '/car',
      features: ['Water Proofing of Glass', 'Seat Cover Installation', 'Color Changing Indoor Light', 'Heavy Duty Bumper', 'Tinting & Polish',],
      highlighted: true,
    },
  ],
};

export const faqs = [
  {
    question: 'How long does ceramic coating last?',
    answer: 'Our professional ceramic coatings typically last 2–5 years depending on the grade applied and how well the vehicle is maintained. With proper care and regular washes, top-tier coatings can last even longer, keeping your paint looking flawless.',
  },
  {
    question: 'Can I book multiple services at once?',
    answer: 'Absolutely! Many of our clients combine services such as ceramic coating with window tinting, or PPF with vinyl wraps. Booking multiple services together often saves you time and we can offer package pricing.',
  },
  {
    question: 'Do you offer warranties or guarantees on your services?',
    answer: 'Yes, we stand behind the quality of all our work. Most of our services come with a satisfaction guarantee, and select products carry manufacturer warranties. We will discuss warranty details specific to your service during booking.',
  },
  {
    question: 'How flexible is your scheduling?',
    answer: 'We strive to accommodate your schedule as best we can. Both our Scarborough and Mississauga locations operate Monday through Saturday, 9am–7pm. We recommend booking in advance to secure your preferred time slot.',
  },
  {
    question: 'Is my vehicle safe during the service process?',
    answer: 'Vehicle safety is our top priority. Our fully equipped facilities are secured, our technicians are certified professionals, and all work is performed with the utmost care. Your vehicle is in expert hands from drop-off to pick-up.',
  },
  {
    question: 'How do I prepare my vehicle before dropping it off?',
    answer: 'For most services, simply remove any personal belongings from your vehicle. For ceramic coating or PPF, we perform a full decontamination wash as part of our prep process. Our team will advise you on any specific preparation steps when you book.',
  },
];

export const whyChooseUs = [
  {
    icon: 'ShieldCheck',
    title: 'Precision-Certified Technicians',
    desc: 'Our experts are rigorously trained in modern automotive protection and performance systems, delivering flawless results every time.',
  },
  {
    icon: 'Shield',
    title: 'Cutting-Edge Car Protection',
    desc: 'We apply industry-leading coatings and treatments that guard against scratches, corrosion, and wear while boosting long-term performance.',
  },
  {
    icon: 'Wrench',
    title: 'Personalized Vehicle Plans',
    desc: 'We ensure every car gets a customized care strategy, tailored to its model, mileage, and your driving habits for optimal longevity and efficiency.',
  },
  {
    icon: 'Eye',
    title: 'Transparent Results, No Guesswork',
    desc: "We provide clear inspections, detailed reports, and measurable outcomes, so you always know exactly what's being done.",
  },
];

export const stats = [
  { value: '1200+', label: 'VEHICLES PROTECTED', sub: 'WITH A FLAWLESS SHINE' },
  { value: '850+', label: 'CARS UPGRADED', sub: 'FOR COMFORT & PRIVACY' },
  { value: '1,500+', label: 'TIRES INSTALLED', sub: 'FOR MAXIMUM SAFETY' },
];

export const googleReviews = [
  { name: 'Vithu Shan', initial: 'V', bg: '#1e7e34', date: '2 months ago', rating: 5, text: 'Good tont instalation recommended everyone.', hasMore: false },
  { name: 'Allan Carvajal', initial: 'A', bg: '#e01e25', date: '2 months ago', rating: 5, text: "We went to Haven Tint & tire Garage on March 1, 2026 & met Mohamad. I told him i chatted with someone in messenger...", hasMore: true },
  { name: 'Rafael Minyety', initial: 'R', bg: '#1a73e8', date: '2 months ago', rating: 5, text: 'Good service great job , thank you Muhammad', hasMore: false },
  { name: 'Vijay Naidu', initial: 'V', bg: '#34a853', date: '2 months ago', rating: 5, text: "Genuine people, reasonable rates, they don't cheat you with high price devices rather give genuine rates. Owner was super helpful. M...", hasMore: true },
  { name: 'Ivan', initial: 'I', bg: '#ff6b35', date: '2 months ago', rating: 5, text: 'Thank you very much for your job', hasMore: false },
  { name: 'Sarah M.', initial: 'S', bg: '#9c27b0', date: '3 months ago', rating: 5, text: 'Amazing service! My car looks brand new after the ceramic coating. Highly recommend to everyone!', hasMore: false },
  { name: 'Mike T.', initial: 'M', bg: '#00bcd4', date: '3 months ago', rating: 5, text: 'Professional team, great prices, fast service. The window tint looks perfect. Will definitely come back!', hasMore: false },
];

export const portfolio = [
  { image: `${BASE}/2023/11/image-post-1-600x780.jpg`, title: 'Brake Repairing' },
  { image: `${BASE}/2023/11/post-image-6-600x780.jpg`, title: 'Body Repairing' },
  { image: `${BASE}/2023/11/post-image-2-600x780.jpg`, title: 'Car Wash & Polish' },
  { image: `${BASE}/2023/11/glry-6-600x780.jpg`, title: 'Automotive Filters' },
  { image: `${BASE}/2023/12/portfolio-4-600x780.jpg`, title: 'Annual Technical Car Inspection' },
  { image: `${BASE}/2023/12/portfolio-3-600x780.jpg`, title: 'Diesel Oil Brake Change Promotion' },
];

export const blogPosts = [
  {
    image: `${BASE}/2023/11/post-image-8-700x450.jpg`,
    date: 'Nov 29, 2023',
    author: 'Admin',
    title: 'The world\'s first supercar that shows the true power of speed',
    slug: 'worlds-first-supercar',
  },
  {
    image: `${BASE}/2023/11/post-image-7-700x450.jpg`,
    date: 'Nov 22, 2023',
    author: 'Admin',
    title: 'Job opportunities for car detailing & car servicing experts 2023',
    slug: 'job-opportunities-2023',
  },
  {
    image: `${BASE}/2023/11/post-image-6-700x450.jpg`,
    date: 'Nov 22, 2023',
    author: 'Admin',
    title: 'Quality repairs for your car at affordable prices',
    slug: 'quality-repairs-affordable',
  },
  {
    image: `${BASE}/2023/11/post-image-5-700x450.jpg`,
    date: 'Nov 22, 2023',
    author: 'Admin',
    title: 'How speed of your car affect the fitness of your car parts & engine',
    slug: 'how-speed-affects-engine',
  },
  {
    image: `${BASE}/2023/11/post-image-2-700x450.jpg`,
    date: 'Nov 22, 2023',
    author: 'Admin',
    title: "Do's & Don'ts when you are trying to change flat tires of your car",
    slug: 'dos-donts-flat-tires',
  },
  {
    image: `${BASE}/2023/11/post-image-4-700x450.jpg`,
    date: 'Nov 21, 2023',
    author: 'Admin',
    title: 'Modern tools & engine oils for luxury car engine like Ferrari or Lamborghini',
    slug: 'modern-tools-luxury-cars',
  },
];

export const locations = [
  {
    name: 'Mississauga',
    address: '2394 Haines Road, Unit 8 & 9, ON, Canada L4Y1Y6',
    phone: '(905) 803-0000',
    phoneRaw: '+19058030000',
    hours: 'Mon – Sat: 9:00 AM – 7:00 PM',
    dayClosed: 'Sunday: Closed',
    mapUrl: 'https://www.google.com/maps?q=2394+Haines+Road,+Unit+8+%26+9,+Mississauga,+L4Y1Y6',
  },
];

export const LOGO_URL = `${BASE}/2023/11/dc1597940166d9246f0102858f084c26_exif__1_-removebg-preview-1.webp`;
export const LOGO_LIGHT_URL = `${BASE}/2024/02/logo-light.png`;
export const WHEEL_IMG = `${BASE}/2023/12/wheel-1-min.png`;
export const HERO_IMG1 = `${BASE}/2023/11/post-image-3-500x718.jpg`;
export const HERO_IMG2 = `${BASE}/2023/12/image-bn2-500x718.jpg`;
export const MAN_FOOTER = `${BASE}/2023/11/man-footer.png`;
export const DC_CAR = `${BASE}/2026/03/DC-CAR-6.png`;
export const DOTTED_GRID = `${BASE}/2023/12/Shape-dotted-grid.png`;
export const DOTTED_GRID2 = `${BASE}/2023/12/dosted-grid.png`;
export const WRENCH_IMG = `${BASE}/2023/12/wrench.png`;
export const ELLIPSE_IMG = `${BASE}/2023/12/Ellipse-holder.png`;
export const BANNER1 = `${BASE}/2023/12/banner-1-600x883.jpg`;
export const BANNER2 = `${BASE}/2023/12/banner-2.png`;
export const TECH_TIRES = `${BASE}/2023/11/post-image-3-500x718.jpg`;
export const CTA_TECH = `${BASE}/2023/12/banner-1-600x883.jpg`;
export const HERO_BG    = `${BASE}/2026/03/ChatGPT-Image-Mar-14-2026-12_32_16-AM-822x600.png`;
export const HERO_MAIN  = `${BASE}/2024/01/bg-slide-home-1-min.jpg`;
export const GR_ARROW = `${BASE}/2023/12/gr-arrow1.png`;
export const WHY_CHOOSE_IMG = `${BASE}/2023/12/freepicdownloader.com-experienced-repairman-preparing-new-tire-be-mounted-wheel-normal.jpg`;
export const ABOUT_GARAGE = `${BASE}/2026/03/ChatGPT-Image-Mar-6-2026-04_24_16-AM-e1772758607845.png`;
export const ABOUT_CAR = `${BASE}/2026/03/front-left-wheel-red-luxury-car-1024x1536.jpg`;
export const GTR_IMG   = `${BASE}/2023/12/gtr-1.png`;
export const FRAME_CAR = `${BASE}/2023/12/Frame-primary-dow.png`;
