import { useState } from 'react'
import MainHeader from '../components/MainHeader'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import { Button, Badge, SelectableCard, Stepper } from '../components/ui'

const HomePage = ({ onNavigateToWizard }) => {
  // Removed unused state since we navigate directly
  // const [selectedService, setSelectedService] = useState(null)
  // const [isNextEnabled, setIsNextEnabled] = useState(false)

  const services = [
    {
      id: 1,
      title: 'Fördermittelberatung',
      description: 'Professionelle Beratung zu verfügbaren Fördermitteln und Zuschüssen',
      icon: '💰',
      category: 'Förderung',
      hasFullConfigurator: true
    },
    {
      id: 2,
      title: 'Energieausweis Einfamilienhaus',
      description: 'Energieausweis für Ihr Einfamilienhaus nach aktuellen Standards',
      icon: '🏠',
      category: 'Energieausweis',
      hasFullConfigurator: true
    },
    {
      id: 3,
      title: 'Energieausweis Mehrfamilienhaus',
      description: 'Energieausweis für Mehrfamilienhäuser und größere Wohngebäude',
      icon: '🏢',
      category: 'Energieausweis',
      hasFullConfigurator: true
    },
    {
      id: 4,
      title: 'Hydraulischer Abgleich',
      description: 'Optimierung Ihrer Heizungsanlage für maximale Effizienz',
      icon: '🔧',
      category: 'Heizung',
      hasFullConfigurator: true
    },
    {
      id: 5,
      title: 'Heizungscheck 2.0',
      description: 'Umfassende Prüfung und Bewertung Ihrer Heizungsanlage',
      icon: '🌡️',
      category: 'Heizung',
      hasFullConfigurator: true
    },
    {
      id: 6,
      title: 'GEG-Beratung',
      description: 'Beratung zum Gebäudeenergiegesetz und dessen Anforderungen',
      icon: '⚖️',
      category: 'Beratung',
      hasFullConfigurator: true
    },
    {
      id: 7,
      title: 'Wohngebäude',
      description: 'Energieberatung für Wohngebäude aller Art',
      icon: '🏘️',
      category: 'Gebäude',
      hasFullConfigurator: true
    },
    {
      id: 8,
      title: 'Nicht Wohngebäude',
      description: 'Energieberatung für Gewerbe- und Industriegebäude',
      icon: '🏭',
      category: 'Gebäude',
      hasFullConfigurator: true
    },
    {
      id: 9,
      title: 'Denkmalschutz',
      description: 'Spezielle Energieberatung für denkmalgeschützte Gebäude',
      icon: '🏛️',
      category: 'Spezial',
      hasFullConfigurator: true
    },
    {
      id: 10,
      title: 'Heizlastberechnung',
      description: 'Präzise Berechnung des Heizwärmebedarfs Ihres Gebäudes',
      icon: '📊',
      category: 'Berechnung',
      hasFullConfigurator: true
    }
  ]

  const configuratorSteps = [
    { id: 1, title: 'Service wählen', description: 'Gewünschten Service auswählen' },
    { id: 2, title: 'Details angeben', description: 'Spezifische Informationen eingeben' },
    { id: 3, title: 'Angebot erhalten', description: 'Persönliches Angebot bekommen' }
  ]

  const handleServiceSelect = (service) => {
    // Direct navigation to wizard - no intermediate step needed
    if (onNavigateToWizard) {
      onNavigateToWizard(service.id)
    }
  }

  const categories = [...new Set(services.map(service => service.category))]

  return (
    <div className="min-h-screen bg-gray-50">
      <MainHeader />
      <main>
        <Hero />
        <Features />
        
        {/* Updated Configurator Section */}
        <section id="konfigurator" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Energieberatung Konfigurator
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Finden Sie in 3 einfachen Schritten die passende Energieberatung für Ihr Vorhaben
              </p>
            </div>

            <Stepper steps={configuratorSteps} currentStep={1} className="mb-12" />

            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Schritt 1: Wählen Sie Ihren gewünschten Service
                </h3>
                <p className="text-gray-600">
                  Welche Energieberatung benötigen Sie? Wählen Sie aus unseren spezialisierten Services.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {services.map((service) => (
                  <SelectableCard
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                        {service.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="mt-3">
                        <Badge 
                          variant={service.hasFullConfigurator ? "success" : "secondary"} 
                          size="sm"
                        >
                          {service.category}
                        </Badge>
                      </div>
                      <div className="mt-4 text-xs text-primary-600 font-medium">
                        Klicken um zu starten →
                      </div>
                    </div>
                  </SelectableCard>
                ))}
              </div>

              {/* Info Text */}
              <div className="text-center">
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Wählen Sie einfach den gewünschten Service aus und starten Sie direkt mit der Konfiguration. 
                  Bei Fragen stehen wir Ihnen gerne zur Verfügung.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage 