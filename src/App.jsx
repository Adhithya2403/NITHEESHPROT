import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionsGallery from './components/CollectionsGallery';
import CollectionDetailPage from './components/CollectionDetailPage';
import AboutMe from './components/AboutMe';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import { collections } from './data/portfolioData';

export default function App() {
  const [currentView, setCurrentView] = useState({ page: 'home', collectionId: null });
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  // Flatten all boards for global previous / next navigation in lightbox
  const allBoards = collections.flatMap(col =>
    col.boards.map(b => ({
      ...b,
      collectionId: col.id,
      collectionTitle: col.title,
      collectionNumber: col.number,
      season: col.season
    }))
  );

  // Parse URL hash on mount and on popstate/hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('collection/')) {
        const colId = hash.replace('collection/', '');
        const exists = collections.some(c => c.id === colId);
        if (exists) {
          setCurrentView({ page: 'collection', collectionId: colId });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (hash === '' || hash === 'collections' || hash === 'about' || hash === 'skills' || hash === 'contact') {
        setCurrentView({ page: 'home', collectionId: null });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Navigate to dedicated collection page
  const handleSelectCollection = (id) => {
    setCurrentView({ page: 'collection', collectionId: id });
    window.location.hash = `collection/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return to portfolio home
  const handleGoHome = () => {
    setCurrentView({ page: 'home', collectionId: null });
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lightbox Next / Prev
  const handleLightboxPrev = () => {
    if (!activeLightboxItem) return;
    const currentIndex = allBoards.findIndex(b => b.image === activeLightboxItem.image);
    if (currentIndex > -1) {
      const prevIndex = (currentIndex - 1 + allBoards.length) % allBoards.length;
      setActiveLightboxItem(allBoards[prevIndex]);
    }
  };

  const handleLightboxNext = () => {
    if (!activeLightboxItem) return;
    const currentIndex = allBoards.findIndex(b => b.image === activeLightboxItem.image);
    if (currentIndex > -1) {
      const nextIndex = (currentIndex + 1) % allBoards.length;
      setActiveLightboxItem(allBoards[nextIndex]);
    }
  };

  return (
    <div className="relative min-h-screen bg-atelier-ivory dark:bg-atelier-obsidian text-atelier-charcoal dark:text-atelier-sand transition-colors duration-500 font-sans selection:bg-atelier-olive selection:text-white">
      {/* Subtle Noise Film Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Navigation Bar */}
      <Navbar
        currentView={currentView}
        onGoHome={handleGoHome}
        onSelectCollection={handleSelectCollection}
      />

      {/* Main Content Area */}
      <main>
        {currentView.page === 'home' ? (
          <>
            {/* 1. Hero Section (with Presentation Cover Artwork) */}
            <Hero
              onOpenLightbox={(item) => setActiveLightboxItem(item)}
            />

            {/* 2. Selected Collections (Editorial Cards Grid) */}
            <CollectionsGallery
              onSelectCollection={handleSelectCollection}
            />

            {/* 3. About the Designer Profile */}
            <AboutMe />

            {/* 4. Skills & CAD Expertise */}
            <SkillsSection />

            {/* 5. Contact Section */}
            <ContactSection />
          </>
        ) : (
          /* Dedicated Collection Detail Page */
          <CollectionDetailPage
            collectionId={currentView.collectionId}
            onBack={handleGoHome}
            onSelectCollection={handleSelectCollection}
            onOpenLightbox={(item) => setActiveLightboxItem(item)}
          />
        )}
      </main>

      {/* Luxury Footer */}
      <Footer
        onOpenCollection={handleSelectCollection}
      />

      {/* Interactive Full-Resolution Master Lightbox */}
      {activeLightboxItem && (
        <Lightbox
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
          onPrev={handleLightboxPrev}
          onNext={handleLightboxNext}
        />
      )}
    </div>
  );
}
