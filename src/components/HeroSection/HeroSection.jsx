import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Instagram,
  Facebook,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GREEN_DARK, CREAM, TAN } from "@/constants/theme";
import { HERO_SLIDES, BOOKSY_URL } from "@/constants/data";
import { HERO_IMAGE } from "@/constants/assets";

export function HeroSection({ onOpenBooking }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const slide = HERO_SLIDES[slideIdx];

  useEffect(() => {
    const t = setTimeout(
      () => setSlideIdx((i) => (i + 1) % HERO_SLIDES.length),
      5500,
    );
    return () => clearTimeout(t);
  }, [slideIdx]);

  return (
    <section
      className="hero-section"
      style={{
        width: "100%",
        display: "flex",
        background: GREEN_DARK,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* LEFT PANEL */}
      <div
        style={{
          width: "45%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "24px 0 32px 80px",
          position: "relative",
          zIndex: 2,
          overflowY: "auto",
        }}
        className="hidden lg:flex"
      >
        {/* Vertical Social */}
        <div
          style={{
            position: "absolute",
            left: 24,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              color: `rgba(197,169,124,0.6)`,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              writingMode: "vertical-rl",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Follow
          </span>
          <a
            href="https://www.instagram.com/divizionbarberco"
            target="_blank"
            rel="noreferrer"
            style={{ color: `rgba(197,169,124,0.6)`, transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = TAN)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = `rgba(197,169,124,0.6)`)
            }
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://www.facebook.com/divizionbarberco"
            target="_blank"
            rel="noreferrer"
            style={{ color: `rgba(197,169,124,0.6)`, transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = TAN)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = `rgba(197,169,124,0.6)`)
            }
          >
            <Facebook size={16} />
          </a>
          <div
            style={{
              width: 1,
              height: 48,
              background: `rgba(197,169,124,0.3)`,
              marginTop: 4,
            }}
          />
        </div>

        {/* Content */}
        <div style={{ maxWidth: 520 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIdx}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {/* Script tagline */}
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  color: TAN,
                  fontSize: "2rem",
                  marginBottom: 16,
                  lineHeight: 1,
                }}
              >
                {slide.tag}
              </p>

              {/* Main headline */}
              <h1
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: CREAM,
                  fontSize: "clamp(3rem, 5.5vw, 5.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.0,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  marginBottom: 28,
                  whiteSpace: "pre-line",
                }}
              >
                {slide.heading}
              </h1>

              {/* Divider */}
              <div
                style={{
                  width: 56,
                  height: 2,
                  background: TAN,
                  marginBottom: 24,
                }}
              />

              {/* Sub */}
              <p
                style={{
                  color: `rgba(240,229,208,0.65)`,
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  marginBottom: 44,
                  maxWidth: 380,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {slide.sub}
              </p>

              {/* CTA Buttons */}
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button
                  onClick={onOpenBooking}
                  style={{
                    padding: "15px 36px",
                    background: TAN,
                    color: GREEN_DARK,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
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
                  BOOK YOUR SEAT <ArrowRight size={16} />
                </button>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "15px 28px",
                    border: `1px solid rgba(197,169,124,0.4)`,
                    color: `rgba(240,229,208,0.75)`,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
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
                    e.currentTarget.style.borderColor = TAN;
                    e.currentTarget.style.color = TAN;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(197,169,124,0.4)";
                    e.currentTarget.style.color = "rgba(240,229,208,0.75)";
                  }}
                >
                  BOOKSY <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide counter */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginTop: 64,
            }}
          >
            <button
              onClick={() =>
                setSlideIdx(
                  (i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
                )
              }
              style={{
                background: "none",
                border: `1px solid rgba(197,169,124,0.3)`,
                color: TAN,
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = TAN;
                e.currentTarget.style.color = GREEN_DARK;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.color = TAN;
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: CREAM,
                fontSize: "1.1rem",
                letterSpacing: "0.2em",
              }}
            >
              0{slideIdx + 1}{" "}
              <span style={{ color: `rgba(197,169,124,0.4)` }}>
                — 0{HERO_SLIDES.length}
              </span>
            </span>
            <button
              onClick={() => setSlideIdx((i) => (i + 1) % HERO_SLIDES.length)}
              style={{
                background: "none",
                border: `1px solid rgba(197,169,124,0.3)`,
                color: TAN,
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = TAN;
                e.currentTarget.style.color = GREEN_DARK;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.color = TAN;
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL – Photo */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #182D22 0%, rgba(24,45,34,0.25) 30%, transparent 70%)",
            zIndex: 2,
          }}
        />
        <img
          src={HERO_IMAGE}
          alt="Divizion Barbers"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Circular stamp badge */}
        <div
          className="hero-badge"
          style={{
            position: "absolute",
            zIndex: 5,
          }}
        >
          <svg
            viewBox="0 0 110 110"
            style={{
              width: "100%",
              height: "100%",
              animation: "rotateBadge 20s linear infinite",
            }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 55,55 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
              />
            </defs>
            <circle
              cx="55"
              cy="55"
              r="50"
              fill="none"
              stroke={TAN}
              strokeWidth="1"
              opacity="0.6"
            />
            <circle
              cx="55"
              cy="55"
              r="40"
              fill="none"
              stroke={TAN}
              strokeWidth="0.5"
              opacity="0.4"
            />
            <text
              fontFamily="'Barlow Condensed', sans-serif"
              fontSize="10"
              fontWeight="700"
              letterSpacing="3"
              fill={TAN}
              textAnchor="middle"
            >
              <textPath href="#circlePath">
                PREMIUM BARBER SHOP • PEARLAND TX •&nbsp;&nbsp;
              </textPath>
            </text>
            <text
              x="55"
              y="52"
              textAnchor="middle"
              fontFamily="'Barlow Condensed', sans-serif"
              fontSize="11"
              fontWeight="800"
              fill={TAN}
              letterSpacing="2"
            >
              EST.
            </text>
            <text
              x="55"
              y="66"
              textAnchor="middle"
              fontFamily="'Barlow Condensed', sans-serif"
              fontSize="16"
              fontWeight="800"
              fill={TAN}
            >
              2024
            </text>
          </svg>
        </div>

        {/* Mobile / tablet hero text overlay */}
        <div
          className="lg:hidden"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "16px 20px 32px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(to top, rgba(24,45,34,0.98) 0%, rgba(24,45,34,0.85) 60%, transparent 100%)",
              position: "absolute",
              inset: 0,
            }}
          />
          <div style={{ position: "relative", zIndex: 2 }}>
            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: TAN,
                fontSize: "clamp(1.4rem, 5vw, 1.8rem)",
                marginBottom: 8,
              }}
            >
              {slide.tag}
            </p>
            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: CREAM,
                fontSize: "clamp(2rem, 8vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {slide.heading}
            </h1>
            <p
              style={{
                color: "rgba(240,229,208,0.65)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginBottom: 20,
                maxWidth: 420,
              }}
            >
              {slide.sub}
            </p>
            <button
              onClick={onOpenBooking}
              style={{
                padding: "13px 30px",
                background: TAN,
                color: GREEN_DARK,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
              }}
            >
              BOOK YOUR SEAT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
