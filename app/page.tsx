import Navbar from '@/components/Navbar';
import SideSocials from '@/components/SideSocials';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Teaching from '@/components/Teaching';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <SideSocials />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Teaching />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
