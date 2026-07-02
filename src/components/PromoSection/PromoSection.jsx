import React from "react";
import { ArrowRight } from "lucide-react";
import { GREEN_DARK, CREAM, TAN } from "@/constants/theme";
import { HERO_IMAGE } from "@/constants/assets";
import { BOOKSY_URL } from "@/constants/data";

export function PromoSection({ onOpenBooking }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", height: 500 }}>
      <img
        src={HERO_IMAGE}
        alt="Promo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(24,45,34,0.82)",
        }}
      />
      <div
        className="max-w-[1400px] mx-auto px-8 h-full"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: TAN,
              fontSize: "2rem",
              marginBottom: 10,
            }}
          >
            Book via Booksy
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: CREAM,
              fontSize: "clamp(2.5rem,5vw,4.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 0.95,
              marginBottom: 16,
            }}
          >
            BACKUP BOOKING
            <br />
            ALWAYS AVAILABLE.
          </h2>
          <p
            style={{
              color: `rgba(240,229,208,0.65)`,
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              maxWidth: 400,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            If our website booking is down, you can always reserve your seat
            directly on Booksy — our official backup platform. Never miss your
            appointment.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "15px 36px",
                background: TAN,
                color: GREEN_DARK,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = CREAM;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = TAN;
              }}
            >
              BOOK ON BOOKSY <ArrowRight size={16} />
            </a>
            <button
              onClick={onOpenBooking}
              style={{
                padding: "15px 28px",
                border: `1px solid rgba(197,169,124,0.5)`,
                color: CREAM,
                background: "transparent",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = TAN;
                e.currentTarget.style.color = TAN;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(197,169,124,0.5)";
                e.currentTarget.style.color = CREAM;
              }}
            >
              SITE BOOKING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
