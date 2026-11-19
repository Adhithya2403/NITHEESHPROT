import React, { useState } from 'react';
import { Eye, Layers, Palette, Sparkles, Compass, Camera, ArrowRight, CheckCircle2 } from 'lucide-react';
import { designProcessSteps } from '../data/portfolioData';

export default function DesignProcess({ onOpenLightbox }) {
  const [activeStep, setActiveStep] = useState(0);

  // Concrete board exemplars corresponding to each phase from Nitheesh's work
  const phaseExemplars = [
    {
      stepIdx: 0,
      boardTitle: "Poison Dart Frog Ecological Study",
      collection: "Chroma Nature (SS27)",
      image: "/images/boards/frog_page_04.jpg",
      focus: "Extracting warning coloration and organic camouflage principles directly from living rainforest fauna."
    },
    {
      stepIdx: 1,
      boardTitle: "Autumn Foliage & Camouflage Moodboard",
      collection: "Camo Leaf (AW27)",
      image: "/images/boards/camo_page_03.jpg",
      focus: "Balancing earthy warmth, fallen leaf textures, and utilitarian streetwear drape into a 16:9 composition."
    },
    {
      stepIdx: 2,
      boardTitle: "Pantone TCX Swatch System",
      collection: "Strie & Cheetah (AW27)",
      image: "/images/boards/cheetah_page_04.jpg",
      focus: "Standardizing exact Pantone codes alongside physical fabric swatches for production dye integrity."
    },
    {
      stepIdx: 3,
      boardTitle: "Beautifully Dangerous Print Development",
      collection: "Chroma Nature (SS27)",
      image: "/images/boards/frog_page_07.jpg",
      focus: "Designing engineered graphic repeats, screenprints, and applique placements for cut-and-sew apparel."
    },
    {
      stepIdx: 4,
      boardTitle: "Garment Technical Flat Sketching (Front & Back)",
      collection: "Camo Leaf (AW27)",
      image: "/images/boards/camo_page_05.jpg",
      focus: "Vector CAD drafting illustrating topstitch allowances, concealed closures, storm flaps, and pocketing."
    },
    {
      stepIdx: 5,
      boardTitle: "Final Editorial Look Presentation",
      collection: "Linear Elegance (SS27)",
      image: "/images/boards/pinstripes_page_07.jpg",
      focus: "Complete styling and silhouette realization of the tailored two-piece suit on an editorial runway form."
    }
  ];

  const currentExemplar = phaseExemplars[activeStep];
  const step = designProcessSteps[activeStep];

  return (
    <section id="process" className="py-24 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60 bg-atelier-cream/20 dark:bg-atelier-obsidian/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-haute text-atelier-olive dark:text-atelier-sand font-medium mb-3">
              <Compass className="w-4 h-4" />
              <span>Creative Methodology</span>
              <span className="text-atelier-stone dark:text-atelier-charcoal">/</span>
              <span>6-Stage Pipeline</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-atelier-charcoal dark:text-atelier-ivory font-light tracking-tight">
              From Ecological Inspiration <br />
              <span className="italic font-normal text-atelier-olive dark:text-atelier-sand">to Finished Silhouette</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-atelier-muted max-w-md font-sans font-light">
            Every garment created by Nitheesh S P undergoes a disciplined design translation: moving from raw biological observation through rigorous material science and technical drafting to editorial reality.
          </p>
        </div>

        {/* Interactive Step Timeline Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {designProcessSteps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeStep === idx
                  ? 'bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal border-transparent shadow-md scale-102'
                  : 'bg-white/50 dark:bg-atelier-charcoal/30 border-atelier-stone/30 dark:border-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand hover:border-atelier-olive'
              }`}
            >
              <div className="text-[10px] uppercase font-mono tracking-widest opacity-60">Phase {s.step}</div>
              <div className="font-serif text-base font-medium mt-1 truncate">{s.title}</div>
              <div className="text-[10px] opacity-70 mt-1 line-clamp-1">{s.phase}</div>
            </button>
          ))}
        </div>

        {/* Active Stage Deep Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-2xl bg-white/70 dark:bg-atelier-charcoal/40 border border-atelier-stone/30 dark:border-atelier-charcoal/80 shadow-xl">
          
          {/* Left Text / Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-atelier-sand/50 dark:bg-atelier-obsidian/60 text-xs font-mono text-atelier-olive dark:text-atelier-sand">
              <span>Stage {step.step} of 06</span>
              <span>·</span>
              <span>{step.phase}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-atelier-charcoal dark:text-atelier-ivory">
              {step.title}
            </h3>

            <p className="text-sm font-sans font-light text-atelier-charcoal/80 dark:text-atelier-sand/80 leading-relaxed">
              {step.desc}
            </p>

            <div className="p-4 rounded-xl bg-atelier-ivory dark:bg-atelier-obsidian/70 border border-atelier-stone/20 dark:border-atelier-charcoal space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-atelier-olive dark:text-atelier-sand font-medium block">
                Official Case Study Verification:
              </span>
              <div className="font-serif text-lg text-atelier-charcoal dark:text-atelier-sand">
                {currentExemplar.boardTitle}
              </div>
              <div className="text-xs text-atelier-muted">
                {currentExemplar.focus}
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <button
                onClick={() => onOpenLightbox({
                  image: currentExemplar.image,
                  title: `${currentExemplar.boardTitle} (${currentExemplar.collection})`,
                  category: `Design Process Stage ${step.step}`,
                  description: currentExemplar.focus
                })}
                className="px-5 py-2.5 rounded-full bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal text-xs uppercase tracking-wider font-medium hover:bg-atelier-olive dark:hover:bg-white transition-all shadow-sm flex items-center space-x-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Stage Board</span>
              </button>

              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % designProcessSteps.length)}
                className="text-xs uppercase tracking-wider text-atelier-muted hover:text-atelier-charcoal dark:hover:text-white flex items-center space-x-1"
              >
                <span>Next Stage →</span>
              </button>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className="lg:col-span-7">
            <div
              className="relative group rounded-xl overflow-hidden aspect-board bg-black border border-atelier-stone/40 dark:border-atelier-charcoal shadow-2xl cursor-pointer"
              onClick={() => onOpenLightbox({
                image: currentExemplar.image,
                title: `${currentExemplar.boardTitle} (${currentExemplar.collection})`,
                category: `Design Process Stage ${step.step}`,
                description: currentExemplar.focus
              })}
            >
              <img
                src={currentExemplar.image}
                alt={currentExemplar.boardTitle}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white text-xs">
                  <div className="font-serif text-lg">{currentExemplar.boardTitle}</div>
                  <div className="opacity-80">{currentExemplar.collection} · Click to zoom</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
