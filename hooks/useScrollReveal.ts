'use client';

import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = Array.from(
      el.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    );

    // Assign stagger index so CSS can delay entrance per element
    targets.forEach((t, i) => {
      t.style.setProperty('--stagger-i', String(i));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('exiting');
          } else {
            // Only reverse-animate elements that were already visible
            if (entry.target.classList.contains('visible')) {
              entry.target.classList.add('exiting');
              entry.target.classList.remove('visible');
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}
