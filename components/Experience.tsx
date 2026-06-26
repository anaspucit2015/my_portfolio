'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const jobs = [
  {
    period: 'Aug 2025 — Present',
    role: 'Software Engineer',
    company: 'Trionic · Lahore, Pakistan',
    desc: 'Building scalable web and mobile apps with React.js, Next.js and Python FastAPI. Handling backend logic, authentication and API design with FastAPI and PostgreSQL. Focused on performance, clean architecture and owning features end to end.',
    tags: ['React.js', 'Next.js', 'Python FastAPI', 'PostgreSQL', 'Redux Toolkit'],
  },
  {
    period: 'Oct 2021 — May 2025',
    role: 'Software Engineer',
    company: 'Gigalabs · Lahore, Pakistan',
    desc: 'Spent almost 4 years here working on different products across different industries. Got deep into React, Next.js, Node.js and React Native. Worked full stack, integrated REST and GraphQL APIs, mentored junior devs and contributed to architecture decisions.',
    tags: ['React.js', 'Next.js', 'Node.js', 'React Native', 'GraphQL'],
  },
  {
    period: 'Oct 2020 — Oct 2021',
    role: 'React Developer',
    company: 'Xint Solutions · Punjab, Pakistan',
    desc: 'First proper job — focused on React and getting good at the frontend. Built responsive web apps, reusable components, integrated REST APIs and handled state with Redux. Worked on an Attendance Management System and learned how real projects work.',
    tags: ['React.js', 'Redux', 'REST APIs', 'JavaScript'],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-[100px] px-[5%] max-w-[1100px] mx-auto"
    >
      <p className="reveal font-mono text-[0.8rem] text-teal tracking-[0.15em] uppercase mb-2">
        03. experience
      </p>
      <h2 className="reveal font-bold text-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
        Work History
      </h2>
      <div className="reveal w-[60px] h-[3px] bg-teal rounded-full mb-12" />

      <div className="timeline">
        {jobs.map((job) => (
          <div key={job.period} className="reveal relative mb-12 pl-8 group">
            {/* Dot */}
            <div
              className="absolute top-[6px] w-[14px] h-[14px] rounded-full bg-teal border-2 border-theme-bg transition-all duration-300 group-hover:shadow-[0_0_0_6px_var(--teal-glow)]"
              style={{ left: '-2.35rem', boxShadow: '0 0 0 4px var(--teal-dim)' }}
            />
            <p className="font-mono text-[0.78rem] text-teal mb-1">{job.period}</p>
            <h3 className="text-[1.1rem] font-semibold text-heading">{job.role}</h3>
            <p className="text-[0.95rem] text-muted mb-3">{job.company}</p>
            <p className="text-muted text-[0.95rem]">{job.desc}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {job.tags.map((t) => (
                <span key={t} className="font-mono text-[0.75rem] px-2 py-0.5 bg-teal-dim text-teal rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
