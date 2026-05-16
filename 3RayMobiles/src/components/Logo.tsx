import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 group shrink-0 ${className}`}>
      <div className="shrink-0 h-10 w-10 sm:h-11 sm:w-11 rounded-xl overflow-hidden bg-[#0a1628] border border-border/40">
        <img
          src="/logo.jpeg"
          alt="3 Ray Mobiles"
          width={44}
          height={44}
          className="h-full w-full object-cover"
        />
      </div>
      <span className="text-base sm:text-lg font-bold tracking-tight leading-tight">
        3 Ray<span className="gradient-text"> Mobiles</span>
      </span>
    </Link>
  );
}
