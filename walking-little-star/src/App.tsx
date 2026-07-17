import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { IntroWrapper } from "./components/animations/IntroWrapper";
import { BackToTopButton } from "./components/common/BackToTopButton";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { SkipLink } from "./components/common/SkipLink";
import { SEO } from "./components/common/SEO";
import { useReducedMotion } from "./hooks/useReducedMotion";

// Lazy-loaded page components
const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage").then((m) => ({ default: m.ServicesPage })));
const BookingPage = lazy(() => import("./pages/BookingPage").then((m) => ({ default: m.BookingPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage").then((m) => ({ default: m.PrivacyPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Walking Little Star Daycare | Childcare in Westfield, MA",
    description:
      "Safe, loving, and educational childcare in Westfield, Massachusetts for children ages 2 months to 5 years. Early learning, Spanish activities, healthy meals, and creative play.",
  },
  "/about": {
    title: "About Us | Walking Little Star Daycare",
    description:
      "Learn about Walking Little Star Daycare LLC — our mission, approach to early childhood education, and the warm, nurturing environment we create for children and families in Westfield, MA.",
  },
  "/services": {
    title: "Programs & Services | Walking Little Star Daycare",
    description:
      "Explore infant care, toddler programs, preschool preparation, Spanish learning, creative activities, and healthy meals at Walking Little Star Daycare in Westfield, Massachusetts.",
  },
  "/booking": {
    title: "Book a Visit | Walking Little Star Daycare",
    description:
      "Request a visit to Walking Little Star Daycare in Westfield, MA. Tell us about your childcare needs and we'll contact you to discuss availability and arrange a tour.",
  },
  "/contact": {
    title: "Contact Us | Walking Little Star Daycare",
    description:
      "Contact Walking Little Star Daycare LLC in Westfield, Massachusetts. Ask about availability, schedule a visit, or get answers to your childcare questions.",
  },
  "/privacy": {
    title: "Privacy Policy | Walking Little Star Daycare",
    description:
      "Privacy policy for Walking Little Star Daycare LLC website. Learn how we collect and use information from our inquiry forms.",
  },
};

const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-cream-warm">
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#183b65" aria-label="Loading">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </motion.div>
  </div>
);

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const prefersReduced = useReducedMotion();
  const meta = pageMeta[location.pathname] || pageMeta["/"];

  return (
    <>
      <SEO title={meta.title} description={meta.description} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: prefersReduced ? 0.15 : 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<PageLoader />}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <IntroWrapper>
      <SkipLink />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <AppRoutes />
        </div>
        <Footer />
      </div>
      <BackToTopButton />
    </IntroWrapper>
  );
}

export default App;
