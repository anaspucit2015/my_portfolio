'use client';

import { useTyped } from '@/hooks/useTyped';

const titles = [
  'Full Stack Developer',
  'React.js Engineer',
  'Python FastAPI Dev',
  'Educator & Mentor',
];

export default function Hero() {
  const typed = useTyped(titles);

  return (
    <section id="hero" className="relative flex items-center min-h-screen pt-16 overflow-hidden w-full max-w-full">
      {/* Radial glow */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 50%, var(--teal-dim), transparent)' }}
      />
      {/* Grid pattern */}
      <div className="hero-grid" />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-[5%]">
        {/* Greeting */}
        <p className="font-mono text-teal text-base mb-4 animate-fade-in-up">
          {'// Hello, World! '}
          <span className="wave-hand text-2xl">👋</span>
        </p>

        {/* Name */}
        <h1
          className="font-bold text-heading leading-[1.05] mb-2 animate-fade-in-up-d1"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}
        >
          Anas <span className="text-teal">Saleem</span>
        </h1>

        {/* Typed title */}
        <div
          className="text-muted font-normal mb-6 animate-fade-in-up-d2 min-h-[2.2rem]"
          style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
        >
          <span>{typed}</span>
          <span className="text-teal animate-blink">|</span>
        </div>

        {/* Description */}
        <p className="max-w-[520px] text-muted text-[1.05rem] mb-10 animate-fade-in-up-d3">
          Full Stack Developer with 5+ years building scalable web and mobile
          applications. I turn ideas into clean, fast, production-ready products.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap animate-fade-in-up-d4">
          <a
            href="#projects"
            className="bg-teal text-white px-8 py-3 rounded-card font-semibold text-[0.95rem] inline-flex items-center gap-2 border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-teal"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="bg-transparent text-teal px-8 py-3 rounded-card font-semibold text-[0.95rem] border border-teal inline-flex items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-teal-dim hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
