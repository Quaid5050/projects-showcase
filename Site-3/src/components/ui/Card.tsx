import React from "react"
import { cn } from "@/lib/utils"

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"
