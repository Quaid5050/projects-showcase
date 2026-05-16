'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Shield, Leaf, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Free Estimate Request - Donzay Group');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@donzaygroup.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden min-h-[600px]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional cleaning service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/80 to-foreground/70 lg:bg-gradient-to-r lg:from-foreground/90 lg:via-foreground/70 lg:to-foreground/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-5">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Fully Insured & Bonded
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-5">
              Professional Cleaning &{' '}
              <span className="text-primary">Facility Solutions</span>
            </h1>
            <p className="text-base lg:text-lg text-white/80 mb-7 max-w-xl leading-relaxed">
              Reliable, cost-effective, and high-quality services for businesses
              of all sizes. Over 30 years of experience delivering spotless
              results across Toronto and the GTA.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-7">
              {[
                { icon: Check, text: 'Full Cleaning Service' },
                { icon: Leaf, text: 'Eco-Friendly Solutions' },
                { icon: Clock, text: 'Daily or One-Time Service' },
                { icon: DollarSign, text: 'Competitive Pricing' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-white/90">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground"
              >
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Get A Free Estimate
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-11"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-11"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-11"
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[90px]"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white h-11"
              >
                Get a Free Estimate
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
