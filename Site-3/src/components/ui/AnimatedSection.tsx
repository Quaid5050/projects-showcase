"use client"

import React from "react"
import { motion, Variants, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  delay?: number
  className?: string
  animation?: "fade-up" | "fade-in" | "scale-up" | "slide-right" | "slide-left" | "dramatic"
}

export const AnimatedSection = ({
  children,
  delay = 0,
  className,
  animation = "fade-up",
  ...props
}: AnimatedSectionProps) => {
  const variants: Record<string, Variants> = {
    "fade-up": {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay } }
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8, delay } }
    },
    "scale-up": {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay } }
    },
    "slide-right": {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay } }
    },
    "slide-left": {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay } }
    },
    "dramatic": {
      hidden: { opacity: 0, y: 80, scale: 0.95, rotateX: 10 },
      visible: {
        opacity: 1, y: 0, scale: 1, rotateX: 0,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay }
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants[animation] ?? variants["fade-up"]}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
