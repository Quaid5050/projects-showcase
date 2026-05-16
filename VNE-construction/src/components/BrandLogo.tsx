import Image from "next/image";
import Link from "next/link";
import brandLogo from "@/assets/aerofix-logo.png";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  priority?: boolean;
  compact?: boolean;
  /**
   * White rounded backdrop behind the logo (e.g. footer on dark bg).
   * Header: keep `chip` false for transparent PNG.
   */
  chip?: boolean;
  /** Soft edge readout on dark glass header — no solid box. */
  onDarkBackground?: boolean;
};

export function BrandLogo({
  className,
  priority,
  compact = false,
  chip = false,
  onDarkBackground = false,
}: Props) {
  return (
    <Link
      href="/"
      className={cn(
        "relative flex shrink-0 items-center justify-center self-center transition-opacity hover:opacity-90",
        chip &&
          "rounded-xl bg-white/95 px-2 py-1.5 shadow-md ring-1 ring-white/30 backdrop-blur-sm sm:px-2.5 sm:py-2",
        className
      )}
      aria-label={`${SITE.name} — home`}
    >
      <Image
        src={brandLogo}
        alt="Aerofix Handyman Services logo"
        width={brandLogo.width}
        height={brandLogo.height}
        priority={priority}
        className={cn(
          "h-auto max-h-[50px] w-auto object-contain object-center sm:max-h-[54px] md:max-h-[58px]",
          compact && "max-h-[40px] sm:max-h-[44px]",
          !compact && "min-w-0 max-w-[132px] sm:max-w-[154px] md:max-w-[176px]",
          compact && "max-w-[96px] sm:max-w-[108px]",
          onDarkBackground &&
            "invert drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] drop-shadow-[0_0_1px_rgba(255,255,255,0.4)]"
        )}
        sizes={compact ? "108px" : "(max-width: 768px) 140px, 180px"}
      />
    </Link>
  );
}
