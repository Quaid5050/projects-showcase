"use client"

import React, { useState } from "react"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { Button } from "@/components/ui/Button"
import { Mail, Phone, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurantName: "",
    website: "",
    locations: "1",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" })
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.restaurantName.trim()) newErrors.restaurantName = "Restaurant name is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: "", email: "", phone: "", restaurantName: "", website: "", locations: "1", message: "" })
    }
  }

  const inputBase = "w-full px-4 py-3 rounded-xl border bg-white/3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-200 text-sm"
  const inputNormal = `${inputBase} border-white/8 focus:border-emerald-500/30`
  const inputError = `${inputBase} border-red-500/50 focus:border-red-500/50`

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#020509] relative overflow-hidden cinema-grid">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/6 blur-[150px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/4 blur-[130px]" />
        </div>
        <div className="divider-glow absolute bottom-0 left-0 right-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection animation="dramatic" className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500/70 mb-4">
              Let's Talk
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-[-0.03em] leading-[0.95]">
              Book a Demo &
              <br />
              <span className="gradient-text">Contact Us</span>
            </h1>
            <p className="text-xl text-slate-400">
              Ready to see Merchant Orders in action? Fill out the form and our team will be in touch shortly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-[#040810] relative">
        <div className="divider-glow absolute top-0 left-0 right-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/3 blur-[160px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 max-w-6xl mx-auto">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <AnimatedSection animation="slide-right">
                <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-white/6 shadow-[0_40px_80px_rgba(0,0,0,0.5)] mb-8">
                  <Image
                    src="/images/contact-skyscraper.jpg"
                    alt="Merchant Orders"
                    fill
                    className="object-cover opacity-70"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020509] via-transparent to-transparent" />
                </div>

                <h2 className="text-2xl font-black text-white mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Email</h3>
                      <a href="mailto:support@merchantorders.io" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">
                        support@merchantorders.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Phone</h3>
                      <a href="tel:8002690818" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">
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
                <div className="rounded-3xl border border-white/6 bg-white/2 backdrop-blur-sm p-8 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
                  {isSuccess ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,255,136,0.2)]">
                        <CheckCircle size={36} className="text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-4">Request Sent!</h3>
                      <p className="text-slate-400 mb-8 max-w-md mx-auto">
                        Thank you for your interest. A member of our team will contact you shortly to schedule your personalized demo.
                      </p>
                      <Button onClick={() => setIsSuccess(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Full Name *</label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                            className={errors.name ? inputError : inputNormal} placeholder="John Doe" />
                          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Work Email *</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                            className={errors.email ? inputError : inputNormal} placeholder="john@restaurant.com" />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="restaurantName" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Restaurant Name *</label>
                          <input type="text" id="restaurantName" name="restaurantName" value={formData.restaurantName} onChange={handleChange}
                            className={errors.restaurantName ? inputError : inputNormal} placeholder="Burger Joint" />
                          {errors.restaurantName && <p className="text-red-400 text-xs mt-1">{errors.restaurantName}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Phone Number</label>
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                            className={inputNormal} placeholder="(555) 123-4567" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="locations" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Number of Locations</label>
                          <select id="locations" name="locations" value={formData.locations} onChange={handleChange}
                            className={`${inputNormal} bg-[#0a0f1a]`}>
                            <option value="1">1</option>
                            <option value="2-5">2 - 5</option>
                            <option value="6-10">6 - 10</option>
                            <option value="11+">11+</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="website" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Website</label>
                          <input type="url" id="website" name="website" value={formData.website} onChange={handleChange}
                            className={inputNormal} placeholder="https://" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">How Can We Help? *</label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange}
                          className={`${errors.message ? inputError : inputNormal} resize-none`}
                          placeholder="Tell us about your current setup and what you're looking for..." />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black border-0 shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:shadow-[0_0_50px_rgba(0,255,136,0.5)] transition-all duration-300" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Request Demo →"}
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
