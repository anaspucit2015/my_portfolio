'use client';

import { useRef } from 'react';
import { Bot, ShieldCheck, BarChart2, MapPin, Gamepad2, Leaf, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  {
    Icon: Bot,
    name: 'STACKEX',
    tagline: 'AI Mobile App Platform',
    desc: 'AI-powered platform where users describe a mobile app in plain text and the platform builds and ships a production-ready iOS and Android app automatically.',
    tech: ['Next.js', 'React Native', 'Python FastAPI', 'NestJS', 'PostgreSQL', 'Docker'],
    link: 'https://stackex.ai',
  },
  {
    Icon: ShieldCheck,
    name: 'Deepfake & Vishing',
    tagline: 'Enterprise Security Training',
    desc: 'Security awareness platform that simulates deepfake and social engineering attacks to train employees. Integrated with Slack, Microsoft, Google and Okta.',
    tech: ['Next.js', 'Python FastAPI', 'PostgreSQL', 'React Query'],
    link: '',
  },
  {
    Icon: BarChart2,
    name: 'FlavorWiki',
    tagline: 'Consumer Insights',
    desc: 'D3.js interactive data visualizations with GraphQL API and SSR optimizations for brand preference analytics.',
    tech: ['React.js', 'GraphQL', 'D3.js', 'MongoDB'],
    link: 'https://flavorwiki.com',
  },
  {
    Icon: MapPin,
    name: 'Crowdhub',
    tagline: 'Employee Management',
    desc: 'Real-time employee tracking with Google Maps API, WebSocket updates and role-based access control.',
    tech: ['React.js', 'WebSockets', 'Node.js', 'PostgreSQL'],
    link: '',
  },
  {
    Icon: Gamepad2,
    name: 'Showdown',
    tagline: 'E-Gaming Tournament App',
    desc: 'Cross-platform mobile app for e-gaming tournaments with real-time leaderboards and Firebase.',
    tech: ['React Native', 'RTK Query', 'Firebase'],
    link: 'https://apps.apple.com/us/app/showdown-me/id6737623167',
  },
  {
    Icon: Leaf,
    name: 'Loam',
    tagline: 'AI Green Loans',
    desc: 'AI-driven financial platform with personalized green loan recommendations and SSR optimizations.',
    tech: ['React.js', 'Redux', 'RTK Query', '.NET'],
    link: '',
  },
];

function ProjectCard({
  Icon, name, tagline, desc, tech, link, index,
}: {
  Icon: React.ElementType; name: string; tagline: string; desc: string;
  tech: string[]; link: string; index: number;
}) {
  const cardRef  = useRef<HTMLDivElement>(null);
  const glowRef  = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;

    card.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateZ(8px)`;
    glow.style.opacity   = '1';
    glow.style.background = `radial-gradient(260px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, var(--teal-glow), transparent 70%)`;
  };

  const onMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    glow.style.opacity   = '0';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="reveal-scale relative group bg-surface border border-theme-border rounded-card-lg overflow-hidden flex flex-col cursor-default"
      style={{
        transition: 'transform 0.15s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Spotlight glow — follows cursor */}
      <div
        ref={glowRef}
        className="absolute inset-0 z-0 pointer-events-none rounded-card-lg opacity-0 transition-opacity duration-300"
      />

      {/* Top teal accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal via-teal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Card content */}
      <div className="relative z-10 flex flex-col flex-1 p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center justify-center rounded-xl bg-teal-dim border border-teal-glow text-teal transition-all duration-300 group-hover:bg-teal-glow group-hover:shadow-teal w-11 h-11">
            <Icon size={20} strokeWidth={1.25} />
          </div>
          <span className="font-mono text-[0.68rem] text-theme-border tracking-widest group-hover:text-teal transition-colors duration-300">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Text */}
        <p className="font-mono text-[0.68rem] text-teal tracking-[0.12em] uppercase mb-1.5">{tagline}</p>
        <h3 className="font-bold text-heading leading-snug mb-3 text-[1.05rem]">{name}</h3>
        <p className="text-muted leading-relaxed flex-1 text-[0.875rem]">{desc}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {tech.map((t) => (
            <span key={t} className="font-mono text-[0.68rem] px-2.5 py-0.5 bg-teal-dim text-teal border border-teal-glow rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer link — hidden when no URL available */}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-6 mb-5 pt-4 border-t border-theme-border flex items-center gap-1.5 text-[0.82rem] font-semibold text-muted w-fit transition-all duration-300 hover:text-teal hover:gap-3"
        >
          View Project <ArrowUpRight size={14} strokeWidth={2} />
        </a>
      ) : (
        <div className="mx-6 mb-5 pt-4 border-t border-theme-border" />
      )}
    </div>
  );
}

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-[100px] px-[5%] max-w-[1100px] mx-auto"
    >
      <p className="reveal font-mono text-[0.8rem] text-teal tracking-[0.15em] uppercase mb-2">
        05. projects
      </p>
      <h2 className="reveal font-bold text-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
        Things I&apos;ve Built
      </h2>
      <div className="reveal w-[60px] h-[3px] bg-teal rounded-full mb-12" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} {...p} index={i} />
        ))}
      </div>
    </section>
  );
}
