import React from "react";

export const SkipLink: React.FC = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-navy focus:text-white focus:font-body focus:font-700 focus:px-5 focus:py-3 focus:rounded-full focus:shadow-hover focus:outline-none"
  >
    Skip to main content
  </a>
);
