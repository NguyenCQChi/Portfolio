"use client";

import { useEffect, useRef } from "react";

/** Trail particle with pre-computed visual properties */
interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  birth: number;
}

const LIFETIME = 600;
const MAX_PARTICLES = 15;
const GRAVITY = 0.1;

export default function CursorCometTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Skip on mobile or reduced motion
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle devicePixelRatio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    };

    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const count = Math.random() > 0.5 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 1.5,
          birth: now,
        });
      }
      // Cap at max particles (drop oldest)
      if (particlesRef.current.length > MAX_PARTICLES) {
        particlesRef.current = particlesRef.current.slice(-MAX_PARTICLES);
      }
    };

    const animate = () => {
      const now = performance.now();
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const alive: Particle[] = [];
      for (const p of particlesRef.current) {
        const age = now - p.birth;
        if (age >= LIFETIME) continue;

        // Physics update
        p.x += p.dx;
        p.y += p.dy;
        p.dy += GRAVITY;
        alive.push(p);

        // Pre-compute visuals in the animation loop (fixes render-time issue)
        const progress = age / LIFETIME;
        const opacity = 1 - progress;
        const size = 2 + progress * 2;

        // Cyan → violet color interpolation
        const r = Math.round(34 + progress * 90);
        const g = Math.round(211 - progress * 153);
        const b = Math.round(238 - progress * 1);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`;
        ctx.fill();
      }

      particlesRef.current = alive;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[2] pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
      aria-hidden="true"
    />
  );
}
