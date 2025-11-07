import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] sm:min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability, non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white dark:from-zinc-950/80 dark:via-zinc-950/20 dark:to-zinc-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full border border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
            Portfolio • Interactive • Modern
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-400">
            Designing stories through code and delightful motion.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-700 dark:text-zinc-300">
            A crafted journey of works, skills, and experiences. Scroll to explore the narrative — each section unfolds a new chapter.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#works" className="inline-flex items-center rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm sm:text-base font-semibold shadow-lg shadow-black/10 dark:shadow-white/10 hover:scale-[1.02] active:scale-[0.99] transition">
              View Works
            </a>
            <a href="#message" className="inline-flex items-center rounded-xl bg-white text-black dark:bg-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 px-5 py-3 text-sm sm:text-base font-semibold hover:scale-[1.02] active:scale-[0.99] transition">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
