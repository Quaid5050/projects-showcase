"use client"

import React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  delay?: number
  className?: string
  animation?: "fade-up" | "fade-in" | "scale-up"
}

export const AnimatedSection = ({
  children,
  delay = 0,
  className,
  animation = "fade-up",
  ...props
}: AnimatedSectionProps) => {
  const variants: any = {
    "fade-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay } }
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.7, delay } }
    },
    "scale-up": {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut", delay } }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[animation]}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
