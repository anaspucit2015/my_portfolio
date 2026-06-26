'use client';

import { Award, Cloud, Cpu } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const certs = [
  { Icon: Award, name: 'McKinsey Forward Program',           issuer: 'McKinsey & Company'  },
  { Icon: Cloud, name: 'Generative AI Explorer — Vertex AI', issuer: 'Google Cloud'        },
  { Icon: Cpu,   name: 'Gemini for Developers',              issuer: 'Google Cloud'        },
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" className="bg-theme-bg2 w-full py-[100px]" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-[1100px] mx-auto px-[5%]">
        <p className="reveal font-mono text-[0.8rem] text-teal tracking-[0.15em] uppercase mb-2">
          06. certifications
        </p>
        <h2 className="reveal font-bold text-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
          Certifications
        </h2>
        <div className="reveal w-[60px] h-[3px] bg-teal rounded-full mb-12" />

        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {certs.map(({ Icon, name, issuer }) => (
            <div
              key={name}
              className="reveal-scale bg-surface border border-theme-border rounded-card p-6 flex items-center gap-4 transition-all duration-300 hover:border-teal hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-[48px] h-[48px] rounded-[10px] bg-teal-dim border border-teal-glow flex items-center justify-center text-teal">
                <Icon size={24} strokeWidth={1.25} />
              </div>
              <div>
                <p className="text-[0.9rem] font-semibold text-heading">{name}</p>
                <p className="text-[0.8rem] text-muted mt-0.5">{issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
