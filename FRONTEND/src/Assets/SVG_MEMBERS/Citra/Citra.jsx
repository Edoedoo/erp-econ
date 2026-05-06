import React, { useEffect, useRef, useState } from "react";
import "./citra.css";

export default function Citra({ message, size = 140 }) {
  const [text, setText] = useState("");
  const [blink, setBlink] = useState(false);
  const typingRef = useRef(null);

  const finalMessage = String(message ?? "");

  // typing (hanya untuk bubble, tidak ngaruh ke wajah)
  useEffect(() => {
    let i = 0;
    setText("");

    if (typingRef.current) clearTimeout(typingRef.current);

    const type = () => {
      const char = finalMessage[i] || "";
      setText((prev) => prev + char);
      i++;

      if (i < finalMessage.length) {
        const delay = char === " " ? 50 : char === "." ? 180 : 22;
        typingRef.current = setTimeout(type, delay);
      }
    };

    type();

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [finalMessage]);

  // blink (SATU-SATUNYA ANIMASI)
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 120);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="citra-wrapper">
      <div className="citra-robot">

        <svg width={size} viewBox="0 0 160 140">

          <defs>
            <pattern id="batikPatternC" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="var(--citra-accent)" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>
            <pattern id="paternHelmC" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="#d4ace5" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>

            <filter id="citraShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.25)" />
            </filter>
          </defs>

          {/* HELM */}
          <rect x="22" y="20" width="116" height="92" rx="64"
            fill="url(#paternHelmC)" filter="url(#citraShadow)" />
          <rect x="22" y="50" width="116" height="62" rx="34"
            fill="#ffffff"  />

          {/* EAR */}
          <rect x="18" y="65" width="10" height="28" rx="5" fill="var(--citra-primary)" />
          <rect x="132" y="65" width="10" height="28" rx="5" fill="var(--citra-primary)" />

{/* HEADBAND → BIGGER RIBBON WITH FOLDS */}
<g>
  {/* knot (tengah) */}
  <circle cx="79" cy="22" r="5" fill="var(--citra-accent)" />

  {/* LEFT BOW (lebih besar) */}
  <path
    d="M79 22
       C55 10, 48 30, 65 38
       C70 32, 74 27, 79 22 Z"
    fill="var(--citra-accent)"
  />

  {/* LEFT FOLD (lebih jelas) */}
  <path
    d="M63 24 C58 22, 56 30, 62 35"
    fill="none"
    stroke="rgba(0,0,0,0.3)"
    strokeWidth="2.5"
    strokeLinecap="round"
  />

  {/* RIGHT BOW (lebih besar) */}
  <path
    d="M79 22
       C103 10, 110 30, 93 38
       C88 32, 84 27, 79 22 Z"
    fill="var(--citra-accent)"
  />

  {/* RIGHT FOLD */}
  <path
    d="M95 24 C100 22, 102 30, 96 35"
    fill="none"
    stroke="rgba(0,0,0,0.3)"
    strokeWidth="2.5"
    strokeLinecap="round"
  />

  {/* CENTER WRAP (lebih tebal) */}
  <rect
    x="73"
    y="18"
    width="12"
    height="8"
    rx="3"
    fill="rgba(255,255,255,0.18)"
  />
</g>


          {/* FACE */}
          <rect x="40" y="53" width="80" height="52" rx="18" fill="var(--citra-primary)" />
          <rect x="40" y="48" width="80" height="52"
            rx="18" fill="var(--citra-primary)" opacity="0.06" />
            
{/* EYES ONLY (smaller) */}
{blink ? (
  <>
    <line x1="60" y1="72" x2="78" y2="72" stroke="var(--citra-accent)" strokeWidth="2.5" />
    <line x1="82" y1="72" x2="100" y2="72" stroke="var(--citra-accent)" strokeWidth="2.5" />
  </>
) : (
  <>
    <g>
      <ellipse cx="68" cy="72" rx="6" ry="10" fill="var(--citra-accent)" />
      <ellipse cx="68" cy="75" rx="4" ry="7" fill="rgba(0,0,0,0.25)" opacity="0.4" />
      <ellipse cx="66.5" cy="68.5" rx="1.6" ry="3.2" fill="#fff" />
      <circle cx="69.5" cy="70" r="0.9" fill="#fff" />
    </g>

    <g>
      <ellipse cx="92" cy="72" rx="6" ry="10" fill="var(--citra-accent)" />
      <ellipse cx="92" cy="75" rx="4" ry="7" fill="rgba(0,0,0,0.25)" opacity="0.4" />
      <ellipse cx="90.5" cy="68.5" rx="1.6" ry="3.2" fill="#fff" />
      <circle cx="93.5" cy="70" r="0.9" fill="#fff" />
    </g>
  </>
)}

          {/* MOUTH (simple smile line) */}
          <path
            d="M72 92 Q80 100 88 92"
            stroke="var(--citra-accent)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

        </svg>
      </div>

      {text && (
        <div className="citra-bubble">
          {text}
          <span className="citra-cursor">|</span>
        </div>
      )}
    </div>
  );
}