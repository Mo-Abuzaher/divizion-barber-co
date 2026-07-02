import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GREEN_MID, CREAM, TAN, GREEN_DARK } from "@/constants/theme";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{ background: GREEN_MID, padding: "120px 0" }}
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left – Text */}
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
              About Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: CREAM,
                fontSize: "clamp(3rem,5vw,5rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                textTransform: "uppercase",
                marginBottom: 32,
              }}
            >
              CRAFTED FOR
              <br />
              CONFIDENCE.
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 56 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ height: 2, background: TAN, marginBottom: 32 }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                color: `rgba(240,229,208,0.7)`,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                marginBottom: 20,
              }}
            >
              Divizion Barber Co. is Pearland's premier destination for
              precision cuts, clean fades, and classic grooming. Located at 1930
              Pearland Parkway, our shop was built on one belief: every man
              deserves to walk out looking and feeling his best.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                color: `rgba(240,229,208,0.7)`,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                marginBottom: 40,
              }}
            >
              With four master barbers and a relaxed, welcoming atmosphere,
              we've earned over 420 five-star reviews from the Pearland
              community. Whether it's your first visit or your hundredth, we
              treat every chair session like a work of art.
            </motion.p>

            {/* Stats */}
            <div style={{ display: "flex", gap: 40 }}>
              {[
                ["5.0★", "Google Rating"],
                ["420+", "Reviews"],
                ["4", "Barbers"],
              ].map(([v, l], i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: TAN,
                      fontSize: "2rem",
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {v}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: `rgba(240,229,208,0.5)`,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      marginTop: 4,
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Photo & EST badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                bottom: 20,
                left: 20,
                border: `1px solid rgba(197,169,124,0.2)`,
              }}
            />
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
              }}
            >
              <img
                src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/412740/biz_photo/7e7a991c54ed48dabcb64afb5f5e3f-divizion-barber-co-biz-photo-b18fb9705ed240e9a4c0bab66fa15e-booksy.jpeg?size=640x427"
                alt="Divizion Barber Co"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "3rem",
                  background: GREEN_DARK,
                }}
              />
            </div>
            {/* EST badge */}
            <div
              style={{
                position: "absolute",
                bottom: -24,
                left: -24,
                background: TAN,
                padding: "28px 36px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  color: GREEN_DARK,
                  fontSize: "1.3rem",
                  lineHeight: 1,
                }}
              >
                Established
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: GREEN_DARK,
                  fontSize: "3rem",
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                2024
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
