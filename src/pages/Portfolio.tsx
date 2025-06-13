
import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Filter, MapPin, Calendar, Euro, Play } from 'lucide-react';

const PortfolioContent = () => {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'interior', label: 'Intérieur' },
    { id: 'exterior', label: 'Extérieur' },
    { id: 'energy', label: 'Énergie' },
    { id: 'construction', label: 'Construction' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Rénovation Appartement Uccle',
      category: 'interior',
      region: 'Bruxelles',
      budget: '45.000€',
      duration: '8 semaines',
      beforeImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
      afterImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
      gallery: [
        'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
        'https://images.unsplash.com/photo-1486718448742-163732cd1544',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625'
      ],
      description: 'Transformation complète d\'un appartement 3 chambres avec cuisine ouverte et salle de bain moderne.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      featured: true
    },
    {
      id: 2,
      title: 'Maison Passive Namur',
      category: 'energy',
      region: 'Wallonie',
      budget: '85.000€',
      duration: '12 semaines',
      beforeImage: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302',
      afterImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
      gallery: [
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
        'https://images.unsplash.com/photo-1460574283810-2aab119d8511'
      ],
      description: 'Rénovation énergétique complète pour atteindre le standard passif.',
      featured: true
    },
    {
      id: 3,
      title: 'Extension Maison Gand',
      category: 'construction',
      region: 'Flandre',
      budget: '65.000€',
      duration: '10 semaines',
      beforeImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      afterImage: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
      gallery: [
        'https://images.unsplash.com/photo-1486718448742-163732cd1544',
        'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742'
      ],
      description: 'Extension 35m² avec suite parentale et terrasse couverte.',
      featured: false
    },
    {
      id: 4,
      title: 'Ravalement Façade Liège',
      category: 'exterior',
      region: 'Wallonie',
      budget: '25.000€',
      duration: '6 semaines',
      beforeImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
      afterImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      gallery: [
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
        'https://images.unsplash.com/photo-1486718448742-163732cd1544'
      ],
      description: 'Ravalement complet avec isolation par l\'extérieur.',
      featured: false
    },
    {
      id: 5,
      title: 'Loft Industriel Anvers',
      category: 'interior',
      region: 'Flandre',
      budget: '75.000€',
      duration: '14 semaines',
      beforeImage: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
      afterImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
      gallery: [
        'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
        'https://images.unsplash.com/photo-1487252665478-49b61b47f302',
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742'
      ],
      description: 'Aménagement d\'un loft de 120m² avec verrière et mezzanine.',
      featured: false
    },
    {
      id: 6,
      title: 'Villa Contemporaine Waterloo',
      category: 'construction',
      region: 'Bruxelles',
      budget: '350.000€',
      duration: '24 semaines',
      beforeImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
      afterImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      gallery: [
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
        'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
        'https://images.unsplash.com/photo-1486718448742-163732cd1544'
      ],
      description: 'Construction neuve villa 4 façades avec piscine.',
      featured: false
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Notre Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Découvrez nos réalisations à travers la Belgique. 
              Plus de 150 projets menés à bien depuis 2009.
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Projets à la Une
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="relative h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.afterImage})` }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  {project.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button 
                        className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4"
                        onClick={() => window.open(project.videoUrl, '_blank')}
                      >
                        <Play className="w-8 h-8" />
                      </Button>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded font-semibold text-sm">
                    Projet phare
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.region}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Euro className="w-4 h-4 mr-1" />
                      {project.budget}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.duration}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    Voir les détails
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                className={selectedFilter === filter.id ? "bg-yellow-500 text-black hover:bg-yellow-400" : ""}
                onClick={() => setSelectedFilter(filter.id)}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: `url(${project.afterImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{project.region}</span>
                    <span className="text-sm font-medium text-yellow-600">{project.budget}</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">{project.title}</h2>
                      <Button 
                        variant="outline" 
                        onClick={() => setSelectedProject(null)}
                      >
                        ✕
                      </Button>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      {project.gallery.map((image, index) => (
                        <div key={index} className="h-48 rounded-lg overflow-hidden">
                          <div 
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${image})` }}
                          />
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Détails du projet</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Région :</span>
                            <span>{project.region}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Budget :</span>
                            <span>{project.budget}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Durée :</span>
                            <span>{project.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

const Portfolio = () => {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
};

export default Portfolio;
