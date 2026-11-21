import React from 'react';
import { designerInfo, industryExperience, awardsAndSymposiums } from '../data/portfolioData';

export default function AboutMe() {
  return (
    <section id="about" className="py-12 sm:py-16 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-6 pb-2 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <h2 className="font-serif text-2xl sm:text-3xl text-atelier-charcoal dark:text-atelier-ivory font-light">
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          {/* Photo */}
          <div className="lg:col-span-4 max-w-xs mx-auto lg:max-w-none w-full">
            <div className="rounded-xl overflow-hidden shadow-md border border-atelier-stone/40 dark:border-atelier-charcoal aspect-square bg-atelier-sand">
              <picture>
                <source srcSet={designerInfo.portraitWebp} type="image/webp" />
                <img
                  src={designerInfo.portrait}
                  alt={designerInfo.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-8 space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl text-atelier-charcoal dark:text-atelier-sand">
              {designerInfo.name}
            </h3>

            <p className="text-sm font-sans text-atelier-muted">
              B.Tech Fashion Technology (CGPA {designerInfo.cgpa}) · {designerInfo.college}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Internships */}
              <div>
                <h4 className="font-serif text-lg text-atelier-charcoal dark:text-atelier-sand mb-2">
                  Internships
                </h4>
                <div className="space-y-2 text-xs">
                  {industryExperience.map((exp, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white/50 dark:bg-atelier-charcoal/30 border border-atelier-stone/20">
                      <div className="font-medium text-atelier-charcoal dark:text-atelier-sand">{exp.company}</div>
                      <div className="text-atelier-muted text-[11px]">{exp.type} · {exp.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div>
                <h4 className="font-serif text-lg text-atelier-charcoal dark:text-atelier-sand mb-2">
                  Awards
                </h4>
                <div className="space-y-2 text-xs">
                  {awardsAndSymposiums.map((award, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white/50 dark:bg-atelier-charcoal/30 border border-atelier-stone/20">
                      <div className="font-medium text-atelier-charcoal dark:text-atelier-sand">{award.prize}</div>
                      <div className="text-atelier-muted text-[11px]">{award.event} · {award.host}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
