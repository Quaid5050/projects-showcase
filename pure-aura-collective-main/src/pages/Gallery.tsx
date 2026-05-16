import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryItems } from "@/data/staff";
import { GradientBlobs } from "@/components/GradientBlobs";

const categories = ["All", "Laser", "Whitening", "Contouring", "Cryotherapy"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <>
      <title>Gallery — Lumière Aesthetic</title>
      <meta name="description" content="Real client transformations across our signature aesthetic treatments." />

      <section className="relative pt-40 pb-12 overflow-hidden">
        <GradientBlobs />
        <div className="container-luxe relative max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Real Results</p>
          <h1 className="font-display text-6xl md:text-7xl leading-[1.05]">
            Visible change, <span className="italic text-gradient">honest moments.</span>
          </h1>
        </div>
      </section>

      <section className="py-12">
        <div className="container-luxe">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === c ? "bg-primary text-primary-foreground shadow-soft" : "glass text-foreground hover:bg-white/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => setOpen(item.id)}
                className={`group relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br ${item.color} shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-5 text-left">
                  <p className="text-xs uppercase tracking-wider text-white/80">{item.category}</p>
                  <p className="font-display text-xl text-white mt-1">{item.title}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] bg-foreground/80 backdrop-blur-md grid place-items-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-soft to-primary-glow shadow-elegant"
            >
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 h-10 w-10 rounded-full glass grid place-items-center text-foreground hover:bg-white/90 z-10">
                <X className="h-4 w-4" />
              </button>
              <div className="absolute inset-0 grid place-items-center text-white text-center p-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/80">{galleryItems.find(i => i.id === open)?.category}</p>
                  <p className="font-display text-4xl mt-3">{galleryItems.find(i => i.id === open)?.title}</p>
                  <p className="mt-6 text-white/80 max-w-md mx-auto">High-resolution before/after imagery available during in-clinic consultation for privacy.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
