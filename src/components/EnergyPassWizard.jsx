import { Button, Input, Select, Card, Stepper, RadioGroup, Alert, HelpText } from './ui'
import { useWizard } from '../hooks/useWizard'
import {
  energyPassBuildingTypeOptions,
  constructionYearOptions,
  wallConstructionOptions,
  roofConstructionOptions,
  windowTypeOptions,
  heatingSystemOptions,
  hotWaterSystemOptions,
  ventilationTypeOptions,
  basementOptions,
  energyPassTypeOptions,
  utilizationOptions,
  urgencyOptions,
  titleOptions,
  stateOptions
} from '../constants/formOptions'

const EnergyPassWizard = ({ onBack }) => {
  const initialFormData = {
    // Gebäude-Grunddaten
    buildingType: '', constructionYear: '', livingSpace: '', 
    floors: '', basement: '', utilization: '',
    
    // Konstruktion & Hülle
    wallConstruction: '', roofConstruction: '', windowType: '',
    wallThickness: '', insulationThickness: '', windowAge: '',
    
    // Anlagentechnik
    heatingSystem: '', heatingAge: '', hotWaterSystem: '',
    ventilationType: '', hasRenewableEnergy: '', renewableDetails: '',
    
    // Verbrauchsdaten (optional)
    lastYearHeating: '', lastYearElectricity: '', heatingCosts: '',
    electricityCosts: '', consumptionPeriod: '',
    
    // Kontakt & Abwicklung
    energyPassType: '', urgency: '',
    title: '', firstName: '', lastName: '', email: '', phone: '',
    street: '', zipCode: '', city: '', state: '',
    
    // Zusatzinfo
    specialFeatures: '', additionalInfo: ''
  }

  const validationRules = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: ['firstName', 'lastName', 'email', 'phone'],
    6: []
  }

  const {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    isStepValid,
    isFirstStep,
    isLastStep
  } = useWizard(initialFormData, 6, validationRules)

  const steps = [
    { id: 1, title: 'Gebäude-Grunddaten', description: 'Basisinformationen zum Gebäude' },
    { id: 2, title: 'Konstruktion & Hülle', description: 'Bauweise und Dämmung' },
    { id: 3, title: 'Anlagentechnik', description: 'Heizung, Warmwasser, Lüftung' },
    { id: 4, title: 'Verbrauchsdaten', description: 'Energie- und Heizkosten (optional)' },
    { id: 5, title: 'Kontakt & Abwicklung', description: 'Ihre Daten und Ausweis-Typ' },
    { id: 6, title: 'Zusammenfassung', description: 'Prüfung und Angebot anfordern' }
  ]

  const handleSubmit = () => {
    console.log('Energieausweis-Anfrage abgesendet:', formData)
    alert('Vielen Dank! Ihre Energieausweis-Anfrage wurde übermittelt. Wir erstellen Ihnen binnen 24 Stunden ein individuelles Angebot.')
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🏠 Grunddaten erfassen:</strong> Hier sammeln wir die wichtigsten Eckdaten zu Ihrem Gebäude. 
              Falls Sie einzelne Angaben nicht haben, können Sie diese Felder einfach freilassen.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Gebäudetyp"
                value={formData.buildingType}
                onChange={(e) => updateFormData('buildingType', e.target.value)}
                options={energyPassBuildingTypeOptions}
              />
              <Select
                label="Baualtersklasse"
                value={formData.constructionYear}
                onChange={(e) => updateFormData('constructionYear', e.target.value)}
                options={constructionYearOptions}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Wohnfläche (m²)"
                type="number"
                value={formData.livingSpace}
                onChange={(e) => updateFormData('livingSpace', e.target.value)}
                placeholder="z.B. 150"
                min="1"
              />
              <Input
                label="Anzahl Vollgeschosse"
                type="number"
                value={formData.floors}
                onChange={(e) => updateFormData('floors', e.target.value)}
                placeholder="z.B. 2"
                min="1"
                max="5"
              />
              <Select
                label="Keller/Untergeschoss"
                value={formData.basement}
                onChange={(e) => updateFormData('basement', e.target.value)}
                options={basementOptions}
              />
            </div>
            
            <Select
              label="Nutzung des Gebäudes"
              value={formData.utilization}
              onChange={(e) => updateFormData('utilization', e.target.value)}
              options={utilizationOptions}
            />
          </div>
        )

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🔨 Konstruktionsdetails:</strong> Diese Angaben helfen bei der genauen Bewertung der Gebäudehülle. 
              Bei Unsicherheiten kann unser Energieberater diese vor Ort ermitteln.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Außenwand-Konstruktion"
                value={formData.wallConstruction}
                onChange={(e) => updateFormData('wallConstruction', e.target.value)}
                options={wallConstructionOptions}
              />
              <Select
                label="Dach-Konstruktion"
                value={formData.roofConstruction}
                onChange={(e) => updateFormData('roofConstruction', e.target.value)}
                options={roofConstructionOptions}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Select
                label="Fenster-Art"
                value={formData.windowType}
                onChange={(e) => updateFormData('windowType', e.target.value)}
                options={windowTypeOptions}
              />
              <Input
                label="Wandstärke (cm)"
                type="number"
                value={formData.wallThickness}
                onChange={(e) => updateFormData('wallThickness', e.target.value)}
                placeholder="z.B. 24"
                min="10"
                max="100"
              />
              <Input
                label="Dämmstärke (cm)"
                type="number"
                value={formData.insulationThickness}
                onChange={(e) => updateFormData('insulationThickness', e.target.value)}
                placeholder="z.B. 12"
                min="0"
                max="50"
              />
            </div>
            
            <Input
              label="Alter der Fenster (Jahre)"
              type="number"
              value={formData.windowAge}
              onChange={(e) => updateFormData('windowAge', e.target.value)}
              placeholder="z.B. 15"
              min="0"
              max="100"
            />
          </div>
        )

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>⚙️ Anlagentechnik:</strong> Informationen zu Heizung, Warmwasser und Lüftung. 
              Das Alter der Anlagen ist wichtig für die Effizienzberechnung.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Heizsystem"
                value={formData.heatingSystem}
                onChange={(e) => updateFormData('heatingSystem', e.target.value)}
                options={heatingSystemOptions}
              />
              <Input
                label="Alter der Heizung (Jahre)"
                type="number"
                value={formData.heatingAge}
                onChange={(e) => updateFormData('heatingAge', e.target.value)}
                placeholder="z.B. 10"
                min="0"
                max="50"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Warmwasserbereitung"
                value={formData.hotWaterSystem}
                onChange={(e) => updateFormData('hotWaterSystem', e.target.value)}
                options={hotWaterSystemOptions}
              />
              <Select
                label="Lüftungsart"
                value={formData.ventilationType}
                onChange={(e) => updateFormData('ventilationType', e.target.value)}
                options={ventilationTypeOptions}
              />
            </div>
            
            <div className="space-y-4">
              <RadioGroup
                label="Erneuerbare Energien vorhanden?"
                name="hasRenewableEnergy"
                options={[
                  { value: 'ja', label: 'Ja' },
                  { value: 'nein', label: 'Nein' }
                ]}
                value={formData.hasRenewableEnergy}
                onChange={(e) => updateFormData('hasRenewableEnergy', e.target.value)}
                layout="horizontal"
              />
              
              {formData.hasRenewableEnergy === 'ja' && (
                <Input
                  label="Details zu erneuerbaren Energien"
                  value={formData.renewableDetails}
                  onChange={(e) => updateFormData('renewableDetails', e.target.value)}
                  placeholder="z.B. Solarthermie, Photovoltaik, etc."
                />
              )}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>📊 Verbrauchsdaten (optional):</strong> Diese Daten verbessern die Genauigkeit des Energieausweises, 
              sind aber nicht zwingend erforderlich. Für den Bedarfsausweis werden sie nicht benötigt.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Heizenergieverbrauch letztes Jahr (kWh)"
                type="number"
                value={formData.lastYearHeating}
                onChange={(e) => updateFormData('lastYearHeating', e.target.value)}
                placeholder="z.B. 15000"
                min="0"
              />
              <Input
                label="Stromverbrauch letztes Jahr (kWh)"
                type="number"
                value={formData.lastYearElectricity}
                onChange={(e) => updateFormData('lastYearElectricity', e.target.value)}
                placeholder="z.B. 3500"
                min="0"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Heizkosten letztes Jahr (€)"
                type="number"
                value={formData.heatingCosts}
                onChange={(e) => updateFormData('heatingCosts', e.target.value)}
                placeholder="z.B. 1200"
                min="0"
              />
              <Input
                label="Stromkosten letztes Jahr (€)"
                type="number"
                value={formData.electricityCosts}
                onChange={(e) => updateFormData('electricityCosts', e.target.value)}
                placeholder="z.B. 800"
                min="0"
              />
            </div>
            
            <Input
              label="Abrechnungszeitraum"
              value={formData.consumptionPeriod}
              onChange={(e) => updateFormData('consumptionPeriod', e.target.value)}
              placeholder="z.B. 01.01.2023 - 31.12.2023"
            />
          </div>
        )

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Gewünschter Ausweis-Typ"
                value={formData.energyPassType}
                onChange={(e) => updateFormData('energyPassType', e.target.value)}
                options={energyPassTypeOptions}
              />
              <Select
                label="Zeitrahmen"
                value={formData.urgency}
                onChange={(e) => updateFormData('urgency', e.target.value)}
                options={urgencyOptions}
              />
            </div>
            
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
                placeholder="+49 123 456789"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Input
                label="Straße & Hausnummer"
                value={formData.street}
                onChange={(e) => updateFormData('street', e.target.value)}
                placeholder="Musterstraße 123"
                className="md:col-span-2"
              />
              <Input
                label="PLZ"
                value={formData.zipCode}
                onChange={(e) => updateFormData('zipCode', e.target.value)}
                placeholder="12345"
              />
              <Input
                label="Ort"
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
          </div>
        )

      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <Alert variant="success" title="Ihre Energieausweis-Anfrage ist bereit!">
              Prüfen Sie Ihre Angaben und fordern Sie Ihr individuelles Angebot an.
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Gebäudedaten</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Typ:</span> {energyPassBuildingTypeOptions.find(o => o.value === formData.buildingType)?.label || 'Nicht angegeben'}</div>
                  <div><span className="font-medium">Baualter:</span> {constructionYearOptions.find(o => o.value === formData.constructionYear)?.label || 'Nicht angegeben'}</div>
                  <div><span className="font-medium">Wohnfläche:</span> {formData.livingSpace ? `${formData.livingSpace} m²` : 'Nicht angegeben'}</div>
                  <div><span className="font-medium">Ausweis-Typ:</span> {energyPassTypeOptions.find(o => o.value === formData.energyPassType)?.label || 'Nicht angegeben'}</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Kontakt</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</div>
                  <div><span className="font-medium">E-Mail:</span> {formData.email}</div>
                  <div><span className="font-medium">Telefon:</span> {formData.phone}</div>
                  <div><span className="font-medium">Zeitrahmen:</span> {urgencyOptions.find(o => o.value === formData.urgency)?.label || 'Nicht angegeben'}</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                size="xl"
                onClick={handleSubmit}
                className="w-full"
              >
                Angebot für Energieausweis anfordern
              </Button>
            </div>
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
            <div className="text-4xl mr-4">🏠</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Energieausweis Einfamilienhaus</h1>
              <p className="text-lg text-gray-600">Bedarfs- oder Verbrauchsausweis nach Ihren Anforderungen</p>
            </div>
          </div>
        </div>

        {/* Progress Stepper */}
        <Stepper steps={steps} currentStep={currentStep} />

        {/* Form Content */}
        <Card padding="lg" shadow="xl" className="mb-8 transform transition-all duration-500">
          {renderStep()}
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
              disabled={!isStepValid()}
            >
              Weiter
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default EnergyPassWizard 