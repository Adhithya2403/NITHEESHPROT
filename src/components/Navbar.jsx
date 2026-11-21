import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowLeft } from 'lucide-react';
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
          ? 'bg-atelier-ivory/95 dark:bg-atelier-obsidian/95 backdrop-blur-md border-b border-atelier-stone/30 dark:border-atelier-charcoal py-2.5 shadow-sm'
          : 'bg-atelier-ivory/80 dark:bg-atelier-obsidian/80 backdrop-blur-sm sm:bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center space-x-3">
          {currentView?.page === 'collection' && (
            <button
              onClick={onGoHome}
              className="p-1.5 rounded-lg border border-atelier-stone/30 text-atelier-charcoal dark:text-atelier-sand hover:border-atelier-olive transition-colors sm:hidden"
              aria-label="Back"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onGoHome}
            className="font-serif text-lg sm:text-xl tracking-wider uppercase font-medium text-atelier-charcoal dark:text-atelier-sand hover:text-atelier-olive transition-colors"
          >
            {designerInfo.name}
          </button>
        </div>

        {/* Desktop Links */}
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
              className="text-xs uppercase tracking-wider text-atelier-charcoal/80 dark:text-atelier-sand/80 hover:text-atelier-olive transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-atelier-stone/40 dark:border-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand hover:border-atelier-olive transition-all bg-atelier-cream/60 dark:bg-atelier-charcoal/50"
          >
            {isDark ? <Sun className="w-4 h-4 text-atelier-ochre" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-atelier-stone/30 text-atelier-charcoal dark:text-atelier-sand"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-atelier-ivory/98 dark:bg-atelier-obsidian/98 backdrop-blur-xl border-b border-atelier-stone/30 px-5 py-5 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-base font-serif text-atelier-charcoal dark:text-atelier-sand hover:text-atelier-olive py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
