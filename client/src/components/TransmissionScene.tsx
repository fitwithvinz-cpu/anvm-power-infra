/**
 * TransmissionScene — animated power transmission towers with flowing electricity
 * 5 towers evenly spaced: x=60, 310, 600, 890, 1140
 * All wires and sparks stay within viewBox 0 0 1200 160
 */
export default function TransmissionScene() {
  return (
    <svg
      viewBox="0 0 1200 160"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <style>{`
          @keyframes ts-flowRight {
            0%   { stroke-dashoffset: 350; opacity: 0; }
            8%   { opacity: 1; }
            92%  { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }
          @keyframes ts-flowLeft {
            0%   { stroke-dashoffset: -350; opacity: 0; }
            8%   { opacity: 1; }
            92%  { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }
          @keyframes ts-spark {
            0%, 100% { opacity: 0; r: 2; }
            50%       { opacity: 1; r: 3.5; }
          }
          @keyframes ts-glow {
            0%, 100% { opacity: 0.15; }
            50%       { opacity: 0.6; }
          }
          .ts-f1 { stroke-dasharray: 22 328; animation: ts-flowRight 3s   linear infinite 0s;   }
          .ts-f2 { stroke-dasharray: 22 328; animation: ts-flowRight 3s   linear infinite 1s;   }
          .ts-f3 { stroke-dasharray: 22 328; animation: ts-flowRight 3s   linear infinite 2s;   }
          .ts-f4 { stroke-dasharray: 22 328; animation: ts-flowRight 3s   linear infinite 0.5s; }
          .ts-f5 { stroke-dasharray: 22 328; animation: ts-flowLeft  3.5s linear infinite 1.5s; }
          .ts-s1 { animation: ts-spark 2s   ease-in-out infinite 0.3s; }
          .ts-s2 { animation: ts-spark 2s   ease-in-out infinite 1.1s; }
          .ts-s3 { animation: ts-spark 2s   ease-in-out infinite 1.8s; }
          .ts-s4 { animation: ts-spark 2.5s ease-in-out infinite 0.7s; }
          .ts-s5 { animation: ts-spark 2s   ease-in-out infinite 1.4s; }
          .ts-g1 { animation: ts-glow  2s   ease-in-out infinite 0s;   }
          .ts-g2 { animation: ts-glow  2s   ease-in-out infinite 0.7s; }
          .ts-g3 { animation: ts-glow  2s   ease-in-out infinite 1.4s; }
          .ts-g4 { animation: ts-glow  2s   ease-in-out infinite 2.1s; }
          .ts-g5 { animation: ts-glow  2s   ease-in-out infinite 1.0s; }
        `}</style>

        <linearGradient id="ts-tg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(170,195,220,0.60)" />
          <stop offset="50%"  stopColor="rgba(215,232,248,0.85)" />
          <stop offset="100%" stopColor="rgba(170,195,220,0.60)" />
        </linearGradient>
        <filter id="ts-eg">
          <feGaussianBlur stdDeviation="1.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="ts-sg">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── TOWER 1 — centred at x=60 ── */}
      <g transform="translate(60, 10)" opacity="0.88">
        <rect x="-2.5" y="0" width="5" height="150" fill="url(#ts-tg)" rx="1"/>
        <rect x="-28" y="8"  width="56" height="3"   fill="url(#ts-tg)" rx="1"/>
        <rect x="-20" y="20" width="40" height="2.5" fill="url(#ts-tg)" rx="1"/>
        <line x1="-28" y1="11" x2="-2.5" y2="48" stroke="rgba(200,220,240,0.65)" strokeWidth="1.3"/>
        <line x1="28"  y1="11" x2="2.5"  y2="48" stroke="rgba(200,220,240,0.65)" strokeWidth="1.3"/>
        <line x1="-20" y1="22" x2="-2.5" y2="48" stroke="rgba(200,220,240,0.55)" strokeWidth="1"/>
        <line x1="20"  y1="22" x2="2.5"  y2="48" stroke="rgba(200,220,240,0.55)" strokeWidth="1"/>
        <rect x="-16" y="62" width="32" height="2.5" fill="url(#ts-tg)" rx="1"/>
        <line x1="-2.5" y1="138" x2="-12" y2="150" stroke="rgba(200,220,240,0.75)" strokeWidth="2"/>
        <line x1="2.5"  y1="138" x2="12"  y2="150" stroke="rgba(200,220,240,0.75)" strokeWidth="2"/>
        <line x1="-28" y1="11" x2="-28" y2="17" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
        <line x1="28"  y1="11" x2="28"  y2="17" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
      </g>

      {/* ── TOWER 2 — centred at x=310 ── */}
      <g transform="translate(310, 18)" opacity="0.80">
        <rect x="-2" y="0" width="4.5" height="142" fill="url(#ts-tg)" rx="1"/>
        <rect x="-26" y="7"  width="52" height="2.8" fill="url(#ts-tg)" rx="1"/>
        <rect x="-18" y="18" width="36" height="2.2" fill="url(#ts-tg)" rx="1"/>
        <line x1="-26" y1="10" x2="-2" y2="44" stroke="rgba(200,220,240,0.60)" strokeWidth="1.2"/>
        <line x1="26"  y1="10" x2="2"  y2="44" stroke="rgba(200,220,240,0.60)" strokeWidth="1.2"/>
        <line x1="-18" y1="20" x2="-2" y2="44" stroke="rgba(200,220,240,0.50)" strokeWidth="1"/>
        <line x1="18"  y1="20" x2="2"  y2="44" stroke="rgba(200,220,240,0.50)" strokeWidth="1"/>
        <rect x="-14" y="56" width="28" height="2.2" fill="url(#ts-tg)" rx="1"/>
        <line x1="-2" y1="130" x2="-10" y2="142" stroke="rgba(200,220,240,0.72)" strokeWidth="1.8"/>
        <line x1="2"  y1="130" x2="10"  y2="142" stroke="rgba(200,220,240,0.72)" strokeWidth="1.8"/>
        <line x1="-26" y1="10" x2="-26" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
        <line x1="26"  y1="10" x2="26"  y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
      </g>

      {/* ── TOWER 3 — centred at x=600 ── */}
      <g transform="translate(600, 16)" opacity="0.78">
        <rect x="-2" y="0" width="4.5" height="144" fill="url(#ts-tg)" rx="1"/>
        <rect x="-26" y="7"  width="52" height="2.8" fill="url(#ts-tg)" rx="1"/>
        <rect x="-18" y="18" width="36" height="2.2" fill="url(#ts-tg)" rx="1"/>
        <line x1="-26" y1="10" x2="-2" y2="44" stroke="rgba(200,220,240,0.58)" strokeWidth="1.2"/>
        <line x1="26"  y1="10" x2="2"  y2="44" stroke="rgba(200,220,240,0.58)" strokeWidth="1.2"/>
        <rect x="-14" y="56" width="28" height="2.2" fill="url(#ts-tg)" rx="1"/>
        <line x1="-2" y1="132" x2="-10" y2="144" stroke="rgba(200,220,240,0.72)" strokeWidth="1.8"/>
        <line x1="2"  y1="132" x2="10"  y2="144" stroke="rgba(200,220,240,0.72)" strokeWidth="1.8"/>
        <line x1="-26" y1="10" x2="-26" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
        <line x1="26"  y1="10" x2="26"  y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
      </g>

      {/* ── TOWER 4 — centred at x=890 ── */}
      <g transform="translate(890, 20)" opacity="0.74">
        <rect x="-2" y="0" width="4.5" height="140" fill="url(#ts-tg)" rx="1"/>
        <rect x="-26" y="7"  width="52" height="2.8" fill="url(#ts-tg)" rx="1"/>
        <rect x="-18" y="18" width="36" height="2.2" fill="url(#ts-tg)" rx="1"/>
        <line x1="-26" y1="10" x2="-2" y2="43" stroke="rgba(200,220,240,0.55)" strokeWidth="1.2"/>
        <line x1="26"  y1="10" x2="2"  y2="43" stroke="rgba(200,220,240,0.55)" strokeWidth="1.2"/>
        <rect x="-14" y="55" width="28" height="2.2" fill="url(#ts-tg)" rx="1"/>
        <line x1="-2" y1="128" x2="-10" y2="140" stroke="rgba(200,220,240,0.70)" strokeWidth="1.8"/>
        <line x1="2"  y1="128" x2="10"  y2="140" stroke="rgba(200,220,240,0.70)" strokeWidth="1.8"/>
        <line x1="-26" y1="10" x2="-26" y2="15" stroke="rgba(255,255,255,0.38)" strokeWidth="1.2"/>
        <line x1="26"  y1="10" x2="26"  y2="15" stroke="rgba(255,255,255,0.38)" strokeWidth="1.2"/>
      </g>

      {/* ── TOWER 5 — centred at x=1140 ── */}
      <g transform="translate(1140, 12)" opacity="0.85">
        <rect x="-2.5" y="0" width="5" height="148" fill="url(#ts-tg)" rx="1"/>
        <rect x="-28" y="8"  width="56" height="3"   fill="url(#ts-tg)" rx="1"/>
        <rect x="-20" y="20" width="40" height="2.5" fill="url(#ts-tg)" rx="1"/>
        <line x1="-28" y1="11" x2="-2.5" y2="48" stroke="rgba(200,220,240,0.65)" strokeWidth="1.3"/>
        <line x1="28"  y1="11" x2="2.5"  y2="48" stroke="rgba(200,220,240,0.65)" strokeWidth="1.3"/>
        <line x1="-20" y1="22" x2="-2.5" y2="48" stroke="rgba(200,220,240,0.55)" strokeWidth="1"/>
        <line x1="20"  y1="22" x2="2.5"  y2="48" stroke="rgba(200,220,240,0.55)" strokeWidth="1"/>
        <rect x="-16" y="62" width="32" height="2.5" fill="url(#ts-tg)" rx="1"/>
        <line x1="-2.5" y1="136" x2="-12" y2="148" stroke="rgba(200,220,240,0.75)" strokeWidth="2"/>
        <line x1="2.5"  y1="136" x2="12"  y2="148" stroke="rgba(200,220,240,0.75)" strokeWidth="2"/>
        <line x1="-28" y1="11" x2="-28" y2="17" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
        <line x1="28"  y1="11" x2="28"  y2="17" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
      </g>

      {/* ── POWER LINES — catenary curves ── */}
      {/* Span 1: T1(60) → T2(310) */}
      <path d="M32,19  Q185,40 284,25"  fill="none" stroke="rgba(200,225,255,0.50)" strokeWidth="1.2"/>
      <path d="M60,28  Q185,50 310,36"  fill="none" stroke="rgba(200,225,255,0.50)" strokeWidth="1.2"/>
      <path d="M88,19  Q185,40 336,25"  fill="none" stroke="rgba(200,225,255,0.50)" strokeWidth="1.2"/>
      {/* Span 2: T2(310) → T3(600) */}
      <path d="M284,25 Q447,52 574,23"  fill="none" stroke="rgba(200,225,255,0.46)" strokeWidth="1.2"/>
      <path d="M310,36 Q455,62 600,32"  fill="none" stroke="rgba(200,225,255,0.46)" strokeWidth="1.2"/>
      <path d="M336,25 Q447,52 626,23"  fill="none" stroke="rgba(200,225,255,0.46)" strokeWidth="1.2"/>
      {/* Span 3: T3(600) → T4(890) */}
      <path d="M574,23 Q735,52 864,27"  fill="none" stroke="rgba(200,225,255,0.42)" strokeWidth="1.2"/>
      <path d="M600,32 Q745,62 890,38"  fill="none" stroke="rgba(200,225,255,0.42)" strokeWidth="1.2"/>
      <path d="M626,23 Q745,52 916,27"  fill="none" stroke="rgba(200,225,255,0.42)" strokeWidth="1.2"/>
      {/* Span 4: T4(890) → T5(1140) */}
      <path d="M864,27 Q1015,52 1112,20" fill="none" stroke="rgba(200,225,255,0.48)" strokeWidth="1.2"/>
      <path d="M890,38 Q1015,62 1140,28" fill="none" stroke="rgba(200,225,255,0.48)" strokeWidth="1.2"/>
      <path d="M916,27 Q1015,52 1168,20" fill="none" stroke="rgba(200,225,255,0.48)" strokeWidth="1.2"/>

      {/* ── ANIMATED ELECTRICITY FLOW ── */}
      <path className="ts-f1" d="M60,28  Q185,50 310,36"  fill="none" stroke="rgba(100,200,255,0.88)" strokeWidth="2" filter="url(#ts-eg)"/>
      <path className="ts-f2" d="M310,36 Q455,62 600,32"  fill="none" stroke="rgba(100,200,255,0.88)" strokeWidth="2" filter="url(#ts-eg)"/>
      <path className="ts-f3" d="M600,32 Q745,62 890,38"  fill="none" stroke="rgba(100,200,255,0.88)" strokeWidth="2" filter="url(#ts-eg)"/>
      <path className="ts-f4" d="M890,38 Q1015,62 1140,28" fill="none" stroke="rgba(100,200,255,0.88)" strokeWidth="2" filter="url(#ts-eg)"/>
      <path className="ts-f5" d="M310,36 Q185,50 60,28"   fill="none" stroke="rgba(180,230,255,0.65)" strokeWidth="1.5" filter="url(#ts-eg)"/>

      {/* ── SPARK NODES at each tower insulator ── */}
      <circle className="ts-s1" cx="60"   cy="28"  r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#ts-sg)"/>
      <circle className="ts-s2" cx="310"  cy="36"  r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#ts-sg)"/>
      <circle className="ts-s3" cx="600"  cy="32"  r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#ts-sg)"/>
      <circle className="ts-s4" cx="890"  cy="38"  r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#ts-sg)"/>
      <circle className="ts-s5" cx="1140" cy="28"  r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#ts-sg)"/>

      {/* ── GLOW HALOS at tower tops ── */}
      <circle className="ts-g1" cx="60"   cy="20"  r="5" fill="none" stroke="rgba(100,200,255,0.35)" strokeWidth="1.5"/>
      <circle className="ts-g2" cx="310"  cy="25"  r="5" fill="none" stroke="rgba(100,200,255,0.35)" strokeWidth="1.5"/>
      <circle className="ts-g3" cx="600"  cy="23"  r="5" fill="none" stroke="rgba(100,200,255,0.35)" strokeWidth="1.5"/>
      <circle className="ts-g4" cx="890"  cy="27"  r="5" fill="none" stroke="rgba(100,200,255,0.35)" strokeWidth="1.5"/>
      <circle className="ts-g5" cx="1140" cy="20"  r="5" fill="none" stroke="rgba(100,200,255,0.35)" strokeWidth="1.5"/>
    </svg>
  );
}
