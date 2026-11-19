import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionsGallery from './components/CollectionsGallery';
import AboutMe from './components/AboutMe';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import CollectionDetailModal from './components/CollectionDetailModal';
import { collections } from './data/portfolioData';

export default function App() {
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);
  const [activeCollectionId, setActiveCollectionId] = useState(null);

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

  // Handle Lightbox Next / Prev
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
      <Navbar />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenCollection={(id) => setActiveCollectionId(id)}
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
        />

        {/* 2. Collections Gallery (5 Curated Series) */}
        <CollectionsGallery
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
          onOpenCollectionModal={(id) => setActiveCollectionId(id)}
        />

        {/* 3. About the Designer */}
        <AboutMe />

        {/* 4. Skills & Apparel Expertise */}
        <SkillsSection />

        {/* 5. Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* 6. Luxury Footer */}
      <Footer
        onOpenCollection={(id) => setActiveCollectionId(id)}
      />

      {/* Interactive Lightbox Modal */}
      {activeLightboxItem && (
        <Lightbox
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
          onPrev={handleLightboxPrev}
          onNext={handleLightboxNext}
        />
      )}

      {/* Collection Monograph Modal */}
      {activeCollectionId && (
        <CollectionDetailModal
          collectionId={activeCollectionId}
          onClose={() => setActiveCollectionId(null)}
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
        />
      )}
    </div>
  );
}
