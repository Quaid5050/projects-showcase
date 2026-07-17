import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';
import { Check, Award, Users, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-14 md:pt-28">
      <Hero
        title="Transform Your Home Into Your Dream Space"
        subtitle="Premier Renovation & Construction"
        description="Royal Empire Renovation Inc. delivers exceptional craftsmanship and quality service for all your home renovation needs. From kitchens to landscapes, we bring your vision to life."
        backgroundImage="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
        showCTA={true}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-600 font-semibold mb-4 uppercase tracking-wider">
                About Royal Empire
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Building Excellence Since Day One
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Royal Empire Renovation Inc. is your trusted partner for exceptional home renovations and construction services. With years of experience and a commitment to quality craftsmanship, we transform houses into dream homes.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our team of skilled professionals specializes in everything from complete home renovations to custom landscaping and interlocking services. We pride ourselves on delivering projects on time, within budget, and exceeding expectations.
              </p>
              <Link
                href="/about"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-colors duration-200 font-semibold"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-black mb-2">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-black mb-2">500+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Check className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-black mb-2">1000+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-black mb-2">100%</h3>
                <p className="text-gray-600">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold mb-4 uppercase tracking-wider">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              What We Offer
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From complete home renovations to specialized services, we provide comprehensive solutions for all your construction and remodeling needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold mb-4 uppercase tracking-wider">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              The Royal Empire Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our skilled team delivers exceptional quality on every project, large or small.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Quality Materials</h3>
              <p className="text-gray-600">
                We use only premium materials to ensure lasting beauty and durability.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">On-Time Completion</h3>
              <p className="text-gray-600">
                We respect your time and always deliver projects according to schedule.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Customer Focused</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen, communicate, and deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold mb-4 uppercase tracking-wider">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Recent Projects
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our portfolio of completed projects and see the Royal Empire difference for yourself.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-colors duration-200 font-semibold"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold mb-4 uppercase tracking-wider">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with Royal Empire Renovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Dream Project?"
        description="Let's transform your vision into reality. Contact us today for a free consultation and quote."
        primaryButtonText="Get Free Quote"
        primaryButtonLink="/contact"
      />
    </div>
  );
}
