
import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Building, 
  Zap, 
  Hammer, 
  CheckCircle, 
  Users, 
  Clock, 
  Award,
  ChevronDown
} from 'lucide-react';

const ServicesContent = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Home,
      title: 'Rénovation Intérieure',
      titleNl: 'Binnenrenovatie',
      description: 'Cuisine, salle de bain, salon, chambres, parquet, peinture',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
      details: [
        'Cuisine sur mesure',
        'Salle de bain moderne',
        'Aménagement salon',
        'Rénovation chambres'
      ],
      caseStudy: 'Transformation d\'un appartement de 85m² en 6 semaines'
    },
    {
      icon: Building,
      title: 'Rénovation Extérieure',
      titleNl: 'Buitenrenovatie',
      description: 'Façade, toiture, terrasse, jardin, ravalement',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
      details: [
        'Ravalement de façade',
        'Réfection toiture',
        'Aménagement terrasse',
        'Paysagisme'
      ],
      caseStudy: 'Rénovation complète façade maison 4 façades'
    },
    {
      icon: Zap,
      title: 'Isolation & Énergie',
      titleNl: 'Isolatie & Energie',
      description: 'Isolation thermique, pompe à chaleur, panneaux solaires',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      details: [
        'Isolation toiture/murs',
        'Pompe à chaleur',
        'Panneaux photovoltaïques',
        'Audit énergétique'
      ],
      caseStudy: 'Réduction de 60% des coûts énergétiques'
    },
    {
      icon: Hammer,
      title: 'Construction Neuve',
      titleNl: 'Nieuwbouw',
      description: 'Extensions, annexes, constructions neuves, permis',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
      details: [
        'Extension maison',
        'Annexe indépendante',
        'Construction neuve',
        'Gestion permis'
      ],
      caseStudy: 'Extension 40m² avec suite parentale'
    }
  ];

  const timeline = [
    {
      step: 1,
      title: 'Consultation Gratuite',
      description: 'Visite technique et étude de faisabilité'
    },
    {
      step: 2,
      title: 'Devis Détaillé',
      description: 'Proposition personnalisée sous 48h'
    },
    {
      step: 3,
      title: 'Planification',
      description: 'Organisation du chantier et des équipes'
    },
    {
      step: 4,
      title: 'Réalisation',
      description: 'Suivi quotidien et qualité garantie'
    }
  ];

  const faqs = [
    {
      question: 'Quels sont vos délais d\'intervention ?',
      answer: 'Nous intervenons généralement sous 48h pour un devis et sous 2 semaines pour démarrer les travaux.'
    },
    {
      question: 'Travaillez-vous dans toute la Belgique ?',
      answer: 'Oui, nous couvrons Bruxelles, la Wallonie et la Flandre avec nos équipes locales.'
    },
    {
      question: 'Proposez-vous des garanties ?',
      answer: 'Toutes nos réalisations sont garanties 10 ans selon la réglementation belge.'
    },
    {
      question: 'Comment se déroule le suivi de chantier ?',
      answer: 'Un chef de chantier dédié assure le suivi quotidien avec des points réguliers.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Nos Services & Expertise
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Une gamme complète de services de rénovation et construction 
              pour transformer votre habitat en Belgique
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                    selectedService === index ? 'ring-2 ring-yellow-500' : ''
                  }`}
                  onClick={() => setSelectedService(index)}
                >
                  <div className="relative h-48">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {detail}
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="text-sm text-yellow-600 font-medium">
                        Cas client : {service.caseStudy}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Processus en 4 Étapes
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-500 hidden md:block"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm mb-4">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-black/80 mb-8">
            Téléchargez notre checklist gratuite de préparation de projet
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3">
            Télécharger la Checklist PDF
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Services = () => {
  return (
    <LanguageProvider>
      <ServicesContent />
    </LanguageProvider>
  );
};

export default Services;
