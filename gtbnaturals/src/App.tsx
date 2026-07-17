import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import About from './pages/About'
import Booking from './pages/Booking'
import Conditions from './pages/Conditions'
import Credentials from './pages/Credentials'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ServiceDetailPage from './pages/ServiceDetailPage'
import Services from './pages/Services'
import TermsDisclaimer from './pages/TermsDisclaimer'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/natural-medicine" element={<ServiceDetailPage />} />
          <Route path="/herbal-." element={<ServiceDetailPage />} />
          <Route path="/manual-osteopathy" element={<ServiceDetailPage />} />
          <Route path="/hypnotherapy" element={<ServiceDetailPage />} />
          <Route path="/massage-therapy" element={<ServiceDetailPage />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsDisclaimer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
