import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight, Sparkles, Eye, Play, Pause } from 'lucide-react';
import { designerInfo } from '../data/portfolioData';

export default function Hero({ onOpenCollection, onOpenLightbox }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Showcase slides from the 5 collections
  const heroShowcases = [
    {
      collectionId: "chroma-nature",
      title: "Chroma Nature · SS27",
      boardName: "Poison Dart Frog Streetwear",
      image: "/images/boards/frog_page_10.jpg",
      quote: "Translating dangerous biological warning coloration into electric youth streetwear.",
      palette: ["#005060", "#F5DF6B", "#2B2E2E"]
    },
    {
      collectionId: "camo-leaf",
      title: "Camo Leaf · AW27",
      boardName: "Final Look & Camouflage Study",
      image: "/images/boards/camo_page_07.jpg",
      quote: "Blending organic foliage textures and earthy tones to express nature's quiet resilience.",
      palette: ["#5B6547", "#C19E75", "#463428", "#292B30"]
    },
    {
      collectionId: "wild-instinct",
      title: "Wild Instinct · AW27",
      boardName: "Predatory Velocity & Applique",
      image: "/images/boards/cheetah_page_07.jpg",
      quote: "Cheetah mechanics: exploring feline velocity and rosettes through tactile power dressing.",
      palette: ["#28282B", "#A16B38", "#EADCB6", "#973D3F"]
    },
    {
      collectionId: "strie",
      title: "Strie · AW27",
      boardName: "Monochrome Kinetic Rhythm",
      image: "/images/boards/zebra_page_07.jpg",
      quote: "Optical zebra striations explored as architectural rhythm with a crimson punctuation.",
      palette: ["#C82736", "#8D9494", "#262629", "#D4D5D0"]
    },
    {
      collectionId: "linear-elegance",
      title: "Linear Elegance · SS27",
      boardName: "Subverted Sartorial Pinstripes",
      image: "/images/boards/pinstripes_page_07.jpg",
      quote: "Fashion's most disciplined sartorial motif subverted by delicate floral embroidery.",
      palette: ["#F0ECE1", "#DFA9B8", "#BF2134"]
    }
  ];

  const SLIDE_DURATION = 3800; // 3.8 seconds per slide

  // Automatic slide cycle with smooth progress bar
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50; // update progress every 50ms
    const step = (intervalTime / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSlide((curr) => (curr + 1) % heroShowcases.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, heroShowcases.length]);

  const handleSelectSlide = (idx) => {
    setActiveSlide(idx);
    setProgress(0);
  };

  const currentShowcase = heroShowcases[activeSlide];

  return (
    <section className="relative min-h-[92vh] pt-28 pb-12 flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Editorial Top Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-atelier-stone/30 dark:border-atelier-charcoal text-xs uppercase tracking-luxury text-atelier-muted">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-atelier-olive animate-pulse"></span>
            <span>Fashion Portfolio 2027</span>
            <span className="text-atelier-stone dark:text-atelier-charcoal">/</span>
            <span>Fashion Technology</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>SS 27 & AW 27</span>
            <span>·</span>
            <span>5 Curated Collections</span>
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 lg:pt-12">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-atelier-sand/50 dark:bg-atelier-charcoal/60 border border-atelier-stone/40 dark:border-atelier-charcoal/60 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-atelier-ochre" />
              <span className="text-[11px] font-sans uppercase tracking-widest text-atelier-charcoal dark:text-atelier-sand font-medium">
                Fashion Designer & Apparel Technologist
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl leading-[1.05] tracking-tight font-light text-atelier-charcoal dark:text-atelier-ivory">
              Designing Stories Through <span className="italic font-normal text-atelier-olive dark:text-atelier-sand">Fabric</span>, Form & Identity.
            </h1>

            <p className="text-base sm:text-lg font-sans font-light text-atelier-charcoal/80 dark:text-atelier-sand/80 leading-relaxed max-w-xl">
              I am <strong className="font-medium text-atelier-charcoal dark:text-white">{designerInfo.name}</strong>, a Fashion Technology student and designer. I transform natural adaptations, biological textures, and organic camouflage into contemporary streetwear and structured tailoring.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-2 pb-4 border-y border-atelier-stone/20 dark:border-atelier-charcoal/50">
              {designerInfo.stats.slice(0, 3).map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl text-atelier-charcoal dark:text-atelier-ivory font-normal">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-atelier-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Clean CTA Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#collections"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-atelier-charcoal text-atelier-ivory dark:bg-atelier-sand dark:text-atelier-charcoal font-sans text-xs uppercase tracking-luxury font-medium hover:bg-atelier-olive dark:hover:bg-white transition-all shadow-md group"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-atelier-stone dark:border-atelier-charcoal text-atelier-charcoal dark:text-atelier-sand font-sans text-xs uppercase tracking-luxury hover:border-atelier-olive dark:hover:border-atelier-sand transition-all"
              >
                <span>About the Designer</span>
              </a>
            </div>

            {/* Dynamic Micro quote that transitions with slide */}
            <div className="pt-1 text-xs italic text-atelier-muted font-serif flex items-center space-x-2 min-h-[1.5rem] transition-opacity duration-500">
              <span className="w-1.5 h-1.5 rounded-full bg-atelier-olive flex-shrink-0"></span>
              <span className="truncate">"{currentShowcase.quote}"</span>
            </div>
          </div>

          {/* Right Column: Dynamic Auto-Transitioning 16:9 Showcase Frame */}
          <div 
            className="lg:col-span-6 flex flex-col space-y-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Stage with Crossfade Transition */}
            <div className="relative group rounded-xl overflow-hidden shadow-2xl bg-atelier-charcoal border border-atelier-stone/30 dark:border-atelier-charcoal/80 aspect-board">
              
              {/* Stacked Images for Ultra-Smooth Crossfade */}
              {heroShowcases.map((slide, idx) => {
                const isActive = activeSlide === idx;
                return (
                  <div
                    key={slide.collectionId}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-out ${
                        isActive ? 'scale-104' : 'scale-100'
                      }`}
                      onClick={() => onOpenLightbox({
                        image: slide.image,
                        title: `${slide.title} — ${slide.boardName}`,
                        category: "Look Board",
                        description: slide.quote
                      })}
                    />
                  </div>
                );
              })}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none z-20" />

              {/* Top Banner Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-30">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full text-[11px] uppercase tracking-luxury font-medium bg-black/60 backdrop-blur-md text-white border border-white/10 transition-all">
                    {currentShowcase.title}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider bg-white/15 text-white/80 font-mono">
                    {isPaused ? "Paused" : "Auto-Cycling"}
                  </span>
                </div>

                <button
                  onClick={() => onOpenLightbox({
                    image: currentShowcase.image,
                    title: `${currentShowcase.title} — ${currentShowcase.boardName}`,
                    category: "Look Board",
                    description: currentShowcase.quote
                  })}
                  className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wider bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-colors flex items-center space-x-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </button>
              </div>

              {/* Bottom Details Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex flex-col space-y-2 z-30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/70">
                      Curated Runway Board
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl text-white transition-all duration-500">
                      {currentShowcase.boardName}
                    </h3>
                  </div>

                  {/* Dynamic Pantone dots */}
                  <div className="flex items-center space-x-1.5 bg-black/50 backdrop-blur-md p-1.5 rounded-full border border-white/15">
                    {currentShowcase.palette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-white/30 transition-transform duration-300"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-white/15 text-[11px] text-white/80">
                  <span>Hover to pause · Click image to expand</span>
                  <button
                    onClick={() => onOpenCollection(currentShowcase.collectionId)}
                    className="hover:text-atelier-sand underline uppercase tracking-wider transition-colors"
                  >
                    Open Collection →
                  </button>
                </div>
              </div>

              {/* Thin Animated Slide Progress Bar at the top of the image */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
                <div
                  className="h-full bg-atelier-sand transition-all ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

            </div>

            {/* Slider Switcher Tabs with Animated Highlight */}
            <div className="flex items-center justify-between bg-atelier-cream/60 dark:bg-atelier-charcoal/40 p-2 rounded-lg border border-atelier-stone/20 dark:border-atelier-charcoal/60">
              <div className="flex items-center space-x-2 px-2">
                <span className="text-[11px] uppercase tracking-wider text-atelier-muted font-sans font-medium">
                  Showcase:
                </span>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="text-atelier-muted hover:text-atelier-charcoal dark:hover:text-white transition-colors"
                  title={isPaused ? "Play slide cycle" : "Pause slide cycle"}
                >
                  {isPaused ? <Play className="w-3 h-3 text-atelier-olive" /> : <Pause className="w-3 h-3" />}
                </button>
              </div>

              <div className="flex space-x-1.5">
                {heroShowcases.map((slide, idx) => {
                  const isActive = activeSlide === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectSlide(idx)}
                      className={`relative px-3 py-1 text-[11px] uppercase tracking-luxury rounded transition-all duration-300 overflow-hidden ${
                        isActive
                          ? 'bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal font-medium shadow-md scale-105'
                          : 'text-atelier-muted hover:text-atelier-charcoal dark:hover:text-atelier-sand hover:bg-atelier-stone/15'
                      }`}
                    >
                      <span>0{idx + 1}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full pt-6 flex items-center justify-between text-xs uppercase tracking-luxury text-atelier-muted">
        <a href="#about" className="hover:text-atelier-olive dark:hover:text-white transition-colors">
          <span>About Nitheesh S P</span>
        </a>
        <a
          href="#collections"
          className="flex items-center space-x-2 hover:text-atelier-charcoal dark:hover:text-white transition-colors animate-bounce"
        >
          <span>Explore Collections</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
        <span className="font-mono text-[11px]">36 Editorial Boards</span>
      </div>
    </section>
  );
}
