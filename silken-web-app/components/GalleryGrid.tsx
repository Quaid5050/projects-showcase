"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  title: string;
  src: string;
  category?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  className?: string;
}

export default function GalleryGrid({ items, className }: GalleryGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            y: -4,
            boxShadow: "0 20px 45px -15px rgba(0,0,0,0.4), 0 0 25px rgba(249,200,51,0.1)",
            transition: { duration: 0.3 },
          }}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-gold-primary/30"
        >
          {item.type === "video" ? (
            <div className="relative aspect-video">
              <video
                src={item.src}
                className="h-full w-full object-cover"
                controls
                muted
                loop
                playsInline
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-luxury-black/90 to-transparent p-3">
                <p className="text-sm font-medium text-white">{item.title}</p>
              </div>
            </div>
          ) : (
            <div className="relative aspect-[4/3] overflow-hidden">
              <motion.div className="absolute inset-0" whileHover={{ scale: 1.08 }} transition={{ duration: 0.4 }}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/placeholder.svg";
                  }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{item.title}</p>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
