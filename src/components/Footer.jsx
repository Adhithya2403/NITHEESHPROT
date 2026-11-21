import React from 'react';
import { ArrowUp } from 'lucide-react';
import { designerInfo, collections } from '../data/portfolioData';

export default function Footer({ onOpenCollection }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-atelier-stone/20 dark:border-atelier-charcoal bg-atelier-cream/30 dark:bg-atelier-obsidian text-atelier-charcoal dark:text-atelier-sand text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="font-serif text-xl tracking-wider uppercase font-medium block">
              {designerInfo.name}
            </span>
            <span className="text-[10px] uppercase text-atelier-muted font-mono">
              Fashion Technology · Portfolio 2027
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3 text-atelier-muted">
              {collections.map((col) => (
                <button
                  key={col.id}
                  onClick={() => onOpenCollection(col.id)}
                  className="hover:text-atelier-charcoal dark:hover:text-white transition-colors text-[11px]"
                >
                  {col.title}
                </button>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-atelier-stone/30 dark:border-atelier-charcoal hover:border-atelier-olive transition-colors"
              title="Return to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-atelier-stone/15 dark:border-atelier-charcoal/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-atelier-muted font-mono">
          <span>© 2027 Nitheesh S P</span>
          <span>Original Design Work</span>
        </div>

      </div>
    </footer>
  );
}
