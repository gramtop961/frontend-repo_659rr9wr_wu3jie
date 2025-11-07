import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Wrapper that adds a subtle parallax reveal between sections
export default function SectionParallax({ id, className = '', children, overlay = true }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);

  return (
    <section id={id} ref={ref} className={`relative scroll-mt-24 ${className}`}>
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/0 dark:to-white/0" />
      )}
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </section>
  );
}
