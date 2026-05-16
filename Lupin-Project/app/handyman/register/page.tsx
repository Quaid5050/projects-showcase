"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { HardHat, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const skillOptions = ["General Labour", "Carpentry", "Electrical", "Plumbing", "HVAC", "Drywall", "Framing", "Painting", "Flooring", "Roofing"]

export default function HandymanRegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    name: "", email: "", password: "", phone: "",
    city: "", postalCode: "", skills: [] as string[],
    bio: "", yearsExperience: "", availability: "full-time",
  })

  const set = (k: string, v: any) => setForm(p => ({ ...p, [k]: v }))
  const toggleSkill = (s: string) =>
    set("skills", form.skills.includes(s) ? form.skills.filter(x => x !== s) : [...form.skills, s])

  const handleSubmit = async () => {
    setLoading(true); setError("")
    const res = await fetch("/api/handyman/register", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
    })
    const data = await res.json()
    setLoading(false)
    if (data.error) { setError(data.error); return }
    setDone(true)
  }

  if (done) return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
        <div className="flex items-center justify-center w-20 h-20 gradient-primary rounded-full mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-3">Application Submitted!</h1>
        <p className="text-muted-foreground mb-6">Your membership is under review. We'll activate your account within 24 hours and notify you by email.</p>
        <Button asChild className="gradient-primary text-white rounded-xl"><Link href="/">Back to Home</Link></Button>
      </motion.div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 gradient-primary text-white rounded-full text-sm font-semibold mb-4">
            <HardHat className="w-4 h-4" /> Free Membership
          </div>
          <h1 className="text-3xl font-bold text-foreground">Join as a Handyman</h1>
          <p className="text-muted-foreground mt-2 text-sm">Free to join — we charge 15% only on jobs we send you</p>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center gap-2 mb-8 justify-center">
          {[1, 2, 3].map(s => (
            <div key={s} className={`h-2 rounded-full transition-all ${s === step ? "w-8 gradient-primary" : s < step ? "w-8 bg-primary/40" : "w-4 bg-muted"}`} />
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <h2 className="font-semibold text-foreground mb-4">Personal Info</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                  <Input value={form.name} onChange={e => set("name", e.target.value)} placeholder="John Smith" className="rounded-xl" />
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                  <Input type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="you@email.com" className="rounded-xl" />
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium text-foreground mb-1 block">Password *</label>
                  <Input type="password" value={form.password} onChange={e => set("password", e.target.value)} placeholder="Min 8 characters" className="rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Phone *</label>
                  <Input value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="905-000-0000" className="rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">City *</label>
                  <Input value={form.city} onChange={e => set("city", e.target.value)} placeholder="Toronto" className="rounded-xl" />
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium text-foreground mb-1 block">Postal Code *</label>
                  <Input value={form.postalCode} onChange={e => set("postalCode", e.target.value)} placeholder="M1H 3E3" className="rounded-xl" />
                </div>
              </div>
              <Button
                className="w-full gradient-primary text-white rounded-xl mt-2"
                onClick={() => {
                  if (!form.name || !form.email || !form.password || !form.phone || !form.city || !form.postalCode) { setError("Please fill all required fields"); return }
                  setError(""); setStep(2)
                }}
              >Next</Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <h2 className="font-semibold text-foreground mb-4">Skills & Experience</h2>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Select Your Skills *</label>
                <div className="flex flex-wrap gap-2">
                  {skillOptions.map(s => (
                    <button key={s} type="button" onClick={() => toggleSkill(s)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${form.skills.includes(s) ? "gradient-primary text-white border-transparent" : "border-border text-muted-foreground hover:border-primary"}`}
                    >{s}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Years of Experience</label>
                <select value={form.yearsExperience} onChange={e => set("yearsExperience", e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select</option>
                  <option>0–1 years</option><option>1–3 years</option><option>3–5 years</option><option>5–10 years</option><option>10+ years</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Availability</label>
                <select value={form.availability} onChange={e => set("availability", e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="weekends">Weekends only</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 rounded-xl" onClick={() => setStep(1)}>Back</Button>
                <Button className="flex-1 gradient-primary text-white rounded-xl" onClick={() => { if (!form.skills.length) { setError("Select at least one skill"); return } setError(""); setStep(3) }}>Next</Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <h2 className="font-semibold text-foreground mb-4">About You</h2>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Short Bio</label>
                <textarea value={form.bio} onChange={e => set("bio", e.target.value)} rows={4} placeholder="Tell us about your experience and what makes you great..."
                  className="w-full px-3 py-2 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>

              {/* Fee notice */}
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <p className="text-sm text-foreground font-medium mb-1">Membership Terms</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>✓ Free to join — no monthly fees</li>
                  <li>✓ We send you jobs based on your location & skills</li>
                  <li>✓ 15% fee deducted from jobs we refer to you</li>
                  <li>✓ Account activated within 24 hours of approval</li>
                </ul>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 rounded-xl" onClick={() => setStep(2)}>Back</Button>
                <Button className="flex-1 gradient-primary text-white rounded-xl" onClick={handleSubmit} disabled={loading}>
                  {loading ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </motion.div>
          )}

          {error && step < 3 && <p className="text-sm text-destructive mt-3">{error}</p>}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Already a member? <Link href="/handyman/login" className="text-primary hover:underline font-medium">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
