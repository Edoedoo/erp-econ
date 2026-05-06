import React, { useEffect, useRef, useState } from "react";
import "./bayu.css";

export default function Bayu({ message, size = 140 }) {
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
    <div className="bayu-wrapper">
      <div className="bayu-robot">

        <svg width={size} viewBox="0 0 160 140">

          <defs>
            <pattern id="batikPatternB" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="var(--bayu-accent)" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>
            <pattern id="paternHelmB" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="#ffffff" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>

            <filter id="bayuShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.25)" />
            </filter>
          </defs>

          {/* HELM */}
          <rect x="22" y="20" width="116" height="92" rx="64"
            fill="url(#paternHelmB)" filter="url(#bayuShadow)" />
          <rect x="22" y="50" width="116" height="62" rx="34"
            fill="#ffffff"  />

          {/* EAR */}
          <rect x="18" y="65" width="10" height="28" rx="5" fill="var(--bayu-primary)" />
          <rect x="132" y="65" width="10" height="28" rx="5" fill="var(--bayu-primary)" />

          {/* HEADBAND
          <rect x="67" y="12" width="24" height="30" rx="12"
            fill="url(#batikPatternB)" /> */}


          {/* FACE */}
          <rect x="40" y="53" width="80" height="52" rx="18" fill="var(--bayu-primary)" />
          <rect x="40" y="48" width="80" height="52"
            rx="18" fill="var(--bayu-primary)" opacity="0.06" />
            
          {/* EYES ONLY */}
          {blink ? (
            <>
              <line x1="58" y1="72" x2="80" y2="72" stroke="var(--bayu-accent)" strokeWidth="3" />
              <line x1="80" y1="72" x2="102" y2="72" stroke="var(--bayu-accent)" strokeWidth="3" />
            </>
          ) : (
            <>
{/* LEFT EYE */}
<g>
  <ellipse cx="68" cy="72" rx="6" ry="10" fill="var(--bayu-accent)" />
  <ellipse cx="68" cy="75" rx="4.5" ry="7" fill="rgba(0,0,0,0.25)" opacity="0.4" />
  <ellipse cx="66" cy="68" rx="1.6" ry="3.2" fill="#fff" />
  <circle cx="70" cy="70" r="0.9" fill="#fff" />
</g>

{/* RIGHT EYE */}
<g>
  <ellipse cx="92" cy="72" rx="6" ry="10" fill="var(--bayu-accent)" />
  <ellipse cx="92" cy="75" rx="4.5" ry="7" fill="rgba(0,0,0,0.25)" opacity="0.4" />
  <ellipse cx="90" cy="68" rx="1.6" ry="3.2" fill="#fff" />
  <circle cx="94" cy="70" r="0.9" fill="#fff" />
</g>
            </>
          )}

          {/* GLASSES */}
<g>
  {/* LEFT FRAME */}
  <circle
    cx="68"
    cy="72"
    r="12"
    stroke="var(--bayu-accent)"
    strokeWidth="2"
    fill="none"
  />

  {/* RIGHT FRAME */}
  <circle
    cx="92"
    cy="72"
    r="12"
    stroke="var(--bayu-accent)"
    strokeWidth="2"
    fill="none"
  />

  {/* BRIDGE */}
  <line
    x1="80"
    y1="72"
    x2="80"
    y2="72"
    stroke="var(--bayu-accent)"
    strokeWidth="2"
  />
{/* TOP FRAME ACCENT (lower & longer) */}
<line
  x1="42"
  y1="65"
  x2="65"
  y2="60"
  stroke="var(--bayu-accent)"
  strokeWidth="2"
  strokeLinecap="round"
/>

<line
  x1="95"
  y1="60"
  x2="118"
  y2="65"
  stroke="var(--bayu-accent)"
  strokeWidth="2"
  strokeLinecap="round"
/>
</g>

          {/* MOUTH (simple smile line) */}
          <path
            d="M72 92 Q80 100 88 92"
            stroke="var(--bayu-accent)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

        </svg>
      </div>

      {text && (
        <div className="bayu-bubble">
          {text}
          <span className="bayu-cursor">|</span>
        </div>
      )}
    </div>
  );
}