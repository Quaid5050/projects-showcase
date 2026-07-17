import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const pricing = [
  {
    title: "Initial Consultation",
    description: "A detailed first conversation to understand your concern and wellness goals.",
    price: "Contact on WhatsApp",
    duration: "60–90 minutes",
    order: 1,
  },
  {
    title: "Follow-Up Consultation",
    description: "Continued support and guidance after your first consultation.",
    price: "Contact on WhatsApp",
    duration: "30–45 minutes",
    order: 2,
  },
  {
    title: "Children's Consultation",
    description: "Gentle consultation support for children's health and wellness concerns.",
    price: "Contact on WhatsApp",
    duration: "45–60 minutes",
    order: 3,
  },
  {
    title: "Women's Wellness Consultation",
    description: "Personalized support for women's wellness concerns across all stages of life.",
    price: "Contact on WhatsApp",
    duration: "60 minutes",
    order: 4,
  },
  {
    title: "Family Wellness Consultation",
    description: "Comprehensive wellness guidance for families.",
    price: "Contact on WhatsApp",
    duration: "60–75 minutes",
    order: 5,
  },
  {
    title: "Product / Remedy Guidance",
    description: "Ask about available homeopathic products for your wellness needs.",
    price: "Contact on WhatsApp",
    duration: "15–30 minutes",
    order: 6,
  },
];

export async function GET() {
  return NextResponse.json({ success: true, pricing }, { status: 200 });
}
