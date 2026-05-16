import { Link, useLocation } from "react-router-dom";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export const FloatingBookButton = () => {
  const { pathname } = useLocation();
  if (pathname === "/booking") return null;
  return (
    <Link
      to="/booking"
      className={cn(
        "fixed z-40 bottom-6 right-6 group",
        "h-14 px-6 rounded-full bg-deep-gradient text-primary-foreground",
        "flex items-center gap-2 shadow-glow font-medium text-sm",
        "transition-all duration-500 hover:scale-105 hover:shadow-elegant"
      )}
    >
      <Calendar className="h-4 w-4" />
      <span className="hidden sm:inline">Book Now</span>
    </Link>
  );
};
