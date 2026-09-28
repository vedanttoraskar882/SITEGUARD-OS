import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PlatformSection } from './components/PlatformSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';

export const App: React.FC = () => {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [selectedPlanForPilot, setSelectedPlanForPilot] = useState<string | undefined>(undefined);

  const handleOpenPilotModal = (planName?: string) => {
    setSelectedPlanForPilot(planName);
    setIsPilotModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsPilotModalOpen(false);
    setSelectedPlanForPilot(undefined);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Navigation Header */}
      <Navbar onRequestPilot={() => handleOpenPilotModal()} />

      <main className="flex-grow">
        {/* 1. Home Section */}
        <HeroSection onRequestPilot={() => handleOpenPilotModal()} />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Platform Section */}
        <PlatformSection />

        {/* 4. How It Works Section */}
        <HowItWorksSection />

        {/* 5. Market Pricing Section */}
        <PricingSection onRequestPilot={(plan) => handleOpenPilotModal(plan)} />

        {/* 6. FAQ Section */}
        <FaqSection />
      </main>

      {/* 7. Footer Section */}
      <Footer />

      {/* Request a Pilot Form Modal (Persists to localStorage) */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={handleClosePilotModal}
        initialPlan={selectedPlanForPilot}
      />
    </div>
  );
};

export default App;
