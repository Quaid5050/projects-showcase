import { useEffect } from "react";
import { GradientBlobs } from "@/components/GradientBlobs";
import laser from "@/assets/service-laser.jpg";
import teeth from "@/assets/organic-teeth-whitening.jpg";
import cryo from "@/assets/service-cryo.jpg";

const SCRIPT_ID = "ghl-booking-script";
const SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

const Booking = () => {
  // Load the GoHighLevel embed script once, safely
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // leave the script in the DOM — removing it causes issues on re-mount
    };
  }, []);

  return (
    <>
      <title>Book an Appointment — Hands That Heal</title>
      <meta
        name="description"
        content="Reserve your private consultation at Hands That Heal. Book online in seconds."
      />

      {/* ── Hero banner ── */}
      <div className="relative h-[220px] sm:h-[300px] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3">
          <img src={laser} alt="" className="w-full h-full object-cover object-center" />
          <img src={teeth} alt="" className="w-full h-full object-cover object-center" />
          <img src={cryo}  alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-deep-gradient opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary-glow mb-3">Your Visit</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              Reserve your{" "}
              <span className="italic text-primary-glow">private moment.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* ── Booking section ── */}
      <section className="relative py-12 overflow-hidden bg-soft-gradient min-h-screen">
        <GradientBlobs />
        <div className="container-luxe relative max-w-5xl">

          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Online Booking</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              Book an Appointment
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Choose your service, pick a time that works for you, and confirm your booking in seconds.
            </p>
          </div>

          {/* GoHighLevel iframe */}
          <div className="bg-card rounded-3xl shadow-elegant overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/booking/hands-that-heal-zqhhynqmse/sc/69d5bf048fcfd7251b2456a3?heightMode=fixed&showHeader=true"
              id="69d5bf048fcfd7251b2456a3_1776443677806"
              title="Book an Appointment"
              scrolling="no"
              style={{
                width: "100%",
                minHeight: "800px",
                border: "none",
                overflow: "hidden",
                display: "block",
              }}
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default Booking;
