import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Copy, Check, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { collections } from '../data/portfolioData';

export default function CollectionDetailModal({ collectionId, onClose, onOpenLightbox }) {
  const collectionIndex = collections.findIndex(c => c.id === collectionId);
  const collection = collections[collectionIndex] || collections[0];

  const [activeBoardIdx, setActiveBoardIdx] = useState(0);
  const [copiedHex, setCopiedHex] = useState(null);

  // Reset active board when collection changes
  useEffect(() => {
    setActiveBoardIdx(0);
  }, [collectionId]);

  // Keyboard navigation (arrows and Esc)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setActiveBoardIdx((prev) => (prev + 1) % collection.boards.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveBoardIdx((prev) => (prev - 1 + collection.boards.length) % collection.boards.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [collection.boards.length, onClose]);

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const currentBoard = collection.boards[activeBoardIdx];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-2 sm:p-6 animate-fadeIn">
      {/* Modal Wrapper */}
      <div className="relative w-full max-w-6xl bg-atelier-ivory dark:bg-atelier-charcoal rounded-2xl overflow-hidden shadow-2xl border border-atelier-stone/30 dark:border-atelier-charcoal my-auto">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-atelier-stone/20 dark:border-atelier-charcoal/80 bg-atelier-cream/80 dark:bg-atelier-obsidian/80">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-medium bg-atelier-olive text-white">
              Series {collection.number} · {collection.season}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-atelier-charcoal dark:text-atelier-sand font-normal">
              {collection.title}
            </h3>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs font-mono text-atelier-muted hidden sm:inline">
              Board {activeBoardIdx + 1} of {collection.boards.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-atelier-stone/30 dark:hover:bg-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand transition-colors"
              aria-label="Close monograph modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[82vh] overflow-y-auto">
          
          {/* Main 16:9 Showcase Stage */}
          <div className="relative group rounded-xl overflow-hidden aspect-board bg-black shadow-xl border border-atelier-stone/30 dark:border-atelier-charcoal">
            <img
              src={currentBoard.image}
              alt={currentBoard.title}
              className="w-full h-full object-cover transition-transform duration-500 cursor-pointer"
              onClick={() => onOpenLightbox(currentBoard)}
            />

            {/* Prev / Next Stage Buttons */}
            <button
              onClick={() => setActiveBoardIdx((prev) => (prev - 1 + collection.boards.length) % collection.boards.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all opacity-80 hover:opacity-100"
              aria-label="Previous board"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setActiveBoardIdx((prev) => (prev + 1) % collection.boards.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all opacity-80 hover:opacity-100"
              aria-label="Next board"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Expand Overlay */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => onOpenLightbox(currentBoard)}
                className="px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 text-white text-xs uppercase tracking-wider backdrop-blur-md flex items-center space-x-1.5 transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fullscreen 2048px</span>
              </button>
            </div>

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/70 backdrop-blur-md text-white flex justify-between items-center text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider opacity-70 block">{currentBoard.category}</span>
                <span className="font-serif text-base">{currentBoard.title}</span>
              </div>
              <span className="text-white/80 font-mono text-[11px]">16:9 Landscape · A4/A3 Editorial</span>
            </div>
          </div>

          {/* Thumbnail Scroller */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs text-atelier-muted">
              <span className="uppercase tracking-wider font-medium">Collection Boards Sequence:</span>
              <span>Click thumbnail to navigate</span>
            </div>
            <div className="flex space-x-3 overflow-x-auto pb-2 no-scrollbar">
              {collection.boards.map((b, idx) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBoardIdx(idx)}
                  className={`flex-shrink-0 w-28 sm:w-36 rounded-lg overflow-hidden border-2 transition-all aspect-board bg-black ${
                    activeBoardIdx === idx
                      ? 'border-atelier-olive shadow-lg scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={b.thumb || b.image} alt={b.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Collection Metadata & Detailed Design Dossier */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
            
            {/* Left Column: Concept & Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium">
                Design Inquiry & Narrative
              </span>
              <h4 className="font-serif text-2xl text-atelier-charcoal dark:text-atelier-ivory">
                {collection.title} — {collection.season}
              </h4>
              <p className="text-xs sm:text-sm text-atelier-charcoal/80 dark:text-atelier-sand/80 leading-relaxed font-sans font-light">
                {collection.narrative}
              </p>

              {/* Garment flat notes */}
              {collection.garments && (
                <div className="mt-4 pt-4 border-t border-atelier-stone/20 dark:border-atelier-charcoal/40">
                  <span className="text-[10px] uppercase tracking-wider text-atelier-muted font-medium block mb-2">
                    Garment Engineering Architecture:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {collection.garments.map((g, i) => (
                      <div key={i} className="p-3 rounded-lg bg-atelier-sand/30 dark:bg-atelier-obsidian/40 border border-atelier-stone/20 dark:border-atelier-charcoal text-xs">
                        <strong className="block text-atelier-charcoal dark:text-atelier-sand mb-1 font-serif text-sm">
                          {g.name}
                        </strong>
                        <div className="text-[11px] text-atelier-muted">
                          <strong>Front:</strong> {g.views.front}
                        </div>
                        <div className="text-[11px] text-atelier-muted mt-1">
                          <strong>Back:</strong> {g.views.back}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Pantone TCX Swatches & Techniques */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium block mb-2">
                  Pantone TCX Color Architecture
                </span>
                <div className="space-y-2">
                  {collection.pantones.map((p, idx) => (
                    <div
                      key={idx}
                      onClick={() => copyToClipboard(p.hex)}
                      className="group flex items-center justify-between p-2.5 rounded-lg border border-atelier-stone/20 dark:border-atelier-charcoal hover:border-atelier-olive bg-white/50 dark:bg-atelier-obsidian/50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span
                          className="w-7 h-7 rounded border border-black/10 shadow-inner flex-shrink-0"
                          style={{ backgroundColor: p.hex }}
                        />
                        <div>
                          <div className="font-mono text-xs font-medium text-atelier-charcoal dark:text-atelier-sand">
                            PANTONE {p.code}
                          </div>
                          <div className="text-[10px] text-atelier-muted">{p.name}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1.5 font-mono text-[11px] text-atelier-muted">
                        <span>{p.hex}</span>
                        {copiedHex === p.hex ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Craft & Techniques */}
              <div>
                <span className="text-[10px] uppercase tracking-widest text-atelier-muted font-medium block mb-2">
                  Textile Crafts & Production Methods
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {collection.techniques.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded text-[11px] bg-atelier-stone/20 dark:bg-atelier-charcoal/60 text-atelier-charcoal dark:text-atelier-sand"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
