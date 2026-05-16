import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-sm hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  secondary:
    "bg-charcoal text-white shadow-sm hover:bg-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  outline:
    "border border-border bg-card text-foreground shadow-sm hover:border-accent/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  ghost:
    "text-foreground hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm font-semibold rounded-xl",
  lg: "px-7 py-3.5 text-base font-semibold rounded-xl",
};

function classes(
  variant: Variant,
  size: Size,
  className?: string
) {
  return cn(
    "inline-flex items-center justify-center gap-2 text-center font-semibold tracking-tight transition-all duration-200 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className
  );
}

type LinkCTAProps = {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

export function CTALink({
  href,
  external,
  children,
  className,
  variant = "primary",
  size = "md",
}: LinkCTAProps) {
  const c = classes(variant, size, className);
  if (/^(https?:|tel:|mailto:)/i.test(href)) {
    return (
      <a
        href={href}
        className={c}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={c}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}

type ButtonCTAProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function CTAButton({
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...rest
}: ButtonCTAProps) {
  return (
    <button type={type} className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
