import React from 'react';
import { ArrowUpRight, Sparkles, Layers, Eye } from 'lucide-react';
import { collections } from '../data/portfolioData';

export default function CollectionsGallery({ onSelectCollection }) {
  // Editorial hero preview images for the 5 collections
  const previewImages = {
    'chroma-nature': '/images/boards/frog_page_10.jpg',
    'camo-leaf': '/images/boards/camo_page_07.jpg',
    'wild-instinct': '/images/boards/cheetah_page_07.jpg',
    'strie': '/images/boards/zebra_page_07.jpg',
    'linear-elegance': '/images/boards/pinstripes_page_07.jpg',
  };

  return (
    <section id="collections" className="py-14 sm:py-20 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-haute text-atelier-olive dark:text-atelier-sand font-medium mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Fashion Collections</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-atelier-charcoal dark:text-atelier-ivory font-light tracking-tight">
              Selected <span className="italic font-normal text-atelier-olive dark:text-atelier-sand">Collections</span>
            </h2>
          </div>

          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-atelier-muted max-w-md font-sans font-light">
            Select any collection to view its dedicated monograph page containing full storyboards, moodboards, color systems, garment flats, and final looks.
          </p>
        </div>

        {/* Collections Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((col, idx) => {
            const previewImg = previewImages[col.id] || col.coverImage;
            return (
              <div
                key={col.id}
                onClick={() => onSelectCollection(col.id)}
                className="group flex flex-col bg-white/70 dark:bg-atelier-charcoal/40 rounded-2xl overflow-hidden border border-atelier-stone/30 dark:border-atelier-charcoal/70 hover:border-atelier-olive dark:hover:border-atelier-sand/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Visual Image Stage */}
                <div className="relative aspect-board bg-black overflow-hidden">
                  <img
                    src={previewImg}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-black/70 backdrop-blur-md border border-white/10 font-mono">
                      Series {col.number} · {col.season}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-atelier-olive/90 backdrop-blur-md">
                      {col.category}
                    </span>
                  </div>

                  {/* Hover Inspect Indicator */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white text-atelier-charcoal text-[11px] uppercase tracking-wider font-medium shadow-md">
                      <span>Open Page</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-mono font-medium">
                        {col.category}
                      </span>
                      <span className="text-[11px] text-atelier-muted font-mono flex items-center space-x-1">
                        <Layers className="w-3 h-3" />
                        <span>{col.boards.length} Boards</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-atelier-charcoal dark:text-atelier-sand group-hover:text-atelier-olive dark:group-hover:text-white transition-colors">
                      {col.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-atelier-charcoal/75 dark:text-atelier-sand/75 font-sans font-light leading-relaxed line-clamp-2">
                      {col.tagline || col.concept}
                    </p>
                  </div>

                  {/* Pantone Dots & CTA */}
                  <div className="pt-3 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60 flex items-center justify-between">
                    {/* Palette Swatches */}
                    <div className="flex items-center space-x-1.5">
                      {col.pantones.map((swatch, pIdx) => (
                        <span
                          key={pIdx}
                          className="w-4 h-4 rounded-full border border-black/15 shadow-sm"
                          style={{ backgroundColor: swatch.hex }}
                          title={`Pantone ${swatch.code}: ${swatch.name}`}
                        />
                      ))}
                    </div>

                    {/* Button */}
                    <div className="inline-flex items-center space-x-1 text-xs uppercase tracking-wider font-medium text-atelier-charcoal dark:text-atelier-sand group-hover:text-atelier-olive dark:group-hover:text-white transition-colors">
                      <span>View Monograph</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
