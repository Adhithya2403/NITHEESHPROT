import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Eye, Check, Copy } from 'lucide-react';
import { collections } from '../data/portfolioData';

export default function CollectionDetailPage({ collectionId, onBack, onSelectCollection, onOpenLightbox }) {
  const collectionIndex = collections.findIndex(c => c.id === collectionId);
  const collection = collections[collectionIndex] || collections[0];

  const [activeBoardIdx, setActiveBoardIdx] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedHex, setCopiedHex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveBoardIdx(0);
    setActiveCategory('all');
  }, [collectionId]);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'Storyboard', label: 'Storyboards' },
    { id: 'Moodboard', label: 'Moodboards' },
    { id: 'Colour', label: 'Colour & Print' },
    { id: 'Design', label: 'Flats' },
    { id: 'Look', label: 'Final Looks' }
  ];

  const prevCollection = collections[(collectionIndex - 1 + collections.length) % collections.length];
  const nextCollection = collections[(collectionIndex + 1) % collections.length];

  const currentBoard = collection.boards[activeBoardIdx] || collection.boards[0];

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  const handleCategoryFilter = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      setActiveBoardIdx(0);
    } else {
      const matchIdx = collection.boards.findIndex(b =>
        b.category.toLowerCase().includes(catId.toLowerCase())
      );
      if (matchIdx !== -1) setActiveBoardIdx(matchIdx);
    }
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between py-3 mb-6 border-b border-atelier-stone/20 dark:border-atelier-charcoal">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-medium text-atelier-charcoal dark:text-atelier-sand hover:text-atelier-olive transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <div className="flex items-center space-x-2 text-xs font-mono">
            <button
              onClick={() => onSelectCollection(prevCollection.id)}
              className="p-1 rounded hover:bg-atelier-stone/20 transition-colors"
              title={`Series ${prevCollection.number}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-atelier-muted">
              Series {collection.number} / 05
            </span>
            <button
              onClick={() => onSelectCollection(nextCollection.id)}
              className="p-1 rounded hover:bg-atelier-stone/20 transition-colors"
              title={`Series ${nextCollection.number}`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimal Collection Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-mono block mb-1">
              Series {collection.number} · {collection.season} · {collection.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-atelier-charcoal dark:text-atelier-ivory font-light">
              {collection.title}
            </h1>
          </div>

          {/* Minimal Pantone Swatches */}
          <div className="flex items-center space-x-2 bg-white/60 dark:bg-atelier-charcoal/40 p-2 rounded-xl border border-atelier-stone/20 dark:border-atelier-charcoal">
            {collection.pantones.map((swatch, idx) => (
              <button
                key={idx}
                onClick={() => copyToClipboard(swatch.hex)}
                className="group flex items-center space-x-1.5 px-2 py-1 rounded-lg hover:bg-atelier-stone/15 transition-colors text-xs font-mono"
                title={`${swatch.name} (${swatch.hex}) — Click to copy`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/20"
                  style={{ backgroundColor: swatch.hex }}
                />
                <span className="text-[11px] text-atelier-muted">{swatch.code}</span>
                {copiedHex === swatch.hex && <Check className="w-3 h-3 text-green-600" />}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryFilter(cat.id)}
              className={`px-3 py-1 text-xs rounded-full uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal font-medium'
                  : 'bg-atelier-stone/20 dark:bg-atelier-charcoal/50 text-atelier-muted hover:text-atelier-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Master Board Viewer */}
        <div className="space-y-4">
          <div className="relative group rounded-2xl overflow-hidden aspect-board bg-black shadow-xl border border-atelier-stone/30 dark:border-atelier-charcoal">
            <img
              src={currentBoard.image}
              alt={currentBoard.title}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => onOpenLightbox(currentBoard)}
            />

            {/* Prev / Next Arrows */}
            <button
              onClick={() => setActiveBoardIdx((prev) => (prev - 1 + collection.boards.length) % collection.boards.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all z-10"
              aria-label="Previous board"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setActiveBoardIdx((prev) => (prev + 1) % collection.boards.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all z-10"
              aria-label="Next board"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Minimal Caption on Bottom */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl">
              <span className="font-serif text-sm truncate pr-2">{currentBoard.title}</span>
              <button
                onClick={() => onOpenLightbox(currentBoard)}
                className="flex items-center space-x-1 font-mono text-[10px] text-atelier-sand hover:underline uppercase flex-shrink-0"
              >
                <Eye className="w-3 h-3" />
                <span>Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Minimal Thumbnails Strip */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
            {collection.boards.map((b, idx) => (
              <button
                key={b.id}
                onClick={() => setActiveBoardIdx(idx)}
                className={`flex-shrink-0 w-24 sm:w-28 rounded-lg overflow-hidden border aspect-board transition-all ${
                  activeBoardIdx === idx
                    ? 'border-atelier-olive dark:border-atelier-sand ring-2 ring-atelier-olive/40'
                    : 'border-atelier-stone/30 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={b.image} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Return Action */}
        <div className="flex justify-between items-center pt-10 border-t border-atelier-stone/20 dark:border-atelier-charcoal mt-12">
          <button
            onClick={() => onSelectCollection(prevCollection.id)}
            className="text-xs uppercase tracking-wider text-atelier-muted hover:text-atelier-charcoal flex items-center space-x-1 font-mono"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Series {prevCollection.number}</span>
          </button>

          <button
            onClick={onBack}
            className="px-6 py-2.5 rounded-full bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal text-xs uppercase tracking-wider font-medium hover:bg-atelier-olive transition-colors"
          >
            All Collections
          </button>

          <button
            onClick={() => onSelectCollection(nextCollection.id)}
            className="text-xs uppercase tracking-wider text-atelier-muted hover:text-atelier-charcoal flex items-center space-x-1 font-mono"
          >
            <span>Series {nextCollection.number}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
