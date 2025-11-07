import { motion } from 'framer-motion';
import MagneticCard from './MagneticCard';

const projects = [
  {
    title: 'Immersive Dashboard',
    desc: 'A data-rich experience with motion-driven insights and delightful microinteractions.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: '3D Product Explorer',
    desc: 'Interactive 3D viewer to explore products from every angle with subtle depth cues.',
    tags: ['Three.js', 'Spline', 'UX'],
    link: '#',
  },
  {
    title: 'AI Note Studio',
    desc: 'Lightweight web app for capturing ideas, summarizing, and organizing with AI.',
    tags: ['FastAPI', 'MongoDB', 'OpenAI'],
    link: '#',
  },
  {
    title: 'Motion Design Toolkit',
    desc: 'A library of reusable motion primitives and transitions for rapid prototyping.',
    tags: ['Framer Motion', 'Design Systems'],
    link: '#',
  },
];

export default function Works() {
  return (
    <section id="works" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Selected Works</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">A curated set of projects showcasing focus on clarity, motion, and meaningful utility.</p>
        </div>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
          {projects.map((p, i) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group">
              <MagneticCard className="relative overflow-hidden rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white dark:bg-zinc-900 p-6 sm:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-semibold">{p.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">Case</span>
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">{t}</span>
                    ))}
                  </div>
                </div>
              </MagneticCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
