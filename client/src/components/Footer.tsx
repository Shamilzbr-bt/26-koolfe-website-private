/*
 * Footer — KOOLFE
 * Design: Dark purple (#5B3259) canvas, 3-column layout on desktop.
 * Columns: Brand + tagline | Quick links | Contact info
 * Bottom bar: copyright + license
 */

import { Instagram, Facebook, MessageCircle, Mail, Phone } from "lucide-react";

const LOGO_URL = "/manus-storage/KoolfeLogoHDNOBG_fae30daa.webp";

const NAV_LINKS = [
  { label: "Flavours", href: "#products" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#3D1E3B" }}
    >
      {/* Top gold rule */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(232,224,125,0.4), transparent)" }}
      />

      {/* Decorative orb */}
      <div
        className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(183,217,216,0.06) 0%, transparent 70%)" }}
      />

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">

          {/* Column 1: Brand */}
          <div>
            <img
              src={LOGO_URL}
              alt="KOOLFE"
              style={{
              height: "96px",
              width: "auto",
              objectFit: "contain",
              marginBottom: "16px",
              filter: "drop-shadow(0 2px 14px rgba(232,224,125,0.4))",
            }}
            />
            <p
              className="font-body text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,249,240,0.55)", maxWidth: "220px" }}
            >
              Authentic Indian kulfi, handcrafted in Kuwait. Eight artisanal flavours for B2B partners across the region.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/koolfe.kw" },
                { icon: Facebook, label: "Facebook", href: "https://facebook.com/koolfe.kw" },
                { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/96556571366" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:opacity-80"
                  style={{ backgroundColor: "rgba(255,249,240,0.1)", border: "1px solid rgba(255,249,240,0.12)" }}
                >
                  <Icon size={15} color="#E8E07D" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p
              className="font-body text-xs font-semibold tracking-[0.25em] uppercase mb-5"
              style={{ color: "#E8E07D" }}
            >
              Quick Links
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm transition-opacity duration-200 hover:opacity-60 text-left"
                    style={{ color: "rgba(255,249,240,0.7)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p
              className="font-body text-xs font-semibold tracking-[0.25em] uppercase mb-5"
              style={{ color: "#E8E07D" }}
            >
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+96556571366"
                  className="flex items-center gap-3 group"
                >
                  <Phone size={14} color="#B7D9D8" />
                  <span
                    className="font-body text-sm group-hover:underline"
                    style={{ color: "rgba(255,249,240,0.7)" }}
                  >
                    +965 5657 1366
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Sales@koolfe.com"
                  className="flex items-center gap-3 group"
                >
                  <Mail size={14} color="#B7D9D8" />
                  <span
                    className="font-body text-sm group-hover:underline"
                    style={{ color: "rgba(255,249,240,0.7)" }}
                  >
                    Sales@koolfe.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-xs" style={{ color: "#B7D9D8" }}>📍</span>
                  <span
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "rgba(255,249,240,0.55)" }}
                  >
                    West Abu Fatira, Mubarak Al-Kabeer, Kuwait
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="mb-6"
          style={{ height: "1px", background: "rgba(255,249,240,0.08)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="font-body text-xs"
            style={{ color: "rgba(255,249,240,0.35)" }}
          >
            © 2026 KOOLFE. All rights reserved.
          </p>
          <p
            className="font-body text-xs text-center"
            style={{ color: "rgba(255,249,240,0.2)" }}
          >
            Royal Kulfi for Food Preparation Co · Commercial Registration No: 449251
          </p>
          <p
            className="font-body text-xs"
            style={{ color: "rgba(183,217,216,0.45)" }}
          >
            Handcrafted with ❤️ in Kuwait
          </p>
        </div>
      </div>
    </footer>
  );
}
