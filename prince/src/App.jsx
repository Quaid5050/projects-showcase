import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroWrapper from './components/IntroWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import HouseWashing from './pages/HouseWashing';
import DrivewayCleaning from './pages/DrivewayCleaning';
import PatioDeckCleaning from './pages/PatioDeckCleaning';
import SidingCleaning from './pages/SidingCleaning';
import WalkwayCleaning from './pages/WalkwayCleaning';
import ExteriorSurfaceCleaning from './pages/ExteriorSurfaceCleaning';
import Gallery from './pages/Gallery';
import ServiceAreas from './pages/ServiceAreas';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import './styles/globals.css';
// App.css and index.css from Vite scaffold are unused — globals.css is the design system

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppContent({ introComplete }) {
  return (
    <div className={`app${introComplete ? ' app--visible' : ' app--hidden'}`}>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/house-washing" element={<HouseWashing />} />
        <Route path="/services/driveway-cleaning" element={<DrivewayCleaning />} />
        <Route path="/services/patio-deck-cleaning" element={<PatioDeckCleaning />} />
        <Route path="/services/siding-cleaning" element={<SidingCleaning />} />
        <Route path="/services/walkway-cleaning" element={<WalkwayCleaning />} />
        <Route path="/services/exterior-surface-cleaning" element={<ExteriorSurfaceCleaning />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <BrowserRouter>
      {!introComplete && <IntroWrapper onComplete={handleIntroComplete} />}
      <AppContent introComplete={introComplete} />
    </BrowserRouter>
  );
}
