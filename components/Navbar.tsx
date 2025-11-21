import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      // Adjust offset to account for floating nav
      const scrollPosition = window.scrollY + 300; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Profile', id: 'about' },
    { name: 'Work', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`w-full max-w-5xl transition-all duration-300 rounded-full ${
            scrolled 
              ? 'bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20 py-3 px-6' 
              : 'bg-transparent py-4 px-4'
          }`}
        >
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Hexagon 
                  size={32} 
                  className="text-primary fill-primary/20 group-hover:fill-primary/40 transition-colors" 
                  strokeWidth={1.5}
                />
                <span className="absolute font-heading font-bold text-white text-sm">NC</span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center bg-zinc-950/50 rounded-full px-2 py-1.5 border border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none ${
                    activeSection === link.id ? 'text-zinc-950' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </nav>

            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary font-medium text-sm transition-all duration-300 border border-primary/20 focus:outline-none"
              >
                Let's Talk
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/50 text-zinc-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className={`p-4 rounded-xl text-left font-heading font-semibold transition-colors ${
                      activeSection === link.id 
                        ? 'bg-primary/20 text-white' 
                        : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <button
                   onClick={() => scrollToSection('contact')}
                   className="mt-2 p-4 rounded-xl bg-accent text-zinc-900 font-bold text-center"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;