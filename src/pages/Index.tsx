
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ValuesSection from '@/components/ValuesSection';
import StatsSection from '@/components/StatsSection';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ServicesPreview from '@/components/ServicesPreview';
import QuoteSection from '@/components/QuoteSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ValuesSection />
          <StatsSection />
          <BeforeAfterSlider />
          <ServicesPreview />
          <QuoteSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
