import React from 'react';
import { ArrowDown } from 'lucide-react';
import { designerInfo } from '../data/portfolioData';

export default function Hero({ onOpenLightbox }) {
  const coverArtwork = {
    image: '/images/boards/frog_page_01.jpg',
    title: 'Fashion Design Portfolio — 2027',
  };

  return (
    <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Simple Clean Title */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <h1 className="font-serif text-4xl sm:text-6xl text-atelier-charcoal dark:text-atelier-ivory font-light tracking-tight">
              {designerInfo.name}
            </h1>

            <p className="text-base sm:text-lg text-atelier-muted font-sans font-light">
              Fashion Technology · 2027
            </p>

            <div className="pt-2">
              <a
                href="#collections"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal text-xs uppercase tracking-wider font-medium hover:bg-atelier-olive transition-colors"
              >
                <span>Collections</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Cover Image - Fits Completely With Zero Black Bars */}
          <div className="lg:col-span-6">
            <div
              className="rounded-xl overflow-hidden shadow-md border border-atelier-stone/30 dark:border-atelier-charcoal cursor-pointer"
              onClick={() => onOpenLightbox(coverArtwork)}
            >
              <img
                src={coverArtwork.image}
                alt="Fashion Design Portfolio - 2027"
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
