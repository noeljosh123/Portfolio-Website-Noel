import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Calendar, User } from 'lucide-react';
import { PROJECTS } from '../constants';
import Footer from '../components/Footer';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:text-accent underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-primary selection:text-white flex flex-col">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back to Work</span>
          </Link>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
             <div className="flex flex-wrap gap-4 text-sm font-mono text-primary mb-4">
                <span className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{project.date}</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{project.role}</span>
             </div>
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
               {project.title}
             </h1>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 mb-16 shadow-2xl"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent pointer-events-none" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Overview & Case Study */}
            <div className="lg:col-span-7 space-y-12">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                 <h2 className="text-2xl font-heading font-bold text-white mb-4">Overview</h2>
                 <p className="text-zinc-300 text-lg leading-relaxed">
                   {project.description}
                 </p>
               </motion.div>

               {project.challenge && (
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                 >
                   <h2 className="text-2xl font-heading font-bold text-white mb-4">The Challenge</h2>
                   <p className="text-zinc-300 text-lg leading-relaxed">
                     {project.challenge}
                   </p>
                 </motion.div>
               )}

               {project.solution && (
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                 >
                   <h2 className="text-2xl font-heading font-bold text-white mb-4">The Solution</h2>
                   <p className="text-zinc-300 text-lg leading-relaxed">
                     {project.solution}
                   </p>
                 </motion.div>
               )}

               {/* Key Achievements/Features */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-2xl font-heading font-bold text-white mb-6">Key Features & Achievements</h2>
                  <ul className="space-y-4">
                    {(project.features || project.achievements).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 min-w-[20px] text-accent">
                          <CheckCircle2 size={20} />
                        </div>
                        <span className="text-zinc-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
               </motion.div>
            </div>

            {/* Right Column: Meta & Links */}
            <div className="lg:col-span-5 space-y-10">
               
               {/* Links Box */}
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
               >
                 <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">Project Links</h3>
                 <div className="flex flex-col gap-4">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-3 px-4 rounded-xl hover:bg-accent transition-colors"
                      >
                        <ExternalLink size={18} />
                        View Live Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-zinc-800 text-white font-medium py-3 px-4 rounded-xl border border-white/5 hover:bg-zinc-700 transition-colors"
                      >
                        <Github size={18} />
                        Source Code
                      </a>
                    )}
                 </div>
               </motion.div>

               {/* Tech Stack */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
               >
                  <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                     {project.tags.map(tag => (
                       <span key={tag} className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-lg text-zinc-300 text-sm font-medium">
                         {tag}
                       </span>
                     ))}
                  </div>
               </motion.div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;