import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = !scrolled && pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        transparent ? "bg-transparent" : "bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-soft"
      )}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className={cn(
            "h-9 w-9 rounded-full bg-deep-gradient grid place-items-center transition-transform group-hover:scale-110",
          )}>
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className={cn(
            "font-display text-2xl tracking-tight",
            transparent ? "text-white" : "text-foreground"
          )}>
            Hands That Heal
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all",
                  transparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary",
                  isActive && (transparent ? "bg-white/15 text-white" : "bg-secondary text-primary")
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant={transparent ? "glass" : "hero"} size="default">
            <Link to="/booking">Book Appointment</Link>
          </Button>
        </div>

        <button
          className={cn(
            "md:hidden p-2 rounded-full transition-colors",
            transparent ? "text-white" : "text-foreground"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass mx-4 mb-4 rounded-2xl p-4 animate-fade-in">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 text-sm font-medium rounded-xl",
                    isActive ? "bg-secondary text-primary" : "text-foreground/80 hover:bg-secondary"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <Link to="/booking">Book Appointment</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
