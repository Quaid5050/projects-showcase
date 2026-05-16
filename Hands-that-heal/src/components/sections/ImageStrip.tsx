import { motion } from "framer-motion";
import laser from "@/assets/service-laser.jpg";
import teeth from "@/assets/organic-teeth-whitening.jpg";
import contour from "@/assets/service-contouring.jpg";
import brazilian from "@/assets/service-brazilian.jpg";
import cryo from "@/assets/service-cryo.jpg";

const imgs = [
  { src: laser,    alt: "Laser Hair Removal",       label: "Laser Hair Removal" },
  { src: teeth,    alt: "Teeth Whitening",           label: "Organic Teeth Whitening" },
  { src: contour,  alt: "Body Contouring",           label: "Body Contouring" },
  { src: brazilian,alt: "Brazilian Laser",           label: "Brazilian Laser" },
  { src: cryo,     alt: "Cryotherapy",               label: "Cryotherapy" },
];

export const ImageStrip = () => (
  <section className="py-8 overflow-x-auto">
    <div className="flex gap-4 px-4 sm:px-6 md:px-10 min-w-max md:min-w-0 md:grid md:grid-cols-5">
      {imgs.map((img, i) => (
        <motion.div
          key={img.alt}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.6 }}
          className="relative w-44 md:w-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-soft group flex-shrink-0 md:flex-shrink"
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium leading-tight">{img.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
