import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickServiceSelector } from './components/QuickServiceSelector';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const handleExploreServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuickDispatch = () => {
    const el = document.getElementById('atendimento-rapido');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090B0E] text-[#F4F6F8] flex flex-col font-sans selection:bg-[#D9A441]/30 selection:text-white">
      {/* Top Bar Header */}
      <Header onOpenQuickDispatch={handleOpenQuickDispatch} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreServices={handleExploreServices}
          onOpenQuickDispatch={handleOpenQuickDispatch}
        />

        {/* Interactive Emergency & Service Dispatch Tool */}
        <QuickServiceSelector id="atendimento-rapido" />

        {/* Specialized Services with Photography */}
        <ServicesSection />

        {/* Verified Differentiators */}
        <WhyUsSection />

        {/* 3-Step Service Process & Plantão Details */}
        <ProcessSection />

        {/* Physical Location, Map & Sector Coverage */}
        <LocationSection />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
