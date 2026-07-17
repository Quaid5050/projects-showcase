import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { Award, Target, Heart, Shield, Users, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-14 md:pt-28">
      <Hero
        title="Building Trust, Delivering Excellence"
        subtitle="About Royal Empire Renovation"
        description="Learn about our commitment to quality, craftsmanship, and customer satisfaction."
        backgroundImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
        showCTA={false}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-600 font-semibold mb-4 uppercase tracking-wider">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Transforming Homes, Transforming Lives
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Royal Empire Renovation Inc. was founded with a simple yet powerful vision: to help homeowners transform their living spaces into the homes of their dreams. What started as a small team of passionate craftsmen has grown into a full-service renovation company trusted by hundreds of families.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our journey has been built on a foundation of integrity, quality workmanship, and unwavering commitment to customer satisfaction. Every project we undertake is treated with the same care and attention as if it were our own home.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we&apos;re proud to offer a comprehensive range of services including home renovations, kitchen and bathroom remodeling, landscaping, interlocking, and exterior upgrades. Our team combines traditional craftsmanship with modern techniques to deliver results that exceed expectations.
              </p>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              These principles guide everything we do and ensure we deliver the best possible experience for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for perfection in every detail, using premium materials and expert craftsmanship to deliver outstanding results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                Honesty and transparency are at the heart of our business. We build lasting relationships through trust and reliability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Passion</h3>
              <p className="text-gray-600 leading-relaxed">
                We love what we do, and it shows in every project. Our passion drives us to go above and beyond for our clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We work closely with our clients, listening to their needs and involving them in every step of the process.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of industry trends, embracing new technologies and techniques to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Commitment</h3>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re dedicated to completing every project on time and within budget, without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our Commitment to You
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              When you choose Royal Empire Renovation, you&apos;re choosing a partner dedicated to bringing your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">Free Consultations</h3>
                <p className="text-gray-600">
                  We offer complimentary consultations to discuss your project and provide expert advice.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden fees or surprises. We provide detailed, upfront quotes for every project.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed, bonded, and insured for your peace of mind and protection.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">Quality Guarantee</h3>
                <p className="text-gray-600">
                  We stand behind our work with comprehensive warranties on all our services.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">Clear Communication</h3>
                <p className="text-gray-600">
                  Regular updates and open communication throughout your project from start to finish.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">Clean Worksites</h3>
                <p className="text-gray-600">
                  We maintain clean, organized work areas and perform thorough cleanup after completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Something Amazing Together"
        description="Ready to start your renovation project? Contact us today for a free consultation."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
      />
    </div>
  );
}
