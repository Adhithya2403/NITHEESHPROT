import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Info, Download } from 'lucide-react';

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showInfo, setShowInfo] = useState(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
      if (e.key === '0') handleResetZoom();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Reset zoom on item change
  useEffect(() => {
    setZoomLevel(1);
  }, [item?.image]);

  if (!item) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 3.0));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 0.7));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between animate-fadeIn select-none">
      
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-black/50 border-b border-white/10 z-20 text-white">
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 pr-2">
          <span className="px-2 sm:px-2.5 py-0.5 rounded text-[9px] sm:text-[10px] uppercase tracking-wider font-medium bg-atelier-olive text-white flex-shrink-0 font-mono">
            {item.category || "Board"}
          </span>
          <h4 className="font-serif text-sm sm:text-lg text-white truncate max-w-[160px] sm:max-w-md">
            {item.title}
          </h4>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          {/* Zoom Controls */}
          <div className="flex items-center space-x-1 bg-white/10 rounded-full px-2 py-1 text-xs">
            <button
              onClick={handleZoomOut}
              className="p-1 hover:text-atelier-sand transition-colors"
              title="Zoom Out (-)"
            >
              <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <span className="font-mono text-[10px] sm:text-[11px] px-1 opacity-80 hidden xs:inline">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1 hover:text-atelier-sand transition-colors"
              title="Zoom In (+)"
            >
              <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            {zoomLevel !== 1 && (
              <button
                onClick={handleResetZoom}
                className="p-1 hover:text-atelier-sand transition-colors border-l border-white/20 ml-1 pl-1"
                title="Reset Zoom (0)"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Toggle Metadata Drawer */}
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`p-2 rounded-full transition-colors ${showInfo ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white'}`}
            title="Toggle Information"
            aria-label="Toggle details"
          >
            <Info className="w-4 h-4" />
          </button>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 text-white transition-colors active:scale-95"
            title="Close Lightbox (Esc)"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-grow flex items-center justify-center p-2 sm:p-8 overflow-hidden">
        {/* Previous Arrow */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 z-20 transition-all active:scale-95"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* The 16:9 Landscape Artwork Container */}
        <div
          className="max-w-5xl max-h-[75vh] sm:max-h-[82vh] transition-transform duration-300 ease-out flex items-center justify-center px-2"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-[75vh] sm:max-h-[82vh] object-contain shadow-2xl rounded-lg cursor-grab active:cursor-grabbing"
            draggable={false}
          />
        </div>

        {/* Next Arrow */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 z-20 transition-all active:scale-95"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Bottom Curatorial Metadata Drawer */}
      {showInfo && (
        <div className="bg-black/85 backdrop-blur-xl border-t border-white/10 px-4 sm:px-6 py-3 sm:py-4 z-20 text-white transition-all">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-widest text-atelier-sand font-mono">
                <span>{item.collectionTitle ? `Series ${item.collectionNumber} · ${item.collectionTitle}` : item.category}</span>
                {item.season && <span>· {item.season}</span>}
              </div>
              <p className="text-white/80 font-sans font-light leading-relaxed text-xs sm:text-sm line-clamp-2">
                {item.description || "Official high-resolution master fashion board from Nitheesh S P's portfolio."}
              </p>
            </div>

            <div className="flex items-center space-x-4 text-white/60 font-mono text-[10px] sm:text-[11px] self-end sm:self-auto">
              <span>2048px Master</span>
              <a
                href={item.image}
                download
                className="hover:text-white flex items-center space-x-1"
                title="Download Board Image"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
