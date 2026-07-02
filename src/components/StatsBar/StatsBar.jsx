import React from "react";
import { TAN, GREEN_DARK } from "@/constants/theme";
import { STATS } from "@/constants/data";

export function StatsBar() {
  return (
    <div style={{ background: TAN, padding: "22px 0" }}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                borderRight: i < 3 ? `1px solid rgba(24,45,34,0.25)` : "none",
              }}
              className="last:border-none"
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "1.9rem",
                  fontWeight: 800,
                  color: GREEN_DARK,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: `rgba(24,45,34,0.65)`,
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
