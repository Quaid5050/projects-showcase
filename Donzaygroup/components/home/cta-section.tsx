import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional cleaning team at work"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground/92" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Ready to Work With Us?
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Get in touch today for a free estimate. Our team is ready to create a
          customized cleaning plan that fits your business needs and budget.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white h-12 px-8"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground h-12 px-8"
          >
            <a href="tel:4167975652" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              (416) 797-5652
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
