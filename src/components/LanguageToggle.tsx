
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex bg-white/10 backdrop-blur-sm rounded-lg p-1">
      <Button
        variant={language === 'fr' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 text-xs font-medium transition-all ${
          language === 'fr' 
            ? 'bg-yellow-500 text-black hover:bg-yellow-400' 
            : 'text-white hover:bg-white/20'
        }`}
      >
        FR
      </Button>
      <Button
        variant={language === 'nl' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('nl')}
        className={`px-3 py-1 text-xs font-medium transition-all ${
          language === 'nl' 
            ? 'bg-yellow-500 text-black hover:bg-yellow-400' 
            : 'text-white hover:bg-white/20'
        }`}
      >
        NL
      </Button>
    </div>
  );
};

export default LanguageToggle;
