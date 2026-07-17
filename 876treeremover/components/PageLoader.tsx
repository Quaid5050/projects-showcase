"use client";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const finish = () => {
      setLoading(false);
      setTimeout(() => setHide(true), 500);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      const fallback = setTimeout(finish, 4000);
      return () => {
        window.removeEventListener("load", finish);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (hide) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(ellipse at center, #0D2B17 0%, #050505 100%)",
        opacity: loading ? 1 : 0,
        visibility: loading ? "visible" : "hidden",
        transition: "opacity 0.5s ease, visibility 0.5s ease",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <img
          src="/logo1.png"
          alt="876 Tree Removal"
          style={{ width: 110, height: "auto", animation: "loaderPulse 1.4s ease-in-out infinite" }}
        />
        <div style={{ width: 40, height: 40, position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "3px solid rgba(45,153,85,0.2)",
              borderTopColor: "#2D9955",
              borderRadius: "50%",
              animation: "loaderSpin 0.9s linear infinite",
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes loaderPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.94); }
        }
        @keyframes loaderSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
