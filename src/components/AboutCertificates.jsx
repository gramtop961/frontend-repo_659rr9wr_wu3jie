import { motion } from 'framer-motion';
import { Award, User } from 'lucide-react';

const certificates = [
  { name: 'Google UX Design', issuer: 'Coursera', year: '2023' },
  { name: 'Meta Front-End Developer', issuer: 'Coursera', year: '2024' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2022' },
];

export default function AboutCertificates() {
  return (
    <section id="about" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center rounded-lg bg-zinc-100 dark:bg-zinc-800"><User className="h-4 w-4" /></div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">About Me</h2>
            </div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I craft interactive experiences that blend aesthetics with performance. My approach is systems-first: establish strong foundations, then elevate with motion and polish. I enjoy turning complex ideas into intuitive interfaces that feel effortless.
            </p>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Outside of shipping, I explore generative visuals, build design tools, and mentor newcomers. I value clarity, kindness, and a bias for action.
            </p>
          </motion.div>
          <motion.div
            id="certificates"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 p-6 sm:p-8 bg-white dark:bg-zinc-900"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center rounded-lg bg-zinc-100 dark:bg-zinc-800"><Award className="h-4 w-4" /></div>
              <h3 className="text-xl sm:text-2xl font-semibold">Certificates</h3>
            </div>
            <ul className="mt-4 space-y-4">
              {certificates.map((c) => (
                <li key={c.name} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{c.issuer}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">{c.year}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
