import React, { useId } from "react";

interface SingleWindmillProps {
  /** Overall scale multiplier */
  scale?: number;
  /** Rotation speed in seconds per full revolution (higher = slower) */
  speed?: number;
  /** Extra className on the wrapping div */
  className?: string;
}

/**
 * A single realistic wind turbine — natural white/grey steel look,
 * very slim tapered tower, long narrow aerofoil blades, slow graceful rotation.
 * Designed to blend naturally with a real wind farm photo background.
 */
export default function SingleWindmill({
  scale = 1,
  speed = 20,
  className = "",
}: SingleWindmillProps) {
  const uid = useId().replace(/:/g, "");
  const spinId = `rotor-${uid}`;

  // Canvas dimensions
  const W = 260;
  const H = 600;

  // Tower geometry — very slim, tapered like a real turbine
  const cx = W * 0.42;        // hub X — slightly left of centre so blades have room on right
  const groundY = H - 10;
  const hubY = 115;            // hub high up
  const towerBaseW = 18;       // base width (realistic: ~4m at base)
  const towerTopW = 5;         // top width

  // Blade geometry — long, narrow, curved aerofoil
  const bladeLen = 155;        // long blades

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
            @keyframes ${spinId} {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
          `}</style>

          {/* Tower — realistic steel gradient: light grey highlight on left, darker on right */}
          <linearGradient id={`twr-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#c8d4dc" stopOpacity="0.55" />
            <stop offset="30%"  stopColor="#e8eef2" stopOpacity="0.85" />
            <stop offset="65%"  stopColor="#d0dce4" stopOpacity="0.70" />
            <stop offset="100%" stopColor="#a0b4c0" stopOpacity="0.45" />
          </linearGradient>

          {/* Nacelle — slightly warm grey */}
          <linearGradient id={`nac-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#dce8ee" stopOpacity="0.90" />
            <stop offset="100%" stopColor="#a8bcc8" stopOpacity="0.65" />
          </linearGradient>

          {/* Blade — white-grey with subtle depth */}
          <linearGradient id={`bld-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#f0f6fa" stopOpacity="0.95" />
            <stop offset="50%"  stopColor="#d8e8f0" stopOpacity="0.80" />
            <stop offset="100%" stopColor="#b0c8d8" stopOpacity="0.55" />
          </linearGradient>

          {/* Ground shadow */}
          <radialGradient id={`shd-${uid}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#000" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Ground shadow ellipse ── */}
        <ellipse
          cx={cx}
          cy={groundY + 2}
          rx={towerBaseW * 2.5}
          ry={5}
          fill={`url(#shd-${uid})`}
        />

        {/* ── Tower — tapered polygon ── */}
        <polygon
          points={`
            ${cx - towerBaseW / 2},${groundY}
            ${cx + towerBaseW / 2},${groundY}
            ${cx + towerTopW / 2},${hubY + 18}
            ${cx - towerTopW / 2},${hubY + 18}
          `}
          fill={`url(#twr-${uid})`}
        />

        {/* ── Nacelle (housing) — sits at hub, slightly elongated ── */}
        <rect
          x={cx - 18}
          y={hubY - 8}
          width={36}
          height={16}
          rx={5}
          ry={5}
          fill={`url(#nac-${uid})`}
        />

        {/* ── Rotor: hub + 3 long aerofoil blades ── */}
        <g
          style={{
            transformOrigin: `${cx}px ${hubY}px`,
            animation: `${spinId} ${speed}s linear infinite`,
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
              {/*
                Realistic aerofoil blade:
                - Leading edge (left side): gentle outward curve
                - Trailing edge (right side): sharper taper to tip
                - Root is wider, tip is very narrow
              */}
              <path
                d={`
                  M ${cx - 3.5} ${hubY - 4}
                  C ${cx - 11}  ${hubY - bladeLen * 0.20},
                    ${cx - 13}  ${hubY - bladeLen * 0.55},
                    ${cx - 2}   ${hubY - bladeLen}
                  C ${cx + 1}   ${hubY - bladeLen * 0.55},
                    ${cx + 5}   ${hubY - bladeLen * 0.20},
                    ${cx + 3.5} ${hubY - 4}
                  Z
                `}
                fill={`url(#bld-${uid})`}
              />
            </g>
          ))}

          {/* Hub circle — small, realistic */}
          <circle cx={cx} cy={hubY} r={9}  fill="#dce8ee" fillOpacity={0.90} />
          <circle cx={cx} cy={hubY} r={4}  fill="#b0c8d8" fillOpacity={0.75} />
          {/* Hub centre bolt */}
          <circle cx={cx} cy={hubY} r={1.5} fill="#88a8b8" fillOpacity={0.80} />
        </g>
      </svg>
    </div>
  );
}
