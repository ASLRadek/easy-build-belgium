
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Award, Clock } from 'lucide-react';

const ValuesSection = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      titleKey: 'values.reliability',
      descKey: 'values.reliability.desc',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      titleKey: 'values.quality',
      descKey: 'values.quality.desc',
      color: 'text-yellow-500'
    },
    {
      icon: Clock,
      titleKey: 'values.deadline',
      descKey: 'values.deadline.desc',
      color: 'text-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('values.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto group-hover:shadow-xl transition-shadow">
                    <IconComponent className={`w-10 h-10 ${value.color}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t(value.titleKey)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(value.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
