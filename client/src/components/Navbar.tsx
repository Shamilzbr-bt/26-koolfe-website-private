/*
 * Navbar — KOOLFE
 * Design: Transparent on hero → solid dark purple on scroll.
 * Logo: KoolfeLogoHDNOBG.png image (white/transparent, fits on dark bg).
 * Nav links: Montserrat, tracking-widest, uppercase.
 */

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const LOGO_URL = "/manus-storage/KoolfeLogoHDNOBG_fae30daa.webp";

const NAV_LINKS = [
  { label: "Flavours", href: "#products" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
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
        backdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.18)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo image */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center focus:outline-none"
            aria-label="KOOLFE — Back to top"
          >
            <img
              src={LOGO_URL}
              alt="KOOLFE"
              className="object-contain transition-transform duration-200 hover:scale-105"
              style={{
                height: "80px",
                width: "auto",
                filter: "drop-shadow(0 2px 12px rgba(232,224,125,0.35))",
              }}
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="font-body text-xs font-semibold tracking-[0.18em] uppercase transition-opacity duration-200 hover:opacity-60"
                style={{ color: "#FFF9F0" }}
              >
                {link.label}
              </button>
            ))}

          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: "#FFF9F0" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "320px" : "0px",
          backgroundColor: "rgba(91,50,89,0.98)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div className="px-5 pb-6 pt-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-body text-sm font-semibold tracking-[0.18em] uppercase text-left py-3 transition-opacity duration-200 hover:opacity-60"
              style={{
                color: "#FFF9F0",
                borderBottom: "1px solid rgba(255,249,240,0.08)",
              }}
            >
              {link.label}
            </button>
          ))}

        </div>
      </div>
    </nav>
  );
}
