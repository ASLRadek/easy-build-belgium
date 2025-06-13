
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterSlider = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const projects = [
    {
      id: 1,
      beforeImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
      afterImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
      challenge: 'Cuisine vétuste et mal agencée',
      solution: 'Rénovation complète avec îlot central moderne'
    },
    {
      id: 2,
      beforeImage: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302',
      afterImage: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
      challenge: 'Salon sombre et cloisonné',
      solution: 'Espace ouvert lumineux avec verrière'
    },
    {
      id: 3,
      beforeImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      afterImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
      challenge: 'Façade dégradée et isolation défaillante',
      solution: 'Ravalement complet et isolation thermique'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentSlide];

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.parentElement;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('beforeafter.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('beforeafter.subtitle')}
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Before/After Image */}
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl mb-8">
            {/* Before Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${currentProject.beforeImage})` }}
            >
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded font-semibold">
                {t('beforeafter.before')}
              </div>
            </div>

            {/* After Image with Slider */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-300"
              style={{ 
                backgroundImage: `url(${currentProject.afterImage})`,
                clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`
              }}
            >
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded font-semibold">
                {t('beforeafter.after')}
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg z-10"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-1 h-4 bg-gray-400 mx-0.5"></div>
                <div className="w-1 h-4 bg-gray-400 mx-0.5"></div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Project Description */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">{t('beforeafter.challenge')}</h4>
              <p className="text-gray-700">{currentProject.challenge}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">{t('beforeafter.solution')}</h4>
              <p className="text-gray-700">{currentProject.solution}</p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
