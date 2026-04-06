/**
 * WindmillScene — decorative animated wind turbine silhouettes for page headers.
 * Renders multiple turbines at the bottom edges, subtle and elegant.
 */

interface WindmillProps {
  x: number;        // SVG units from left (viewBox 0-1000)
  scale: number;    // relative size multiplier
  speed: number;    // rotation duration in seconds
  opacity?: number;
  reverse?: boolean;
}

function Windmill({ x, scale, speed, opacity = 0.15, reverse = false }: WindmillProps) {
  const animId = `wm${x}${scale}`.replace(/\./g, "");
  const towerH = 90 * scale;
  const towerW = 5 * scale;
  const hubR = 4 * scale;
  const bladeL = 38 * scale;
  const bladeW = 5 * scale;
  // Tower base at y=100 (bottom of viewBox)
  const baseY = 100;
  const hubY = baseY - towerH;

  return (
    <g transform={`translate(${x}, 0)`} opacity={opacity} style={{ pointerEvents: "none" }}>
      {/* Tower */}
      <rect
        x={-towerW / 2}
        y={hubY}
        width={towerW}
        height={towerH}
        rx={towerW / 2}
        fill="currentColor"
      />
      {/* Base flare */}
      <polygon
        points={`${-towerW * 2.5},${baseY} ${towerW * 2.5},${baseY} ${towerW / 2},${hubY + towerH * 0.12} ${-towerW / 2},${hubY + towerH * 0.12}`}
        fill="currentColor"
      />
      {/* Rotating blades */}
      <g style={{ transformOrigin: `${x}px ${hubY}px` }}>
        <style>{`
          @keyframes ${animId} {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
        <g
          transform={`translate(${0}, ${hubY})`}
          style={{
            animation: `${animId} ${speed}s linear infinite ${reverse ? "reverse" : "normal"}`,
            transformOrigin: "0px 0px",
          }}
        >
          {[0, 120, 240].map((angle) => (
            <g key={angle} transform={`rotate(${angle})`}>
              <ellipse
                cx={0}
                cy={-(bladeL / 2 + hubR)}
                rx={bladeW / 2}
                ry={bladeL / 2}
                fill="currentColor"
              />
            </g>
          ))}
          {/* Hub */}
          <circle cx={0} cy={0} r={hubR} fill="currentColor" />
        </g>
      </g>
    </g>
  );
}

interface WindmillSceneProps {
  className?: string;
  color?: string;
}

export default function WindmillScene({ className = "", color = "white" }: WindmillSceneProps) {
  // Turbines positioned along the bottom — left cluster and right cluster
  // x is in SVG units (0–100 viewBox), scale controls height
  const turbines: WindmillProps[] = [
    { x: 2,   scale: 0.45, speed: 16, opacity: 0.10 },
    { x: 8,   scale: 0.65, speed: 11, opacity: 0.14 },
    { x: 15,  scale: 0.40, speed: 20, opacity: 0.09, reverse: true },
    { x: 21,  scale: 0.55, speed: 14, opacity: 0.12 },
    { x: 75,  scale: 0.50, speed: 15, opacity: 0.11, reverse: true },
    { x: 82,  scale: 0.70, speed: 10, opacity: 0.15 },
    { x: 89,  scale: 0.42, speed: 18, opacity: 0.09, reverse: true },
    { x: 95,  scale: 0.60, speed: 12, opacity: 0.13 },
  ];

  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMax meet"
      style={{ color, pointerEvents: "none" }}
      aria-hidden="true"
    >
      {turbines.map((t, i) => (
        <Windmill key={i} {...t} />
      ))}
    </svg>
  );
}
