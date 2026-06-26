'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const roles = [
  {
    period: '2025',
    role: 'Web Development Instructor',
    company: 'NAVTTC · Lahore, Pakistan',
    desc: 'Delivered a hands-on Web Development course covering HTML, CSS, JavaScript and PHP to students in a government-funded technical training program. Designed curriculum focused on practical, job-ready skills.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    period: '2017 — 2021',
    role: 'Computer Science Teacher',
    company: 'Naveed Majeed Group of Academies · Lahore, Pakistan',
    desc: 'Taught Computer Science from 9th grade through graduation level. Covered programming fundamentals, Python, JavaScript and problem solving. Mentored students on projects and helped them build a strong foundation for careers in tech.',
    tags: ['Python', 'JavaScript', 'Computer Science'],
  },
];

export default function Teaching() {
  const ref = useScrollReveal();

  return (
    <section id="teaching" className="bg-theme-bg2 w-full py-[100px]" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-[1100px] mx-auto px-[5%]">
        <p className="reveal font-mono text-[0.8rem] text-teal tracking-[0.15em] uppercase mb-2">
          04. teaching
        </p>
        <h2 className="reveal font-bold text-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
          Teaching Experience
        </h2>
        <div className="reveal w-[60px] h-[3px] bg-teal rounded-full mb-12" />

        <div className="timeline">
          {roles.map((r) => (
            <div key={r.period} className="reveal relative mb-12 pl-8 group">
              <div
                className="absolute top-[6px] w-[14px] h-[14px] rounded-full bg-teal border-2 border-theme-bg2 transition-all duration-300 group-hover:shadow-[0_0_0_6px_var(--teal-glow)]"
                style={{ left: '-2.35rem', boxShadow: '0 0 0 4px var(--teal-dim)' }}
              />
              <p className="font-mono text-[0.78rem] text-teal mb-1">{r.period}</p>
              <h3 className="text-[1.1rem] font-semibold text-heading">{r.role}</h3>
              <p className="text-[0.95rem] text-muted mb-3">{r.company}</p>
              <p className="text-muted text-[0.95rem]">{r.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {r.tags.map((t) => (
                  <span key={t} className="font-mono text-[0.75rem] px-2 py-0.5 bg-teal-dim text-teal rounded">
                    {t}
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
