/*
 * HeroSection — KOOLFE
 * Design: Full-viewport dark purple canvas with decorative orbs,
 * hero image, brand name in Playfair Display Italic, and CTA.
 * Colors: bg #5B3259, text white/#E8E07D, orbs #B7D9D8/#FFF9F0
 */

import { ChevronDown } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663290872574/CjRFQ4waAe8ScATebVdeV2/koolfe_hero_composite-kojQg5gcvAqaahNGLYvZGv.webp";

export default function HeroSection() {
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#5B3259" }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-[-10%] right-[-8%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(183,217,216,0.22) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[-8%] left-[-6%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,249,240,0.16) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Thin top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, #E8E07D, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        {/* Brand label */}
        <p
          className="animate-fade-up font-body text-xs font-semibold tracking-[0.25em] uppercase mb-6"
          style={{ color: "#B7D9D8" }}
        >
          Handcrafted in Kuwait
        </p>

        {/* Brand name */}
        <h1
          className="animate-fade-up delay-100 font-display italic font-medium leading-none mb-4"
          style={{
            color: "#FFF9F0",
            fontSize: "clamp(4rem, 12vw, 9rem)",
            letterSpacing: "-0.01em",
          }}
        >
          KOOLFE
        </h1>

        {/* Divider */}
        <div
          className="animate-fade-up delay-200 mb-6"
          style={{
            width: "80px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #E8E07D, transparent)",
          }}
        />

        {/* Tagline */}
        <p
          className="animate-fade-up delay-300 font-display italic text-xl md:text-2xl lg:text-3xl font-normal mb-3"
          style={{ color: "#FFF9F0", opacity: 0.9 }}
        >
          Authentic Indian Kulfi
        </p>
        <p
          className="animate-fade-up delay-400 font-body text-sm md:text-base font-light tracking-wide max-w-lg mb-10"
          style={{ color: "#B7D9D8" }}
        >
          Crafted with pure, hand-picked ingredients and centuries-old recipes.
        </p>

        {/* Hero image */}
        <div
          className="animate-fade-up delay-300 w-full max-w-3xl rounded-2xl overflow-hidden mb-10 shadow-2xl"
          style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}
        >
          <img
            src={HERO_IMAGE}
            alt="All eight KOOLFE kulfi flavours — Kesar Malai, Pistachio, Mango, Chikoo, Matka, Tender Coconut, Rose Almond, and Dates — arranged in a fan on a deep purple background"
            className="w-full h-auto"
            style={{ display: "block" }}
          />
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToProducts}
          className="koolfe-btn animate-fade-up delay-500 rounded-full px-10 py-4 font-body font-semibold text-sm tracking-widest uppercase"
          style={{
            backgroundColor: "#E8E07D",
            color: "#5B3259",
            boxShadow: "0 4px 24px rgba(232,224,125,0.3)",
          }}
        >
          Explore Our Flavours
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow z-10 opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Scroll to products"
      >
        <ChevronDown size={28} color="#E8E07D" />
      </button>
    </section>
  );
}
