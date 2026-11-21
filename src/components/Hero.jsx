import React from 'react';
import { ArrowDown, ArrowRight, Sparkles, Eye, Maximize2 } from 'lucide-react';
import { designerInfo } from '../data/portfolioData';

export default function Hero({ onOpenLightbox }) {
  // Official presentation cover artwork from the designer's dossier
  const coverArtwork = {
    image: '/images/boards/frog_page_01.jpg',
    title: 'Fashion Design Portfolio — 2027',
    category: 'Presentation Cover',
    description: 'Official portfolio introduction cover page inscribed by Nitheesh S P — Fashion Technology, Class of 2027.'
  };

  return (
    <section className="relative min-h-[88vh] pt-24 sm:pt-28 pb-10 sm:pb-14 flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Editorial Top Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-atelier-stone/30 dark:border-atelier-charcoal text-[11px] sm:text-xs uppercase tracking-luxury text-atelier-muted">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-atelier-olive animate-pulse"></span>
            <span>Fashion Portfolio 2027</span>
            <span className="text-atelier-stone dark:text-atelier-charcoal">/</span>
            <span>Fashion Technology</span>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6 text-[10px] sm:text-xs">
            <span>SS 27 & AW 27</span>
            <span>·</span>
            <span>5 Curated Collections</span>
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-6 sm:pt-10 lg:pt-12">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-atelier-sand/50 dark:bg-atelier-charcoal/60 border border-atelier-stone/40 dark:border-atelier-charcoal/60 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-atelier-ochre" />
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-widest text-atelier-charcoal dark:text-atelier-sand font-medium">
                Fashion Designer & Apparel Technologist
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] sm:leading-[1.05] tracking-tight font-light text-atelier-charcoal dark:text-atelier-ivory">
              Designing Stories Through <span className="italic font-normal text-atelier-olive dark:text-atelier-sand">Fabric</span>, Form & Identity.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg font-sans font-light text-atelier-charcoal/80 dark:text-atelier-sand/80 leading-relaxed max-w-xl">
              I am <strong className="font-medium text-atelier-charcoal dark:text-white">{designerInfo.name}</strong>, a Fashion Technology student and designer. I transform natural adaptations, biological textures, and organic camouflage into contemporary streetwear and structured tailoring.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-3 border-y border-atelier-stone/20 dark:border-atelier-charcoal/50">
              {designerInfo.stats.slice(0, 3).map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl text-atelier-charcoal dark:text-atelier-ivory font-normal">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-atelier-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Clean CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#collections"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-atelier-charcoal text-atelier-ivory dark:bg-atelier-sand dark:text-atelier-charcoal font-sans text-xs uppercase tracking-luxury font-medium hover:bg-atelier-olive dark:hover:bg-white transition-all shadow-md group text-center"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-atelier-stone dark:border-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand font-sans text-xs uppercase tracking-luxury hover:border-atelier-olive dark:hover:border-atelier-sand transition-all text-center"
              >
                <span>About the Designer</span>
              </a>
            </div>

            {/* Editorial Designer Vision Quote */}
            <div className="pt-1 text-xs italic text-atelier-muted font-serif flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-atelier-olive flex-shrink-0 mt-1"></span>
              <span className="leading-relaxed">"{designerInfo.vision}"</span>
            </div>
          </div>

          {/* Right Column: Fashion Design Presentation Cover Artwork */}
          <div className="lg:col-span-6 flex flex-col space-y-3">
            <div
              className="relative group rounded-2xl overflow-hidden shadow-2xl bg-atelier-charcoal border border-atelier-stone/30 dark:border-atelier-charcoal/80 aspect-board cursor-pointer"
              onClick={() => onOpenLightbox(coverArtwork)}
            >
              <img
                src={coverArtwork.image}
                alt="Fashion Design Portfolio - 2027 Nitheesh S P"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                loading="eager"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Banner Tag */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-20">
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] uppercase tracking-luxury font-medium bg-black/70 backdrop-blur-md text-white border border-white/15">
                  Official Presentation Dossier
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenLightbox(coverArtwork);
                  }}
                  className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] uppercase tracking-wider bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-colors flex items-center space-x-1"
                  aria-label="Inspect portfolio cover artwork"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Inspect Master</span>
                </button>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white flex flex-col space-y-1.5 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-atelier-sand font-mono">
                      Portfolio Introduction Cover
                    </p>
                    <h3 className="font-serif text-lg sm:text-2xl text-white font-medium">
                      Fashion Design Portfolio · 2027
                    </h3>
                  </div>

                  <span className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white/90 text-xs font-mono border border-white/10">
                    <Maximize2 className="w-3 h-3 text-atelier-sand" />
                    <span>2048px</span>
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-white/15 text-[10px] sm:text-[11px] text-white/80">
                  <span>Inscribed by Nitheesh S P</span>
                  <span className="text-atelier-sand uppercase tracking-wider font-mono">
                    Tap to expand full screen ↗
                  </span>
                </div>
              </div>
            </div>

            {/* Micro Caption */}
            <div className="flex items-center justify-between px-2 text-[11px] text-atelier-muted">
              <span>Original artwork from portfolio dossier</span>
              <span className="font-mono">Page 01 · Cover Board</span>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 hidden sm:flex items-center justify-between text-xs uppercase tracking-luxury text-atelier-muted">
        <a href="#about" className="hover:text-atelier-olive dark:hover:text-white transition-colors">
          <span>About Nitheesh S P</span>
        </a>
        <a
          href="#collections"
          className="flex items-center space-x-2 hover:text-atelier-charcoal dark:hover:text-white transition-colors animate-bounce"
        >
          <span>Explore Collections</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
        <span className="font-mono text-[11px]">36 Curated Boards</span>
      </div>
    </section>
  );
}
