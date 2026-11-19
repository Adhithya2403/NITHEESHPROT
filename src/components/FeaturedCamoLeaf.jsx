import React, { useState } from 'react';
import { Eye, Copy, Check, ArrowRight, Sparkles, Layers, Sliders, Maximize2 } from 'lucide-react';
import { collections } from '../data/portfolioData';

export default function FeaturedCamoLeaf({ onOpenLightbox, onOpenFullCollection }) {
  const camo = collections.find(c => c.id === 'camo-leaf');
  const [copiedHex, setCopiedHex] = useState(null);
  const [activeBoardIndex, setActiveBoardIndex] = useState(1); // default to storyboard or moodboard
  const [garmentView, setGarmentView] = useState('jacket'); // 'jacket' or 'trouser'

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  if (!camo) return null;

  return (
    <section id="featured-camo" className="py-24 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60 bg-atelier-cream/30 dark:bg-atelier-obsidian/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-haute text-atelier-olive dark:text-atelier-sand font-medium mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Keynote Collection Presentation</span>
              <span className="text-atelier-stone dark:text-atelier-charcoal">/</span>
              <span>{camo.season}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-atelier-charcoal dark:text-atelier-ivory font-light tracking-tight">
              Collection 02 — <span className="italic font-normal text-atelier-olive dark:text-atelier-sand">Camo Leaf</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg font-sans font-light text-atelier-charcoal/80 dark:text-atelier-sand/80 leading-relaxed">
              {camo.concept}
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end space-y-2">
            <span className="text-xs uppercase tracking-luxury text-atelier-muted">
              Autumn/Winter 2027 Series
            </span>
            <button
              onClick={() => onOpenFullCollection(camo.id)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-atelier-olive text-white hover:bg-atelier-deepOlive transition-all text-xs uppercase tracking-luxury font-medium shadow-sm group"
            >
              <span>Explore Complete 7-Board Monograph</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 1. Large Editorial Dual Display: Storyboard & Moodboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Storyboard Card */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-atelier-muted">Board 02 · Concept Origin</span>
                <h3 className="font-serif text-2xl text-atelier-charcoal dark:text-atelier-sand">Ecological Storyboard</h3>
              </div>
              <span className="text-xs text-atelier-muted font-mono">16:9 Landscape</span>
            </div>

            <div 
              className="relative group rounded-xl overflow-hidden aspect-board bg-atelier-charcoal border border-atelier-stone/30 dark:border-atelier-charcoal cursor-pointer shadow-lg"
              onClick={() => onOpenLightbox(camo.boards[1])}
            >
              <img
                src={camo.boards[1].image}
                alt={camo.boards[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="px-4 py-2 rounded-full bg-white/90 text-atelier-charcoal text-xs uppercase tracking-wider font-medium flex items-center space-x-1.5 shadow-xl">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Full Resolution</span>
                </span>
              </div>
            </div>
            <p className="text-xs font-sans text-atelier-muted leading-relaxed">
              <strong>Storyboard:</strong> Visual research capturing weathered forest textures, fallen leaves, autumn decay, and the biological transition of organic camouflage.
            </p>
          </div>

          {/* Moodboard Card */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-atelier-muted">Board 03 · Atmosphere & Form</span>
                <h3 className="font-serif text-2xl text-atelier-charcoal dark:text-atelier-sand">Atmospheric Moodboard</h3>
              </div>
              <span className="text-xs text-atelier-muted font-mono">16:9 Landscape</span>
            </div>

            <div 
              className="relative group rounded-xl overflow-hidden aspect-board bg-atelier-charcoal border border-atelier-stone/30 dark:border-atelier-charcoal cursor-pointer shadow-lg"
              onClick={() => onOpenLightbox(camo.boards[2])}
            >
              <img
                src={camo.boards[2].image}
                alt={camo.boards[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="px-4 py-2 rounded-full bg-white/90 text-atelier-charcoal text-xs uppercase tracking-wider font-medium flex items-center space-x-1.5 shadow-xl">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Full Resolution</span>
                </span>
              </div>
            </div>
            <p className="text-xs font-sans text-atelier-muted leading-relaxed">
              <strong>Mood Board:</strong> Forest atmosphere, muted earthy tones, tactile woven fabrics, and relaxed utilitarian streetwear silhouettes designed for mobility.
            </p>
          </div>

        </div>

        {/* 2. Colour & Print Board with Interactive Pantone System */}
        <div className="mb-16 bg-atelier-ivory dark:bg-atelier-charcoal/40 p-8 sm:p-10 rounded-2xl border border-atelier-stone/30 dark:border-atelier-charcoal/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Interactive Pantone Swatches */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium">
                  Board 04 · Formulation
                </span>
                <h3 className="font-serif text-3xl text-atelier-charcoal dark:text-atelier-ivory mt-1">
                  Colour Palette & Pantone System
                </h3>
                <p className="text-xs text-atelier-muted mt-2 leading-relaxed">
                  Four rigorously specified Pantone TCX swatches harmonized with the bespoke organic Camo Leaf textile print. Click any swatch to copy its Hex value.
                </p>
              </div>

              {/* Swatches Grid */}
              <div className="space-y-3">
                {camo.pantones.map((swatch, idx) => (
                  <div
                    key={idx}
                    onClick={() => copyToClipboard(swatch.hex)}
                    className="group flex items-center justify-between p-3 rounded-lg border border-atelier-stone/20 dark:border-atelier-charcoal hover:border-atelier-olive dark:hover:border-atelier-sand/40 bg-white/60 dark:bg-atelier-obsidian/60 cursor-pointer transition-all hover:translate-x-1"
                  >
                    <div className="flex items-center space-x-4">
                      <span
                        className="w-10 h-10 rounded-md shadow-inner border border-black/10 flex-shrink-0"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <div>
                        <div className="font-mono text-xs font-medium text-atelier-charcoal dark:text-atelier-sand">
                          PANTONE {swatch.code}
                        </div>
                        <div className="text-[11px] text-atelier-muted font-sans">
                          {swatch.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-mono text-atelier-muted group-hover:text-atelier-charcoal dark:group-hover:text-white">
                      <span>{swatch.hex}</span>
                      {copiedHex === swatch.hex ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-atelier-muted italic">
                * Extracted directly from official Camo Leaf PDF Colour/Print Board.
              </div>
            </div>

            {/* Right: The Actual High-Res Colour/Print Board */}
            <div className="lg:col-span-7 flex flex-col space-y-3">
              <div
                className="relative group rounded-xl overflow-hidden aspect-board bg-atelier-charcoal border border-atelier-stone/40 dark:border-atelier-charcoal cursor-pointer shadow-xl"
                onClick={() => onOpenLightbox(camo.boards[3])}
              >
                <img
                  src={camo.boards[3].image}
                  alt={camo.boards[3].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="px-4 py-2 rounded-full bg-white/95 text-atelier-charcoal text-xs uppercase tracking-wider font-medium flex items-center space-x-1.5 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect Pantone & Print Board</span>
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs text-atelier-muted">
                <span>Original Camo Leaf Repeat Print & Pantone Swatches</span>
                <span className="font-mono">Page 04</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Garment Technical Design Flats (Front & Back Interactive Comparison) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium">
                Boards 05 & 06 · Technical Construction
              </span>
              <h3 className="font-serif text-3xl text-atelier-charcoal dark:text-atelier-ivory mt-1">
                Garment Technical Illustrations — Front & Back Views
              </h3>
              <p className="text-xs text-atelier-muted mt-1">
                Explore the production flat drawings showcasing seam allowances, pocket mechanics, and print continuity.
              </p>
            </div>

            {/* View Selector Buttons */}
            <div className="mt-4 sm:mt-0 flex p-1 rounded-lg bg-atelier-sand/40 dark:bg-atelier-charcoal/60 border border-atelier-stone/30 dark:border-atelier-charcoal">
              <button
                onClick={() => setGarmentView('jacket')}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-md transition-all ${
                  garmentView === 'jacket'
                    ? 'bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal font-medium shadow-sm'
                    : 'text-atelier-muted hover:text-atelier-charcoal dark:hover:text-atelier-sand'
                }`}
              >
                Utility Jacket (Board 05)
              </button>
              <button
                onClick={() => setGarmentView('trouser')}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-md transition-all ${
                  garmentView === 'trouser'
                    ? 'bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal font-medium shadow-sm'
                    : 'text-atelier-muted hover:text-atelier-charcoal dark:hover:text-atelier-sand'
                }`}
              >
                Matching Trousers (Board 06)
              </button>
            </div>
          </div>

          {/* Garment Display Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/40 dark:bg-atelier-charcoal/20 p-6 sm:p-8 rounded-2xl border border-atelier-stone/20 dark:border-atelier-charcoal/60">
            <div className="lg:col-span-8">
              <div
                className="relative group rounded-xl overflow-hidden aspect-board bg-atelier-charcoal border border-atelier-stone/40 dark:border-atelier-charcoal cursor-pointer shadow-xl"
                onClick={() => onOpenLightbox(garmentView === 'jacket' ? camo.boards[4] : camo.boards[5])}
              >
                <img
                  src={garmentView === 'jacket' ? camo.boards[4].image : camo.boards[5].image}
                  alt={garmentView === 'jacket' ? camo.boards[4].title : camo.boards[5].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="px-4 py-2 rounded-full bg-white/95 text-atelier-charcoal text-xs uppercase tracking-wider font-medium flex items-center space-x-1.5 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Zoom Technical Construction Lines</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-mono">
                {garmentView === 'jacket' ? 'Design Board 01 · Outerwear' : 'Design Board 02 · Bottoms'}
              </span>
              <h4 className="font-serif text-2xl text-atelier-charcoal dark:text-atelier-ivory">
                {garmentView === 'jacket' ? 'Camo Leaf Utility Jacket' : 'Articulated Camo Trousers'}
              </h4>

              <div className="space-y-4 text-xs font-sans text-atelier-charcoal/80 dark:text-atelier-sand/80 leading-relaxed">
                <div className="p-3 rounded-lg bg-atelier-ivory dark:bg-atelier-obsidian/70 border border-atelier-stone/20 dark:border-atelier-charcoal">
                  <span className="font-medium text-atelier-olive dark:text-atelier-sand block uppercase tracking-wider text-[10px] mb-1">
                    Front Technical Specs:
                  </span>
                  {garmentView === 'jacket' ? camo.garments[0].views.front : camo.garments[1].views.front}
                </div>

                <div className="p-3 rounded-lg bg-atelier-ivory dark:bg-atelier-obsidian/70 border border-atelier-stone/20 dark:border-atelier-charcoal">
                  <span className="font-medium text-atelier-olive dark:text-atelier-sand block uppercase tracking-wider text-[10px] mb-1">
                    Back Technical Specs:
                  </span>
                  {garmentView === 'jacket' ? camo.garments[0].views.back : camo.garments[1].views.back}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] text-atelier-muted">
                  Both garments engineered with organic camo print alignment across side seams.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Final Look Board: The Completed Outfit on Model */}
        <div className="relative rounded-2xl overflow-hidden border border-atelier-stone/40 dark:border-atelier-charcoal shadow-2xl bg-atelier-charcoal aspect-board">
          <img
            src={camo.boards[6].image}
            alt="Camo Leaf Final Look Board"
            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-700"
            onClick={() => onOpenLightbox(camo.boards[6])}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-haute text-atelier-sand font-medium">
                Board 07 · Culmination
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl text-white font-light mt-1">
                Final Look Board — Autumn/Winter 2027
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-light">
                Finished outfit presentation bringing the utility jacket and matching articulated trousers together as a cohesive luxury streetwear collection.
              </p>
            </div>

            <button
              onClick={() => onOpenLightbox(camo.boards[6])}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-atelier-charcoal font-sans text-xs uppercase tracking-luxury font-medium hover:bg-atelier-sand transition-all shadow-xl"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Fullscreen Master View</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
