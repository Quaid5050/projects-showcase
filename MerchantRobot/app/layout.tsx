import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Canadian Robots™ | AI Makes Canada Stronger | Robot Dogs & Cooking Robots",
  description: "Canadian Robots™ — 100% Canadian owned robotics company. Supplying robot dogs and humanoids to border institutions. Canada's most advanced cooking robot for restaurants. AI Makes Canada Stronger.",
  keywords: "Canadian robots, robot dog Canada, border robots, border institutions robots, cooking robot Canada, restaurant robotics Canada",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Canadian Robots™ | AI Makes Canada Stronger",
    description: "100% Canadian owned. Robot dogs for Public Sector. Advanced cooking robots for restaurants. AI Makes Canada Stronger. 🍁",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body style={{ background: "#0d0d0d", color: "#fafafa", overflowX: "hidden" }}>
        <Navbar />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
