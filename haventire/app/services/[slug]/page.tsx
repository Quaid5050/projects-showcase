import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { services, servicesBySlug } from '@/lib/data';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.name,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHero
        title={service.name}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name },
        ]}
        bgImage={service.image}
      />

      {/* Main content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            {/* Left: Details */}
            <div>
              {/* Service image */}
              <div className="relative h-72 overflow-hidden mb-8">
                <Image src={service.image} alt={service.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent" />
              </div>

              <p className="sec-label">Service Detail</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-4 leading-tight">
                {service.name}
              </h2>
              <div className="red-divider mb-6" />

              {service.longDesc.split('\n\n').map((para, i) => (
                <p key={i} className="text-[#666] leading-relaxed mb-4 text-sm">
                  {para.trim()}
                </p>
              ))}

              <div className="mt-10 p-8 bg-[#f5f5f5] border-l-4 border-[#e01e25]">
                <h3 className="text-[#1a1a1a] font-black text-lg mb-5">Service Features</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#e01e25] shrink-0 mt-0.5" />
                      <span className="text-[#666] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="btn-red text-center inline-block">
                  Book This Service
                </Link>
                <Link href="/contact" className="btn-outline-red text-center inline-block">
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Right: Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="bg-[#1a1a1a] p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#e01e25]/10" />
                <p className="text-[#e01e25] text-xs font-bold uppercase tracking-widest mb-3">Ready to Book?</p>
                <h3 className="text-white font-black text-xl mb-3">
                  Schedule Your {service.name} Today
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Our certified technicians are ready to give your vehicle the care it deserves.
                </p>
                <Link href="/booking" className="btn-red block text-center text-xs mb-3">
                  Book Appointment
                </Link>
                <Link href="/contact" className="btn-outline-red block text-center text-xs">
                  Contact Us
                </Link>
              </div>

              {/* Contact Card */}
              <div className="border border-[#ebebeb] p-6">
                <h4 className="text-[#1a1a1a] font-bold text-sm uppercase tracking-wider mb-4">
                  Get In Touch
                </h4>
                <div className="space-y-3">
                  <a href="tel:9058030000" className="flex items-center gap-3 text-sm text-[#666] hover:text-[#e01e25] transition-colors">
                    <Phone size={15} className="text-[#e01e25] shrink-0" />
                    Mississauga: (905) 803-0000
                  </a>
                </div>
              </div>

              {/* Other Services */}
              <div className="border border-[#ebebeb] p-6">
                <h4 className="text-[#1a1a1a] font-bold text-sm uppercase tracking-wider mb-4">
                  Other Services
                </h4>
                <ul className="space-y-2">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2 text-sm text-[#666] hover:text-[#e01e25] transition-colors py-1 border-b border-gray-50"
                      >
                        <ArrowRight size={13} className="text-[#e01e25] shrink-0" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/services"
                      className="flex items-center gap-2 text-xs text-[#e01e25] font-bold uppercase tracking-wide pt-2 hover:gap-3 transition-all"
                    >
                      View All Services <ArrowRight size={12} />
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <p className="sec-label">More Services</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-3">
              Explore Our Other Services
            </h2>
            <div className="red-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((s) => (
              <div key={s.slug} className="svc-card group">
                <div className="relative h-40 overflow-hidden">
                  <Image src={s.image} alt={s.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1a1a1a] text-sm mb-2">{s.name}</h3>
                  <p className="text-[#666] text-xs leading-relaxed mb-3 line-clamp-2">{s.shortDesc}</p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#e01e25] text-xs font-bold uppercase tracking-wider hover:gap-2.5 transition-all"
                  >
                    Read More <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
