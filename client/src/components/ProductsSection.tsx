/*
 * ProductsSection — KOOLFE
 * Design: Carousel layout — 3 cards visible on desktop, 1.2 on mobile.
 * Prev/Next arrow controls + dot indicators.
 * Smooth CSS scroll-snap with framer-motion card entrance.
 * Warm cream (#FFF9F0) background with subtle paisley pattern.
 */

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Kesar Malai Kulfi",
    description: "Rich saffron-infused malai kulfi with a royal, aromatic depth.",
    badgeLabel: "Saffron",
    badgeColor: "#F5D9A0",
    gradientFrom: "#F5D9A0",
    gradientTo: "#E8C97A",
    emoji: "🌾",
    image: "/manus-storage/KesarMalaiKulfiProduct_7aeba35e.png",
    price: "KWD 0.250",
  },
  {
    id: 2,
    name: "Pistachio Kulfi",
    description: "Creamy kulfi loaded with crushed pistachios for a nutty, indulgent bite.",
    badgeLabel: "Pistachio",
    badgeColor: "#D4E8D4",
    gradientFrom: "#D4E8D4",
    gradientTo: "#A8D4A8",
    emoji: "🌿",
    image: "/manus-storage/PistachioKulfiProduct_e624dbcd.png",
    price: "KWD 0.250",
  },
  {
    id: 3,
    name: "Mango Kulfi",
    description: "Bursting with the sweetness of ripe Alphonso mangoes, a summer classic.",
    badgeLabel: "Mango",
    badgeColor: "#FFE0A0",
    gradientFrom: "#FFD580",
    gradientTo: "#FFA040",
    emoji: "🥭",
    image: "/manus-storage/MangoKulfiProduct_d3f51764.png",
    price: "KWD 0.250",
  },
  {
    id: 4,
    name: "Chikkoo Kulfi",
    description: "Velvety chikkoo (sapodilla) kulfi with a naturally caramel-like sweetness.",
    badgeLabel: "Chikkoo",
    badgeColor: "#F0DFC0",
    gradientFrom: "#E8C898",
    gradientTo: "#C8A070",
    emoji: "🍂",
    image: "/manus-storage/ChikkooKulfiProduct_a0839830.png",
    price: "KWD 0.250",
  },
  {
    id: 5,
    name: "Matka Kulfi",
    description: "Served in a traditional clay pot, slow-set with whole milk for earthy richness.",
    badgeLabel: "Matka",
    badgeColor: "#B7D9D8",
    gradientFrom: "#B7D9D8",
    gradientTo: "#7ABAB8",
    emoji: "🏺",
    image: "/manus-storage/KesarMalaiKulfiProduct_7aeba35e.png",
    price: "KWD 0.250",
  },
  {
    id: 6,
    name: "Tender Coconut Kulfi",
    description: "Light, refreshing kulfi made with fresh tender coconut water and cream.",
    badgeLabel: "Coconut",
    badgeColor: "#C8E8D8",
    gradientFrom: "#C8E8D8",
    gradientTo: "#70C8A8",
    emoji: "🥥",
    image: "/manus-storage/TenderCoconutKulfiProduct_286ec0a5.png",
    price: "KWD 0.250",
  },
  {
    id: 7,
    name: "Rose Almond Kulfi",
    description: "Delicate rose essence layered with crunchy almonds — fragrant and luxurious.",
    badgeLabel: "Rose",
    badgeColor: "#FFB8D1",
    gradientFrom: "#FFB8D1",
    gradientTo: "#FF80A8",
    emoji: "🌹",
    image: "/manus-storage/RoseAlmondKulfiProduct_6c21dd18.png",
    price: "KWD 0.250",
  },
  {
    id: 8,
    name: "Dates Kulfi",
    description: "Naturally sweetened with premium Medjool dates, rich and wholesome.",
    badgeLabel: "Dates",
    badgeColor: "#F0D4A0",
    gradientFrom: "#D4A870",
    gradientTo: "#A87840",
    emoji: "🌴",
    image: "/manus-storage/DatesKulfiProduct_c90eb18e.png",
    price: "KWD 0.250",
  },
];

const PATTERN_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663290872574/CjRFQ4waAe8ScATebVdeV2/koolfe_pattern_bg-GRxb82fBxvUGqPAZjamqJH.webp";

function ProductCard({ product }: { product: (typeof PRODUCTS)[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group flex-shrink-0 w-[80vw] sm:w-[46vw] lg:w-[30%] rounded-3xl bg-white overflow-hidden select-none"
      style={{
        boxShadow: "0 4px 32px rgba(91,50,89,0.10)",
        transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s cubic-bezier(0.23,1,0.32,1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 48px rgba(91,50,89,0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 32px rgba(91,50,89,0.10)";
      }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "3/4",
          background: imgError
            ? `linear-gradient(145deg, ${product.gradientFrom}, ${product.gradientTo})`
            : "#f8f4f0",
        }}
      >
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            draggable={false}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center"
            style={{
              background: `linear-gradient(145deg, ${product.gradientFrom}, ${product.gradientTo})`,
            }}
          >
            <span style={{ fontSize: "3.5rem", lineHeight: 1 }}>{product.emoji}</span>
            <p
              className="font-display italic text-sm mt-3 text-center px-4"
              style={{ color: "rgba(91,50,89,0.7)" }}
            >
              {product.name}
            </p>
          </div>
        )}

        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(91,50,89,0.12) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Card body */}
      <div className="p-5">
        <span
          className="inline-block text-xs font-body font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
          style={{ backgroundColor: product.badgeColor, color: "#5B3259" }}
        >
          {product.badgeLabel}
        </span>

        <h3
          className="font-display font-medium text-xl leading-tight mb-2"
          style={{ color: "#5B3259" }}
        >
          {product.name}
        </h3>

        <p className="font-body text-sm leading-relaxed" style={{ color: "#8B6B8A" }}>
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-body font-semibold text-sm" style={{ color: "#5B3259" }}>
            {product.price}
          </span>
          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: product.badgeColor }} />
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  // Observe header entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Track scroll position to update active dot
  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>(".carousel-card");
    if (!cards.length) return;
    const trackLeft = track.getBoundingClientRect().left;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.getBoundingClientRect().left - trackLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => track.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>(".carousel-card");
    if (!cards[index]) return;
    const cardLeft = cards[index].offsetLeft;
    track.scrollTo({ left: cardLeft - 24, behavior: "smooth" });
  };

  const prev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const next = () => scrollToIndex(Math.min(PRODUCTS.length - 1, activeIndex + 1));

  // Mouse drag support
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    const delta = dragStart.current - e.clientX;
    trackRef.current.scrollLeft = scrollStart.current + delta;
  };
  const onMouseUp = () => setIsDragging(false);

  return (
    <section
      id="products"
      className="relative py-24 overflow-hidden"
      style={{ background: `url(${PATTERN_BG}) repeat center / 400px 400px, #FFF9F0` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headerRef}
          className="text-center mb-12"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <p
            className="font-body text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#B7D9D8" }}
          >
            Our Collection
          </p>
          <h2
            className="font-display font-medium text-4xl md:text-5xl mb-5"
            style={{ color: "#5B3259" }}
          >
            Eight Artisanal Flavours
          </h2>
          <div
            className="mx-auto mb-5"
            style={{
              width: "64px",
              height: "2px",
              background: "linear-gradient(90deg, #B7D9D8, #E8E07D)",
              borderRadius: "1px",
            }}
          />
          <p
            className="font-body text-base max-w-xl mx-auto"
            style={{ color: "#8B6B8A" }}
          >
            Each kulfi is crafted from pure, hand-picked ingredients using centuries-old traditional recipes.
          </p>
        </div>

        {/* Carousel + controls wrapper */}
        <div className="relative">
          {/* Prev button */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            aria-label="Previous flavour"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-11 h-11 rounded-full items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
            style={{
              backgroundColor: "#5B3259",
              boxShadow: "0 4px 16px rgba(91,50,89,0.25)",
            }}
          >
            <ChevronLeft size={20} color="#FFF9F0" />
          </button>

          {/* Next button */}
          <button
            onClick={next}
            disabled={activeIndex === PRODUCTS.length - 1}
            aria-label="Next flavour"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-11 h-11 rounded-full items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
            style={{
              backgroundColor: "#5B3259",
              boxShadow: "0 4px 16px rgba(91,50,89,0.25)",
            }}
          >
            <ChevronRight size={20} color="#FFF9F0" />
          </button>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {/* Left padding sentinel */}
            <div className="flex-shrink-0 w-0 sm:w-2" />

            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="carousel-card flex-shrink-0 w-[80vw] sm:w-[46vw] lg:w-[calc(33.333%-14px)]"
                style={{ scrollSnapAlign: "start" }}
              >
                <ProductCard product={product} />
              </div>
            ))}

            {/* Right padding sentinel */}
            <div className="flex-shrink-0 w-4 sm:w-2" />
          </div>

          {/* Hide scrollbar in webkit */}
          <style>{`
            #products [class*="overflow-x-auto"]::-webkit-scrollbar { display: none; }
          `}</style>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {PRODUCTS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to flavour ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === activeIndex ? "28px" : "8px",
                height: "8px",
                backgroundColor: i === activeIndex ? "#5B3259" : "rgba(91,50,89,0.22)",
              }}
            />
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p
          className="sm:hidden text-center font-body text-xs mt-4"
          style={{ color: "rgba(91,50,89,0.4)" }}
        >
          Swipe to explore all flavours
        </p>

        {/* Wholesale note */}
        <div className="mt-10 text-center">
          <div
            className="inline-flex items-center gap-3 rounded-full px-6 py-3"
            style={{
              backgroundColor: "rgba(91,50,89,0.06)",
              border: "1px solid rgba(91,50,89,0.12)",
            }}
          >
            <span
              className="font-body text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#8B6B8A" }}
            >
              Wholesale &amp; B2B Orders
            </span>
            <span style={{ color: "#B7D9D8" }}>·</span>
            <a
              href="https://wa.me/96556571366"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70"
              style={{ color: "#5B3259" }}
            >
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
