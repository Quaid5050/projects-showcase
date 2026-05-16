import Link from 'next/link';
import { Building2, Briefcase, Factory, Sparkles, CircleCheck as CheckCircle, ArrowRight, Leaf, Clock, Shield, Wind, Droplets, Paintbrush } from 'lucide-react';
import { Button } from '@/components/ui/button';

const commercialServices = [
  {
    icon: Briefcase,
    title: 'Office Cleaning',
    description:
      'Routine office cleaning designed to keep the workplace clean, efficient, and inviting for staff and visitors. We handle everything from desk surfaces to common areas, ensuring a productive environment.',
    features: [
      'Daily, weekly, or monthly schedules',
      'Desk and workstation cleaning',
      'Common area maintenance',
      'Kitchen and break room cleaning',
      'Restroom sanitization',
      'Trash and recycling removal',
    ],
    image: '/Office Cleaning.png',
  },
  {
    icon: Factory,
    title: 'Industrial Cleaning',
    description:
      'Reliable cleaning solutions for warehouses and factories, ensuring a clean and safe working environment. Our team is trained to handle industrial-grade messes safely and efficiently.',
    features: [
      'Warehouse floor cleaning',
      'Equipment degreasing',
      'Safety zone maintenance',
      'Loading dock cleaning',
      'Hazardous waste handling',
      'Compliance-ready results',
    ],
    image: '/Industrial Cleaning.png',
  },
  {
    icon: Building2,
    title: 'School & Daycare Cleaning',
    description:
      'Safe and detailed cleaning for classrooms, restrooms, and halls to support a healthy learning environment. We use child-safe, eco-friendly products throughout.',
    features: [
      'Classroom sanitization',
      'Playground cleaning',
      'Restroom deep cleaning',
      'Cafeteria maintenance',
      'Gym and locker room care',
      'Child-safe products only',
    ],
    image: '/School & Daycare Cleaning.png',
  },
  {
    icon: Sparkles,
    title: 'Retail Cleaning',
    description:
      'Professional cleaning services designed to showcase your retail items in the best light, for the happiness of your customers. A clean store drives sales and customer satisfaction.',
    features: [
      'Display and shelf cleaning',
      'Floor maintenance',
      'Window and glass cleaning',
      'Fitting room care',
      'Entrance and foyer cleaning',
      'After-hours service available',
    ],
    image: '/Retail Cleaning.png',
  },
  {
    icon: Building2,
    title: 'Restaurant Cleaning',
    description:
      'Thorough cleaning of kitchens and dining spaces to meet hygiene standards and impress guests. We understand the unique demands of the food service industry.',
    features: [
      'Kitchen deep cleaning',
      'Dining area maintenance',
      'Grease trap cleaning',
      'Walk-in cooler cleaning',
      'Health inspection prep',
      'After-hours service',
    ],
    image: '/Restaurant Cleaning.png',
  },
  {
    icon: Briefcase,
    title: 'Medical Office Cleaning',
    description:
      'Professional-grade cleaning services that meet and exceed industry health standards. We follow strict protocols to ensure a sterile, safe environment for patients and staff.',
    features: [
      'Exam room sanitization',
      'Waiting area cleaning',
      'Biohazard waste handling',
      'Surgical prep cleaning',
      'HIPAA-compliant service',
      'Infection control protocols',
    ],
    image: '/Medical Office Cleaning.png',
  },
];

const specialtyServices = [
  {
    icon: Sparkles,
    title: 'Steam Carpet Cleaning',
    description:
      'Professional deep cleaning that removes stains, dirt, and allergens to restore your carpets look and feel. Our steam extraction method penetrates deep into fibers for a thorough clean.',
    image: '/Steam Carpet Cleaning.png',
  },
  {
    icon: Wind,
    title: 'Window Cleaning',
    description:
      'Thoroughly clean windows, removing dirt, streaks, and smudges for a spotless, crystal-clear finish that enhances visibility and appearance. Interior and exterior service available.',
    image: '/Window Cleaning.png',
  },
  {
    icon: Droplets,
    title: 'Power Washing',
    description:
      'High-pressure washing removes dirt, grime, and stains from surfaces, restoring their original look and enhancing property attractiveness. Perfect for sidewalks, parking lots, and building exteriors.',
    image: '/Power Washing.png',
  },
  {
    icon: Paintbrush,
    title: 'Floor Work',
    description:
      'Expert floor care including stripping, waxing, and polishing to maintain shine and durability. We work with all floor types including vinyl, tile, hardwood, and concrete.',
    image: '/Floor Work.png',
  },
  {
    icon: Leaf,
    title: 'Deep Cleaning',
    description:
      'Deep Cleaning offers a thorough, detailed cleaning that leaves your space spotless and refreshed. We reach every corner, crevice, and hidden area that regular cleaning misses.',
    image: '/Deep Cleaning.png',
  },
  {
    icon: Shield,
    title: 'Fogging Disinfection',
    description:
      'Fogging Disinfection uses a fine mist to sanitize large areas, effectively killing germs and viruses on contact. Ideal for post-illness cleanup or regular preventative maintenance.',
    image: '/Fogging Disinfection.png',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Deep Cleaning.png"
            alt="Professional cleaning services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Professional Cleaning & Facility Solutions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Donzay Group offers a full suite of commercial cleaning services
            designed to keep businesses and entities looking their best.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link href="/contact">Get a Free Estimate</Link>
          </Button>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Commercial Cleaning
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
              Commercial Cleaning Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Malls, supermarkets, and grocery stores see heavy daily traffic,
              making regular cleaning essential. A clean, organized space can
              make a big difference in your business&apos;s success.
            </p>
          </div>

          <div className="space-y-16">
            {commercialServices.map((service, index) => (
              <div
                key={service.title}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center gap-2"
                    >
                      Get a Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-lg w-full object-cover h-[280px] sm:h-[350px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Specialty Cleaning
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
              Specialty Cleaning Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From carpet cleaning to power washing, our specialty services
              cover every unique need your facility may have.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl overflow-hidden border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                  >
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Need a Customized Cleaning Plan?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contact us today for a free estimate. We&apos;ll create a tailored
            cleaning program designed for your facility type, schedule, and
            unique needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 h-12 px-8"
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
