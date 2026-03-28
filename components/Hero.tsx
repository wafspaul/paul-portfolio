
import React from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 pt-20 pb-12 flex flex-col items-center text-center px-4">
      {/* Profile Photo - Grayscale to Color Effect inspired by buildwithrv.com */}
      <div className="group relative w-64 h-64 mb-10 cursor-pointer">
        {/* Animated Rings */}
        <div className="absolute inset-0 rounded-full border border-bronze/20 group-hover:border-bronze/50 transition-all duration-700 scale-110 group-hover:scale-125 opacity-50" />
        <div className="absolute inset-0 rounded-full border border-bronze/10 group-hover:border-bronze/30 transition-all duration-1000 scale-125 group-hover:scale-150 opacity-30" />
        
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0a0a0a] ring-2 ring-white/5 group-hover:ring-bronze/50 transition-all duration-500 shadow-2xl">
          <img 
            src="/profile.jpeg" 
            alt="Paul Wamocha" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-[1.25] group-hover:scale-[1.35] object-[center_35%] transition-all duration-700 ease-in-out"
            onError={(e) => {
              // Fallback if the user hasn't uploaded the file yet
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/paul-speaking/800/800";
            }}
            referrerPolicy="no-referrer"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-bronze/5 group-hover:bg-transparent transition-colors duration-700" />
        </div>

        {/* Status Indicator */}
        <div className="absolute bottom-4 right-4 w-5 h-5 bg-bronze rounded-full border-4 border-[#0a0a0a] z-20">
          <div className="absolute inset-0 rounded-full bg-bronze animate-ping opacity-75" />
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-white uppercase mb-4">
        Paul Wamocha
      </h1>
      <p className="text-xl md:text-2xl font-light text-bronze uppercase tracking-widest mb-6 max-w-2xl">
        AI for Education & Digital Inclusion Specialist
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-gray-400 mb-8">
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-bronze" />
          <span>Nairobi, Kenya</span>
        </div>
        <a href="mailto:wamochapaul@gmail.com" className="flex items-center gap-2 hover:text-bronze transition-colors">
          <Mail size={18} />
          <span>wamochapaul@gmail.com</span>
        </a>
        <a href="tel:+254708898939" className="flex items-center gap-2 hover:text-bronze transition-colors">
          <Phone size={18} />
          <span>+254 708 898 939</span>
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a 
          href="https://www.linkedin.com/in/paulwamocha/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-4 bg-bronze text-black font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-colors flex items-center gap-2"
        >
          Let's Connect
          <ArrowUpRight size={20} />
        </a>
        <a 
          href="mailto:wamochapaul@gmail.com"
          className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-sm hover:border-bronze hover:text-bronze transition-all"
        >
          Book a Consultation
        </a>
      </div>

      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/paulwamocha/" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 rounded-full hover:border-bronze hover:text-bronze transition-all scale-100 hover:scale-110">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/wafspaul" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 rounded-full hover:border-bronze hover:text-bronze transition-all scale-100 hover:scale-110">
          <Github size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
