import { useState } from 'react'
import { Button, Icon } from './ui'

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [miniConfigStep, setMiniConfigStep] = useState(1)
  const [showMiniConfig, setShowMiniConfig] = useState(false)

  const scrollToConfigurator = () => {
    const configuratorElement = document.getElementById('konfigurator')
    if (configuratorElement) {
      configuratorElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  const scrollToDemo = () => {
    const demoElement = document.getElementById('design-demo')
    if (demoElement) {
      demoElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleMobileConfiguratorClick = () => {
    setIsMenuOpen(false)
    scrollToConfigurator()
  }

  const handleMobileDemoClick = () => {
    setIsMenuOpen(false)
    scrollToDemo()
  }

  const handleMiniConfigNext = () => {
    if (miniConfigStep < 3) {
      setMiniConfigStep(miniConfigStep + 1)
    } else {
      // Complete mini config and scroll to main configurator
      setShowMiniConfig(false)
      setMiniConfigStep(1)
      scrollToConfigurator()
    }
  }

  const miniConfigContent = {
    1: {
      title: "Ihr Gebäude?",
      options: ["Einfamilienhaus", "Mehrfamilienhaus", "Gewerbe"]
    },
    2: {
      title: "Baujahr?", 
      options: ["vor 1970", "1970-1990", "1990-2010", "nach 2010"]
    },
    3: {
      title: "Hauptinteresse?",
      options: ["Wärmepumpe", "Photovoltaik", "Dämmung", "Komplettsanierung"]
    }
  }

  return (
    <header className="bg-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="text-2xl font-bold text-primary-600">
              Energiesparkompass
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Menü öffnen</span>
              <Icon name="menu" size="lg" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:flex-1 lg:justify-center">
            <a href="#features" className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors">
              Leistungen
            </a>
            <a href="#konfigurator" className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors">
              Beratung
            </a>
            <button 
              onClick={scrollToDemo}
              className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Referenzen
            </button>
            <a href="#about" className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors">
              Über uns
            </a>
            <a href="#contact" className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors">
              Kontakt
            </a>
          </nav>

          {/* Right Side: Mini Configurator + CTA */}
          <div className="hidden lg:flex items-center justify-end lg:w-0 lg:flex-1 space-x-4">
            {/* Mini Configurator Widget */}
            <div className="relative">
              <button
                onClick={() => setShowMiniConfig(!showMiniConfig)}
                className="bg-primary-50 text-primary-700 border border-primary-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors flex items-center space-x-2"
              >
                <Icon name="lightning" size="sm" />
                <span>Schnell-Check</span>
                <Icon name="chevron-down" size="sm" />
              </button>

              {/* Mini Configurator Dropdown */}
              {showMiniConfig && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Energieberatung in 30 Sekunden</h3>
                    <p className="text-sm text-gray-600">Schritt {miniConfigStep} von 3</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-base font-medium text-gray-800 mb-3">
                      {miniConfigContent[miniConfigStep].title}
                    </h4>
                    <div className="space-y-2">
                      {miniConfigContent[miniConfigStep].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={handleMiniConfigNext}
                          className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          className={`w-2 h-2 rounded-full ${
                            step <= miniConfigStep ? 'bg-primary-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => setShowMiniConfig(false)}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Schließen
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Main CTA Button */}
            <Button
              onClick={scrollToConfigurator}
              className="shadow-lg"
            >
              Beratung anfragen
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary-600">
                  Energiesparkompass
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Menü schließen</span>
                    <Icon name="close" size="lg" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#features" className="text-base font-medium text-gray-900 hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                    Leistungen
                  </a>
                  <a href="#konfigurator" className="text-base font-medium text-gray-900 hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                    Beratung
                  </a>
                  <button 
                    onClick={handleMobileDemoClick}
                    className="text-left text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Referenzen
                  </button>
                  <a href="#about" className="text-base font-medium text-gray-900 hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                    Über uns
                  </a>
                  <a href="#contact" className="text-base font-medium text-gray-900 hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                    Kontakt
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <Button
                fullWidth
                onClick={handleMobileConfiguratorClick}
              >
                Beratung anfragen
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default MainHeader 