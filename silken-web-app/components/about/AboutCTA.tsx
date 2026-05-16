"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-yellow-pastel/80"
        >
          Ready to upgrade your car interior?
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/products"
              className="inline-block w-full rounded-md border-2 border-gold-primary/60 px-8 py-4 font-semibold text-gold-primary transition-all hover:bg-gold-primary/10 hover:shadow-[0_0_30px_rgba(249,200,51,0.2)] text-center sm:w-auto"
            >
              Shop Products
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-block w-full rounded-md bg-gradient-to-r from-gold-primary to-yellow-glow px-8 py-4 font-semibold text-luxury-black shadow-[0_0_30px_rgba(249,200,51,0.35)] transition-all hover:shadow-[0_0_45px_rgba(249,200,51,0.45)] text-center sm:w-auto"
            >
              Book Installation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
