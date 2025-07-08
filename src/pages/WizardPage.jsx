import { useState, useEffect } from 'react'
import { Button } from '../components/ui'
import Navigation from '../components/Navigation'
import { servicesById } from '../constants/services'
import ServiceIcon from '../utils/serviceIcons'
import FundingWizard from '../components/FundingWizard'
import OptimizedFundingWizard from '../components/OptimizedFundingWizard'
import ModernFundingWizard from '../components/ModernFundingWizard'
import EnergyPassWizard from '../components/EnergyPassWizard'
import OptimizedEnergyPassWizard from '../components/OptimizedEnergyPassWizard'
import ModernEnergyPassWizard from '../components/ModernEnergyPassWizard'
import MultiEnergyPassWizard from '../components/MultiEnergyPassWizard'
import OptimizedMultiEnergyPassWizard from '../components/OptimizedMultiEnergyPassWizard'
import ModernMultiEnergyPassWizard from '../components/ModernMultiEnergyPassWizard'
import HydraulicBalancingWizard from '../components/HydraulicBalancingWizard'
import OptimizedHeatingCheckWizard from '../components/OptimizedHeatingCheckWizard'
import ModernHeatingCheckWizard from '../components/ModernHeatingCheckWizard'
import GegWizard from '../components/GegWizard'
import OptimizedGegWizard from '../components/OptimizedGegWizard'
import ModernGegWizard from '../components/ModernGegWizard'
import OptimizedHydraulicBalancingWizard from '../components/OptimizedHydraulicBalancingWizard'
import ModernHydraulicBalancingWizard from '../components/ModernHydraulicBalancingWizard'
import OptimizedResidentialEnergyWizard from '../components/OptimizedResidentialEnergyWizard'
import ModernResidentialEnergyWizard from '../components/ModernResidentialEnergyWizard'
import OptimizedNonResidentialEnergyWizard from '../components/OptimizedNonResidentialEnergyWizard'
import ModernNonResidentialEnergyWizard from '../components/ModernNonResidentialEnergyWizard'
import OptimizedMonumentEnergyWizard from '../components/OptimizedMonumentEnergyWizard'
import ModernMonumentEnergyWizard from '../components/ModernMonumentEnergyWizard'
import OptimizedHeatLoadCalculationWizard from '../components/OptimizedHeatLoadCalculationWizard'
import ModernHeatLoadCalculationWizard from '../components/ModernHeatLoadCalculationWizard'

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
        return <ModernFundingWizard {...commonProps} />
      case 2:
        return <ModernEnergyPassWizard {...commonProps} />
      case 3:
        return <ModernMultiEnergyPassWizard {...commonProps} />
      case 4:
        return <ModernHydraulicBalancingWizard {...commonProps} />
      case 5:
        return <ModernHeatingCheckWizard {...commonProps} />
      case 6:
        return <ModernGegWizard {...commonProps} />
      case 7:
        return <ModernResidentialEnergyWizard {...commonProps} />
      case 8:
        return <ModernNonResidentialEnergyWizard {...commonProps} />
      case 9:
        return <ModernMonumentEnergyWizard {...commonProps} />
      case 10:
        return <ModernHeatLoadCalculationWizard {...commonProps} />
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
      
      {/* Wizard Content */}
      <main className="flex-1">
        {renderWizard()}
      </main>
    </div>
  )
}

export default WizardPage 