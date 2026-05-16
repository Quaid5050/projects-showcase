import { useState } from "react";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
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
      <title>Contact Us — Hands That Heal</title>
      <meta name="description" content="Get in touch with Hands That Heal. Visit, call, or send us a message." />

      <section className="relative pt-28 sm:pt-36 pb-8 sm:pb-12 overflow-hidden">
        <GradientBlobs />
        <div className="container-luxe relative max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Get in Touch</p>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Have Anything To Ask?{" "}
            <span className="italic text-gradient">Feel free to reach out.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We'd love to hear from you! Whether you have questions about our services, want to book an appointment, or just want to learn more, our team is here to help.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-luxe grid lg:grid-cols-5 gap-8">
          <form onSubmit={submit} className="lg:col-span-3 bg-card rounded-3xl shadow-soft p-6 sm:p-8 md:p-12">
            <h2 className="font-display text-3xl mb-8">Fill the form below</h2>
            <div className="space-y-5">
              <div>
                <Label htmlFor="cn">Name</Label>
                <Input id="cn" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" className="mt-2 h-12 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="ce">Email</Label>
                <Input id="ce" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="mt-2 h-12 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="cm">Message</Label>
                <Textarea id="cm" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" className="mt-2 rounded-xl min-h-32" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message <Send className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </form>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-deep-gradient text-primary-foreground rounded-3xl p-8 shadow-elegant">
              <h3 className="font-display text-2xl mb-6">Visit Us</h3>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary-glow shrink-0 mt-0.5" />
                  <span>+1 905 662 0005</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-primary-glow shrink-0 mt-0.5" />
                  <span>handthatheal@hotmail.ca</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary-glow shrink-0 mt-0.5" />
                  <span>70 King St E, Stoney Creek, ON L8G 1K2, Canada</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="font-display text-2xl mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> Hours
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Mon – Sat</span>
                  <span className="font-medium">9:00 am – 6:00 pm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/3] bg-gradient-to-br from-primary-glow via-secondary to-accent relative">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-primary mx-auto" />
                  <p className="font-display text-xl mt-3 text-foreground">Stoney Creek, ON</p>
                  <p className="text-xs text-muted-foreground mt-1">70 King St E, L8G 1K2</p>
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
