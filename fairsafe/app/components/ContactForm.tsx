"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      // MAIL OPEN
      const subject = encodeURIComponent(
        `Quote Request - ${form.service || "General"}`
      );

      const body = encodeURIComponent(`
Name: ${form.firstName} ${form.lastName}

Email: ${form.email}

Phone: ${form.phone}

Service: ${form.service}

Message:
${form.message}
      `);

      // popup success
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);

        // open email app
        window.location.href = `mailto:info@fairsafe.ca?subject=${subject}&body=${body}`;

        // reset form
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        // remove popup after 4 sec
        setTimeout(() => {
          setSubmitted(false);

          // stay same page + smooth top
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 4000);
      }, 1200);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "#F8F5FF",
    border: "1px solid rgba(26,10,46,0.1)",
    borderRadius: 10,
    padding: "14px 16px",
    color: "#1A0A2E",
    fontFamily: "inherit",
    fontSize: "0.95rem",
    width: "100%",
    outline: "none",
    transition: "all 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "#6B6080",
    marginBottom: 7,
    display: "block",
    fontWeight: 700,
  };

  return (
    <>
      {/* SUCCESS POPUP */}
      {submitted && (
        <div
          style={{
            position: "fixed",
            top: 30,
            right: 30,
            zIndex: 9999,
            background: "#ffffff",
            border: "1px solid rgba(34,197,94,0.25)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            borderRadius: 16,
            padding: "20px 24px",
            minWidth: 320,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <CheckCircle
            size={42}
            color="#22c55e"
          />

          <div>
            <div
              style={{
                fontWeight: 800,
                color: "#1A0A2E",
                marginBottom: 4,
                fontSize: "1rem",
              }}
            >
              Message Sent Successfully
            </div>

            <div
              style={{
                color: "rgba(26,10,46,0.65)",
                fontSize: "0.88rem",
                lineHeight: 1.5,
              }}
            >
              We’ll contact you within 24 hours.
            </div>
          </div>
        </div>
      )}

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 22,
          background: "#FFFFFF",
          padding: "36px",
          borderRadius: 18,
          border: "1px solid rgba(26,10,46,0.08)",
          boxShadow: "0 10px 40px rgba(124,58,237,0.06)",
        }}
      >
        {/* ROW */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          <div>
            <label style={labelStyle}>
              First Name
            </label>

            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="John"
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style.borderColor =
                  "#7C3AED")
              }
              onBlur={(e) =>
                (e.target.style.borderColor =
                  "rgba(26,10,46,0.1)")
              }
            />
          </div>

          <div>
            <label style={labelStyle}>
              Last Name
            </label>

            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Smith"
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style.borderColor =
                  "#7C3AED")
              }
              onBlur={(e) =>
                (e.target.style.borderColor =
                  "rgba(26,10,46,0.1)")
              }
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label style={labelStyle}>
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
            style={inputStyle}
            onFocus={(e) =>
              (e.target.style.borderColor =
                "#7C3AED")
            }
            onBlur={(e) =>
              (e.target.style.borderColor =
                "rgba(26,10,46,0.1)")
            }
          />
        </div>

        {/* PHONE */}
        <div>
          <label style={labelStyle}>
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(604) 000-0000"
            style={inputStyle}
            onFocus={(e) =>
              (e.target.style.borderColor =
                "#7C3AED")
            }
            onBlur={(e) =>
              (e.target.style.borderColor =
                "rgba(26,10,46,0.1)")
            }
          />
        </div>

        {/* SERVICE */}
        <div>
          <label style={labelStyle}>
            Service Type
          </label>

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            style={{
              ...inputStyle,
              cursor: "pointer",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor =
                "#7C3AED")
            }
            onBlur={(e) =>
              (e.target.style.borderColor =
                "rgba(26,10,46,0.1)")
            }
          >
            <option value="">
              Select a service...
            </option>

            <option>
              Event First Aid Coverage
            </option>

            <option>
              Worksite / Construction Safety
            </option>

            <option>
              Industrial Safety Staffing
            </option>

            <option>
              Multi-Day Contract
            </option>

            <option>Other</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div>
          <label style={labelStyle}>
            Message
          </label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            placeholder="Tell us about your event, location, attendance, dates, and staffing requirements..."
            style={{
              ...inputStyle,
              resize: "vertical",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor =
                "#7C3AED")
            }
            onBlur={(e) =>
              (e.target.style.borderColor =
                "rgba(26,10,46,0.1)")
            }
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          style={{
            background: loading
              ? "#5B21B6"
              : "#7C3AED",
            color: "#FFFFFF",
            border: "none",
            padding: "16px 34px",
            borderRadius: 10,
            cursor: loading
              ? "not-allowed"
              : "pointer",
            fontFamily: "inherit",
            fontSize: "0.95rem",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            transition: "0.2s ease",
            alignSelf: "flex-start",
            minWidth: 220,
          }}
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Send size={17} />
              Send Message
            </>
          )}
        </button>
      </form>
    </>
  );
}