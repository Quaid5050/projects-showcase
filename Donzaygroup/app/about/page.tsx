import Link from 'next/link';
import { CircleCheck as CheckCircle, Award, Users, Target, Heart, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards in every job, big or small. Our commitment to excellence drives everything we do.',
  },
  {
    icon: Users,
    title: 'Client-First Approach',
    description:
      'Your satisfaction is our top priority. We listen to your needs, communicate clearly, and deliver results that exceed expectations.',
  },
  {
    icon: Target,
    title: 'Reliability',
    description:
      'Consistent, on-time service you can count on. Our team shows up when promised and delivers quality results every single time.',
  },
  {
    icon: Heart,
    title: 'Care & Respect',
    description:
      'We treat every facility as if it were our own. Our team handles your space with care, respect, and attention to detail.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description:
      'Honest pricing, transparent communication, and no hidden fees. We build trust through straightforward, ethical business practices.',
  },
  {
    icon: Clock,
    title: 'Adaptability',
    description:
      'Every business is unique. We adapt our services, schedules, and methods to fit your specific requirements and preferences.',
  },
];

const milestones = [
  { year: '1993', event: 'Donzay Group founded in Toronto, Ontario' },
  { year: '1998', event: 'Expanded services to the Greater Toronto Area' },
  { year: '2005', event: 'Introduced eco-friendly cleaning solutions' },
  { year: '2010', event: 'Reached 1,000 clients served milestone' },
  { year: '2015', event: 'Launched specialty cleaning division' },
  { year: '2020', event: 'Added fogging disinfection services' },
  { year: '2023', event: 'Celebrating 30 years of service excellence' },
  { year: '2025', event: 'Serving 5,000+ clients across Ontario' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About Donzay Group"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-6">
            About Donzay Group
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Delivering industry-level cleaning and facility solutions with a
            focus on quality, efficiency, and long-term value since 1993.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6">
                High-Quality, Cost Effective Results
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Since 1993, Donzay Group has been dedicated to providing
                industry-leading, cost-effective commercial cleaning and
                facility services to businesses of all shapes and sizes across
                Toronto, the GTA, and Ontario.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our competitive pricing structure, leading-edge equipment, and
                highly-trained personnel are what make our clients choose us
                repeatedly. It&apos;s a level of guaranteed quality service that
                money simply cannot buy.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Over 30+ years of experience, trusted by businesses across
                Ontario and beyond, we deliver high-quality, cost-effective
                results that exceed expectations. Our trained, certified, and
                insured personnel will cover every corner to deliver sparkling
                cleanliness from top to bottom.
              </p>
              <ul className="space-y-3">
                {[
                  '30+ years of industry experience',
                  '5,000+ satisfied clients served',
                  'Fully insured and bonded',
                  'Eco-friendly cleaning solutions',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaning team"
                className="rounded-2xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Eco-friendly cleaning"
                className="rounded-2xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6">
                Committed to Quality & Sustainability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our mission is to deliver exceptional cleaning and facility
                services that create healthy, productive environments for our
                clients while minimizing our environmental impact.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe that a clean workspace is more than just appearance
                — it&apos;s about health, productivity, and making a positive
                impression. That&apos;s why we invest in eco-friendly products,
                advanced equipment, and ongoing training for our team.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every client relationship is built on trust, reliability, and
                results. We don&apos;t just clean — we partner with you to
                maintain the highest standards of cleanliness and hygiene for
                your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every service we
              deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
              Years of Experience
            </h2>
            <p className="text-muted-foreground">
              A timeline of our growth and commitment to excellence.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0
                      ? 'lg:flex-row'
                      : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="hidden lg:block lg:w-1/2" />
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-sm mt-1.5" />
                  <div className="pl-12 lg:pl-0 lg:w-1/2 lg:px-8">
                    <div className="bg-white rounded-xl p-5 border border-border/50 shadow-sm">
                      <span className="text-primary font-bold text-sm">
                        {milestone.year}
                      </span>
                      <p className="text-foreground text-sm mt-1">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Experience the Donzay Difference?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contact us today for a free estimate and discover why thousands of
            businesses trust Donzay Group for their cleaning needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 h-12 px-8"
          >
            <Link href="/contact">Get a Free Estimate</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
