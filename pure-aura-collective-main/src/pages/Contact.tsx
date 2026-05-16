import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GradientBlobs } from "@/components/GradientBlobs";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "We'll reply within one business day." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <title>Contact — Lumière Aesthetic</title>
      <meta name="description" content="Get in touch with Lumière. Visit, call, or send us a message." />

      <section className="relative pt-40 pb-20 overflow-hidden">
        <GradientBlobs />
        <div className="container-luxe relative max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Get in Touch</p>
          <h1 className="font-display text-6xl md:text-7xl leading-[1.05]">
            Let's start a <span className="italic text-gradient">conversation.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Have a question, or want to know if a treatment is right for you? Reach out — we read every message.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxe grid lg:grid-cols-5 gap-8">
          <form onSubmit={submit} className="lg:col-span-3 bg-card rounded-3xl shadow-soft p-8 md:p-12">
            <h2 className="font-display text-3xl mb-8">Send a message</h2>
            <div className="space-y-5">
              <div>
                <Label htmlFor="cn">Name</Label>
                <Input id="cn" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 h-12 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="ce">Email</Label>
                <Input id="ce" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 h-12 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="cm">Message</Label>
                <Textarea id="cm" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 rounded-xl min-h-32" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message <Send className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </form>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-deep-gradient text-primary-foreground rounded-3xl p-8 shadow-elegant">
              <h3 className="font-display text-2xl mb-6">Visit us</h3>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary-glow shrink-0" /><span>248 Maison Avenue<br />Suite 4, City Centre</span></li>
                <li className="flex gap-3"><Phone className="h-5 w-5 text-primary-glow shrink-0" /><span>+1 (555) 010-2480</span></li>
                <li className="flex gap-3"><Mail className="h-5 w-5 text-primary-glow shrink-0" /><span>hello@lumiere-clinic.com</span></li>
              </ul>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="font-display text-2xl mb-6">Hours</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between"><span className="text-muted-foreground">Mon – Fri</span><span className="font-medium">9:00 — 19:00</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground">Saturday</span><span className="font-medium">10:00 — 18:00</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground">Sunday</span><span className="font-medium">Closed</span></li>
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/3] bg-gradient-to-br from-primary-glow via-secondary to-accent relative">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-primary mx-auto" />
                  <p className="font-display text-xl mt-3 text-foreground">Map preview</p>
                  <p className="text-xs text-muted-foreground mt-1">248 Maison Avenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
