/*
 * ContactSection — KOOLFE
 * Design: Warm cream (#FFF9F0) background, 2-column layout.
 * Left: brand info, contact details with icon badges.
 * Right: white card with contact form (rounded-3xl, shadow-xl).
 */

import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PATTERN_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663290872574/CjRFQ4waAe8ScATebVdeV2/koolfe_pattern_bg-GRxb82fBxvUGqPAZjamqJH.webp";

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

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
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
            {/* Brand name */}
            <h3
              className="font-display italic font-medium text-3xl mb-2"
              style={{ color: "#5B3259" }}
            >
              KOOLFE
            </h3>
            <p
              className="font-body text-sm mb-8"
              style={{ color: "#8B6B8A" }}
            >
              Authentic Indian Kulfi — Handcrafted in Kuwait
            </p>

            {/* Contact items */}
            <div className="space-y-5 mb-8">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon size={18} color="#5B3259" />
                    </div>
                    <div>
                      <p
                        className="font-body text-xs font-semibold tracking-widest uppercase mb-0.5"
                        style={{ color: "#B7D9D8" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="font-body text-sm leading-relaxed group-hover:underline"
                        style={{ color: "#5B3259" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social links */}
            <div>
              <p
                className="font-body text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#8B6B8A" }}
              >
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "Instagram", href: "#" },
                  { icon: Facebook, label: "Facebook", href: "#" },
                  { icon: Twitter, label: "Twitter / X", href: "#" },
                ].map(({ icon: SocialIcon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:opacity-80"
                    style={{ backgroundColor: "#5B3259" }}
                  >
                    <SocialIcon size={16} color="#FFF9F0" />
                  </a>
                ))}
              </div>
              <p
                className="font-body text-xs mt-3"
                style={{ color: "#8B6B8A", opacity: 0.7 }}
              >
                Social handles to be confirmed.
              </p>
            </div>
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
              For wholesale orders, catering, or general enquiries.
            </p>

            {submitted && (
              <div
                className="rounded-xl px-5 py-4 mb-6 font-body text-sm font-medium"
                style={{ backgroundColor: "#D4E8D4", color: "#5B3259" }}
              >
                Thank you! Your message has been received. We'll be in touch shortly.
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
                    className="block font-body text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ color: "#8B6B8A" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
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
                className="koolfe-btn w-full rounded-xl py-4 font-body font-semibold text-sm tracking-widest uppercase"
                style={{
                  backgroundColor: "#5B3259",
                  color: "#FFF9F0",
                  boxShadow: "0 4px 20px rgba(91,50,89,0.25)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
