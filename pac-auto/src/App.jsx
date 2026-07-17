import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Services from './pages/Services'
import ImageDetail from './pages/ImageDetail'
import VinylWrapping from './pages/services/VinylWrapping'
import PaintCorrection from './pages/services/PaintCorrection'
import CarDetailing from './pages/services/CarDetailing'
import AmbientLighting from './pages/services/AmbientLighting'
import StarlightHeadliner from './pages/services/StarlightHeadliner'
import Dashcam from './pages/services/Dashcam'
import CarPlayInstallation from './pages/services/CarPlayInstallation'
import PaintProtectionFilm from './pages/services/PaintProtectionFilm'
import CeramicCoating from './pages/services/CeramicCoating'
import TireRepairing from './pages/services/TireRepairing'
import BrakeRepair from './pages/services/BrakeRepair'
import OilChange from './pages/services/OilChange'
import SafetyCertification from './pages/services/SafetyCertification'
import Customizations from './pages/Customizations'
import MobileDetailing from './pages/MobileDetailing'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/image-detail/:serviceId" element={<ImageDetail />} />
        <Route path="/services/vinyl-wrapping" element={<VinylWrapping />} />
        <Route path="/services/paint-correction" element={<PaintCorrection />} />
        <Route path="/services/detailing" element={<CarDetailing />} />
        <Route path="/services/ambient-lighting" element={<AmbientLighting />} />
        <Route path="/services/starlights" element={<StarlightHeadliner />} />
        <Route path="/services/dashcams" element={<Dashcam />} />
        <Route path="/services/carplay-installs" element={<CarPlayInstallation />} />
        <Route path="/services/ppf" element={<PaintProtectionFilm />} />
        <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
        <Route path="/services/tire-repairing" element={<TireRepairing />} />
        <Route path="/services/brake-repair" element={<BrakeRepair />} />
        <Route path="/services/oil-change" element={<OilChange />} />
        <Route path="/services/safety-certification" element={<SafetyCertification />} />
        <Route path="/customizations" element={<Customizations />} />
        <Route path="/mobile-detailing" element={<MobileDetailing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
