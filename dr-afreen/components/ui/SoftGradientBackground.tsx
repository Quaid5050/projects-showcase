"use client";

interface SoftGradientBackgroundProps {
  variant?: "hero" | "maroon" | "pink" | "cream" | "dark";
  className?: string;
  children: React.ReactNode;
}

export default function SoftGradientBackground({
  variant = "cream",
  className = "",
  children,
}: SoftGradientBackgroundProps) {
  const variants = {
    hero: "bg-gradient-to-br from-cream-light via-pink-blush to-cream",
    maroon: "bg-maroon-gradient",
    pink: "bg-pink-gradient",
    cream: "bg-soft-gradient",
    dark: "bg-gradient-to-br from-maroon-deep to-maroon",
  };

  return (
    <div className={`relative ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
