import { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

// Floating particle field that adapts to theme and scroll
export default function ParticleField() {
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.9, 0.6]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let rafId;

    const isDark = () => document.documentElement.classList.contains('dark');

    const particles = Array.from({ length: Math.min(160, Math.floor((width * height) / 25000)) }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.4,
    }));

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const draw = () => {
      const dark = isDark();
      ctx.clearRect(0, 0, width, height);

      // background subtle gradient that shifts with theme
      const bg = ctx.createLinearGradient(0, 0, width, height);
      if (dark) {
        bg.addColorStop(0, 'rgba(8,8,12,0.6)');
        bg.addColorStop(1, 'rgba(12,10,20,0.4)');
      } else {
        bg.addColorStop(0, 'rgba(250,250,255,0.6)');
        bg.addColorStop(1, 'rgba(240,245,255,0.4)');
      }
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const hueA = dark ? 208 : 222; // blue
      const hueB = dark ? 350 : 12;  // magenta / warm

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // connection lines
        for (const q of particles) {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 12000) {
            const a = 1 - d2 / 12000;
            ctx.strokeStyle = `hsla(${hueA + (hueB - hueA) * a}, 90%, ${dark ? 60 : 40}%, ${a * 0.08})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // particle
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grd.addColorStop(0, `hsla(${hueA}, 95%, ${dark ? 78 : 45}%, 0.9)`);
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', onResize);
    draw();
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      style={{ opacity }}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
