import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const products = [
  {
    id: 1,
    name: "Women's Wellness Support Remedy",
    category: "Women's Wellness",
    shortDescription: "Gentle homeopathic support for women's everyday wellness.",
    price: "Contact on WhatsApp",
    availability: "Available",
    image: "/product-women-wellness.png",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Children's Gentle Wellness Remedy",
    category: "Children's Support",
    shortDescription: "Safe, gentle homeopathic support tailored for children.",
    price: "Contact on WhatsApp",
    availability: "Available",
    image: "/product-children-wellness.png",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Digestive Comfort Support",
    category: "General Wellness",
    shortDescription: "Homeopathic support for everyday digestive comfort.",
    price: "Contact on WhatsApp",
    availability: "Available",
    image: "/product-digestive.png",
    isFeatured: true,
  },
  {
    id: 4,
    name: "Skin & Hair Wellness Support",
    category: "Women's Wellness",
    shortDescription: "Holistic homeopathic support for skin and hair wellness.",
    price: "Contact on WhatsApp",
    availability: "Available",
    image: "/product-skin-hair.png",
    isFeatured: false,
  },
  {
    id: 5,
    name: "Stress & Sleep Support",
    category: "General Wellness",
    shortDescription: "Calming homeopathic support for stress and sleep wellness.",
    price: "Contact on WhatsApp",
    availability: "Available",
    image: "/product-stress-sleep.png",
    isFeatured: true,
  },
  {
    id: 6,
    name: "General Family Wellness Remedy",
    category: "General Wellness",
    shortDescription: "Comprehensive wellness support for the whole family.",
    price: "Contact on WhatsApp",
    availability: "Available",
    image: "/product-family-wellness.png",
    isFeatured: false,
  },
  {
    id: 7,
    name: "Seasonal Wellness Support",
    category: "General Wellness",
    shortDescription: "Gentle support for seasonal wellness transitions.",
    price: "Contact on WhatsApp",
    availability: "Available",
    image: "/product-seasonal.png",
    isFeatured: false,
  },
  {
    id: 8,
    name: "Natural Care Consultation Product",
    category: "Homeopathic Remedies",
    shortDescription: "Ask about available natural care remedies for your specific needs.",
    price: "Contact on WhatsApp",
    availability: "By Consultation",
    image: "/product-consultation.png",
    isFeatured: false,
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");

  let filtered = products;

  if (category && category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (featured === "true") {
    filtered = filtered.filter((p) => p.isFeatured);
  }

  return NextResponse.json({ success: true, products: filtered }, { status: 200 });
}
