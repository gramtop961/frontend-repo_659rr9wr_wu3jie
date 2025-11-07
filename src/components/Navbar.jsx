import { useEffect, useState } from 'react';
import { Sun, Moon, Rocket } from 'lucide-react';

function ThemeToggle() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    // Initialize from localStorage or system
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      applyTheme(stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      applyTheme(initial);
    }
  }, []);

  const applyTheme = (mode) => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200/60 dark:border-zinc-700/60 px-3 py-1.5 text-sm font-medium backdrop-blur-md bg-white/60 dark:bg-zinc-900/60 hover:bg-white/80 dark:hover:bg-zinc-900/80 transition-colors"
    >
      {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span className="hidden sm:block">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
}

export default function Navbar() {
  const links = [
    { href: '#works', label: 'Works' },
    { href: '#about', label: 'About' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#message', label: 'Message' },
    { href: '#cv', label: 'CV' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl px-4 sm:px-6 py-3">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="grid place-items-center h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-white">
              <Rocket className="h-4 w-4" />
            </div>
            <span className="hidden sm:block">My Portfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
