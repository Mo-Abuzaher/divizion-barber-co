import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { CREAM_BG, GREEN_DARK, TAN, CREAM } from "@/constants/theme";
import { BUSINESS_HOURS, CONTACT_INFO, SOCIAL_LINKS } from "@/constants/data";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{ background: CREAM_BG, padding: "120px 0" }}
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left – Info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: TAN,
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Find Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: GREEN_DARK,
                fontSize: "clamp(2.8rem,4vw,4.5rem)",
                fontWeight: 800,
                textTransform: "uppercase",
                lineHeight: 0.95,
                marginBottom: 48,
              }}
            >
              VISIT THE
              <br />
              STUDIO.
            </motion.h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              <div style={{ display: "flex", gap: 20 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    border: `1px solid rgba(197,169,124,0.5)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} style={{ color: TAN }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: TAN,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    Address
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: GREEN_DARK,
                      fontSize: "1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {CONTACT_INFO.address.line1}
                    <br />
                    {CONTACT_INFO.address.line2}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 20 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    border: `1px solid rgba(197,169,124,0.5)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} style={{ color: TAN }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: TAN,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    Contact
                  </div>
                  <a
                    href={CONTACT_INFO.phoneHref}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: GREEN_DARK,
                      fontSize: "1rem",
                      textDecoration: "none",
                    }}
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div style={{ marginTop: 48, display: "flex", gap: 16 }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 44,
                    height: 44,
                    border: `1px solid rgba(24,45,34,0.25)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: `rgba(24,45,34,0.55)`,
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = GREEN_DARK;
                    e.currentTarget.style.color = CREAM;
                    e.currentTarget.style.borderColor = GREEN_DARK;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = `rgba(24,45,34,0.55)`;
                    e.currentTarget.style.borderColor = "rgba(24,45,34,0.25)";
                  }}
                >
                  {s.icon === "Instagram" ? (
                    <Instagram size={20} />
                  ) : (
                    <Facebook size={20} />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right – Hours */}
          <div>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: TAN,
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Hours
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {BUSINESS_HOURS.map(([day, time], i) => {
                const today = new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                });
                const isToday = day === today;
                return (
                  <div
                    key={day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: isToday ? "16px 12px" : "16px 0",
                      borderBottom: `1px solid rgba(24,45,34,0.1)`,
                      background: isToday
                        ? "rgba(197,169,124,0.1)"
                        : "transparent",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        color: isToday ? GREEN_DARK : `rgba(24,45,34,0.6)`,
                        fontSize: "1rem",
                        fontWeight: isToday ? 700 : 500,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {day}{" "}
                      {isToday && (
                        <span
                          style={{
                            color: TAN,
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            marginLeft: 8,
                          }}
                        >
                          TODAY
                        </span>
                      )}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color:
                          time === "Closed"
                            ? `rgba(197,169,124,0.6)`
                            : GREEN_DARK,
                        fontSize: "0.9rem",
                        fontWeight: time === "Closed" ? 400 : 500,
                      }}
                    >
                      {time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
