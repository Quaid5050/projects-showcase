import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CircleCheck as CheckCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional cleaning team at work"
              className="rounded-2xl shadow-lg w-full object-cover h-[300px] sm:h-[400px] lg:h-[500px]"
            />
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-primary text-white rounded-2xl p-4 lg:p-6 shadow-xl hidden sm:block">
              <div className="text-3xl lg:text-4xl font-bold">30+</div>
              <div className="text-xs lg:text-sm text-white/80">Years Experience</div>
            </div>
          </div>

          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Donzay Group
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6">
              High-Quality, Cost Effective Results
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Since 1993, Donzay Group has been dedicated to providing
              industry-leading, cost-effective commercial cleaning and facility
              services to businesses of all shapes and sizes. Our competitive
              pricing structure, leading-edge equipment, and highly-trained
              personnel are what make our clients choose us repeatedly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              It&apos;s a level of guaranteed quality service that money simply
              cannot buy. We deliver high-quality, cost-effective results that
              exceed expectations throughout Ontario and beyond.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Trained, certified, and insured personnel',
                'Leading-edge equipment and technology',
                'Competitive pricing structure',
                'Satisfaction guaranteed on every job',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Link href="/about">Learn More</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Request a Cleaning Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
