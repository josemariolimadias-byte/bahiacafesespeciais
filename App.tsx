
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import Regions from './components/Regions';
import Shop from './components/Shop';
import Subscription from './components/Subscription';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RegionDetail from './components/RegionDetail';
import BrewingGuide from './components/BrewingGuide';
import { CoffeeRegion } from './types';

function App() {
  const [selectedRegion, setSelectedRegion] = useState<CoffeeRegion | null>(null);
  const [showGuide, setShowGuide] = useState(false);

  const handleSelectRegion = (region: CoffeeRegion) => {
    setSelectedRegion(region);
    setShowGuide(false);
  };

  const handleOpenGuide = () => {
    setShowGuide(true);
    setSelectedRegion(null);
  };

  const handleBackToHome = () => {
    setSelectedRegion(null);
    setShowGuide(false);
  };

  const isHome = !selectedRegion && !showGuide;

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-amber-100 selection:text-amber-900">
      <Header />
      
      <main>
        {selectedRegion ? (
          <RegionDetail 
            region={selectedRegion} 
            onBack={handleBackToHome} 
          />
        ) : showGuide ? (
          <BrewingGuide onBack={handleBackToHome} />
        ) : (
          <>
            <Hero />
            <History />
            <Regions onSelectRegion={handleSelectRegion} />
            <Shop onOpenGuide={handleOpenGuide} />
            <Subscription />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
