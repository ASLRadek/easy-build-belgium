
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-yellow-500 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-black mb-2">
                Prêt à démarrer votre projet ?
              </h3>
              <p className="text-black/80">
                Contactez-nous dès aujourd'hui pour une consultation gratuite
              </p>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3">
              {t('footer.cta')}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                <span className="text-2xl font-bold">RenoBelgique</span>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md">
                Votre partenaire de confiance pour tous vos projets de rénovation et construction 
                en Bruxelles, Wallonie et Flandre depuis plus de 15 ans.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span>+32 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <span>contact@renobelgique.be</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span>Bruxelles, Wallonie, Flandre</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Rénovation Intérieure</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Rénovation Extérieure</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Isolation & Énergie</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Construction Neuve</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Devis Gratuit</a></li>
              </ul>
            </div>

            {/* Hours & Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Horaires</h4>
              <div className="space-y-2 text-gray-300 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Lun-Ven: 8h-18h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Sam: 9h-17h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Dim: Fermé</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="hover:text-yellow-500 transition-colors block">Mentions légales</a>
                <a href="#" className="hover:text-yellow-500 transition-colors block">Politique de confidentialité</a>
                <a href="#" className="hover:text-yellow-500 transition-colors block">RGPD</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; 2024 RenoBelgique. Tous droits réservés.</p>
            <p>Entreprise certifiée • TVA BE.123.456.789</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
