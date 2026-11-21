import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { collections } from '../data/portfolioData';

export default function CollectionsGallery({ onSelectCollection }) {
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
        
        {/* Section Header - Clean & Simple */}
        <div className="flex items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-mono block mb-1">
              Curated Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-atelier-charcoal dark:text-atelier-ivory font-light">
              Selected Collections
            </h2>
          </div>
          <span className="text-xs font-mono text-atelier-muted">
            05 Series
          </span>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => {
            const previewImg = previewImages[col.id] || col.coverImage;
            return (
              <div
                key={col.id}
                onClick={() => onSelectCollection(col.id)}
                className="group flex flex-col bg-white/70 dark:bg-atelier-charcoal/40 rounded-2xl overflow-hidden border border-atelier-stone/30 dark:border-atelier-charcoal/70 hover:border-atelier-olive transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              >
                {/* Visual Stage */}
                <div className="relative aspect-board bg-black overflow-hidden">
                  <img
                    src={previewImg}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />

                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-black/70 backdrop-blur-md text-white border border-white/10">
                    Series {col.number} · {col.season}
                  </div>
                </div>

                {/* Card Info - Minimal */}
                <div className="p-4 sm:p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-atelier-charcoal dark:text-atelier-sand group-hover:text-atelier-olive transition-colors">
                      {col.title}
                    </h3>
                    <span className="text-xs text-atelier-muted font-sans font-light">
                      {col.category}
                    </span>
                  </div>

                  {/* Swatches & Arrow */}
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-1">
                      {col.pantones.slice(0, 3).map((swatch, idx) => (
                        <span
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full border border-black/20"
                          style={{ backgroundColor: swatch.hex }}
                        />
                      ))}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-atelier-muted group-hover:text-atelier-olive group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
