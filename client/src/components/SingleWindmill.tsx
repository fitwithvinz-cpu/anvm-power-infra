import React, { useId } from "react";

interface SingleWindmillProps {
  /** Overall scale — 1 = default large size */
  scale?: number;
  /** CSS color for the turbine */
  color?: string;
  /** Rotation speed in seconds per full revolution */
  speed?: number;
  /** Extra className on the wrapping div */
  className?: string;
}

/**
 * A single large, realistic wind turbine SVG.
 * Designed to sit beside the hero logo — tall, elegant, slowly rotating.
 */
export default function SingleWindmill({
  scale = 1,
  color = "white",
  speed = 18,
  className = "",
}: SingleWindmillProps) {
  const id = useId().replace(/:/g, "");
  const animId = `spin-${id}`;

  // Turbine geometry
  const W = 220;
  const H = 520;
  const cx = W / 2;          // hub X
  const groundY = H - 20;    // ground line Y
  const towerBase = 60;      // tower base half-width
  const towerTop = 8;        // tower top half-width
  const hubY = groundY - 340; // hub Y (high up)
  const bladeLen = 130;      // blade length

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: W * scale, height: H * scale }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width={W * scale}
        height={H * scale}
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          <style>{`
            @keyframes ${animId} {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
          `}</style>

          {/* Tower gradient — slightly lighter at top */}
          <linearGradient id={`tg-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor={color} stopOpacity="0.55" />
            <stop offset="40%"  stopColor={color} stopOpacity="0.80" />
            <stop offset="100%" stopColor={color} stopOpacity="0.45" />
          </linearGradient>

          {/* Blade gradient — aerofoil look */}
          <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={color} stopOpacity="0.90" />
            <stop offset="100%" stopColor={color} stopOpacity="0.30" />
          </linearGradient>
        </defs>

        {/* ── Tower ── */}
        <polygon
          points={`
            ${cx - towerBase},${groundY}
            ${cx + towerBase},${groundY}
            ${cx + towerTop},${hubY}
            ${cx - towerTop},${hubY}
          `}
          fill={`url(#tg-${id})`}
        />

        {/* ── Ground shadow ellipse ── */}
        <ellipse
          cx={cx}
          cy={groundY + 4}
          rx={towerBase * 1.4}
          ry={6}
          fill={color}
          opacity={0.08}
        />

        {/* ── Rotor (hub + 3 blades) ── */}
        <g
          style={{
            transformOrigin: `${cx}px ${hubY}px`,
            animation: `${animId} ${speed}s linear infinite`,
          }}
        >
          {/* 3 blades at 0°, 120°, 240° */}
          {[0, 120, 240].map((deg) => (
            <g
              key={deg}
              style={{
                transformOrigin: `${cx}px ${hubY}px`,
                transform: `rotate(${deg}deg)`,
              }}
            >
              {/* Blade shape: tapered aerofoil */}
              <path
                d={`
                  M ${cx - 4} ${hubY}
                  C ${cx - 10} ${hubY - bladeLen * 0.3},
                    ${cx - 14} ${hubY - bladeLen * 0.7},
                    ${cx} ${hubY - bladeLen}
                  C ${cx + 5}  ${hubY - bladeLen * 0.7},
                    ${cx + 5}  ${hubY - bladeLen * 0.3},
                    ${cx + 4} ${hubY}
                  Z
                `}
                fill={`url(#bg-${id})`}
              />
            </g>
          ))}

          {/* Hub circle */}
          <circle cx={cx} cy={hubY} r={10} fill={color} opacity={0.85} />
          <circle cx={cx} cy={hubY} r={5}  fill={color} opacity={0.5} />
        </g>

        {/* ── Nacelle (housing behind hub) ── */}
        <rect
          x={cx - 14}
          y={hubY - 10}
          width={28}
          height={14}
          rx={4}
          fill={color}
          opacity={0.55}
        />
      </svg>
    </div>
  );
}
