
import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  FileText, 
  CheckCircle, 
  Upload, 
  Calendar,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const QuoteContent = () => {
  const { t } = useLanguage();
  const [quoteType, setQuoteType] = useState<'instant' | 'personalized' | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [showResult, setShowResult] = useState(false);

  // Instant Quote Form
  const [instantForm, setInstantForm] = useState({
    workType: '',
    surface: '',
    options: [] as string[]
  });

  // Personalized Quote Form
  const [personalizedForm, setPersonalizedForm] = useState({
    workType: '',
    surface: '',
    description: '',
    name: '',
    email: '',
    phone: '',
    files: [] as File[]
  });

  const workTypes = [
    'Cuisine',
    'Salle de bain',
    'Salon/Séjour',
    'Chambre',
    'Façade',
    'Toiture',
    'Isolation',
    'Électricité',
    'Plomberie',
    'Peinture',
    'Parquet/Sol',
    'Extension',
    'Autre'
  ];

  const optionsList = [
    'Isolation renforcée',
    'Peinture premium',
    'Électricité complète',
    'Plomberie moderne',
    'Domotique',
    'Éclairage LED'
  ];

  const handleInstantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Devis instantané:', instantForm);
    setShowResult(true);
  };

  const handlePersonalizedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Devis personnalisé:', personalizedForm);
    setShowResult(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setPersonalizedForm(prev => ({
        ...prev,
        files: [...prev.files, ...newFiles]
      }));
    }
  };

  const getInstantEstimate = () => {
    // Simple estimation logic
    const basePrice = instantForm.workType === 'Cuisine' ? 15000 :
                     instantForm.workType === 'Salle de bain' ? 8000 :
                     instantForm.workType === 'Façade' ? 12000 : 5000;
    
    const surface = parseInt(instantForm.surface) || 20;
    const pricePerM2 = basePrice / 20;
    const total = surface * pricePerM2;
    const optionsPrice = instantForm.options.length * 1500;
    
    return {
      min: Math.round(total + optionsPrice - total * 0.2),
      max: Math.round(total + optionsPrice + total * 0.3)
    };
  };

  if (showResult && quoteType === 'instant') {
    const estimate = getInstantEstimate();
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-green-100">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Votre Estimation Instantanée
              </h1>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-lg text-gray-600 mb-2">Fourchette de prix estimée :</p>
                <p className="text-4xl font-bold text-green-600 mb-4">
                  {estimate.min.toLocaleString()}€ - {estimate.max.toLocaleString()}€
                </p>
                <p className="text-sm text-gray-500">
                  *Prix indicatif basé sur vos critères. Devis détaillé sur demande.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3"
                  onClick={() => setQuoteType('personalized')}
                >
                  Obtenir un devis personnalisé gratuit
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://calendly.com/renobelgique', '_blank')}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Réserver un rendez-vous
                </Button>
                
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setShowResult(false);
                    setQuoteType(null);
                    setInstantForm({ workType: '', surface: '', options: [] });
                  }}
                >
                  Faire une nouvelle estimation
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (showResult && quoteType === 'personalized') {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Demande Envoyée avec Succès !
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                Merci {personalizedForm.name} ! Nous avons bien reçu votre demande de devis personnalisé.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">Prochaines étapes :</h3>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li>✓ Analyse de votre projet sous 2h</li>
                  <li>✓ Appel de notre expert sous 24h</li>
                  <li>✓ Visite technique gratuite sous 48h</li>
                  <li>✓ Devis détaillé sous 72h</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3"
                  onClick={() => window.open('https://calendly.com/renobelgique', '_blank')}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Réserver un créneau maintenant
                </Button>
                
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setShowResult(false);
                    setQuoteType(null);
                    setCurrentStep(1);
                    setPersonalizedForm({
                      workType: '',
                      surface: '',
                      description: '',
                      name: '',
                      email: '',
                      phone: '',
                      files: []
                    });
                  }}
                >
                  Faire une nouvelle demande
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Devis & Estimation Gratuits
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choisissez le type d'estimation qui correspond à vos besoins. 
              Réponse garantie sous 24h.
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
        </div>
      </section>

      {!quoteType && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Instant Quote Card */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-8 h-8 text-black" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Estimation Instantanée
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Obtenez une fourchette de prix immédiatement avec notre calculateur intelligent.
                </p>
                
                <ul className="text-left space-y-2 mb-8 text-sm text-gray-600">
                  <li>✓ Résultat immédiat</li>
                  <li>✓ 3 questions simples</li>
                  <li>✓ Fourchette de prix indicative</li>
                  <li>✓ Aucun engagement</li>
                </ul>
                
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3"
                  onClick={() => setQuoteType('instant')}
                >
                  Calculer maintenant
                </Button>
              </div>

              {/* Personalized Quote Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Devis Personnalisé
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Recevez un devis détaillé et précis adapté à votre projet spécifique.
                </p>
                
                <ul className="text-left space-y-2 mb-8 text-sm text-gray-600">
                  <li>✓ Devis détaillé sous 48h</li>
                  <li>✓ Visite technique gratuite</li>
                  <li>✓ Upload de photos/plans</li>
                  <li>✓ Conseils d'expert inclus</li>
                </ul>
                
                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3"
                  onClick={() => setQuoteType('personalized')}
                >
                  Demande personnalisée
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Instant Quote Form */}
      {quoteType === 'instant' && !showResult && (
        <section className="py-20 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Estimation Instantanée
                </h2>
                <p className="text-gray-600">Répondez à ces 3 questions pour obtenir votre estimation</p>
              </div>

              <form onSubmit={handleInstantSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    1. Type de travaux *
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={instantForm.workType}
                    onChange={(e) => setInstantForm(prev => ({ ...prev, workType: e.target.value }))}
                  >
                    <option value="">Sélectionnez le type de travaux</option>
                    {workTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    2. Surface à rénover *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex : 75 m²"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={instantForm.surface}
                    onChange={(e) => setInstantForm(prev => ({ ...prev, surface: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    3. Options supplémentaires (optionnel)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {optionsList.map(option => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                          checked={instantForm.options.includes(option)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setInstantForm(prev => ({
                                ...prev,
                                options: [...prev.options, option]
                              }));
                            } else {
                              setInstantForm(prev => ({
                                ...prev,
                                options: prev.options.filter(opt => opt !== option)
                              }));
                            }
                          }}
                        />
                        <span className="ml-2 text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setQuoteType(null)}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                  >
                    Calculer l'estimation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Personalized Quote Form */}
      {quoteType === 'personalized' && !showResult && (
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Devis Personnalisé
                </h2>
                <p className="text-gray-600">
                  Étape {currentStep} sur 4 - Décrivez votre projet en détail
                </p>
                
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handlePersonalizedSubmit} className="space-y-6">
                {currentStep === 1 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de travaux *
                    </label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={personalizedForm.workType}
                      onChange={(e) => setPersonalizedForm(prev => ({ ...prev, workType: e.target.value }))}
                    >
                      <option value="">Sélectionnez le type de travaux</option>
                      {workTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Surface et détails *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ex : 75 m²"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                      value={personalizedForm.surface}
                      onChange={(e) => setPersonalizedForm(prev => ({ ...prev, surface: e.target.value }))}
                    />
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description détaillée du projet *
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Décrivez votre projet : état actuel, travaux souhaités, contraintes, délais..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={personalizedForm.description}
                      onChange={(e) => setPersonalizedForm(prev => ({ ...prev, description: e.target.value }))}
                    />
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={personalizedForm.name}
                        onChange={(e) => setPersonalizedForm(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={personalizedForm.email}
                        onChange={(e) => setPersonalizedForm(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={personalizedForm.phone}
                        onChange={(e) => setPersonalizedForm(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Photos/Plans (optionnel)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <input
                          type="file"
                          multiple
                          accept=".jpg,.jpeg,.png,.pdf"
                          className="hidden"
                          id="file-upload"
                          onChange={handleFileUpload}
                        />
                        <label 
                          htmlFor="file-upload" 
                          className="cursor-pointer text-blue-500 hover:text-blue-600"
                        >
                          Cliquez pour uploader des fichiers
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          JPG, PNG, PDF (max 5MB par fichier)
                        </p>
                        {personalizedForm.files.length > 0 && (
                          <div className="mt-2">
                            <p className="text-sm text-green-600">
                              {personalizedForm.files.length} fichier(s) sélectionné(s)
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-4">
                  {currentStep > 1 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setCurrentStep(prev => prev - 1)}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Précédent
                    </Button>
                  )}
                  
                  {currentStep === 1 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setQuoteType(null)}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Retour
                    </Button>
                  )}

                  {currentStep < 4 ? (
                    <Button 
                      type="button" 
                      className="flex-1 bg-blue-500 hover:bg-blue-400 text-white font-semibold"
                      onClick={() => setCurrentStep(prev => prev + 1)}
                    >
                      Suivant
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="flex-1 bg-blue-500 hover:bg-blue-400 text-white font-semibold"
                    >
                      Envoyer la demande
                      <CheckCircle className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

const Quote = () => {
  return (
    <LanguageProvider>
      <QuoteContent />
    </LanguageProvider>
  );
};

export default Quote;
