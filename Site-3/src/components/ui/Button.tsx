import React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
  size?: "sm" | "md" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_35px_rgba(0,255,136,0.5)]": variant === "primary",
            "bg-amber-500 text-black hover:bg-amber-400 shadow-[0_0_20px_rgba(245,166,35,0.3)] hover:shadow-[0_0_35px_rgba(245,166,35,0.5)]": variant === "secondary",
            "border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-emerald-500/40 text-white": variant === "outline",
            "hover:bg-white/5 text-slate-300 hover:text-white": variant === "ghost",
            "underline-offset-4 hover:underline text-emerald-400": variant === "link",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
