import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Linkedin, Github, Check, Copy, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // -----------------------------------------------------------------
    // IMPORTANT: To make this work, create a FREE form at https://formspree.io/
    // Set the email destination to noeljoshcasin@gmail.com
    // Then replace the URL below with your unique Formspree endpoint.
    // Example: "https://formspree.io/f/xxyyzzww"
    // -----------------------------------------------------------------
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzwzbvv";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        alert("Note: To receive emails directly, please configure your Formspree ID in the source code (pages/Contact.tsx).");
      }
    } catch (error) {
      console.error("Submission error", error);
      alert("There was an error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Text Side */}
            <div className="p-12 lg:p-20 flex flex-col justify-between relative">
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none" />
              
              <div>
                <h2 className="text-5xl font-heading font-bold text-white mb-6">
                  Ready to <br />
                  start a <span className="text-primary">project?</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-12">
                  I'm seeking internship opportunities and collaborative projects. 
                  Let's build something extraordinary together.
                </p>
              </div>

              <div className="space-y-6 z-10">
                
                {/* Click to Copy Email Component */}
                <button 
                  onClick={copyEmail}
                  className="w-full text-left group relative"
                >
                  <div className="flex items-center gap-4 text-white transition-colors p-4 -ml-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${hasCopied ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-white group-hover:bg-accent/20 group-hover:text-accent'}`}>
                      {hasCopied ? <Check size={22} /> : <Mail size={22} />}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-0.5">
                        {hasCopied ? "Copied to Clipboard!" : "Email Address"}
                      </span>
                      <span className="text-lg font-medium">{PERSONAL_INFO.email}</span>
                    </div>
                    
                    {/* Hover Hint */}
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500">
                      <Copy size={20} />
                    </div>
                  </div>
                </button>

                <div className="flex gap-4 pt-4 pl-1">
                   <a 
                    href={PERSONAL_INFO.socials.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all"
                   >
                      <Github size={20} />
                   </a>
                   <a 
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all"
                   >
                      <Linkedin size={20} />
                   </a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-zinc-950/50 p-12 lg:p-20 border-t lg:border-t-0 lg:border-l border-white/5 relative overflow-hidden">
               {/* Glow Effect */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                 <div className="space-y-1">
                   <label htmlFor="name" className="text-xs uppercase tracking-wider text-zinc-500 font-semibold pl-1">Name</label>
                   <input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      required
                      disabled={isSent || isSubmitting}
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-700 disabled:opacity-50"
                      placeholder="What's your name?"
                   />
                 </div>
                 <div className="space-y-1">
                   <label htmlFor="email" className="text-xs uppercase tracking-wider text-zinc-500 font-semibold pl-1">Email</label>
                   <input 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      required
                      disabled={isSent || isSubmitting}
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-700 disabled:opacity-50"
                      placeholder="Where can I reach you?"
                   />
                 </div>
                 <div className="space-y-1">
                   <label htmlFor="message" className="text-xs uppercase tracking-wider text-zinc-500 font-semibold pl-1">Message</label>
                   <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      disabled={isSent || isSubmitting}
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-700 resize-none disabled:opacity-50"
                      placeholder="Tell me about your project..."
                   />
                 </div>

                 <button 
                    type="submit"
                    disabled={isSent || isSubmitting}
                    className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                      isSent 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white text-black hover:bg-accent'
                    }`}
                  >
                    {isSent ? (
                      <>
                        <span>Message Sent!</span>
                        <Check size={18} />
                      </>
                    ) : isSubmitting ? (
                      <>
                        <span>Sending...</span>
                        <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                 </button>
               </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;