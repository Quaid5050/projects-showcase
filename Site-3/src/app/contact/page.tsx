"use client"

import React, { useState } from "react"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { Button } from "@/components/ui/Button"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurantName: "",
    website: "",
    locations: "1",
    message: ""
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.restaurantName.trim()) newErrors.restaurantName = "Restaurant name is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: "", email: "", phone: "", restaurantName: "", website: "", locations: "1", message: "" })
    }
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Book a Demo & Contact Us
            </h1>
            <p className="text-xl text-slate-600">
              Ready to see Merchant Orders in action? Fill out the form below and our team will be in touch shortly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 max-w-6xl mx-auto">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <AnimatedSection>
                {/* Skyscraper image */}
                <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-slate-100 mb-8">
                  <Image
                    src="/images/contact-skyscraper.jpg"
                    alt="Merchant Orders business contact image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Email</h3>
                      <a href="mailto:support@merchantorders.io" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                        support@merchantorders.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Phone</h3>
                      <a href="tel:8002690818" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                        800.269.0818
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2} animation="fade-up">
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
                  {isSuccess ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Sent Successfully!</h3>
                      <p className="text-slate-600 mb-8 max-w-md mx-auto">
                        Thank you for your interest in Merchant Orders. A member of our team will contact you shortly to schedule your personalized demo.
                      </p>
                      <Button onClick={() => setIsSuccess(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors`}
                            placeholder="John Doe" />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email *</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors`}
                            placeholder="john@restaurant.com" />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="restaurantName" className="block text-sm font-medium text-slate-700 mb-2">Restaurant Name *</label>
                          <input type="text" id="restaurantName" name="restaurantName" value={formData.restaurantName} onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.restaurantName ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors`}
                            placeholder="Burger Joint" />
                          {errors.restaurantName && <p className="text-red-500 text-sm mt-1">{errors.restaurantName}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                            placeholder="(555) 123-4567" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="locations" className="block text-sm font-medium text-slate-700 mb-2">Number of Locations</label>
                          <select id="locations" name="locations" value={formData.locations} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors bg-white">
                            <option value="1">1</option>
                            <option value="2-5">2 - 5</option>
                            <option value="6-10">6 - 10</option>
                            <option value="11+">11+</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-2">Website</label>
                          <input type="url" id="website" name="website" value={formData.website} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                            placeholder="https://" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">How can we help? *</label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors`}
                          placeholder="Tell us about your current setup and what you're looking for..." />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Request Demo"}
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
