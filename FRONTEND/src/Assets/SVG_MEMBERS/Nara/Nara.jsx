import React, { useEffect, useRef, useState } from "react";
import "./nara.css";

export default function Nara({ message, size = 140 }) {
  const [text, setText] = useState("");
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



  return (
    <div className="nara-wrapper">
      <svg width={size} viewBox="0 0 160 140">

      <defs>
        <pattern id="batikPatternN" patternUnits="userSpaceOnUse" width="12" height="12">
          <rect width="12" height="12" fill="var(--nara-accent)" />
          <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
            stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
          <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
        </pattern>
        <pattern id="paternHelmN" patternUnits="userSpaceOnUse" width="12" height="12">
          <rect width="12" height="12" fill="#ffffff" />
          <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
            stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
          <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
        </pattern>

        <filter id="naraShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.25)" />
        </filter>
      </defs>

      {/* HELM */}
      <rect x="22" y="20" width="116" height="92" rx="64"
        fill="url(#paternHelmN)" filter="url(#naraShadow)" />
      <rect x="22" y="50" width="116" height="62" rx="34"
        fill="#ffffff"  />

      {/* EAR */}
      <rect x="18" y="65" width="10" height="28" rx="5" fill="var(--nara-primary)" />
      <rect x="132" y="65" width="10" height="28" rx="5" fill="var(--nara-primary)" />

       {/* PITA (NO HEADBAND) */}
          <g>
            <path d="M60 32 Q45 18 35 32 Q45 48 60 32 Z"
              fill="url(#batikPatternN)" />
            <path d="M100 32 Q115 18 125 32 Q115 48 100 32 Z"
              fill="url(#batikPatternN)" />
            <circle cx="80" cy="32" r="6" fill="#ff4fb8" />
            <circle cx="78" cy="30" r="2" fill="#fff" opacity="0.8" />
          </g>

      {/* FACE */}
      <rect x="40" y="53" width="80" height="52" rx="18" fill="var(--nara-primary)" />
      <rect x="40" y="48" width="80" height="52"
        rx="18" fill="var(--nara-primary)" opacity="0.06" />
        
{/* EYES (perfect smooth semi-circle) */}
<>
  {/* LEFT */}
  <path
    d="M60 76 A8 8 0 0 1 76 76"
    stroke="var(--nara-accent)"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
  />

  {/* RIGHT */}
  <path
    d="M84 76 A8 8 0 0 1 100 76"
    stroke="var(--nara-accent)"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
  />
</>
{/* MOUTH (narrow, downward curve) */}
<path
  d="M72 92 Q80 100 88 92"
  stroke="var(--nara-accent)"
  strokeWidth="2"
  fill="none"
  strokeLinecap="round"
/>
      </svg>

      {text && (
        <div className="nara-bubble">
          {text}
          <span className="cursor">|</span>
        </div>
      )}
    </div>
  );
}
