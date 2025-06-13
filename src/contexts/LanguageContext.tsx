
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traductions pour le site bilingue FR/NL
const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.quote': 'Devis',
    'nav.about': 'À propos',
    'nav.client': 'Espace Client',
    
    // Hero Section
    'hero.title': 'Rénovation & Construction',
    'hero.subtitle': 'Expert en Belgique',
    'hero.description': 'Votre partenaire de confiance pour tous vos projets de rénovation et construction en Bruxelles, Wallonie et Flandre.',
    'hero.cta': 'Obtenez votre devis personnalisé',
    
    // Values Section
    'values.title': 'Nos Engagements',
    'values.reliability': 'Fiabilité',
    'values.quality': 'Qualité',
    'values.deadline': 'Respect des délais',
    'values.reliability.desc': 'Une équipe de professionnels expérimentés',
    'values.quality.desc': 'Matériaux premium et finitions soignées',
    'values.deadline.desc': 'Projets livrés dans les temps convenus',
    
    // Stats Section
    'stats.projects': 'Projets réalisés',
    'stats.coverage': 'km couverts en Belgique',
    'stats.satisfaction': 'Taux de satisfaction client',
    'stats.experience': 'Années d\'expérience',
    
    // Before/After Section
    'beforeafter.title': 'Nos Réalisations',
    'beforeafter.subtitle': 'Découvrez la transformation de nos projets',
    'beforeafter.before': 'Avant',
    'beforeafter.after': 'Après',
    'beforeafter.challenge': 'Défi',
    'beforeafter.solution': 'Solution',
    
    // Services Preview
    'services.title': 'Nos Services',
    'services.interior': 'Rénovation Intérieure',
    'services.exterior': 'Rénovation Extérieure',
    'services.insulation': 'Isolation & Énergie',
    'services.construction': 'Construction Neuve',
    
    // Newsletter
    'newsletter.title': 'Guide Rénovation Gratuit',
    'newsletter.description': 'Recevez notre guide complet pour bien préparer votre projet',
    'newsletter.email.placeholder': 'Votre adresse email',
    'newsletter.cta': 'Télécharger le guide',
    
    // Footer
    'footer.cta': 'Réservez votre créneau',
    'footer.phone': 'Appelez-nous',
    'footer.email': 'Écrivez-nous',
    
    // Forms
    'form.name': 'Nom',
    'form.email': 'Email',
    'form.phone': 'Téléphone',
    'form.message': 'Message',
    'form.send': 'Envoyer',
    'form.surface': 'Surface à rénover',
    'form.surface.placeholder': 'ex : 75 m²',
    'form.project.type': 'Type de travaux',
    'form.project.description': 'Description du projet',
  },
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Diensten',
    'nav.portfolio': 'Portfolio',
    'nav.quote': 'Offerte',
    'nav.about': 'Over ons',
    'nav.client': 'Klantruimte',
    
    // Hero Section
    'hero.title': 'Renovatie & Bouw',
    'hero.subtitle': 'Expert in België',
    'hero.description': 'Uw betrouwbare partner voor al uw renovatie- en bouwprojecten in Brussel, Wallonië en Vlaanderen.',
    'hero.cta': 'Krijg uw persoonlijke offerte',
    
    // Values Section
    'values.title': 'Onze Toezeggingen',
    'values.reliability': 'Betrouwbaarheid',
    'values.quality': 'Kwaliteit',
    'values.deadline': 'Respect voor deadlines',
    'values.reliability.desc': 'Een team van ervaren professionals',
    'values.quality.desc': 'Premium materialen en verzorgde afwerking',
    'values.deadline.desc': 'Projecten geleverd binnen de afgesproken tijd',
    
    // Stats Section
    'stats.projects': 'Gerealiseerde projecten',
    'stats.coverage': 'km gedekt in België',
    'stats.satisfaction': 'Klanttevredenheid',
    'stats.experience': 'Jaar ervaring',
    
    // Before/After Section
    'beforeafter.title': 'Onze Realisaties',
    'beforeafter.subtitle': 'Ontdek de transformatie van onze projecten',
    'beforeafter.before': 'Voor',
    'beforeafter.after': 'Na',
    'beforeafter.challenge': 'Uitdaging',
    'beforeafter.solution': 'Oplossing',
    
    // Services Preview
    'services.title': 'Onze Diensten',
    'services.interior': 'Binnenrenovatie',
    'services.exterior': 'Buitenrenovatie',
    'services.insulation': 'Isolatie & Energie',
    'services.construction': 'Nieuwbouw',
    
    // Newsletter
    'newsletter.title': 'Gratis Renovatiegids',
    'newsletter.description': 'Ontvang onze complete gids om uw project goed voor te bereiden',
    'newsletter.email.placeholder': 'Uw e-mailadres',
    'newsletter.cta': 'Download de gids',
    
    // Footer
    'footer.cta': 'Reserveer uw tijdslot',
    'footer.phone': 'Bel ons',
    'footer.email': 'Schrijf ons',
    
    // Forms
    'form.name': 'Naam',
    'form.email': 'E-mail',
    'form.phone': 'Telefoon',
    'form.message': 'Bericht',
    'form.send': 'Verzenden',
    'form.surface': 'Te renoveren oppervlakte',
    'form.surface.placeholder': 'bijv: 75 m²',
    'form.project.type': 'Type werkzaamheden',
    'form.project.description': 'Projectbeschrijving',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
