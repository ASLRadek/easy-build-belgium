
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, FileText, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const QuoteSection = () => {
  const { t } = useLanguage();
  const [instantQuoteData, setInstantQuoteData] = useState({
    workType: '',
    surface: '',
    options: []
  });
  const [personalizedQuoteData, setPersonalizedQuoteData] = useState({
    workType: '',
    surface: '',
    description: '',
    name: '',
    email: '',
    phone: ''
  });

  const workTypes = [
    'Rénovation cuisine',
    'Rénovation salle de bain',
    'Peinture intérieure',
    'Sols (parquet, carrelage)',
    'Isolation thermique',
    'Ravalement façade',
    'Toiture',
    'Extension'
  ];

  const handleInstantQuote = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation de calcul de devis instantané
    const basePrice = 400; // Prix au m²
    const surface = parseInt(instantQuoteData.surface) || 0;
    const estimatedPrice = surface * basePrice;
    const minPrice = estimatedPrice * 0.8;
    const maxPrice = estimatedPrice * 1.2;

    toast.success(
      `Estimation: ${minPrice.toLocaleString()}€ - ${maxPrice.toLocaleString()}€ pour ${surface}m²`,
      {
        description: "Devis détaillé envoyé par email",
        duration: 5000,
      }
    );
  };

  const handlePersonalizedQuote = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Devis personnalisé:', personalizedQuoteData);
    
    toast.success(
      "Demande de devis reçue !",
      {
        description: "Nous vous contacterons sous 24h",
        duration: 5000,
      }
    );
  };

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Obtenez votre devis
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choisissez le type d'estimation qui vous convient
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="instant" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="instant" className="flex items-center space-x-2">
                <Calculator className="w-4 h-4" />
                <span>Estimation Instantanée</span>
              </TabsTrigger>
              <TabsTrigger value="personalized" className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Devis Personnalisé</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="instant">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="w-5 h-5 text-yellow-500" />
                    <span>Estimation Instantanée</span>
                  </CardTitle>
                  <CardDescription>
                    Obtenez une fourchette de prix en quelques secondes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleInstantQuote} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="instant-work-type">{t('form.project.type')}</Label>
                        <Select 
                          value={instantQuoteData.workType}
                          onValueChange={(value) => setInstantQuoteData({...instantQuoteData, workType: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez le type de travaux" />
                          </SelectTrigger>
                          <SelectContent>
                            {workTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="instant-surface">{t('form.surface')}</Label>
                        <Input
                          id="instant-surface"
                          type="text"
                          placeholder={t('form.surface.placeholder')}
                          value={instantQuoteData.surface}
                          onChange={(e) => setInstantQuoteData({...instantQuoteData, surface: e.target.value})}
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3"
                      disabled={!instantQuoteData.workType || !instantQuoteData.surface}
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculer l'estimation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="personalized">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-yellow-500" />
                    <span>Devis Personnalisé</span>
                  </CardTitle>
                  <CardDescription>
                    Recevez un devis détaillé adapté à votre projet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePersonalizedQuote} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="personalized-work-type">{t('form.project.type')}</Label>
                        <Select 
                          value={personalizedQuoteData.workType}
                          onValueChange={(value) => setPersonalizedQuoteData({...personalizedQuoteData, workType: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez le type de travaux" />
                          </SelectTrigger>
                          <SelectContent>
                            {workTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="personalized-surface">{t('form.surface')}</Label>
                        <Input
                          id="personalized-surface"
                          type="text"
                          placeholder={t('form.surface.placeholder')}
                          value={personalizedQuoteData.surface}
                          onChange={(e) => setPersonalizedQuoteData({...personalizedQuoteData, surface: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">{t('form.project.description')}</Label>
                      <Textarea
                        id="description"
                        placeholder="Décrivez votre projet en détail..."
                        className="min-h-24"
                        value={personalizedQuoteData.description}
                        onChange={(e) => setPersonalizedQuoteData({...personalizedQuoteData, description: e.target.value})}
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="name">{t('form.name')}</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Votre nom"
                          value={personalizedQuoteData.name}
                          onChange={(e) => setPersonalizedQuoteData({...personalizedQuoteData, name: e.target.value})}
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">{t('form.email')}</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={personalizedQuoteData.email}
                          onChange={(e) => setPersonalizedQuoteData({...personalizedQuoteData, email: e.target.value})}
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">{t('form.phone')}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+32 xxx xx xx xx"
                          value={personalizedQuoteData.phone}
                          onChange={(e) => setPersonalizedQuoteData({...personalizedQuoteData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Demander un devis personnalisé
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
