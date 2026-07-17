import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Gallery | Flashchic Photobooth – Event Photos & 360 Videos',
  description: 'Browse our gallery of luxury photobooth and 360 video booth setups for events in Laval and Montréal.',
}

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80', label: 'Birthday Gala', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', label: '360 Video Booth' },
  { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80', label: 'Photobooth Setup' },
  { src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80', label: 'Corporate Event' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', label: 'Gala Night' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', label: 'Wedding Celebration' },
  { src: 'https://images.unsplash.com/photo-1558636508-e0969431c544?w=600&q=80', label: 'Birthday Party', span: 'col-span-2' },
  { src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80', label: 'Luxury Setup' },
  { src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80', label: 'Baby Shower' },
  { src: 'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=600&q=80', label: 'Evening Event' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80', label: '360 Stage' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1800&q=80"
            alt="Gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.4em] text-[#d4af37] uppercase mb-4">Our Work</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-white mb-6">
            Event <span className="gold-text font-semibold">Gallery</span>
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-white/60 text-lg font-light max-w-xl mx-auto">
            A glimpse into the luxury experiences we create for every event.
          </p>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[220px]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group ${img.span || ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/30 group-hover:bg-[#0a0a0a]/10 transition-colors duration-300" />
                <div className="absolute inset-0 border border-[#d4af37]/0 group-hover:border-[#d4af37]/30 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-display text-white text-sm tracking-wide">{img.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-white/40 text-sm mb-4">Follow us for more event highlights</p>
            <a
              href="https://instagram.com/flashchicphotobooth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold px-8 py-3 text-xs tracking-widest font-semibold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              @flashchicphotobooth
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0d0d0d] text-center border-t border-[#d4af37]/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-light text-white mb-4">
            Your Event Could Be <span className="gold-text font-semibold">Next</span>
          </h2>
          <p className="text-white/50 mb-10 font-light">Let's create something beautiful together.</p>
          <Link href="/booking" className="btn-gold px-12 py-4 text-sm tracking-widest font-semibold inline-block">
            Book Your Experience
          </Link>
        </div>
      </section>
    </>
  )
}
