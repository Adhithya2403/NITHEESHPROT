import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { toolsAndTech } from '../data/portfolioData';

// Custom Authentic Software Logos & Badges
const SoftwareLogo = ({ id }) => {
  switch (id) {
    case 'photoshop':
      return (
        <div className="w-12 h-12 rounded-xl bg-[#001E36] border border-[#31A8FF]/60 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
          <span className="font-sans font-black text-[#31A8FF] text-xl tracking-tighter leading-none select-none">
            Ps
          </span>
        </div>
      );
    case 'illustrator':
      return (
        <div className="w-12 h-12 rounded-xl bg-[#330000] border border-[#FF9A00]/60 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
          <span className="font-sans font-black text-[#FF9A00] text-xl tracking-tighter leading-none select-none">
            Ai
          </span>
        </div>
      );
    case 'clo3d':
      return (
        <div className="w-12 h-12 rounded-xl bg-[#111111] border border-[#9FFF00]/50 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
          <div className="flex flex-col items-center justify-center">
            <span className="font-sans font-black text-[#9FFF00] text-xs tracking-widest leading-none">
              CLO
            </span>
            <span className="text-[9px] font-mono text-white/90 font-bold tracking-tight">
              3D
            </span>
          </div>
        </div>
      );
    case 'tukatech':
      return (
        <div className="w-12 h-12 rounded-xl bg-[#0B2545] border border-[#134074]/80 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
          <div className="flex flex-col items-center justify-center">
            <span className="font-sans font-black text-[#8DA9C4] text-xs tracking-wider leading-none">
              TUKA
            </span>
            <span className="text-[8px] font-mono uppercase text-[#EEF4F8] font-semibold tracking-widest">
              TECH
            </span>
          </div>
        </div>
      );
    case 'tukamark':
      return (
        <div className="w-12 h-12 rounded-xl bg-[#00382B] border border-[#00A878]/60 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
          <div className="flex flex-col items-center justify-center">
            <span className="font-sans font-black text-[#00E8A2] text-xs tracking-wider leading-none">
              TUKA
            </span>
            <span className="text-[8px] font-mono uppercase text-white font-semibold tracking-widest">
              MARK
            </span>
          </div>
        </div>
      );
    case 'digital-illustration':
      return (
        <div className="w-12 h-12 rounded-xl bg-[#2E1A47] border border-[#A78BFA]/50 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
          <svg className="w-6 h-6 text-[#C4B5FD]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 19 7-7 3 3-7 7-3-3z"/>
            <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
            <path d="m2 2 7.586 7.586"/>
            <circle cx="11" cy="11" r="2"/>
          </svg>
        </div>
      );
    case 'hand-sketching':
      return (
        <div className="w-12 h-12 rounded-xl bg-[#3B291A] border border-[#D97706]/50 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
          <svg className="w-6 h-6 text-[#FBBF24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"/>
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
            <path d="m15 5 3 3"/>
          </svg>
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 rounded-xl bg-atelier-charcoal text-white flex items-center justify-center">
          <Sparkles className="w-5 h-5" />
        </div>
      );
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60 bg-atelier-cream/20 dark:bg-atelier-obsidian/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-haute text-atelier-olive dark:text-atelier-sand font-medium mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Technical & Creative Domain</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-atelier-charcoal dark:text-atelier-ivory font-light tracking-tight">
              Tools, CAD & <span className="italic font-normal text-atelier-olive dark:text-atelier-sand">Hard Skills</span>
            </h2>
          </div>

          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-atelier-muted max-w-md font-sans font-light">
            Hands-on technical mastery in virtual 3D garment prototyping, CAD marker efficiency, vector apparel flats, and fine artistic illustration.
          </p>
        </div>

        {/* Clean Tools and Technologies Grid — Without Percentages or Progress Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {toolsAndTech.map((tool) => (
            <div
              key={tool.id}
              className="group p-5 rounded-xl bg-white/80 dark:bg-atelier-charcoal/40 border border-atelier-stone/30 dark:border-atelier-charcoal hover:border-atelier-olive dark:hover:border-atelier-sand/40 transition-all hover:shadow-md flex items-start space-x-4"
            >
              {/* Official Software Logo Icon */}
              <SoftwareLogo id={tool.id} />

              {/* Tool Details */}
              <div className="flex-grow min-w-0 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-atelier-olive dark:text-atelier-sand font-medium tracking-wider truncate">
                    {tool.category}
                  </span>
                </div>

                <h4 className="font-serif text-xl text-atelier-charcoal dark:text-atelier-sand group-hover:text-atelier-olive dark:group-hover:text-white transition-colors truncate">
                  {tool.name}
                </h4>

                <div className="pt-2 flex items-center space-x-1.5 text-[11px] text-atelier-muted font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-atelier-olive dark:text-atelier-sand flex-shrink-0" />
                  <span className="truncate">Documented in Resume Credentials</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
