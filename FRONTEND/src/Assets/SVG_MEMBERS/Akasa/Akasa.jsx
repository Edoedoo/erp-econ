import React, { useEffect, useRef, useState } from "react";
import "./akasa.css";

export default function Akasa({ message, size = 140 }) {
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
    <div className="akasa-wrapper">
      <div className="akasa-robot">

        <svg width={size} viewBox="0 0 160 140">

          <defs>
            <pattern id="batikPatternA" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="var(--akasa-accent)" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>
            <pattern id="paternHelmA" patternUnits="userSpaceOnUse" width="12" height="12">
              <rect width="12" height="12" fill="#ffffff" />
              <path d="M0 12 L12 0 M-6 12 L6 0 M6 12 L18 0"
                stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
              <circle cx="6" cy="6" r="1.5" fill="rgba(255,255,255,0.25)" />
            </pattern>

            <filter id="akasaShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.25)" />
            </filter>
          </defs>

          {/* HELM */}
          <rect x="22" y="20" width="116" height="92" rx="64"
            fill="url(#paternHelmA)" filter="url(#akasaShadow)" />
          <rect x="22" y="50" width="116" height="62" rx="34"
            fill="#ffffff"  />

          {/* EAR */}
          <rect x="18" y="65" width="10" height="28" rx="5" fill="var(--akasa-primary)" />
          <rect x="132" y="65" width="10" height="28" rx="5" fill="var(--akasa-primary)" />

          {/* HEADBAND */}
          <rect x="67" y="12" width="24" height="30" rx="12"
            fill="url(#batikPatternA)" />


          {/* FACE */}
          <rect x="40" y="53" width="80" height="52" rx="18" fill="var(--akasa-primary)" />
          <rect x="40" y="48" width="80" height="52"
            rx="18" fill="var(--akasa-primary)" opacity="0.06" />
            
          {/* EYES ONLY */}
          {blink ? (
            <>
              <line x1="58" y1="72" x2="80" y2="72" stroke="var(--akasa-accent)" strokeWidth="3" />
              <line x1="80" y1="72" x2="102" y2="72" stroke="var(--akasa-accent)" strokeWidth="3" />
            </>
          ) : (
            <>
              <g>
                <ellipse cx="68" cy="72" rx="9" ry="14" fill="var(--akasa-accent)" />
                <ellipse cx="68" cy="76" rx="6" ry="10" fill="rgba(0,0,0,0.25)" opacity="0.4" />
                <ellipse cx="66" cy="67" rx="2.2" ry="4.5" fill="#fff" />
                <circle cx="70" cy="70" r="1.2" fill="#fff" />
              </g>

              <g>
                <ellipse cx="92" cy="72" rx="9" ry="14" fill="var(--akasa-accent)" />
                <ellipse cx="92" cy="76" rx="6" ry="10" fill="rgba(0,0,0,0.25)" opacity="0.4" />
                <ellipse cx="90" cy="67" rx="2.2" ry="4.5" fill="#fff" />
                <circle cx="94" cy="70" r="1.2" fill="#fff" />
              </g>
            </>
          )}

          {/* MOUTH (simple smile line) */}
          <path
            d="M72 92 Q80 100 88 92"
            stroke="var(--akasa-accent)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

        </svg>
      </div>

      {text && (
        <div className="akasa-bubble">
          {text}
          <span className="akasa-cursor">|</span>
        </div>
      )}
    </div>
  );
}