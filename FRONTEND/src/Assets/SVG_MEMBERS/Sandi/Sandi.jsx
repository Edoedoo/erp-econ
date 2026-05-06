import React, { useEffect, useRef, useState } from "react";
import "./sandi.css";

export default function Sandi({ message, size = 140 }) {
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
    <div className="sandi-wrapper">
      <div className="sandi-robot">

        <svg width={size} viewBox="0 0 160 140">

          <defs>
            <pattern id="batikPatternSa" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="var(--sandi-accent)" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>
            <pattern id="paternHelmSa" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="#ffffff" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>

            <filter id="sandiShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.25)" />
            </filter>
          </defs>

          {/* HELM */}
          <rect x="22" y="20" width="116" height="92" rx="64"
            fill="url(#paternHelmSa)" filter="url(#sandiShadow)" />
          <rect x="22" y="50" width="116" height="62" rx="34"
            fill="#ffffff"  />

          {/* EAR */}
          <rect x="18" y="65" width="10" height="28" rx="5" fill="var(--sandi-primary)" />
          <rect x="132" y="65" width="10" height="28" rx="5" fill="var(--sandi-primary)" />

          {/* HEADBAND */}
          <rect x="37" y="25" width="85" height="20" rx="12"
            fill="url(#batikPatternSa)" />


          {/* FACE */}
          <rect x="40" y="53" width="80" height="52" rx="18" fill="var(--sandi-primary)" />
          <rect x="40" y="48" width="80" height="52"
            rx="18" fill="var(--sandi-primary)" opacity="0.06" />
            
{/* EYES ONLY (square, bigger) */}
{blink ? (
  <>
    <line x1="58" y1="76" x2="80" y2="76" stroke="var(--sandi-accent)" strokeWidth="2.5" />
    <line x1="80" y1="76" x2="102" y2="76" stroke="var(--sandi-accent)" strokeWidth="2.5" />
  </>
) : (
  <>
    {/* LEFT EYE */}
    <g>
      <rect
        x="60"
        y="64"
        width="16"
        height="20"
        rx="3.5"
        fill="var(--sandi-accent)"
      />
      <rect
        x="62"
        y="70"
        width="12"
        height="12"
        rx="3"
        fill="rgba(0,0,0,0.25)"
        opacity="0.4"
      />
      <ellipse cx="65" cy="68" rx="1.8" ry="3.5" fill="#fff" />
    </g>

    {/* RIGHT EYE */}
    <g>
      <rect
        x="84"
        y="64"
        width="16"
        height="20"
        rx="3.5"
        fill="var(--sandi-accent)"
      />
      <rect
        x="86"
        y="70"
        width="12"
        height="12"
        rx="3"
        fill="rgba(0,0,0,0.25)"
        opacity="0.4"
      />
      <ellipse cx="89" cy="68" rx="1.8" ry="3.5" fill="#fff" />
    </g>
  </>
)}

{/* MOUTH (straight line) */}
<line
  x1="72"
  y1="96"
  x2="88"
  y2="96"
  stroke="var(--sandi-accent)"
  strokeWidth="4"
  strokeLinecap="round"
/>

        </svg>
      </div>

      {text && (
        <div className="sandi-bubble">
          {text}
          <span className="sandi-cursor">|</span>
        </div>
      )}
    </div>
  );
}