import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionsGallery from './components/CollectionsGallery';
import CollectionDetailPage from './components/CollectionDetailPage';
import ArtGalleryPage from './components/ArtGalleryPage';
import AboutMe from './components/AboutMe';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import { collections } from './data/portfolioData';

export default function App() {
  const [currentView, setCurrentView] = useState({ page: 'home', collectionId: null });
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  // Flatten all boards for global navigation
  const allBoards = collections.flatMap(col =>
    col.boards.map(b => ({
      ...b,
      collectionId: col.id,
      collectionTitle: col.title,
    }))
  );

  // Parse URL hash on mount and on popstate/hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'art-gallery') {
        setCurrentView({ page: 'art-gallery', collectionId: null });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (hash.startsWith('collection/')) {
        const colId = hash.replace('collection/', '');
        const exists = collections.some(c => c.id === colId);
        if (exists) {
          setCurrentView({ page: 'collection', collectionId: colId });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (hash === '' || hash === 'collections' || hash === 'fashion' || hash === 'about' || hash === 'skills' || hash === 'contact') {
        setCurrentView({ page: 'home', collectionId: null });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Navigate to collection page
  const handleSelectCollection = (id) => {
    setCurrentView({ page: 'collection', collectionId: id });
    window.location.hash = `collection/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to Art Gallery page
  const handleOpenArtGallery = () => {
    setCurrentView({ page: 'art-gallery', collectionId: null });
    window.location.hash = 'art-gallery';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return to home
  const handleGoHome = () => {
    setCurrentView({ page: 'home', collectionId: null });
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-atelier-ivory dark:bg-atelier-obsidian text-atelier-charcoal dark:text-atelier-sand transition-colors duration-500 font-sans selection:bg-atelier-olive selection:text-white">
      {/* Subtle Noise Texture Overlay */}
      <div className="grain-overlay" />

      {/* Navigation Bar */}
      <Navbar
        currentView={currentView}
        onGoHome={handleGoHome}
        onOpenArtGallery={handleOpenArtGallery}
      />

      {/* Main Content Area */}
      <main>
        {currentView.page === 'home' && (
          <>
            <Hero onOpenLightbox={(item) => setActiveLightboxItem(item)} />
            <CollectionsGallery
              onSelectCollection={handleSelectCollection}
              onOpenArtGallery={handleOpenArtGallery}
            />
            <AboutMe />
            <SkillsSection />
            <ContactSection />
          </>
        )}

        {currentView.page === 'collection' && (
          <CollectionDetailPage
            collectionId={currentView.collectionId}
            onBack={handleGoHome}
            onOpenLightbox={(item) => setActiveLightboxItem(item)}
          />
        )}

        {currentView.page === 'art-gallery' && (
          <ArtGalleryPage
            onBack={handleGoHome}
            onOpenLightbox={(item) => setActiveLightboxItem(item)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onOpenCollection={handleSelectCollection} />

      {/* Interactive Lightbox */}
      {activeLightboxItem && (
        <Lightbox
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
        />
      )}
    </div>
  );
}
