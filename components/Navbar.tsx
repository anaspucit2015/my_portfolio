'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#experience', label: 'Experience' },
  { href: '#teaching',   label: 'Teaching'   },
  { href: '#projects',   label: 'Projects'   },
  { href: '#contact',    label: 'Contact'    },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const onScroll = () => {
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5%] h-16 backdrop-blur-[16px] border-b border-theme-border transition-colors duration-300"
        style={{ background: 'color-mix(in srgb, var(--bg) 80%, transparent)' }}
      >
        {/* Logo */}
        <a href="#hero" className="nav-logo font-script text-[1.6rem] font-bold flex items-center gap-[0.25em] leading-none" aria-label="Home">
          <span className="logo-bracket text-teal">&lt;</span>
          <span className="logo-name text-teal">Anas</span>
          <span className="logo-bracket logo-slash text-teal">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none items-center m-0 p-0">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-teal ${
                  activeSection === l.href.slice(1) ? 'text-teal' : 'text-muted'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex gap-3 items-center">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="bg-surface border border-theme-border rounded-full w-[38px] h-[38px] flex items-center justify-center cursor-pointer text-theme-text transition-all duration-300 hover:border-teal hover:text-teal"
          >
            {theme === 'dark' ? <Moon size={16} strokeWidth={1.5} /> : <Sun size={16} strokeWidth={1.5} />}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center bg-transparent border-none cursor-pointer text-theme-text"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-[99] bg-theme-bg flex flex-col items-center justify-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[1.3rem] font-medium text-theme-text hover:text-teal transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
