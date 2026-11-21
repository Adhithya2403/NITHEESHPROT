import React from 'react';
import { Sparkles, GraduationCap, Briefcase, Award, Recycle, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import { designerInfo, educationList, industryExperience, awardsAndSymposiums, sustainableProjects, certifications } from '../data/portfolioData';

export default function AboutMe() {
  return (
    <section id="about" className="py-14 sm:py-20 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-haute text-atelier-olive dark:text-atelier-sand font-medium mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Designer Profile & Credentials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-atelier-charcoal dark:text-atelier-ivory font-light tracking-tight">
            About <span className="italic font-normal text-atelier-olive dark:text-atelier-sand">{designerInfo.name}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base font-sans font-light text-atelier-charcoal/80 dark:text-atelier-sand/80 leading-relaxed">
            {designerInfo.executiveSummary}
          </p>
        </div>

        {/* Profile Grid: Portrait + Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex flex-col space-y-4 max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative group rounded-2xl overflow-hidden shadow-xl border border-atelier-stone/40 dark:border-atelier-charcoal aspect-square bg-atelier-sand">
              <picture>
                <source srcSet={designerInfo.portraitWebp} type="image/webp" />
                <img
                  src={designerInfo.portrait}
                  alt={`${designerInfo.name} — Fashion Designer`}
                  className="w-full h-full object-cover contrast-105 group-hover:scale-102 transition-all duration-700"
                  loading="lazy"
                />
              </picture>
              
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md text-white border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-atelier-sand block font-mono">
                    B.Tech Fashion Technology
                  </span>
                  <span className="font-serif text-base">{designerInfo.name}</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-atelier-olive text-white font-mono font-medium">
                  CGPA {designerInfo.cgpa}
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="p-4 rounded-xl bg-atelier-cream/50 dark:bg-atelier-charcoal/40 border border-atelier-stone/30 dark:border-atelier-charcoal/80 space-y-2 text-xs">
              <div className="flex items-center justify-between font-mono">
                <span className="text-atelier-muted">Institution:</span>
                <span className="text-atelier-charcoal dark:text-atelier-sand font-medium truncate ml-2 text-right">{designerInfo.college}</span>
              </div>
              <div className="flex items-center justify-between font-mono">
                <span className="text-atelier-muted">Academic Score:</span>
                <span className="text-atelier-olive dark:text-atelier-sand font-bold">CGPA: {designerInfo.cgpa} (2023–2027)</span>
              </div>
              <div className="flex items-center justify-between font-mono">
                <span className="text-atelier-muted">Languages:</span>
                <span className="text-atelier-charcoal dark:text-atelier-sand">{designerInfo.languages.join(' · ')}</span>
              </div>
            </div>
          </div>

          {/* Narrative + Vision */}
          <div className="lg:col-span-7 flex flex-col space-y-5 font-sans font-light text-atelier-charcoal/85 dark:text-atelier-sand/85 leading-relaxed text-sm sm:text-base">
            
            {/* Quote Box */}
            <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-atelier-obsidian/60 border-l-4 border-atelier-olive dark:border-atelier-sand shadow-sm space-y-2">
              <Quote className="w-5 h-5 text-atelier-olive/40 dark:text-atelier-sand/40" />
              <p className="font-serif italic text-base sm:text-xl text-atelier-charcoal dark:text-atelier-ivory leading-snug">
                "{designerInfo.vision}"
              </p>
              <span className="text-[10px] uppercase tracking-luxury text-atelier-muted block font-sans font-medium">
                — Nitheesh S P · Official Designer Statement
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <p>{designerInfo.bio}</p>
              <p>{designerInfo.originStory}</p>
            </div>

            {/* Sustainable Projects Card */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-atelier-olive dark:text-atelier-sand font-medium block mb-2 flex items-center space-x-1.5">
                <Recycle className="w-3.5 h-3.5" />
                <span>Documented Sustainable Projects</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sustainableProjects.map((proj, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-atelier-sand/20 dark:bg-atelier-charcoal/30 border border-atelier-stone/30 dark:border-atelier-charcoal text-xs">
                    <strong className="block font-serif text-sm text-atelier-charcoal dark:text-atelier-sand mb-1">
                      {proj.title}
                    </strong>
                    <span className="text-[10px] font-mono text-atelier-muted block mb-1">
                      {proj.category}
                    </span>
                    <p className="text-[11px] text-atelier-muted leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Industry Internships & Inplant Training */}
        <div className="mb-12 sm:mb-14 pt-8 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-1">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium flex items-center space-x-1.5 font-mono">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Industry Exposure</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-atelier-charcoal dark:text-atelier-ivory mt-1">
                Internships & Inplant Training
              </h3>
            </div>
            <span className="text-xs text-atelier-muted font-mono">
              5 Documented Industrial Trainings
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryExperience.map((exp, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-white/60 dark:bg-atelier-charcoal/30 border border-atelier-stone/30 dark:border-atelier-charcoal flex flex-col justify-between space-y-3 hover:border-atelier-olive transition-colors"
              >
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-atelier-sand/40 dark:bg-atelier-charcoal font-medium text-atelier-olive dark:text-atelier-sand uppercase">
                      {exp.type}
                    </span>
                    <span className="text-atelier-muted">{exp.duration}</span>
                  </div>
                  <h4 className="font-serif text-lg text-atelier-charcoal dark:text-atelier-sand leading-snug">
                    {exp.company}
                  </h4>
                  <div className="text-xs font-mono text-atelier-muted mt-1">
                    {exp.period}
                  </div>
                  <p className="text-xs text-atelier-muted mt-2 leading-relaxed">
                    {exp.learnings}
                  </p>
                </div>

                <div className="text-[11px] font-medium text-atelier-charcoal dark:text-atelier-sand/80 pt-2 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
                  {exp.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Symposiums */}
        <div className="mb-12 sm:mb-14 pt-8 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-1">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium flex items-center space-x-1.5 font-mono">
                <Award className="w-3.5 h-3.5" />
                <span>Symposium Achievements</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-atelier-charcoal dark:text-atelier-ivory mt-1">
                Awards & Accolades
              </h3>
            </div>
            <span className="text-xs text-atelier-muted font-mono">
              State & National Technical Competitions
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {awardsAndSymposiums.map((award, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-atelier-cream/40 dark:bg-atelier-charcoal/30 border border-atelier-stone/30 dark:border-atelier-charcoal flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-atelier-olive text-white mb-2 font-medium">
                    🏆 {award.prize}
                  </span>
                  <h4 className="font-serif text-lg text-atelier-charcoal dark:text-atelier-sand leading-snug">
                    {award.event}
                  </h4>
                  <div className="text-xs text-atelier-muted mt-1">
                    {award.host}
                  </div>
                </div>
                <span className="text-xs font-mono text-atelier-muted">Year {award.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
          
          {/* Education Timeline */}
          <div>
            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium flex items-center space-x-1.5 font-mono">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Record</span>
              </span>
              <h3 className="font-serif text-2xl text-atelier-charcoal dark:text-atelier-ivory mt-0.5">
                Education
              </h3>
            </div>

            <div className="space-y-3">
              {educationList.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/50 dark:bg-atelier-charcoal/30 border border-atelier-stone/30 dark:border-atelier-charcoal">
                  <div className="flex justify-between items-center text-xs font-mono mb-1">
                    <span className="text-atelier-olive dark:text-atelier-sand font-medium">{edu.period}</span>
                    <span className="text-xs font-bold text-atelier-charcoal dark:text-atelier-sand">{edu.score}</span>
                  </div>
                  <h4 className="font-serif text-base text-atelier-charcoal dark:text-atelier-sand">
                    {edu.degree}
                  </h4>
                  <div className="text-xs text-atelier-muted">{edu.institution}</div>
                  <p className="text-[11px] text-atelier-muted mt-1">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Workshops */}
          <div>
            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium flex items-center space-x-1.5 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Accreditations</span>
              </span>
              <h3 className="font-serif text-2xl text-atelier-charcoal dark:text-atelier-ivory mt-0.5">
                Certifications & Workshops
              </h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/50 dark:bg-atelier-charcoal/30 border border-atelier-stone/30 dark:border-atelier-charcoal flex justify-between items-center">
                  <div>
                    <h4 className="font-serif text-base text-atelier-charcoal dark:text-atelier-sand">
                      {cert.name}
                    </h4>
                    <div className="text-xs text-atelier-muted">{cert.issuer}</div>
                  </div>
                  <span className="text-xs font-mono text-atelier-olive dark:text-atelier-sand font-medium whitespace-nowrap ml-4">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
