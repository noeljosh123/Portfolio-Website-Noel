import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

const SectionDivider: React.FC = () => (
  <div className="w-full flex justify-center overflow-hidden">
    <div className="w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        
        <SectionDivider />

        <section id="about">
          <About />
        </section>

        <SectionDivider />

        <section id="projects">
          <Projects />
        </section>

        <SectionDivider />

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;