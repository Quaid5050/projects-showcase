import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Strides Hockey Sales",
  description: "Contact Strides Hockey Sales for pro-stock gear inquiries and custom fittings.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8f9fa]">
        {/* ── Hero ── */}
        <section className="relative bg-[#0d1c32] h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVGYVqTKKdfM4vujlvjv70bJfh5dYpEyzx28xnFUOv7soCsCjNj20mysfVCLOtANVKy48KmWnoKzZmO0aaKEP9B4fdjMgfGoo45I31eXiaIxdfv0LVpuwGHJYG-rflJRG4FtMm4hNsL145v3OKb3Y_O7gGhMkrugaM1T1_9dfzI31Ka27DjJNjFh_m9lDzkv4b5p6auJnB0JsEgb7ZGFPR4mCZh3XnHARVUNYsClGAcI3Wjfwfo_FB4KqLaY_SxlpTDQ5-O60gXA"
              alt="Ice hockey rink"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c32] to-transparent" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-20 w-full">
            <span className="bg-[#006399] text-white px-3 py-1 font-inter font-semibold text-sm inline-block mb-6">GET IN TOUCH</span>
            <h1 className="font-montserrat text-[48px] font-extrabold text-white mb-3">Contact Our Pro Shop</h1>
            <p className="font-inter text-lg text-[#b9c7e4] max-w-2xl">
              Expert advice for the elite athlete. Reach out to Harvey and the team for pro-stock gear inquiries and custom fittings.
            </p>
          </div>
        </section>

        {/* ── Main Bento Layout ── */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20 -mt-20 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* ── Left Info Cards ── */}
            <div className="lg:col-span-5 space-y-6">
              {/* Identity */}
              <div className="bg-white p-8 border border-[#c5c6cd] shadow-sm contact-card">
                <div className="flex items-start gap-6">
                  <div className="bg-[#67bafd] p-3 rounded-lg">
                    <span className="material-symbols-outlined text-[#004972]" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                  </div>
                  <div>
                    <h3 className="font-montserrat text-2xl font-bold mb-1">Harvey Boutilier</h3>
                    <p className="font-inter text-base text-[#44474d]">Owner / Operator</p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white p-8 border border-[#c5c6cd] shadow-sm space-y-6">
                {[
                  { icon: "call", label: "Phone", value: "+1 (902) 578-8000", href: "tel:+19025788000" },
                  { icon: "mail", label: "Email", value: "strideshockeysales01@gmail.com", href: "mailto:strideshockeysales01@gmail.com" },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#c5c6cd] group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-inter text-xs font-semibold text-[#44474d] uppercase tracking-widest">{item.label}</p>
                      <p className="font-inter font-bold text-base">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Service Area */}
              <div className="bg-[#006399]/10 border border-[#006399]/30 p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#006399]">location_on</span>
                  <h4 className="font-montserrat text-lg font-bold text-black">Service Area</h4>
                </div>
                <p className="font-inter text-base text-black font-semibold">Servicing the GTA area.</p>
                <p className="font-inter text-base text-[#44474d]">Can ship across Canada.</p>
              </div>

            </div>

            {/* ── Right Form ── */}
            <div className="lg:col-span-7 bg-white border border-[#c5c6cd] shadow-sm p-8 lg:p-16">
              <div className="mb-8">
                <h2 className="font-montserrat text-[32px] font-bold mb-3">Send a Message</h2>
                <p className="font-inter text-base text-[#44474d]">Fill out the form below and our equipment experts will get back to you within 24 hours.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* ── Product Images Strip ── */}
        <section className="max-w-[1280px] mx-auto px-20 py-20 overflow-hidden">
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px flex-grow bg-[#c5c6cd]" />
            <span className="font-montserrat text-2xl font-bold opacity-20 whitespace-nowrap">ELITE EQUIPMENT PROVIDER</span>
            <div className="h-px flex-grow bg-[#c5c6cd]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {[
              { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGzaaaaVXRFqUatPbbc5nsXLRzIvRSz02dXFHIeHZYbEAUKbGPxU3x1dCxL7iiv5bjD8gxNP37zq7DjiYl6sndpJyyouNU8U0bxNz9pkchaa09g9cdrsqc8r7qJ933XAU_vKa4e2mBa4O6wHamCNhhNmJAsNP6jmf0hEpYhoDzZyF1hrCcu_aDODxhRCgZUyd7k3WpKVpby2gkKDrTxKlz6_SRHHbiSMSeTsUJI2FS7H27jLwYaXao8QrIcxsa3IIXJ205ZCVx7w", alt: "Hockey stick" },
              { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-lBCPScxyk9JApEoR9QE4tXlPHOQVl7doTcUe1s8i7RxtMMGERsnbEhmd5QQQeOfIn80AoV6qxy6JMWIrlQF6I6QUHm6ltK0mTIzrrdkjxefd1Hi99005GdH_OEwmkuDiU_2iBfcpdDWCE_dBJus4TdIGjqDNLVmBkzgzKsChyt_6Zw57zqluwPYs7UysP3B3bOSogX4xQMUi8ef6M8SiQUlQdXhZyukLEwuMG1KckfyEUFZ6bNUDG9hpx5bTID8DSpwKXdarJA", alt: "Hockey skates" },
              { src: "/glo1.webp", alt: "Hockey glove" },
              { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvSvzpp3FLlleo7g-D5lh3HhY_BfCv1gh5jzQgBqwE8WJ7EgK1tO48gAj0VCdQtaUTZzqmlb4WFAye_mnRzoBM7PgybMIS1LBO8UNmAZUD2DfRg2I1r8uE6fI7n3keY9hckkxQM80IdKvngNPUaJrQv5qvvPah0IW2duWE_QM4mE3UxgYFGYR_0CBIcZDa2ngoLfwrou9l92obCKs-Afp5TCA7BNXOu_5leI1dxwpj7eN-C5aOMsJKy9kf7b9CYSA-x_IZ7C8XAg", alt: "Hockey pucks" },
            ].map((img) => (
              <div key={img.alt} className="flex items-center justify-center p-8 border border-[#c5c6cd] relative h-24">
                <Image src={img.src} alt={img.alt} fill className="object-contain p-2" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
