import { Button } from './ui'
import { useState } from 'react'

const Hero = () => {
  const [activeHotspot, setActiveHotspot] = useState(null)

  const scrollToConfigurator = () => {
    const configuratorElement = document.getElementById('konfigurator')
    if (configuratorElement) {
      configuratorElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      // Fallback: scroll to bottom if element not found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  const scrollToFeatures = () => {
    const featuresElement = document.getElementById('features')
    if (featuresElement) {
      featuresElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const hotspots = [
    {
      id: 'solar',
      position: { 
        // Desktop - Solaranlage auf dem Dach
        desktop: { top: '15%', left: '45%' },
        // Tablet
        tablet: { top: '12%', left: '42%' },
        // Mobile
        mobile: { top: '10%', left: '40%' }
      },
      title: 'Photovoltaik',
      description: 'Moderne Solaranlage mit bis zu 30% Eigenverbrauch',
      details: 'Bis zu 15.000€ Förderung möglich'
    },
    {
      id: 'envelope',
      position: { 
        // Desktop - Gebäudehülle am Hauptgebäude
        desktop: { top: '45%', left: '25%' },
        tablet: { top: '45%', left: '28%' },
        mobile: { top: '40%', left: '30%' }
      },
      title: 'Gebäudehülle',
      description: 'Optimale Dämmung für maximale Energieeffizienz',
      details: 'KfW-Effizienzhaus Standard'
    },
    {
      id: 'windows',
      position: { 
        // Desktop - Große Glasflächen in der Mitte
        desktop: { top: '65%', left: '40%' },
        tablet: { top: '60%', left: '38%' },
        mobile: { top: '55%', left: '35%' }
      },
      title: 'Fenster & Türen',
      description: '3-fach Verglasung mit Wärmeschutz',
      details: 'Bis zu 40% weniger Wärmeverluste'
    },
    {
      id: 'heating',
      position: { 
        // Desktop - Wärmepumpe rechts am Haus
        desktop: { top: '75%', left: '80%' },
        tablet: { top: '70%', left: '75%' },
        mobile: { top: '65%', left: '70%' }
      },
      title: 'Wärmepumpe',
      description: 'Effiziente Luft-Wasser-Wärmepumpe',
      details: 'Bis zu 70% BAFA-Förderung'
    }
  ]

  // Helper function to get responsive position
  const getResponsivePosition = (hotspot) => {
    // Use CSS custom properties for responsive positioning
    return {
      '--desktop-top': hotspot.position.desktop.top,
      '--desktop-left': hotspot.position.desktop.left,
      '--tablet-top': hotspot.position.tablet.top,
      '--tablet-left': hotspot.position.tablet.left,
      '--mobile-top': hotspot.position.mobile.top,
      '--mobile-left': hotspot.position.mobile.left
    }
  }

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-heading font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                <span className="block xl:inline">Energieberater</span>{' '}
                <span className="block text-primary-600 xl:inline">Berlin Brandenburg</span>
              </h1>
              <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl tracking-tight font-heading font-semibold text-gray-700 leading-snug">
                Professionelle Energieberatung für maximale Effizienz
              </h2>
              <p className="mt-4 text-base text-gray-600 sm:mt-6 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0 leading-relaxed font-normal">
                <strong className="font-semibold">Zertifizierte Energieberatung</strong> für Ihr Zuhause in Berlin und Brandenburg. 
                Wir erstellen Ihren <strong className="font-semibold">individuellen Sanierungsfahrplan (iSFP)</strong>, beraten zu 
                <strong className="font-semibold">Wärmepumpen, Photovoltaik und BAFA-Förderungen</strong>. Bis zu 70% Energiekosten sparen!
              </p>
              
              {/* SEO-optimierte Feature-Liste */}
              <div className="mt-8 space-y-3 text-sm text-gray-600 sm:text-base lg:mx-0">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">dena-zertifizierte <strong className="font-semibold text-gray-800">Energieberater</strong> vor Ort</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium"><strong className="font-semibold text-gray-800">KfW 458</strong> und <strong className="font-semibold text-gray-800">BAFA-Förderung</strong> bis zu 15.000€</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium"><strong className="font-semibold text-gray-800">Wärmepumpen-Beratung</strong> für Altbau & Neubau</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium"><strong className="font-semibold text-gray-800">Energieausweis</strong> und <strong className="font-semibold text-gray-800">Gebäudeenergiegesetz (GEG)</strong></span>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  onClick={scrollToConfigurator}
                  className="font-semibold"
                >
                  Kostenlose Beratung starten
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={scrollToFeatures}
                  className="font-medium"
                >
                  Leistungen entdecken
                </Button>
              </div>

              {/* Trust-Signale für SEO */}
              <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-gray-500 lg:justify-start sm:justify-center">
                <div className="flex items-center">
                  <span className="font-bold text-primary-600 text-2xl mr-2">5.0</span>
                  <div className="flex text-yellow-400 mr-2">
                    {'★'.repeat(5)}
                  </div>
                  <span className="font-medium">Google Bewertungen</span>
                </div>
                <div className="border-l border-gray-300 pl-8">
                  <span className="font-bold text-gray-800">500+</span> <span className="font-medium">erfolgreiche Projekte</span>
                </div>
                <div className="border-l border-gray-300 pl-8">
                  <span className="font-bold text-gray-800">ISO 9001</span> <span className="font-medium">zertifiziert</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Rechte Seite mit Bild und interaktiven Hotspots */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div 
          className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/images/hero1.png')`
          }}
          role="img"
          aria-label="Modernes Haus mit Solaranlage und Wärmepumpe - Energieeffiziente Gebäudetechnik"
        >
          {/* Grüne Maske/Overlay für professionellen Look */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 to-primary-700/70"></div>
          
          {/* Optional: Subtle pattern overlay für mehr Textur */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
          
          {/* Interactive Hotspots - Hide on very small screens */}
          <div className="hidden sm:block">
            {hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 hotspot-responsive"
                style={{
                  ...getResponsivePosition(hotspot),
                  top: 'var(--mobile-top)',
                  left: 'var(--mobile-left)'
                }}
              >
                {/* Pulsierender Dot */}
                <div 
                  className="relative cursor-pointer"
                  onMouseEnter={() => setActiveHotspot(hotspot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  {/* Pulsing Animation */}
                  <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-ping opacity-75"></div>
                  <div className="relative w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full border-2 border-primary-500 shadow-lg">
                    <div className="absolute inset-1 bg-primary-500 rounded-full"></div>
                  </div>
                  
                  {/* Tooltip */}
                  {activeHotspot === hotspot.id && (
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 z-30">
                      <div className="bg-white rounded-lg shadow-2xl p-3 sm:p-4 border border-gray-200">
                        <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                          {hotspot.title}
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          {hotspot.description}
                        </div>
                        <div className="text-xs text-primary-600 font-medium">
                          {hotspot.details}
                        </div>
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Content Overlay mit SEO-Keywords */}
          <div className="absolute inset-0 flex items-end justify-center p-8">
            <div className="text-white text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm font-medium mb-1">Energieeffizienz & Nachhaltigkeit</div>
              <div className="text-xs opacity-90">Photovoltaik • Wärmepumpen • Gebäudesanierung</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS-in-JS replacement with regular classes */}
      <style>
        {`
        @media (min-width: 640px) and (max-width: 1023px) {
          .hotspot-responsive {
            top: var(--tablet-top) !important;
            left: var(--tablet-left) !important;
          }
        }
        
        @media (min-width: 1024px) {
          .hotspot-responsive {
            top: var(--desktop-top) !important;
            left: var(--desktop-left) !important;
          }
        }
        `}
      </style>
    </div>
  )
}

export default Hero 