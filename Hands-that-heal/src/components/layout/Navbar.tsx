import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { to: "/services/localized-cryotherapy",   label: "Cryotherapy" },
  { to: "/services/laser-hair-removal",     label: "Laser Hair Removal" },
  { to: "/services/organic-teeth-whitening", label: "Organic Teeth Whitening" },
  { to: "/services/body-contouring",         label: "Body Contouring" },
  { to: "/services/brazilian-laser",         label: "Brazilian Laser" },
];

const links = [
  { to: "/about", label: "About" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [open, setOpen]               = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // mobile accordion
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop hover
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => { setOpen(false); setServicesOpen(false); }, [pathname]);

  const transparent = !scrolled && pathname === "/";
  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-soft"
      )}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src="/image.png"
            alt="Hands That Heal"
            className="h-14 w-auto object-contain transition-transform group-hover:scale-110"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Home */}
          <NavLink
            to="/"
            end
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
            Home
          </NavLink>

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavLink
              to="/services"
              className={cn(
                "inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all",
                transparent
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary",
                isServicesActive && (transparent ? "bg-white/15 text-white" : "bg-secondary text-primary")
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  dropdownOpen && "rotate-180"
                )}
              />
            </NavLink>

            {/* Dropdown panel */}
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-elegant border border-white/60 overflow-hidden py-1.5">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className={cn(
                        "block px-5 py-2.5 text-sm font-medium transition-colors",
                        pathname === s.to
                          ? "text-primary bg-secondary"
                          : "text-foreground/80 hover:text-primary hover:bg-secondary"
                      )}
                    >
                      {s.label}
                    </Link>
                  ))}
                  <div className="mx-4 my-1.5 border-t border-border/50" />
                  <Link
                    to="/services"
                    className="block px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Remaining links */}
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

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild variant={transparent ? "glass" : "hero"} size="default">
            <Link to="/booking">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass mx-4 mb-4 rounded-2xl p-4 animate-fade-in">
          <div className="flex flex-col gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                cn(
                  "px-4 py-3 text-sm font-medium rounded-xl",
                  isActive ? "bg-secondary text-primary" : "text-foreground/80 hover:bg-secondary"
                )
              }
            >
              Home
            </NavLink>

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                  isServicesActive ? "bg-secondary text-primary" : "text-foreground/80 hover:bg-secondary"
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>
              {servicesOpen && (
                <div className="mt-1 ml-3 flex flex-col gap-0.5 border-l-2 border-primary/20 pl-3">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className={cn(
                        "px-3 py-2.5 text-sm rounded-lg transition-colors",
                        pathname === s.to
                          ? "text-primary font-medium"
                          : "text-foreground/70 hover:text-primary hover:bg-secondary"
                      )}
                    >
                      {s.label}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  >
                    View All →
                  </Link>
                </div>
              )}
            </div>

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
