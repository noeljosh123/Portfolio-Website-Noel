import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-grid-pattern bg-grid opacity-[0.03] pointer-events-none" />
      
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Open for Work 2026</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Designing the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">Future</span> of Tech.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Hi, I'm <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. I blend algorithmic precision with creative design to build intelligent mobile and web applications.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-zinc-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                View My Work
                <ArrowRight size={18} />
              </span>
            </a>
            
            <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <a href={PERSONAL_INFO.socials.github} className="text-zinc-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href={PERSONAL_INFO.socials.linkedin} className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-400 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </motion.div>
        </div>

        {/* Abstract Tech Stack Orbit/Display */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent blur-3xl -z-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Mobile", value: "Flutter/Dart" },
              { label: "AI", value: "Azure Vision" },
              { label: "Backend", value: "PHP/Firebase" },
              { label: "Algorithms", value: "Graph Theory" }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/5 hover:border-primary/30 transition-all group">
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2 group-hover:text-accent transition-colors">{item.label}</p>
                <p className="text-lg font-heading font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;