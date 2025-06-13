
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.portfolio', href: '#portfolio' },
    { key: 'nav.quote', href: '#quote' },
    { key: 'nav.about', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded ${isScrolled ? 'bg-yellow-500' : 'bg-white'}`}></div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              RenoBelgique
            </span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`font-medium transition-colors hover:text-yellow-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            
            {/* Contact Info Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+32123456789" className={`flex items-center space-x-1 text-sm ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                <Phone className="w-4 h-4" />
                <span>+32 123 456 789</span>
              </a>
              <Button 
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-medium"
                size="sm"
              >
                {t('hero.cta')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="px-4 pt-4 border-t space-y-3">
                <a href="tel:+32123456789" className="flex items-center space-x-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span>+32 123 456 789</span>
                </a>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                  {t('hero.cta')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
