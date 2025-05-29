import { useState } from 'react'
import { Button, Input, Select, Card, Stepper, RadioGroup, Alert } from './ui'

const FundingWizard = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Gebäudedaten
    buildingType: '',
    buildingYear: '',
    livingSpace: '',
    units: '',
    monument: '',
    energyCertificate: '',
    
    // Geplante Maßnahmen
    measures: [],
    renovationScope: '',
    
    // Kontakt & Antragsteller
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    zipCode: '',
    city: '',
    ownershipStatus: '',
    householdSize: '',
    income: '',
    
    // Regional & Finanzierung
    state: '',
    energyProvider: '',
    investmentAmount: '',
    ownCapital: '',
    fundingType: '',
    timeline: ''
  })

  const totalSteps = 5

  const steps = [
    { id: 1, title: 'Gebäudedaten', description: 'Grundinformationen zu Ihrem Gebäude' },
    { id: 2, title: 'Maßnahmen', description: 'Geplante Energiesparmaßnahmen' },
    { id: 3, title: 'Kontaktdaten', description: 'Ihre persönlichen Daten' },
    { id: 4, title: 'Details', description: 'Regionale und finanzielle Angaben' },
    { id: 5, title: 'Zusammenfassung', description: 'Überprüfung und Absendung' }
  ]

  // Options for select components
  const buildingTypeOptions = [
    { value: 'einfamilienhaus', label: 'Einfamilienhaus' },
    { value: 'mehrfamilienhaus', label: 'Mehrfamilienhaus' },
    { value: 'reihenhaus', label: 'Reihenhaus' },
    { value: 'doppelhaushaelfte', label: 'Doppelhaushälfte' },
    { value: 'wohnung', label: 'Eigentumswohnung' }
  ]

  const energyCertificateOptions = [
    { value: 'verbrauchsausweis', label: 'Verbrauchsausweis' },
    { value: 'bedarfsausweis', label: 'Bedarfsausweis' },
    { value: 'keiner', label: 'Kein Ausweis vorhanden' }
  ]

  const titleOptions = [
    { value: 'herr', label: 'Herr' },
    { value: 'frau', label: 'Frau' },
    { value: 'divers', label: 'Divers' }
  ]

  const ownershipOptions = [
    { value: 'eigentuemer', label: 'Eigentümer' },
    { value: 'mieter', label: 'Mieter' },
    { value: 'verwalter', label: 'Verwalter' }
  ]

  const householdSizeOptions = [
    { value: '1', label: '1 Person' },
    { value: '2', label: '2 Personen' },
    { value: '3', label: '3 Personen' },
    { value: '4', label: '4 Personen' },
    { value: '5+', label: '5+ Personen' }
  ]

  const stateOptions = [
    { value: 'baden-wuerttemberg', label: 'Baden-Württemberg' },
    { value: 'bayern', label: 'Bayern' },
    { value: 'berlin', label: 'Berlin' },
    { value: 'brandenburg', label: 'Brandenburg' },
    { value: 'bremen', label: 'Bremen' },
    { value: 'hamburg', label: 'Hamburg' },
    { value: 'hessen', label: 'Hessen' },
    { value: 'mecklenburg-vorpommern', label: 'Mecklenburg-Vorpommern' },
    { value: 'niedersachsen', label: 'Niedersachsen' },
    { value: 'nordrhein-westfalen', label: 'Nordrhein-Westfalen' },
    { value: 'rheinland-pfalz', label: 'Rheinland-Pfalz' },
    { value: 'saarland', label: 'Saarland' },
    { value: 'sachsen', label: 'Sachsen' },
    { value: 'sachsen-anhalt', label: 'Sachsen-Anhalt' },
    { value: 'schleswig-holstein', label: 'Schleswig-Holstein' },
    { value: 'thueringen', label: 'Thüringen' }
  ]

  const investmentOptions = [
    { value: 'unter-10000', label: 'Unter 10.000 €' },
    { value: '10000-25000', label: '10.000 - 25.000 €' },
    { value: '25000-50000', label: '25.000 - 50.000 €' },
    { value: '50000-100000', label: '50.000 - 100.000 €' },
    { value: '100000-200000', label: '100.000 - 200.000 €' },
    { value: 'ueber-200000', label: 'Über 200.000 €' }
  ]

  const capitalOptions = [
    { value: 'unter-5000', label: 'Unter 5.000 €' },
    { value: '5000-15000', label: '5.000 - 15.000 €' },
    { value: '15000-30000', label: '15.000 - 30.000 €' },
    { value: '30000-50000', label: '30.000 - 50.000 €' },
    { value: '50000-100000', label: '50.000 - 100.000 €' },
    { value: 'ueber-100000', label: 'Über 100.000 €' }
  ]

  const timelineOptions = [
    { value: 'sofort', label: 'Sofort' },
    { value: '3-monate', label: 'In den nächsten 3 Monaten' },
    { value: '6-monate', label: 'In den nächsten 6 Monaten' },
    { value: '12-monate', label: 'In den nächsten 12 Monaten' },
    { value: 'spaeter', label: 'Später als 12 Monate' }
  ]

  // Radio button options
  const monumentOptions = [
    { value: 'ja', label: 'Ja' },
    { value: 'nein', label: 'Nein' },
    { value: 'unbekannt', label: 'Unbekannt' }
  ]

  const renovationScopeOptions = [
    { 
      value: 'einzelmassnahmen', 
      label: 'Einzelmaßnahmen', 
      description: 'Gezielte Verbesserungen in einzelnen Bereichen' 
    },
    { 
      value: 'teilsanierung', 
      label: 'Teilsanierung', 
      description: 'Sanierung mehrerer Bereiche' 
    },
    { 
      value: 'vollsanierung', 
      label: 'Vollsanierung', 
      description: 'Umfassende energetische Sanierung' 
    }
  ]

  const fundingTypeOptions = [
    { 
      value: 'zuschuss', 
      label: 'Zuschuss (nicht rückzahlbar)' 
    },
    { 
      value: 'kredit', 
      label: 'Günstiger Kredit' 
    },
    { 
      value: 'beides', 
      label: 'Zuschuss + Kredit' 
    }
  ]

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.buildingType && formData.buildingYear && formData.livingSpace
      case 2:
        return formData.measures.length > 0 && formData.renovationScope
      case 3:
        return formData.firstName && formData.lastName && formData.email && formData.phone
      case 4:
        return formData.state && formData.investmentAmount
      default:
        return true
    }
  }

  const handleMeasureToggle = (measure) => {
    const measures = [...formData.measures]
    const index = measures.indexOf(measure)
    if (index > -1) {
      measures.splice(index, 1)
    } else {
      measures.push(measure)
    }
    updateFormData('measures', measures)
  }

  const handleSubmit = () => {
    console.log('Formular abgesendet:', formData)
    alert('Vielen Dank! Ihre Anfrage wurde übermittelt. Wir melden uns binnen 24 Stunden bei Ihnen.')
  }

  return (
    <div className="py-16 bg-gradient-to-br from-primary-50 to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Button 
            variant="link"
            onClick={onBack}
            className="mb-6 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Service-Auswahl
          </Button>
          
          <div className="flex items-center justify-center mb-6">
            <div className="text-4xl mr-4">💰</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fördermittelberatung</h1>
              <p className="text-lg text-gray-600">Professionelle Beratung zu verfügbaren Fördermitteln</p>
            </div>
          </div>
        </div>

        {/* Progress Stepper */}
        <Stepper 
          steps={steps} 
          currentStep={currentStep}
        />

        {/* Form Content */}
        <Card padding="lg" shadow="xl" className="mb-8 transform transition-all duration-500">
          
          {/* Step 1: Gebäudedaten */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Gebäudetyp"
                  required
                  value={formData.buildingType}
                  onChange={(e) => updateFormData('buildingType', e.target.value)}
                  options={buildingTypeOptions}
                />

                <Input
                  label="Baujahr"
                  required
                  type="number"
                  value={formData.buildingYear}
                  onChange={(e) => updateFormData('buildingYear', e.target.value)}
                  placeholder="z.B. 1985"
                  min="1800"
                  max="2024"
                />

                <Input
                  label="Wohnfläche (m²)"
                  required
                  type="number"
                  value={formData.livingSpace}
                  onChange={(e) => updateFormData('livingSpace', e.target.value)}
                  placeholder="z.B. 150"
                  min="1"
                />

                <Input
                  label="Anzahl Wohneinheiten"
                  type="number"
                  value={formData.units}
                  onChange={(e) => updateFormData('units', e.target.value)}
                  placeholder="z.B. 1"
                  min="1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RadioGroup
                  label="Denkmalschutz"
                  name="monument"
                  options={monumentOptions}
                  value={formData.monument}
                  onChange={(e) => updateFormData('monument', e.target.value)}
                  layout="horizontal"
                />

                <Select
                  label="Energieausweis vorhanden"
                  value={formData.energyCertificate}
                  onChange={(e) => updateFormData('energyCertificate', e.target.value)}
                  options={energyCertificateOptions}
                />
              </div>
            </div>
          )}

          {/* Step 2: Maßnahmen */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Geplante Maßnahmen * 
                  <span className="text-red-500 ml-1">*</span>
                  <span className="text-gray-500 font-normal"> (Mehrfachauswahl möglich)</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'daemmung_dach', label: 'Dachdämmung', icon: '🏠' },
                    { id: 'daemmung_fassade', label: 'Fassadendämmung', icon: '🧱' },
                    { id: 'fenster', label: 'Fenster & Türen', icon: '🪟' },
                    { id: 'heizung', label: 'Heizungsmodernisierung', icon: '🔥' },
                    { id: 'waermepumpe', label: 'Wärmepumpe', icon: '♨️' },
                    { id: 'solar', label: 'Solarthermie', icon: '☀️' },
                    { id: 'photovoltaik', label: 'Photovoltaik-Anlage', icon: '⚡' },
                    { id: 'lueftung', label: 'Lüftungsanlage', icon: '💨' }
                  ].map((measure) => (
                    <div
                      key={measure.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        formData.measures.includes(measure.id)
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleMeasureToggle(measure.id)}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{measure.icon}</span>
                        <span className="font-medium text-gray-900">{measure.label}</span>
                        {formData.measures.includes(measure.id) && (
                          <svg className="ml-auto w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <RadioGroup
                label="Sanierungsumfang"
                required
                name="renovationScope"
                options={renovationScopeOptions}
                value={formData.renovationScope}
                onChange={(e) => updateFormData('renovationScope', e.target.value)}
                layout="vertical"
              />
            </div>
          )}

          {/* Step 3: Kontaktdaten */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Select
                  label="Anrede"
                  value={formData.title}
                  onChange={(e) => updateFormData('title', e.target.value)}
                  options={titleOptions}
                />

                <Input
                  label="Vorname"
                  required
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="Ihr Vorname"
                />

                <Input
                  label="Nachname"
                  required
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="Ihr Nachname"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="E-Mail"
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="ihre.email@beispiel.de"
                />

                <Input
                  label="Telefon"
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="0123 456789"
                />
              </div>

              <Input
                label="Straße & Hausnummer"
                value={formData.street}
                onChange={(e) => updateFormData('street', e.target.value)}
                placeholder="Musterstraße 123"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="PLZ"
                  value={formData.zipCode}
                  onChange={(e) => updateFormData('zipCode', e.target.value)}
                  placeholder="12345"
                />

                <Input
                  label="Stadt"
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                  placeholder="Musterstadt"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Eigentumsverhältnis"
                  value={formData.ownershipStatus}
                  onChange={(e) => updateFormData('ownershipStatus', e.target.value)}
                  options={ownershipOptions}
                />

                <Select
                  label="Haushaltsgröße"
                  value={formData.householdSize}
                  onChange={(e) => updateFormData('householdSize', e.target.value)}
                  options={householdSizeOptions}
                />
              </div>
            </div>
          )}

          {/* Step 4: Details */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Bundesland"
                  required
                  value={formData.state}
                  onChange={(e) => updateFormData('state', e.target.value)}
                  options={stateOptions}
                />

                <Input
                  label="Energieversorger"
                  value={formData.energyProvider}
                  onChange={(e) => updateFormData('energyProvider', e.target.value)}
                  placeholder="z.B. Stadtwerke"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Geplante Investitionssumme"
                  required
                  value={formData.investmentAmount}
                  onChange={(e) => updateFormData('investmentAmount', e.target.value)}
                  options={investmentOptions}
                />

                <Select
                  label="Verfügbares Eigenkapital"
                  value={formData.ownCapital}
                  onChange={(e) => updateFormData('ownCapital', e.target.value)}
                  options={capitalOptions}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RadioGroup
                  label="Gewünschte Förderart"
                  name="fundingType"
                  options={fundingTypeOptions}
                  value={formData.fundingType}
                  onChange={(e) => updateFormData('fundingType', e.target.value)}
                  layout="vertical"
                />

                <Select
                  label="Gewünschter Umsetzungszeitraum"
                  value={formData.timeline}
                  onChange={(e) => updateFormData('timeline', e.target.value)}
                  options={timelineOptions}
                />
              </div>
            </div>
          )}

          {/* Step 5: Zusammenfassung */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-fade-in">
              <Card padding="md" className="bg-gradient-to-r from-primary-50 to-blue-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Zusammenfassung Ihrer Angaben</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Gebäudedaten</h4>
                    <p><span className="text-gray-600">Typ:</span> {formData.buildingType}</p>
                    <p><span className="text-gray-600">Baujahr:</span> {formData.buildingYear}</p>
                    <p><span className="text-gray-600">Wohnfläche:</span> {formData.livingSpace} m²</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Kontakt</h4>
                    <p><span className="text-gray-600">Name:</span> {formData.firstName} {formData.lastName}</p>
                    <p><span className="text-gray-600">E-Mail:</span> {formData.email}</p>
                    <p><span className="text-gray-600">Telefon:</span> {formData.phone}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Maßnahmen</h4>
                    <p><span className="text-gray-600">Anzahl:</span> {formData.measures.length} Maßnahmen</p>
                    <p><span className="text-gray-600">Umfang:</span> {formData.renovationScope}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Investition</h4>
                    <p><span className="text-gray-600">Geplant:</span> {formData.investmentAmount}</p>
                    <p><span className="text-gray-600">Eigenkapital:</span> {formData.ownCapital}</p>
                  </div>
                </div>
              </Card>

              <Alert variant="warning" title="Hinweis">
                Nach dem Absenden erhalten Sie binnen 24 Stunden eine persönliche Fördermittelberatung von einem zertifizierten Energieberater.
              </Alert>
            </div>
          )}
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="secondary"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Zurück
          </Button>

          {currentStep < totalSteps ? (
            <Button
              size="lg"
              onClick={nextStep}
              disabled={!isStepValid()}
            >
              Weiter
            </Button>
          ) : (
            <Button
              variant="success"
              size="lg"
              onClick={handleSubmit}
            >
              Anfrage absenden
            </Button>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}

export default FundingWizard 