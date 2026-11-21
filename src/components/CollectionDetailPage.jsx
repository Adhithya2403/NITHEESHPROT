import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Eye, Maximize2, Copy, Check, Sparkles, Layers, Grid, SlidersHorizontal } from 'lucide-react';
import { collections } from '../data/portfolioData';

export default function CollectionDetailPage({ collectionId, onBack, onSelectCollection, onOpenLightbox }) {
  const collectionIndex = collections.findIndex(c => c.id === collectionId);
  const collection = collections[collectionIndex] || collections[0];

  const [activeBoardIdx, setActiveBoardIdx] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedHex, setCopiedHex] = useState(null);
  const [viewMode, setViewMode] = useState('stage'); // 'stage' or 'grid'

  // Scroll to top whenever collectionId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveBoardIdx(0);
    setActiveCategory('all');
  }, [collectionId]);

  // Categories available in this collection
  const categories = [
    { id: 'all', label: 'All Boards' },
    { id: 'Cover', label: 'Cover' },
    { id: 'Storyboard', label: 'Storyboards' },
    { id: 'Moodboard', label: 'Moodboards' },
    { id: 'Colour', label: 'Colour & Print' },
    { id: 'Design', label: 'Design Flats' },
    { id: 'Look', label: 'Final Looks' }
  ];

  // Filter boards based on active category
  const filteredBoards = activeCategory === 'all'
    ? collection.boards
    : collection.boards.filter(b => b.category.toLowerCase().includes(activeCategory.toLowerCase()));

  // Next and Previous collections
  const prevCollection = collections[(collectionIndex - 1 + collections.length) % collections.length];
  const nextCollection = collections[(collectionIndex + 1) % collections.length];

  const currentBoard = collection.boards[activeBoardIdx] || collection.boards[0];

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
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
    <div className="min-h-screen pt-20 sm:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Top Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 mb-8 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury font-medium text-atelier-charcoal dark:text-atelier-sand hover:text-atelier-olive dark:hover:text-white transition-colors w-fit p-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to All Collections</span>
          </button>

          {/* Quick Series Jump Controls */}
          <div className="flex items-center space-x-3 text-xs">
            <span className="text-atelier-muted font-mono hidden md:inline">
              Series {collection.number} of 05
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onSelectCollection(prevCollection.id)}
                className="px-3 py-1.5 rounded-lg border border-atelier-stone/30 dark:border-atelier-charcoal hover:border-atelier-olive text-atelier-charcoal dark:text-atelier-sand transition-all text-xs flex items-center space-x-1"
                title={`Previous: ${prevCollection.title}`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Series {prevCollection.number}</span>
              </button>

              <button
                onClick={() => onSelectCollection(nextCollection.id)}
                className="px-3 py-1.5 rounded-lg border border-atelier-stone/30 dark:border-atelier-charcoal hover:border-atelier-olive text-atelier-charcoal dark:text-atelier-sand transition-all text-xs flex items-center space-x-1"
                title={`Next: ${nextCollection.title}`}
              >
                <span className="hidden sm:inline">Series {nextCollection.number}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Collection Editorial Dossier Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          
          {/* Left Column: Metadata & Narrative */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider font-mono">
              <span className="px-2.5 py-1 rounded bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal font-medium">
                Series {collection.number}
              </span>
              <span className="px-2.5 py-1 rounded bg-atelier-olive text-white font-medium">
                {collection.season}
              </span>
              <span className="px-2.5 py-1 rounded bg-atelier-stone/20 dark:bg-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand">
                {collection.category}
              </span>
              <span className="text-atelier-muted">·</span>
              <span className="text-atelier-muted">{collection.boards.length} Official Boards</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-atelier-charcoal dark:text-atelier-ivory font-light tracking-tight leading-[1.08]">
              {collection.title}
            </h1>

            {collection.heroSubtitle && (
              <p className="font-serif italic text-lg sm:text-xl text-atelier-olive dark:text-atelier-sand">
                "{collection.heroSubtitle}"
              </p>
            )}

            <p className="text-sm sm:text-base font-sans font-light text-atelier-charcoal/85 dark:text-atelier-sand/85 leading-relaxed">
              {collection.narrative || collection.concept}
            </p>

            {/* Techniques & Textile Details */}
            {collection.techniques && collection.techniques.length > 0 && (
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-atelier-muted font-medium block mb-2 font-mono">
                  Textile Techniques & Construction:
                </span>
                <div className="flex flex-wrap gap-2">
                  {collection.techniques.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs bg-white/70 dark:bg-atelier-charcoal/50 border border-atelier-stone/30 dark:border-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Pantone TCX Standardization Palette */}
          <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-atelier-charcoal/40 border border-atelier-stone/30 dark:border-atelier-charcoal space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-mono font-medium block">
                Official Color Standard
              </span>
              <h3 className="font-serif text-xl text-atelier-charcoal dark:text-atelier-sand">
                Pantone Architecture
              </h3>
            </div>

            <div className="space-y-2">
              {collection.pantones.map((swatch, sIdx) => (
                <div
                  key={sIdx}
                  onClick={() => copyToClipboard(swatch.hex)}
                  className="group flex items-center justify-between p-2.5 rounded-xl border border-atelier-stone/20 dark:border-atelier-charcoal hover:border-atelier-olive bg-atelier-ivory/60 dark:bg-atelier-obsidian/60 cursor-pointer transition-colors"
                  title="Click to copy Hex code"
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className="w-6 h-6 rounded-lg border border-black/15 shadow-inner flex-shrink-0"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div>
                      <div className="font-mono text-xs font-semibold text-atelier-charcoal dark:text-atelier-sand">
                        PANTONE {swatch.code}
                      </div>
                      <div className="text-[11px] text-atelier-muted truncate max-w-[150px]">
                        {swatch.name}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 font-mono text-xs text-atelier-muted">
                    <span>{swatch.hex}</span>
                    {copiedHex === swatch.hex ? (
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-atelier-muted text-center font-mono">
              Tap any swatch to copy Hex value
            </p>
          </div>

        </div>

        {/* 3. Category Filter & View Mode Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-atelier-stone/20 dark:border-atelier-charcoal">
          {/* Scrollable Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryFilter(cat.id)}
                  className={`px-3.5 py-1.5 text-xs rounded-full uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal font-medium shadow-sm'
                      : 'bg-atelier-stone/20 dark:bg-atelier-charcoal/50 text-atelier-charcoal/80 dark:text-atelier-sand/80 hover:bg-atelier-stone/35'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center space-x-2 self-end sm:self-auto">
            <span className="text-xs text-atelier-muted font-mono mr-2">
              {filteredBoards.length} of {collection.boards.length} Boards
            </span>
            <div className="flex items-center bg-atelier-stone/20 dark:bg-atelier-charcoal/50 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('stage')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  viewMode === 'stage'
                    ? 'bg-white dark:bg-atelier-charcoal text-atelier-charcoal dark:text-white shadow-sm'
                    : 'text-atelier-muted hover:text-atelier-charcoal'
                }`}
                title="Stage Viewer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-atelier-charcoal text-atelier-charcoal dark:text-white shadow-sm'
                    : 'text-atelier-muted hover:text-atelier-charcoal'
                }`}
                title="Editorial Grid View"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4. Display: Stage View or Grid View */}
        {viewMode === 'stage' ? (
          <div className="space-y-6">
            {/* Master Stage */}
            <div className="relative group rounded-2xl overflow-hidden aspect-board bg-black shadow-2xl border border-atelier-stone/30 dark:border-atelier-charcoal">
              <img
                src={currentBoard.image}
                alt={currentBoard.title}
                className="w-full h-full object-cover transition-transform duration-700 cursor-pointer"
                onClick={() => onOpenLightbox(currentBoard)}
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={() => setActiveBoardIdx((prev) => (prev - 1 + collection.boards.length) % collection.boards.length)}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all opacity-80 hover:opacity-100 z-10"
                aria-label="Previous board"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={() => setActiveBoardIdx((prev) => (prev + 1) % collection.boards.length)}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all opacity-80 hover:opacity-100 z-10"
                aria-label="Next board"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Top Details Pill */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white pointer-events-none">
                <div className="flex items-center space-x-2 pointer-events-auto">
                  <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-wider font-mono font-medium bg-black/75 backdrop-blur-md">
                    Board {activeBoardIdx + 1} of {collection.boards.length}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-wider font-medium bg-atelier-olive/90 backdrop-blur-md">
                    {currentBoard.category}
                  </span>
                </div>

                <button
                  onClick={() => onOpenLightbox(currentBoard)}
                  className="pointer-events-auto px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-colors flex items-center space-x-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Inspect Fullscreen</span>
                </button>
              </div>

              {/* Bottom Scrim & Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white flex flex-col space-y-1">
                <h3 className="font-serif text-xl sm:text-3xl text-white font-medium">
                  {currentBoard.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-sans font-light max-w-3xl line-clamp-2">
                  {currentBoard.description}
                </p>
              </div>
            </div>

            {/* Board Selector Thumbnail Strip */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-atelier-muted font-medium font-mono block">
                Select Board from Series {collection.number}:
              </span>
              <div className="flex items-center space-x-3 overflow-x-auto pb-3 no-scrollbar">
                {collection.boards.map((b, idx) => {
                  const isSelected = activeBoardIdx === idx;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setActiveBoardIdx(idx)}
                      className={`flex-shrink-0 w-36 sm:w-44 rounded-xl overflow-hidden border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-atelier-olive dark:border-atelier-sand ring-2 ring-atelier-olive/40 shadow-lg scale-102'
                          : 'border-atelier-stone/30 dark:border-atelier-charcoal opacity-75 hover:opacity-100 hover:border-atelier-stone'
                      }`}
                    >
                      <div className="aspect-board bg-black relative">
                        <img
                          src={b.image}
                          alt={b.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-black/80 text-white">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="p-2 bg-white/90 dark:bg-atelier-charcoal/90 text-atelier-charcoal dark:text-atelier-sand truncate text-xs font-serif">
                        {b.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Grid View of All Filtered Boards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBoards.map((b, idx) => (
              <div
                key={b.id}
                onClick={() => onOpenLightbox(b)}
                className="group rounded-2xl overflow-hidden bg-white/70 dark:bg-atelier-charcoal/40 border border-atelier-stone/30 dark:border-atelier-charcoal hover:border-atelier-olive shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
              >
                <div className="aspect-board bg-black relative overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-black/75 text-white">
                    {b.category}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-serif text-lg text-atelier-charcoal dark:text-atelier-sand">
                    {b.title}
                  </h4>
                  <p className="text-xs text-atelier-muted font-sans font-light line-clamp-2">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 5. Bottom Navigation Bar for Inter-Collection Hopping */}
        <div className="mt-16 pt-12 border-t border-atelier-stone/20 dark:border-atelier-charcoal space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Previous Collection Card */}
            <button
              onClick={() => onSelectCollection(prevCollection.id)}
              className="p-5 rounded-2xl bg-white/60 dark:bg-atelier-charcoal/30 border border-atelier-stone/30 dark:border-atelier-charcoal hover:border-atelier-olive text-left flex items-center space-x-4 transition-all group cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-atelier-sand/40 dark:bg-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand group-hover:-translate-x-1 transition-transform">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-atelier-muted font-mono block">
                  Previous Series
                </span>
                <span className="font-serif text-lg sm:text-xl text-atelier-charcoal dark:text-atelier-sand group-hover:text-atelier-olive transition-colors">
                  Series {prevCollection.number} · {prevCollection.title}
                </span>
              </div>
            </button>

            {/* Next Collection Card */}
            <button
              onClick={() => onSelectCollection(nextCollection.id)}
              className="p-5 rounded-2xl bg-white/60 dark:bg-atelier-charcoal/30 border border-atelier-stone/30 dark:border-atelier-charcoal hover:border-atelier-olive text-right flex items-center justify-end space-x-4 transition-all group cursor-pointer"
            >
              <div>
                <span className="text-[10px] uppercase tracking-wider text-atelier-muted font-mono block">
                  Next Series
                </span>
                <span className="font-serif text-lg sm:text-xl text-atelier-charcoal dark:text-atelier-sand group-hover:text-atelier-olive transition-colors">
                  Series {nextCollection.number} · {nextCollection.title}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-atelier-sand/40 dark:bg-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand group-hover:translate-x-1 transition-transform">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>

          </div>

          {/* Big Return to Main Portfolio Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={onBack}
              className="px-8 py-3.5 rounded-full bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal text-xs uppercase tracking-luxury font-medium hover:bg-atelier-olive dark:hover:bg-white transition-all shadow-md flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Portfolio Main Page</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
