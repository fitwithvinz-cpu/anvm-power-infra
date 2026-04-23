/**
 * RenewableScene — A cinematic wind + solar animation banner.
 * Features:
 *  - Gradient sky with animated clouds
 *  - Animated sun with pulsing glow
 *  - 6 wind turbines with smooth spinning blades (varying speeds & sizes)
 *  - 3 solar panel arrays with slow sun-tracking tilt + shimmer light sweep
 *  - Rolling green hills in the foreground
 *  - Birds flying across the scene
 */

import { useEffect, useRef } from "react";

export default function RenewableScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    // Birds state
    const birds = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * 900,
      y: 30 + Math.random() * 60,
      speed: 0.4 + Math.random() * 0.5,
      wingPhase: Math.random() * Math.PI * 2,
      size: 3 + Math.random() * 2,
    }));

    function drawSky(w: number, h: number) {
      const grad = ctx!.createLinearGradient(0, 0, 0, h * 0.72);
      grad.addColorStop(0, "#1a3a6b");
      grad.addColorStop(0.35, "#2e6db4");
      grad.addColorStop(0.7, "#7ec8e3");
      grad.addColorStop(1, "#c8e6f5");
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, w, h * 0.72);
    }

    function drawSun(w: number, h: number) {
      const sx = w * 0.82;
      const sy = h * 0.18;
      const r = 28;
      const pulse = 1 + 0.04 * Math.sin(t * 0.02);

      // Outer glow
      const glow = ctx!.createRadialGradient(sx, sy, r * 0.5, sx, sy, r * 3.5 * pulse);
      glow.addColorStop(0, "rgba(255,230,80,0.35)");
      glow.addColorStop(0.4, "rgba(255,200,50,0.15)");
      glow.addColorStop(1, "rgba(255,200,50,0)");
      ctx!.fillStyle = glow;
      ctx!.beginPath();
      ctx!.arc(sx, sy, r * 3.5 * pulse, 0, Math.PI * 2);
      ctx!.fill();

      // Sun body
      const sunGrad = ctx!.createRadialGradient(sx - 5, sy - 5, 2, sx, sy, r);
      sunGrad.addColorStop(0, "#fff9c4");
      sunGrad.addColorStop(0.5, "#FFD600");
      sunGrad.addColorStop(1, "#FF8F00");
      ctx!.fillStyle = sunGrad;
      ctx!.beginPath();
      ctx!.arc(sx, sy, r, 0, Math.PI * 2);
      ctx!.fill();

      // Rays
      ctx!.save();
      ctx!.translate(sx, sy);
      ctx!.rotate(t * 0.003);
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const len = r * 0.7 + r * 0.3 * Math.sin(t * 0.05 + i);
        ctx!.strokeStyle = `rgba(255,220,60,${0.3 + 0.2 * Math.sin(t * 0.04 + i)})`;
        ctx!.lineWidth = 2;
        ctx!.beginPath();
        ctx!.moveTo(Math.cos(angle) * (r + 4), Math.sin(angle) * (r + 4));
        ctx!.lineTo(Math.cos(angle) * (r + 4 + len), Math.sin(angle) * (r + 4 + len));
        ctx!.stroke();
      }
      ctx!.restore();
    }

    function drawCloud(x: number, y: number, scale: number, alpha: number) {
      ctx!.save();
      ctx!.globalAlpha = alpha;
      ctx!.fillStyle = "white";
      const puffs = [
        [0, 0, 22 * scale],
        [18 * scale, -8 * scale, 18 * scale],
        [36 * scale, 0, 20 * scale],
        [52 * scale, -4 * scale, 16 * scale],
        [66 * scale, 2 * scale, 18 * scale],
      ];
      puffs.forEach(([px, py, pr]) => {
        ctx!.beginPath();
        ctx!.arc(x + px, y + py, pr, 0, Math.PI * 2);
        ctx!.fill();
      });
      ctx!.restore();
    }

    function drawClouds(w: number, h: number) {
      const clouds = [
        { bx: 0.05, y: h * 0.12, scale: 0.9, speed: 0.12, alpha: 0.82 },
        { bx: 0.28, y: h * 0.08, scale: 0.65, speed: 0.08, alpha: 0.6 },
        { bx: 0.5, y: h * 0.15, scale: 1.1, speed: 0.1, alpha: 0.75 },
        { bx: 0.72, y: h * 0.06, scale: 0.55, speed: 0.14, alpha: 0.5 },
      ];
      clouds.forEach((c) => {
        const x = ((c.bx * w + t * c.speed) % (w + 120)) - 80;
        drawCloud(x, c.y, c.scale, c.alpha);
      });
    }

    function drawHills(w: number, h: number) {
      // Back hill — lighter green
      ctx!.fillStyle = "#4caf50";
      ctx!.beginPath();
      ctx!.moveTo(0, h);
      ctx!.bezierCurveTo(w * 0.1, h * 0.62, w * 0.25, h * 0.55, w * 0.4, h * 0.62);
      ctx!.bezierCurveTo(w * 0.55, h * 0.69, w * 0.65, h * 0.58, w * 0.8, h * 0.63);
      ctx!.bezierCurveTo(w * 0.9, h * 0.67, w * 0.95, h * 0.65, w, h * 0.68);
      ctx!.lineTo(w, h);
      ctx!.closePath();
      ctx!.fill();

      // Mid hill
      ctx!.fillStyle = "#388e3c";
      ctx!.beginPath();
      ctx!.moveTo(0, h);
      ctx!.bezierCurveTo(w * 0.08, h * 0.72, w * 0.2, h * 0.68, w * 0.35, h * 0.72);
      ctx!.bezierCurveTo(w * 0.5, h * 0.76, w * 0.6, h * 0.7, w * 0.75, h * 0.74);
      ctx!.bezierCurveTo(w * 0.88, h * 0.78, w * 0.94, h * 0.75, w, h * 0.76);
      ctx!.lineTo(w, h);
      ctx!.closePath();
      ctx!.fill();

      // Front ground
      const groundGrad = ctx!.createLinearGradient(0, h * 0.78, 0, h);
      groundGrad.addColorStop(0, "#2e7d32");
      groundGrad.addColorStop(1, "#1b5e20");
      ctx!.fillStyle = groundGrad;
      ctx!.fillRect(0, h * 0.78, w, h * 0.22);
    }

    function drawTurbine(
      cx: number, groundY: number, towerH: number, speed: number, phase: number, scale: number
    ) {
      const towerW = towerH * 0.028 * scale;
      const bladeLen = towerH * 0.62;
      const hubY = groundY - towerH;
      const hubR = towerH * 0.028 * scale;

      // Tower shadow
      ctx!.fillStyle = "rgba(0,0,0,0.10)";
      ctx!.beginPath();
      ctx!.ellipse(cx, groundY, towerW * 2.5, towerW * 0.6, 0, 0, Math.PI * 2);
      ctx!.fill();

      // Tower
      const towerGrad = ctx!.createLinearGradient(cx - towerW, 0, cx + towerW, 0);
      towerGrad.addColorStop(0, "#b0bec5");
      towerGrad.addColorStop(0.4, "#eceff1");
      towerGrad.addColorStop(1, "#90a4ae");
      ctx!.fillStyle = towerGrad;
      ctx!.beginPath();
      ctx!.moveTo(cx - towerW * 1.6, groundY);
      ctx!.lineTo(cx + towerW * 1.6, groundY);
      ctx!.lineTo(cx + towerW * 0.6, hubY);
      ctx!.lineTo(cx - towerW * 0.6, hubY);
      ctx!.closePath();
      ctx!.fill();

      // Blades
      const angle = t * speed + phase;
      ctx!.save();
      ctx!.translate(cx, hubY);
      for (let b = 0; b < 3; b++) {
        const a = angle + (b * Math.PI * 2) / 3;
        ctx!.save();
        ctx!.rotate(a);
        const bladeGrad = ctx!.createLinearGradient(0, 0, 0, -bladeLen);
        bladeGrad.addColorStop(0, "#cfd8dc");
        bladeGrad.addColorStop(0.5, "#eceff1");
        bladeGrad.addColorStop(1, "#b0bec5");
        ctx!.fillStyle = bladeGrad;
        ctx!.beginPath();
        ctx!.moveTo(0, 0);
        ctx!.bezierCurveTo(
          -bladeLen * 0.06, -bladeLen * 0.25,
          -bladeLen * 0.07, -bladeLen * 0.7,
          0, -bladeLen
        );
        ctx!.bezierCurveTo(
          bladeLen * 0.04, -bladeLen * 0.7,
          bladeLen * 0.04, -bladeLen * 0.25,
          0, 0
        );
        ctx!.closePath();
        ctx!.fill();
        ctx!.restore();
      }

      // Hub
      const hubGrad = ctx!.createRadialGradient(cx - hubR * 0.3, hubY - hubR * 0.3, hubR * 0.1, cx, hubY, hubR);
      hubGrad.addColorStop(0, "#eceff1");
      hubGrad.addColorStop(1, "#78909c");
      ctx!.fillStyle = hubGrad;
      ctx!.beginPath();
      ctx!.arc(0, 0, hubR, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();
    }

    function drawSolarArray(
      x: number, groundY: number, tiltAngle: number, panelW: number, panelH: number
    ) {
      const panels = 3;
      const gap = panelW * 1.15;

      for (let p = 0; p < panels; p++) {
        const px = x + p * gap;
        const poleH = panelH * 1.4;

        // Pole
        ctx!.strokeStyle = "#546e7a";
        ctx!.lineWidth = 3;
        ctx!.beginPath();
        ctx!.moveTo(px + panelW / 2, groundY);
        ctx!.lineTo(px + panelW / 2, groundY - poleH);
        ctx!.stroke();

        // Panel shadow on ground
        ctx!.fillStyle = "rgba(0,0,0,0.08)";
        ctx!.beginPath();
        ctx!.ellipse(px + panelW / 2, groundY, panelW * 0.4, 4, 0, 0, Math.PI * 2);
        ctx!.fill();

        // Panel body
        ctx!.save();
        ctx!.translate(px + panelW / 2, groundY - poleH);
        ctx!.rotate(tiltAngle);

        // Panel frame
        ctx!.fillStyle = "#0d47a1";
        ctx!.strokeStyle = "#1565c0";
        ctx!.lineWidth = 1.5;
        ctx!.beginPath();
        ctx!.roundRect(-panelW / 2, -panelH, panelW, panelH, 3);
        ctx!.fill();
        ctx!.stroke();

        // Grid lines
        ctx!.strokeStyle = "rgba(144,202,249,0.5)";
        ctx!.lineWidth = 0.8;
        for (let row = 1; row < 3; row++) {
          ctx!.beginPath();
          ctx!.moveTo(-panelW / 2, -panelH + (panelH / 3) * row);
          ctx!.lineTo(panelW / 2, -panelH + (panelH / 3) * row);
          ctx!.stroke();
        }
        for (let col = 1; col < 4; col++) {
          ctx!.beginPath();
          ctx!.moveTo(-panelW / 2 + (panelW / 4) * col, -panelH);
          ctx!.lineTo(-panelW / 2 + (panelW / 4) * col, 0);
          ctx!.stroke();
        }

        // Shine sweep
        const shineX = -panelW * 0.8 + ((t * 1.2) % (panelW * 2.2));
        const shineGrad = ctx!.createLinearGradient(shineX - 20, 0, shineX + 20, 0);
        shineGrad.addColorStop(0, "rgba(255,255,255,0)");
        shineGrad.addColorStop(0.5, "rgba(255,255,255,0.38)");
        shineGrad.addColorStop(1, "rgba(255,255,255,0)");
        ctx!.fillStyle = shineGrad;
        ctx!.beginPath();
        ctx!.roundRect(-panelW / 2, -panelH, panelW, panelH, 3);
        ctx!.fill();

        ctx!.restore();
      }
    }

    function drawBirds(w: number) {
      birds.forEach((bird) => {
        bird.x += bird.speed;
        if (bird.x > w + 40) bird.x = -40;
        bird.wingPhase += 0.08;

        const wing = Math.sin(bird.wingPhase) * bird.size * 1.2;
        ctx!.strokeStyle = "rgba(20,20,40,0.7)";
        ctx!.lineWidth = 1.2;
        ctx!.beginPath();
        // Left wing
        ctx!.moveTo(bird.x - bird.size * 1.5, bird.y - wing);
        ctx!.quadraticCurveTo(bird.x - bird.size * 0.5, bird.y, bird.x, bird.y);
        // Right wing
        ctx!.quadraticCurveTo(bird.x + bird.size * 0.5, bird.y, bird.x + bird.size * 1.5, bird.y - wing);
        ctx!.stroke();
      });
    }

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);

      drawSky(w, h);
      drawClouds(w, h);
      drawSun(w, h);
      drawHills(w, h);

      // Wind turbines — left side only
      const turbines = [
        { cx: w * 0.06, h: h * 0.52, speed: 0.022, phase: 0 },
        { cx: w * 0.16, h: h * 0.44, speed: 0.018, phase: 1.2 },
        { cx: w * 0.27, h: h * 0.56, speed: 0.025, phase: 2.4 },
        { cx: w * 0.38, h: h * 0.40, speed: 0.020, phase: 0.8 },
      ];
      turbines.forEach((tb) => {
        drawTurbine(tb.cx, h * 0.78, tb.h, tb.speed, tb.phase, 1);
      });

      // Solar panels — right side, slow sun-tracking tilt (expanded)
      const baseTilt = -0.35 + 0.18 * Math.sin(t * 0.004);
      drawSolarArray(w * 0.55, h * 0.78, baseTilt, 28, 18);
      drawSolarArray(w * 0.68, h * 0.78, baseTilt + 0.05 * Math.sin(t * 0.006), 22, 14);
      drawSolarArray(w * 0.80, h * 0.78, baseTilt - 0.03 * Math.sin(t * 0.005), 28, 18);

      drawBirds(w);

      t++;
      animId = requestAnimationFrame(draw);
    }

    const resize = () => {
      canvas!.width = canvas!.offsetWidth * window.devicePixelRatio;
      canvas!.height = canvas!.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "260px",
        display: "block",
      }}
    />
  );
}
