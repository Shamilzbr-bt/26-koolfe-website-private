/*
 * StorySection — KOOLFE
 * Design: Dark purple (#5B3259) background with grain texture overlay.
 * 2-column layout: brand story left, 3 glassmorphism feature cards right.
 * Story background image at low opacity for depth.
 */

import { Award, Heart, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STORY_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663290872574/CjRFQ4waAe8ScATebVdeV2/koolfe_story_bg-QSZg8c5GrA9KRUYByRwRDq.webp";

const FEATURES = [
  {
    icon: Heart,
    iconColor: "#FFB8D1",
    title: "Pure Ingredients",
    description: "Hand-picked, 100% natural ingredients. No artificial flavours, no shortcuts.",
  },
  {
    icon: Sparkles,
    iconColor: "#E8E07D",
    title: "Traditional Recipes",
    description: "Centuries-old techniques passed down through generations of artisans.",
  },
  {
    icon: Award,
    iconColor: "#B7D9D8",
    title: "Crafted Fresh",
    description: "Prepared fresh to order, delivered to you at peak flavour.",
  },
];

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-24 overflow-hidden grain-overlay"
      style={{ backgroundColor: "#5B3259" }}
    >
      {/* Background image at low opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${STORY_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      {/* Decorative orbs */}
      <div
        className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(183,217,216,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <div
        className="absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,224,125,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Brand story */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            {/* Label */}
            <p
              className="font-body text-xs font-semibold tracking-[0.25em] uppercase mb-5"
              style={{ color: "#B7D9D8" }}
            >
              Our Story
            </p>

            {/* Heading */}
            <h2
              className="font-display font-medium text-4xl md:text-5xl mb-5 leading-tight"
              style={{ color: "#FFF9F0" }}
            >
              A Tradition of{" "}
              <span className="italic" style={{ color: "#E8E07D" }}>
                Timeless
              </span>{" "}
              Indulgence
            </h2>

            {/* Mint underline */}
            <div
              className="mb-8"
              style={{
                width: "56px",
                height: "2px",
                background: "linear-gradient(90deg, #B7D9D8, transparent)",
                borderRadius: "1px",
              }}
            />

            {/* Story copy */}
            <div className="space-y-5">
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "rgba(255,249,240,0.85)" }}
              >
                Our kulfi is crafted using centuries-old traditional recipes, made from pure,
                hand-picked ingredients and perfected techniques. Freshly prepared with care,
                it brings you the authentic taste of timeless indulgence.
              </p>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "rgba(255,249,240,0.85)" }}
              >
                Each bite delivers a rich, creamy taste of nostalgia — 100% natural, no
                shortcuts, just indulgence. From the golden threads of saffron to the
                fragrance of fresh rose petals, every ingredient is chosen with purpose.
              </p>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "rgba(255,249,240,0.85)" }}
              >
                Handcrafted in Kuwait and delivered across the Gulf — KOOLFE brings the
                heritage of Indian kulfi to your table, one frozen moment at a time.
              </p>
            </div>

            {/* Tagline */}
            <div
              className="mt-8 pt-8"
              style={{ borderTop: "1px solid rgba(255,249,240,0.12)" }}
            >
              <p
                className="font-display italic text-xl"
                style={{ color: "#E8E07D" }}
              >
                "100% natural, no shortcuts, just indulgence."
              </p>
            </div>
          </div>

          {/* Right: Feature cards */}
          <div
            className="space-y-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.7s cubic-bezier(0.23,1,0.32,1) 0.15s, transform 0.7s cubic-bezier(0.23,1,0.32,1) 0.15s",
            }}
          >
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="glass-card rounded-2xl p-6 flex gap-5 items-start"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s cubic-bezier(0.23,1,0.32,1) ${0.2 + i * 0.12}s, transform 0.6s cubic-bezier(0.23,1,0.32,1) ${0.2 + i * 0.12}s`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${feature.iconColor}22` }}
                  >
                    <Icon size={22} color={feature.iconColor} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="font-display font-medium text-lg mb-2"
                      style={{ color: "#FFF9F0" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "rgba(183,217,216,0.85)" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Heritage badge */}
            <div
              className="glass-card rounded-2xl p-6 text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1) 0.56s, transform 0.6s cubic-bezier(0.23,1,0.32,1) 0.56s",
              }}
            >
              <p
                className="font-body text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                style={{ color: "#B7D9D8" }}
              >
                Kuwait Ministry of Commerce
              </p>
              <p
                className="font-display italic text-lg"
                style={{ color: "#E8E07D" }}
              >
                Licensed &amp; Certified
              </p>
              <p
                className="font-body text-xs mt-1"
                style={{ color: "rgba(255,249,240,0.5)" }}
              >
                Commercial Registration No: 449251
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
