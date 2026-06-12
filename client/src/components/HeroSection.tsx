/*
 * HeroSection — KOOLFE (Modern Redesign)
 * Design: Full-bleed composite image as background with a dark gradient overlay on the left.
 * Left side: brand text, tagline, CTAs. Right side: image bleeds to edge.
 * Asymmetric layout — text anchored left, image fills the right 60%.
 * Colors: bg #5B3259 fallback, gradient overlay, text #FFF9F0 / #E8E07D
 */

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663290872574/CjRFQ4waAe8ScATebVdeV2/koolfe_hero_composite-kojQg5gcvAqaahNGLYvZGv.webp";

const LOGO_URL = "/manus-storage/KoolfeLogoFinal_dbfb99ba.webp";

const FLAVOUR_TAGS = ["Pistachio", "Mango", "Kesar Malai", "Rose Almond", "Dates", "Matka", "Coconut", "Chikoo"];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: "#3a1f38" }}
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="All eight KOOLFE kulfi flavours"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.92 }}
        />
        {/* Left gradient overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(58,31,56,0.97) 0%, rgba(58,31,56,0.88) 38%, rgba(58,31,56,0.55) 60%, rgba(58,31,56,0.08) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to top, rgba(58,31,56,0.7) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Top gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-20"
        style={{ background: "linear-gradient(90deg, #E8E07D 0%, rgba(232,224,125,0.3) 60%, transparent 100%)" }}
      />

      {/* Content — left-anchored */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 md:py-0 md:min-h-screen md:flex md:items-center">
        <div
          className="max-w-xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          {/* Eyebrow */}
          <p
            className="font-body text-xs font-semibold tracking-[0.3em] uppercase mb-5"
            style={{ color: "#E8E07D" }}
          >
            Handcrafted in Kuwait · Est. 2024
          </p>

          {/* Main heading */}
          <h1
            className="font-display italic font-medium leading-[0.92] mb-6"
            style={{
              color: "#FFF9F0",
              fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Authentic<br />
            <span style={{ color: "#E8E07D" }}>Indian</span><br />
            Kulfi
          </h1>

          {/* Divider */}
          <div
            className="mb-6"
            style={{
              width: "72px",
              height: "2px",
              background: "linear-gradient(90deg, #E8E07D, rgba(232,224,125,0.2))",
              borderRadius: "1px",
            }}
          />

          {/* Description */}
          <p
            className="font-body text-base md:text-lg font-light leading-relaxed mb-8 max-w-md"
            style={{ color: "rgba(255,249,240,0.82)" }}
          >
            Eight artisanal flavours crafted from pure, hand-picked ingredients using centuries-old traditional recipes.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToProducts}
              className="font-body font-semibold text-sm tracking-widest uppercase rounded-full px-8 py-4 transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#E8E07D",
                color: "#3a1f38",
                boxShadow: "0 6px 32px rgba(232,224,125,0.55), 0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              Explore Flavours
            </button>
            <a
              href="https://wa.me/96556571366"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-semibold text-sm tracking-widest uppercase rounded-full px-8 py-4 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2"
              style={{
                backgroundColor: "rgba(232,224,125,0.15)",
                border: "2px solid #E8E07D",
                color: "#E8E07D",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Scroll to products"
        style={{ animation: "bounce 2s infinite" }}
      >
        <ChevronDown size={28} color="#E8E07D" />
      </button>


    </section>
  );
}
