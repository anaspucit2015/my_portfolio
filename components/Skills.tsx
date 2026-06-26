'use client';

import { Monitor, Server, Database, Settings, BookOpen } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = [
  {
    Icon: Monitor,
    title: 'Frontend',
    tags: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Redux', 'RTK Query', 'D3.js', 'styled-components'],
  },
  {
    Icon: Server,
    title: 'Backend',
    tags: ['Python FastAPI', 'Node.js', 'Express.js', 'NestJS', 'GraphQL', 'REST APIs'],
  },
  {
    Icon: Database,
    title: 'Databases',
    tags: ['PostgreSQL', 'MongoDB', 'Firebase', 'SQL'],
  },
  {
    Icon: Settings,
    title: 'DevOps & Tools',
    tags: ['Docker', 'CI/CD', 'Git', 'Webpack', 'Vite', 'Jest', 'Jira'],
  },
  {
    Icon: BookOpen,
    title: 'Teaching',
    tags: ['JavaScript', 'Python', 'HTML & CSS', 'PHP', 'Computer Science', 'Web Development'],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="bg-theme-bg2 w-full py-[100px]" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-[1100px] mx-auto px-[5%]">
        <p className="reveal font-mono text-[0.8rem] text-teal tracking-[0.15em] uppercase mb-2">
          02. skills
        </p>
        <h2 className="reveal font-bold text-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
          Tech Stack
        </h2>
        <div className="reveal w-[60px] h-[3px] bg-teal rounded-full mb-12" />

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {categories.map(({ Icon, title, tags }) => (
            <div
              key={title}
              className="reveal-scale bg-surface border border-theme-border rounded-card p-7 transition-all duration-300 hover:border-teal hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 font-mono text-[0.8rem] text-teal uppercase tracking-[0.1em] mb-4">
                <Icon size={14} strokeWidth={1.5} />
                {title}
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-teal-dim text-teal border border-teal-glow px-3 py-1 rounded-md text-[0.82rem] font-medium cursor-default transition-colors duration-300 hover:bg-teal hover:text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
