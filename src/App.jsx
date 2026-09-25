import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SubsystemsSection from './components/SubsystemsSection';
import ProofGallery from './components/ProofGallery';
import GenesisTimeline from './components/GenesisTimeline';
import UpdatesPage from './components/UpdatesPage';
import PhilosophySection from './components/PhilosophySection';
import AboutCreator from './components/AboutCreator';
import FeedbackPage from './components/FeedbackPage';
import ScreenshotModal from './components/ScreenshotModal';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import CosmicBackground from './components/CosmicBackground';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showSplash, setShowSplash] = useState(true);
  const [modalState, setModalState] = useState({
    isOpen: false,
    image: '',
    title: '',
    details: ''
  });

  const handleOpenScreenshot = (image, title, details) => {
    setModalState({
      isOpen: true,
      image,
      title,
      details
    });
  };

  const handleCloseScreenshot = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigate = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      
      {/* Interactive Universe & Atomic Particle Background */}
      <CosmicBackground />

      {/* Boot Splash Screen */}
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}

      {/* Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={handleNavigate} />

      {/* Main Page Content */}
      <main style={{ flexGrow: 1 }}>
        {activeTab === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <SubsystemsSection onOpenScreenshot={handleOpenScreenshot} />
            <ProofGallery onOpenScreenshot={handleOpenScreenshot} />
          </>
        )}

        {activeTab === 'engines' && (
          <SubsystemsSection onOpenScreenshot={handleOpenScreenshot} />
        )}

        {activeTab === 'proofs' && (
          <ProofGallery onOpenScreenshot={handleOpenScreenshot} />
        )}

        {activeTab === 'genesis' && (
          <GenesisTimeline />
        )}

        {activeTab === 'updates' && (
          <UpdatesPage />
        )}

        {activeTab === 'philosophy' && (
          <PhilosophySection />
        )}

        {activeTab === 'creator' && (
          <AboutCreator />
        )}

        {activeTab === 'feedback' && (
          <FeedbackPage />
        )}
      </main>

      {/* Global Screenshot Lightbox Modal */}
      <ScreenshotModal
        isOpen={modalState.isOpen}
        onClose={handleCloseScreenshot}
        data={modalState}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
