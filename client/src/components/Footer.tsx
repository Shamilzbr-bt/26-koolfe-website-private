/*
 * Footer — KOOLFE
 * Design: Dark purple (#5B3259), minimal, centered.
 * Two lines: copyright + tagline.
 */

export default function Footer() {
  return (
    <footer
      className="relative py-10 overflow-hidden"
      style={{ backgroundColor: "#5B3259" }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(232,224,125,0.3), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Brand */}
        <p
          className="font-display italic font-medium text-2xl mb-2"
          style={{ color: "#FFF9F0" }}
        >
          KOOLFE
        </p>

        {/* Divider */}
        <div
          className="mx-auto mb-5"
          style={{
            width: "40px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #E8E07D, transparent)",
          }}
        />

        {/* Copyright */}
        <p
          className="font-body text-xs tracking-wide mb-2"
          style={{ color: "rgba(255,249,240,0.5)" }}
        >
          © 2026 KOOLFE. All rights reserved.
        </p>

        {/* Tagline */}
        <p
          className="font-body text-xs"
          style={{ color: "rgba(183,217,216,0.6)" }}
        >
          Handcrafted with ❤️ in Kuwait
        </p>

        {/* License info */}
        <p
          className="font-body text-xs mt-3"
          style={{ color: "rgba(255,249,240,0.25)" }}
        >
          Gulf Kulfi for Sweets Company W.L.L. · License No. 2026/9249 · West Abu Fatira, Mubarak Al-Kabeer, Kuwait
        </p>
      </div>
    </footer>
  );
}
