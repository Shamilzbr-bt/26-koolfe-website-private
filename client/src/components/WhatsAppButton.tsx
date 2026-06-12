/*
 * WhatsAppButton — KOOLFE
 * Fixed bottom-right floating button linking to WhatsApp.
 * Pulses gently to draw attention. Tooltip on hover.
 * Appears after 2 seconds on page load.
 */

import { useEffect, useState } from "react";

const WA_URL = "https://wa.me/96556571366?text=Hello%20KOOLFE%2C%20I%27d%20like%20to%20enquire%20about%20a%20B2B%20order.";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KOOLFE on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "28px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.9)",
        transition: "opacity 0.4s cubic-bezier(0.23,1,0.32,1), transform 0.4s cubic-bezier(0.23,1,0.32,1)",
        textDecoration: "none",
      }}
    >
      {/* Tooltip label */}
      <span
        style={{
          backgroundColor: "#1a1a1a",
          color: "#fff",
          fontSize: "12px",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          letterSpacing: "0.05em",
          padding: "6px 12px",
          borderRadius: "8px",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(8px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          pointerEvents: "none",
          boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
        }}
      >
        Chat with us
      </span>

      {/* Button circle */}
      <div
        style={{
          position: "relative",
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: hovered
            ? "0 6px 28px rgba(37,211,102,0.55)"
            : "0 4px 18px rgba(37,211,102,0.4)",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.2s cubic-bezier(0.23,1,0.32,1), box-shadow 0.2s ease",
        }}
      >
        {/* Pulse ring */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid rgba(37,211,102,0.5)",
            animation: "wa-pulse 2.2s ease-out infinite",
          }}
        />
        {/* WhatsApp SVG icon */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2C8.268 2 2 8.268 2 16c0 2.478.668 4.8 1.832 6.8L2 30l7.4-1.8A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
            fill="white"
          />
          <path
            d="M23.5 19.9c-.3-.15-1.8-.9-2.08-1-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z"
            fill="#25D366"
          />
        </svg>
      </div>

      {/* Pulse keyframe injected inline */}
      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.7; }
          70% { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
      `}</style>
    </a>
  );
}
