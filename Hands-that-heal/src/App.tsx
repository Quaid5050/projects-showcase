import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import CryotherapyDetail from "./pages/CryotherapyDetail.tsx";
import CryoSubDetail from "./pages/CryoSubDetail.tsx";
import AestheticSubDetail from "./pages/AestheticSubDetail.tsx";
import About from "./pages/About.tsx";
import Gallery from "./pages/Gallery.tsx";
import Booking from "./pages/Booking.tsx";
import Contact from "./pages/Contact.tsx";
import FAQs from "./pages/FAQs.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/localized-cryotherapy" element={<CryotherapyDetail />} />
            <Route path="/services/cryo-aesthetic" element={<CryoSubDetail />} />
            <Route path="/services/cryo-ortho" element={<CryoSubDetail />} />
            <Route path="/services/cryo-sports" element={<CryoSubDetail />} />
            <Route path="/services/cryo-postsurgery" element={<CryoSubDetail />} />
            <Route path="/services/cryo-slimming" element={<AestheticSubDetail />} />
            <Route path="/services/frotox" element={<AestheticSubDetail />} />
            <Route path="/services/skin-conditions" element={<AestheticSubDetail />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
