import { Button, Input, Select, Card, Stepper, RadioGroup, Alert, HelpText } from './ui'
import { useWizard } from '../hooks/useWizard'
import {
  hydraulicBalancingBuildingTypeOptions,
  heatingSystemDetailOptions,
  heatGeneratorOptions,
  heatingCheckServiceTypeOptions,
  heatingCheckUrgencyOptions,
  existingDocumentationOptions,
  heatingSystemAccessOptions,
  combinedServiceOptions,
  constructionYearOptions,
  titleOptions,
  stateOptions
} from '../constants/formOptions'

const HeatingCheckWizard = ({ onBack }) => {
  const initialFormData = {
    // Schritt 1: Service-Art und Dringlichkeit
    serviceType: '', urgency: '', combinedServices: [],
    
    // Schritt 2: Gebäude-Grunddaten
    buildingType: '', constructionYear: '', numberOfUnits: '',
    heatedArea: '', numberOfRooms: '',
    
    // Schritt 3: Heizungsanlage
    heatingSystemType: '', manufacturer: '', model: '', 
    installationYear: '', fuelType: '', heatingPower: '',
    heatCarrier: '', // Wichtig für GEG §60b Pflicht
    
    // Schritt 4: Aktuelle Einstellungen
    currentFlowTemperature: '', currentReturnTemperature: '',
    pumpType: '', pumpSetting: '', heatingCurve: '',
    nightSetback: '', summerShutdown: '',
    
    // Schritt 5: Dokumentation & Zugang
    existingDocumentation: [], accessType: '', accessNotes: '',
    lastMaintenanceDate: '', lastFlueGasTest: '',
    
    // Schritt 6: Kontaktdaten
    title: '', firstName: '', lastName: '', email: '', phone: '',
    street: '', zipCode: '', city: '', state: '',
    propertyRole: '', preferredContact: '', notes: ''
  }

  const steps = [
    { id: 1, title: 'Service-Art', description: 'Art und Dringlichkeit des Heizungschecks' },
    { id: 2, title: 'Gebäudedaten', description: 'Grundinformationen zum Gebäude' },
    { id: 3, title: 'Heizungsanlage', description: 'Details zur bestehenden Heizung' },
    { id: 4, title: 'Einstellungen', description: 'Aktuelle Heizungseinstellungen' },
    { id: 5, title: 'Dokumentation', description: 'Zugang und vorhandene Unterlagen' },
    { id: 6, title: 'Kontaktdaten', description: 'Ihre persönlichen Daten' }
  ]

  const validationRules = {
    1: ['serviceType', 'urgency'],
    2: ['buildingType'],
    3: ['heatingSystemType', 'fuelType', 'heatCarrier'],
    4: [],
    5: ['accessType'],
    6: ['firstName', 'lastName', 'email', 'phone', 'street', 'zipCode', 'city']
  }

  const { currentStep, formData, updateFormData, nextStep, prevStep, isFirstStep, isLastStep, isStepValid } = useWizard(
    initialFormData,
    steps.length,
    validationRules
  )

  const handleSubmit = () => {
    console.log('Heizungscheck 2.0 Daten:', formData)
    alert('Heizungscheck-Anfrage wurde erfolgreich übermittelt!')
    onBack()
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Heizungscheck 2.0 nach GEG §60b</h3>
              <p className="text-blue-800 text-sm">
                Professionelle Überprüfung Ihrer Heizungsanlage auf Energieeffizienz und Optimierungspotentiale. 
                Der Check kann mit anderen Serviceleistungen kombiniert werden, um Kosten zu sparen.
              </p>
            </div>

            <Select
              label="Art des Service"
              required
              value={formData.serviceType}
              onChange={(e) => updateFormData('serviceType', e.target.value)}
              options={heatingCheckServiceTypeOptions}
            />

            {(formData.serviceType?.includes('combined')) && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zusätzliche Services (Mehrfachauswahl möglich)
                </label>
                <div className="space-y-2">
                  {combinedServiceOptions.map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        checked={formData.combinedServices.includes(option.value)}
                        onChange={(e) => {
                          const newServices = e.target.checked
                            ? [...formData.combinedServices, option.value]
                            : formData.combinedServices.filter(s => s !== option.value)
                          updateFormData('combinedServices', newServices)
                        }}
                      />
                      <span className="ml-2 text-sm text-gray-900">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <Select
              label="Dringlichkeit"
              required
              value={formData.urgency}
              onChange={(e) => updateFormData('urgency', e.target.value)}
              options={heatingCheckUrgencyOptions}
            />

            <Alert variant="info">
              <strong>Kostenvorteil:</strong> Bei kombinierten Services können Sie Anfahrtskosten sparen. 
              Der Heizungscheck lässt sich ideal mit anderen Wartungs- oder Prüfterminen verbinden.
            </Alert>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gebäudedaten</h3>
            
            <Select
              label="Gebäudetyp"
              required
              value={formData.buildingType}
              onChange={(e) => updateFormData('buildingType', e.target.value)}
              options={hydraulicBalancingBuildingTypeOptions}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Baujahr Gebäude"
                value={formData.constructionYear}
                onChange={(e) => updateFormData('constructionYear', e.target.value)}
                options={constructionYearOptions}
              />

              <Input
                label="Anzahl Wohneinheiten"
                type="number"
                value={formData.numberOfUnits}
                onChange={(e) => updateFormData('numberOfUnits', e.target.value)}
                placeholder="z.B. 1"
                min="1"
                max="200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Beheizte Fläche (m²)"
                type="number"
                value={formData.heatedArea}
                onChange={(e) => updateFormData('heatedArea', e.target.value)}
                placeholder="z.B. 150"
                min="30"
                max="2000"
              />

              <Input
                label="Anzahl Räume"
                type="number"
                value={formData.numberOfRooms}
                onChange={(e) => updateFormData('numberOfRooms', e.target.value)}
                placeholder="z.B. 5"
                min="1"
                max="50"
              />
            </div>

            {parseInt(formData.numberOfUnits) >= 6 && (
              <Alert variant="warning">
                <strong>GEG §60b Pflicht:</strong> Bei Gebäuden ab 6 Wohneinheiten mit Wasser als Wärmeträger 
                ist der Heizungscheck verpflichtend durchzuführen.
              </Alert>
            )}
          </div>
        )

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Heizungsanlage</h3>
            
            <Select
              label="Heizungstyp"
              required
              value={formData.heatingSystemType}
              onChange={(e) => updateFormData('heatingSystemType', e.target.value)}
              options={heatingSystemDetailOptions}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Hersteller"
                value={formData.manufacturer}
                onChange={(e) => updateFormData('manufacturer', e.target.value)}
                placeholder="z.B. Viessmann, Buderus, Vaillant"
              />

              <Input
                label="Modell/Typenbezeichnung"
                value={formData.model}
                onChange={(e) => updateFormData('model', e.target.value)}
                placeholder="z.B. Vitocrossal 200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Select
                label="Einbaujahr Heizung"
                value={formData.installationYear}
                onChange={(e) => updateFormData('installationYear', e.target.value)}
                options={constructionYearOptions}
              />

              <Select
                label="Brennstoffart"
                required
                value={formData.fuelType}
                onChange={(e) => updateFormData('fuelType', e.target.value)}
                options={[
                  { value: 'erdgas', label: 'Erdgas' },
                  { value: 'fluessiggas', label: 'Flüssiggas' },
                  { value: 'heizoel', label: 'Heizöl' },
                  { value: 'pellets', label: 'Pellets' },
                  { value: 'scheitholz', label: 'Scheitholz' },
                  { value: 'strom', label: 'Strom (Wärmepumpe)' }
                ]}
              />

              <Select
                label="Wärmeträger"
                required
                value={formData.heatCarrier}
                onChange={(e) => updateFormData('heatCarrier', e.target.value)}
                options={[
                  { value: 'wasser', label: 'Wasser' },
                  { value: 'luft', label: 'Luft' },
                  { value: 'sonstiges', label: 'Sonstiges' }
                ]}
                helpText="Wichtig für GEG §60b Pflichtbestimmung"
              />
            </div>

            <Input
              label="Nennwärmeleistung (kW)"
              type="number"
              value={formData.heatingPower}
              onChange={(e) => updateFormData('heatingPower', e.target.value)}
              placeholder="z.B. 24"
              min="5"
              max="1000"
            />

            {formData.heatCarrier === 'wasser' && parseInt(formData.numberOfUnits) >= 6 && (
              <Alert variant="info">
                <strong>Hinweis:</strong> Diese Anlage unterliegt der Heizungscheck-Pflicht nach GEG §60b. 
                Die Prüfung muss spätestens bis zum 30.09.2027 (bei Einbau vor 01.10.2009) durchgeführt werden.
              </Alert>
            )}
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Aktuelle Heizungseinstellungen</h3>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-900 mb-2">Optimale Heizungseinstellungen</h4>
              <p className="text-yellow-800 text-sm">
                Diese Informationen helfen dabei, die aktuelle Effizienz Ihrer Heizungsanlage zu bewerten 
                und Verbesserungspotentiale zu identifizieren.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Vorlauftemperatur (°C)"
                type="number"
                value={formData.currentFlowTemperature}
                onChange={(e) => updateFormData('currentFlowTemperature', e.target.value)}
                placeholder="z.B. 70"
                min="30"
                max="90"
                helpText="Aktuelle Einstellung"
              />

              <Input
                label="Rücklauftemperatur (°C)"
                type="number"
                value={formData.currentReturnTemperature}
                onChange={(e) => updateFormData('currentReturnTemperature', e.target.value)}
                placeholder="z.B. 50"
                min="20"
                max="80"
                helpText="Gemessener Wert"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Select
                label="Umwälzpumpe"
                value={formData.pumpType}
                onChange={(e) => updateFormData('pumpType', e.target.value)}
                options={[
                  { value: 'hocheffizienz', label: 'Hocheffizienzpumpe' },
                  { value: 'standard', label: 'Standardpumpe' },
                  { value: 'alt', label: 'Alte ungerade Pumpe' },
                  { value: 'unbekannt', label: 'Unbekannt' }
                ]}
              />

              <Input
                label="Pumpenstufe"
                value={formData.pumpSetting}
                onChange={(e) => updateFormData('pumpSetting', e.target.value)}
                placeholder="z.B. Stufe 2"
              />

              <Input
                label="Heizkurve"
                value={formData.heatingCurve}
                onChange={(e) => updateFormData('heatingCurve', e.target.value)}
                placeholder="z.B. 1.2"
                helpText="Steigung der Heizkurve"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Nachtabsenkung"
                value={formData.nightSetback}
                onChange={(e) => updateFormData('nightSetback', e.target.value)}
                options={[
                  { value: 'aktiv', label: 'Aktiv' },
                  { value: 'inaktiv', label: 'Nicht aktiv' },
                  { value: 'unbekannt', label: 'Unbekannt' }
                ]}
              />

              <Select
                label="Sommerabschaltung"
                value={formData.summerShutdown}
                onChange={(e) => updateFormData('summerShutdown', e.target.value)}
                options={[
                  { value: 'aktiv', label: 'Aktiv' },
                  { value: 'inaktiv', label: 'Nicht aktiv' },
                  { value: 'unbekannt', label: 'Unbekannt' }
                ]}
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Dokumentation & Zugang</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vorhandene Dokumentation (Mehrfachauswahl möglich)
              </label>
              <div className="space-y-2">
                {existingDocumentationOptions.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      checked={formData.existingDocumentation.includes(option.value)}
                      onChange={(e) => {
                        const newDocs = e.target.checked
                          ? [...formData.existingDocumentation, option.value]
                          : formData.existingDocumentation.filter(d => d !== option.value)
                        updateFormData('existingDocumentation', newDocs)
                      }}
                    />
                    <span className="ml-2 text-sm text-gray-900">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <Select
              label="Zugang zur Heizungsanlage"
              required
              value={formData.accessType}
              onChange={(e) => updateFormData('accessType', e.target.value)}
              options={heatingSystemAccessOptions}
            />

            {formData.accessType === 'besondere-umstaende' && (
              <Input
                label="Besondere Umstände beschreiben"
                value={formData.accessNotes}
                onChange={(e) => updateFormData('accessNotes', e.target.value)}
                placeholder="Beschreiben Sie die besonderen Zugangsbedingungen"
                multiline
                rows={3}
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Letzte Wartung"
                type="date"
                value={formData.lastMaintenanceDate}
                onChange={(e) => updateFormData('lastMaintenanceDate', e.target.value)}
                helpText="Falls bekannt"
              />

              <Input
                label="Letzte Abgasmessung"
                type="date"
                value={formData.lastFlueGasTest}
                onChange={(e) => updateFormData('lastFlueGasTest', e.target.value)}
                helpText="Falls Sie diese durchgeführt haben"
              />
            </div>

            <Alert variant="info">
              <strong>Professionelle Durchführung:</strong> Der Heizungscheck wird von qualifizierten Fachkräften durchgeführt, 
              die bereits Erfahrung mit Ihrer Anlage haben und auf vorhandene Mess- und Prüfdaten zurückgreifen können.
            </Alert>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Kontaktdaten</h3>
            
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
                placeholder="Max"
              />

              <Input
                label="Nachname"
                required
                value={formData.lastName}
                onChange={(e) => updateFormData('lastName', e.target.value)}
                placeholder="Mustermann"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="E-Mail-Adresse"
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="max@mustermann.de"
              />

              <Input
                label="Telefonnummer"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="0123 456789"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Straße & Hausnummer"
                required
                value={formData.street}
                onChange={(e) => updateFormData('street', e.target.value)}
                placeholder="Musterstraße 123"
                className="md:col-span-1"
              />

              <Input
                label="PLZ"
                required
                value={formData.zipCode}
                onChange={(e) => updateFormData('zipCode', e.target.value)}
                placeholder="12345"
                maxLength="5"
              />

              <Input
                label="Ort"
                required
                value={formData.city}
                onChange={(e) => updateFormData('city', e.target.value)}
                placeholder="Musterstadt"
              />
            </div>

            <Select
              label="Bundesland"
              value={formData.state}
              onChange={(e) => updateFormData('state', e.target.value)}
              options={stateOptions}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Eigentümer/Mieter"
                value={formData.propertyRole}
                onChange={(e) => updateFormData('propertyRole', e.target.value)}
                options={[
                  { value: 'eigentuemer', label: 'Eigentümer' },
                  { value: 'mieter', label: 'Mieter' },
                  { value: 'verwalter', label: 'Hausverwalter' },
                  { value: 'bevollmaechtigter', label: 'Bevollmächtigter' }
                ]}
              />

              <Select
                label="Bevorzugter Kontakt"
                value={formData.preferredContact}
                onChange={(e) => updateFormData('preferredContact', e.target.value)}
                options={[
                  { value: 'telefon', label: 'Telefon' },
                  { value: 'email', label: 'E-Mail' },
                  { value: 'beide', label: 'Telefon und E-Mail' }
                ]}
              />
            </div>

            <Input
              label="Anmerkungen"
              value={formData.notes}
              onChange={(e) => updateFormData('notes', e.target.value)}
              placeholder="Besondere Wünsche oder Anmerkungen zum Heizungscheck..."
              multiline
              rows={3}
            />
          </div>
        )

      default:
        return null
    }
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
            <div className="text-4xl mr-4">🌡️</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Heizungscheck 2.0</h1>
              <p className="text-lg text-gray-600">Professioneller Heizungscheck durch qualifizierten Schornsteinfeger</p>
            </div>
          </div>
        </div>

        {/* Progress Stepper */}
        <Stepper steps={steps} currentStep={currentStep} />

        {/* Form Content */}
        <Card padding="lg" shadow="xl" className="mb-8 transform transition-all duration-500">
          {renderCurrentStep()}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="secondary"
            onClick={prevStep}
            disabled={isFirstStep}
            className={isFirstStep ? 'invisible' : ''}
          >
            Zurück
          </Button>
          
          {!isLastStep ? (
            <Button
              onClick={nextStep}
              disabled={!isStepValid}
            >
              Weiter
            </Button>
          ) : (
            <Button
              size="xl"
              onClick={handleSubmit}
              disabled={!isStepValid}
              className="bg-green-600 hover:bg-green-700"
            >
              Heizungscheck beauftragen
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeatingCheckWizard 