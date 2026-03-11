"use client";

import { useEffect, useRef, useCallback } from "react";

/** Star data for the constellation field */
interface Star {
  baseX: number;
  baseY: number;
  z: number; // depth layer 1-3
  radius: number;
  opacity: number;
}

/** Click burst particle */
interface Burst {
  x: number;
  y: number;
  angle: number;
  birth: number;
}

const BURST_DURATION = 400;
const BURST_COUNT = 8;
const MAX_BURSTS = 40; // Cap burst array (5 rapid clicks worth)
const CONNECTION_RADIUS = 120;
const MAX_CONNECTIONS = 3;

export default function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const burstsRef = useRef<Burst[]>([]);
  const rafRef = useRef<number>(0);
  const isMobileRef = useRef(false);
  const reducedMotionRef = useRef(false);

  /** Generate stars based on viewport size */
  const generateStars = useCallback((w: number, h: number): Star[] => {
    const count = isMobileRef.current ? 80 : w < 1024 ? 150 : 300;
    return Array.from({ length: count }, () => ({
      baseX: Math.random() * w,
      baseY: Math.random() * h,
      z: Math.ceil(Math.random() * 3),
      radius: 0.5 + Math.random() * 1.5,
      opacity: 0.3 + Math.random() * 0.7,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Detect reduced motion & mobile
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    isMobileRef.current = window.innerWidth < 768;

    // Handle devicePixelRatio for sharp rendering on Retina displays
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      starsRef.current = generateStars(w, h);
    };
    resize();

    // Debounced resize
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    };

    // Mouse tracking (desktop only)
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Click burst (desktop only, capped to prevent unbounded growth)
    const onClick = (e: MouseEvent) => {
      if (isMobileRef.current || reducedMotionRef.current) return;
      const now = performance.now();
      for (let i = 0; i < BURST_COUNT; i++) {
        burstsRef.current.push({
          x: e.clientX,
          y: e.clientY,
          angle: (Math.PI * 2 * i) / BURST_COUNT,
          birth: now,
        });
      }
      // Cap burst array to prevent unbounded growth on rapid clicks
      if (burstsRef.current.length > MAX_BURSTS) {
        burstsRef.current = burstsRef.current.slice(-MAX_BURSTS);
      }
    };

    window.addEventListener("resize", onResize);
    if (!isMobileRef.current) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("click", onClick);
    }

    // Reduced motion: draw static stars once
    if (reducedMotionRef.current) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const star of starsRef.current) {
        ctx.beginPath();
        ctx.arc(star.baseX, star.baseY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity * 0.3})`;
        ctx.fill();
      }
      return () => {
        window.removeEventListener("resize", onResize);
      };
    }

    // Animation loop
    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const now = performance.now();
      const stars = starsRef.current;
      const isDesktop = !isMobileRef.current;

      // Draw stars with parallax
      for (const star of stars) {
        // Parallax: deeper stars move less
        const parallaxFactor = (4 - star.z) * 0.008;
        const sx = star.baseX + (mx - w / 2) * parallaxFactor;
        const sy = star.baseY + (my - h / 2) * parallaxFactor;

        ctx.beginPath();
        ctx.arc(sx, sy, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity * (0.4 + star.z * 0.2)})`;
        ctx.fill();
      }

      // Mouse proximity connections (desktop only)
      if (isDesktop) {
        let connections = 0;
        for (const star of stars) {
          if (connections >= MAX_CONNECTIONS) break;
          const parallaxFactor = (4 - star.z) * 0.008;
          const sx = star.baseX + (mx - w / 2) * parallaxFactor;
          const sy = star.baseY + (my - h / 2) * parallaxFactor;
          const dist = Math.hypot(sx - mx, sy - my);

          if (dist < CONNECTION_RADIUS) {
            const lineOpacity = 1 - dist / CONNECTION_RADIUS;
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(sx, sy);
            ctx.strokeStyle = `rgba(34,211,238,${lineOpacity * 0.6})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            connections++;
          }
        }
      }

      // Click bursts
      const activeBursts: Burst[] = [];
      for (const b of burstsRef.current) {
        const age = now - b.birth;
        if (age > BURST_DURATION) continue;
        activeBursts.push(b);

        const progress = age / BURST_DURATION;
        const dist = progress * 40;
        const bx = b.x + Math.cos(b.angle) * dist;
        const by = b.y + Math.sin(b.angle) * dist;
        const size = 2 + progress * 3;
        const opacity = 1 - progress;

        ctx.beginPath();
        ctx.arc(bx, by, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(251,191,36,${opacity})`;
        ctx.fill();
      }
      burstsRef.current = activeBursts;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
    };
  }, [generateStars]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      aria-hidden="true"
    />
  );
}
