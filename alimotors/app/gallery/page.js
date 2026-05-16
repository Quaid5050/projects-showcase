import Image from 'next/image'

export const metadata = {
  title: 'Gallery | AutoForge Workshop',
  description: 'See our workshop, team, and completed projects. Quality auto repair work by AutoForge Workshop.',
}

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80', alt: 'Engine repair work', category: 'Engine' },
  { src: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80', alt: 'Workshop floor', category: 'Workshop' },
  { src: 'https://images.unsplash.com/photo-1645445522156-9ac06bc7a767?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Tire service', category: 'Tires' },
  { src: 'https://images.unsplash.com/photo-1760317890322-364a810cd4da?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Brake work', category: 'Brakes' },
  { src: 'https://plus.unsplash.com/premium_photo-1677009541474-1fc2642943c1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mechanic working', category: 'Service' },
  { src: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80', alt: 'Car detail', category: 'Detailing' },
  { src: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Engine bay', category: 'Engine' },
  { src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80', alt: 'Diagnostics', category: 'Diagnostics' },
  { src: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80', alt: 'Workshop equipment', category: 'Workshop' },
  { src: 'https://images.unsplash.com/photo-1637640125496-31852f042a60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Car lift', category: 'Service' },
  { src: 'https://images.unsplash.com/photo-1642075223291-f9ec545889fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Transmission work', category: 'Engine' },
  { src: 'https://images.unsplash.com/photo-1613214150132-9606e332d68e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Body work', category: 'Bodywork' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-forge-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '60px 60px'}}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-forge-red"/>
            Our Work
          </div>
          <h1 className="section-title text-6xl sm:text-7xl lg:text-8xl mb-6">
            THE<br/><span className="text-gradient-red">GALLERY</span>
          </h1>
          <p className="text-forge-light max-w-lg leading-relaxed">
            A look inside AutoForge — our facilities, equipment, and the quality of work we deliver on every vehicle.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-forge-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => {
              const isTall = i === 0 || i === 4 || i === 8
              return (
                <div
                  key={i}
                  className={`group relative overflow-hidden ${isTall ? 'sm:row-span-2' : ''}`}
                >
                  <div className={`relative w-full overflow-hidden ${isTall ? 'aspect-[3/4] sm:aspect-auto sm:h-full min-h-[400px]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-forge-black/0 group-hover:bg-forge-black/50 transition-colors duration-300"/>
                    {/* Category tag */}
                    <div className="absolute top-4 left-4 bg-forge-red px-3 py-1 text-white text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                      {img.category}
                    </div>
                    {/* Hover icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10h12M10 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 bg-forge-dark border-t border-forge-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '4', label: 'Service Bays' },
              { value: '2,000+ sqft', label: 'Workshop Area' },
              { value: '50+', label: 'Equipment Pieces' },
              { value: '12', label: 'Team Members' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-4xl text-forge-red">{stat.value}</span>
                <span className="text-forge-gray text-sm tracking-wide mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
