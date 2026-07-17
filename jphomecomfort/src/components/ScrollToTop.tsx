"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    // Skip very first render (initial load)
    if (prevPath.current === null) {
      prevPath.current = pathname;
      return;
    }

    // Only animate if page actually changed
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;

      // Smooth scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}