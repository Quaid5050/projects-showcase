import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  href: "/mobiles" | "/laptops" | "/accessories" | "/tablets";
  image: string;
  accent?: string; // kept for backwards compat, no longer used for colour
}

export function CategoryCard({
  title,
  description,
  href,
  image,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface card-hover"
    >
      <div className="relative grid grid-cols-2 items-center gap-4 p-6 md:p-8 min-h-[220px]">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
          <div className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
        <div className="relative h-32 md:h-40">
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={400}
            height={400}
            className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </Link>
  );
}
