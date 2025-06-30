import { useState } from 'react'
import { Button, Badge, SelectableCard, Alert, Stepper } from './ui'
import { services } from '../constants/services'
import ServiceIcon from '../utils/serviceIcons'
import FundingWizard from './FundingWizard'
import EnergyPassWizard from './EnergyPassWizard'
import MultiEnergyPassWizard from './MultiEnergyPassWizard'
import HydraulicBalancingWizard from './HydraulicBalancingWizard'
import HeatingCheckWizard from './HeatingCheckWizard'
import GegWizard from './GegWizard'
import ResidentialEnergyWizard from './ResidentialEnergyWizard'
import NonResidentialEnergyWizard from './NonResidentialEnergyWizard'
import MonumentEnergyWizard from './MonumentEnergyWizard'
import HeatLoadCalculationWizard from './HeatLoadCalculationWizard'

const Configurator = () => {
  const [selectedService, setSelectedService] = useState(null)
  const [isNextEnabled, setIsNextEnabled] = useState(false)
  const [showServiceFlow, setShowServiceFlow] = useState(false)

  const configuratorSteps = [
    { id: 1, title: 'Service wählen', description: 'Gewünschten Service auswählen' },
    { id: 2, title: 'Details angeben', description: 'Spezifische Informationen eingeben' },
    { id: 3, title: 'Angebot erhalten', description: 'Persönliches Angebot bekommen' }
  ]

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setIsNextEnabled(true)
  }

  const handleNext = () => {
    if (selectedService) {
      console.log('Gewählter Service:', selectedService)
      setShowServiceFlow(true)
    }
  }

  const handleBackToSelection = () => {
    setShowServiceFlow(false)
    setSelectedService(null)
    setIsNextEnabled(false)
  }

  const categories = [...new Set(services.map(service => service.category))]

  // If service flow is active, show the appropriate component
  if (showServiceFlow && selectedService) {
    switch (selectedService.id) {
      case 1: // Fördermittelberatung
        return <FundingWizard onBack={handleBackToSelection} />
      case 2: // Energieausweis Einfamilienhaus
        return <EnergyPassWizard onBack={handleBackToSelection} />
      case 3: // Energieausweis Mehrfamilienhaus
        return <MultiEnergyPassWizard onBack={handleBackToSelection} />
      case 4: // Hydraulischer Abgleich
        return <HydraulicBalancingWizard onBack={handleBackToSelection} />
      case 5: // Heizungscheck 2.0
        return <HeatingCheckWizard onBack={handleBackToSelection} />
      case 6: // GEG-Beratung
        return <GegWizard onBack={handleBackToSelection} />
      case 7: // Wohngebäude
        return <ResidentialEnergyWizard onBack={handleBackToSelection} />
      case 8: // Nicht Wohngebäude
        return <NonResidentialEnergyWizard onBack={handleBackToSelection} />
      case 9: // Denkmalschutz
        return <MonumentEnergyWizard onBack={handleBackToSelection} />
      case 10: // Heizlastberechnung
        return <HeatLoadCalculationWizard onBack={handleBackToSelection} />
      default:
        return (
          <div className="py-16 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <Button 
                  variant="link"
                  onClick={handleBackToSelection}
                  className="group"
                >
                  <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Zurück zur Service-Auswahl
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-12">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                                         <ServiceIcon 
                       serviceId={selectedService.id} 
                       size={72} 
                       weight="duotone"
                     />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedService.title}</h1>
                  <p className="text-xl text-gray-600 mb-8">{selectedService.description}</p>
                </div>
                
                <Alert variant="info" title="Konfigurator in Entwicklung">
                  Der spezielle Konfigurator für "{selectedService.title}" ist noch in Entwicklung. 
                  Kontaktieren Sie uns gerne direkt für eine persönliche Beratung.
                </Alert>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => window.open('tel:+49123456789', '_self')}
                  >
                    📞 Jetzt anrufen
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('mailto:info@energiesparkompass.de', '_self')}
                  >
                    ✉️ E-Mail senden
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div id="konfigurator" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            Konfigurator
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welchen Service benötigen Sie?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Wählen Sie den gewünschten Service aus, um eine maßgeschneiderte Beratung zu erhalten.
          </p>
        </div>

        {/* Progress Stepper */}
        <div className="mt-8">
          <Stepper 
            steps={configuratorSteps} 
            currentStep={1}
            className="mb-4"
          />
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <SelectableCard
              key={service.id}
              icon={<ServiceIcon serviceId={service.id} size={40} weight="duotone" />}
              title={service.title}
              description={service.description}
              isSelected={selectedService?.id === service.id}
              onClick={() => handleServiceSelect(service)}
              variant="default"
            >
              {/* Category Badge */}
              <div className="mt-4 flex flex-col items-center space-y-2">
                <Badge variant="default" size="sm">
                  {service.category}
                </Badge>
                
                {/* Special Badge for completed flows */}
                {service.hasFullConfigurator && (
                  <Badge variant="success" size="sm">
                    ✨ Vollständiger Konfigurator
                  </Badge>
                )}
              </div>
            </SelectableCard>
          ))}
        </div>

        {/* Selected Service Info */}
        {selectedService && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-4">
                                     <ServiceIcon 
                     serviceId={selectedService.id} 
                     size={32} 
                     weight="duotone"
                   />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{selectedService.title}</h4>
                  <p className="text-sm text-gray-500">{selectedService.description}</p>
                </div>
              </div>
              <Badge variant="primary">
                Ausgewählt
              </Badge>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleNext}
            disabled={!isNextEnabled}
          >
            {selectedService?.hasFullConfigurator ? 'Konfigurator starten' : 'Weiter zur Detailangabe'}
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              setSelectedService(null)
              setIsNextEnabled(false)
            }}
          >
            Auswahl zurücksetzen
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Configurator