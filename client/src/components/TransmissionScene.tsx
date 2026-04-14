/**
 * TransmissionScene — animated power transmission towers with flowing electricity
 * Full-width: towers anchored at x=0 (left edge) and x=1200 (right edge)
 * Used in the About page header bottom strip
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
            0%, 100% { opacity: 0; }
            50%       { opacity: 1; }
          }
          @keyframes ts-glow {
            0%, 100% { opacity: 0.2; }
            50%       { opacity: 0.75; }
          }
          .ts-f1 { stroke-dasharray: 22 328; animation: ts-flowRight 3s   linear infinite 0s;   }
          .ts-f2 { stroke-dasharray: 22 328; animation: ts-flowRight 3s   linear infinite 1s;   }
          .ts-f3 { stroke-dasharray: 22 328; animation: ts-flowRight 3s   linear infinite 2s;   }
          .ts-f4 { stroke-dasharray: 22 328; animation: ts-flowLeft  3.5s linear infinite 0.5s; }
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
        `}</style>

        {/* Steel tower gradient */}
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

      {/* ── TOWER 1 — anchored at left edge x=0, base at y=160 ── */}
      {/* Mast from y=10 to y=160, centred at x=30 */}
      <g transform="translate(30, 10)" opacity="0.88">
        <rect x="-2.5" y="0" width="5" height="150" fill="url(#ts-tg)" rx="1"/>
        {/* Top cross-arm */}
        <rect x="-32" y="8"  width="64" height="3"   fill="url(#ts-tg)" rx="1"/>
        <rect x="-23" y="20" width="46" height="2.5" fill="url(#ts-tg)" rx="1"/>
        {/* Diagonal braces */}
        <line x1="-32" y1="11"  x2="-2.5" y2="50" stroke="rgba(200,220,240,0.65)" strokeWidth="1.3"/>
        <line x1="32"  y1="11"  x2="2.5"  y2="50" stroke="rgba(200,220,240,0.65)" strokeWidth="1.3"/>
        <line x1="-23" y1="22"  x2="-2.5" y2="50" stroke="rgba(200,220,240,0.55)" strokeWidth="1"/>
        <line x1="23"  y1="22"  x2="2.5"  y2="50" stroke="rgba(200,220,240,0.55)" strokeWidth="1"/>
        {/* Mid arm */}
        <rect x="-18" y="62" width="36" height="2.5" fill="url(#ts-tg)" rx="1"/>
        <line x1="-18" y1="64" x2="-2.5" y2="98" stroke="rgba(200,220,240,0.5)" strokeWidth="1"/>
        <line x1="18"  y1="64" x2="2.5"  y2="98" stroke="rgba(200,220,240,0.5)" strokeWidth="1"/>
        {/* Base spread */}
        <line x1="-2.5" y1="138" x2="-12" y2="150" stroke="rgba(200,220,240,0.75)" strokeWidth="2"/>
        <line x1="2.5"  y1="138" x2="12"  y2="150" stroke="rgba(200,220,240,0.75)" strokeWidth="2"/>
        {/* Insulator stubs */}
        <line x1="-32" y1="11" x2="-32" y2="17" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
        <line x1="32"  y1="11" x2="32"  y2="17" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
      </g>

      {/* ── TOWER 2 — x=310 ── */}
      <g transform="translate(310, 20)" opacity="0.80">
        <rect x="-2" y="0" width="4.5" height="140" fill="url(#ts-tg)" rx="1"/>
        <rect x="-28" y="7"  width="56" height="2.8" fill="url(#ts-tg)" rx="1"/>
        <rect x="-20" y="18" width="40" height="2.2" fill="url(#ts-tg)" rx="1"/>
        <line x1="-28" y1="10" x2="-2" y2="44" stroke="rgba(200,220,240,0.60)" strokeWidth="1.2"/>
        <line x1="28"  y1="10" x2="2"  y2="44" stroke="rgba(200,220,240,0.60)" strokeWidth="1.2"/>
        <line x1="-20" y1="20" x2="-2" y2="44" stroke="rgba(200,220,240,0.50)" strokeWidth="1"/>
        <line x1="20"  y1="20" x2="2"  y2="44" stroke="rgba(200,220,240,0.50)" strokeWidth="1"/>
        <rect x="-15" y="56" width="30" height="2.2" fill="url(#ts-tg)" rx="1"/>
        <line x1="-2" y1="128" x2="-10" y2="140" stroke="rgba(200,220,240,0.72)" strokeWidth="1.8"/>
        <line x1="2"  y1="128" x2="10"  y2="140" stroke="rgba(200,220,240,0.72)" strokeWidth="1.8"/>
        <line x1="-28" y1="10" x2="-28" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
        <line x1="28"  y1="10" x2="28"  y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
      </g>

      {/* ── TOWER 3 — x=600 (centre) ── */}
      <g transform="translate(600, 18)" opacity="0.78">
        <rect x="-2" y="0" width="4.5" height="142" fill="url(#ts-tg)" rx="1"/>
        <rect x="-28" y="7"  width="56" height="2.8" fill="url(#ts-tg)" rx="1"/>
        <rect x="-20" y="18" width="40" height="2.2" fill="url(#ts-tg)" rx="1"/>
        <line x1="-28" y1="10" x2="-2" y2="44" stroke="rgba(200,220,240,0.58)" strokeWidth="1.2"/>
        <line x1="28"  y1="10" x2="2"  y2="44" stroke="rgba(200,220,240,0.58)" strokeWidth="1.2"/>
        <rect x="-15" y="56" width="30" height="2.2" fill="url(#ts-tg)" rx="1"/>
        <line x1="-2" y1="130" x2="-10" y2="142" stroke="rgba(200,220,240,0.72)" strokeWidth="1.8"/>
        <line x1="2"  y1="130" x2="10"  y2="142" stroke="rgba(200,220,240,0.72)" strokeWidth="1.8"/>
        <line x1="-28" y1="10" x2="-28" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
        <line x1="28"  y1="10" x2="28"  y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
      </g>

      {/* ── TOWER 4 — x=890 ── */}
      <g transform="translate(890, 22)" opacity="0.74">
        <rect x="-2" y="0" width="4.5" height="138" fill="url(#ts-tg)" rx="1"/>
        <rect x="-27" y="7"  width="54" height="2.8" fill="url(#ts-tg)" rx="1"/>
        <rect x="-19" y="18" width="38" height="2.2" fill="url(#ts-tg)" rx="1"/>
        <line x1="-27" y1="10" x2="-2" y2="43" stroke="rgba(200,220,240,0.55)" strokeWidth="1.2"/>
        <line x1="27"  y1="10" x2="2"  y2="43" stroke="rgba(200,220,240,0.55)" strokeWidth="1.2"/>
        <rect x="-15" y="55" width="30" height="2.2" fill="url(#ts-tg)" rx="1"/>
        <line x1="-2" y1="126" x2="-10" y2="138" stroke="rgba(200,220,240,0.70)" strokeWidth="1.8"/>
        <line x1="2"  y1="126" x2="10"  y2="138" stroke="rgba(200,220,240,0.70)" strokeWidth="1.8"/>
        <line x1="-27" y1="10" x2="-27" y2="15" stroke="rgba(255,255,255,0.38)" strokeWidth="1.2"/>
        <line x1="27"  y1="10" x2="27"  y2="15" stroke="rgba(255,255,255,0.38)" strokeWidth="1.2"/>
      </g>

      {/* ── TOWER 5 — anchored at right edge x=1200, centred at x=1170 ── */}
      <g transform="translate(1170, 14)" opacity="0.85">
        <rect x="-2.5" y="0" width="5" height="146" fill="url(#ts-tg)" rx="1"/>
        <rect x="-32" y="8"  width="64" height="3"   fill="url(#ts-tg)" rx="1"/>
        <rect x="-23" y="20" width="46" height="2.5" fill="url(#ts-tg)" rx="1"/>
        <line x1="-32" y1="11"  x2="-2.5" y2="48" stroke="rgba(200,220,240,0.65)" strokeWidth="1.3"/>
        <line x1="32"  y1="11"  x2="2.5"  y2="48" stroke="rgba(200,220,240,0.65)" strokeWidth="1.3"/>
        <line x1="-23" y1="22"  x2="-2.5" y2="48" stroke="rgba(200,220,240,0.55)" strokeWidth="1"/>
        <line x1="23"  y1="22"  x2="2.5"  y2="48" stroke="rgba(200,220,240,0.55)" strokeWidth="1"/>
        <rect x="-18" y="60" width="36" height="2.5" fill="url(#ts-tg)" rx="1"/>
        <line x1="-2.5" y1="134" x2="-12" y2="146" stroke="rgba(200,220,240,0.75)" strokeWidth="2"/>
        <line x1="2.5"  y1="134" x2="12"  y2="146" stroke="rgba(200,220,240,0.75)" strokeWidth="2"/>
        <line x1="-32" y1="11" x2="-32" y2="17" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
        <line x1="32"  y1="11" x2="32"  y2="17" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
      </g>

      {/* ── POWER LINES — catenary curves spanning full width ── */}
      {/* Span 1: Tower1(x=30) → Tower2(x=310) */}
      <path d="M-2,18   Q170,38  282,27"  fill="none" stroke="rgba(200,225,255,0.50)" strokeWidth="1.2"/>
      <path d="M30,26   Q170,48  310,36"  fill="none" stroke="rgba(200,225,255,0.50)" strokeWidth="1.2"/>
      <path d="M62,18   Q170,38  338,27"  fill="none" stroke="rgba(200,225,255,0.50)" strokeWidth="1.2"/>
      {/* Span 2: Tower2(x=310) → Tower3(x=600) */}
      <path d="M282,27  Q445,52  572,25"  fill="none" stroke="rgba(200,225,255,0.46)" strokeWidth="1.2"/>
      <path d="M310,36  Q455,62  600,34"  fill="none" stroke="rgba(200,225,255,0.46)" strokeWidth="1.2"/>
      <path d="M338,27  Q455,52  628,25"  fill="none" stroke="rgba(200,225,255,0.46)" strokeWidth="1.2"/>
      {/* Span 3: Tower3(x=600) → Tower4(x=890) */}
      <path d="M572,25  Q735,52  863,29"  fill="none" stroke="rgba(200,225,255,0.42)" strokeWidth="1.2"/>
      <path d="M600,34  Q745,62  890,38"  fill="none" stroke="rgba(200,225,255,0.42)" strokeWidth="1.2"/>
      <path d="M628,25  Q745,52  917,29"  fill="none" stroke="rgba(200,225,255,0.42)" strokeWidth="1.2"/>
      {/* Span 4: Tower4(x=890) → Tower5(x=1170) */}
      <path d="M863,29  Q1030,52 1138,22" fill="none" stroke="rgba(200,225,255,0.48)" strokeWidth="1.2"/>
      <path d="M890,38  Q1030,62 1170,30" fill="none" stroke="rgba(200,225,255,0.48)" strokeWidth="1.2"/>
      <path d="M917,29  Q1030,52 1202,22" fill="none" stroke="rgba(200,225,255,0.48)" strokeWidth="1.2"/>

      {/* ── ANIMATED ELECTRICITY FLOW ── */}
      <path className="ts-f1" d="M30,26  Q170,48  310,36"  fill="none" stroke="rgba(100,200,255,0.88)" strokeWidth="2"   filter="url(#ts-eg)"/>
      <path className="ts-f2" d="M310,36 Q455,62  600,34"  fill="none" stroke="rgba(100,200,255,0.88)" strokeWidth="2"   filter="url(#ts-eg)"/>
      <path className="ts-f3" d="M600,34 Q745,62  890,38"  fill="none" stroke="rgba(100,200,255,0.88)" strokeWidth="2"   filter="url(#ts-eg)"/>
      <path className="ts-f4" d="M890,38 Q1030,62 1170,30" fill="none" stroke="rgba(100,200,255,0.88)" strokeWidth="2"   filter="url(#ts-eg)"/>
      <path className="ts-f5" d="M-2,18  Q170,38  282,27"  fill="none" stroke="rgba(180,230,255,0.65)" strokeWidth="1.5" filter="url(#ts-eg)"/>

      {/* ── SPARK NODES ── */}
      <circle className="ts-s1" cx="30"   cy="26"  r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#ts-sg)"/>
      <circle className="ts-s2" cx="310"  cy="36"  r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#ts-sg)"/>
      <circle className="ts-s3" cx="600"  cy="34"  r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#ts-sg)"/>
      <circle className="ts-s4" cx="890"  cy="38"  r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#ts-sg)"/>
      <circle className="ts-s5" cx="1170" cy="30"  r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#ts-sg)"/>

      {/* ── GLOW HALOS ── */}
      <circle className="ts-g1" cx="30"   cy="18"  r="5" fill="none" stroke="rgba(100,200,255,0.35)" strokeWidth="1.5"/>
      <circle className="ts-g2" cx="310"  cy="27"  r="5" fill="none" stroke="rgba(100,200,255,0.35)" strokeWidth="1.5"/>
      <circle className="ts-g3" cx="600"  cy="25"  r="5" fill="none" stroke="rgba(100,200,255,0.35)" strokeWidth="1.5"/>
      <circle className="ts-g4" cx="1170" cy="22"  r="5" fill="none" stroke="rgba(100,200,255,0.35)" strokeWidth="1.5"/>
    </svg>
  );
}
