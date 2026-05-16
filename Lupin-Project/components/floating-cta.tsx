"use client"

import Link from "next/link"
import { Phone, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Link
          href="/contact"
          className="flex items-center justify-center w-16 h-16 gradient-success text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110"
          aria-label="Get a Quote"
        >
          <MessageSquare className="w-7 h-7" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
      >
        <Link
          href="tel:905-233-2100"
          className="flex items-center justify-center w-16 h-16 gradient-primary text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 animate-pulse"
          aria-label="Call Now"
        >
          <Phone className="w-7 h-7" />
        </Link>
      </motion.div>
    </div>
  )
}
