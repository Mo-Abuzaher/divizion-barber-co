import React from "react";
import { Instagram, Facebook } from "lucide-react";
import { GREEN_DARK, CREAM, TAN } from "@/constants/theme";
import { SOCIAL_LINKS, BOOKSY_URL } from "@/constants/data";
import { LOGO } from "@/constants/assets";

export function Footer({ onOpenBooking }) {
  return (
    <footer
      style={{
        background: GREEN_DARK,
        borderTop: `1px solid rgba(197,169,124,0.12)`,
        padding: "64px 0 40px",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <img
                src={LOGO}
                alt="Logo"
                style={{ height: 36, filter: "invert(1)", opacity: 0.85 }}
              />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: CREAM,
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                }}
              >
                DIVIZION
              </span>
            </div>
            <p
              style={{
                color: `rgba(240,229,208,0.5)`,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.8,
                maxWidth: 260,
                marginBottom: 24,
              }}
            >
              Premium barbering in Pearland, TX. Precision cuts. Classic shaves.
              Elite experience.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {SOCIAL_LINKS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 38,
                    height: 38,
                    border: `1px solid rgba(197,169,124,0.25)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: `rgba(197,169,124,0.6)`,
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = TAN;
                    e.currentTarget.style.color = TAN;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(197,169,124,0.25)";
                    e.currentTarget.style.color = "rgba(197,169,124,0.6)";
                  }}
                >
                  {s.icon === "Instagram" ? (
                    <Instagram size={18} />
                  ) : (
                    <Facebook size={18} />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: TAN,
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Quick Links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["services", "barbers", "about", "contact"].map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: `rgba(240,229,208,0.55)`,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = TAN)}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(240,229,208,0.55)")
                  }
                >
                  {s}
                </a>
              ))}
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: TAN,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = CREAM)}
                onMouseLeave={(e) => (e.target.style.color = TAN)}
              >
                Booksy →
              </a>
            </div>
          </div>

          {/* Book */}
          <div>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: TAN,
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Book Now
            </p>
            <p
              style={{
                color: `rgba(240,229,208,0.5)`,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              1930 Pearland Pkwy Suite 124
              <br />
              Pearland, TX 77581
            </p>
            <p
              style={{
                color: `rgba(240,229,208,0.5)`,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                marginBottom: 24,
              }}
            >
              Mon–Fri: 9AM–7PM | Sat: 9AM–5PM
            </p>
            <button
              onClick={onOpenBooking}
              style={{
                padding: "12px 28px",
                background: TAN,
                color: GREEN_DARK,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = CREAM)}
              onMouseLeave={(e) => (e.currentTarget.style.background = TAN)}
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: `1px solid rgba(197,169,124,0.1)`,
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              color: `rgba(240,229,208,0.3)`,
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.08em",
            }}
          >
            © {new Date().getFullYear()} Divizion Barber Co. All Rights
            Reserved.
          </p>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: TAN,
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            PEARLAND, TX • EST. 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
