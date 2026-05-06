import React, { useEffect, useRef, useState } from "react";
import "./rudra.css";

export default function Rudra({ message, size = 140 }) {
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
    <div className="rudra-wrapper">
      <div className="rudra-robot">

        <svg width={size} viewBox="0 0 160 140">

          <defs>
            <pattern id="batikPatternR" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="var(--rudra-accent)" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>
            <pattern id="paternHelmR" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="#ffffff" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>

            <filter id="rudraShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.25)" />
            </filter>
          </defs>

          {/* HELM */}
          <rect x="22" y="20" width="116" height="92" rx="64"
            fill="url(#paternHelmR)" filter="url(#rudraShadow)" />
          <rect x="22" y="50" width="116" height="62" rx="34"
            fill="#ffffff"  />

          {/* EAR */}
          <rect x="18" y="65" width="10" height="28" rx="5" fill="var(--rudra-primary)" />
          <rect x="132" y="65" width="10" height="28" rx="5" fill="var(--rudra-primary)" />

{/* HEADBAND (triangle, point down) */}
<path
  d="M80 60 L64 20 L96 20 Z"
  fill="url(#batikPatternR)"
/>

          {/* FACE */}
          <rect x="40" y="53" width="80" height="52" rx="18" fill="var(--rudra-primary)" />
          <rect x="40" y="48" width="80" height="52"
            rx="18" fill="var(--rudra-primary)" opacity="0.06" />
            
{/* EYES ONLY */}
{blink ? (
  <>
    <line x1="60" y1="72" x2="80" y2="72" stroke="var(--rudra-accent)" strokeWidth="2" />
    <line x1="80" y1="72" x2="100" y2="72" stroke="var(--rudra-accent)" strokeWidth="2" />
  </>
) : (
  <>
    {/* LEFT EYE */}
    <g>
      <ellipse cx="68" cy="72" rx="6" ry="10" fill="var(--rudra-accent)" />
      <ellipse cx="68" cy="75" rx="4.5" ry="7" fill="rgba(0,0,0,0.25)" opacity="0.4" />
      <ellipse cx="66" cy="68" rx="1.8" ry="3.5" fill="#fff" />
      <circle cx="70" cy="70" r="1" fill="#fff" />
    </g>

    {/* RIGHT EYE */}
    <g>
      <ellipse cx="92" cy="72" rx="6" ry="10" fill="var(--rudra-accent)" />
      <ellipse cx="92" cy="75" rx="4.5" ry="7" fill="rgba(0,0,0,0.25)" opacity="0.4" />
      <ellipse cx="90" cy="68" rx="1.8" ry="3.5" fill="#fff" />
      <circle cx="94" cy="70" r="1" fill="#fff" />
    </g>

{/* EYEBROWS (sharp straight, tegas) */}
<line
  x1="60" y1="60"
  x2="76" y2="66"
  stroke="var(--rudra-accent)"
  strokeWidth="3"
  strokeLinecap="round"
/>

<line
  x1="100" y1="60"
  x2="84" y2="66"
  stroke="var(--rudra-accent)"
  strokeWidth="3"
  strokeLinecap="round"
/>
  </>
)}

{/* MOUTH (flat line) */}
<line
  x1="72"
  y1="92"
  x2="88"
  y2="92"
  stroke="var(--rudra-accent)"
  strokeWidth="2"
  strokeLinecap="round"
/>

        </svg>
      </div>

      {text && (
        <div className="rudra-bubble">
          {text}
          <span className="rudra-cursor">|</span>
        </div>
      )}
    </div>
  );
}