import React, { useState } from 'react';
import { Eye, ArrowUpRight, Sparkles, Filter, Maximize2, ChevronLeft, ChevronRight, X, Copy, Check } from 'lucide-react';
import { collections } from '../data/portfolioData';

export default function CollectionsGallery({ onOpenLightbox, onOpenCollectionModal }) {
  const [selectedCollectionId, setSelectedCollectionId] = useState('chroma-nature');
  const [activeBoardIndex, setActiveBoardIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedHex, setCopiedHex] = useState(null);
  const [popInKey, setPopInKey] = useState('initial-pop');

  const categories = [
    { id: 'all', label: 'All Boards' },
    { id: 'Cover', label: 'Cover' },
    { id: 'Storyboard', label: 'Storyboards' },
    { id: 'Moodboard', label: 'Moodboards' },
    { id: 'Colour & Print', label: 'Colour & Print' },
    { id: 'Design Board', label: 'Design Flats' },
    { id: 'Final Look', label: 'Final Looks' }
  ];

  const activeCol = collections.find(c => c.id === selectedCollectionId) || collections[0];

  // When collection changes
  const handleCollectionChange = (id) => {
    setSelectedCollectionId(id);
    setActiveCategory('all');
    setActiveBoardIndex(0);
    setPopInKey(`col-${id}-${Date.now()}`);
  };

  // When a category tag is clicked
  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      setActiveBoardIndex(0);
    } else {
      // Find the first board matching this category
      const targetIdx = activeCol.boards.findIndex(b =>
        b.category.toLowerCase().includes(catId.toLowerCase())
      );
      if (targetIdx !== -1) {
        setActiveBoardIndex(targetIdx);
      }
    }
    setPopInKey(`cat-${catId}-${Date.now()}`);
  };

  // When a specific board tag is clicked
  const handleBoardTagClick = (idx) => {
    setActiveBoardIndex(idx);
    setPopInKey(`board-${idx}-${Date.now()}`);
  };

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const currentBoard = activeCol.boards[activeBoardIndex] || activeCol.boards[0];

  return (
    <section id="collections" className="py-16 sm:py-20 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Title & Direct Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-haute text-atelier-olive dark:text-atelier-sand font-medium mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Fashion Collections</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-atelier-charcoal dark:text-atelier-ivory font-light tracking-tight">
              Selected <span className="italic font-normal text-atelier-olive dark:text-atelier-sand">Collections</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <span className="text-xs text-atelier-muted font-mono">
              Series {activeCol.number} · {activeCol.season} · {activeCol.category}
            </span>
            <button
              onClick={() => onOpenCollectionModal(activeCol.id)}
              className="px-4 py-2 rounded-full bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal text-xs uppercase tracking-wider font-medium hover:bg-atelier-olive dark:hover:bg-white transition-all shadow-sm flex items-center space-x-1.5"
            >
              <span>View Full Monograph</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 1. Collection Selector Tags */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {collections.map((col) => {
            const isSelected = selectedCollectionId === col.id;
            return (
              <button
                key={col.id}
                onClick={() => handleCollectionChange(col.id)}
                className={`p-3.5 sm:p-4 rounded-xl text-left border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isSelected
                    ? 'bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal border-transparent shadow-lg scale-102 ring-1 ring-atelier-olive/40'
                    : 'bg-white/60 dark:bg-atelier-charcoal/30 border-atelier-stone/30 dark:border-atelier-charcoal/60 text-atelier-charcoal dark:text-atelier-sand hover:border-atelier-olive hover:shadow-md'
                }`}
              >
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest opacity-70">
                  <span>Series {col.number}</span>
                  <span>{col.season}</span>
                </div>
                <div className="font-serif text-base sm:text-lg font-medium truncate mt-1">
                  {col.title}
                </div>
                
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-atelier-olive dark:bg-atelier-charcoal" />
                )}
              </button>
            );
          })}
        </div>

        {/* 2. Category Filter Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b border-atelier-stone/20 dark:border-atelier-charcoal/40">
          <span className="text-[11px] uppercase tracking-wider text-atelier-muted mr-1 font-medium flex items-center space-x-1">
            <Filter className="w-3 h-3" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => {
            const isCatActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-3.5 py-1 text-xs rounded-full uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isCatActive
                    ? 'bg-atelier-olive text-white dark:bg-atelier-sand dark:text-atelier-charcoal font-medium shadow-sm scale-105'
                    : 'bg-atelier-stone/20 dark:bg-atelier-charcoal/50 text-atelier-charcoal/80 dark:text-atelier-sand/80 hover:bg-atelier-stone/35'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
          <span className="ml-auto text-xs text-atelier-muted font-mono">
            {activeCol.boards.length} Boards in {activeCol.title}
          </span>
        </div>

        {/* 3. Board Selection Tags Strip */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
            <span className="text-[10px] uppercase tracking-wider text-atelier-muted whitespace-nowrap font-medium pr-1">
              Select Board:
            </span>
            {activeCol.boards.map((b, idx) => {
              const isSelectedBoard = activeBoardIndex === idx;
              return (
                <button
                  key={b.id}
                  onClick={() => handleBoardTagClick(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all duration-200 cursor-pointer border flex items-center space-x-1.5 ${
                    isSelectedBoard
                      ? 'bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal border-transparent font-medium shadow-md scale-102'
                      : 'bg-white/70 dark:bg-atelier-charcoal/40 border-atelier-stone/30 dark:border-atelier-charcoal/70 text-atelier-charcoal dark:text-atelier-sand hover:border-atelier-olive hover:bg-atelier-cream/50'
                  }`}
                >
                  <span className="text-[10px] opacity-60 font-mono">0{idx + 1}</span>
                  <span className="font-serif text-sm">{b.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. The Popped-In Image Showcase Stage */}
        <div
          key={popInKey}
          className="animate-popIn bg-white/80 dark:bg-atelier-charcoal/50 rounded-2xl p-6 sm:p-8 border border-atelier-stone/30 dark:border-atelier-charcoal/80 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Large 16:9 Master Image with Pop-In Transition */}
            <div className="lg:col-span-8 flex flex-col space-y-3">
              <div
                className="relative group rounded-xl overflow-hidden aspect-board bg-black shadow-xl border border-atelier-stone/40 dark:border-atelier-charcoal cursor-pointer"
                onClick={() => onOpenLightbox(currentBoard)}
              >
                <img
                  src={currentBoard.image}
                  alt={currentBoard.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white flex items-center justify-between w-full">
                    <span className="text-xs uppercase tracking-wider font-medium flex items-center space-x-1.5">
                      <Maximize2 className="w-4 h-4" />
                      <span>Click to Inspect 2048px Master</span>
                    </span>
                    <span className="font-mono text-xs opacity-80">16:9 Landscape</span>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded text-[10px] uppercase tracking-wider font-medium bg-black/75 backdrop-blur-md text-white">
                    {activeCol.season} · Board 0{activeBoardIndex + 1}
                  </span>
                  <span className="px-2.5 py-1 rounded text-[10px] uppercase tracking-wider font-medium bg-atelier-olive/90 backdrop-blur-md text-white">
                    {currentBoard.category}
                  </span>
                </div>

                {/* Prev / Next Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const prevIdx = (activeBoardIndex - 1 + activeCol.boards.length) % activeCol.boards.length;
                    handleBoardTagClick(prevIdx);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all opacity-70 hover:opacity-100 z-10"
                  aria-label="Previous board"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const nextIdx = (activeBoardIndex + 1) % activeCol.boards.length;
                    handleBoardTagClick(nextIdx);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all opacity-70 hover:opacity-100 z-10"
                  aria-label="Next board"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Image Meta Bar */}
              <div className="flex items-center justify-between text-xs text-atelier-muted pt-1">
                <span className="font-mono">
                  Board {activeBoardIndex + 1} of {activeCol.boards.length} in {activeCol.title}
                </span>
                <button
                  onClick={() => onOpenLightbox(currentBoard)}
                  className="text-atelier-olive dark:text-atelier-sand hover:underline flex items-center space-x-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Expand Master Lightbox</span>
                </button>
              </div>
            </div>

            {/* Right: Board Curatorial Notes & Pantone Architecture */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[11px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-mono">
                  <span>Series {activeCol.number}</span>
                  <span>·</span>
                  <span>{currentBoard.category}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-atelier-charcoal dark:text-atelier-sand leading-snug">
                  {currentBoard.title}
                </h3>

                <p className="text-xs sm:text-sm text-atelier-charcoal/80 dark:text-atelier-sand/80 leading-relaxed font-sans font-light">
                  {currentBoard.description}
                </p>
              </div>

              {/* Pantone Palette Architecture */}
              <div className="space-y-2 pt-2 border-t border-atelier-stone/20 dark:border-atelier-charcoal">
                <span className="text-[10px] uppercase tracking-widest text-atelier-muted font-medium block">
                  Series {activeCol.number} Pantone Architecture
                </span>
                
                <div className="space-y-1.5">
                  {activeCol.pantones.map((swatch, idx) => (
                    <div
                      key={idx}
                      onClick={() => copyToClipboard(swatch.hex)}
                      className="group flex items-center justify-between p-2 rounded-lg border border-atelier-stone/20 dark:border-atelier-charcoal hover:border-atelier-olive bg-white/60 dark:bg-atelier-obsidian/60 cursor-pointer transition-colors"
                      title="Click to copy Hex"
                    >
                      <div className="flex items-center space-x-2.5">
                        <span
                          className="w-5 h-5 rounded border border-black/15 shadow-inner flex-shrink-0"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <div>
                          <div className="font-mono text-xs font-medium text-atelier-charcoal dark:text-atelier-sand">
                            PANTONE {swatch.code}
                          </div>
                          <div className="text-[10px] text-atelier-muted truncate max-w-[140px]">
                            {swatch.name}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1 font-mono text-[11px] text-atelier-muted">
                        <span>{swatch.hex}</span>
                        {copiedHex === swatch.hex ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open Monograph Action */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenCollectionModal(activeCol.id)}
                  className="w-full py-2.5 rounded-xl bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal text-xs uppercase tracking-wider font-medium hover:bg-atelier-olive dark:hover:bg-white transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Open Full {activeCol.title} Monograph</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
