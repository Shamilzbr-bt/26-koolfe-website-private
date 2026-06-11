/*
 * ProductsSection — KOOLFE
 * Design: Warm cream (#FFF9F0) background with paisley texture overlay.
 * 4-col desktop grid, 2-col tablet, 1-col mobile.
 * Each card: white bg, rounded-3xl, shadow-xl, flavor badge, hover lift.
 * Product images from GitHub repo; gradient fallback per flavor color.
 */

import { useEffect, useRef, useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Kesar Malai Kulfi",
    description: "Rich saffron-infused malai kulfi with a royal, aromatic depth.",
    badge: "#F5D9A0",
    badgeLabel: "Saffron",
    gradientFrom: "#F5D9A0",
    gradientTo: "#E8C97A",
    emoji: "🌾",
    image:
      "https://raw.githubusercontent.com/Shamilzbr-bt/koolfe-website/main/assets/products/Kesar_Malai_Kulfi_Product.png",
    aspect: "3/4",
  },
  {
    id: 2,
    name: "Pistachio Kulfi",
    description: "Creamy kulfi loaded with crushed pistachios for a nutty, indulgent bite.",
    badge: "#D4E8D4",
    badgeLabel: "Pistachio",
    gradientFrom: "#D4E8D4",
    gradientTo: "#A8D4A8",
    emoji: "🌿",
    image:
      "https://raw.githubusercontent.com/Shamilzbr-bt/koolfe-website/main/assets/products/Pistachio_Kulfi_Product.png",
    aspect: "3/4",
  },
  {
    id: 3,
    name: "Mango Kulfi",
    description: "Bursting with the sweetness of ripe Alphonso mangoes, a summer classic.",
    badge: "#FFF0A0",
    badgeLabel: "Mango",
    gradientFrom: "#FFD580",
    gradientTo: "#FFA040",
    emoji: "🥭",
    image:
      "https://raw.githubusercontent.com/Shamilzbr-bt/koolfe-website/main/assets/products/Mango_Kulfi_Product.png",
    aspect: "3/4",
  },
  {
    id: 4,
    name: "Chikkoo Kulfi",
    description: "Velvety chikkoo (sapodilla) kulfi with a naturally caramel-like sweetness.",
    badge: "#F5D9A0",
    badgeLabel: "Chikkoo",
    gradientFrom: "#E8C898",
    gradientTo: "#C8A070",
    emoji: "🍂",
    image:
      "https://raw.githubusercontent.com/Shamilzbr-bt/koolfe-website/main/assets/products/Chikkoo_Kulfi_Product.png",
    aspect: "3/4",
  },
  {
    id: 5,
    name: "Matka Kulfi",
    description: "Served in a traditional clay pot, slow-set with whole milk for earthy richness.",
    badge: "#B7D9D8",
    badgeLabel: "Matka",
    gradientFrom: "#B7D9D8",
    gradientTo: "#7ABAB8",
    emoji: "🏺",
    image:
      "https://raw.githubusercontent.com/Shamilzbr-bt/koolfe-website/main/assets/products/Matka_Kulfi_Product.png",
    aspect: "4/3",
  },
  {
    id: 6,
    name: "Tender Coconut Kulfi",
    description: "Light, refreshing kulfi made with fresh tender coconut water and cream.",
    badge: "#D4E8D4",
    badgeLabel: "Coconut",
    gradientFrom: "#C8E8D8",
    gradientTo: "#70C8A8",
    emoji: "🥥",
    image:
      "https://raw.githubusercontent.com/Shamilzbr-bt/koolfe-website/main/assets/products/Tender_Coconut_Kulfi_Product.png",
    aspect: "3/4",
  },
  {
    id: 7,
    name: "Rose Almond Kulfi",
    description: "Delicate rose essence layered with crunchy almonds — fragrant and luxurious.",
    badge: "#FFB8D1",
    badgeLabel: "Rose",
    gradientFrom: "#FFB8D1",
    gradientTo: "#FF80A8",
    emoji: "🌹",
    image:
      "https://raw.githubusercontent.com/Shamilzbr-bt/koolfe-website/main/assets/products/Rose_Almond_Kulfi_Product.png",
    aspect: "3/4",
  },
  {
    id: 8,
    name: "Dates Kulfi",
    description: "Naturally sweetened with premium Medjool dates, rich and wholesome.",
    badge: "#F5D9A0",
    badgeLabel: "Dates",
    gradientFrom: "#D4A870",
    gradientTo: "#A87840",
    emoji: "🌴",
    image:
      "https://raw.githubusercontent.com/Shamilzbr-bt/koolfe-website/main/assets/products/Dates_Kulfi_Product.png",
    aspect: "3/4",
  },
];

const PATTERN_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663290872574/CjRFQ4waAe8ScATebVdeV2/koolfe_pattern_bg-GRxb82fBxvUGqPAZjamqJH.webp";

function ProductCard({ product, index }: { product: (typeof PRODUCTS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="product-card group rounded-3xl bg-white overflow-hidden cursor-default"
      style={{
        boxShadow: "0 4px 24px rgba(91,50,89,0.10)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s cubic-bezier(0.23,1,0.32,1) ${index * 70}ms, transform 0.55s cubic-bezier(0.23,1,0.32,1) ${index * 70}ms`,
      }}
    >
      {/* Image container */}
      <div
        className="overflow-hidden relative"
        style={{
          aspectRatio: product.aspect,
          background: imgError
            ? `linear-gradient(145deg, ${product.gradientFrom}, ${product.gradientTo})`
            : "#f8f4f0",
        }}
      >
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback: flavor gradient with emoji */
          <div
            className="w-full h-full flex flex-col items-center justify-center"
            style={{
              background: `linear-gradient(145deg, ${product.gradientFrom}, ${product.gradientTo})`,
            }}
          >
            <span style={{ fontSize: "3.5rem", lineHeight: 1 }}>{product.emoji}</span>
            <p
              className="font-display italic font-medium text-sm mt-3 text-center px-4"
              style={{ color: "rgba(91,50,89,0.7)" }}
            >
              {product.name}
            </p>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to top, rgba(91,50,89,0.15) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Card content */}
      <div className="p-5">
        {/* Flavor badge */}
        <span
          className="inline-block text-xs font-body font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
          style={{
            backgroundColor: product.badge,
            color: "#5B3259",
          }}
        >
          {product.badgeLabel}
        </span>

        {/* Product name */}
        <h3
          className="font-display font-medium text-lg leading-tight mb-2"
          style={{ color: "#5B3259" }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: "#8B6B8A" }}
        >
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <span
            className="font-body font-semibold text-sm"
            style={{ color: "#5B3259" }}
          >
            KWD 0.250
          </span>
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: product.badge }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      className="relative py-24"
      style={{
        background: `url(${PATTERN_BG}) repeat center / 400px 400px, #FFF9F0`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(24px)",
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
          {/* Divider */}
          <div
            className="mx-auto"
            style={{
              width: "64px",
              height: "2px",
              background: "linear-gradient(90deg, #B7D9D8, #E8E07D)",
              borderRadius: "1px",
            }}
          />
          <p
            className="font-body text-base mt-5 max-w-xl mx-auto"
            style={{ color: "#8B6B8A" }}
          >
            Each kulfi is crafted from pure, hand-picked ingredients using centuries-old traditional recipes.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Wholesale note */}
        <div
          className="mt-14 text-center"
          style={{
            opacity: titleVisible ? 1 : 0,
            transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1) 0.4s",
          }}
        >
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
