import { useState, useEffect } from 'react'
import { Button } from '../components/ui'
import Navigation from '../components/Navigation'
import { servicesById } from '../constants/services'
import ServiceIcon from '../utils/serviceIcons'
import FundingWizard from '../components/FundingWizard'
import EnergyPassWizard from '../components/EnergyPassWizard'
import MultiEnergyPassWizard from '../components/MultiEnergyPassWizard'
import HydraulicBalancingWizard from '../components/HydraulicBalancingWizard'
import HeatingCheckWizard from '../components/HeatingCheckWizard'
import GegWizard from '../components/GegWizard'
import ResidentialEnergyWizard from '../components/ResidentialEnergyWizard'
import NonResidentialEnergyWizard from '../components/NonResidentialEnergyWizard'
import MonumentEnergyWizard from '../components/MonumentEnergyWizard'
import HeatLoadCalculationWizard from '../components/HeatLoadCalculationWizard'

const WizardPage = ({ selectedService, onBackToMain }) => {
  const [currentStep, setCurrentStep] = useState(1)

  const service = servicesById[selectedService] || servicesById[1]

  // Custom navigation items for wizard page
  const wizardNavItems = [
    { href: "/", label: "Startseite", type: "link" },
    { href: "#", label: service.title, type: "button", onClick: () => {} }, // Current service (inactive)
    { href: "#contact", label: "Hilfe", type: "link" }
  ]

  // Handle back to main site
  const handleBackToMain = () => {
    if (onBackToMain) {
      onBackToMain()
    } else {
      // Fallback: go to homepage
      window.location.href = '/'
    }
  }

  // Render the appropriate wizard based on selected service
  const renderWizard = () => {
    const commonProps = {
      onBack: handleBackToMain,
      onComplete: (data) => {
        console.log('Wizard completed with data:', data)
        // Handle wizard completion - could send to backend, show success page, etc.
      }
    }

    switch (selectedService) {
      case 1:
        return <FundingWizard {...commonProps} />
      case 2:
        return <EnergyPassWizard {...commonProps} />
      case 3:
        return <MultiEnergyPassWizard {...commonProps} />
      case 4:
        return <HydraulicBalancingWizard {...commonProps} />
      case 5:
        return <HeatingCheckWizard {...commonProps} />
      case 6:
        return <GegWizard {...commonProps} />
      case 7:
        return <ResidentialEnergyWizard {...commonProps} />
      case 8:
        return <NonResidentialEnergyWizard {...commonProps} />
      case 9:
        return <MonumentEnergyWizard {...commonProps} />
      case 10:
        return <HeatLoadCalculationWizard {...commonProps} />
      default:
        return (
          <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <div className="flex justify-center mb-6">
                                     <ServiceIcon 
                     serviceId={service.id} 
                     size={72} 
                     weight="duotone"
                   />
                </div>
                <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {service.description}
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Konfigurator in Entwicklung
                  </h3>
                  <p className="text-blue-700">
                    Der spezielle Konfigurator für "{service.title}" wird gerade entwickelt. 
                    Kontaktieren Sie uns für eine persönliche Beratung.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => window.open('tel:+49123456789', '_self')}
                    className="font-semibold"
                  >
                    Jetzt anrufen
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.open('mailto:info@energiesparkompass.de', '_self')}
                    className="font-medium"
                  >
                    E-Mail senden
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleBackToMain}
                    className="font-medium"
                  >
                    Zurück zur Startseite
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal Navigation for Wizard Flow */}
      <Navigation 
        customNavItems={wizardNavItems}
        showQuickCheck={false}
        ctaText="Hilfe"
        ctaAction={() => window.open('tel:+49123456789', '_self')}
        className="border-b border-gray-200"
      />
      
      {/* Progress Indicator */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackToMain}
                className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Zurück
              </button>
              <div className="flex items-center space-x-2">
                <ServiceIcon 
                  serviceId={service.id} 
                  size={24} 
                  weight="duotone"
                />
                <h1 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Schritt {currentStep} von 3
            </div>
          </div>
        </div>
      </div>

      {/* Wizard Content */}
      <main className="flex-1">
        {renderWizard()}
      </main>
    </div>
  )
}

export default WizardPage 