import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingBookButton } from "./FloatingBookButton";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

export const Layout = () => (
  <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
    <ScrollToTop />
    <Navbar />
    <main className="flex-1 min-w-0 overflow-x-hidden">
      <Outlet />
    </main>
    <Footer />
    <FloatingBookButton />
  </div>
);
