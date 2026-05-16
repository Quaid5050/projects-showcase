"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Send, CheckCircle, Upload, X, HardHat, Wrench, Zap, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const positions = [
  "General Laborer",
  "Skilled Carpenter",
  "Electrician",
  "Plumber",
  "HVAC Technician",
  "Drywall Installer",
  "Framer",
  "Project Supervisor",
  "Other",
]

const perks = [
  { icon: HardHat, title: "Steady Work", desc: "Consistent projects across the GTA year-round" },
  { icon: Wrench, title: "Skilled Trades", desc: "Work alongside experienced professionals" },
  { icon: Zap, title: "Competitive Pay", desc: "Fair wages based on experience and skill" },
  { icon: Droplets, title: "Growth", desc: "Opportunities to advance within the company" },
]

export function CareersContent() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", position: "", experience: "", message: "",
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setResumeFile(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const data = new FormData()
    Object.entries(formData).forEach(([k, v]) => data.append(k, v))
    if (resumeFile) data.append("resume", resumeFile)

    try {
      const res = await fetch("/api/careers", { method: "POST", body: data })
      const json = await res.json()
      if (json.success) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", phone: "", position: "", experience: "", message: "" })
        setResumeFile(null)
      } else {
        setError("Something went wrong. Please try again or email us directly.")
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left — Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Join Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're always looking for hardworking laborers and skilled tradespeople to grow with us. If you take pride in your work and want steady employment across the GTA, we want to hear from you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {perks.map((perk, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-muted rounded-xl"
                >
                  <div className="flex items-center justify-center w-10 h-10 gradient-primary rounded-lg shrink-0">
                    <perk.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{perk.title}</h4>
                    <p className="text-muted-foreground text-xs mt-0.5">{perk.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-5 bg-muted rounded-xl border border-border">
              <p className="text-sm text-muted-foreground">
                Prefer to email directly? Send your resume to{" "}
                <a href="mailto:lupinprojectgroup@gmail.com" className="text-primary font-medium hover:underline">
                  lupinprojectgroup@gmail.com
                </a>
              </p>
            </div>

            {/* Handyman membership CTA */}
            <div className="p-5 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <HardHat className="w-5 h-5 text-primary" />
                <p className="text-sm font-semibold text-foreground">Are you a self-employed handyman?</p>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Join our free handyman network. We send you jobs based on your location — we only charge 15% on jobs we refer.
              </p>
              <Button asChild size="sm" className="gradient-primary text-white rounded-xl">
                <Link href="/handyman/register">Join as a Handyman →</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-muted p-6 lg:p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Submit Your <span className="gradient-text">Application</span>
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Fill out the form below and attach your resume. We'll be in touch.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Application Sent!</h3>
                  <p className="text-muted-foreground text-sm">
                    Thanks for applying. We'll review your application and reach out soon.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-6 rounded-xl">
                    Submit Another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                      <Input name="name" required value={formData.name} onChange={handleChange} placeholder="John Smith" className="rounded-xl bg-card" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Phone *</label>
                      <Input name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="905-000-0000" className="rounded-xl bg-card" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                    <Input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@email.com" className="rounded-xl bg-card" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Position Applying For *</label>
                    <select
                      name="position" required value={formData.position} onChange={handleChange}
                      className="w-full px-3 py-2 rounded-xl bg-card border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a position</option>
                      {positions.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Years of Experience *</label>
                    <select
                      name="experience" required value={formData.experience} onChange={handleChange}
                      className="w-full px-3 py-2 rounded-xl bg-card border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1 years">0–1 years</option>
                      <option value="1-3 years">1–3 years</option>
                      <option value="3-5 years">3–5 years</option>
                      <option value="5-10 years">5–10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Tell Us About Yourself</label>
                    <textarea
                      name="message" rows={3} value={formData.message} onChange={handleChange}
                      placeholder="Skills, certifications, availability..."
                      className="w-full px-3 py-2 rounded-xl bg-card border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Resume (PDF, DOC, DOCX)</label>
                    <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                    {resumeFile ? (
                      <div className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-xl">
                        <Upload className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground flex-1 truncate">{resumeFile.name}</span>
                        <button type="button" onClick={() => { setResumeFile(null); if (fileInputRef.current) fileInputRef.current.value = "" }}>
                          <X className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-border rounded-xl text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        <Upload className="w-4 h-4" />
                        Click to upload resume
                      </button>
                    )}
                  </div>

                  {error && <p className="text-sm text-destructive">{error}</p>}

                  <Button type="submit" size="lg" className="w-full rounded-xl gradient-primary text-white" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (<>Submit Application <Send className="w-4 h-4 ml-2" /></>)}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
