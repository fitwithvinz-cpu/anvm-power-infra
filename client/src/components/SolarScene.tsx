/**
 * SolarScene — animated solar panels with sun rays and energy particles
 * Used in the Team page header for a natural, solar energy look
 */
export default function SolarScene() {
  return (
    <svg
      viewBox="0 0 1200 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <style>{`
          @keyframes sunPulse {
            0%, 100% { opacity: 0.6; r: 38; }
            50% { opacity: 1; r: 44; }
          }
          @keyframes rayRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes energyFloat {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            20% { opacity: 1; transform: translateY(-20px) scale(1); }
            80% { opacity: 0.8; transform: translateY(-60px) scale(0.8); }
            100% { opacity: 0; transform: translateY(-90px) scale(0.3); }
          }
          @keyframes panelShimmer {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.45; }
          }
          @keyframes haloGrow {
            0%, 100% { r: 55; opacity: 0.15; }
            50% { r: 75; opacity: 0.05; }
          }
          @keyframes haloGrow2 {
            0%, 100% { r: 80; opacity: 0.08; }
            50% { r: 100; opacity: 0.03; }
          }
          .sun-core { animation: sunPulse 3s ease-in-out infinite; }
          .sun-rays { animation: rayRotate 20s linear infinite; transform-origin: 960px 80px; }
          .sun-rays-slow { animation: rayRotate 35s linear infinite reverse; transform-origin: 960px 80px; }
          .halo1 { animation: haloGrow 3s ease-in-out infinite; }
          .halo2 { animation: haloGrow2 3s ease-in-out infinite 0.5s; }
          .ep1 { animation: energyFloat 3s ease-in-out infinite 0s; }
          .ep2 { animation: energyFloat 3s ease-in-out infinite 0.6s; }
          .ep3 { animation: energyFloat 3s ease-in-out infinite 1.2s; }
          .ep4 { animation: energyFloat 3s ease-in-out infinite 1.8s; }
          .ep5 { animation: energyFloat 3s ease-in-out infinite 2.4s; }
          .ep6 { animation: energyFloat 3.5s ease-in-out infinite 0.3s; }
          .ep7 { animation: energyFloat 3.5s ease-in-out infinite 1.0s; }
          .ep8 { animation: energyFloat 3.5s ease-in-out infinite 2.0s; }
          .shimmer1 { animation: panelShimmer 2.5s ease-in-out infinite 0s; }
          .shimmer2 { animation: panelShimmer 2.5s ease-in-out infinite 0.5s; }
          .shimmer3 { animation: panelShimmer 2.5s ease-in-out infinite 1.0s; }
          .shimmer4 { animation: panelShimmer 2.5s ease-in-out infinite 1.5s; }
          .shimmer5 { animation: panelShimmer 2.5s ease-in-out infinite 2.0s; }
        `}</style>

        {/* Solar panel blue gradient */}
        <linearGradient id="panelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(30,80,160,0.75)" />
          <stop offset="50%" stopColor="rgba(20,60,140,0.85)" />
          <stop offset="100%" stopColor="rgba(10,40,100,0.75)" />
        </linearGradient>

        {/* Panel cell lines */}
        <pattern id="cellPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="none" stroke="rgba(100,160,255,0.3)" strokeWidth="0.5" />
          <line x1="10" y1="0" x2="10" y2="20" stroke="rgba(100,160,255,0.2)" strokeWidth="0.3" />
          <line x1="0" y1="10" x2="20" y2="10" stroke="rgba(100,160,255,0.2)" strokeWidth="0.3" />
        </pattern>

        {/* Sun gradient */}
        <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,240,100,1)" />
          <stop offset="40%" stopColor="rgba(255,200,50,0.9)" />
          <stop offset="100%" stopColor="rgba(255,150,0,0)" />
        </radialGradient>

        {/* Energy particle gradient */}
        <radialGradient id="particleGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,230,50,1)" />
          <stop offset="100%" stopColor="rgba(255,180,0,0)" />
        </radialGradient>

        {/* Ground gradient */}
        <linearGradient id="solarGroundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(34,85,34,0.5)" />
          <stop offset="100%" stopColor="rgba(20,50,20,0.3)" />
        </linearGradient>

        {/* Glow filter for sun */}
        <filter id="sunGlow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft glow for particles */}
        <filter id="particleGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── GROUND ── */}
      <rect x="0" y="355" width="1200" height="45" fill="url(#solarGroundGrad)" />
      <path d="M0 365 Q200 345 400 360 Q600 375 800 352 Q1000 330 1200 360 L1200 400 L0 400 Z"
        fill="rgba(20,60,20,0.4)" />

      {/* ══════════════════════════════════════════
          SUN — top right
      ══════════════════════════════════════════ */}
      {/* Outer halos */}
      <circle className="halo2" cx="960" cy="80" r="80" fill="none" stroke="rgba(255,200,50,0.08)" strokeWidth="20" />
      <circle className="halo1" cx="960" cy="80" r="55" fill="none" stroke="rgba(255,220,80,0.15)" strokeWidth="15" />

      {/* Rotating long rays */}
      <g className="sun-rays-slow">
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
          <line
            key={`ray-long-${i}`}
            x1={960 + 50 * Math.cos((angle * Math.PI) / 180)}
            y1={80 + 50 * Math.sin((angle * Math.PI) / 180)}
            x2={960 + 95 * Math.cos((angle * Math.PI) / 180)}
            y2={80 + 95 * Math.sin((angle * Math.PI) / 180)}
            stroke="rgba(255,220,80,0.2)"
            strokeWidth="1.5"
          />
        ))}
      </g>

      {/* Rotating short rays */}
      <g className="sun-rays">
        {[15,45,75,105,135,165,195,225,255,285,315,345].map((angle, i) => (
          <line
            key={`ray-short-${i}`}
            x1={960 + 48 * Math.cos((angle * Math.PI) / 180)}
            y1={80 + 48 * Math.sin((angle * Math.PI) / 180)}
            x2={960 + 70 * Math.cos((angle * Math.PI) / 180)}
            y2={80 + 70 * Math.sin((angle * Math.PI) / 180)}
            stroke="rgba(255,200,50,0.3)"
            strokeWidth="2"
          />
        ))}
      </g>

      {/* Sun core */}
      <circle className="sun-core" cx="960" cy="80" r="38" fill="url(#sunGrad)" filter="url(#sunGlow)" />
      <circle cx="960" cy="80" r="28" fill="rgba(255,245,150,0.95)" />
      <circle cx="960" cy="80" r="18" fill="rgba(255,255,200,1)" />

      {/* ══════════════════════════════════════════
          SOLAR PANEL ARRAY — left side, angled rows
          Panels tilted ~25° facing the sun
      ══════════════════════════════════════════ */}

      {/* Row 1 — 5 panels */}
      {[0,1,2,3,4].map((i) => {
        const x = 60 + i * 130;
        const y = 280;
        return (
          <g key={`row1-${i}`}>
            {/* Panel frame */}
            <rect
              x={x} y={y - 60}
              width="110" height="70"
              fill="url(#panelGrad)"
              stroke="rgba(150,180,220,0.6)"
              strokeWidth="1.5"
              rx="2"
              transform={`rotate(-20, ${x + 55}, ${y})`}
            />
            {/* Cell grid */}
            <rect
              x={x + 4} y={y - 56}
              width="102" height="62"
              fill="url(#cellPattern)"
              rx="1"
              transform={`rotate(-20, ${x + 55}, ${y})`}
            />
            {/* Shimmer highlight */}
            <rect
              className={`shimmer${(i % 5) + 1}`}
              x={x + 10} y={y - 52}
              width="40" height="20"
              fill="rgba(200,230,255,0.6)"
              rx="2"
              transform={`rotate(-20, ${x + 55}, ${y})`}
            />
            {/* Panel stand */}
            <line
              x1={x + 30} y1={y + 5}
              x2={x + 30} y2={y + 25}
              stroke="rgba(180,180,180,0.7)"
              strokeWidth="2"
              transform={`rotate(-20, ${x + 55}, ${y})`}
            />
            <line
              x1={x + 80} y1={y + 5}
              x2={x + 80} y2={y + 25}
              stroke="rgba(180,180,180,0.7)"
              strokeWidth="2"
              transform={`rotate(-20, ${x + 55}, ${y})`}
            />
          </g>
        );
      })}

      {/* Row 2 — 4 panels (slightly behind) */}
      {[0,1,2,3].map((i) => {
        const x = 120 + i * 135;
        const y = 320;
        return (
          <g key={`row2-${i}`} opacity="0.75">
            <rect
              x={x} y={y - 55}
              width="105" height="65"
              fill="url(#panelGrad)"
              stroke="rgba(150,180,220,0.5)"
              strokeWidth="1.5"
              rx="2"
              transform={`rotate(-20, ${x + 52}, ${y})`}
            />
            <rect
              x={x + 4} y={y - 51}
              width="97" height="57"
              fill="url(#cellPattern)"
              rx="1"
              transform={`rotate(-20, ${x + 52}, ${y})`}
            />
            <rect
              className={`shimmer${((i + 2) % 5) + 1}`}
              x={x + 8} y={y - 47}
              width="35" height="18"
              fill="rgba(200,230,255,0.5)"
              rx="2"
              transform={`rotate(-20, ${x + 52}, ${y})`}
            />
          </g>
        );
      })}

      {/* ══════════════════════════════════════════
          ENERGY PARTICLES — floating up from panels
      ══════════════════════════════════════════ */}
      <circle className="ep1" cx="115" cy="255" r="4" fill="url(#particleGrad)" filter="url(#particleGlow)" />
      <circle className="ep2" cx="245" cy="250" r="3" fill="url(#particleGrad)" filter="url(#particleGlow)" />
      <circle className="ep3" cx="375" cy="258" r="4" fill="url(#particleGrad)" filter="url(#particleGlow)" />
      <circle className="ep4" cx="505" cy="252" r="3.5" fill="url(#particleGrad)" filter="url(#particleGlow)" />
      <circle className="ep5" cx="635" cy="256" r="3" fill="url(#particleGrad)" filter="url(#particleGlow)" />
      <circle className="ep6" cx="180" cy="295" r="3" fill="url(#particleGrad)" filter="url(#particleGlow)" />
      <circle className="ep7" cx="315" cy="290" r="3.5" fill="url(#particleGrad)" filter="url(#particleGlow)" />
      <circle className="ep8" cx="450" cy="293" r="3" fill="url(#particleGrad)" filter="url(#particleGlow)" />

      {/* ══════════════════════════════════════════
          LIGHT BEAM from sun to panels (subtle)
      ══════════════════════════════════════════ */}
      <path
        d="M920,115 L600,265 L700,265 Z"
        fill="rgba(255,230,100,0.04)"
      />
      <path
        d="M940,118 L400,270 L500,270 Z"
        fill="rgba(255,230,100,0.03)"
      />
    </svg>
  );
}
