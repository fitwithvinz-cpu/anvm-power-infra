/**
 * WindmillScene — realistic wind turbine silhouettes placed on a horizon line.
 * Inspired by Suzlon's natural wind farm photography aesthetic.
 * Turbines have correct proportions: very tall thin tower, 3 long slim blades.
 * Placed at the horizon with perspective scaling (farther = smaller).
 */

interface TurbineProps {
  /** x position as % of SVG width (0–100) */
  cx: number;
  /** Tower height in SVG units */
  towerH: number;
  /** Rotation speed in seconds */
  speed: number;
  /** Overall opacity */
  opacity: number;
  /** Rotate counter-clockwise */
  reverse?: boolean;
  /** Horizon Y position (0–100, higher number = lower on screen) */
  horizonY: number;
}

function Turbine({ cx, towerH, speed, opacity, reverse = false, horizonY }: TurbineProps) {
  const id = `t${cx}${towerH}`.replace(/[^a-z0-9]/gi, "");

  // Realistic proportions: blade length ≈ 60% of tower height
  const bladeLen = towerH * 0.60;
  const bladeW = towerH * 0.028;  // very slim blades
  const towerW = towerH * 0.022;  // thin tower
  const hubR = towerH * 0.025;

  // Tower base at horizonY, hub at top of tower
  const baseY = horizonY;
  const hubY = horizonY - towerH;

  return (
    <g opacity={opacity} style={{ pointerEvents: "none" }}>
      {/* Tower — slightly tapered (wider at base) */}
      <polygon
        points={`
          ${cx - towerW * 1.4},${baseY}
          ${cx + towerW * 1.4},${baseY}
          ${cx + towerW * 0.4},${hubY + towerH * 0.05}
          ${cx - towerW * 0.4},${hubY + towerH * 0.05}
        `}
        fill="currentColor"
      />

      {/* Rotating nacelle + blades */}
      <g
        style={{
          transformOrigin: `${cx}px ${hubY}px`,
          animation: `${id}_spin ${speed}s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        <style>{`
          @keyframes ${id}_spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>

        {/* 3 blades — realistic aerofoil shape using path */}
        {[0, 120, 240].map((angle) => (
          <g key={angle} transform={`rotate(${angle}, ${cx}, ${hubY})`}>
            {/* Blade: starts at hub, tapers to a point */}
            <path
              d={`
                M ${cx} ${hubY - hubR}
                C ${cx + bladeW * 0.8} ${hubY - hubR - bladeLen * 0.15},
                  ${cx + bladeW * 0.5} ${hubY - hubR - bladeLen * 0.7},
                  ${cx} ${hubY - hubR - bladeLen}
                C ${cx - bladeW * 0.3} ${hubY - hubR - bladeLen * 0.7},
                  ${cx - bladeW * 0.6} ${hubY - hubR - bladeLen * 0.15},
                  ${cx} ${hubY - hubR}
                Z
              `}
              fill="currentColor"
            />
          </g>
        ))}

        {/* Hub circle */}
        <circle cx={cx} cy={hubY} r={hubR * 1.2} fill="currentColor" />
        <circle cx={cx} cy={hubY} r={hubR * 0.5} fill="rgba(0,0,0,0.3)" />
      </g>

      {/* Nacelle box behind hub */}
      <rect
        x={cx - towerW * 1.8}
        y={hubY - towerW * 1.2}
        width={towerW * 3.6}
        height={towerW * 2.4}
        rx={towerW * 0.5}
        fill="currentColor"
        opacity={0.9}
      />
    </g>
  );
}

interface WindmillSceneProps {
  className?: string;
  /** Color of turbines (CSS color or 'currentColor') */
  color?: string;
  /** Horizon position as % from top (default 85 = near bottom) */
  horizonPct?: number;
}

export default function WindmillScene({
  className = "",
  color = "white",
  horizonPct = 88,
}: WindmillSceneProps) {
  // ViewBox: 0 0 1000 400 — wide cinematic format
  const W = 1000;
  const H = 400;
  const horizonY = (horizonPct / 100) * H;

    // Wind farm layout: turbines at varying distances (size = distance cue)
    // Grouped in clusters like a real wind farm
    const turbines: TurbineProps[] = [
      // Far background — smaller, faster
      { cx: 60,  towerH: 55, speed: 22, opacity: 0.30, horizonY, reverse: false },
      { cx: 130, towerH: 62, speed: 20, opacity: 0.34, horizonY, reverse: true },
      { cx: 200, towerH: 50, speed: 25, opacity: 0.28, horizonY, reverse: false },
      { cx: 270, towerH: 58, speed: 21, opacity: 0.32, horizonY, reverse: true },

      // Mid distance — medium
      { cx: 370, towerH: 78, speed: 16, opacity: 0.38, horizonY, reverse: false },
      { cx: 450, towerH: 70, speed: 18, opacity: 0.35, horizonY, reverse: true },

      // Right cluster — far
      { cx: 600, towerH: 55, speed: 23, opacity: 0.30, horizonY, reverse: true },
      { cx: 670, towerH: 65, speed: 19, opacity: 0.36, horizonY, reverse: false },
      { cx: 745, towerH: 52, speed: 26, opacity: 0.28, horizonY, reverse: true },

      // Right foreground — slightly larger
      { cx: 830, towerH: 82, speed: 15, opacity: 0.40, horizonY, reverse: false },
      { cx: 910, towerH: 72, speed: 17, opacity: 0.37, horizonY, reverse: true },
      { cx: 975, towerH: 62, speed: 20, opacity: 0.32, horizonY, reverse: false },
    ];

  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      style={{ color, pointerEvents: "none" }}
      aria-hidden="true"
    >
      {/* Subtle horizon ground line */}
      <line
        x1={0} y1={horizonY}
        x2={W} y2={horizonY}
        stroke="currentColor"
        strokeWidth={0.5}
        opacity={0.08}
      />

      {turbines.map((t, i) => (
        <Turbine key={i} {...t} />
      ))}
    </svg>
  );
}
