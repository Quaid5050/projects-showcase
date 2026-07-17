"use client";
import { useEffect, useState, useRef } from "react";
import { Star, Quote } from "lucide-react";

type Review = {
  name: string;
  meta: string;
  text: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: "Jennifer Agmon",
    meta: "Local Guide · 48 reviews",
    text: "Service was amazing from the initial estimate with Kaushik where he took the time to get me exactly what I needed within my budget and financing assistance, to the professional installation by Sukhdeep and Gungan. They worked clean and were very professional.",
    rating: 5,
  },
  {
    name: "Jasmeet Singh",
    meta: "6 reviews · 4 photos",
    text: "They came to install new heat pump, dryer and washer today. Gungan and Avtar did an amazing job, they did a clean job. I was really impressed by how they handled everything and told me what they were doing at each and every step.",
    rating: 5,
  },
  {
    name: "Emmanuel Dominguez",
    meta: "7 reviews",
    text: "I had a great experience with JP Home Comfort. Avtar and another technician came to fix my furnace and were both professional, knowledgeable, and efficient. They quickly diagnosed the issue and explained the problem clearly.",
    rating: 5,
  },
  {
    name: "Sukhrehmat Singh Brar",
    meta: "1 review · 1 photo",
    text: "They installed the tankless water heater at my place. First I was very reluctant about installing it, but then the energy advisor explained the benefits. Now I'm really satisfied with their service.",
    rating: 5,
  },
  {
    name: "Aaron Mosher",
    meta: "Local Guide · 25 reviews",
    text: "JP Home Comfort was a great company to work with. It was seamless and good value. Raj, my advisor, gave me great advice to make an informed decision. The installers were courteous and professional, and left the space cleaner than when they arrived.",
    rating: 5,
  },
  {
    name: "Gungan Singh",
    meta: "Local Guide · 17 reviews",
    text: "I recently had a new heat pump installed at my home, and I couldn't be happier with how smoothly everything went. From start to finish, the entire process was handled with professionalism and care.",
    rating: 5,
  },
  {
    name: "Harjot Singh",
    meta: "3 reviews · 3 photos",
    text: "I got my tankless installed today, Avtar installed it himself from JP Home Comfort. The installation is so clean. Seeing this installation I will definitely recommend my friends.",
    rating: 5,
  },
  {
    name: "Supriya S",
    meta: "2 reviews · 1 photo",
    text: "The team was prompt, professional, and helped me choose the perfect system for my home. Installation was quick, clean, and done with great attention to detail.",
    rating: 5,
  },
  {
    name: "Eda Karabel",
    meta: "3 reviews",
    text: "I recently had Himanshu come by to assess my furnace, AC, and water heater. From the moment he arrived, he was professional and attentive. The service was smooth and stress-free, and I'm very satisfied with the overall experience.",
    rating: 5,
  },
  {
    name: "Gurlal Pannu",
    meta: "9 reviews · 5 photos",
    text: "Got furnace installed by Avtar and Jasmeet today. They did a great job and left the space clean and tidy. Appreciate the quick response once our furnace went out of service!",
    rating: 5,
  },
  {
    name: "Harsh Murti",
    meta: "5 reviews · 2 photos",
    text: "Absolutely 5 star service from this company from initial conversation when I was inquiring all the way until final installation. The installation team is very meticulous and well experienced.",
    rating: 5,
  },
  {
    name: "Harmeet Sarkaria",
    meta: "2 reviews · 1 photo",
    text: "JP Home Comfort installed my new furnace and the whole process was smooth and professional. The team explained everything clearly and the system works perfectly. My home feels warmer and more comfortable than ever!",
    rating: 5,
  },
  {
    name: "Ravneet Kaur",
    meta: "7 reviews · 1 photo",
    text: "Great service from start to finish. The team was professional, on time, and explained everything clearly. Work was done efficiently and to a high standard. Reliable and trustworthy, highly recommend!",
    rating: 5,
  },
  {
    name: "Meb Akuji",
    meta: "3 reviews",
    text: "I was worried about my increased gas and hydro bills. Parth came and explained everything including rebates and savings. They have really competitive pricing. Thanks to them I am saving huge amounts with their new HVAC system.",
    rating: 5,
  },
  {
    name: "Ramesh K. Prasai",
    meta: "4 reviews",
    text: "I found the workmanship of JP Home Comfort absolutely professional. The crew under the leadership of Mr. Avtar were phenomenal in their ability to install the heat pumps at my home in Scarborough and were also very customer friendly and polite.",
    rating: 5,
  },
  {
    name: "Adam Wright",
    meta: "3 reviews · 5 photos",
    text: "Had the Midea heat pump system installed by JP Home Comfort today. The experience from the initial home visit to the installation has been nothing less than exceptional. I would absolutely recommend these guys.",
    rating: 5,
  },
  {
    name: "Pratik Patil",
    meta: "Local Guide · 24 reviews",
    text: "JP Home Comfort is one stop solution for all of your home maintenance needs. I have taken home maintenance services, installation of heat pump, RO and water softener. They are very well versed with all the installation and services.",
    rating: 5,
  },
  {
    name: "Dipjon Gurung",
    meta: "4 reviews · 1 photo",
    text: "JP Home Comfort did fantastic installing a ductless unit for my garage, very clean and perfect job and the team was punctual too.",
    rating: 5,
  },
  {
    name: "NSM T",
    meta: "1 review · 1 photo",
    text: "The furnace installation was completed excellently. The technicians were highly knowledgeable and answered all of my questions.",
    rating: 5,
  },
  {
    name: "Sahibsingh Sarkaria",
    meta: "Local Guide · 16 reviews",
    text: "We switched over to a heat pump with JP Home Comfort. Best decision ever! It keeps our place warm in winter and cool in summer. The crew made it easy start to finish. Highly recommend Balkar and his team, they're so professional.",
    rating: 5,
  },
  {
    name: "Nini N",
    meta: "Local Guide · 103 reviews",
    text: "Fantastic in every way. Highly recommend them to anyone I know in need of HVAC service. Great work ethics. Thank you to the guys.",
    rating: 5,
  },
  {
    name: "Channi Goraya",
    meta: "3 reviews",
    text: "I had an excellent experience with JP Home Comfort. From the initial consultation to the final installation, everything was handled professionally and on time. The team explained my options clearly and installed the new furnace flawlessly.",
    rating: 5,
  },
  {
    name: "Parth Malhan",
    meta: "4 reviews · 1 photo",
    text: "Great service! Fast, friendly, and honest. JP Home Comfort fixed my AC without any hassle. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sandeep Parihar",
    meta: "3 reviews · 2 photos",
    text: "Great professional service by the Jag N Pal team. They replaced my old AC unit and provided proper updates on how the new unit operates and helped with all the queries.",
    rating: 5,
  },
  {
    name: "Nidhima Sharma",
    meta: "8 reviews · 1 photo",
    text: "Had an issue with my furnace, JP Home Comfort came by and sorted it out quick. The tech explained everything in plain English and got me back up and running. Really solid service.",
    rating: 5,
  },
  {
    name: "Dexter Jao",
    meta: "Local Guide · 24 reviews",
    text: "Installed a tankless hot water tank and removed my 15 year old hot water tank. The technicians and installers were great! Professional, clean and meticulous. Thank you Jag N Pal team for a great job!",
    rating: 5,
  },
  {
    name: "Mustafa Ali",
    meta: "13 reviews · 5 photos",
    text: "Avtar Sandhu is the best technician. We were worried as our furnace stopped in the middle of dead winter but Avtar quickly diagnosed and fixed it, and above all ensured that it works perfectly.",
    rating: 5,
  },
  {
    name: "Harmanjot Chahal",
    meta: "6 reviews",
    text: "Energy advisor explained everything really well, how I can save money on my gas bill and get qualified for the rebates, and I got qualified for that as well.",
    rating: 5,
  },
  {
    name: "Nasser Nomani",
    meta: "4 reviews · 1 photo",
    text: "Very professional and knowledgeable team installed a Bosch heat pump for me, very clean job. The techs explained everything to me very clearly.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // responsive cards-per-view
  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 768) setPerView(1);
      else if (window.innerWidth < 1280) setPerView(2);
      else setPerView(3);
    };
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxIndex = Math.max(0, reviews.length - perView);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  // clamp index when perView changes
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goTo = (i: number) => {
    if (i < 0) setIndex(maxIndex);
    else if (i > maxIndex) setIndex(0);
    else setIndex(i);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) goTo(index - 1);
    else if (diff < -50) goTo(index + 1);
    touchStartX.current = null;
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <div className="section-label justify-center">Testimonials</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy mb-4">
            What Our <span className="text-brand-red">Customers</span> Say
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real reviews from verified Google customers across Ontario.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${index * (100 / perView)}%)`,
              }}
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / perView}%` }}
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <Quote className="w-8 h-8 text-brand-cyan/20 mb-3" />
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: review.rating }).map((_, s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                      {review.text}
                    </p>
                    <div className="pt-4 border-t border-slate-100">
                      <p className="font-heading font-bold text-brand-navy text-sm">
                        {review.name}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {review.meta}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            aria-label="Previous reviews"
            onClick={() => goTo(index - 1)}
            className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white shadow-md border border-slate-100 text-brand-navy hover:bg-brand-cyan hover:text-white transition-colors z-10"
          >
            ‹
          </button>
          <button
            aria-label="Next reviews"
            onClick={() => goTo(index + 1)}
            className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white shadow-md border border-slate-100 text-brand-navy hover:bg-brand-cyan hover:text-white transition-colors z-10"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-brand-red"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}