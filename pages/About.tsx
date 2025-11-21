import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Terminal, Cpu, Globe } from 'lucide-react';
import { EDUCATION, SKILLS, CERTIFICATIONS } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Profile Side */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <h2 className="text-5xl font-heading font-bold text-white mb-6">
                About <span className="text-zinc-600">Me.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                I am a senior Computer Science student at FEU Tech, obsessed with efficiency and impact. My work bridges the gap between complex algorithms and user-friendly mobile experiences.
              </p>
              
              <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm">
                <h3 className="text-white font-heading font-semibold mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-black/40 p-3 rounded-xl">
                     <span className="block text-2xl font-bold text-primary">2026</span>
                     <span className="text-xs text-zinc-500 uppercase">Graduation</span>
                   </div>
                   <div className="bg-black/40 p-3 rounded-xl">
                     <span className="block text-2xl font-bold text-accent">3+</span>
                     <span className="text-xs text-zinc-500 uppercase">Major Projects</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Skills Cloud */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Terminal className="text-accent" size={24} />
                <h3 className="text-2xl font-heading font-bold text-white">Tech Stack</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILLS.map((category, idx) => (
                  <div key={idx} className="group bg-zinc-900/30 border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-all">
                    <h4 className="text-zinc-300 font-medium mb-4 flex items-center justify-between">
                      {category.title}
                      <span className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-accent transition-colors"></span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-white/5 text-zinc-300 text-sm rounded-md border border-white/5 group-hover:bg-white/10 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Cpu className="text-primary" size={24} />
                <h3 className="text-2xl font-heading font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-8 border-l-2 border-zinc-800 pl-8 ml-3 relative">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-zinc-900 border-4 border-zinc-800" />
                    <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-zinc-500 my-2 font-medium">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {edu.date}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
                    </div>
                    <p className="text-zinc-300 mb-3">{edu.degree}</p>
                    {edu.details.length > 0 && (
                       <div className="bg-zinc-900/50 p-4 rounded-xl border border-white/5 text-sm text-zinc-400">
                          <ul className="space-y-2 list-disc list-inside marker:text-accent">
                             {edu.details.map((d, i) => <li key={i}>{d}</li>)}
                          </ul>
                       </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Grid */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-purple-400" size={24} />
                <h3 className="text-2xl font-heading font-bold text-white">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                   <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-900/50 border border-white/5 hover:border-white/10 transition-all">
                      <span className="text-zinc-200 font-medium">{cert.name}</span>
                      {cert.level && <span className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-400">{cert.level}</span>}
                   </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;