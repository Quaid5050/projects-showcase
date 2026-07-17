import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroWrapper from './components/IntroWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FurnitureRemoval   from './pages/services/Furniture';
import ApplianceRemoval   from './pages/services/Appliance';
import YardWaste          from './pages/services/YardWaste';
import ConstructionDebris from './pages/services/Construction';
import PropertyCleanup    from './pages/services/PropertyCleanup';
import Commercial         from './pages/services/Commercial';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showIntro] = useState(() => !sessionStorage.getItem('junkpro_intro_seen'));

  const handleIntroComplete = () => {
    setIntroComplete(true);
    sessionStorage.setItem('junkpro_intro_seen', '1');
  };

  return (
    <>
      {showIntro && <IntroWrapper onComplete={handleIntroComplete} />}

      <div className="page-wrapper" style={{
        opacity: showIntro && !introComplete ? 0 : 1,
        transition: 'opacity 0.4s ease',
        pointerEvents: showIntro && !introComplete ? 'none' : 'all',
      }}>
        <Router>
          <ScrollToTop />
          <a href="#main" className="sr-only" style={{
            position:'fixed', top:8, left:8, zIndex:9999,
            background:'var(--yellow)', color:'var(--black)',
            padding:'8px 16px', borderRadius:4, fontWeight:'bold'
          }}>
            Skip to main content
          </a>
          <Header />
          <Routes>
            <Route path="/"                       element={<Home />} />
            <Route path="/about"                  element={<About />} />
            <Route path="/services"               element={<Services />} />
            <Route path="/services/furniture"     element={<FurnitureRemoval />} />
            <Route path="/services/appliance"     element={<ApplianceRemoval />} />
            <Route path="/services/yard"          element={<YardWaste />} />
            <Route path="/services/construction"  element={<ConstructionDebris />} />
            <Route path="/services/property"      element={<PropertyCleanup />} />
            <Route path="/services/commercial"    element={<Commercial />} />
            <Route path="/contact"                element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
