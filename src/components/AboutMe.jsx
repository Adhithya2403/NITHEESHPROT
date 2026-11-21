import React from 'react';
import { designerInfo, educationList, industryExperience, awardsAndSymposiums } from '../data/portfolioData';

export default function AboutMe() {
  return (
    <section id="about" className="py-14 sm:py-20 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-mono block mb-1">
              Profile
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-atelier-charcoal dark:text-atelier-ivory font-light">
              About the Designer
            </h2>
          </div>
          <span className="text-xs font-mono text-atelier-muted">
            B.Tech FT · 2027
          </span>
        </div>

        {/* Profile Grid: Portrait + Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Portrait */}
          <div className="lg:col-span-5 max-w-sm mx-auto lg:max-w-none w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-atelier-stone/40 dark:border-atelier-charcoal aspect-square bg-atelier-sand">
              <picture>
                <source srcSet={designerInfo.portraitWebp} type="image/webp" />
                <img
                  src={designerInfo.portrait}
                  alt={designerInfo.name}
                  className="w-full h-full object-cover contrast-105"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          {/* Statement & Credentials */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            <h3 className="font-serif text-2xl sm:text-3xl text-atelier-charcoal dark:text-atelier-sand">
              {designerInfo.name}
            </h3>

            <p className="font-serif italic text-lg sm:text-xl text-atelier-olive dark:text-atelier-sand leading-relaxed">
              "{designerInfo.vision}"
            </p>

            <p className="text-sm font-sans font-light text-atelier-charcoal/80 dark:text-atelier-sand/80 leading-relaxed">
              Fashion Technology student at {designerInfo.college} (CGPA {designerInfo.cgpa}). Specializing in streetwear, technical garment drafting, 3D apparel simulation, and sustainable material innovation.
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/60 dark:bg-atelier-charcoal/40 border border-atelier-stone/20 dark:border-atelier-charcoal">
                <span className="text-atelier-muted block text-[10px] uppercase">Degree</span>
                <span className="font-medium text-atelier-charcoal dark:text-atelier-sand">B.Tech (FT)</span>
              </div>
              <div className="p-3 rounded-xl bg-white/60 dark:bg-atelier-charcoal/40 border border-atelier-stone/20 dark:border-atelier-charcoal">
                <span className="text-atelier-muted block text-[10px] uppercase">Academic</span>
                <span className="font-medium text-atelier-olive dark:text-atelier-sand">CGPA 8.32</span>
              </div>
              <div className="p-3 rounded-xl bg-white/60 dark:bg-atelier-charcoal/40 border border-atelier-stone/20 dark:border-atelier-charcoal col-span-2 sm:col-span-1">
                <span className="text-atelier-muted block text-[10px] uppercase">Languages</span>
                <span className="font-medium text-atelier-charcoal dark:text-atelier-sand">EN · TA · ML</span>
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Experience & Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-atelier-stone/20 dark:border-atelier-charcoal">
          
          {/* Internships */}
          <div>
            <h4 className="font-serif text-xl text-atelier-charcoal dark:text-atelier-sand mb-4">
              Industry Experience
            </h4>
            <div className="space-y-2.5">
              {industryExperience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/50 dark:bg-atelier-charcoal/30 border border-atelier-stone/20 dark:border-atelier-charcoal flex justify-between items-center text-xs"
                >
                  <div>
                    <span className="font-medium text-atelier-charcoal dark:text-atelier-sand block font-serif text-sm">
                      {exp.company}
                    </span>
                    <span className="text-atelier-muted text-[11px]">{exp.type} · {exp.duration}</span>
                  </div>
                  <span className="font-mono text-[11px] text-atelier-muted">{exp.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Education */}
          <div className="space-y-6">
            <div>
              <h4 className="font-serif text-xl text-atelier-charcoal dark:text-atelier-sand mb-4">
                Symposium Awards
              </h4>
              <div className="space-y-2.5">
                {awardsAndSymposiums.map((award, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/50 dark:bg-atelier-charcoal/30 border border-atelier-stone/20 dark:border-atelier-charcoal flex justify-between items-center text-xs"
                  >
                    <div>
                      <span className="font-medium text-atelier-charcoal dark:text-atelier-sand block font-serif text-sm">
                        {award.prize} — {award.event}
                      </span>
                      <span className="text-atelier-muted text-[11px]">{award.host}</span>
                    </div>
                    <span className="font-mono text-[11px] text-atelier-muted">{award.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-serif text-xl text-atelier-charcoal dark:text-atelier-sand mb-3">
                Education
              </h4>
              {educationList.slice(0, 1).map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/50 dark:bg-atelier-charcoal/30 border border-atelier-stone/20 dark:border-atelier-charcoal flex justify-between items-center text-xs">
                  <div>
                    <span className="font-medium text-atelier-charcoal dark:text-atelier-sand block font-serif text-sm">{edu.degree}</span>
                    <span className="text-atelier-muted text-[11px]">{edu.institution}</span>
                  </div>
                  <span className="font-mono text-atelier-olive dark:text-atelier-sand font-bold">{edu.score}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
