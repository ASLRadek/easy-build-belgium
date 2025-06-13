
import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Lock, 
  FileText, 
  MessageCircle, 
  Calendar, 
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

const ClientSpaceContent = () => {
  const { t } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  // Mock client data
  const clientData = {
    name: 'Jean Dupont',
    email: 'jean.dupont@email.com',
    phone: '+32 123 456 789',
    project: {
      title: 'Rénovation Cuisine',
      status: 'En cours',
      progress: 65,
      startDate: '15/01/2024',
      endDate: '15/03/2024'
    },
    documents: [
      { name: 'Devis_Cuisine_2024.pdf', type: 'Devis', date: '10/01/2024' },
      { name: 'Facture_Acompte.pdf', type: 'Facture', date: '20/01/2024' },
      { name: 'Plans_3D.pdf', type: 'Plans', date: '25/01/2024' }
    ],
    timeline: [
      { date: '15/01/2024', title: 'Démarrage des travaux', status: 'completed' },
      { date: '20/01/2024', title: 'Démolition cuisine', status: 'completed' },
      { date: '01/02/2024', title: 'Électricité et plomberie', status: 'completed' },
      { date: '15/02/2024', title: 'Installation cuisine', status: 'current' },
      { date: '01/03/2024', title: 'Peinture et finitions', status: 'pending' },
      { date: '15/03/2024', title: 'Livraison finale', status: 'pending' }
    ]
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginForm);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginForm({ email: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen">
        <Header />
        
        <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8 text-gray-900">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-black" />
                </div>
                <h1 className="text-2xl font-bold mb-2">Espace Client</h1>
                <p className="text-gray-600">Connectez-vous pour accéder à votre projet</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3">
                  <Lock className="w-4 h-4 mr-2" />
                  Se connecter
                </Button>
              </form>

              <div className="mt-6 text-center">
                <a href="#" className="text-sm text-yellow-600 hover:text-yellow-500">
                  Mot de passe oublié ?
                </a>
              </div>

              <div className="mt-8 bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 text-center">
                  Vous n'avez pas encore de compte ? 
                  <br />Vos identifiants vous sont envoyés après signature du devis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Welcome Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Bonjour {clientData.name} !
              </h1>
              <p className="text-gray-600">
                Bienvenue dans votre espace client personnel
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Se déconnecter
            </Button>
          </div>
        </div>
      </section>

      {/* Project Status */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{clientData.project.title}</h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {clientData.project.status}
              </span>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progression</span>
                <span className="text-sm text-gray-500">{clientData.project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${clientData.project.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Date de début :</span>
                <span className="ml-2 font-medium">{clientData.project.startDate}</span>
              </div>
              <div>
                <span className="text-gray-500">Date de fin prévue :</span>
                <span className="ml-2 font-medium">{clientData.project.endDate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Timeline */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Étapes du projet</h3>
              
              <div className="space-y-4">
                {clientData.timeline.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === 'completed' ? 'bg-green-500' :
                      step.status === 'current' ? 'bg-blue-500' :
                      'bg-gray-300'
                    }`}>
                      {step.status === 'completed' ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : step.status === 'current' ? (
                        <Clock className="w-4 h-4 text-white" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className={`font-medium ${
                          step.status === 'current' ? 'text-blue-600' : 'text-gray-900'
                        }`}>
                          {step.title}
                        </h4>
                        <span className="text-sm text-gray-500">{step.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Documents</h3>
              
              <div className="space-y-3">
                {clientData.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-gray-500 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.type} - {doc.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
              
              <div className="space-y-4">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Planifier RDV
                </Button>
                
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Support
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Actions rapides</h3>
              
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-left">
                  Télécharger tous les documents
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  Modifier mes informations
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  Historique des échanges
                </Button>
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Chef de projet</h4>
              <p className="text-sm text-gray-600 mb-2">Jean Van Berg</p>
              <p className="text-sm text-gray-600">+32 456 789 123</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const ClientSpace = () => {
  return (
    <LanguageProvider>
      <ClientSpaceContent />
    </LanguageProvider>
  );
};

export default ClientSpace;
