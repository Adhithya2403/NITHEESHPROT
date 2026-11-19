import React from 'react';
import { ArrowUp } from 'lucide-react';
import { designerInfo, collections } from '../data/portfolioData';

export default function Footer({ onOpenCollection }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-atelier-stone/30 dark:border-atelier-charcoal bg-atelier-cream/40 dark:bg-atelier-obsidian text-atelier-charcoal dark:text-atelier-sand">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Top Footer Banner */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-atelier-stone/20 dark:border-atelier-charcoal">
          <div className="space-y-1 max-w-lg">
            <span className="font-serif text-2xl sm:text-3xl uppercase tracking-widest block font-light">
              {designerInfo.name}
            </span>
            <p className="text-xs uppercase tracking-luxury text-atelier-muted font-sans font-light">
              Fashion Technology · Portfolio 2027
            </p>
            <p className="text-xs text-atelier-muted pt-1 font-sans font-light leading-relaxed">
              Synthesizing biological camouflage, warning coloration, and feline velocity with production-ready garment flat engineering.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-2">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-atelier-stone/40 dark:border-atelier-charcoal hover:border-atelier-olive dark:hover:border-atelier-sand text-atelier-charcoal dark:text-atelier-sand transition-all hover:-translate-y-0.5"
              aria-label="Back to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
            <span className="text-[10px] uppercase tracking-luxury text-atelier-muted font-mono">
              Back to Top
            </span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-sans">
          <div className="space-y-2.5">
            <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium block">
              Curated Collections
            </span>
            <ul className="space-y-1.5">
              {collections.map(col => (
                <li key={col.id}>
                  <button
                    onClick={() => onOpenCollection(col.id)}
                    className="text-atelier-muted hover:text-atelier-charcoal dark:hover:text-white transition-colors"
                  >
                    {col.number}. {col.title} ({col.season})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium block">
              Navigation
            </span>
            <ul className="space-y-1.5 text-atelier-muted">
              <li><a href="#collections" className="hover:text-atelier-charcoal dark:hover:text-white transition-colors">Collections Archive</a></li>
              <li><a href="#about" className="hover:text-atelier-charcoal dark:hover:text-white transition-colors">About the Designer</a></li>
              <li><a href="#skills" className="hover:text-atelier-charcoal dark:hover:text-white transition-colors">Technical Skills</a></li>
              <li><a href="#contact" className="hover:text-atelier-charcoal dark:hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium block">
              Technical Formats
            </span>
            <ul className="space-y-1.5 text-atelier-muted font-mono text-[11px]">
              <li>16:9 Landscape Boards</li>
              <li>Front & Back Garment Flats</li>
              <li>Pantone TCX Standardization</li>
              <li>Textile Repeat Patterns</li>
              <li>Direct Embroidery & Applique</li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium block">
              Direct Contact
            </span>
            <ul className="space-y-1.5 text-atelier-muted font-mono text-[11px]">
              <li><a href={`mailto:${designerInfo.contact.email}`} className="hover:text-atelier-charcoal dark:hover:text-white">{designerInfo.contact.email}</a></li>
              <li>B.Tech Fashion Technology</li>
              <li className="text-atelier-olive dark:text-atelier-sand">Class of 2027</li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-6 border-t border-atelier-stone/20 dark:border-atelier-charcoal flex flex-col sm:flex-row items-center justify-between text-[11px] text-atelier-muted font-mono gap-3">
          <div>
            © 2024–2027 Nitheesh S P. All original fashion artwork & technical illustrations.
          </div>
          <div className="flex items-center space-x-2">
            <span>React & Vite Portfolio</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
