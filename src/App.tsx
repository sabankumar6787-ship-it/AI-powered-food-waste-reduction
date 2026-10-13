import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AiModulesSection } from './components/AiModulesSection';
import { LiveDashboardSection } from './components/LiveDashboardSection';
import { FoodLifecycleSection } from './components/FoodLifecycleSection';
import { DesignThinkingSection } from './components/DesignThinkingSection';
import { ImpactSection } from './components/ImpactSection';
import { IntegrationSection } from './components/IntegrationSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { RecipeCalculatorModal } from './components/RecipeCalculatorModal';
import { InventoryManagerModal } from './components/InventoryManagerModal';
import { ForecastSimulatorModal } from './components/ForecastSimulatorModal';
import { DonationHubModal } from './components/DonationHubModal';
import { AiCopilotDrawer } from './components/AiCopilotDrawer';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [isInventoryModalOpen, setIsInventoryModalOpen] = useState(false);
  const [isForecastModalOpen, setIsForecastModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 font-sans selection:bg-wheat-400 selection:text-charcoal-900 overflow-x-hidden">
      
      {/* 0. Sticky Navigation Bar */}
      <Navbar
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenRecipe={() => setIsRecipeModalOpen(true)}
        onOpenInventory={() => setIsInventoryModalOpen(true)}
        onOpenForecast={() => setIsForecastModalOpen(true)}
        onOpenDonation={() => setIsDonationModalOpen(true)}
      />

      {/* 1. Hero Section */}
      <main>
        <HeroSection onOpenDemo={() => setIsDemoModalOpen(true)} />

        {/* 2. The Problem Section */}
        <ProblemSection />

        {/* 3. How It Works Section */}
        <HowItWorksSection />

        {/* 4. AI Modules Section */}
        <AiModulesSection />

        {/* 5. Live AI Dashboard Section */}
        <LiveDashboardSection
          onOpenRecipe={() => setIsRecipeModalOpen(true)}
          onOpenInventory={() => setIsInventoryModalOpen(true)}
          onOpenForecast={() => setIsForecastModalOpen(true)}
          onOpenDonation={() => setIsDonationModalOpen(true)}
        />

        {/* 6. Food Lifecycle Section */}
        <FoodLifecycleSection />

        {/* 7. Design Thinking Section */}
        <DesignThinkingSection />

        {/* 8. Impact Section */}
        <ImpactSection />

        {/* 9. Integration Section */}
        <IntegrationSection />

        {/* 10. Architecture Section */}
        <ArchitectureSection />

        {/* 11. Call to Action Section */}
        <CtaSection onOpenDemo={() => setIsDemoModalOpen(true)} />
      </main>

      {/* 12. Footer */}
      <Footer onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Interactive Tool Modals & Copilot Drawer */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <RecipeCalculatorModal isOpen={isRecipeModalOpen} onClose={() => setIsRecipeModalOpen(false)} />
      <InventoryManagerModal isOpen={isInventoryModalOpen} onClose={() => setIsInventoryModalOpen(false)} />
      <ForecastSimulatorModal isOpen={isForecastModalOpen} onClose={() => setIsForecastModalOpen(false)} />
      <DonationHubModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />

      {/* Floating AI Kitchen Copilot Drawer */}
      <AiCopilotDrawer
        onOpenRecipe={() => setIsRecipeModalOpen(true)}
        onOpenInventory={() => setIsInventoryModalOpen(true)}
        onOpenForecast={() => setIsForecastModalOpen(true)}
        onOpenDonation={() => setIsDonationModalOpen(true)}
      />

    </div>
  );
}

export default App;
