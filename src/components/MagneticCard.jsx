import { useRef } from 'react';
import { motion } from 'framer-motion';

// Magnetic hover card with tilt and cursor-follow light
export default function MagneticCard({ children, className = '', intensity = 16 }) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((y - midY) / midY) * -intensity;
    const rotateY = ((x - midX) / midX) * intensity;
    el.style.setProperty('--rx', `${rotateX}deg`);
    el.style.setProperty('--ry', `${rotateY}deg`);
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: 'perspective(900px) rotateX(var(--rx)) rotateY(var(--ry))',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`relative will-change-transform ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: 'radial-gradient(600px circle at var(--mx) var(--my), rgba(59,130,246,0.12), transparent 40%)',
        }}
      />
      {children}
    </motion.div>
  );
}
