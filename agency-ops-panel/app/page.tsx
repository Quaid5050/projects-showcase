'use client';
import Link from 'next/link';
import {
  Bot, Users, FolderKanban, CheckSquare, TrendingUp,
  MessageSquare, Shield, ArrowRight, Zap, BarChart3,
  Globe, Star, ChevronRight,
} from 'lucide-react';

const features = [
  { icon: Users, title: 'Client Management', desc: 'Full client profiles with project history, AI summaries, and service tracking.', color: '#c8f000' },
  { icon: FolderKanban, title: 'Project Tracking', desc: 'Real-time progress %, current stage, risks, and next steps for every project.', color: '#7c3aed' },
  { icon: CheckSquare, title: 'Task Management', desc: 'Assign tasks, set priorities, track blockers, and monitor deadlines per project.', color: '#60a5fa' },
  { icon: TrendingUp, title: 'Progress Updates', desc: 'Internal and client-safe updates. AI uses only approved data to reply to clients.', color: '#34d399' },
  { icon: Bot, title: 'AI Operations Assistant', desc: 'Ask anything in English or Urdu. Answers from real panel data, never invented.', color: '#a78bfa' },
  { icon: MessageSquare, title: 'Client Reply AI', desc: 'Drafts professional replies based on actual progress. Human approval required.', color: '#f472b6' },
  { icon: Globe, title: 'Client Portal', desc: 'Give clients a secure portal link to view their project and chat with AI.', color: '#fb923c' },
  { icon: Shield, title: 'Human Approval Flow', desc: 'All AI replies are drafts until your team approves. Nothing sends automatically.', color: '#facc15' },
];

const services = ['Website Development','App Development','Google Ads','Meta Ads','SEO','Branding','Social Media Management','Graphic Design','Existing Client Support'];

const aiExamples = [
  { q: '"Google Ads ki progress kya hai?"', a: 'Returns all Google Ads clients with project status, progress %, latest update, pending tasks, and team info.', color: '#c8f000' },
  { q: '"Development clients ki current status batao"', a: 'Groups all website/app projects, shows completed work, pending items, last update, and ETA.', color: '#7c3aed' },
  { q: '"Konse clients ko follow-up chahiye?"', a: 'Checks conversations and progress data, returns clients with no recent activity or pending replies.', color: '#60a5fa' },
  { q: '"ABC client ka website update draft karo"', a: 'Reads actual client-safe progress, drafts professional update message, saves as draft for approval.', color: '#34d399' },
];

const steps = [
  { n: '01', title: 'Add Client & Project', desc: 'Create the client profile and link their project with service type and team.', color: '#c8f000' },
  { n: '02', title: 'Update Progress', desc: 'Team adds progress updates marked as internal or client-safe.', color: '#7c3aed' },
  { n: '03', title: 'AI Generates Reply', desc: 'When client asks, AI drafts a reply using only client-safe data.', color: '#60a5fa' },
  { n: '04', title: 'Human Approves', desc: 'Manager reviews, edits, and approves. Nothing is sent automatically.', color: '#34d399' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0d0d12', color: 'white' }}>
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ background: 'rgba(13,13,18,0.9)', borderBottom: '1px solid #1a1a2e' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c8f000, #7c3aed)' }}>
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="font-black text-lg"><span className="text-white">BizzOne</span><span style={{ color: '#c8f000' }}>Digital</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {['Features','How It Works','AI Examples','Services'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium transition-colors" style={{ color: '#6b7280' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = '#c8f000')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = '#6b7280')}>
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold px-4 py-2 rounded-lg transition-colors" style={{ color: '#9ca3af' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#c8f000')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#9ca3af')}>
              Sign In
            </Link>
            <Link href="/register" className="text-sm font-bold px-5 py-2.5 rounded-xl text-black"
              style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32 px-6">
        {/* Background glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(200,240,0,0.06) 0%, transparent 70%)' }} />
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#c8f000 1px, transparent 1px), linear-gradient(90deg, #c8f000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-bold tracking-widest uppercase"
            style={{ border: '1px solid rgba(200,240,0,0.3)', color: '#c8f000', background: 'rgba(200,240,0,0.05)' }}>
            <Zap className="w-3.5 h-3.5" /> AI Automation & Digital Growth Agency
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            <span className="text-white">AI-Powered Agency</span><br />
            <span style={{ color: '#c8f000' }}>Operations</span>
            <span className="text-white"> & </span>
            <span style={{ background: 'linear-gradient(135deg, #7c3aed, #c8f000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Client Communication</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
            Manage clients, projects, progress, and AI-generated client updates from one intelligent agency panel. Ask the AI anything about your agency in English or Urdu.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
            <Link href="/register" className="flex items-center gap-2 text-base font-bold px-8 py-4 rounded-xl text-black"
              style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/login" className="flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #2d2d4e', color: '#9ca3af' }}>
              Sign In
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: '10+', label: 'Service Types', color: '#c8f000' },
              { value: 'AI', label: 'Operations Agent', color: '#7c3aed' },
              { value: '5', label: 'User Roles', color: '#60a5fa' },
              { value: '100%', label: 'Human Approval', color: '#34d399' },
            ].map(s => (
              <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1e1e2e' }}>
                <p className="text-2xl font-black mb-1" style={{ color: s.color }}>{s.value}</p>
                <p className="text-xs" style={{ color: '#4b5563' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6" style={{ background: '#0a0a10' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#c8f000' }}>Platform Features</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Everything Your Agency Needs</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>From client onboarding to AI-powered project delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map(f => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl p-6 transition-all group cursor-default"
                  style={{ background: '#13131f', border: '1px solid #1e1e2e' }}
                  onMouseEnter={e => (e.currentTarget.style.border = `1px solid ${f.color}33`)}
                  onMouseLeave={e => (e.currentTarget.style.border = '1px solid #1e1e2e')}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${f.color}15`, border: `1px solid ${f.color}30` }}>
                    <Icon className="w-5 h-5" style={{ color: f.color }} />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#7c3aed' }}>Workflow</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">How It Works</h2>
            <p className="text-lg" style={{ color: '#6b7280' }}>Four simple steps from client message to approved reply.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="rounded-2xl p-6" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
                  <div className="text-4xl font-black mb-4" style={{ color: `${s.color}30` }}>{s.n}</div>
                  <h3 className="font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{s.desc}</p>
                </div>
                {i < 3 && <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 items-center"><ChevronRight className="w-5 h-5" style={{ color: '#2d2d4e' }} /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Examples */}
      <section id="ai-examples" className="py-24 px-6" style={{ background: '#0a0a10' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#a78bfa' }}>AI Intelligence</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Ask Anything About Your Agency</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>In English or Urdu — the AI answers from real panel data only.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aiExamples.map(ex => (
              <div key={ex.q} className="rounded-2xl p-6" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${ex.color}15` }}>
                    <Bot className="w-3.5 h-3.5" style={{ color: ex.color }} />
                  </div>
                  <p className="text-sm font-bold font-mono" style={{ color: ex.color }}>{ex.q}</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{ex.a}</p>
              </div>
            ))}
          </div>

          {/* Client Portal highlight */}
          <div className="mt-8 rounded-2xl p-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(200,240,0,0.05), rgba(124,58,237,0.1))', border: '1px solid rgba(200,240,0,0.15)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15), transparent)' }} />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5" style={{ color: '#c8f000' }} />
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#c8f000' }}>Client Portal</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Give Clients a Secure Portal</h3>
                <p className="leading-relaxed mb-4" style={{ color: '#6b7280' }}>
                  One click generates a private link. Clients can view their project progress, tasks, and chat with the AI assistant — without ever logging into your panel.
                </p>
                <ul className="space-y-2">
                  {['No login required — just share the link','AI answers questions about their project only','Client-safe data only — internal notes hidden','Revoke access anytime'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#9ca3af' }}>
                      <span style={{ color: '#c8f000' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(13,13,18,0.6)', border: '1px solid rgba(200,240,0,0.1)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#c8f000' }} />
                  <span className="text-xs font-semibold" style={{ color: '#c8f000' }}>Client Portal — Bright Dental Clinic</span>
                </div>
                <div className="space-y-3">
                  <div><p className="text-xs mb-1" style={{ color: '#4b5563' }}>Google Ads Progress</p>
                    <div className="h-2 rounded-full" style={{ background: '#1e1e2e' }}><div className="h-full rounded-full" style={{ width: '60%', background: 'linear-gradient(90deg, #c8f000, #7c3aed)' }} /></div>
                    <p className="text-xs mt-1 font-bold" style={{ color: '#c8f000' }}>60% Complete</p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
                    <p className="text-xs" style={{ color: '#4ade80' }}>✓ Campaign is live and running</p>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
                    <Bot className="w-4 h-4 flex-shrink-0" style={{ color: '#c8f000' }} />
                    <p className="text-xs" style={{ color: '#6b7280' }}>How is the campaign performing so far?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#60a5fa' }}>Supported Services</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Services the AI Understands</h2>
            <p className="text-lg" style={{ color: '#6b7280' }}>AI automatically classifies and groups data by service type.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {services.map(s => (
              <span key={s} className="px-4 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={{ background: '#13131f', border: '1px solid #1e1e2e', color: '#9ca3af' }}>
                {s}
              </span>
            ))}
          </div>

          {/* Role grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            {[
              { role: 'Admin', desc: 'Full access to everything', color: '#c8f000' },
              { role: 'CEO', desc: 'Overview & AI analytics', color: '#a78bfa' },
              { role: 'Manager', desc: 'Projects & team oversight', color: '#60a5fa' },
              { role: 'Sales', desc: 'Leads & client replies', color: '#34d399' },
              { role: 'Team', desc: 'Tasks & progress updates', color: '#fb923c' },
            ].map(r => (
              <div key={r.role} className="rounded-xl p-5" style={{ background: '#13131f', border: '1px solid #1e1e2e' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 text-xs font-black text-black" style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}99)` }}>{r.role[0]}</div>
                <p className="font-bold text-white text-sm mb-1">{r.role}</p>
                <p className="text-xs" style={{ color: '#4b5563' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="py-20 px-6" style={{ background: '#0a0a10' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#c8f000' }} />)}
          </div>
          <p className="text-xl md:text-2xl font-bold text-white mb-6 leading-relaxed">
            &ldquo;The AI assistant answered <span style={{ color: '#c8f000' }}>Google Ads ki progress kya hai</span> with real client data — current stage, progress percentage, and pending tasks. In seconds.&rdquo;
          </p>
          <p className="text-sm" style={{ color: '#4b5563' }}>— Digital Agency CEO, BizzOne Digital</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full" style={{ background: 'radial-gradient(ellipse at center top, rgba(124,58,237,0.12) 0%, transparent 60%)' }} />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #c8f000, #7c3aed)' }}>
            <Zap className="w-8 h-8 text-black" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ready to Run Your<br /><span style={{ color: '#c8f000' }}>Agency Smarter?</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: '#6b7280' }}>
            Start managing clients, projects, and AI-powered communication today.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/register" className="flex items-center gap-2 text-lg font-black px-10 py-5 rounded-xl text-black"
              style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/login" className="flex items-center gap-2 text-base font-semibold px-8 py-5 rounded-xl"
              style={{ border: '1px solid #2d2d4e', color: '#9ca3af' }}>
              Sign In →
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: '#2d2d4e' }}>No credit card required · Free to start</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6" style={{ borderTop: '1px solid #1a1a2e' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c8f000, #7c3aed)' }}>
              <Zap className="w-4 h-4 text-black" />
            </div>
            <span className="font-black"><span className="text-white">BizzOne</span><span style={{ color: '#c8f000' }}>Digital</span></span>
          </div>
          <p className="text-sm" style={{ color: '#2d2d4e' }}>© {new Date().getFullYear()} BizzOne Digital. Agency AI Operations Panel.</p>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium transition-colors" style={{ color: '#4b5563' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#c8f000')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#4b5563')}>
              Login
            </Link>
            <Link href="/register" className="text-sm font-bold px-4 py-2 rounded-lg text-black" style={{ background: 'linear-gradient(135deg, #c8f000, #a0d000)' }}>
              Get Started
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
