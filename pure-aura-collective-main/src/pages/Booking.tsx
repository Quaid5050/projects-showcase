import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { GradientBlobs } from "@/components/GradientBlobs";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const steps = ["Service", "Date & Time", "Your Details", "Confirm"] as const;

const times = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"];

const Booking = () => {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [details, setDetails] = useState({ name: "", email: "", phone: "", notes: "" });
  const [done, setDone] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const canNext =
    (step === 0 && !!service) ||
    (step === 1 && !!date && !!time) ||
    (step === 2 && !!details.name && !!details.email) ||
    step === 3;

  const submit = () => {
    setDone(true);
    toast({ title: "Appointment requested", description: "We'll be in touch within 24 hours to confirm." });
  };

  const selectedService = services.find((s) => s.slug === service);

  return (
    <>
      <title>Book an Appointment — Lumière</title>
      <meta name="description" content="Reserve your private consultation at Lumière in just a few steps." />

      <section className="relative pt-32 pb-20 overflow-hidden bg-soft-gradient min-h-screen">
        <GradientBlobs />
        <div className="container-luxe relative max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Your Visit</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight">
              Reserve your <span className="italic text-gradient">private moment.</span>
            </h1>
          </div>

          {!done && (
            <div className="flex justify-between mb-12 max-w-2xl mx-auto">
              {steps.map((s, i) => (
                <div key={s} className="flex flex-col items-center flex-1 relative">
                  <div className={cn(
                    "h-10 w-10 rounded-full grid place-items-center text-sm font-medium transition-all z-10",
                    i <= step ? "bg-deep-gradient text-primary-foreground shadow-soft" : "bg-white text-muted-foreground border border-border"
                  )}>
                    {i < step ? <Check className="h-4 w-4" /> : i + 1}
                  </div>
                  <span className={cn("mt-2 text-xs hidden sm:block", i <= step ? "text-foreground font-medium" : "text-muted-foreground")}>{s}</span>
                  {i < steps.length - 1 && (
                    <div className={cn("absolute top-5 left-[60%] w-full h-px", i < step ? "bg-primary" : "bg-border")} />
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="bg-card rounded-3xl shadow-elegant p-8 md:p-12">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="h-20 w-20 mx-auto rounded-full bg-deep-gradient grid place-items-center shadow-glow">
                    <Sparkles className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-4xl mt-8">You're booked.</h2>
                  <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                    Your request for <strong className="text-foreground">{selectedService?.title}</strong> on{" "}
                    <strong className="text-foreground">{date}</strong> at <strong className="text-foreground">{time}</strong> has been received. We'll confirm via email within 24 hours.
                  </p>
                  <Button variant="hero" size="lg" className="mt-10" onClick={() => { setStep(0); setDone(false); setService(""); setDate(""); setTime(""); setDetails({ name: "", email: "", phone: "", notes: "" }); }}>
                    Book Another
                  </Button>
                </motion.div>
              ) : (
                <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  {step === 0 && (
                    <div>
                      <h3 className="font-display text-3xl mb-2">Choose your treatment</h3>
                      <p className="text-muted-foreground mb-8 text-sm">Select the service you'd like to book.</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {services.map((s) => (
                          <button
                            key={s.slug}
                            onClick={() => setService(s.slug)}
                            className={cn(
                              "text-left p-5 rounded-2xl border-2 transition-all",
                              service === s.slug ? "border-primary bg-secondary shadow-soft" : "border-border hover:border-primary/40"
                            )}
                          >
                            <h4 className="font-display text-xl">{s.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{s.tagline}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <h3 className="font-display text-3xl mb-2">Pick a date & time</h3>
                      <p className="text-muted-foreground mb-8 text-sm">Choose what works best for you.</p>
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="date" className="mb-2 block">Date</Label>
                          <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split("T")[0]} className="h-12 rounded-xl" />
                        </div>
                        <div>
                          <Label className="mb-3 block">Available times</Label>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {times.map((t) => (
                              <button
                                key={t}
                                onClick={() => setTime(t)}
                                className={cn(
                                  "h-12 rounded-xl border-2 text-sm font-medium transition-all",
                                  time === t ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/40"
                                )}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h3 className="font-display text-3xl mb-2">Tell us about you</h3>
                      <p className="text-muted-foreground mb-8 text-sm">So we can prepare for your visit.</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full name</Label>
                          <Input id="name" value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} className="mt-2 h-12 rounded-xl" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} className="mt-2 h-12 rounded-xl" />
                        </div>
                        <div className="sm:col-span-2">
                          <Label htmlFor="phone">Phone (optional)</Label>
                          <Input id="phone" value={details.phone} onChange={(e) => setDetails({ ...details, phone: e.target.value })} className="mt-2 h-12 rounded-xl" />
                        </div>
                        <div className="sm:col-span-2">
                          <Label htmlFor="notes">Anything you'd like us to know?</Label>
                          <Textarea id="notes" value={details.notes} onChange={(e) => setDetails({ ...details, notes: e.target.value })} className="mt-2 rounded-xl min-h-24" />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h3 className="font-display text-3xl mb-2">Review your booking</h3>
                      <p className="text-muted-foreground mb-8 text-sm">Confirm the details below.</p>
                      <div className="space-y-3 bg-soft-gradient rounded-2xl p-6">
                        <Row icon={<Sparkles className="h-4 w-4" />} label="Service" value={selectedService?.title || ""} />
                        <Row icon={<Calendar className="h-4 w-4" />} label="When" value={`${date} • ${time}`} />
                        <Row icon={<User className="h-4 w-4" />} label="Name" value={details.name} />
                        <Row icon={<User className="h-4 w-4" />} label="Email" value={details.email} />
                        {details.phone && <Row icon={<User className="h-4 w-4" />} label="Phone" value={details.phone} />}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between mt-10">
                    <Button variant="ghost" onClick={prev} disabled={step === 0}>Back</Button>
                    {step < 3 ? (
                      <Button variant="hero" onClick={next} disabled={!canNext}>Continue</Button>
                    ) : (
                      <Button variant="gold" size="lg" onClick={submit}>Confirm Booking</Button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

const Row = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-4 py-2 border-b border-border/50 last:border-0">
    <span className="h-8 w-8 rounded-full bg-card grid place-items-center text-primary">{icon}</span>
    <span className="text-xs uppercase tracking-wider text-muted-foreground w-24">{label}</span>
    <span className="font-medium text-foreground">{value}</span>
  </div>
);

export default Booking;
