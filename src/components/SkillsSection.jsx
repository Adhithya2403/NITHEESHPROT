import React from 'react';
import { toolsAndTech } from '../data/portfolioData';

const SoftwareLogo = ({ id }) => {
  switch (id) {
    case 'photoshop':
      return (
        <div className="w-9 h-9 rounded-lg bg-[#001E36] border border-[#31A8FF]/60 flex items-center justify-center flex-shrink-0">
          <span className="font-sans font-black text-[#31A8FF] text-sm leading-none">Ps</span>
        </div>
      );
    case 'illustrator':
      return (
        <div className="w-9 h-9 rounded-lg bg-[#330000] border border-[#FF9A00]/60 flex items-center justify-center flex-shrink-0">
          <span className="font-sans font-black text-[#FF9A00] text-sm leading-none">Ai</span>
        </div>
      );
    case 'clo3d':
      return (
        <div className="w-9 h-9 rounded-lg bg-[#111111] border border-[#9FFF00]/50 flex items-center justify-center flex-shrink-0">
          <span className="font-sans font-black text-[#9FFF00] text-[10px] tracking-wider">CLO 3D</span>
        </div>
      );
    case 'tukatech':
      return (
        <div className="w-9 h-9 rounded-lg bg-[#0B2545] border border-[#134074]/80 flex items-center justify-center flex-shrink-0">
          <span className="font-sans font-bold text-[#8DA9C4] text-[9px] uppercase">Tuka</span>
        </div>
      );
    case 'tukamark':
      return (
        <div className="w-9 h-9 rounded-lg bg-[#00382B] border border-[#00A878]/60 flex items-center justify-center flex-shrink-0">
          <span className="font-sans font-bold text-[#00E8A2] text-[9px] uppercase">Mark</span>
        </div>
      );
    case 'digital-illustration':
      return (
        <div className="w-9 h-9 rounded-lg bg-[#2E1A47] border border-[#A78BFA]/50 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-[#C4B5FD]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>
        </div>
      );
    case 'hand-sketching':
      return (
        <div className="w-9 h-9 rounded-lg bg-[#3B291A] border border-[#D97706]/50 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-[#FBBF24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        </div>
      );
    default:
      return null;
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60 bg-atelier-cream/20 dark:bg-atelier-obsidian/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-6 pb-2 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <h2 className="font-serif text-2xl sm:text-3xl text-atelier-charcoal dark:text-atelier-ivory font-light">
            Skills
          </h2>
        </div>

        {/* Clean Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {toolsAndTech.map((tool) => (
            <div
              key={tool.id}
              className="p-3 rounded-xl bg-white/70 dark:bg-atelier-charcoal/40 border border-atelier-stone/20 dark:border-atelier-charcoal flex items-center space-x-2.5"
            >
              <SoftwareLogo id={tool.id} />
              <div className="min-w-0">
                <span className="font-serif text-sm sm:text-base text-atelier-charcoal dark:text-atelier-sand truncate block">
                  {tool.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
