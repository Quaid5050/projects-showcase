import { 
  Smartphone, 
  ShoppingBag, 
  Truck, 
  Globe, 
  Gift, 
  BarChart3, 
  QrCode 
} from "lucide-react";

export const features = [
  {
    id: "online-ordering",
    title: "Direct Online Ordering",
    description: "Launch a seamless online ordering system built for your brand.",
    icon: ShoppingBag,
    bullets: [
      "Delivery, pickup, curbside, and catering",
      "Customer-friendly checkout",
      "Full brand control"
    ],
    link: "/features#online-ordering"
  },
  {
    id: "mobile-app",
    title: "Branded Mobile App",
    description: "Put your restaurant on their home screen with a custom mobile app.",
    icon: Smartphone,
    bullets: [
      "iOS and Android app concept",
      "Saved cards and easy reordering",
      "Loyalty and rewards support"
    ],
    link: "/features#mobile-app"
  },
  {
    id: "delivery-management",
    title: "Delivery Management",
    description: "Take control of your delivery operations, logistics, and tracking.",
    icon: Truck,
    bullets: [
      "In-house or third-party delivery workflow",
      "Delivery zones/radius",
      "Live order status updates"
    ],
    link: "/features#delivery-management"
  },
  {
    id: "branded-website",
    title: "Branded Website",
    description: "A fast, beautiful, and conversion-optimized restaurant website.",
    icon: Globe,
    bullets: [
      "Fast mobile-first website",
      "SEO-friendly structure",
      "Brand-customized design"
    ],
    link: "/features#branded-website"
  },
  {
    id: "loyalty",
    title: "Loyalty & Customer Engagement",
    description: "Keep customers coming back with powerful rewards and engagement tools.",
    icon: Gift,
    bullets: [
      "Points and rewards",
      "Coupons and promotions",
      "Push/email-style engagement"
    ],
    link: "/features#loyalty"
  },
  {
    id: "analytics",
    title: "Real-Time Analytics",
    headline: "Real Insights. Better Results. Turn Data Into Daily Wins",
    description: "See what is selling, who is ordering, and when your restaurant is busiest — all in one place. Merchant Orders helps you make smarter decisions with clear, real-time reporting.",
    icon: BarChart3,
    bullets: [
      "Sales, product, order, and customer reports",
      "Customer spend and loyalty tracking",
      "Top-selling and low-performing item insights"
    ],
    link: "/features#analytics"
  },
  {
    id: "qr-ordering",
    title: "Dine-In QR Ordering",
    description: "Let dine-in guests order and pay directly from their phones.",
    icon: QrCode,
    bullets: [
      "QR menus linked to table numbers",
      "No app download required",
      "Faster table ordering experience"
    ],
    link: "/features#qr-ordering"
  }
];
