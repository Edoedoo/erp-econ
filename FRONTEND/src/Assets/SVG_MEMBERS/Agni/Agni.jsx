import React, { useEffect, useRef, useState } from "react";
import "./agni.css";

export default function Agni({ message, size = 140 }) {
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
    <div className="agni-wrapper">
      <div className="agni-robot">

        <svg width={size} viewBox="0 0 160 140">

          <defs>
            <pattern id="batikPatternAg" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="var(--agni-accent)" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>
            <pattern id="paternHelmAg" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="#ffffff" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>

            <filter id="agniShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.25)" />
            </filter>
          </defs>

          {/* HELM */}
          <rect x="22" y="20" width="116" height="92" rx="64"
            fill="url(#paternHelmAg)" filter="url(#agniShadow)" />
          <rect x="22" y="50" width="116" height="62" rx="34"
            fill="#ffffff"  />

          {/* EAR */}
          <rect x="18" y="65" width="10" height="28" rx="5" fill="var(--agni-primary)" />
          <rect x="132" y="65" width="10" height="28" rx="5" fill="var(--agni-primary)" />

{/* HEADBAND → ANTENNA (lower position) */}
<g>
  {/* left antenna */}
  <path
    d="M74 26 Q72 16 71 8"
    fill="none"
    stroke="var(--agni-accent)"
    strokeWidth="2"
    strokeLinecap="round"
  />
  <circle cx="71" cy="8" r="2.5" fill="var(--agni-accent)" />

  {/* right antenna */}
  <path
    d="M84 26 Q86 16 87 8"
    fill="none"
    stroke="var(--agni-accent)"
    strokeWidth="2"
    strokeLinecap="round"
  />
  <circle cx="87" cy="8" r="2.5" fill="var(--agni-accent)" />
</g>

          {/* FACE */}
          <rect x="40" y="53" width="80" height="52" rx="18" fill="var(--agni-primary)" />
          <rect x="40" y="48" width="80" height="52"
            rx="18" fill="var(--agni-primary)" opacity="0.06" />
            
{/* EYES + EYEBROWS (smaller + expressive) */}
{blink ? (
  <>
    {/* closed eyes */}
    <line x1="60" y1="72" x2="78" y2="72" stroke="var(--agni-accent)" strokeWidth="2.5" />
    <line x1="82" y1="72" x2="100" y2="72" stroke="var(--agni-accent)" strokeWidth="2.5" />

    {/* eyebrows */}
    <path d="M60 62 Q68 58 76 62" fill="none" stroke="var(--agni-accent)" strokeWidth="2" strokeLinecap="round" />
    <path d="M84 62 Q92 58 100 62" fill="none" stroke="var(--agni-accent)" strokeWidth="2" strokeLinecap="round" />
  </>
) : (
  <>
    {/* LEFT EYE */}
    <g>
      <ellipse cx="68" cy="72" rx="6" ry="10" fill="var(--agni-accent)" />
      <ellipse cx="68" cy="75" rx="4" ry="7" fill="rgba(0,0,0,0.25)" opacity="0.4" />
      <ellipse cx="66.5" cy="68.5" rx="1.6" ry="3.2" fill="#fff" />
      <circle cx="69.5" cy="70" r="0.9" fill="#fff" />
    </g>

    {/* RIGHT EYE */}
    <g>
      <ellipse cx="92" cy="72" rx="6" ry="10" fill="var(--agni-accent)" />
      <ellipse cx="92" cy="75" rx="4" ry="7" fill="rgba(0,0,0,0.25)" opacity="0.4" />
      <ellipse cx="90.5" cy="68.5" rx="1.6" ry="3.2" fill="#fff" />
      <circle cx="93.5" cy="70" r="0.9" fill="#fff" />
    </g>

    {/* EYEBROWS */}
    <path
      d="M60 62 Q68 56 76 62"
      fill="none"
      stroke="var(--agni-accent)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M84 62 Q92 56 100 62"
      fill="none"
      stroke="var(--agni-accent)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </>
)}

{/* MOUTH (open cute) */}
<g>
  {/* outer mouth */}
  <ellipse
    cx="80"
    cy="95"
    rx="6"
    ry="4"
    fill="var(--agni-accent)"
  />

  {/* inner shadow (depth) */}
  <ellipse
    cx="80"
    cy="96"
    rx="4"
    ry="2.5"
    fill="rgba(0,0,0,0.25)"
    opacity="0.4"
  />

  {/* highlight (optional biar glossy lucu) */}
  <ellipse
    cx="78"
    cy="93.5"
    rx="1.2"
    ry="0.8"
    fill="#fff"
    opacity="0.7"
  />
</g>

        </svg>
      </div>

      {text && (
        <div className="agni-bubble">
          {text}
          <span className="agni-cursor">|</span>
        </div>
      )}
    </div>
  );
}