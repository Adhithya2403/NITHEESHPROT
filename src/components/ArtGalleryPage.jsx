import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { artGalleryItems } from '../data/artGalleryData';

export default function ArtGalleryPage({ onBack, onOpenLightbox }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="mb-6 flex items-center justify-between pb-3 border-b border-atelier-stone/20 dark:border-atelier-charcoal">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-sm font-medium text-atelier-charcoal dark:text-atelier-sand hover:text-atelier-olive transition-colors py-2 px-3 rounded-lg bg-white/70 dark:bg-atelier-charcoal/50 border border-atelier-stone/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <h2 className="font-serif text-2xl sm:text-3xl text-atelier-charcoal dark:text-atelier-ivory font-light">
            Art Gallery
          </h2>

          <span className="text-xs font-mono text-atelier-muted">
            {artGalleryItems.length} Artworks
          </span>
        </div>

        {/* Clean Responsive Grid - Images Fit Completely */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {artGalleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox({
                image: item.image,
                title: item.title,
                category: 'Art Gallery'
              })}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-atelier-stone/20 dark:border-atelier-charcoal bg-white/50 dark:bg-atelier-charcoal/30 cursor-pointer group transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto block object-cover group-hover:scale-[1.02] transition-transform duration-300"
                loading={index < 8 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Bottom Back Button */}
        <div className="flex justify-center pt-10 sm:pt-14">
          <button
            onClick={onBack}
            className="px-8 py-3 rounded-full bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal text-xs uppercase tracking-wider font-medium hover:bg-atelier-olive transition-colors"
          >
            ← Back to Home
          </button>
        </div>

      </div>
    </div>
  );
}
