"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { motion } from "framer-motion"
import { Users, Briefcase, Plus, MapPin, Phone, Clock, DollarSign, Shield, LogOut, X, Edit2, Save, XCircle, Mail, Key, User as UserIcon, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Handyman = { id: string; name: string; email: string; phone: string; city: string; postalCode: string; skills: string[]; status: string; feePercent: number; availability: string; createdAt: Date }
type Job = { id: string; title: string; description: string; location: string; city: string; postalCode?: string | null; serviceType: string; clientName?: string | null; clientPhone?: string | null; scheduledDate?: Date | null; status: string; jobValue?: number | null; feePercent: number; handymanId?: string | null; handyman?: { id: string; name: string; city: string } | null; createdAt: Date }

const serviceTypes = ["General Labour", "Carpentry", "Electrical", "Plumbing", "HVAC", "Drywall", "Framing", "Painting", "Flooring", "Roofing", "Other"]
const statusColor: Record<string, string> = { open: "bg-blue-100 text-blue-700", assigned: "bg-yellow-100 text-yellow-700", completed: "bg-green-100 text-green-700", cancelled: "bg-red-100 text-red-700" }
const memberStatusColor: Record<string, string> = { active: "bg-green-100 text-green-700", pending: "bg-yellow-100 text-yellow-700", suspended: "bg-red-100 text-red-700" }

const emptyJob = { title: "", description: "", location: "", city: "", postalCode: "", serviceType: "", clientName: "", clientPhone: "", scheduledDate: "", jobValue: "", handymanId: "" }

export function AdminDashboardClient({ handymen: initial, jobs: initialJobs }: { handymen: Handyman[]; jobs: Job[] }) {
  const router = useRouter()
  const [tab, setTab] = useState<"overview" | "jobs" | "members" | "profile">("overview")
  const [handymen, setHandymen] = useState(initial)
  const [jobs, setJobs] = useState(initialJobs)
  const [showJobForm, setShowJobForm] = useState(false)
  const [jobForm, setJobForm] = useState(emptyJob)
  const [saving, setSaving] = useState(false)
  const [cityFilter, setCityFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")

  const refresh = () => router.refresh()

  // Stats
  const activeMembers = handymen.filter(h => h.status === "active").length
  const pendingMembers = handymen.filter(h => h.status === "pending").length
  const openJobs = jobs.filter(j => j.status === "open").length
  const totalRevenue = jobs.filter(j => j.status === "completed").reduce((s, j) => s + (j.jobValue ? j.jobValue * (j.feePercent / 100) : 0), 0)

  // Create job
  const createJob = async () => {
    setSaving(true)
    const res = await fetch("/api/admin/jobs", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...jobForm, jobValue: jobForm.jobValue ? parseFloat(jobForm.jobValue) : null, scheduledDate: jobForm.scheduledDate || null, handymanId: jobForm.handymanId || null }),
    })
    const newJob = await res.json()
    setJobs(p => [{ ...newJob, handyman: handymen.find(h => h.id === newJob.handymanId) || null }, ...p])
    setJobForm(emptyJob); setShowJobForm(false); setSaving(false)
  }

  // Update job status / assign
  const updateJob = async (id: string, data: Partial<Job>) => {
    const res = await fetch(`/api/admin/jobs/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    const updated = await res.json()
    setJobs(p => p.map(j => j.id === id ? { ...j, ...updated, handyman: handymen.find(h => h.id === updated.handymanId) || null } : j))
  }

  // Update handyman status
  const updateHandyman = async (id: string, data: Partial<Handyman>) => {
    const res = await fetch(`/api/admin/handymen/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    const updated = await res.json()
    setHandymen(p => p.map(h => h.id === id ? { ...h, ...updated } : h))
  }

  // Delete job
  const deleteJob = async (id: string) => {
    if (!confirm("Delete this job?")) return
    await fetch(`/api/admin/jobs/${id}`, { method: "DELETE" })
    setJobs(p => p.filter(j => j.id !== id))
  }

  const filteredJobs = jobs.filter(j =>
    (!cityFilter || j.city.toLowerCase().includes(cityFilter.toLowerCase())) &&
    (!statusFilter || j.status === statusFilter)
  )

  const filteredMembers = handymen.filter(h =>
    (!cityFilter || h.city.toLowerCase().includes(cityFilter.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[#0F172A] text-white sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#A78BFA]" />
            <span className="font-bold">Admin Dashboard</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => signOut({ callbackUrl: "/admin/login" })} className="text-white/60 hover:text-white">
            <LogOut className="w-4 h-4 mr-1" /> Sign out
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Active Members", value: activeMembers, icon: Users, color: "text-green-600", sub: `${pendingMembers} pending` },
            { label: "Open Jobs", value: openJobs, icon: Briefcase, color: "text-blue-600", sub: `${jobs.length} total` },
            { label: "Total Members", value: handymen.length, icon: Users, color: "text-purple-600", sub: "all time" },
            { label: "Total Fees", value: `$${totalRevenue.toFixed(0)}`, icon: DollarSign, color: "text-yellow-600", sub: "from completed jobs" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <s.icon className={`w-4 h-4 ${s.color}`} />
              </div>
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-muted p-1 rounded-xl mb-6 w-fit">
          {(["overview", "jobs", "members", "profile"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${tab === t ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {t}
            </button>
          ))}
        </div>

        {/* Filters */}
        {(tab === "jobs" || tab === "members") && (
          <div className="flex gap-3 mb-4 flex-wrap">
            <Input placeholder="Filter by city..." value={cityFilter} onChange={e => setCityFilter(e.target.value)} className="rounded-xl w-48" />
            {tab === "jobs" && (
              <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="px-3 py-2 rounded-xl bg-card border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">All statuses</option>
                <option value="open">Open</option><option value="assigned">Assigned</option><option value="completed">Completed</option><option value="cancelled">Cancelled</option>
              </select>
            )}
          </div>
        )}

        {/* Overview Tab */}
        {tab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent jobs */}
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-semibold text-foreground mb-3">Recent Jobs</h3>
              <div className="space-y-2">
                {jobs.slice(0, 5).map(job => (
                  <div key={job.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{job.title}</p>
                      <p className="text-xs text-muted-foreground">{job.city} · {job.handyman?.name || "Unassigned"}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[job.status]}`}>{job.status}</span>
                  </div>
                ))}
                {jobs.length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No jobs yet</p>}
              </div>
            </div>
            {/* Pending members */}
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-semibold text-foreground mb-3">Pending Approvals</h3>
              <div className="space-y-2">
                {handymen.filter(h => h.status === "pending").slice(0, 5).map(h => (
                  <div key={h.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{h.name}</p>
                      <p className="text-xs text-muted-foreground">{h.city} · {h.skills.slice(0, 2).join(", ")}</p>
                    </div>
                    <Button size="sm" className="gradient-primary text-white rounded-lg text-xs h-7" onClick={() => updateHandyman(h.id, { status: "active" })}>Approve</Button>
                  </div>
                ))}
                {handymen.filter(h => h.status === "pending").length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No pending approvals</p>}
              </div>
            </div>
          </div>
        )}

        {/* Jobs Tab */}
        {tab === "jobs" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">All Jobs ({filteredJobs.length})</h3>
              <Button className="gradient-primary text-white rounded-xl text-sm" onClick={() => setShowJobForm(true)}>
                <Plus className="w-4 h-4 mr-1" /> New Job
              </Button>
            </div>

            {/* New Job Form */}
            {showJobForm && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-xl p-5 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Create New Job</h4>
                  <button onClick={() => setShowJobForm(false)}><X className="w-4 h-4 text-muted-foreground" /></button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2"><label className="text-xs font-medium text-muted-foreground mb-1 block">Job Title *</label><Input value={jobForm.title} onChange={e => setJobForm(p => ({ ...p, title: e.target.value }))} placeholder="e.g. Drywall repair" className="rounded-xl" /></div>
                  <div className="sm:col-span-2"><label className="text-xs font-medium text-muted-foreground mb-1 block">Description *</label><textarea value={jobForm.description} onChange={e => setJobForm(p => ({ ...p, description: e.target.value }))} rows={2} className="w-full px-3 py-2 rounded-xl bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Service Type *</label>
                    <select value={jobForm.serviceType} onChange={e => setJobForm(p => ({ ...p, serviceType: e.target.value }))} className="w-full px-3 py-2 rounded-xl bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select</option>{serviceTypes.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div><label className="text-xs font-medium text-muted-foreground mb-1 block">City *</label><Input value={jobForm.city} onChange={e => setJobForm(p => ({ ...p, city: e.target.value }))} placeholder="Toronto" className="rounded-xl" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Full Address</label><Input value={jobForm.location} onChange={e => setJobForm(p => ({ ...p, location: e.target.value }))} placeholder="123 Main St" className="rounded-xl" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Postal Code</label><Input value={jobForm.postalCode} onChange={e => setJobForm(p => ({ ...p, postalCode: e.target.value }))} placeholder="M1H 3E3" className="rounded-xl" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Client Name</label><Input value={jobForm.clientName} onChange={e => setJobForm(p => ({ ...p, clientName: e.target.value }))} className="rounded-xl" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Client Phone</label><Input value={jobForm.clientPhone} onChange={e => setJobForm(p => ({ ...p, clientPhone: e.target.value }))} className="rounded-xl" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Job Value ($)</label><Input type="number" value={jobForm.jobValue} onChange={e => setJobForm(p => ({ ...p, jobValue: e.target.value }))} placeholder="500" className="rounded-xl" /></div>
                  <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Scheduled Date</label><Input type="date" value={jobForm.scheduledDate} onChange={e => setJobForm(p => ({ ...p, scheduledDate: e.target.value }))} className="rounded-xl" /></div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Assign to Handyman (by city match)</label>
                    <select value={jobForm.handymanId} onChange={e => setJobForm(p => ({ ...p, handymanId: e.target.value }))} className="w-full px-3 py-2 rounded-xl bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Unassigned</option>
                      {handymen.filter(h => h.status === "active").sort((a, b) => {
                        const aMatch = a.city.toLowerCase() === jobForm.city.toLowerCase()
                        const bMatch = b.city.toLowerCase() === jobForm.city.toLowerCase()
                        return aMatch === bMatch ? 0 : aMatch ? -1 : 1
                      }).map(h => (
                        <option key={h.id} value={h.id}>{h.name} — {h.city} {h.city.toLowerCase() === jobForm.city.toLowerCase() ? "✓ same city" : ""}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="rounded-xl" onClick={() => setShowJobForm(false)}>Cancel</Button>
                  <Button className="gradient-primary text-white rounded-xl" onClick={createJob} disabled={saving || !jobForm.title || !jobForm.city || !jobForm.serviceType}>
                    {saving ? "Creating..." : "Create Job"}
                  </Button>
                </div>
              </motion.div>
            )}

            <div className="space-y-3">
              {filteredJobs.map((job, i) => (
                <motion.div key={job.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                  className="bg-card border border-border rounded-xl p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{job.title}</h4>
                      <p className="text-xs text-muted-foreground">{job.serviceType} · {job.city}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[job.status]}`}>{job.status}</span>
                      <button onClick={() => deleteJob(job.id)} className="text-muted-foreground hover:text-destructive"><X className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                    {job.scheduledDate && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{new Date(job.scheduledDate).toLocaleDateString()}</span>}
                    {job.jobValue && <span className="flex items-center gap-1 text-green-600 font-medium"><DollarSign className="w-3 h-3" />${job.jobValue} (fee: ${(job.jobValue * job.feePercent / 100).toFixed(2)})</span>}
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    {/* Assign dropdown */}
                    <select
                      value={job.handymanId || ""}
                      onChange={e => updateJob(job.id, { handymanId: e.target.value || null, status: e.target.value ? "assigned" : "open" } as any)}
                      className="px-2 py-1 rounded-lg bg-background border border-input text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-ring"
                    >
                      <option value="">Unassigned</option>
                      {handymen.filter(h => h.status === "active").map(h => (
                        <option key={h.id} value={h.id}>{h.name} ({h.city})</option>
                      ))}
                    </select>
                    {/* Status update */}
                    <select
                      value={job.status}
                      onChange={e => updateJob(job.id, { status: e.target.value } as any)}
                      className="px-2 py-1 rounded-lg bg-background border border-input text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-ring"
                    >
                      <option value="open">Open</option><option value="assigned">Assigned</option><option value="completed">Completed</option><option value="cancelled">Cancelled</option>
                    </select>
                    {job.handyman && <span className="text-xs text-primary font-medium">→ {job.handyman.name}</span>}
                  </div>
                </motion.div>
              ))}
              {filteredJobs.length === 0 && <p className="text-center text-muted-foreground py-12">No jobs found</p>}
            </div>
          </div>
        )}

        {/* Members Tab */}
        {tab === "members" && (
          <div>
            <h3 className="font-semibold text-foreground mb-4">All Members ({filteredMembers.length})</h3>
            <div className="space-y-3">
              {filteredMembers.map((h, i) => (
                <motion.div key={h.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                  className="bg-card border border-border rounded-xl p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{h.name}</h4>
                      <p className="text-xs text-muted-foreground">{h.email}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${memberStatusColor[h.status]}`}>{h.status}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{h.city}, {h.postalCode}</span>
                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{h.phone}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{h.availability}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {h.skills.map(s => <span key={s} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-lg">{s}</span>)}
                  </div>
                  <div className="flex gap-2">
                    {h.status !== "active" && <Button size="sm" className="gradient-primary text-white rounded-lg text-xs h-7" onClick={() => updateHandyman(h.id, { status: "active" })}>Activate</Button>}
                    {h.status !== "suspended" && <Button size="sm" variant="outline" className="rounded-lg text-xs h-7 text-destructive border-destructive/30" onClick={() => updateHandyman(h.id, { status: "suspended" })}>Suspend</Button>}
                    {h.status !== "pending" && <Button size="sm" variant="outline" className="rounded-lg text-xs h-7" onClick={() => updateHandyman(h.id, { status: "pending" })}>Set Pending</Button>}
                  </div>
                </motion.div>
              ))}
              {filteredMembers.length === 0 && <p className="text-center text-muted-foreground py-12">No members found</p>}
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {tab === "profile" && (
          <div className="max-w-2xl">
            <ProfileTab totalMembers={handymen.length} activeMembers={activeMembers} pendingMembers={pendingMembers} totalJobs={jobs.length} totalRevenue={totalRevenue} />
          </div>
        )}
      </div>
    </div>
  )
}

// Profile Tab Component
function ProfileTab({ totalMembers, activeMembers, pendingMembers, totalJobs, totalRevenue }: { totalMembers: number; activeMembers: number; pendingMembers: number; totalJobs: number; totalRevenue: number }) {
  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  
  const [profile, setProfile] = useState({ email: "", name: "", source: "" })
  const [form, setForm] = useState({ email: "", password: "", name: "" })

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/profile")
      const data = await res.json()
      setProfile(data)
      setForm({ email: data.email, password: "", name: data.name })
    } catch (error) {
      setMessage({ type: "error", text: "Failed to load profile" })
    }
    setLoading(false)
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage(null)
    try {
      const res = await fetch("/api/admin/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          ...(form.password ? { password: form.password } : {}),
        }),
      })
      
      if (res.ok) {
        const data = await res.json()
        setProfile({ ...data, source: "database" })
        setMessage({ type: "success", text: "Profile updated successfully! Please sign in again with new credentials." })
        setEditing(false)
        setForm({ ...form, password: "" })
      } else {
        setMessage({ type: "error", text: "Failed to update profile" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred" })
    }
    setSaving(false)
  }

  const handleCancel = () => {
    setForm({ email: profile.email, password: "", name: profile.name })
    setEditing(false)
    setMessage(null)
    setShowPassword(false)
  }

  if (loading) {
    return <div className="text-center py-12 text-muted-foreground">Loading profile...</div>
  }

  return (
    <div className="space-y-6">
      {/* System Stats */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#A78BFA]" />
          System Overview
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">Total Members</p>
            <p className="text-2xl font-bold text-foreground">{totalMembers}</p>
            <p className="text-xs text-green-600 mt-0.5">{activeMembers} active · {pendingMembers} pending</p>
          </div>
          <div className="bg-background rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">Total Jobs</p>
            <p className="text-2xl font-bold text-foreground">{totalJobs}</p>
          </div>
          <div className="bg-background rounded-lg p-3 col-span-2">
            <p className="text-xs text-muted-foreground mb-1">Total Revenue (15% fees)</p>
            <p className="text-2xl font-bold text-green-600">${totalRevenue.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Email Configuration */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Mail className="w-5 h-5 text-[#A78BFA]" />
          Email Configuration
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Email Address</span>
            <span className="font-medium text-foreground">lupinprojectgroup@gmail.com</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">App Password</span>
            <span className="font-mono text-xs text-foreground">••••••••••••••••</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-muted-foreground">Status</span>
            <span className="text-green-600 font-medium">✓ Configured</span>
          </div>
        </div>
      </div>

      {/* Admin Credentials */}
      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Key className="w-5 h-5 text-[#A78BFA]" />
            Admin Credentials
          </h3>
          {!editing && (
            <Button size="sm" variant="outline" className="rounded-lg" onClick={() => setEditing(true)}>
              <Edit2 className="w-3 h-3 mr-1" /> Edit
            </Button>
          )}
        </div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-4 p-3 rounded-lg text-sm ${
              message.type === "success" ? "bg-green-100 text-green-700 border border-green-200" : "bg-red-100 text-red-700 border border-red-200"
            }`}
          >
            {message.text}
          </motion.div>
        )}

        <div className="space-y-3">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block flex items-center gap-1">
              <Mail className="w-3 h-3" /> Email
            </label>
            {editing ? (
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-xl"
                placeholder="admin@example.com"
              />
            ) : (
              <div className="px-3 py-2 bg-background border border-border rounded-xl text-sm text-foreground">
                {profile.email}
              </div>
            )}
          </div>

          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block flex items-center gap-1">
              <UserIcon className="w-3 h-3" /> Name
            </label>
            {editing ? (
              <Input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl"
                placeholder="Admin Name"
              />
            ) : (
              <div className="px-3 py-2 bg-background border border-border rounded-xl text-sm text-foreground">
                {profile.name}
              </div>
            )}
          </div>

          {editing && (
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block flex items-center gap-1">
                <Key className="w-3 h-3" /> New Password (leave blank to keep current)
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
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
          )}

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">
              Source: {profile.source === "database" ? "Database" : "Environment Variables"}
            </span>
          </div>

          {editing && (
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                className="rounded-xl"
                onClick={handleCancel}
                disabled={saving}
              >
                <XCircle className="w-4 h-4 mr-1" /> Cancel
              </Button>
              <Button
                className="gradient-primary text-white rounded-xl"
                onClick={handleSave}
                disabled={saving || !form.email || !form.name}
              >
                <Save className="w-4 h-4 mr-1" /> {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
