import { useState } from 'react'
import { Button } from './ui'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="text-2xl font-bold text-primary-600">
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
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Features
            </a>
            <a href="#konfigurator" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Konfigurator
            </a>
            <button 
              onClick={scrollToDemo}
              className="text-base font-medium text-primary-600 hover:text-primary-700"
            >
              Design Demo
            </button>
            <a href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Über uns
            </a>
            <a href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Kontakt
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button
              onClick={scrollToConfigurator}
            >
              Jetzt starten
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
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#features" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Features
                  </a>
                  <a href="#konfigurator" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Konfigurator
                  </a>
                  <button 
                    onClick={handleMobileDemoClick}
                    className="text-left text-base font-medium text-primary-600 hover:text-primary-700"
                  >
                    Design Demo
                  </button>
                  <a href="#about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Über uns
                  </a>
                  <a href="#contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
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
                Jetzt starten
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header 