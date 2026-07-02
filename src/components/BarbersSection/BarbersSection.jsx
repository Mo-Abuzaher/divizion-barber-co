import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { User } from "lucide-react";
import { CREAM_BG, GREEN_DARK, TAN } from "@/constants/theme";
import { BARBERS } from "@/constants/data";

export function BarbersSection({ onOpenBooking }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="barbers"
      ref={ref}
      style={{ background: CREAM_BG, padding: "120px 0" }}
    >
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
          }}
          className="flex-col md:flex-row gap-6 md:gap-0"
        >
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
              Our Team
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: GREEN_DARK,
                fontSize: "clamp(2.8rem,5vw,5rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                textTransform: "uppercase",
              }}
            >
              MASTERS OF
              <br />
              MODERN STYLE.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: `rgba(24,45,34,0.6)`,
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              maxWidth: 320,
            }}
          >
            Four elite craftsmen, one shared mission — to give you the cleanest
            cut in Pearland.
          </motion.p>
        </div>

        {/* Barbers grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {BARBERS.map((barber, idx) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.12, duration: 0.55 }}
              style={{ cursor: "pointer" }}
              onClick={onOpenBooking}
            >
              {/* Photo placeholder */}
              <div
                style={{
                  aspectRatio: "3/4",
                  background: GREEN_DARK,
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: 18,
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.01)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <User
                    size={80}
                    style={{ color: `rgba(197,169,124,0.2)` }}
                    strokeWidth={0.75}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(24,45,34,0.95) 0%, transparent 50%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: TAN,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                    }}
                  >
                    {barber.specialty}
                  </span>
                </div>
                {/* Hover overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: TAN,
                    opacity: 0,
                    transition: "opacity 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.15")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                ></div>
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: GREEN_DARK,
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 4,
                }}
              >
                {barber.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: `rgba(24,45,34,0.55)`,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {barber.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
