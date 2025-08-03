import { useState, useEffect } from 'react'
import { Button, Icon } from './ui'
import { sendQuickCheckEmails } from '../services/emailService'

const Navigation = ({ 
  showQuickCheck = true,
  ctaText = "Beratung",
  ctaAction = null,
  customNavItems = null,
  className = "",
  onNavigateToHeizungscheck = null,
  onNavigateToEnergie = null,
  onNavigateToHydraulisch = null,
  onNavigateToEnergieausweis = null,
  onNavigateToFoerder = null
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)
  const [miniConfigStep, setMiniConfigStep] = useState(1)
  const [showMiniConfig, setShowMiniConfig] = useState(false)
  const [configData, setConfigData] = useState({
    building: '',
    year: '',
    interest: '',
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const defaultScrollToConfigurator = () => {
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

  const handleCTAClick = () => {
    if (ctaAction) {
      ctaAction()
    } else {
      defaultScrollToConfigurator()
    }
  }

  const handleMobileConfiguratorClick = () => {
    setIsMenuOpen(false)
    defaultScrollToConfigurator()
  }

  const handleOptionSelect = (value) => {
    const stepKeys = ['building', 'year', 'interest']
    const currentKey = stepKeys[miniConfigStep - 1]
    
    setConfigData(prev => ({
      ...prev,
      [currentKey]: value
    }))

    // Move to next step
    if (miniConfigStep < 4) {
      setMiniConfigStep(miniConfigStep + 1)
    }
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create submission object
      const submission = {
        id: Date.now().toString(),
        name: configData.name,
        email: configData.email,
        phone: configData.phone,
        building: configData.building,
        year: configData.year,
        interest: configData.interest,
        status: 'new',
        submittedAt: new Date().toISOString()
      }

      // Save to localStorage for admin dashboard
      const existingSubmissions = JSON.parse(localStorage.getItem('quickCheckSubmissions') || '[]')
      existingSubmissions.push(submission)
      localStorage.setItem('quickCheckSubmissions', JSON.stringify(existingSubmissions))

      // Send emails using the email service
      await sendQuickCheckData(configData)
      
      setIsCompleted(true)
      
      // Reset after 3 seconds
      setTimeout(() => {
        setShowMiniConfig(false)
        setMiniConfigStep(1)
        setIsCompleted(false)
        setConfigData({
          building: '',
          year: '',
          interest: '',
          name: '',
          email: '',
          phone: ''
        })
      }, 3000)
      
    } catch (error) {
      console.error('Error sending quick check data:', error)
      alert('Fehler beim Senden. Bitte versuchen Sie es erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Email sending function
  const sendQuickCheckData = async (data) => {
    try {
      // Send emails using the email service
      await sendQuickCheckEmails(data)
      return { success: true }
    } catch (error) {
      console.error('Error sending quick check emails:', error)
      throw error
    }
  }

  const handleContactChange = (field, value) => {
    setConfigData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setIsServicesDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesDropdownOpen(false)
    }, 150) // 150ms Verzögerung
    setDropdownTimeout(timeout)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout)
      }
    }
  }, [dropdownTimeout])

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
    },
    4: {
      title: "Ihre Kontaktdaten",
      isForm: true
    }
  }

  const servicesDropdownItems = [
    ...(onNavigateToHeizungscheck ? [{ 
      label: "Heizungscheck 2.0", 
      type: "button", 
      onClick: onNavigateToHeizungscheck,
      description: "Professionelle Heizungsoptimierung"
    }] : []),
    ...(onNavigateToEnergie ? [{ 
      label: "Energieberatung", 
      type: "button", 
      onClick: onNavigateToEnergie,
      description: "KfW-förderfähige Vor-Ort-Beratung"
    }] : [{ 
      label: "Energieberatung", 
      type: "link", 
      href: "#konfigurator",
      description: "Individuelle Beratung für Ihr Gebäude"
    }]),
    ...(onNavigateToHydraulisch ? [{ 
      label: "Hydraulischer Abgleich", 
      type: "button", 
      onClick: onNavigateToHydraulisch,
      description: "BAFA-geförderte Heizungsoptimierung"
    }] : [{ 
      label: "Hydraulischer Abgleich", 
      type: "link", 
      href: "#konfigurator",
      description: "Optimierung der Heizungsverteilung"
    }]),
    ...(onNavigateToEnergieausweis ? [{ 
      label: "Energieausweis", 
      type: "button", 
      onClick: onNavigateToEnergieausweis,
      description: "Schnell & günstig ab 99€"
    }] : [{ 
      label: "Energieausweis", 
      type: "link", 
      href: "#konfigurator",
      description: "Gesetzlich vorgeschriebene Bewertung"
    }]),
    ...(onNavigateToFoerder ? [{ 
      label: "Fördermittelberatung", 
      type: "button", 
      onClick: onNavigateToFoerder,
      description: "Bis zu 15.000€ Förderung sichern"
    }] : [{ 
      label: "Fördermittelberatung", 
      type: "link", 
      href: "#konfigurator",
      description: "Unterstützung bei Förderanträgen"
    }])
  ]

  const defaultNavItems = [
    { 
      label: "Leistungen", 
      type: "dropdown", 
      dropdown: servicesDropdownItems 
    },
    { href: "#konfigurator", label: "Beratung", type: "link" },
    { href: "#about", label: "Über uns", type: "link" },
    { href: "#contact", label: "Kontakt", type: "link" }
  ]

  const navItems = customNavItems || defaultNavItems

  return (
    <nav className={`bg-white shadow-lg relative ${className}`}>
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
          <div className="hidden md:flex space-x-8 lg:flex-1 lg:justify-center">
            {navItems.map((item, index) => (
              item.type === "dropdown" ? (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors flex items-center space-x-1">
                    <span>{item.label}</span>
                    <Icon name="chevron-down" size="sm" />
                  </button>
                  
                  {isServicesDropdownOpen && (
                    <div 
                      className="absolute left-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 py-4"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        dropdownItem.type === "link" ? (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            <div className="font-medium">{dropdownItem.label}</div>
                            <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                          </a>
                        ) : (
                          <button
                            key={dropdownIndex}
                            onClick={() => {
                              setIsServicesDropdownOpen(false)
                              if (dropdownTimeout) {
                                clearTimeout(dropdownTimeout)
                                setDropdownTimeout(null)
                              }
                              dropdownItem.onClick()
                            }}
                            className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            <div className="font-medium">{dropdownItem.label}</div>
                            <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ) : item.type === "link" ? (
                <a 
                  key={index}
                  href={item.href} 
                  className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <button 
                  key={index}
                  onClick={item.onClick}
                  className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Right Side: Mini Configurator + CTA */}
          <div className="hidden lg:flex items-center justify-end lg:w-0 lg:flex-1 space-x-3">
            {/* Mini Configurator Widget */}
            {showQuickCheck && (
              <div className="relative">
                <button
                  onClick={() => setShowMiniConfig(!showMiniConfig)}
                  className="bg-primary-50 text-primary-700 border border-primary-200 px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors flex items-center space-x-2"
                >
                  <Icon name="lightning" size="sm" />
                  <span>Quick-Check</span>
                  <Icon name="chevron-down" size="sm" />
                </button>

                {/* Mini Configurator Dropdown */}
                {showMiniConfig && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 p-6">
                    {!isCompleted ? (
                      <>
                        <div className="text-center mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">Energieberatung in 30 Sekunden</h3>
                          <p className="text-sm text-gray-600">Schritt {miniConfigStep} von 4</p>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-base font-medium text-gray-800 mb-3">
                            {miniConfigContent[miniConfigStep].title}
                          </h4>
                          
                          {miniConfigStep <= 3 ? (
                            // Steps 1-3: Option selection
                            <div className="space-y-2">
                              {miniConfigContent[miniConfigStep].options.map((option, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleOptionSelect(option)}
                                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm"
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          ) : (
                            // Step 4: Contact form
                            <form onSubmit={handleContactSubmit} className="space-y-3">
                              <div>
                                <input
                                  type="text"
                                  placeholder="Ihr Name"
                                  value={configData.name}
                                  onChange={(e) => handleContactChange('name', e.target.value)}
                                  required
                                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-200"
                                />
                              </div>
                              <div>
                                <input
                                  type="email"
                                  placeholder="Ihre E-Mail"
                                  value={configData.email}
                                  onChange={(e) => handleContactChange('email', e.target.value)}
                                  required
                                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-200"
                                />
                              </div>
                              <div>
                                <input
                                  type="tel"
                                  placeholder="Ihre Telefonnummer"
                                  value={configData.phone}
                                  onChange={(e) => handleContactChange('phone', e.target.value)}
                                  required
                                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-200"
                                />
                              </div>
                              <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary-600 text-white p-3 rounded-lg text-sm font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                              >
                                {isSubmitting ? 'Wird gesendet...' : 'Beratung anfragen'}
                              </button>
                            </form>
                          )}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            {[1, 2, 3, 4].map((step) => (
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
                      </>
                    ) : (
                      // Success state
                      <div className="text-center py-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Vielen Dank!</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <p className="text-xs text-green-700">
                            ✓ E-Mail an Sie gesendet<br/>
                            ✓ Unser Team wurde benachrichtigt
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Main CTA Button */}
            <Button
              size="sm"
              onClick={handleCTAClick}
              className="font-medium px-4 py-2"
            >
              {ctaText}
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
                <nav className="grid gap-y-6">
                  {navItems.map((item, index) => (
                    item.type === "dropdown" ? (
                      <div key={index} className="space-y-3">
                        <div className="text-base font-medium text-gray-900 border-b border-gray-200 pb-2">
                          {item.label}
                        </div>
                        <div className="pl-4 space-y-3">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            dropdownItem.type === "link" ? (
                              <a
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                className="block text-sm text-gray-700 hover:text-primary-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <div className="font-medium">{dropdownItem.label}</div>
                                <div className="text-xs text-gray-500">{dropdownItem.description}</div>
                              </a>
                            ) : (
                              <button
                                key={dropdownIndex}
                                onClick={() => {
                                  setIsMenuOpen(false)
                                  dropdownItem.onClick()
                                }}
                                className="block w-full text-left text-sm text-gray-700 hover:text-primary-600"
                              >
                                <div className="font-medium">{dropdownItem.label}</div>
                                <div className="text-xs text-gray-500">{dropdownItem.description}</div>
                              </button>
                            )
                          ))}
                        </div>
                      </div>
                    ) : item.type === "link" ? (
                      <a 
                        key={index}
                        href={item.href} 
                        className="text-base font-medium text-gray-900 hover:text-gray-700" 
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button 
                        key={index}
                        onClick={() => {
                          setIsMenuOpen(false)
                          item.onClick()
                        }}
                        className="text-left text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.label}
                      </button>
                    )
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <Button
                fullWidth
                size="md"
                onClick={handleMobileConfiguratorClick}
                className="font-medium"
              >
                {ctaText === "Beratung" ? "Beratung anfragen" : ctaText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation 