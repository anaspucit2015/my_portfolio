'use client';

import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FormEvent, useState } from 'react';

const contactItems = [
  { Icon: Mail,         label: <a href="mailto:anas.saleem.dev@gmail.com" className="text-teal hover:underline">anas.saleem.dev@gmail.com</a> },
  { Icon: Phone,        label: <a href="tel:+923328878530" className="hover:text-teal transition-colors">+92 332 8878530</a> },
  { Icon: MapPin,       label: <span>Lahore, Pakistan</span> },
  {
    Icon: ExternalLink,
    label: (
      <a
        href="https://www.linkedin.com/in/anas-saleem-24a5791b3/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal hover:underline"
      >
        LinkedIn Profile
      </a>
    ),
  },
];

export default function Contact() {
  const ref = useScrollReveal();
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sent');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-[100px] px-[5%] max-w-[1100px] mx-auto"
    >
      <p className="reveal font-mono text-[0.8rem] text-teal tracking-[0.15em] uppercase mb-2">
        07. contact
      </p>
      <h2 className="reveal font-bold text-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
        Get In Touch
      </h2>
      <div className="reveal w-[60px] h-[3px] bg-teal rounded-full mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div className="reveal-left flex flex-col gap-4">
          <h3 className="text-[1.3rem] font-semibold text-heading">Let&apos;s work together</h3>
          <p className="text-muted text-[0.95rem]">
            Whether you have a project in mind, a job opportunity, or just want to say hello —
            my inbox is always open.
          </p>
          {contactItems.map(({ Icon, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 border border-theme-border rounded-card text-muted text-[0.9rem] transition-colors duration-300 hover:border-teal"
            >
              <Icon size={18} strokeWidth={1.5} className="text-teal flex-shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <form className="reveal-right flex flex-col gap-4" onSubmit={handleSubmit}>
          {[
            { id: 'name',    label: 'Your Name',      type: 'text',  placeholder: 'John Doe'              },
            { id: 'email',   label: 'Email Address',  type: 'email', placeholder: 'john@example.com'      },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="flex flex-col gap-1.5">
              <label htmlFor={id} className="text-[0.85rem] text-muted font-medium">{label}</label>
              <input
                id={id} name={id} type={type} placeholder={placeholder} required
                className="bg-surface border border-theme-border rounded-lg px-4 py-3 text-theme-text font-sans text-[0.95rem] outline-none transition-colors duration-300 focus:border-teal"
              />
            </div>
          ))}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[0.85rem] text-muted font-medium">Message</label>
            <textarea
              id="message" name="message"
              placeholder="Tell me about your project or opportunity..."
              required
              className="bg-surface border border-theme-border rounded-lg px-4 py-3 text-theme-text font-sans text-[0.95rem] outline-none transition-colors duration-300 focus:border-teal resize-y min-h-[130px]"
            />
          </div>

          {status === 'sent' ? (
            <p className="text-teal text-[0.95rem]">✓ Message sent! I&apos;ll get back to you soon.</p>
          ) : (
            <button
              type="submit"
              className="self-start bg-teal text-white px-8 py-3 rounded-card font-semibold text-[0.95rem] inline-flex items-center gap-2 border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-teal"
            >
              Send Message →
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
