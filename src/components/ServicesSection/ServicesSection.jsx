import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Clock, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { GREEN_DARK, CREAM, TAN } from "@/constants/theme";
import { INTERIOR_IMAGE } from "@/constants/assets";
import { fetchServices } from "@/api/booking";

export function ServicesSection({ onOpenBooking }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });

  return (
    <section
      id="services"
      ref={ref}
      style={{ background: GREEN_DARK, padding: "120px 0" }}
    >
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: 80,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p
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
              Our Services
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: CREAM,
                fontSize: "clamp(2.8rem,5vw,5rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}
            >
              CRAFTED FOR
              <br />
              EVERY NEED.
            </h2>
          </motion.div>
        </div>

        {/* Top featured + list layout */}
        <div
          className="grid md:grid-cols-2 gap-0 mb-0"
          style={{ border: `1px solid rgba(197,169,124,0.15)` }}
        >
          {/* Featured image */}
          <div
            style={{ position: "relative", overflow: "hidden", minHeight: 400 }}
          >
            <img
              src={INTERIOR_IMAGE}
              alt="Divizion Interior"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(24,45,34,0.9) 0%, transparent 50%)",
              }}
            />
            <div style={{ position: "absolute", bottom: 36, left: 36 }}>
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  color: TAN,
                  fontSize: "1.8rem",
                  marginBottom: 6,
                }}
              >
                Signature Service
              </p>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: CREAM,
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                CLASSIC SHAVE
              </h3>
              <button
                onClick={onOpenBooking}
                style={{
                  marginTop: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: TAN,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                BOOK NOW <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Services list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderLeft: `1px solid rgba(197,169,124,0.15)`,
            }}
          >
            {services.map((svc, idx) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.07, duration: 0.5 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "22px 32px",
                  borderBottom: `1px solid rgba(197,169,124,0.1)`,
                  cursor: "pointer",
                  transition: "background 0.2s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onHoverStart={(e) => {}}
                whileHover={{ backgroundColor: "rgba(197,169,124,0.07)" }}
                onClick={onOpenBooking}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: CREAM,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {svc.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: `rgba(240,229,208,0.45)`,
                      fontSize: "0.8rem",
                      marginTop: 3,
                    }}
                  >
                    <Clock
                      size={11}
                      style={{
                        display: "inline",
                        marginRight: 5,
                        verticalAlign: "middle",
                      }}
                    />
                    {svc.duration_minutes} mins
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: TAN,
                      fontSize: "1.3rem",
                      fontWeight: 700,
                    }}
                  >
                    ${parseFloat(svc.base_price).toFixed(0)}
                  </span>
                  <ArrowRight
                    size={16}
                    style={{ color: `rgba(197,169,124,0.4)` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 56, textAlign: "center" }}>
          <button
            onClick={onOpenBooking}
            style={{
              padding: "16px 56px",
              border: `1px solid ${TAN}`,
              color: TAN,
              background: "transparent",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
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
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
}
