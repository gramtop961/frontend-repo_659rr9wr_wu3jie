import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import AboutCertificates from './components/AboutCertificates';
import MessageCV from './components/MessageCV';
import SectionParallax from './components/SectionParallax';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 selection:bg-indigo-500/20 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <SectionParallax id="works">
          <Works />
        </SectionParallax>
        <SectionParallax id="about">
          <AboutCertificates />
        </SectionParallax>
        <SectionParallax id="message">
          <MessageCV />
        </SectionParallax>
      </main>
      <footer className="border-t border-zinc-200/70 dark:border-zinc-800/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 text-sm text-center text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Your Name — Built with care.
        </div>
      </footer>
    </div>
  );
}
