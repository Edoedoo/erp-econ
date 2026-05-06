import React, { useEffect, useRef, useState } from "react";
import "./wira.css";

export default function Wira({ message, size = 140 }) {
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
    <div className="wira-wrapper">
      <div className="wira-robot">

        <svg width={size} viewBox="0 0 160 140">

          <defs>
            <pattern id="batikPatternW" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="var(--wira-accent)" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>
            <pattern id="paternHelmW" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="#ffffff" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>

            <filter id="wiraShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.25)" />
            </filter>
          </defs>

          {/* HELM */}
          <rect x="22" y="20" width="116" height="92" rx="64"
            fill="#0c2e89" filter="url(#wiraShadow)" />
          <rect x="22" y="50" width="116" height="62" rx="34"
            fill="#ffffff"  />

          {/* EAR */}
          <rect x="18" y="65" width="10" height="28" rx="5" fill="var(--wira-primary)" />
          <rect x="132" y="65" width="10" height="28" rx="5" fill="var(--wira-primary)" />

{/* HEADBAND → WIDE TOP TRIANGLE */}
<path
  d="M60 40 L80 10 L100 40 Z"
  fill="url(#batikPatternW)"
/>

          {/* FACE */}
          <rect x="40" y="53" width="80" height="52" rx="18" fill="var(--wira-primary)" />
          <rect x="40" y="48" width="80" height="52"
            rx="18" fill="var(--wira-primary)" opacity="0.06" />
            
{/* EYES ONLY (soft rectangular, downward) */}
{blink ? (
  <>
    <line x1="60" y1="74" x2="80" y2="74" stroke="var(--wira-accent)" strokeWidth="2.5" />
    <line x1="80" y1="74" x2="100" y2="74" stroke="var(--wira-accent)" strokeWidth="2.5" />
  </>
) : (
  <>
    {/* LEFT EYE */}
    <g>
      {/* main shape (kotak rounded) */}
      <rect
        x="62"
        y="66"
        width="12"
        height="16"
        rx="4"
        fill="var(--wira-accent)"
      />

      {/* shadow */}
      <rect
        x="63"
        y="70"
        width="10"
        height="10"
        rx="3"
        fill="rgba(0,0,0,0.25)"
        opacity="0.4"
      />

      {/* highlight */}
      <ellipse cx="65" cy="69" rx="1.5" ry="3" fill="#fff" />
    </g>

    {/* RIGHT EYE */}
    <g>
      <rect
        x="86"
        y="66"
        width="12"
        height="16"
        rx="4"
        fill="var(--wira-accent)"
      />

      <rect
        x="87"
        y="70"
        width="10"
        height="10"
        rx="3"
        fill="rgba(0,0,0,0.25)"
        opacity="0.4"
      />

      <ellipse cx="89" cy="69" rx="1.5" ry="3" fill="#fff" />
    </g>
  </>
)}


{/* MOUTH → FULL MASK (full face width) */}
<g>
  {/* main mask */}
  <path
    d="M50 88 
       Q80 90 110 88 
       L108 112 
       Q80 124 52 112 Z"
    fill="url(#batikPatternW)"
  />

  {/* straps (ikut keluar) */}
  <line
    x1="65"
    y1="92"
    x2="41"
    y2="88"
    stroke="url(#batikPatternW)"
    strokeWidth="2"
    strokeLinecap="round"
  />
  <line
    x1="110"
    y1="90"
    x2="119"
    y2="88"
    stroke="url(#batikPatternW)"
    strokeWidth="2"
    strokeLinecap="round"
  />
</g>

        </svg>
      </div>

      {text && (
        <div className="wira-bubble">
          {text}
          <span className="wira-cursor">|</span>
        </div>
      )}
    </div>
  );
}