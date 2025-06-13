
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Mail } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    
    toast.success(
      "Guide téléchargé !",
      {
        description: "Vérifiez votre boîte email",
        duration: 3000,
      }
    );
    
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-8 h-8 text-yellow-500" />
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('newsletter.title')}
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              {t('newsletter.description')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder={t('newsletter.email.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-white text-gray-900 placeholder-gray-500 h-12"
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 h-12"
            >
              <Mail className="w-4 h-4 mr-2" />
              {t('newsletter.cta')}
            </Button>
          </form>

          <p className="text-sm text-white/80 mt-4">
            📧 Nous respectons votre vie privée. Pas de spam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
