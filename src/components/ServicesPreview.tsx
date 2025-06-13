
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Building, Zap, Hammer } from 'lucide-react';

const ServicesPreview = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      titleKey: 'services.interior',
      description: 'Cuisine, salle de bain, salon, chambres',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building,
      titleKey: 'services.exterior',
      description: 'Façade, toiture, terrasse, jardin',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      titleKey: 'services.insulation',
      description: 'Isolation thermique, pompe à chaleur',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Hammer,
      titleKey: 'services.construction',
      description: 'Extensions, annexes, constructions neuves',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-4 group-hover:shadow-xl transition-shadow">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-70 transition-opacity`} />
                  
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-sm text-center opacity-90">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
