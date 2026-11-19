import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { designerInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-atelier-ivory/95 dark:bg-atelier-obsidian/95 backdrop-blur-md border-b border-atelier-stone/30 dark:border-atelier-charcoal py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="group flex flex-col">
          <span className="font-serif text-xl sm:text-2xl tracking-widest uppercase font-medium text-atelier-charcoal dark:text-atelier-sand group-hover:text-atelier-olive transition-colors">
            {designerInfo.name}
          </span>
          <span className="text-[10px] uppercase tracking-haute text-atelier-muted font-sans font-light">
            Fashion Technology · Portfolio 2027
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-luxury text-atelier-charcoal/80 dark:text-atelier-sand/70 hover:text-atelier-olive dark:hover:text-white transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-2 rounded-full border border-atelier-stone/40 dark:border-atelier-charcoal hover:border-atelier-olive dark:hover:border-atelier-sand/50 text-atelier-charcoal dark:text-atelier-sand transition-all bg-atelier-cream/60 dark:bg-atelier-charcoal/50"
            title={isDark ? "Switch to Atelier Light" : "Switch to Nocturne Dark"}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-atelier-ochre" />
            ) : (
              <Moon className="w-4 h-4 text-atelier-charcoal" />
            )}
          </button>

          {/* Quick Collection Jump CTA */}
          <a
            href="#collections"
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider bg-atelier-charcoal text-atelier-ivory dark:bg-atelier-sand dark:text-atelier-charcoal font-medium hover:bg-atelier-olive dark:hover:bg-white transition-all shadow-sm"
          >
            <span>View Series</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-atelier-charcoal dark:text-atelier-sand focus:outline-none"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-atelier-ivory dark:bg-atelier-obsidian border-b border-atelier-stone/30 dark:border-atelier-charcoal px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-atelier-charcoal dark:text-atelier-sand hover:text-atelier-olive dark:hover:text-white transition-colors"
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
