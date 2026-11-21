import React from 'react';
import { collections } from '../data/portfolioData';

export default function CollectionsGallery({ onSelectCollection, onOpenArtGallery }) {
  // Title slide at the start of each PPT
  const titleImages = {
    'chroma-nature': '/images/boards/frog_page_03.jpg',
    'camo-leaf': '/images/boards/camo_page_01.jpg',
    'wild-instinct': '/images/boards/cheetah_page_01.jpg',
    'strie': '/images/boards/zebra_page_01.jpg',
    'linear-elegance': '/images/boards/pinstripes_page_01.jpg',
  };

  return (
    <section id="collections" className="py-12 sm:py-16 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Switcher: Fashion & Art Gallery */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-3 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <div className="flex items-center space-x-2">
            <button
              className="px-5 py-2 rounded-full bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal text-sm uppercase tracking-wider font-medium shadow-sm"
            >
              Fashion
            </button>

            <button
              onClick={onOpenArtGallery}
              className="px-5 py-2 rounded-full border border-atelier-stone/40 dark:border-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand text-sm uppercase tracking-wider font-medium hover:border-atelier-olive transition-all bg-white/50 dark:bg-atelier-charcoal/40"
            >
              Art Gallery
            </button>
          </div>

          <span className="text-xs font-mono text-atelier-muted">
            05 Collections
          </span>
        </div>

        {/* 5 Collections Grid - Images Fit Completely With No Black Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {collections.map((col) => {
            const titleImg = titleImages[col.id] || col.boards[0]?.image;
            return (
              <div
                key={col.id}
                onClick={() => onSelectCollection(col.id)}
                className="group bg-white/70 dark:bg-atelier-charcoal/40 rounded-xl overflow-hidden border border-atelier-stone/30 dark:border-atelier-charcoal hover:border-atelier-olive transition-all cursor-pointer shadow-sm"
              >
                {/* Full-bleed Title slide image from start of PPT */}
                <div className="w-full overflow-hidden">
                  <img
                    src={titleImg}
                    alt={col.title}
                    className="w-full h-auto block object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Just the Name */}
                <div className="p-3.5 text-center">
                  <h3 className="font-serif text-lg text-atelier-charcoal dark:text-atelier-sand group-hover:text-atelier-olive transition-colors font-medium">
                    {col.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
