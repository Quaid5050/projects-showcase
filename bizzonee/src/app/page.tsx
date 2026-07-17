import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import Results from "@/components/sections/Results";
import AIAutomation from "@/components/sections/AIAutomation";
import Testimonials from "@/components/sections/Testimonials";
import TrustReviews from "@/components/sections/TrustReviews";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Process />
        <Work />
        <AIAutomation />
        <TrustReviews />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}