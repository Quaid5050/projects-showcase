import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-14 md:pt-28">
      <Hero
        title="Let's Start Building Together"
        subtitle="Contact Us"
        description="Have a project in mind? Get in touch with us today for a free consultation and quote."
        backgroundImage="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920"
        showCTA={false}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Ready to transform your home? Fill out the form and our team will get back to you within 24 hours to discuss your project.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (647) 981-0084</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8am-6pm, Sat 9am-4pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Email</h3>
                    <p className="text-gray-600">royalempirereno@gmail.com</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Office Location</h3>
                    <p className="text-gray-600">4 Robert Speck Parkway, Unit 1507</p>
                    <p className="text-gray-600">Mississauga, ON L4Z 1S1</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-black mb-3">Why Contact Us?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    Free, no-obligation consultations
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    Detailed project estimates
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    Expert advice and recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    Fast response time
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-black">Request a Quote</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-white">
        <div className="w-full h-[450px] bg-gray-200 relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5!2d-79.6441!3d43.5967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47c4b3e2c9d5%3A0x0!2s4%20Robert%20Speck%20Pkwy%2C%20Mississauga%2C%20ON%20L4Z%201S1!5e0!3m2!1sen!2sca!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Emergency Services Available
            </h2>
            <p className="text-xl text-red-100 mb-6">
              Need urgent repairs or assistance? We&apos;re here to help.
            </p>
            <a
              href="tel:+16479810084"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg"
            >
              Call Emergency Line: +1 (647) 981-0084
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
