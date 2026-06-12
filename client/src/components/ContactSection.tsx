/*
 * ContactSection — KOOLFE
 * Design: Warm cream (#FFF9F0) background, 2-column layout.
 * Left: brand info, contact details with icon badges.
 * Right: white card with contact form (rounded-3xl, shadow-xl).
 * Form: Submits to Formspree → forwards to sales@koolfe.com
 */

import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PATTERN_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663290872574/CjRFQ4waAe8ScATebVdeV2/koolfe_pattern_bg-GRxb82fBxvUGqPAZjamqJH.webp";

// Formspree endpoint — forwards submissions to sales@koolfe.com
// To activate: sign up at https://formspree.io, create a form for sales@koolfe.com,
// and replace the endpoint below with your form ID (e.g. https://formspree.io/f/xyzabcde)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgbnpwb";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Mobile",
    value: "+965 5657 1366",
    href: "tel:+96556571366",
    color: "#B7D9D8",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+965 5657 1366",
    href: "https://wa.me/96556571366",
    color: "#D4E8D4",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Sales@koolfe.com",
    href: "mailto:Sales@koolfe.com",
    color: "#E8E07D",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Unit 10, Floor 1, Building 166, Street 25, Block 1, West Abu Fatira, Mubarak Al-Kabeer, Kuwait",
    href: "https://maps.google.com/?q=West+Abu+Fatira,+Mubarak+Al-Kabeer,+Kuwait",
    color: "#FFB8D1",
  },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `New B2B Enquiry from ${formData.name} — KOOLFE Website`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24"
      style={{
        background: `url(${PATTERN_BG}) repeat center / 400px 400px, #FFF9F0`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <p
            className="font-body text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#B7D9D8" }}
          >
            Get In Touch
          </p>
          <h2
            className="font-display font-medium text-4xl md:text-5xl mb-5"
            style={{ color: "#5B3259" }}
          >
            Contact Us
          </h2>
          <div
            className="mx-auto"
            style={{
              width: "64px",
              height: "2px",
              background: "linear-gradient(90deg, #B7D9D8, #E8E07D)",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-28px)",
              transition: "opacity 0.7s cubic-bezier(0.23,1,0.32,1) 0.1s, transform 0.7s cubic-bezier(0.23,1,0.32,1) 0.1s",
            }}
          >
            {/* Header block */}
            <div className="mb-8">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: "rgba(91,50,89,0.08)", border: "1px solid rgba(91,50,89,0.15)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#5B3259" }} />
                <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#5B3259" }}>B2B Enquiries Welcome</span>
              </div>
              <h3
                className="font-display font-semibold text-4xl leading-tight mb-3"
                style={{ color: "#5B3259" }}
              >
                Let's Work
                <span className="italic block" style={{ color: "#8B6B8A" }}>Together</span>
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#8B6B8A" }}>
                Supplying authentic Indian kulfi to restaurants, cafés, supermarkets, and catering operations across Kuwait.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3 mb-8">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-2xl group transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(91,50,89,0.1)",
                      backdropFilter: "blur(8px)",
                      boxShadow: "0 2px 12px rgba(91,50,89,0.06)",
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon size={18} color="#5B3259" />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="font-body text-xs font-semibold tracking-widest uppercase mb-0.5"
                        style={{ color: "#B7D9D8" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="font-body text-sm leading-snug truncate group-hover:underline"
                        style={{ color: "#5B3259" }}
                      >
                        {item.value}
                      </p>
                    </div>
                    <div className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="#5B3259" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/96556571366"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ backgroundColor: "#25D366", color: "#fff", boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right: Contact form */}
          <div
            className="bg-white rounded-3xl p-8 md:p-10"
            style={{
              boxShadow: "0 8px 40px rgba(91,50,89,0.12)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(28px)",
              transition: "opacity 0.7s cubic-bezier(0.23,1,0.32,1) 0.2s, transform 0.7s cubic-bezier(0.23,1,0.32,1) 0.2s",
            }}
          >
            <h3
              className="font-display font-medium text-2xl mb-2"
              style={{ color: "#5B3259" }}
            >
              Send an Enquiry
            </h3>
            <p
              className="font-body text-sm mb-7"
              style={{ color: "#8B6B8A" }}
            >
              For wholesale orders, catering, or general enquiries. We'll reply to <strong>sales@koolfe.com</strong>.
            </p>

            {/* Status messages */}
            {status === "success" && (
              <div
                className="rounded-xl px-5 py-4 mb-6 font-body text-sm font-medium flex items-center gap-3"
                style={{ backgroundColor: "#D4E8D4", color: "#2d6a2d" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#25D366" opacity="0.2"/>
                  <path d="M5 9l3 3 5-5" stroke="#2d6a2d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Message sent! We'll be in touch at <strong className="ml-1">sales@koolfe.com</strong>.
              </div>
            )}
            {status === "error" && (
              <div
                className="rounded-xl px-5 py-4 mb-6 font-body text-sm font-medium"
                style={{ backgroundColor: "#FFE4E4", color: "#8B2020" }}
              >
                Something went wrong. Please try again or email us directly at <strong>sales@koolfe.com</strong>.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className="block font-body text-xs font-semibold tracking-widest uppercase mb-2"
                  style={{ color: "#8B6B8A" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-lg px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                  style={{
                    border: "1.5px solid rgba(91,50,89,0.15)",
                    backgroundColor: "#FFF9F0",
                    color: "#5B3259",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#5B3259")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(91,50,89,0.15)")}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block font-body text-xs font-semibold tracking-widests uppercase mb-2"
                    style={{ color: "#8B6B8A" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full rounded-lg px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                    style={{
                      border: "1.5px solid rgba(91,50,89,0.15)",
                      backgroundColor: "#FFF9F0",
                      color: "#5B3259",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#5B3259")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(91,50,89,0.15)")}
                  />
                </div>
                <div>
                  <label
                    className="block font-body text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ color: "#8B6B8A" }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+965 XXXX XXXX"
                    className="w-full rounded-lg px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                    style={{
                      border: "1.5px solid rgba(91,50,89,0.15)",
                      backgroundColor: "#FFF9F0",
                      color: "#5B3259",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#5B3259")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(91,50,89,0.15)")}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block font-body text-xs font-semibold tracking-widest uppercase mb-2"
                  style={{ color: "#8B6B8A" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your order or enquiry..."
                  className="w-full rounded-lg px-4 py-3 font-body text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    border: "1.5px solid rgba(91,50,89,0.15)",
                    backgroundColor: "#FFF9F0",
                    color: "#5B3259",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#5B3259")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(91,50,89,0.15)")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="koolfe-btn w-full rounded-xl py-4 font-body font-semibold text-sm tracking-widest uppercase transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "#5B3259",
                  color: "#FFF9F0",
                  boxShadow: "0 4px 20px rgba(91,50,89,0.25)",
                }}
              >
                {status === "submitting" ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
