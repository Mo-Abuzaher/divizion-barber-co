import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, CheckCircle2, ArrowRight, User, Clock } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GREEN_DARK, CREAM, TAN } from "@/constants/theme";
import { LOGO } from "@/constants/assets";
import {
  fetchServices,
  fetchBarbers,
  createAppointment,
} from "@/api/booking";

export function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    service_id: "",
    barber_id: "",
    date: "",
    time: "",
    customer_name: "",
    customer_email: "",
  });

  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });
  const { data: barbers = [] } = useQuery({
    queryKey: ["barbers"],
    queryFn: fetchBarbers,
  });

  const mutation = useMutation({
    mutationFn: (data) =>
      createAppointment({
        ...data,
        appointment_time: `${data.date}T${data.time}:00`,
      }),
    onSuccess: () => setStep(4),
  });

  const sel = (service) => {
    setBooking((b) => ({ ...b, service_id: service.id }));
    setStep(2);
  };
  const selBarber = (barber) => {
    setBooking((b) => ({ ...b, barber_id: barber.id }));
    setStep(3);
  };

  if (!isOpen) return null;

  const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    background: "rgba(197,169,124,0.06)",
    border: `1px solid rgba(197,169,124,0.2)`,
    color: CREAM,
    outline: "none",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,20,14,0.95)",
          backdropFilter: "blur(8px)",
        }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        style={{
          position: "relative",
          background: GREEN_DARK,
          border: `1px solid rgba(197,169,124,0.2)`,
          width: "100%",
          maxWidth: 640,
          maxHeight: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 32px",
            borderBottom: `1px solid rgba(197,169,124,0.15)`,
          }}
        >
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <img
              src={LOGO}
              alt="D"
              style={{ height: 28, filter: "invert(1)" }}
            />
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: CREAM,
                fontSize: "1.1rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
              }}
            >
              BOOKING
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {step < 4 && (
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: `rgba(197,169,124,0.6)`,
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                }}
              >
                STEP {step} / 3
              </span>
            )}
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: `rgba(240,229,208,0.5)`,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = TAN)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = `rgba(240,229,208,0.5)`)
              }
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        {step < 4 && (
          <div style={{ height: 2, background: "rgba(197,169,124,0.1)" }}>
            <motion.div
              animate={{ width: `${(step / 3) * 100}%` }}
              style={{ height: "100%", background: TAN }}
              transition={{ duration: 0.4 }}
            />
          </div>
        )}

        {/* Body */}
        <div style={{ overflowY: "auto", padding: "32px", flex: 1 }}>
          <AnimatePresence mode="wait">
            {/* Step 1 – Service */}
            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
              >
                <p
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    color: TAN,
                    fontSize: "1.5rem",
                    marginBottom: 4,
                  }}
                >
                  Choose your service
                </p>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: CREAM,
                    fontSize: "2rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    marginBottom: 24,
                  }}
                >
                  SELECT A SERVICE
                </h3>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  {services.map((svc) => (
                    <button
                      key={svc.id}
                      onClick={() => sel(svc)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "18px 20px",
                        border: `1px solid rgba(197,169,124,0.12)`,
                        background: "transparent",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        textAlign: "left",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = TAN;
                        e.currentTarget.style.background =
                          "rgba(197,169,124,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(197,169,124,0.12)";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            color: CREAM,
                            fontSize: "1rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {svc.name}
                        </div>
                        <div
                          style={{
                            color: `rgba(240,229,208,0.4)`,
                            fontSize: "0.78rem",
                            marginTop: 3,
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {svc.duration_minutes} mins
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            color: TAN,
                            fontSize: "1.2rem",
                            fontWeight: 700,
                          }}
                        >
                          ${parseFloat(svc.base_price).toFixed(0)}
                        </span>
                        <ArrowRight
                          size={14}
                          style={{ color: `rgba(197,169,124,0.5)` }}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2 – Barber */}
            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
              >
                <p
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    color: TAN,
                    fontSize: "1.5rem",
                    marginBottom: 4,
                  }}
                >
                  Your cut, your barber
                </p>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: CREAM,
                    fontSize: "2rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    marginBottom: 24,
                  }}
                >
                  CHOOSE YOUR BARBER
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {barbers.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => selBarber(b)}
                      style={{
                        padding: "24px 16px",
                        border: `1px solid rgba(197,169,124,0.12)`,
                        background: "transparent",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        textAlign: "center",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = TAN;
                        e.currentTarget.style.background =
                          "rgba(197,169,124,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(197,169,124,0.12)";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          background: "rgba(197,169,124,0.1)",
                          margin: "0 auto 16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <User size={28} style={{ color: TAN }} />
                      </div>
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          color: CREAM,
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {b.name}
                      </div>
                      <div
                        style={{
                          color: `rgba(240,229,208,0.4)`,
                          fontSize: "0.75rem",
                          marginTop: 4,
                          fontFamily: "'Inter', sans-serif",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        Master Barber
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    marginTop: 24,
                    background: "none",
                    border: "none",
                    color: TAN,
                    cursor: "pointer",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  ← BACK
                </button>
              </motion.div>
            )}

            {/* Step 3 – Details */}
            {step === 3 && (
              <motion.div
                key="s3"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
              >
                <p
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    color: TAN,
                    fontSize: "1.5rem",
                    marginBottom: 4,
                  }}
                >
                  Lock in your seat
                </p>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: CREAM,
                    fontSize: "2rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    marginBottom: 28,
                  }}
                >
                  YOUR DETAILS
                </h3>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "'Barlow Condensed', sans-serif",
                          color: TAN,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          marginBottom: 8,
                        }}
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        style={inputStyle}
                        onChange={(e) =>
                          setBooking((b) => ({ ...b, date: e.target.value }))
                        }
                        onFocus={(e) => (e.target.style.borderColor = TAN)}
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgba(197,169,124,0.2)")
                        }
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "'Barlow Condensed', sans-serif",
                          color: TAN,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          marginBottom: 8,
                        }}
                      >
                        Time
                      </label>
                      <input
                        type="time"
                        style={inputStyle}
                        onChange={(e) =>
                          setBooking((b) => ({ ...b, time: e.target.value }))
                        }
                        onFocus={(e) => (e.target.style.borderColor = TAN)}
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgba(197,169,124,0.2)")
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        color: TAN,
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      placeholder="John Doe"
                      style={inputStyle}
                      onChange={(e) =>
                        setBooking((b) => ({
                          ...b,
                          customer_name: e.target.value,
                        }))
                      }
                      onFocus={(e) => (e.target.style.borderColor = TAN)}
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(197,169,124,0.2)")
                      }
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        color: TAN,
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      placeholder="john@example.com"
                      type="email"
                      style={inputStyle}
                      onChange={(e) =>
                        setBooking((b) => ({
                          ...b,
                          customer_email: e.target.value,
                        }))
                      }
                      onFocus={(e) => (e.target.style.borderColor = TAN)}
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(197,169,124,0.2)")
                      }
                    />
                  </div>
                  <button
                    onClick={() => mutation.mutate(booking)}
                    disabled={mutation.isPending}
                    style={{
                      marginTop: 8,
                      padding: "16px",
                      background: TAN,
                      color: GREEN_DARK,
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      opacity: mutation.isPending ? 0.6 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!mutation.isPending)
                        e.currentTarget.style.background = CREAM;
                    }}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = TAN)
                    }
                  >
                    {mutation.isPending
                      ? "CONFIRMING..."
                      : "CONFIRM APPOINTMENT"}
                  </button>
                </div>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    marginTop: 20,
                    background: "none",
                    border: "none",
                    color: TAN,
                    cursor: "pointer",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  ← BACK
                </button>
              </motion.div>
            )}

            {/* Step 4 – Confirmed */}
            {step === 4 && (
              <motion.div
                key="s4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: "center", padding: "40px 0" }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    background: "rgba(197,169,124,0.12)",
                    margin: "0 auto 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle2 size={40} style={{ color: TAN }} />
                </div>
                <p
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    color: TAN,
                    fontSize: "1.8rem",
                    marginBottom: 8,
                  }}
                >
                  See you soon
                </p>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: CREAM,
                    fontSize: "3rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  RESERVED.
                </h3>
                <p
                  style={{
                    color: `rgba(240,229,208,0.55)`,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    marginBottom: 36,
                    lineHeight: 1.7,
                  }}
                >
                  Your appointment is confirmed. We look forward to seeing you
                  at Divizion.
                </p>
                <button
                  onClick={onClose}
                  style={{
                    padding: "14px 48px",
                    border: `1px solid ${TAN}`,
                    color: TAN,
                    background: "transparent",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
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
                  RETURN HOME
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
