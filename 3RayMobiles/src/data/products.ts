import type { Product } from "@/types/product";

// ─── Real product photos from /public folder ──────────────────────────────
const PUB = {
  // iPhones
  iphone17promax: "/IPhone 17 pro max (1).jpg",
  iphoneX:      "/Iphone x.jpeg",
  iphoneXs:     "/iphone xs.jpeg",
  iphone11:     "/Iphone 11.jpeg",
  iphone12:     "/Iphone 12.jpeg",
  iphone13:     "/Iphone 13.png",
  iphone16pro:  "/Iphone16 pro max.jpeg",
  // Google Pixels
  pixel6:       "/Google Pixel 6.jpeg",
  pixel7:       "/Google Pixel 7.jpeg",
  pixel8:       "/Google pixel 8.png",
  pixel9pro:    "/Google pixel 9 PRO.jpeg",
  // Samsung
  galaxyFold6:  "/Galaxy Z fold 6.jpeg",
  galaxyS24:    "/Galaxy S 24 Ultra.jpeg",
  galaxyS23:    "/Galaxy S 23.jpeg",
  // Chargers
  appleCharger: "/apple 200 usb c charger.jpeg",
  magsafe:      "/apple mag safe  charger.jpeg",
  anker65w:     "/Anker 65 w gan charger.jpeg",
  baseus100w:   "/baseus 100 w  4 port gan.jpeg",
  // Earbuds & accessories
  airpodsMax:   "/apple  airpod max.jpeg",
  sonyEarbuds:  "/sony wf1000xm5.jpeg",
  jabra:        "/jabra elite 10.jpeg",
  spigenCase:   "/spigen tough armor.jpeg",
  // Tablets
  ipadPro13:    "/The iPad Pro is one of the best iPad lines out….jpg",
};

// ─── Pexels fallbacks for products without a local photo ──────────────────
const EXT = {
  iphone14:     "https://images.pexels.com/photos/16005007/pexels-photo-16005007.jpeg?auto=compress&w=800",
  iphone15:     "https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&w=800",
  airpodsPro:   "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&w=800",
  appleWatch:   "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&w=800",
  galaxyWatch:  "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&w=800",
  wirelessPad:  "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&w=800",
  carCharger:   "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&w=800",
  macbookAirM1: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&w=800",
  macbookAirM2: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=800",
  macbookPro14: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&w=800",
  macbookPro16: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&w=800",
  dellXps:      "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&w=800",
  gamingLaptop: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&w=800",
  rogLaptop:    "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&w=800",
  hpLaptop:     "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&w=800",
};

export const products: Product[] = [

  // ══════════════════════════════════════════════════════
  // MOBILES — iPhones X → 16 Pro Max
  // ══════════════════════════════════════════════════════
  {
    id: "ip-x", slug: "iphone-x", name: "iPhone X",
    brand: "Apple", category: "mobiles", condition: "Used",
    image: PUB.iphoneX, gallery: [PUB.iphoneX, PUB.iphoneXs],
    description: "The phone that started the all-screen era. OLED display, Face ID, and dual cameras in a stainless steel frame. Refurbished to excellent condition.",
    specs: ['5.8" Super Retina OLED', "A11 Bionic chip", "64GB / 256GB", "Dual 12MP cameras", "Face ID", "Wireless charging"],
  },
  {
    id: "ip-xs", slug: "iphone-xs", name: "iPhone XS",
    brand: "Apple", category: "mobiles", condition: "Used",
    image: PUB.iphoneXs, gallery: [PUB.iphoneXs, PUB.iphoneX],
    description: "Refined OLED design with improved cameras and faster A12 Bionic chip. Certified pre-owned in great condition.",
    specs: ['5.8" Super Retina OLED', "A12 Bionic chip", "64GB / 256GB / 512GB", "Dual 12MP cameras", "Face ID", "IP68 water resistance"],
  },
  {
    id: "ip-11", slug: "iphone-11", name: "iPhone 11",
    brand: "Apple", category: "mobiles", condition: "Used",
    image: PUB.iphone11, gallery: [PUB.iphone11, PUB.iphoneXs],
    description: "Dual-camera system with Night mode, all-day battery, and the powerful A13 Bionic. A great value refurbished iPhone.",
    specs: ['6.1" Liquid Retina LCD', "A13 Bionic chip", "64GB / 128GB / 256GB", "Dual 12MP + Night mode", "Face ID", "IP68 rated"],
  },
  {
    id: "ip-12", slug: "iphone-12", name: "iPhone 12",
    brand: "Apple", category: "mobiles", condition: "Used",
    image: PUB.iphone12, gallery: [PUB.iphone12, PUB.iphone11],
    description: "5G-ready iPhone with Ceramic Shield, OLED display, and MagSafe. Refurbished and ready to go.",
    specs: ['6.1" Super Retina XDR OLED', "A14 Bionic chip", "64GB / 128GB / 256GB", "Dual 12MP cameras", "5G + MagSafe", "Ceramic Shield"],
  },
  {
    id: "ip-13", slug: "iphone-13", name: "iPhone 13",
    brand: "Apple", category: "mobiles", condition: "Used",
    image: PUB.iphone13, gallery: [PUB.iphone13, PUB.iphone12],
    description: "Cinematic mode video, improved battery life, and A15 Bionic. One of the best value iPhones available pre-owned.",
    specs: ['6.1" Super Retina XDR OLED', "A15 Bionic chip", "128GB / 256GB / 512GB", "Dual 12MP + Cinematic mode", "5G + MagSafe", "IP68"],
    featured: true,
  },
  {
    id: "ip-14", slug: "iphone-14", name: "iPhone 14",
    brand: "Apple", category: "mobiles", condition: "New",
    image: EXT.iphone14, gallery: [EXT.iphone14, PUB.iphone13],
    description: "Crash Detection, Emergency SOS via satellite, and an improved front camera. Brand new sealed unit.",
    specs: ['6.1" Super Retina XDR OLED', "A15 Bionic chip", "128GB / 256GB / 512GB", "Dual 12MP cameras", "Crash Detection", "5G + MagSafe"],
  },
  {
    id: "ip-15", slug: "iphone-15", name: "iPhone 15",
    brand: "Apple", category: "mobiles", condition: "New",
    image: EXT.iphone15, gallery: [EXT.iphone15, EXT.iphone14],
    description: "USB-C arrives on iPhone. Dynamic Island, 48MP main camera, and A16 Bionic. Brand new.",
    specs: ['6.1" Super Retina XDR OLED', "A16 Bionic chip", "128GB / 256GB / 512GB", "48MP main + 12MP ultra-wide", "Dynamic Island", "USB-C"],
    featured: true,
  },
  {
    id: "ip-16pro", slug: "iphone-16-pro-max", name: "iPhone 16 Pro Max",
    brand: "Apple", category: "mobiles", condition: "New",
    image: PUB.iphone16pro, gallery: [PUB.iphone16pro, EXT.iphone15],
    description: "The ultimate iPhone. Titanium frame, A18 Pro chip, 5x optical zoom, and Camera Control button.",
    specs: ['6.9" Super Retina XDR OLED, 120Hz', "A18 Pro chip", "256GB / 512GB / 1TB", "Triple 48MP + 5x zoom", "Camera Control button", "Titanium, IP68"],
    featured: true,
  },
  {
    id: "ip-17pro", slug: "iphone-17-pro-max", name: "iPhone 17 Pro Max (eSIM, CA Spec)",
    brand: "Apple", category: "mobiles", condition: "New",
    image: PUB.iphone17promax, gallery: [PUB.iphone17promax, PUB.iphone16pro],
    description: "The most advanced iPhone ever. Canadian spec eSIM model available in all colours. A19 Pro chip, next-generation camera system with 5x optical zoom, and the thinnest Pro design yet.",
    specs: ['6.9" Super Retina XDR OLED, ProMotion 120Hz', "A19 Pro chip", "256GB / 512GB / 1TB", "Triple 48MP + 5x optical zoom", "Camera Control button", "eSIM only · CA Spec · All Colours", "Titanium frame, IP68"],
    featured: true,
  },

  // ══════════════════════════════════════════════════════
  // MOBILES — Google Pixels
  // ══════════════════════════════════════════════════════
  {
    id: "gp-6", slug: "google-pixel-6", name: "Google Pixel 6",
    brand: "Google", category: "mobiles", condition: "Used",
    image: PUB.pixel6, gallery: [PUB.pixel6, PUB.pixel7],
    description: "Google's first custom Tensor chip. Exceptional computational photography and pure Android. Refurbished.",
    specs: ['6.4" AMOLED, 90Hz', "Google Tensor G1", "8GB RAM · 128GB / 256GB", "50MP main + 12MP ultra-wide", "Magic Eraser, Real Tone", "5G"],
  },
  {
    id: "gp-7", slug: "google-pixel-7", name: "Google Pixel 7",
    brand: "Google", category: "mobiles", condition: "Used",
    image: PUB.pixel7, gallery: [PUB.pixel7, PUB.pixel6],
    description: "Tensor G2 chip with improved AI features, better cameras, and a refined design. Certified pre-owned.",
    specs: ['6.3" AMOLED, 90Hz', "Google Tensor G2", "8GB RAM · 128GB / 256GB", "50MP main + 12MP ultra-wide", "Photo Unblur, Face Unblur", "5G"],
  },
  {
    id: "gp-8", slug: "google-pixel-8", name: "Google Pixel 8",
    brand: "Google", category: "mobiles", condition: "New",
    image: PUB.pixel8, gallery: [PUB.pixel8, PUB.pixel7],
    description: "Tensor G3 with Google AI built in. Best-in-class photo editing and 7 years of OS updates guaranteed.",
    specs: ['6.2" OLED, 120Hz', "Google Tensor G3", "8GB RAM · 128GB / 256GB", "50MP main + 12MP ultra-wide", "Magic Editor, Best Take", "7 years updates"],
    featured: true,
  },
  {
    id: "gp-9pro", slug: "google-pixel-9-pro", name: "Google Pixel 9 Pro",
    brand: "Google", category: "mobiles", condition: "New",
    image: PUB.pixel9pro, gallery: [PUB.pixel9pro, PUB.pixel8],
    description: "The most powerful Pixel ever. Tensor G4, triple camera system, and Gemini AI built in. Brand new.",
    specs: ['6.3" LTPO OLED, 1-120Hz', "Google Tensor G4", "16GB RAM · 256GB / 512GB", "50MP + 48MP tele + 48MP ultra-wide", "Gemini AI", "7 years updates"],
    featured: true,
  },

  // ══════════════════════════════════════════════════════
  // MOBILES — Samsung
  // ══════════════════════════════════════════════════════
  {
    id: "ss-fold6", slug: "galaxy-z-fold-6", name: "Galaxy Z Fold 6",
    brand: "Samsung", category: "mobiles", condition: "New",
    image: PUB.galaxyFold6, gallery: [PUB.galaxyFold6, PUB.galaxyS24],
    description: "Unfold a new way to work and play. The most refined foldable with Galaxy AI and S Pen support.",
    specs: ['7.6" Dynamic AMOLED foldable', "Snapdragon 8 Gen 3", "12GB RAM · 256GB / 512GB", "Triple 50MP cameras", "S Pen support", "Galaxy AI"],
    featured: true,
  },
  {
    id: "ss-s24u", slug: "galaxy-s24-ultra", name: "Galaxy S24 Ultra",
    brand: "Samsung", category: "mobiles", condition: "New",
    image: PUB.galaxyS24, gallery: [PUB.galaxyS24, PUB.galaxyFold6],
    description: "200MP camera, built-in S Pen, titanium frame, and Galaxy AI. The ultimate Android flagship.",
    specs: ['6.8" Dynamic AMOLED 2X, 120Hz', "Snapdragon 8 Gen 3", "12GB RAM · 256GB / 512GB / 1TB", "200MP quad camera + S Pen", "Galaxy AI", "Titanium frame"],
  },
  {
    id: "ss-s23", slug: "galaxy-s23", name: "Galaxy S23",
    brand: "Samsung", category: "mobiles", condition: "Used",
    image: PUB.galaxyS23, gallery: [PUB.galaxyS23, PUB.galaxyS24],
    description: "Snapdragon 8 Gen 2 performance with a 50MP camera. Certified pre-owned in excellent condition.",
    specs: ['6.1" Dynamic AMOLED 2X, 120Hz', "Snapdragon 8 Gen 2", "8GB RAM · 128GB / 256GB", "50MP triple camera", "5G", "IP68 rated"],
  },

  // ══════════════════════════════════════════════════════
  // TABLETS — iPad
  // ══════════════════════════════════════════════════════
  {
    id: "ipad-pro-13-m5", slug: "apple-ipad-pro-13-m5-256gb-space-black",
    name: 'Apple iPad Pro 13" M5 Wi-Fi 256GB Space Black',
    brand: "Apple", category: "tablets", condition: "New",
    image: PUB.ipadPro13, gallery: [PUB.ipadPro13],
    description: "The most powerful iPad ever. M5 chip delivers desktop-class performance in an impossibly thin design. Model MDYJ4LL/A — Space Black, 256GB Wi-Fi.",
    specs: ['13" Ultra Retina XDR OLED, ProMotion 120Hz', "Apple M5 chip", "16GB unified memory · 256GB storage", "Wi-Fi 6E + Bluetooth 5.3", "12MP Wide + 12MP Ultra Wide cameras", "USB-C Thunderbolt 4", "Apple Pencil Pro & Magic Keyboard compatible", "Model: MDYJ4LL/A · Space Black"],
    featured: true,
  },

  // ══════════════════════════════════════════════════════
  // LAPTOPS — Mac lineup
  // ══════════════════════════════════════════════════════
  {
    id: "mb-air-m1", slug: "macbook-air-m1", name: "MacBook Air M1",
    brand: "Apple", category: "laptops", condition: "Used",
    image: EXT.macbookAirM1, gallery: [EXT.macbookAirM1, EXT.macbookAirM2],
    subType: "Student",
    description: "The chip that changed everything. Fanless, silent, and incredibly fast. Refurbished — perfect for students and everyday use.",
    specs: ['13.3" Retina IPS display', "Apple M1 · 8-core CPU", "8GB / 16GB unified memory", "256GB / 512GB SSD", "Up to 18 hours battery", "Two Thunderbolt / USB 4 ports"],
  },
  {
    id: "mb-air-m2", slug: "macbook-air-m2", name: "MacBook Air M2",
    brand: "Apple", category: "laptops", condition: "New",
    image: EXT.macbookAirM2, gallery: [EXT.macbookAirM2, EXT.macbookPro14],
    subType: "Student",
    description: "Redesigned from the ground up. Liquid Retina display, MagSafe charging, and M2 performance in the thinnest MacBook ever.",
    specs: ['13.6" Liquid Retina display', "Apple M2 · 8-core CPU", "8GB / 16GB / 24GB unified memory", "256GB – 2TB SSD", "Up to 18 hours battery", "MagSafe 3 + two Thunderbolt 4"],
    featured: true,
  },
  {
    id: "mb-pro-14", slug: "macbook-pro-14-m4", name: 'MacBook Pro 14" M4 Pro',
    brand: "Apple", category: "laptops", condition: "New",
    image: EXT.macbookPro14, gallery: [EXT.macbookPro14, EXT.macbookAirM2],
    subType: "Business",
    description: "Pro-grade performance for developers, designers, and creators. M4 Pro chip with Liquid Retina XDR display and all-day battery.",
    specs: ['14.2" Liquid Retina XDR display', "M4 Pro · 12-core CPU · 20-core GPU", "24GB / 48GB unified memory", "512GB – 4TB SSD", "Up to 22 hours battery", "Three Thunderbolt 5 + HDMI + SD"],
    featured: true,
  },
  {
    id: "mb-pro-16", slug: "macbook-pro-16-m4-max", name: 'MacBook Pro 16" M4 Max',
    brand: "Apple", category: "laptops", condition: "New",
    image: EXT.macbookPro16, gallery: [EXT.macbookPro16, EXT.macbookPro14],
    subType: "Business",
    description: "The most powerful MacBook ever made. M4 Max chip handles 8K video, 3D rendering, and complex ML workloads without breaking a sweat.",
    specs: ['16.2" Liquid Retina XDR display', "M4 Max · 16-core CPU · 40-core GPU", "48GB / 128GB unified memory", "1TB – 8TB SSD", "Up to 24 hours battery", "Three Thunderbolt 5 + HDMI + SD"],
  },

  // ══════════════════════════════════════════════════════
  // LAPTOPS — Windows
  // ══════════════════════════════════════════════════════
  {
    id: "dell-xps", slug: "dell-xps-13", name: "Dell XPS 13",
    brand: "Dell", category: "laptops", condition: "Used",
    image: EXT.dellXps, subType: "Student",
    description: "Compact InfinityEdge ultrabook refurbished to excellent condition. Ideal for students and travelers.",
    specs: ['13.4" InfinityEdge FHD+', "Intel Core i7 (12th gen)", "16GB LPDDR5", "512GB SSD", "Up to 13 hours battery", "1.2kg aluminum chassis"],
  },
  {
    id: "rz-blade", slug: "razer-blade-16", name: "Razer Blade 16",
    brand: "Razer", category: "laptops", condition: "New",
    image: EXT.gamingLaptop, gallery: [EXT.gamingLaptop, EXT.rogLaptop],
    subType: "Gaming",
    description: "Tournament-ready gaming laptop with per-key RGB, 240Hz display, and RTX 4080. Dominate every game.",
    specs: ['16" QHD+ 240Hz display', "Intel Core i9-14900HX", "NVIDIA RTX 4080 16GB", "32GB DDR5 RAM", "1TB NVMe SSD", "Per-key Chroma RGB"],
    featured: true,
  },
  {
    id: "asus-rog", slug: "asus-rog-zephyrus-g16", name: "ASUS ROG Zephyrus G16",
    brand: "ASUS", category: "laptops", condition: "New",
    image: EXT.rogLaptop, gallery: [EXT.rogLaptop, EXT.gamingLaptop],
    subType: "Gaming",
    description: "Ultra-slim OLED gaming powerhouse. RTX 4070 in a chassis thin enough to carry anywhere.",
    specs: ['16" OLED QHD+ 240Hz', "Intel Core i9-14900H", "NVIDIA RTX 4070 8GB", "16GB DDR5", "1TB PCIe 4.0 SSD", "MUX Switch + Dolby Atmos"],
  },
  {
    id: "hp-pav", slug: "hp-pavilion-15", name: "HP Pavilion 15",
    brand: "HP", category: "laptops", condition: "New",
    image: EXT.hpLaptop, subType: "Student",
    description: "Reliable everyday laptop for students. Solid AMD performance, vibrant display, and a budget-friendly price.",
    specs: ['15.6" FHD IPS', "AMD Ryzen 5 7530U", "8GB DDR4", "256GB SSD", "Up to 8.5 hours battery", "Backlit keyboard"],
  },

  // ══════════════════════════════════════════════════════
  // ACCESSORIES — Chargers
  // ══════════════════════════════════════════════════════
  {
    id: "ch-apple20", slug: "apple-20w-usbc-charger", name: "Apple 20W USB-C Charger",
    brand: "Apple", category: "accessories", condition: "New",
    image: PUB.appleCharger, subType: "Chargers",
    description: "Official Apple 20W USB-C Power Adapter. Fast-charges iPhone 8 and later to 50% in 30 minutes.",
    specs: ["20W USB-C Power Delivery", "Fast charge iPhone 8+", "Compact foldable design", "Compatible with iPad & AirPods", "Official Apple product"],
  },
  {
    id: "ch-magsafe", slug: "apple-magsafe-charger", name: "Apple MagSafe Charger",
    brand: "Apple", category: "accessories", condition: "New",
    image: PUB.magsafe, subType: "Chargers",
    description: "Snap-on magnetic wireless charging for iPhone 12 and later. Up to 15W fast wireless charging.",
    specs: ["15W MagSafe wireless charging", "Magnetic alignment", "Compatible with iPhone 12-16", "1m braided cable", "USB-C connector"],
  },
  {
    id: "ch-anker65", slug: "anker-65w-gan-charger", name: "Anker 65W GaN Charger",
    brand: "Anker", category: "accessories", condition: "New",
    image: PUB.anker65w, subType: "Chargers",
    description: "Compact GaN II charger that powers laptops, tablets, and phones simultaneously. Travel-ready.",
    specs: ["65W USB-C Power Delivery", "GaN II technology", "PPS fast charging", "Foldable plug", "ActiveShield safety", "MacBook Air compatible"],
  },
  {
    id: "ch-baseus100", slug: "baseus-100w-gan-charger", name: "Baseus 100W 4-Port GaN",
    brand: "Baseus", category: "accessories", condition: "New",
    image: PUB.baseus100w, subType: "Chargers",
    description: "Power your entire desk from one outlet. 2x USB-C + 2x USB-A with smart power distribution.",
    specs: ["100W total output", "2x USB-C + 2x USB-A", "GaN III technology", "PD 3.0 + QC 4.0", "Smart power distribution", "Compact design"],
  },
  {
    id: "ch-wireless", slug: "belkin-wireless-charger", name: "Belkin 15W Wireless Pad",
    brand: "Belkin", category: "accessories", condition: "New",
    image: EXT.wirelessPad, subType: "Chargers",
    description: "Qi2 wireless charging pad with 15W fast charge for iPhone and Android. No cables, just place and charge.",
    specs: ["15W Qi2 wireless charging", "Compatible with iPhone 12+", "Works with all Qi devices", "LED charging indicator", "Non-slip surface", "USB-C input"],
  },
  {
    id: "ch-car", slug: "anker-car-charger", name: "Anker 30W Car Charger",
    brand: "Anker", category: "accessories", condition: "New",
    image: EXT.carCharger, subType: "Chargers",
    description: "Dual-port car charger with USB-C PD and USB-A. Charge two devices at full speed on the go.",
    specs: ["30W USB-C Power Delivery", "12W USB-A port", "Compact flush design", "PowerIQ 3.0", "Universal compatibility", "LED indicator"],
  },

  // ══════════════════════════════════════════════════════
  // ACCESSORIES — Earbuds, Watches, Cases
  // ══════════════════════════════════════════════════════
  {
    id: "ap-pro2", slug: "airpods-pro-2", name: "AirPods Pro (2nd Gen)",
    brand: "Apple", category: "accessories", condition: "New",
    image: EXT.airpodsPro, subType: "Earbuds",
    description: "Best-in-class Active Noise Cancellation with Adaptive Audio. H2 chip, USB-C case, and 30-hour total battery.",
    specs: ["H2 chip", "Adaptive ANC + Transparency", "Up to 6h (30h with case)", "USB-C MagSafe case", "IPX4 rated", "Personalised Spatial Audio"],
    featured: true,
  },
  {
    id: "ap-max", slug: "airpods-max", name: "AirPods Max",
    brand: "Apple", category: "accessories", condition: "New",
    image: PUB.airpodsMax, subType: "Earbuds",
    description: "Over-ear headphones with Apple-designed drivers, Active Noise Cancellation, and Spatial Audio. Premium sound.",
    specs: ["Apple H1 chip per cup", "Active Noise Cancellation", "Transparency mode", "Up to 20h battery", "Computational audio", "USB-C charging"],
  },
  {
    id: "sn-xm5", slug: "sony-wf-1000xm5", name: "Sony WF-1000XM5",
    brand: "Sony", category: "accessories", condition: "New",
    image: PUB.sonyEarbuds, subType: "Earbuds",
    description: "Industry-leading ANC with Adaptive Sound Control. 30-hour total battery and Qi wireless charging.",
    specs: ["Industry-leading ANC", "Adaptive transparency", "8h + 22h with case", "Qi wireless charging", "IPX4 rated", "Multipoint Bluetooth 5.3"],
    featured: true,
  },
  {
    id: "jb-elite10", slug: "jabra-elite-10", name: "Jabra Elite 10",
    brand: "Jabra", category: "accessories", condition: "New",
    image: PUB.jabra, subType: "Earbuds",
    description: "Dolby Atmos spatial audio with 6-mic call technology. Built for professionals who demand the best.",
    specs: ["Dolby Atmos spatial audio", "Advanced ANC", "6h + 21h with case", "IP57 rated", "6-mic call tech", "Multipoint Bluetooth 5.3"],
  },
  {
    id: "aw-s10", slug: "apple-watch-series-10", name: "Apple Watch Series 10",
    brand: "Apple", category: "accessories", condition: "New",
    image: EXT.appleWatch, gallery: [EXT.appleWatch, EXT.galaxyWatch],
    subType: "Smartwatches",
    description: "Thinnest Apple Watch ever with the largest display. Advanced health sensors, ECG, and crash detection.",
    specs: ["46mm aluminum case", "Always-on Retina LTPO", "ECG + Blood oxygen + Temperature", "GPS + Cellular available", "50m water resistance", "watchOS latest"],
  },
  {
    id: "gw-6c", slug: "galaxy-watch-6-classic", name: "Galaxy Watch 6 Classic",
    brand: "Samsung", category: "accessories", condition: "New",
    image: EXT.galaxyWatch, gallery: [EXT.galaxyWatch, EXT.appleWatch],
    subType: "Smartwatches",
    description: "Iconic rotating bezel with advanced health tracking. The best Android smartwatch available.",
    specs: ["47mm stainless steel", "Super AMOLED display", "BioActive sensor (ECG, BIA)", "GPS + LTE available", "5ATM + IP68", "Wear OS 5"],
  },
  {
    id: "sp-armor", slug: "spigen-tough-armor", name: "Spigen Tough Armor",
    brand: "Spigen", category: "accessories", condition: "New",
    image: PUB.spigenCase, subType: "Cases",
    description: "MIL-STD-810G drop protection with a built-in kickstand. Dual-layer shock absorption.",
    specs: ["MIL-STD-810G tested", "Dual-layer TPU + PC", "Built-in kickstand", "Raised bezels", "Wireless charging compatible"],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: Product["category"]) =>
  products.filter((p) => p.category === category);

export const featuredProducts = products.filter((p) => p.featured);
