import type { Metadata } from "next";
import GalleryHero from "@/components/GalleryHero";
import GalleryGrid, { type GalleryItem } from "@/components/GalleryGrid";
import galleryData from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Gallery | Silken Trading",
  description:
    "Before and after interior transformations, installed seat covers, customer cars, and installation videos.",
  openGraph: {
    title: "Gallery | Silken Trading",
    description: "See our work and transformations.",
  },
};

export default function GalleryPage() {
  const items: GalleryItem[] = (galleryData as any[]).map((item) => ({
    ...item,
    // Narrow the \"type\" field so TypeScript knows it's either \"image\" or \"video\"
    type: item.type === "video" ? "video" : "image",
  }));

  return (
    <>
      <GalleryHero />

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={items} />
        </div>
      </section>
    </>
  );
}
