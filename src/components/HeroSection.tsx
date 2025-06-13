
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentText, setCurrentText] = useState(0);
  
  const animatedTexts = [
    t('hero.title'),
    'Transformez votre habitat',
    'Expertise garantie'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Placeholder for video - will be replaced with actual video */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center opacity-40"></div>
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="block transition-all duration-500 ease-in-out">
              {animatedTexts[currentText]}
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 text-lg group"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg group"
          >
            <Play className="mr-2 w-5 h-5" />
            Voir nos réalisations
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-yellow-500/20 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;
