"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground text-balance"
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg lg:text-xl text-primary-foreground/95 font-medium"
          >
            Get started today with a free consultation and detailed quote. Our expert team is ready to bring your vision to life with quality craftsmanship and exceptional service.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-white text-[#4F46E5] hover:bg-gray-50 text-lg px-10 py-7 shadow-2xl font-bold hover:scale-105 transition-transform"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get Your Free Quote Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl bg-white/10 hover:bg-white/20 text-white border-2 border-white text-lg px-10 py-7 font-bold shadow-xl hover:scale-105 transition-transform backdrop-blur-sm"
            >
              <Link href="tel:905-233-2100" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call: 905-233-2100
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
