import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';
import Notification from './components/Notification';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';

export const NotifContext = React.createContext(null);

export default function App() {
  const [notif, setNotif] = useState('');
  const [showNotif, setShowNotif] = useState(false);
  const [popupDone, setPopupDone] = useState(false);

  const notify = (msg) => {
    setNotif(msg);
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 3200);
  };

  return (
    <NotifContext.Provider value={notify}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        {!popupDone && <LeadPopup onClose={() => setPopupDone(true)} notify={notify} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Notification message={notif} show={showNotif} />
      </BrowserRouter>
    </NotifContext.Provider>
  );
}