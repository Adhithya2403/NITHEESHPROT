import React from 'react';
import { ArrowDown, ArrowRight, Eye } from 'lucide-react';
import { designerInfo } from '../data/portfolioData';

export default function Hero({ onOpenLightbox }) {
  const coverArtwork = {
    image: '/images/boards/frog_page_01.jpg',
    title: 'Fashion Design Portfolio — 2027',
    category: 'Presentation Cover',
    description: 'Portfolio Cover by Nitheesh S P — Fashion Technology, 2027.'
  };

  return (
    <section className="relative min-h-[85vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Minimal & Strong Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-haute text-atelier-olive dark:text-atelier-sand font-medium">
              Portfolio 2027 · Fashion Technology
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl leading-[1.05] tracking-tight font-light text-atelier-charcoal dark:text-atelier-ivory">
              Designing Stories Through <span className="italic font-normal text-atelier-olive dark:text-atelier-sand">Fabric</span> & Form.
            </h1>

            <p className="text-base sm:text-lg font-sans font-light text-atelier-muted max-w-lg">
              {designerInfo.name} — Concept Designer & Apparel Technologist.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#collections"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-atelier-charcoal text-atelier-ivory dark:bg-atelier-sand dark:text-atelier-charcoal text-xs uppercase tracking-luxury font-medium hover:bg-atelier-olive dark:hover:bg-white transition-all shadow-sm"
              >
                <span>Collections</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-atelier-stone/50 dark:border-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand text-xs uppercase tracking-luxury hover:border-atelier-olive transition-all"
              >
                <span>About</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Framed Cover Artwork */}
          <div className="lg:col-span-6">
            <div
              className="relative group rounded-2xl overflow-hidden shadow-xl bg-atelier-charcoal border border-atelier-stone/30 dark:border-atelier-charcoal/80 aspect-board cursor-pointer"
              onClick={() => onOpenLightbox(coverArtwork)}
            >
              <img
                src={coverArtwork.image}
                alt="Fashion Design Portfolio - 2027"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-serif text-base sm:text-lg">Fashion Design Portfolio · 2027</span>
                <span className="flex items-center space-x-1 font-mono text-[11px] opacity-80 uppercase tracking-wider">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
