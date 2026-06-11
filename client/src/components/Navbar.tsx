/*
 * Navbar — KOOLFE
 * Design: Transparent on hero, transitions to dark purple on scroll.
 * Logo: KOOLFE in Playfair Display Italic.
 * Nav links: Montserrat, tracking-widest, uppercase.
 */

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Flavours", href: "#products" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(91,50,89,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display italic font-medium text-2xl tracking-tight"
            style={{ color: "#FFF9F0" }}
          >
            KOOLFE
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="font-body text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-200 hover:opacity-70"
                style={{ color: "#FFF9F0" }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/96556571366"
              target="_blank"
              rel="noopener noreferrer"
              className="koolfe-btn rounded-full px-5 py-2 font-body font-semibold text-xs tracking-widest uppercase"
              style={{
                backgroundColor: "#E8E07D",
                color: "#5B3259",
              }}
            >
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={22} color="#FFF9F0" />
            ) : (
              <Menu size={22} color="#FFF9F0" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-6 pt-2"
          style={{ backgroundColor: "rgba(91,50,89,0.98)", backdropFilter: "blur(12px)" }}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="font-body text-sm font-semibold tracking-[0.18em] uppercase text-left py-2"
                style={{ color: "#FFF9F0", borderBottom: "1px solid rgba(255,249,240,0.1)" }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/96556571366"
              target="_blank"
              rel="noopener noreferrer"
              className="koolfe-btn rounded-full px-5 py-3 font-body font-semibold text-xs tracking-widest uppercase text-center mt-2"
              style={{ backgroundColor: "#E8E07D", color: "#5B3259" }}
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
