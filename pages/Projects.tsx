import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl font-heading font-bold text-white mb-4">Selected Work</h2>
            <p className="text-zinc-400 max-w-xl">
              A showcase of my technical capabilities, featuring full-stack development, mobile engineering, and AI integration.
            </p>
          </div>
          <div className="hidden md:block">
             <span className="text-8xl font-heading font-bold text-white/5">02</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Visual - Hover Overlay Effect */}
                <div className={`lg:col-span-7 relative ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 bg-zinc-900 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500">
                     
                     {/* Image */}
                     <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                     />
                     
                     {/* Overlay */}
                     <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Link 
                          to={`/project/${project.id}`}
                          className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-bold hover:bg-accent"
                        >
                          <Eye size={20} />
                          <span>View Case Study</span>
                        </Link>
                     </div>

                     {/* Date Badge */}
                     <div className="absolute bottom-6 left-6 z-20 bg-zinc-950/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg pointer-events-none">
                        <span className="text-accent font-mono text-sm">{project.date}</span>
                     </div>
                  </div>
                  
                  {/* Decorative Glow Behind */}
                  <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                </div>

                {/* Content */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1 text-right lg:items-end' : 'lg:order-2 text-left lg:items-start'}`}>
                   <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                   
                   <div className={`bg-zinc-900 p-6 rounded-2xl border border-white/5 mb-6 shadow-xl relative z-20 ${index % 2 === 1 ? '-mr-12 lg:mr-0' : '-ml-12 lg:ml-0'} lg:w-[110%] group-hover:border-white/10 transition-colors`}>
                      <p className="text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>
                   </div>

                   <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                     {project.tags.map(tag => (
                       <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/5 group-hover:border-primary/20 transition-colors">
                         {tag}
                       </span>
                     ))}
                   </div>
                   
                   {/* Mobile-only Links (since desktop has them in overlay) */}
                   <div className="lg:hidden flex items-center gap-6">
                      <Link 
                        to={`/project/${project.id}`}
                        className="flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors"
                      >
                        View Case Study <ArrowUpRight size={18} />
                      </Link>
                   </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;