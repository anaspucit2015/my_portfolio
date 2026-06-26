import type { Metadata } from 'next';
import { Inter, Fira_Code, Dancing_Script } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500'] });
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-script', weight: ['600', '700'] });

export const metadata: Metadata = {
  title: 'Anas Saleem — Full Stack Developer',
  description:
    'Full Stack Developer with 5+ years building scalable web and mobile applications using React, Next.js, Python FastAPI and Node.js.',
  openGraph: {
    title: 'Anas Saleem — Full Stack Developer',
    description: 'Full Stack Developer · React · Next.js · Python FastAPI',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${firaCode.variable} ${dancingScript.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
