import { Button } from './ui'

const Hero = () => {
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
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Energieberater</span>{' '}
                <span className="block text-primary-600 xl:inline">Berlin Brandenburg</span>
              </h1>
              <h2 className="mt-2 text-2xl tracking-tight font-bold text-gray-700 sm:text-3xl">
                Professionelle Energieberatung für maximale Effizienz
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <strong>Zertifizierte Energieberatung</strong> für Ihr Zuhause in Berlin und Brandenburg. 
                Wir erstellen Ihren <strong>individuellen Sanierungsfahrplan (iSFP)</strong>, beraten zu 
                <strong>Wärmepumpen, Photovoltaik und BAFA-Förderungen</strong>. Bis zu 70% Energiekosten sparen!
              </p>
              
              {/* SEO-optimierte Feature-Liste */}
              <div className="mt-6 space-y-2 text-sm text-gray-600 sm:text-base lg:mx-0">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>dena-zertifizierte <strong>Energieberater</strong> vor Ort</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>KfW 458</strong> und <strong>BAFA-Förderung</strong> bis zu 15.000€</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Wärmepumpen-Beratung</strong> für Altbau & Neubau</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Energieausweis</strong> und <strong>Gebäudeenergiegesetz (GEG)</strong></span>
                </div>
              </div>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Button
                  size="xl"
                  onClick={scrollToConfigurator}
                >
                  Kostenlose Beratung starten
                </Button>
                <Button
                  variant="secondary"
                  size="xl"
                  onClick={scrollToFeatures}
                >
                  Leistungen entdecken
                </Button>
              </div>

              {/* Trust-Signale für SEO */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-gray-500 lg:justify-start sm:justify-center">
                <div className="flex items-center">
                  <span className="font-semibold text-primary-600 text-lg mr-1">5.0</span>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="ml-2">Google Bewertungen</span>
                </div>
                <div className="border-l border-gray-300 pl-6">
                  <span className="font-semibold">500+</span> erfolgreiche Projekte
                </div>
                <div className="border-l border-gray-300 pl-6">
                  <span className="font-semibold">ISO 9001</span> zertifiziert
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
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
          
          {/* Content Overlay mit SEO-Keywords */}
          <div className="absolute inset-0 flex items-end justify-center p-8">
            <div className="text-white text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm font-medium mb-1">Energieeffizienz & Nachhaltigkeit</div>
              <div className="text-xs opacity-90">Photovoltaik • Wärmepumpen • Gebäudesanierung</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 