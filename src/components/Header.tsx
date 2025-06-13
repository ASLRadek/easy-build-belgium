
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.services', href: '/services' },
    { key: 'nav.portfolio', href: '/portfolio' },
    { key: 'nav.quote', href: '/devis' },
    { key: 'nav.about', href: '/about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded ${isScrolled ? 'bg-yellow-500' : 'bg-white'}`}></div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              RenoBelgique
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`font-medium transition-colors hover:text-yellow-500 ${
                  location.pathname === item.href 
                    ? 'text-yellow-500' 
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {t(item.key)}
              </Link>
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
              <Link to="/devis">
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-medium"
                  size="sm"
                >
                  {t('hero.cta')}
                </Button>
              </Link>
            </div>

            {/* Client Space Link */}
            <Link 
              to="/client"
              className={`hidden lg:block text-sm font-medium ${
                isScrolled ? 'text-gray-700 hover:text-yellow-500' : 'text-white hover:text-yellow-500'
              }`}
            >
              {t('nav.client')}
            </Link>

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
                <Link
                  key={item.key}
                  to={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <Link
                to="/client"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.client')}
              </Link>
              <div className="px-4 pt-4 border-t space-y-3">
                <a href="tel:+32123456789" className="flex items-center space-x-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span>+32 123 456 789</span>
                </a>
                <Link to="/devis" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                    {t('hero.cta')}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
