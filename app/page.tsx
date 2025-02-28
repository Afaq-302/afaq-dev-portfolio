import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';
import Navbar from '@/components/navbar';
import ParticlesBackground from '@/components/particles-background';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background to-background/90 overflow-hidden">
      <ParticlesBackground />
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}