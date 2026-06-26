'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { number: '5+', label: 'Years of Development' },
  { number: '4+', label: 'Years of Teaching'    },
  { number: '10+', label: 'Projects Shipped'    },
  { number: '3',  label: 'Companies Worked At'  },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-[100px] px-[5%] max-w-[1100px] mx-auto"
    >
      <p className="reveal font-mono text-[0.8rem] text-teal tracking-[0.15em] uppercase mb-2">
        01. about me
      </p>
      <h2 className="reveal font-bold text-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
        Who I Am
      </h2>
      <div className="reveal w-[60px] h-[3px] bg-teal rounded-full mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="reveal-left flex flex-col gap-4">
          <p className="text-muted text-base">
            Full stack developer from Lahore, Pakistan with 5+ years of experience building web and
            mobile apps. I work mainly with React, Next.js, Python FastAPI and Node.js and I&apos;m
            comfortable across the whole stack — from clean frontend interfaces to backend APIs and
            databases.
          </p>
          <p className="text-muted text-base">
            I&apos;ve worked across different industries — AI platforms, fintech, enterprise security
            tools — which gave me a solid understanding of how to build things that scale. I care
            about clean code, performance, and making sure the end user experience is smooth.
          </p>
          <p className="text-muted text-base">
            Outside of engineering, I&apos;ve spent 8+ years teaching Computer Science and Web
            Development, which taught me how to break down complex problems clearly — a skill I
            bring into every project and team.
          </p>
          <div className="mt-2">
            <a
              href="mailto:anas.saleem.dev@gmail.com"
              className="bg-teal text-white px-8 py-3 rounded-card font-semibold text-[0.95rem] inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-teal"
            >
              Say Hello →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 reveal-right">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface border border-theme-border rounded-card p-6 text-center transition-all duration-300 hover:border-teal hover:-translate-y-1"
            >
              <div className="font-mono text-[2.2rem] font-bold text-teal">{s.number}</div>
              <div className="text-[0.85rem] text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
