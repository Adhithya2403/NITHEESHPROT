import React from 'react';
import { toolsAndTech } from '../data/portfolioData';

// Custom Authentic Software Logos & Badges
const SoftwareLogo = ({ id }) => {
  switch (id) {
    case 'photoshop':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#001E36] border border-[#31A8FF]/60 flex items-center justify-center shadow-sm flex-shrink-0">
          <span className="font-sans font-black text-[#31A8FF] text-base tracking-tighter leading-none select-none">
            Ps
          </span>
        </div>
      );
    case 'illustrator':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#330000] border border-[#FF9A00]/60 flex items-center justify-center shadow-sm flex-shrink-0">
          <span className="font-sans font-black text-[#FF9A00] text-base tracking-tighter leading-none select-none">
            Ai
          </span>
        </div>
      );
    case 'clo3d':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#9FFF00]/50 flex items-center justify-center shadow-sm flex-shrink-0">
          <div className="flex flex-col items-center justify-center">
            <span className="font-sans font-black text-[#9FFF00] text-[10px] tracking-widest leading-none">
              CLO
            </span>
            <span className="text-[8px] font-mono text-white/90 font-bold tracking-tight">
              3D
            </span>
          </div>
        </div>
      );
    case 'tukatech':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#0B2545] border border-[#134074]/80 flex items-center justify-center shadow-sm flex-shrink-0">
          <div className="flex flex-col items-center justify-center">
            <span className="font-sans font-black text-[#8DA9C4] text-[10px] tracking-wider leading-none">
              TUKA
            </span>
            <span className="text-[7px] font-mono uppercase text-[#EEF4F8] font-semibold tracking-widest">
              TECH
            </span>
          </div>
        </div>
      );
    case 'tukamark':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#00382B] border border-[#00A878]/60 flex items-center justify-center shadow-sm flex-shrink-0">
          <div className="flex flex-col items-center justify-center">
            <span className="font-sans font-black text-[#00E8A2] text-[10px] tracking-wider leading-none">
              TUKA
            </span>
            <span className="text-[7px] font-mono uppercase text-white font-semibold tracking-widest">
              MARK
            </span>
          </div>
        </div>
      );
    case 'digital-illustration':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#2E1A47] border border-[#A78BFA]/50 flex items-center justify-center shadow-sm flex-shrink-0">
          <svg className="w-5 h-5 text-[#C4B5FD]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 19 7-7 3 3-7 7-3-3z"/>
            <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
            <path d="m2 2 7.586 7.586"/>
            <circle cx="11" cy="11" r="2"/>
          </svg>
        </div>
      );
    case 'hand-sketching':
      return (
        <div className="w-10 h-10 rounded-xl bg-[#3B291A] border border-[#D97706]/50 flex items-center justify-center shadow-sm flex-shrink-0">
          <svg className="w-5 h-5 text-[#FBBF24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"/>
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
            <path d="m15 5 3 3"/>
          </svg>
        </div>
      );
    default:
      return null;
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-14 sm:py-20 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60 bg-atelier-cream/20 dark:bg-atelier-obsidian/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-mono block mb-1">
              Expertise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-atelier-charcoal dark:text-atelier-ivory font-light">
              Tools & Technologies
            </h2>
          </div>
          <span className="text-xs font-mono text-atelier-muted">
            CAD & Craft
          </span>
        </div>

        {/* Clean Tools Grid - Zero Fluff */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {toolsAndTech.map((tool) => (
            <div
              key={tool.id}
              className="p-3.5 sm:p-4 rounded-xl bg-white/70 dark:bg-atelier-charcoal/40 border border-atelier-stone/20 dark:border-atelier-charcoal flex items-center space-x-3 transition-all hover:border-atelier-olive"
            >
              <SoftwareLogo id={tool.id} />

              <div className="min-w-0">
                <h4 className="font-serif text-base sm:text-lg text-atelier-charcoal dark:text-atelier-sand truncate">
                  {tool.name}
                </h4>
                <span className="text-[10px] font-mono uppercase text-atelier-muted block truncate">
                  {tool.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
