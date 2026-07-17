import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import { CircleCheck as CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="pt-14 md:pt-28">
      <Hero
        title="Expert Services for Every Project"
        subtitle="Our Services"
        description="From complete renovations to specialized projects, we deliver exceptional quality and craftsmanship."
        backgroundImage="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920"
        showCTA={false}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Comprehensive Renovation Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Whether you&apos;re looking to transform a single room or undertake a complete home renovation, our team has the expertise and experience to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We follow a proven process to ensure every project is completed to perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Consultation</h3>
              <p className="text-gray-600">
                We meet with you to discuss your vision, needs, and budget for the project.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Design & Planning</h3>
              <p className="text-gray-600">
                Our team creates detailed plans and provides accurate cost estimates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Construction</h3>
              <p className="text-gray-600">
                Expert craftsmen bring your project to life with precision and care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Final Walkthrough</h3>
              <p className="text-gray-600">
                We ensure everything meets your expectations and complete any final touches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Why Choose Royal Empire?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With years of experience and hundreds of successful projects, we&apos;ve built a reputation for excellence in the renovation industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed, bonded, and insured for your protection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Premium Materials</h3>
                    <p className="text-gray-600">We use only the highest quality materials for lasting results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Skilled Craftsmen</h3>
                    <p className="text-gray-600">Our team consists of experienced, professional tradespeople.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Transparent Pricing</h3>
                    <p className="text-gray-600">Clear, detailed quotes with no hidden fees or surprises.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Quality Guarantee</h3>
                    <p className="text-gray-600">Comprehensive warranties on all our work and materials.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Quality Work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Space?"
        description="Get in touch with us today to discuss your project and receive a free, no-obligation quote."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/contact"
      />
    </div>
  );
}
