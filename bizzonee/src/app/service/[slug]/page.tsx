import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import ServiceDetail from "@/components/sections/ServiceDetail";
import { SERVICES, getService } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return { title: "Service Not Found" };
  return { title: svc.title, description: svc.tagline };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getService(slug)) notFound();
  return (
    <>
      <Navbar />
      <main className="relative pt-20">
        <ServiceDetail slug={slug} />
      </main>
      <Footer />
    </>
  );
}