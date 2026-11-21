import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { collections } from '../data/portfolioData';

export default function CollectionDetailPage({ collectionId, onBack, onOpenLightbox }) {
  const collection = collections.find(c => c.id === collectionId) || collections[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [collectionId]);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-3 sm:px-6">
        
        {/* Simple Back Button */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-sm font-medium text-atelier-charcoal dark:text-atelier-sand hover:text-atelier-olive transition-colors py-2 px-3 rounded-lg bg-white/70 dark:bg-atelier-charcoal/50 border border-atelier-stone/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <h2 className="font-serif text-xl sm:text-2xl text-atelier-charcoal dark:text-atelier-sand">
            {collection.title}
          </h2>
        </div>

        {/* Continuous PPT Pages Only - Exactly the PPT, No Other Stuff */}
        <div className="space-y-4 sm:space-y-6">
          {collection.boards.map((board, index) => (
            <div
              key={board.id || index}
              className="rounded-xl overflow-hidden shadow-md bg-black border border-atelier-stone/20 dark:border-atelier-charcoal aspect-board cursor-pointer"
              onClick={() => onOpenLightbox(board)}
            >
              <img
                src={board.image}
                alt={`${collection.title} - Page ${index + 1}`}
                className="w-full h-full object-contain bg-black"
                loading={index < 3 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Bottom Back Button */}
        <div className="flex justify-center pt-8 sm:pt-12">
          <button
            onClick={onBack}
            className="px-8 py-3 rounded-full bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal text-xs uppercase tracking-wider font-medium hover:bg-atelier-olive transition-colors"
          >
            ← Back to Collections
          </button>
        </div>

      </div>
    </div>
  );
}
