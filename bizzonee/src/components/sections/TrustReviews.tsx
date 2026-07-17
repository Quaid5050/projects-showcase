"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { COMPANY } from "@/lib/content";

const REVIEWS = [
  { name: "Maralys Hernandez", time: "18 hours ago", stars: 5, text: "Outstanding experience from start to finish! The team was incredibly fast, professional, and responsive. They answered every question, kept me updated throughout the process, and treated me with respect the entire time." },
  { name: "Hob Boutilier", time: "21 hours ago", stars: 5, text: "Extremely happy with BizzOne. I wanted to give my business to a Canadian company and I am really glad I found them. The team is professional, fast, and truly cares about the results." },
  { name: "Prince Sheoran", time: "2 days ago", stars: 5, text: "Great team! Highly recommended for your new business website. Ready to help out 24x7 support. Thank you guys!" },
  { name: "Horizon Driving School", time: "2 days ago", stars: 5, text: "I love their work. They're very honest, quick, easy, and professional. At first I thought this was an outsourced company working for another country, but they're actually a Canadian-based business." },
  { name: "Haven Tint & Tire Garage", time: "2 days ago", stars: 5, text: "They're far and away one of the best teams we've worked with, consistently delivering exceptional results. They've handled everything from lead generation through Google Ads to running our sales process and managing social media, all at a high level." },
  { name: "Muhammad abdullah", time: "4 days ago", stars: 5, text: "It was a good experience working with you. 5/5" },
  { name: "sushil nandarkar", time: "4 days ago", stars: 5, text: "I was very happy with the service provided. I would highly recommend to connect with BizzOne Digital to create your website." },
  { name: "Ric Brand", time: "4 days ago", stars: 5, text: "Oh my God, I'm really satisfied about those guys, they do amazing job, they build my business website. They were very cooperative, very professional. I'm very happy guys, thank you so very much and affordable price, and would highly recommend them to anyone." },
  { name: "Nadeem Khan", time: "5 days ago", stars: 5, text: "Working with BizzOne Digital to build our website was an absolute pleasure. From the very first meeting, they understood our vision and brought it to life even better than we imagined. The site is sleek, incredibly fast, and user-friendly." },
  { name: "Muhammad Abdullah", time: "6 days ago", stars: 5, text: "Great service and a smooth experience working with the BizzOne team." },
  { name: "Josh Turk", time: "1 week ago", stars: 5, text: "Very fast! Helped me connect an email with bookings etc. Highly recommend!" },
  { name: "Jaydeep M", time: "2 weeks ago", stars: 5, text: "Had the best experience getting my website done! Understood the requirements without a fuss. Response time was great and the team was very friendly and helpful throughout." },
  { name: "Stephanie Lebrun", time: "2 weeks ago", stars: 5, text: "I was very picky in my demands and everything was done perfectly as I wished for. I am very satisfied with the services I had. Thank you so much." },
  { name: "Manu Sharma", time: "2 weeks ago", stars: 5, text: "We had an excellent experience working with the team on our website development project. They met our expectations and the collaboration was smooth from start to finish." },
  { name: "MLKS Delivery Solutions", time: "2 weeks ago", stars: 5, text: "We have a great experience working with BizzOne Digital for both sales and marketing services. From the beginning, their team was professional, responsive, and genuinely interested in helping our business grow." },
  { name: "Lance Colins", time: "2 weeks ago", stars: 5, text: "I would like to thank BizzOne for their patience with me. They have done a beautiful job on my website in such a short period of time, nothing but amazing. If anyone is looking for a website, you no longer have to look. BizzOne is the one." },
  { name: "Brinda Mani", time: "3 weeks ago", stars: 5, text: "We had an amazing experience working with the team who built our website. They were professional, patient, creative, and truly understood our vision from start to finish. The website looks beautiful, is easy to navigate, and perfectly represents our brand." },
  { name: "Rupesh Patel", time: "4 weeks ago", stars: 5, text: "I worked with them for my website, and they did an amazing job. They were very cooperative, attentive to detail, and professional throughout the entire process. I'm very satisfied with the final result and would highly recommend them to anyone." },
  { name: "Mohamed Iye", time: "4 weeks ago", stars: 5, text: "Top-notch service and very professional! The team was reliable, efficient, and delivered excellent quality work. Great communication and attention to detail. Highly recommend BizzOne Digital for anyone looking for professional digital services!" },
  { name: "FairSafe", time: "1 month ago", stars: 5, text: "I would give 10 stars if I can. I was a bit skeptical at first but honestly after seeing the results, a clean, modern, and professional site, they completely exceeded my expectations." },
  { name: "Gams Gakou", time: "1 month ago", stars: 5, text: "I had a great experience working with BizzOne Digital. They helped me build my website, and the whole process was smooth and professional. Their team was responsive, patient, and really understood what I wanted." },
  { name: "Lupin Project", time: "1 month ago", stars: 5, text: "I'd like to thank the BizzOne team for creating an amazing website and ad campaign for our company. They communicated with me every step of the way, making the entire process smooth and stress-free. Extremely happy with the results." },
  { name: "Micky", time: "1 month ago", stars: 5, text: "Very professional. Extremely satisfied with the service and would not hesitate to recommend BizzOne Digital to anyone looking for quality digital work." },
  { name: "infoglobal pardon", time: "1 month ago", stars: 5, text: "I want to say a huge thank you to the BizzOne team for creating an amazing website for my company. From start to finish, they were professional, responsive, and communicated with me every step of the way. They brought my vision to life." },
  { name: "Kevin Pearce", time: "2 months ago", stars: 5, text: "Great communication. Fast results and service. I would recommend this company to anyone." },
  { name: "Wavy", time: "2 months ago", stars: 5, text: "Great experience working with BizzOne. They helped me set up key parts of my WAVY business and made the process much easier. The team is great, the service and relationship building they do is the best." },
  { name: "3Ray Mobiles", time: "2 months ago", stars: 5, text: "BizzOne Digital did an amazing job on my website. I'm really impressed with how quickly they completed everything while maintaining excellent quality. The site looks modern and professional. Communication was smooth throughout." },
  { name: "Dollar Customs", time: "7 months ago", stars: 5, text: "We started with BizzOne Digital from absolute scratch. They created our logo, built our website, handled our social media, videography, and video editing, literally everything from start to finish. The results have been incredible." },
  { name: "JMG Auto", time: "7 months ago", stars: 5, text: "I started working with them for Google Ads and honestly wasn't expecting anything special. I assumed it would be like every other digital marketing company, but they proved me wrong. Their setup is genuinely an all-in-one service." },
];

const VISIBLE = 3;

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5 shrink-0">
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.9 20-21 0-1.3-.2-2.7-.5-4z"/>
      <path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16.4 19.2 14 24 14c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3c-7.6 0-14.3 4.1-17.7 10.2z"/>
      <path fill="#FBBC05" d="M24 45c5.5 0 10.5-1.9 14.4-5l-6.7-5.5C29.5 36.1 26.9 37 24 37c-6.1 0-10.7-3.1-11.8-8.5l-7 5.4C8 39.9 15.5 45 24 45z"/>
      <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.6 2.8-2.3 5.1-4.6 6.6l6.7 5.5c-.4.4 6.5-4.7 6.5-16 0-1.3-.2-2.7-.5-4z"/>
    </svg>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((w: string) => w[0]).join("").slice(0, 2).toUpperCase();
  const palette = ["#4285F4", "#34A853", "#8C00FF", "#EA4335", "#FBBC05", "#0F9D58"];
  const color = palette[name.charCodeAt(0) % palette.length];
  return (
    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold text-white" style={{ background: color }}>
      {initials}
    </div>
  );
}

export default function TrustReviews() {
  const [start, setStart] = useState(0);
  const [dir, setDir] = useState(1);
  const total = REVIEWS.length;
  const pages = Math.ceil(total / VISIBLE);

  const go = (d: number) => {
    setDir(d);
    setStart((p) => (p + d * VISIBLE + total) % total);
  };

  useEffect(() => {
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, []);

  const visible = Array.from({ length: VISIBLE }, (_, i) => REVIEWS[(start + i) % total]);
  const page = Math.floor(start / VISIBLE);

  return (
    <section className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-brand-mint/8 blur-[120px]" />
      <div className="section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Google Reviews</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          {/* Google rating summary */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl glass px-5 py-3">
            <GoogleLogo />
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold text-white">5.0</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
            </div>
            <span className="text-sm text-white/50">{total} Google Reviews</span>
          </div>
        </Reveal>

        {/* Cards */}
        <Reveal delay={0.1}>
          <div className="relative mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={start}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.35 }}
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {visible.map((r, i) => (
                  <div key={i} className="glass flex flex-col gap-4 rounded-2xl p-6">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <Avatar name={r.name} />
                        <div>
                          <div className="text-sm font-bold text-white">{r.name}</div>
                          <div className="text-xs text-white/45">{r.time}</div>
                        </div>
                      </div>
                      <GoogleLogo />
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.stars }).map((_, s) => (
                        <Star key={s} size={14} className="fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-white/70">&ldquo;{r.text}&rdquo;</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Nav */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-1.5">
                {Array.from({ length: pages }).map((_, d) => (
                  <button key={d} onClick={() => { setDir(d > page ? 1 : -1); setStart(d * VISIBLE); }}
                    className={`h-2 rounded-full transition-all ${d === page ? "w-7 bg-brand-mint" : "w-2 bg-white/20"}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => go(-1)} className="grid h-10 w-10 place-items-center rounded-full glass text-white/60 transition hover:text-brand-mint">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={() => go(1)} className="grid h-10 w-10 place-items-center rounded-full glass text-white/60 transition hover:text-brand-mint">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={COMPANY.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:text-brand-mint"
            >
              <GoogleLogo /> View Our Google Reviews
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}