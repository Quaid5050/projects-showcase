"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    text: "Haven installed my Michelin Pilot Sport 5s on my M3 in under an hour. Perfect balance, zero vibration at highway speed. The team clearly knows performance vehicles inside out.",
    name: "Marcus R.",
    car: "2023 BMW M3 Competition",
    init: "MR",
  },
  {
    text: "Best ceramic tint job I have ever experienced. Complete darkness outside, crystal clear from the inside. My Porsche has never looked more sinister. Worth every penny.",
    name: "Aisha K.",
    car: "2022 Porsche 911 GT3",
    init: "AK",
  },
  {
    text: "Brought in my R8 for Pirellis and custom forged wheels. The fitment is absolutely flawless.",
    name: "Devon T.",
    car: "2021 Audi R8 V10 Plus",
    init: "DT",
  },
  {
    text: "Seasonal changeover done in 45 minutes. Total professionals who genuinely care.",
    name: "Lena M.",
    car: "2020 Mercedes AMG C63",
    init: "LM",
  },
  {
    text: "Had a blowout, got me in same-day and rolling on a matched Bridgestone before dinner.",
    name: "Jason W.",
    car: "2019 Corvette C7 Z06",
    init: "JW",
  },
];

function Stars() {
  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        marginBottom: "18px",
      }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14">
          <polygon
            points="7,1 9,5 13,5.5 10,8.5 10.5,13 7,11 3.5,13 4,8.5 1,5.5 5,5"
            fill="#e8001d"
          />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCur((v) => (v + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const visible = [
    reviews[cur],
    reviews[(cur + 1) % reviews.length],
    reviews[(cur + 2) % reviews.length],
  ];

  return (
    <section
      id="reviews"
      style={{
        background: "#0d0d0d",
        padding: "100px 0",
      }}
    >
      <div className="reviews-wrap">
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <span className="section-tag">
            Client Reviews
          </span>

          <h2 className="section-title">
            WHAT DRIVERS SAY
          </h2>
        </div>

        <div className="reviews-grid">
          {visible.map((t, i) => (
            <div
              key={`${cur}-${i}`}
              className="glass-card review-card"
            >
              <Stars />

              <p className="review-text">
                "{t.text}"
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                }}
              >
                <div className="review-avatar">
                  {t.init}
                </div>

                <div>
                  <div className="review-name">
                    {t.name}
                  </div>

                  <div className="review-car">
                    {t.car}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className={i === cur ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>

      <style>{`
        .reviews-wrap{
          max-width:1400px;
          margin:auto;
          padding:0 60px;
        }

        .reviews-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px;
        }

        .review-card{
          padding:32px;
        }

        .review-text{
          color:rgba(240,240,240,0.95);
          line-height:1.9;
          margin-bottom:26px;
          font-size:14px;
          font-style:italic;
        }

        .review-avatar{
          width:44px;
          height:44px;
          border-radius:50%;
          border:2px solid #e8001d;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#e8001d;
          flex-shrink:0;
        }

        .review-name{
          color:white;
          font-size:12px;
        }

        .review-car{
          color:rgba(232,0,29,.8);
          font-size:11px;
        }

        .dots{
          display:flex;
          justify-content:center;
          gap:8px;
          margin-top:34px;
        }

        .dot{
          width:8px;
          height:8px;
          border:none;
          border-radius:50%;
          background:rgba(255,255,255,.2);
          cursor:pointer;
        }

        .dot.active{
          width:24px;
          border-radius:6px;
          background:#e8001d;
        }

        /* Tablet */
        @media(max-width:900px){

          #reviews{
            padding:80px 0 !important;
          }

          .reviews-wrap{
            padding:0 24px;
          }

          .reviews-grid{
            grid-template-columns:1fr 1fr;
          }

          .reviews-grid .review-card:last-child{
            display:none;
          }
        }

        /* Mobile */
        @media(max-width:640px){

          .reviews-grid{
            grid-template-columns:1fr;
          }

          .reviews-grid .review-card:nth-child(2),
          .reviews-grid .review-card:nth-child(3){
            display:none;
          }

          .review-card{
            padding:24px;
          }

          .review-text{
            font-size:13px;
            line-height:1.8;
          }

          .section-title{
            font-size:34px !important;
          }
        }
      `}</style>
    </section>
  );
}