"use client"

import { useState } from "react"
import { signOut } from "next-auth/react"
import { motion } from "framer-motion"
import { Briefcase, User, MapPin, Clock, DollarSign, CheckCircle, AlertCircle, LogOut, Phone, Mail, Star, Eye, EyeOff, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Profile = {
  id: string; name: string; email: string; phone: string; city: string
  postalCode: string; skills: string[]; bio?: string | null; yearsExperience?: string | null
  availability: string; status: string; feePercent: number; createdAt: Date
}

type Job = {
  id: string; title: string; description: string; location: string; city: string
  serviceType: string; clientName?: string | null; clientPhone?: string | null
  scheduledDate?: Date | null; status: string; jobValue?: number | null; feePercent: number; createdAt: Date
}

const statusColor: Record<string, string> = {
  open: "bg-blue-100 text-blue-700",
  assigned: "bg-yellow-100 text-yellow-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
}

export function HandymanDashboardClient({ profile, jobs }: { profile: Profile; jobs: Job[] }) {
  const [tab, setTab] = useState<"jobs" | "profile">("jobs")
  const [editMode, setEditMode] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ phone: profile.phone, city: profile.city, postalCode: profile.postalCode, bio: profile.bio || "", availability: profile.availability, password: "" })

  const completedJobs = jobs.filter(j => j.status === "completed")
  const totalEarnings = completedJobs.reduce((sum, j) => sum + (j.jobValue ? j.jobValue * (1 - j.feePercent / 100) : 0), 0)
  const totalFees = completedJobs.reduce((sum, j) => sum + (j.jobValue ? j.jobValue * (j.feePercent / 100) : 0), 0)

  const saveProfile = async () => {
    setSaving(true)
    const updateData: any = { phone: form.phone, city: form.city, postalCode: form.postalCode, bio: form.bio, availability: form.availability }
    if (form.password) updateData.password = form.password
    
    const res = await fetch("/api/handyman/profile", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(updateData) })
    setSaving(false)
    if (res.ok) { 
      setSaveMsg(form.password ? "Profile updated! Please sign in again with your new password." : "Profile updated!")
      setEditMode(false)
      setShowPassword(false)
      setForm(p => ({ ...p, password: "" }))
      setTimeout(() => setSaveMsg(""), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 gradient-primary rounded-xl">
              <span className="text-white font-bold text-sm">{profile.name[0]}</span>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm leading-none">{profile.name}</p>
              <p className="text-xs text-muted-foreground">{profile.city}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${profile.status === "active" ? "bg-green-100 text-green-700" : profile.status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
              {profile.status}
            </span>
            <Button variant="ghost" size="sm" onClick={() => signOut({ callbackUrl: "/handyman/login" })} className="text-muted-foreground">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-3xl">
        {/* Status banner for pending */}
        {profile.status === "pending" && (
          <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-xl mb-6">
            <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0" />
            <p className="text-sm text-yellow-800">Your account is under review. We'll activate it within 24 hours.</p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Total Jobs", value: jobs.length, icon: Briefcase, color: "text-blue-600" },
            { label: "Completed", value: completedJobs.length, icon: CheckCircle, color: "text-green-600" },
            { label: "My Earnings", value: `$${totalEarnings.toFixed(0)}`, icon: DollarSign, color: "text-purple-600" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-3 text-center">
              <stat.icon className={`w-5 h-5 mx-auto mb-1 ${stat.color}`} />
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Fee notice */}
        <div className="flex items-center gap-2 p-3 bg-primary/5 border border-primary/20 rounded-xl mb-6 text-xs text-muted-foreground">
          <Star className="w-4 h-4 text-primary shrink-0" />
          <span>Company fee: <strong>{profile.feePercent}%</strong> on referred jobs. Total fees paid: <strong>${totalFees.toFixed(2)}</strong></span>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-muted p-1 rounded-xl mb-6">
          {(["jobs", "profile"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all capitalize ${tab === t ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}>
              {t === "jobs" ? `Jobs (${jobs.length})` : "My Profile"}
            </button>
          ))}
        </div>

        {/* Jobs Tab */}
        {tab === "jobs" && (
          <div className="space-y-3">
            {jobs.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <Briefcase className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="font-medium">No jobs assigned yet</p>
                <p className="text-sm mt-1">We'll notify you when a job matches your location & skills</p>
              </div>
            ) : jobs.map((job, i) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground">{job.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${statusColor[job.status] || "bg-muted text-muted-foreground"}`}>
                    {job.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                  {job.scheduledDate && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{new Date(job.scheduledDate).toLocaleDateString()}</span>}
                  {job.jobValue && (
                    <span className="flex items-center gap-1 text-green-600 font-medium">
                      <DollarSign className="w-3 h-3" />
                      You earn: ${(job.jobValue * (1 - job.feePercent / 100)).toFixed(2)}
                      <span className="text-muted-foreground font-normal">({job.feePercent}% fee)</span>
                    </span>
                  )}
                </div>
                {job.clientPhone && job.status === "assigned" && (
                  <div className="mt-3 pt-3 border-t border-border flex items-center gap-2">
                    <Phone className="w-3 h-3 text-primary" />
                    <a href={`tel:${job.clientPhone}`} className="text-xs text-primary font-medium hover:underline">{job.clientPhone}</a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Profile Tab */}
        {tab === "profile" && (
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Profile Details</h3>
              {!editMode
                ? <Button size="sm" variant="outline" className="rounded-lg" onClick={() => setEditMode(true)}>Edit</Button>
                : <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="rounded-lg" onClick={() => setEditMode(false)}>Cancel</Button>
                    <Button size="sm" className="gradient-primary text-white rounded-lg" onClick={saveProfile} disabled={saving}>{saving ? "Saving..." : "Save"}</Button>
                  </div>
              }
            </div>
            {saveMsg && <p className="text-sm text-green-600">{saveMsg}</p>}

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="text-foreground">{profile.email}</span>
              </div>
              {editMode ? (
                <>
                  <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Phone</label><Input value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="rounded-xl" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground mb-1 block">City</label><Input value={form.city} onChange={e => setForm(p => ({ ...p, city: e.target.value }))} className="rounded-xl" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Postal Code</label><Input value={form.postalCode} onChange={e => setForm(p => ({ ...p, postalCode: e.target.value }))} className="rounded-xl" /></div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Availability</label>
                    <select value={form.availability} onChange={e => setForm(p => ({ ...p, availability: e.target.value }))} className="w-full px-3 py-2 rounded-xl bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="full-time">Full-time</option><option value="part-time">Part-time</option><option value="weekends">Weekends only</option><option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Bio</label><textarea value={form.bio} onChange={e => setForm(p => ({ ...p, bio: e.target.value }))} rows={3} className="w-full px-3 py-2 rounded-xl bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" /></div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block flex items-center gap-1">
                      <Key className="w-3 h-3" /> New Password (leave blank to keep current)
                    </label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                        className="rounded-xl pr-10"
                        placeholder="Enter new password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3 text-sm"><Phone className="w-4 h-4 text-muted-foreground shrink-0" /><span>{profile.phone}</span></div>
                  <div className="flex items-center gap-3 text-sm"><MapPin className="w-4 h-4 text-muted-foreground shrink-0" /><span>{profile.city}, {profile.postalCode}</span></div>
                  <div className="flex items-center gap-3 text-sm"><Clock className="w-4 h-4 text-muted-foreground shrink-0" /><span className="capitalize">{profile.availability}</span></div>
                  {profile.bio && <p className="text-sm text-muted-foreground pt-1">{profile.bio}</p>}
                </>
              )}
            </div>

            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">Skills</p>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map(s => <span key={s} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg font-medium">{s}</span>)}
              </div>
            </div>

            <div className="pt-3 border-t border-border text-xs text-muted-foreground">
              Member since {new Date(profile.createdAt).toLocaleDateString("en-CA", { year: "numeric", month: "long" })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
