
import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Users, 
  Shield,
  Star,
  MessageCircle
} from 'lucide-react';

const AboutContent = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null as File | null
  });

  const team = [
    {
      name: 'Marc Dubois',
      role: 'Fondateur & Directeur',
      experience: '15 ans',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      description: 'Expert en rénovation avec plus de 150 projets réalisés'
    },
    {
      name: 'Sophie Laurent',
      role: 'Architecte d\'Intérieur',
      experience: '8 ans',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
      description: 'Spécialisée dans les espaces modernes et fonctionnels'
    },
    {
      name: 'Jean Van Berg',
      role: 'Chef de Chantier',
      experience: '12 ans',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      description: 'Garant de la qualité et du respect des délais'
    }
  ];

  const stats = [
    { value: '150+', label: 'Projets Réalisés', icon: Award },
    { value: '15', label: 'Années d\'Expérience', icon: Clock },
    { value: '98%', label: 'Clients Satisfaits', icon: Star },
    { value: '5', label: 'Experts Dédiés', icon: Users }
  ];

  const partners = [
    'Knauf', 'Gyproc', 'Velux', 'Daikin', 'Vaillant', 'Grohe'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625)' }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              À Propos de RenoBelgique
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              "Notre passion : transformer vos espaces en lieux de vie exceptionnels. 
              Depuis 2009, nous accompagnons les familles belges dans leurs projets de rénovation."
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Des professionnels passionnés à votre service
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                <div className="h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: `url(${member.photo})` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.experience} d'expérience</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Partenaires de Confiance
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contactez-Nous
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-gray-600">+32 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@renobelgique.be</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-medium">Zone d'intervention</p>
                    <p className="text-gray-600">Bruxelles, Wallonie, Flandre</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-medium">Horaires</p>
                    <p className="text-gray-600">Lun-Ven: 8h-18h, Sam: 9h-17h</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 w-full">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Business
              </Button>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fichier joint (optionnel)
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    onChange={handleFileChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Formats acceptés : PDF, JPG, PNG (max 5MB)
                  </p>
                </div>
                
                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Zone d'Intervention
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600">
              [Intégration Google Maps - Bruxelles, Wallonie, Flandre]
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Banner */}
      <div className="fixed bottom-4 left-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-40">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm mb-4 sm:mb-0">
            Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique RGPD.
          </p>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
              Paramètres
            </Button>
            <Button size="sm" className="bg-yellow-500 hover:bg-yellow-400 text-black">
              Accepter
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const About = () => {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
};

export default About;
