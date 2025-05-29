import { useState } from 'react'

const Configurator = () => {
  const [selectedService, setSelectedService] = useState(null)
  const [isNextEnabled, setIsNextEnabled] = useState(false)

  const services = [
    {
      id: 1,
      title: 'Fördermittelberatung',
      description: 'Professionelle Beratung zu verfügbaren Fördermitteln und Zuschüssen',
      icon: '💰',
      category: 'Förderung'
    },
    {
      id: 2,
      title: 'Energieausweis Einfamilienhaus',
      description: 'Energieausweis für Ihr Einfamilienhaus nach aktuellen Standards',
      icon: '🏠',
      category: 'Energieausweis'
    },
    {
      id: 3,
      title: 'Energieausweis Mehrfamilienhaus',
      description: 'Energieausweis für Mehrfamilienhäuser und größere Wohngebäude',
      icon: '🏢',
      category: 'Energieausweis'
    },
    {
      id: 4,
      title: 'Hydraulischer Abgleich',
      description: 'Optimierung Ihrer Heizungsanlage für maximale Effizienz',
      icon: '🔧',
      category: 'Heizung'
    },
    {
      id: 5,
      title: 'Heizungscheck 2.0',
      description: 'Umfassende Prüfung und Bewertung Ihrer Heizungsanlage',
      icon: '🌡️',
      category: 'Heizung'
    },
    {
      id: 6,
      title: 'GEG-Beratung',
      description: 'Beratung zum Gebäudeenergiegesetz und dessen Anforderungen',
      icon: '📋',
      category: 'Beratung'
    },
    {
      id: 7,
      title: 'Wohngebäude',
      description: 'Energieberatung für Wohngebäude aller Art',
      icon: '🏘️',
      category: 'Gebäude'
    },
    {
      id: 8,
      title: 'Nicht Wohngebäude',
      description: 'Energieberatung für Gewerbe- und Industriegebäude',
      icon: '🏭',
      category: 'Gebäude'
    },
    {
      id: 9,
      title: 'Denkmalschutz',
      description: 'Spezielle Energieberatung für denkmalgeschützte Gebäude',
      icon: '🏛️',
      category: 'Spezial'
    },
    {
      id: 10,
      title: 'Heizlastberechnung',
      description: 'Präzise Berechnung des Heizwärmebedarfs Ihres Gebäudes',
      icon: '📊',
      category: 'Berechnung'
    }
  ]

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setIsNextEnabled(true)
  }

  const handleNext = () => {
    if (selectedService) {
      console.log('Gewählter Service:', selectedService)
      // Hier würde die Navigation zur nächsten Seite erfolgen
      alert(`Sie haben "${selectedService.title}" ausgewählt. Die nächste Seite ist noch in Entwicklung.`)
    }
  }

  const categories = [...new Set(services.map(service => service.category))]

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

        {/* Progress Indicator */}
        <div className="mt-8 mb-12">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full text-sm font-medium">
                1
              </div>
              <div className="ml-2 text-sm font-medium text-primary-600">Service wählen</div>
            </div>
            <div className="mx-4 w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-500 rounded-full text-sm font-medium">
                2
              </div>
              <div className="ml-2 text-sm font-medium text-gray-500">Details angeben</div>
            </div>
            <div className="mx-4 w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-500 rounded-full text-sm font-medium">
                3
              </div>
              <div className="ml-2 text-sm font-medium text-gray-500">Angebot erhalten</div>
            </div>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedService?.id === service.id
                  ? 'border-primary-500 bg-primary-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
              onClick={() => handleServiceSelect(service)}
            >
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {service.category}
                  </span>
                  {selectedService?.id === service.id && (
                    <div className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4 text-center">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-gray-900 text-center mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 text-center">
                  {service.description}
                </p>
              </div>

              {/* Selection Indicator */}
              {selectedService?.id === service.id && (
                <div className="absolute inset-0 rounded-lg ring-2 ring-primary-500 ring-opacity-50 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Selected Service Info */}
        {selectedService && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-2xl mr-4">{selectedService.icon}</div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{selectedService.title}</h4>
                  <p className="text-sm text-gray-500">{selectedService.description}</p>
                </div>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                Ausgewählt
              </span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleNext}
            disabled={!isNextEnabled}
            className={`w-full sm:w-auto px-8 py-3 rounded-md text-base font-medium transition-all duration-200 ${
              isNextEnabled
                ? 'bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Weiter zur Detailangabe
          </button>
          
          <button
            onClick={() => {
              setSelectedService(null)
              setIsNextEnabled(false)
            }}
            className="w-full sm:w-auto px-8 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Auswahl zurücksetzen
          </button>
        </div>
      </div>
    </div>
  )
}

export default Configurator 