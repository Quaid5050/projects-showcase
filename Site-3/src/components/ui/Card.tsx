import React from "react"
import { cn } from "@/lib/utils"

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-white/6 bg-white/3 backdrop-blur-sm transition-all duration-300",
        "hover:border-emerald-500/20 hover:bg-white/5 hover:shadow-[0_0_40px_rgba(0,255,136,0.06)]",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"
