import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { designerInfo, collections } from '../data/portfolioData';

export default function Navbar({ currentView, onGoHome, onSelectCollection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('atelier_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('atelier_theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (currentView?.page === 'collection') {
      onGoHome();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-atelier-ivory/95 dark:bg-atelier-obsidian/95 backdrop-blur-md border-b border-atelier-stone/30 dark:border-atelier-charcoal py-2.5 sm:py-3 shadow-sm'
          : 'bg-atelier-ivory/80 dark:bg-atelier-obsidian/80 backdrop-blur-sm sm:bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center space-x-3">
          {currentView?.page === 'collection' && (
            <button
              onClick={onGoHome}
              className="p-1.5 rounded-lg border border-atelier-stone/30 dark:border-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand hover:border-atelier-olive transition-colors sm:hidden"
              aria-label="Back to home"
              title="Return to Portfolio Home"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onGoHome}
            className="group flex flex-col text-left focus:outline-none"
          >
            <span className="font-serif text-lg sm:text-2xl tracking-widest uppercase font-medium text-atelier-charcoal dark:text-atelier-sand group-hover:text-atelier-olive transition-colors">
              {designerInfo.name}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-haute text-atelier-muted font-sans font-light">
              Fashion Technology · Portfolio 2027
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (currentView?.page === 'collection') {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }
              }}
              className="text-xs uppercase tracking-luxury text-atelier-charcoal/80 dark:text-atelier-sand/70 hover:text-atelier-olive dark:hover:text-white transition-colors py-1 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-2 rounded-full border border-atelier-stone/40 dark:border-atelier-charcoal hover:border-atelier-olive dark:hover:border-atelier-sand/50 text-atelier-charcoal dark:text-atelier-sand transition-all bg-atelier-cream/60 dark:bg-atelier-charcoal/50 active:scale-95"
            title={isDark ? "Switch to Atelier Light" : "Switch to Nocturne Dark"}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-atelier-ochre" />
            ) : (
              <Moon className="w-4 h-4 text-atelier-charcoal" />
            )}
          </button>

          {/* Quick Collection Jump CTA */}
          {currentView?.page === 'home' ? (
            <a
              href="#collections"
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider bg-atelier-charcoal text-atelier-ivory dark:bg-atelier-sand dark:text-atelier-charcoal font-medium hover:bg-atelier-olive dark:hover:bg-white transition-all shadow-sm"
            >
              <span>Explore Series</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              onClick={onGoHome}
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider bg-atelier-charcoal text-atelier-ivory dark:bg-atelier-sand dark:text-atelier-charcoal font-medium hover:bg-atelier-olive dark:hover:bg-white transition-all shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Collections</span>
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-atelier-stone/30 dark:border-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand focus:outline-none active:scale-95"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-atelier-ivory/98 dark:bg-atelier-obsidian/98 backdrop-blur-xl border-b border-atelier-stone/30 dark:border-atelier-charcoal px-5 py-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            
            {currentView?.page === 'collection' && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGoHome();
                }}
                className="flex items-center space-x-2 text-sm uppercase tracking-wider font-medium text-atelier-olive dark:text-atelier-sand pb-3 border-b border-atelier-stone/20 dark:border-atelier-charcoal"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Portfolio Home</span>
              </button>
            )}

            <div className="text-[10px] uppercase tracking-widest text-atelier-muted font-mono">
              Navigation
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleLinkClick(link.href);
                }}
                className="text-lg font-serif text-atelier-charcoal dark:text-atelier-sand hover:text-atelier-olive dark:hover:text-white transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-atelier-muted font-mono">↗</span>
              </a>
            ))}

            {/* Collections Quick Switcher inside Mobile Drawer */}
            <div className="pt-3 border-t border-atelier-stone/20 dark:border-atelier-charcoal">
              <span className="text-[10px] uppercase tracking-widest text-atelier-muted font-mono block mb-2">
                Curated Collections
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {collections.map(col => (
                  <button
                    key={col.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onSelectCollection(col.id);
                    }}
                    className="text-left py-2 px-3 rounded-lg text-xs font-serif text-atelier-charcoal dark:text-atelier-sand hover:bg-atelier-stone/20 dark:hover:bg-atelier-charcoal flex items-center justify-between"
                  >
                    <span>Series {col.number} · {col.title}</span>
                    <span className="text-[10px] text-atelier-muted font-mono">{col.season}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
