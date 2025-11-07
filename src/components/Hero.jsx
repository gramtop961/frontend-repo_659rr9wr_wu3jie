import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParticleField from './ParticleField';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section id="top" ref={ref} className="relative min-h-[92vh] sm:min-h-screen overflow-hidden">
      {/* 3D Animation */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <Spline scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Floating particle field (non-blocking, global ambience) */}
      <ParticleField />

      {/* Animated ambient glows (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ scale: 0.9, opacity: 0.65 }}
          animate={{ scale: [0.9, 1.05, 0.95, 1], opacity: [0.65, 0.8, 0.7, 0.75] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl bg-gradient-to-tr from-indigo-500/40 via-fuchsia-500/30 to-orange-400/30"
        />
        <motion.div
          initial={{ scale: 1.1, opacity: 0.6 }}
          animate={{ scale: [1.1, 0.95, 1.05, 1], opacity: [0.6, 0.75, 0.65, 0.7] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full blur-3xl bg-gradient-to-tr from-cyan-400/30 via-blue-500/30 to-purple-500/30"
        />
      </div>

      {/* Readability veil (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white dark:from-zinc-950/80 dark:via-zinc-950/20 dark:to-zinc-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300"
          >
            Portfolio • Interactive • Modern
          </motion.span>
          <motion.h1
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-400"
          >
            Designing stories through code and delightful motion.
          </motion.h1>
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 text-base sm:text-lg text-zinc-700 dark:text-zinc-300"
          >
            A crafted journey of works, skills, and experiences. Scroll to explore the narrative — each section unfolds a new chapter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex gap-3"
          >
            <a href="#works" className="inline-flex items-center rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm sm:text-base font-semibold shadow-lg shadow-black/10 dark:shadow-white/10 hover:scale-[1.03] active:scale-[0.98] transition will-change-transform">
              View Works
            </a>
            <a href="#message" className="inline-flex items-center rounded-xl bg-white text-black dark:bg-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 px-5 py-3 text-sm sm:text-base font-semibold hover:scale-[1.03] active:scale-[0.98] transition will-change-transform">
              Get in Touch
            </a>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-14 hidden sm:flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300"
          >
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="h-8 w-[2px] rounded-full bg-zinc-400/60 dark:bg-zinc-600/60"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
