import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Menu } from "lucide-react";
import { GREEN_DARK, CREAM, TAN } from "@/constants/theme";
import { ABOUT_IMAGE } from "@/constants/assets";

export function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(24,45,34,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid rgba(197,169,124,0.15)` : "none",
        transition: "all 0.4s ease",
        padding: scrolled ? "14px 0" : "22px 0",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img
            src={ABOUT_IMAGE}
            alt="Divizion"
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover border border-[rgba(197,169,124,0.35)] shrink-0"
          />
          <span
            className="truncate"
            style={{
              color: CREAM,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            DIVIZION
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {["services", "barbers", "about", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              style={{
                color: `rgba(240,229,208,0.75)`,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = TAN)}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(240,229,208,0.75)")
              }
            >
              {s}
            </a>
          ))}
          <button
            onClick={onOpenBooking}
            style={{
              padding: "10px 28px",
              border: `1px solid ${TAN}`,
              color: TAN,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: "transparent",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = TAN;
              e.currentTarget.style.color = GREEN_DARK;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = TAN;
            }}
          >
            BOOK NOW
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          style={{
            color: CREAM,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: GREEN_DARK,
              borderTop: `1px solid rgba(197,169,124,0.2)`,
              overflow: "hidden",
            }}
          >
            <div className="flex flex-col px-8 py-6 gap-6">
              {["services", "barbers", "about", "contact"].map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: CREAM,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {s}
                </a>
              ))}
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileOpen(false);
                }}
                style={{
                  padding: "14px",
                  background: TAN,
                  color: GREEN_DARK,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.2em",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
