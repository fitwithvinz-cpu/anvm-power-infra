/**
 * TransmissionScene — animated power transmission towers with flowing electricity
 * Used in the About page header for a natural, industry-specific look
 */
export default function TransmissionScene() {
  return (
    <svg
      viewBox="0 0 1200 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Electricity flow animation along power lines */}
        <style>{`
          @keyframes flowRight {
            0% { stroke-dashoffset: 400; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }
          @keyframes flowLeft {
            0% { stroke-dashoffset: -400; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }
          @keyframes spark {
            0%, 100% { opacity: 0; r: 2; }
            50% { opacity: 1; r: 4; }
          }
          @keyframes glow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }
          .flow1 {
            stroke-dasharray: 30 370;
            animation: flowRight 3s linear infinite;
          }
          .flow2 {
            stroke-dasharray: 30 370;
            animation: flowRight 3s linear infinite 1s;
          }
          .flow3 {
            stroke-dasharray: 30 370;
            animation: flowRight 3s linear infinite 2s;
          }
          .flow4 {
            stroke-dasharray: 30 370;
            animation: flowLeft 3.5s linear infinite 0.5s;
          }
          .flow5 {
            stroke-dasharray: 30 370;
            animation: flowLeft 3.5s linear infinite 1.5s;
          }
          .spark1 { animation: spark 2s ease-in-out infinite 0.3s; }
          .spark2 { animation: spark 2s ease-in-out infinite 1.1s; }
          .spark3 { animation: spark 2s ease-in-out infinite 1.8s; }
          .spark4 { animation: spark 2.5s ease-in-out infinite 0.7s; }
          .glow1 { animation: glow 2s ease-in-out infinite; }
          .glow2 { animation: glow 2s ease-in-out infinite 0.7s; }
          .glow3 { animation: glow 2s ease-in-out infinite 1.4s; }
        `}</style>

        {/* Tower gradient — steel grey */}
        <linearGradient id="towerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(180,200,220,0.7)" />
          <stop offset="50%" stopColor="rgba(220,235,250,0.9)" />
          <stop offset="100%" stopColor="rgba(180,200,220,0.7)" />
        </linearGradient>

        {/* Ground gradient */}
        <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(34,85,34,0.6)" />
          <stop offset="100%" stopColor="rgba(20,50,20,0.3)" />
        </linearGradient>

        {/* Electricity glow filter */}
        <filter id="electricGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Strong glow for sparks */}
        <filter id="sparkGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── GROUND ── */}
      <rect x="0" y="360" width="1200" height="40" fill="url(#groundGrad)" />
      {/* Rolling hills silhouette */}
      <path d="M0 370 Q150 340 300 360 Q450 380 600 355 Q750 330 900 360 Q1050 385 1200 365 L1200 400 L0 400 Z"
        fill="rgba(20,60,20,0.5)" />

      {/* ══════════════════════════════════════════
          TOWER 1 — leftmost, tallest (foreground)
          x=120, base y=360, height=240
      ══════════════════════════════════════════ */}
      <g transform="translate(120, 120)" opacity="0.9">
        {/* Main vertical mast */}
        <rect x="-4" y="0" width="8" height="240" fill="url(#towerGrad)" rx="1" />
        {/* Cross arms at top */}
        <rect x="-55" y="15" width="110" height="5" fill="url(#towerGrad)" rx="1" />
        <rect x="-40" y="35" width="80" height="4" fill="url(#towerGrad)" rx="1" />
        {/* Diagonal braces top */}
        <line x1="-55" y1="20" x2="-4" y2="80" stroke="rgba(200,220,240,0.7)" strokeWidth="2" />
        <line x1="55" y1="20" x2="4" y2="80" stroke="rgba(200,220,240,0.7)" strokeWidth="2" />
        <line x1="-40" y1="39" x2="-4" y2="80" stroke="rgba(200,220,240,0.6)" strokeWidth="1.5" />
        <line x1="40" y1="39" x2="4" y2="80" stroke="rgba(200,220,240,0.6)" strokeWidth="1.5" />
        {/* Mid cross arms */}
        <rect x="-35" y="100" width="70" height="4" fill="url(#towerGrad)" rx="1" />
        {/* Diagonal braces mid */}
        <line x1="-35" y1="104" x2="-4" y2="160" stroke="rgba(200,220,240,0.6)" strokeWidth="1.5" />
        <line x1="35" y1="104" x2="4" y2="160" stroke="rgba(200,220,240,0.6)" strokeWidth="1.5" />
        {/* Lower cross arms */}
        <rect x="-25" y="160" width="50" height="3" fill="url(#towerGrad)" rx="1" />
        {/* Base spread */}
        <line x1="-4" y1="220" x2="-20" y2="240" stroke="rgba(200,220,240,0.8)" strokeWidth="3" />
        <line x1="4" y1="220" x2="20" y2="240" stroke="rgba(200,220,240,0.8)" strokeWidth="3" />
        {/* Insulator strings */}
        <line x1="-55" y1="20" x2="-55" y2="30" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <line x1="55" y1="20" x2="55" y2="30" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <line x1="-40" y1="39" x2="-40" y2="48" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <line x1="40" y1="39" x2="40" y2="48" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      </g>

      {/* ══════════════════════════════════════════
          TOWER 2 — centre
          x=450, base y=360, height=200
      ══════════════════════════════════════════ */}
      <g transform="translate(450, 160)" opacity="0.85">
        <rect x="-3.5" y="0" width="7" height="200" fill="url(#towerGrad)" rx="1" />
        <rect x="-48" y="12" width="96" height="4.5" fill="url(#towerGrad)" rx="1" />
        <rect x="-35" y="30" width="70" height="3.5" fill="url(#towerGrad)" rx="1" />
        <line x1="-48" y1="16" x2="-3.5" y2="70" stroke="rgba(200,220,240,0.65)" strokeWidth="1.8" />
        <line x1="48" y1="16" x2="3.5" y2="70" stroke="rgba(200,220,240,0.65)" strokeWidth="1.8" />
        <line x1="-35" y1="33" x2="-3.5" y2="70" stroke="rgba(200,220,240,0.55)" strokeWidth="1.4" />
        <line x1="35" y1="33" x2="3.5" y2="70" stroke="rgba(200,220,240,0.55)" strokeWidth="1.4" />
        <rect x="-28" y="90" width="56" height="3.5" fill="url(#towerGrad)" rx="1" />
        <line x1="-28" y1="93" x2="-3.5" y2="140" stroke="rgba(200,220,240,0.55)" strokeWidth="1.4" />
        <line x1="28" y1="93" x2="3.5" y2="140" stroke="rgba(200,220,240,0.55)" strokeWidth="1.4" />
        <line x1="-3.5" y1="185" x2="-16" y2="200" stroke="rgba(200,220,240,0.8)" strokeWidth="2.5" />
        <line x1="3.5" y1="185" x2="16" y2="200" stroke="rgba(200,220,240,0.8)" strokeWidth="2.5" />
        <line x1="-48" y1="16" x2="-48" y2="25" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <line x1="48" y1="16" x2="48" y2="25" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      </g>

      {/* ══════════════════════════════════════════
          TOWER 3 — right
          x=800, base y=360, height=210
      ══════════════════════════════════════════ */}
      <g transform="translate(800, 150)" opacity="0.8">
        <rect x="-3.5" y="0" width="7" height="210" fill="url(#towerGrad)" rx="1" />
        <rect x="-50" y="13" width="100" height="4.5" fill="url(#towerGrad)" rx="1" />
        <rect x="-36" y="32" width="72" height="3.5" fill="url(#towerGrad)" rx="1" />
        <line x1="-50" y1="17" x2="-3.5" y2="75" stroke="rgba(200,220,240,0.6)" strokeWidth="1.8" />
        <line x1="50" y1="17" x2="3.5" y2="75" stroke="rgba(200,220,240,0.6)" strokeWidth="1.8" />
        <line x1="-36" y1="35" x2="-3.5" y2="75" stroke="rgba(200,220,240,0.5)" strokeWidth="1.4" />
        <line x1="36" y1="35" x2="3.5" y2="75" stroke="rgba(200,220,240,0.5)" strokeWidth="1.4" />
        <rect x="-28" y="95" width="56" height="3.5" fill="url(#towerGrad)" rx="1" />
        <line x1="-3.5" y1="195" x2="-17" y2="210" stroke="rgba(200,220,240,0.8)" strokeWidth="2.5" />
        <line x1="3.5" y1="195" x2="17" y2="210" stroke="rgba(200,220,240,0.8)" strokeWidth="2.5" />
        <line x1="-50" y1="17" x2="-50" y2="26" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <line x1="50" y1="17" x2="50" y2="26" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      </g>

      {/* ══════════════════════════════════════════
          TOWER 4 — far right (smaller, background)
          x=1080, base y=360, height=170
      ══════════════════════════════════════════ */}
      <g transform="translate(1080, 190)" opacity="0.65">
        <rect x="-3" y="0" width="6" height="170" fill="url(#towerGrad)" rx="1" />
        <rect x="-40" y="10" width="80" height="4" fill="url(#towerGrad)" rx="1" />
        <rect x="-28" y="26" width="56" height="3" fill="url(#towerGrad)" rx="1" />
        <line x1="-40" y1="14" x2="-3" y2="60" stroke="rgba(200,220,240,0.5)" strokeWidth="1.5" />
        <line x1="40" y1="14" x2="3" y2="60" stroke="rgba(200,220,240,0.5)" strokeWidth="1.5" />
        <line x1="-3" y1="155" x2="-14" y2="170" stroke="rgba(200,220,240,0.7)" strokeWidth="2" />
        <line x1="3" y1="155" x2="14" y2="170" stroke="rgba(200,220,240,0.7)" strokeWidth="2" />
      </g>

      {/* ══════════════════════════════════════════
          POWER LINES — catenary curves between towers
          Top conductors (3 lines per span)
      ══════════════════════════════════════════ */}

      {/* Span 1: Tower1 → Tower2 (top arms) */}
      {/* Left conductor */}
      <path d="M65,140 Q285,175 402,172" fill="none" stroke="rgba(200,225,255,0.55)" strokeWidth="1.5" />
      {/* Centre conductor */}
      <path d="M120,155 Q285,195 450,192" fill="none" stroke="rgba(200,225,255,0.55)" strokeWidth="1.5" />
      {/* Right conductor */}
      <path d="M175,140 Q285,175 498,172" fill="none" stroke="rgba(200,225,255,0.55)" strokeWidth="1.5" />

      {/* Span 2: Tower2 → Tower3 (top arms) */}
      <path d="M402,172 Q625,215 750,175" fill="none" stroke="rgba(200,225,255,0.5)" strokeWidth="1.5" />
      <path d="M450,192 Q625,235 800,195" fill="none" stroke="rgba(200,225,255,0.5)" strokeWidth="1.5" />
      <path d="M498,172 Q625,215 850,175" fill="none" stroke="rgba(200,225,255,0.5)" strokeWidth="1.5" />

      {/* Span 3: Tower3 → Tower4 (top arms) */}
      <path d="M750,163 Q915,200 1040,200" fill="none" stroke="rgba(200,225,255,0.45)" strokeWidth="1.3" />
      <path d="M800,183 Q915,220 1080,220" fill="none" stroke="rgba(200,225,255,0.45)" strokeWidth="1.3" />
      <path d="M850,163 Q915,200 1120,200" fill="none" stroke="rgba(200,225,255,0.45)" strokeWidth="1.3" />

      {/* ══════════════════════════════════════════
          ANIMATED ELECTRICITY FLOW along conductors
      ══════════════════════════════════════════ */}

      {/* Flow on centre conductor span 1 */}
      <path className="flow1" d="M120,155 Q285,195 450,192"
        fill="none" stroke="rgba(100,200,255,0.9)" strokeWidth="2.5"
        filter="url(#electricGlow)" />

      {/* Flow on centre conductor span 2 */}
      <path className="flow2" d="M450,192 Q625,235 800,195"
        fill="none" stroke="rgba(100,200,255,0.9)" strokeWidth="2.5"
        filter="url(#electricGlow)" />

      {/* Flow on centre conductor span 3 */}
      <path className="flow3" d="M800,183 Q915,220 1080,220"
        fill="none" stroke="rgba(100,200,255,0.9)" strokeWidth="2.5"
        filter="url(#electricGlow)" />

      {/* Flow on top conductor span 1 (reverse) */}
      <path className="flow4" d="M65,140 Q285,175 402,172"
        fill="none" stroke="rgba(180,230,255,0.7)" strokeWidth="2"
        filter="url(#electricGlow)" />

      {/* Flow on top conductor span 2 (reverse) */}
      <path className="flow5" d="M402,172 Q625,215 750,175"
        fill="none" stroke="rgba(180,230,255,0.7)" strokeWidth="2"
        filter="url(#electricGlow)" />

      {/* ══════════════════════════════════════════
          SPARK NODES at tower connection points
      ══════════════════════════════════════════ */}
      <circle className="spark1" cx="120" cy="155" r="3" fill="rgba(150,220,255,0.9)" filter="url(#sparkGlow)" />
      <circle className="spark2" cx="450" cy="192" r="3" fill="rgba(150,220,255,0.9)" filter="url(#sparkGlow)" />
      <circle className="spark3" cx="800" cy="183" r="3" fill="rgba(150,220,255,0.9)" filter="url(#sparkGlow)" />
      <circle className="spark4" cx="1080" cy="220" r="2.5" fill="rgba(150,220,255,0.9)" filter="url(#sparkGlow)" />

      {/* Glow halos on tower tops */}
      <circle className="glow1" cx="120" cy="135" r="8" fill="none" stroke="rgba(100,200,255,0.4)" strokeWidth="2" />
      <circle className="glow2" cx="450" cy="175" r="7" fill="none" stroke="rgba(100,200,255,0.4)" strokeWidth="2" />
      <circle className="glow3" cx="800" cy="163" r="7" fill="none" stroke="rgba(100,200,255,0.4)" strokeWidth="2" />
    </svg>
  );
}
