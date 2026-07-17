import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const aestheticSubs = [
  { to: "/services/cryo-slimming",    label: "Cryo Slimming" },
  { to: "/services/frotox",           label: "Frotox" },
  { to: "/services/skin-conditions",  label: "Skin Conditions" },
];

const cryoSubServices = [
  { to: "/services/cryo-aesthetic",   label: "Aesthetic", sub: aestheticSubs },
  { to: "/services/cryo-ortho",       label: "Orthopaedic" },
  { to: "/services/cryo-sports",      label: "Sports" },
  { to: "/services/cryo-postsurgery", label: "Post Surgery" },
];

const services = [
  { to: "/services/localized-cryotherapy", label: "Cryotherapy", sub: cryoSubServices },
  { to: "/services/laser-hair-removal",      label: "Laser Hair Removal" },
  { to: "/services/organic-teeth-whitening", label: "Organic Teeth Whitening" },
  { to: "/services/body-contouring",         label: "Body Contouring" },
  { to: "/services/brazilian-laser",         label: "Brazilian Laser" },
];

const links = [
  { to: "/about",   label: "About" },
  { to: "/faqs",    label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled]           = useState(false);
  const [open, setOpen]                   = useState(false);
  const [servicesOpen, setServicesOpen]   = useState(false);
  const [cryoOpen, setCryoOpen]           = useState(false);
  const [aestheticOpen, setAestheticOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen]   = useState(false);
  const [cryoHover, setCryoHover]         = useState(false);
  const [aestheticHover, setAestheticHover] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setCryoOpen(false);
    setAestheticOpen(false);
  }, [pathname]);

  const transparent      = !scrolled && pathname === "/";
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
          <img src="/image.png" alt="Hands That Heal" className="h-14 w-auto object-contain transition-transform group-hover:scale-110" />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" end className={({ isActive }) => cn(
            "px-4 py-2 text-sm font-medium rounded-full transition-all",
            transparent ? "text-white/90 hover:text-white hover:bg-white/10" : "text-foreground/70 hover:text-foreground hover:bg-secondary",
            isActive && (transparent ? "bg-white/15 text-white" : "bg-secondary text-primary")
          )}>Home</NavLink>

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => { setDropdownOpen(false); setCryoHover(false); setAestheticHover(false); }}
          >
            <NavLink to="/services" className={cn(
              "inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all",
              transparent ? "text-white/90 hover:text-white hover:bg-white/10" : "text-foreground/70 hover:text-foreground hover:bg-secondary",
              isServicesActive && (transparent ? "bg-white/15 text-white" : "bg-secondary text-primary")
            )}>
              Services
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", dropdownOpen && "rotate-180")} />
            </NavLink>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-60">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-elegant border border-white/60 overflow-visible py-1.5">

                  {services.map((s) =>
                    s.sub ? (
                      /* Cryotherapy row */
                      <div
                        key={s.to}
                        className="relative"
                        onMouseEnter={() => setCryoHover(true)}
                        onMouseLeave={() => { setCryoHover(false); setAestheticHover(false); }}
                      >
                        <div className={cn(
                          "flex items-center justify-between px-5 py-2.5 text-sm font-medium transition-colors cursor-pointer",
                          pathname.startsWith("/services/cryo") || pathname === s.to
                            ? "text-primary bg-secondary"
                            : "text-foreground/80 hover:text-primary hover:bg-secondary"
                        )}>
                          <Link to={s.to} className="flex-1">{s.label}</Link>
                          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                        </div>

                        {/* Cryo sub-panel */}
                        {cryoHover && (
                          <div className="absolute top-0 left-full pl-2 w-48">
                            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-elegant border border-white/60 overflow-visible py-1.5">
                              {s.sub.map((sub) =>
                                (sub as typeof cryoSubServices[0]).sub ? (
                                  /* Aesthetic row with its own flyout */
                                  <div
                                    key={sub.to}
                                    className="relative"
                                    onMouseEnter={() => setAestheticHover(true)}
                                    onMouseLeave={() => setAestheticHover(false)}
                                  >
                                    <div className={cn(
                                      "flex items-center justify-between px-5 py-2.5 text-sm font-medium transition-colors cursor-pointer",
                                      pathname.startsWith("/services/cryo-aesthetic") || pathname.startsWith("/services/cryo-slimming") || pathname.startsWith("/services/frotox") || pathname.startsWith("/services/skin-conditions")
                                        ? "text-primary bg-secondary"
                                        : "text-foreground/80 hover:text-primary hover:bg-secondary"
                                    )}>
                                      <Link to={sub.to} className="flex-1">{sub.label}</Link>
                                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                                    </div>

                                    {/* Aesthetic sub-panel */}
                                    {aestheticHover && (
                                      <div className="absolute top-0 left-full pl-2 w-44">
                                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-elegant border border-white/60 overflow-hidden py-1.5">
                                          {(sub as typeof cryoSubServices[0]).sub!.map((item) => (
                                            <Link
                                              key={item.to}
                                              to={item.to}
                                              className={cn(
                                                "block px-5 py-2.5 text-sm font-medium transition-colors",
                                                pathname === item.to
                                                  ? "text-primary bg-secondary"
                                                  : "text-foreground/80 hover:text-primary hover:bg-secondary"
                                              )}
                                            >
                                              {item.label}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <Link
                                    key={sub.to}
                                    to={sub.to}
                                    className={cn(
                                      "block px-5 py-2.5 text-sm font-medium transition-colors",
                                      pathname === sub.to
                                        ? "text-primary bg-secondary"
                                        : "text-foreground/80 hover:text-primary hover:bg-secondary"
                                    )}
                                  >
                                    {sub.label}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link key={s.to} to={s.to} className={cn(
                        "block px-5 py-2.5 text-sm font-medium transition-colors",
                        pathname === s.to ? "text-primary bg-secondary" : "text-foreground/80 hover:text-primary hover:bg-secondary"
                      )}>{s.label}</Link>
                    )
                  )}

                  <div className="mx-4 my-1.5 border-t border-border/50" />
                  <Link to="/services" className="block px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                    View All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-all",
              transparent ? "text-white/90 hover:text-white hover:bg-white/10" : "text-foreground/70 hover:text-foreground hover:bg-secondary",
              isActive && (transparent ? "bg-white/15 text-white" : "bg-secondary text-primary")
            )}>{l.label}</NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant={transparent ? "glass" : "hero"} size="default">
            <Link to="/booking">Book Appointment</Link>
          </Button>
        </div>

        <button
          className={cn("md:hidden p-2 rounded-full transition-colors", transparent ? "text-white" : "text-foreground")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="md:hidden glass mx-4 mb-4 rounded-2xl p-4 animate-fade-in">
          <div className="flex flex-col gap-1">
            <NavLink to="/" end className={({ isActive }) => cn(
              "px-4 py-3 text-sm font-medium rounded-xl",
              isActive ? "bg-secondary text-primary" : "text-foreground/80 hover:bg-secondary"
            )}>Home</NavLink>

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
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", servicesOpen && "rotate-180")} />
              </button>

              {servicesOpen && (
                <div className="mt-1 ml-3 flex flex-col gap-0.5 border-l-2 border-primary/20 pl-3">
                  {services.map((s) =>
                    s.sub ? (
                      <div key={s.to}>
                        {/* Cryotherapy row */}
                        <button
                          onClick={() => setCryoOpen((v) => !v)}
                          className={cn(
                            "w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors",
                            pathname.startsWith("/services/cryo") || pathname === s.to
                              ? "text-primary font-medium"
                              : "text-foreground/70 hover:text-primary hover:bg-secondary"
                          )}
                        >
                          <Link to={s.to} onClick={(e) => e.stopPropagation()} className="flex-1 text-left">{s.label}</Link>
                          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200 text-muted-foreground", cryoOpen && "rotate-180")} />
                        </button>

                        {cryoOpen && (
                          <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l-2 border-primary/10 pl-3">
                            {s.sub.map((sub) =>
                              (sub as typeof cryoSubServices[0]).sub ? (
                                <div key={sub.to}>
                                  {/* Aesthetic row */}
                                  <button
                                    onClick={() => setAestheticOpen((v) => !v)}
                                    className={cn(
                                      "w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors",
                                      pathname === sub.to || pathname.startsWith("/services/cryo-slimming") || pathname.startsWith("/services/frotox") || pathname.startsWith("/services/skin-conditions")
                                        ? "text-primary font-medium"
                                        : "text-foreground/60 hover:text-primary hover:bg-secondary"
                                    )}
                                  >
                                    <Link to={sub.to} onClick={(e) => e.stopPropagation()} className="flex-1 text-left">{sub.label}</Link>
                                    <ChevronDown className={cn("h-3 w-3 transition-transform duration-200 text-muted-foreground", aestheticOpen && "rotate-180")} />
                                  </button>

                                  {aestheticOpen && (
                                    <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l-2 border-primary/10 pl-3">
                                      {(sub as typeof cryoSubServices[0]).sub!.map((item) => (
                                        <Link
                                          key={item.to}
                                          to={item.to}
                                          className={cn(
                                            "px-3 py-2 text-sm rounded-lg transition-colors",
                                            pathname === item.to
                                              ? "text-primary font-medium"
                                              : "text-foreground/60 hover:text-primary hover:bg-secondary"
                                          )}
                                        >
                                          {item.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <Link key={sub.to} to={sub.to} className={cn(
                                  "px-3 py-2 text-sm rounded-lg transition-colors",
                                  pathname === sub.to ? "text-primary font-medium" : "text-foreground/60 hover:text-primary hover:bg-secondary"
                                )}>{sub.label}</Link>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link key={s.to} to={s.to} className={cn(
                        "px-3 py-2.5 text-sm rounded-lg transition-colors",
                        pathname === s.to ? "text-primary font-medium" : "text-foreground/70 hover:text-primary hover:bg-secondary"
                      )}>{s.label}</Link>
                    )
                  )}
                  <Link to="/services" className="px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors">
                    View All →
                  </Link>
                </div>
              )}
            </div>

            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => cn(
                "px-4 py-3 text-sm font-medium rounded-xl",
                isActive ? "bg-secondary text-primary" : "text-foreground/80 hover:bg-secondary"
              )}>{l.label}</NavLink>
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
