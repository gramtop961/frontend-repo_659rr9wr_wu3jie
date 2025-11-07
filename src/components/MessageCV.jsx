import { motion } from 'framer-motion';
import { Send, FileText } from 'lucide-react';

export default function MessageCV() {
  return (
    <section id="message" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 p-6 sm:p-8 bg-white dark:bg-zinc-900"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center rounded-lg bg-zinc-100 dark:bg-zinc-800"><Send className="h-4 w-4" /></div>
              <h3 className="text-xl sm:text-2xl font-semibold">Leave a Message</h3>
            </div>
            <form onSubmit={(e)=> e.preventDefault()} className="mt-4 space-y-4">
              <input type="text" placeholder="Your name" className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input type="email" placeholder="Email" className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea rows="5" placeholder="Message" className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm sm:text-base font-semibold shadow-lg shadow-black/10 dark:shadow-white/10 hover:scale-[1.02] active:scale-[0.99] transition">
                <Send className="h-4 w-4" /> Send
              </button>
            </form>
          </motion.div>

          <motion.div
            id="cv"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 p-6 sm:p-8 bg-white dark:bg-zinc-900"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center rounded-lg bg-zinc-100 dark:bg-zinc-800"><FileText className="h-4 w-4" /></div>
              <h3 className="text-xl sm:text-2xl font-semibold">Curriculum Vitae</h3>
            </div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">Download the latest copy of my CV or view it online.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-semibold">Download PDF</a>
              <a href="#" className="inline-flex items-center rounded-xl border border-zinc-200 dark:border-zinc-800 px-5 py-3 text-sm font-semibold">View Online</a>
            </div>
            <div className="mt-6 rounded-xl bg-gradient-to-br from-zinc-100 dark:from-zinc-800 to-transparent p-4 text-sm text-zinc-600 dark:text-zinc-300">
              Tip: You can replace the links with your real CV URL.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
