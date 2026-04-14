/**
 * TransmissionScene — animated power transmission towers with flowing electricity
 * Used in the About page header — smaller, elegant towers as a decorative overlay
 */
export default function TransmissionScene() {
  return (
    <svg
      viewBox="0 0 1200 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <style>{`
          @keyframes flowRight {
            0% { stroke-dashoffset: 300; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }
          @keyframes flowLeft {
            0% { stroke-dashoffset: -300; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }
          @keyframes spark {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
          @keyframes glow {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.7; }
          }
          .ts-flow1 { stroke-dasharray: 20 280; animation: flowRight 3s linear infinite; }
          .ts-flow2 { stroke-dasharray: 20 280; animation: flowRight 3s linear infinite 1s; }
          .ts-flow3 { stroke-dasharray: 20 280; animation: flowRight 3s linear infinite 2s; }
          .ts-flow4 { stroke-dasharray: 20 280; animation: flowLeft 3.5s linear infinite 0.5s; }
          .ts-flow5 { stroke-dasharray: 20 280; animation: flowLeft 3.5s linear infinite 1.5s; }
          .ts-spark1 { animation: spark 2s ease-in-out infinite 0.3s; }
          .ts-spark2 { animation: spark 2s ease-in-out infinite 1.1s; }
          .ts-spark3 { animation: spark 2s ease-in-out infinite 1.8s; }
          .ts-spark4 { animation: spark 2.5s ease-in-out infinite 0.7s; }
          .ts-glow1  { animation: glow 2s ease-in-out infinite; }
          .ts-glow2  { animation: glow 2s ease-in-out infinite 0.7s; }
          .ts-glow3  { animation: glow 2s ease-in-out infinite 1.4s; }
        `}</style>

        <linearGradient id="tg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(180,200,220,0.65)" />
          <stop offset="50%"  stopColor="rgba(220,235,250,0.85)" />
          <stop offset="100%" stopColor="rgba(180,200,220,0.65)" />
        </linearGradient>

        <filter id="eGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="sGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── TOWER 1 — left foreground, height 145 ── */}
      <g transform="translate(120, 155)" opacity="0.85">
        <rect x="-2.5" y="0" width="5" height="145" fill="url(#tg)" rx="1"/>
        <rect x="-33" y="9"  width="66" height="3"   fill="url(#tg)" rx="1"/>
        <rect x="-24" y="21" width="48" height="2.5" fill="url(#tg)" rx="1"/>
        <line x1="-33" y1="12" x2="-2.5" y2="48" stroke="rgba(200,220,240,0.65)" strokeWidth="1.4"/>
        <line x1="33"  y1="12" x2="2.5"  y2="48" stroke="rgba(200,220,240,0.65)" strokeWidth="1.4"/>
        <line x1="-24" y1="23" x2="-2.5" y2="48" stroke="rgba(200,220,240,0.55)" strokeWidth="1.1"/>
        <line x1="24"  y1="23" x2="2.5"  y2="48" stroke="rgba(200,220,240,0.55)" strokeWidth="1.1"/>
        <rect x="-21" y="60" width="42" height="2.5" fill="url(#tg)" rx="1"/>
        <line x1="-21" y1="62" x2="-2.5" y2="96" stroke="rgba(200,220,240,0.5)" strokeWidth="1.1"/>
        <line x1="21"  y1="62" x2="2.5"  y2="96" stroke="rgba(200,220,240,0.5)" strokeWidth="1.1"/>
        <line x1="-2.5" y1="132" x2="-12" y2="145" stroke="rgba(200,220,240,0.75)" strokeWidth="2"/>
        <line x1="2.5"  y1="132" x2="12"  y2="145" stroke="rgba(200,220,240,0.75)" strokeWidth="2"/>
        <line x1="-33" y1="12" x2="-33" y2="18" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
        <line x1="33"  y1="12" x2="33"  y2="18" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
      </g>

      {/* ── TOWER 2 — centre, height 120 ── */}
      <g transform="translate(450, 180)" opacity="0.78">
        <rect x="-2" y="0" width="4.5" height="120" fill="url(#tg)" rx="1"/>
        <rect x="-29" y="7"  width="58" height="2.8" fill="url(#tg)" rx="1"/>
        <rect x="-21" y="18" width="42" height="2.2" fill="url(#tg)" rx="1"/>
        <line x1="-29" y1="10" x2="-2" y2="42" stroke="rgba(200,220,240,0.6)" strokeWidth="1.2"/>
        <line x1="29"  y1="10" x2="2"  y2="42" stroke="rgba(200,220,240,0.6)" strokeWidth="1.2"/>
        <line x1="-21" y1="20" x2="-2" y2="42" stroke="rgba(200,220,240,0.5)" strokeWidth="1"/>
        <line x1="21"  y1="20" x2="2"  y2="42" stroke="rgba(200,220,240,0.5)" strokeWidth="1"/>
        <rect x="-17" y="54" width="34" height="2.2" fill="url(#tg)" rx="1"/>
        <line x1="-2" y1="111" x2="-10" y2="120" stroke="rgba(200,220,240,0.75)" strokeWidth="1.8"/>
        <line x1="2"  y1="111" x2="10"  y2="120" stroke="rgba(200,220,240,0.75)" strokeWidth="1.8"/>
        <line x1="-29" y1="10" x2="-29" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
        <line x1="29"  y1="10" x2="29"  y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
      </g>

      {/* ── TOWER 3 — right, height 126 ── */}
      <g transform="translate(800, 174)" opacity="0.72">
        <rect x="-2" y="0" width="4.5" height="126" fill="url(#tg)" rx="1"/>
        <rect x="-30" y="8"  width="60" height="2.8" fill="url(#tg)" rx="1"/>
        <rect x="-22" y="19" width="44" height="2.2" fill="url(#tg)" rx="1"/>
        <line x1="-30" y1="11" x2="-2" y2="45" stroke="rgba(200,220,240,0.55)" strokeWidth="1.2"/>
        <line x1="30"  y1="11" x2="2"  y2="45" stroke="rgba(200,220,240,0.55)" strokeWidth="1.2"/>
        <line x1="-2" y1="117" x2="-10" y2="126" stroke="rgba(200,220,240,0.75)" strokeWidth="1.8"/>
        <line x1="2"  y1="117" x2="10"  y2="126" stroke="rgba(200,220,240,0.75)" strokeWidth="1.8"/>
        <line x1="-30" y1="11" x2="-30" y2="16" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
        <line x1="30"  y1="11" x2="30"  y2="16" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
      </g>

      {/* ── TOWER 4 — far right, height 100 ── */}
      <g transform="translate(1080, 200)" opacity="0.58">
        <rect x="-1.8" y="0" width="3.6" height="100" fill="url(#tg)" rx="1"/>
        <rect x="-24" y="6"  width="48" height="2.4" fill="url(#tg)" rx="1"/>
        <rect x="-17" y="16" width="34" height="2"   fill="url(#tg)" rx="1"/>
        <line x1="-24" y1="8"  x2="-1.8" y2="36" stroke="rgba(200,220,240,0.45)" strokeWidth="1"/>
        <line x1="24"  y1="8"  x2="1.8"  y2="36" stroke="rgba(200,220,240,0.45)" strokeWidth="1"/>
        <line x1="-1.8" y1="91" x2="-8" y2="100" stroke="rgba(200,220,240,0.65)" strokeWidth="1.5"/>
        <line x1="1.8"  y1="91" x2="8"  y2="100" stroke="rgba(200,220,240,0.65)" strokeWidth="1.5"/>
      </g>

      {/* ── POWER LINES ── */}
      {/* Span 1 */}
      <path d="M87,164  Q285,185 421,187" fill="none" stroke="rgba(200,225,255,0.5)"  strokeWidth="1.2"/>
      <path d="M120,172 Q285,198 450,205" fill="none" stroke="rgba(200,225,255,0.5)"  strokeWidth="1.2"/>
      <path d="M153,164 Q285,185 479,187" fill="none" stroke="rgba(200,225,255,0.5)"  strokeWidth="1.2"/>
      {/* Span 2 */}
      <path d="M421,187 Q625,210 770,188" fill="none" stroke="rgba(200,225,255,0.45)" strokeWidth="1.2"/>
      <path d="M450,205 Q625,228 800,208" fill="none" stroke="rgba(200,225,255,0.45)" strokeWidth="1.2"/>
      <path d="M479,187 Q625,210 830,188" fill="none" stroke="rgba(200,225,255,0.45)" strokeWidth="1.2"/>
      {/* Span 3 */}
      <path d="M770,182 Q920,210 1056,206" fill="none" stroke="rgba(200,225,255,0.4)" strokeWidth="1"/>
      <path d="M800,200 Q920,228 1080,220" fill="none" stroke="rgba(200,225,255,0.4)" strokeWidth="1"/>
      <path d="M830,182 Q920,210 1104,206" fill="none" stroke="rgba(200,225,255,0.4)" strokeWidth="1"/>

      {/* ── ANIMATED ELECTRICITY FLOW ── */}
      <path className="ts-flow1" d="M120,172 Q285,198 450,205"
        fill="none" stroke="rgba(100,200,255,0.85)" strokeWidth="2" filter="url(#eGlow)"/>
      <path className="ts-flow2" d="M450,205 Q625,228 800,208"
        fill="none" stroke="rgba(100,200,255,0.85)" strokeWidth="2" filter="url(#eGlow)"/>
      <path className="ts-flow3" d="M800,200 Q920,228 1080,220"
        fill="none" stroke="rgba(100,200,255,0.85)" strokeWidth="2" filter="url(#eGlow)"/>
      <path className="ts-flow4" d="M87,164 Q285,185 421,187"
        fill="none" stroke="rgba(180,230,255,0.65)" strokeWidth="1.5" filter="url(#eGlow)"/>
      <path className="ts-flow5" d="M421,187 Q625,210 770,188"
        fill="none" stroke="rgba(180,230,255,0.65)" strokeWidth="1.5" filter="url(#eGlow)"/>

      {/* ── SPARK NODES ── */}
      <circle className="ts-spark1" cx="120" cy="172" r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#sGlow)"/>
      <circle className="ts-spark2" cx="450" cy="205" r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#sGlow)"/>
      <circle className="ts-spark3" cx="800" cy="200" r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#sGlow)"/>
      <circle className="ts-spark4" cx="1080" cy="220" r="2"   fill="rgba(150,220,255,0.9)" filter="url(#sGlow)"/>

      {/* ── GLOW HALOS ── */}
      <circle className="ts-glow1" cx="120" cy="164" r="6" fill="none" stroke="rgba(100,200,255,0.35)" strokeWidth="1.5"/>
      <circle className="ts-glow2" cx="450" cy="187" r="5" fill="none" stroke="rgba(100,200,255,0.35)" strokeWidth="1.5"/>
      <circle className="ts-glow3" cx="800" cy="182" r="5" fill="none" stroke="rgba(100,200,255,0.35)" strokeWidth="1.5"/>
    </svg>
  );
}
