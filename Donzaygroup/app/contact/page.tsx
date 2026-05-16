'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    currentService: '',
    scheduleVisit: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Free Estimate Request - Donzay Group');
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nCurrently uses cleaning services: ${formData.currentService}\nWould like to schedule a visit: ${formData.scheduleVisit}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@donzaygroup.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Donzay Group"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Get In Touch
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready for a cleaner, healthier workspace? Contact us today for a
            free estimate and let us create a customized cleaning plan for your
            business.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Contact Us Right Now
              </h2>
              <p className="text-muted-foreground mb-8">
                We&apos;re here to help. Reach out to us through any of the
                channels below.
              </p>

              <div className="space-y-6 mb-10">
                <a
                  href="tel:4167975652"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Phone
                    </div>
                    <div className="text-muted-foreground text-sm">
                      (416) 797-5652
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@donzaygroup.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Email
                    </div>
                    <div className="text-muted-foreground text-sm">
                      info@donzaygroup.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Address
                    </div>
                    <div className="text-muted-foreground text-sm">
                      777 Bay St. Unit C208B, Toronto, ON
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Service Hours
                    </div>
                    <div className="text-muted-foreground text-sm">
                      24/7/365
                    </div>
                    <div className="font-semibold text-foreground text-sm mt-2">
                      Office Hours
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Daily 8am - 11pm
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Quick Response
                </h3>
                <p className="text-muted-foreground text-sm">
                  We respond to all inquiries within 24 hours. For urgent
                  requests, please call{' '}
                  <span className="font-semibold text-foreground">
                    Zakira Mohammad Haroon
                  </span>{' '}
                  at{' '}
                  <a
                    href="tel:4167975652"
                    className="font-semibold text-primary hover:underline"
                  >
                    416-797-5652
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Request a Free Estimate
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours with a customized quote.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        First Name
                      </label>
                      <Input
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="h-11"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Last Name
                      </label>
                      <Input
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          })
                        }
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="h-11"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="(416) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Address
                    </label>
                    <Input
                      placeholder="Your business address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: e.target.value,
                        })
                      }
                      className="h-11"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your cleaning needs..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Do you currently use cleaning services?
                      </label>
                      <div className="flex gap-4 mt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="currentService"
                            value="yes"
                            checked={formData.currentService === 'yes'}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                currentService: e.target.value,
                              })
                            }
                            className="accent-primary"
                          />
                          <span className="text-sm text-foreground">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="currentService"
                            value="no"
                            checked={formData.currentService === 'no'}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                currentService: e.target.value,
                              })
                            }
                            className="accent-primary"
                          />
                          <span className="text-sm text-foreground">No</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Would you like to schedule a visit?
                      </label>
                      <div className="flex gap-4 mt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="scheduleVisit"
                            value="yes"
                            checked={formData.scheduleVisit === 'yes'}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                scheduleVisit: e.target.value,
                              })
                            }
                            className="accent-primary"
                          />
                          <span className="text-sm text-foreground">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="scheduleVisit"
                            value="no"
                            checked={formData.scheduleVisit === 'no'}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                scheduleVisit: e.target.value,
                              })
                            }
                            className="accent-primary"
                          />
                          <span className="text-sm text-foreground">No</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Find Us
            </h2>
            <p className="text-muted-foreground">
              Visit our office or give us a call. We&apos;re here to help.
            </p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.617449649498!2d-79.3852!3d43.658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s777+Bay+St%2C+Toronto%2C+ON!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Donzay Group Office Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
