import { Button, Input, Select, Card, Stepper, RadioGroup, Alert, HelpText } from './ui'
import { useWizard } from '../hooks/useWizard'
import {
  hydraulicBalancingBuildingTypeOptions,
  heatingSystemDetailOptions,
  heatGeneratorOptions,
  pumpTypeOptions,
  valveTypeOptions,
  heatingDistributionSystemOptions,
  insulationLevelOptions,
  problemDescriptionOptions,
  urgencyHydraulicOptions,
  heatingCurveOptions,
  constructionYearOptions,
  titleOptions,
  stateOptions
} from '../constants/formOptions'

const HydraulicBalancingWizard = ({ onBack }) => {
  const initialFormData = {
    // Schritt 1: Gebäude-Grunddaten
    buildingType: '', constructionYear: '', totalLivingSpace: '', 
    numberOfRooms: '', insulationLevel: '', 
    
    // Schritt 2: Problem-Analyse  
    problemDescription: [], urgency: '', currentComfortLevel: '',
    specificProblems: '', hasRecentChanges: '', recentChangesDetails: '',
    
    // Schritt 3: Heizsystem-Details
    heatingSystemType: '', heatGenerator: '', heatGeneratorAge: '',
    heatGeneratorPower: '', distributionSystem: '',
    
    // Schritt 4: Pumpen & Regelung
    pumpType: '', pumpAge: '', valveType: '', 
    heatingCurve: '', currentFlowTemperature: '', currentReturnTemperature: '',
    hasReturnTemperatureControl: '', hasDifferentialPressureControl: '',
    
    // Schritt 5: Bestandsaufnahme Räume
    numberOfHeatingCircuits: '', largestRoom: '', smallestRoom: '',
    problemRooms: '', roomsWithPoorHeating: '',
    averageSystemPressure: '', energyConsumptionLastYear: '',
    
    // Schritt 6: Kontaktdaten
    procedureType: '', title: '', firstName: '', lastName: '', 
    email: '', phone: '', street: '', zipCode: '', city: '', state: '',
    besichtigung: '', besichtigungTermin: '', additionalInfo: ''
  }

  const steps = [
    { id: 1, title: 'Gebäudedaten', description: 'Grunddaten zum Gebäude' },
    { id: 2, title: 'Problem-Analyse', description: 'Aktuelle Probleme beschreiben' },
    { id: 3, title: 'Heizsystem', description: 'Details zur Heizungsanlage' },
    { id: 4, title: 'Pumpe & Regelung', description: 'Technische Komponenten' },
    { id: 5, title: 'Bestandsaufnahme', description: 'Räume und Verbrauch' },
    { id: 6, title: 'Kontakt & Abschluss', description: 'Ihre Kontaktdaten' }
  ]

  const validationRules = {
    1: ['buildingType'],
    2: ['urgency'],
    3: ['heatingSystemType', 'heatGenerator'],
    4: [],
    5: [],
    6: ['firstName', 'lastName', 'email', 'phone', 'street', 'zipCode', 'city']
  }

  const {
    formData,
    updateFormData,
    currentStep,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    isStepValid
  } = useWizard(initialFormData, steps.length, validationRules)

  const handleSubmit = () => {
    console.log('Hydraulischer Abgleich Anfrage:', formData)
    alert('Vielen Dank! Wir werden uns zeitnah bei Ihnen melden, um den hydraulischen Abgleich zu besprechen.')
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🏠 Gebäude-Grunddaten:</strong> Diese Informationen helfen uns, die Komplexität 
              und den Umfang des hydraulischen Abgleichs zu bestimmen.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Gebäudetyp"
                required
                value={formData.buildingType}
                onChange={(e) => updateFormData('buildingType', e.target.value)}
                options={hydraulicBalancingBuildingTypeOptions}
              />
              <Select
                label="Baujahr/Baualtersklasse"
                value={formData.constructionYear}
                onChange={(e) => updateFormData('constructionYear', e.target.value)}
                options={constructionYearOptions}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Beheizte Wohnfläche (m²)"
                type="number"
                value={formData.totalLivingSpace}
                onChange={(e) => updateFormData('totalLivingSpace', e.target.value)}
                placeholder="z.B. 150"
                min="30"
                max="2000"
              />
              <Input
                label="Anzahl der Räume"
                type="number"
                value={formData.numberOfRooms}
                onChange={(e) => updateFormData('numberOfRooms', e.target.value)}
                placeholder="z.B. 6"
                min="1"
                max="50"
              />
            </div>
            
            <Select
              label="Dämmstandard des Gebäudes"
              value={formData.insulationLevel}
              onChange={(e) => updateFormData('insulationLevel', e.target.value)}
              options={insulationLevelOptions}
              helperText="Beeinflusst die benötigten Systemtemperaturen"
            />
          </div>
        )

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🔍 Problem-Analyse:</strong> Beschreiben Sie die aktuellen Probleme mit Ihrer Heizung. 
              Dies hilft bei der gezielten Optimierung.
            </HelpText>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Welche Probleme treten auf? (Mehrfachauswahl möglich)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {problemDescriptionOptions.map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.problemDescription.includes(option.value)}
                        onChange={(e) => {
                          const current = formData.problemDescription || []
                          if (e.target.checked) {
                            updateFormData('problemDescription', [...current, option.value])
                          } else {
                            updateFormData('problemDescription', current.filter(v => v !== option.value))
                          }
                        }}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-900">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <Select
                label="Dringlichkeit"
                required
                value={formData.urgency}
                onChange={(e) => updateFormData('urgency', e.target.value)}
                options={urgencyHydraulicOptions}
              />
              
              <RadioGroup
                label="Aktueller Komfort in den Räumen"
                name="currentComfortLevel"
                options={[
                  { value: 'sehr-schlecht', label: 'Sehr schlecht - manche Räume bleiben kalt' },
                  { value: 'schlecht', label: 'Schlecht - ungleichmäßige Wärmeverteilung' },
                  { value: 'mittelmäßig', label: 'Mittelmäßig - funktioniert, aber nicht optimal' },
                  { value: 'gut', label: 'Gut - nur kleine Verbesserungen gewünscht' }
                ]}
                value={formData.currentComfortLevel}
                onChange={(e) => updateFormData('currentComfortLevel', e.target.value)}
                layout="vertical"
              />
              
              <Input
                label="Beschreibung spezifischer Probleme"
                type="textarea"
                value={formData.specificProblems}
                onChange={(e) => updateFormData('specificProblems', e.target.value)}
                placeholder="z.B. Gluckern in den Leitungen, bestimmte Heizkörper werden nicht warm..."
                rows={3}
              />
              
              <RadioGroup
                label="Gab es kürzlich Änderungen am Heizsystem?"
                name="hasRecentChanges"
                options={[
                  { value: 'ja', label: 'Ja' },
                  { value: 'nein', label: 'Nein' }
                ]}
                value={formData.hasRecentChanges}
                onChange={(e) => updateFormData('hasRecentChanges', e.target.value)}
                layout="horizontal"
              />
              
              {formData.hasRecentChanges === 'ja' && (
                <Input
                  label="Details zu den Änderungen"
                  type="textarea"
                  value={formData.recentChangesDetails}
                  onChange={(e) => updateFormData('recentChangesDetails', e.target.value)}
                  placeholder="z.B. Neue Heizkörper, Rohrleitungen, Pumpe, Modernisierung..."
                  rows={2}
                />
              )}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>⚙️ Heizsystem-Details:</strong> Informationen zu Ihrer Heizungsanlage sind entscheidend 
              für die Berechnung des optimalen hydraulischen Abgleichs.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Art des Heizsystems"
                required
                value={formData.heatingSystemType}
                onChange={(e) => updateFormData('heatingSystemType', e.target.value)}
                options={heatingSystemDetailOptions}
              />
              <Select
                label="Wärmeerzeuger"
                required
                value={formData.heatGenerator}
                onChange={(e) => updateFormData('heatGenerator', e.target.value)}
                options={heatGeneratorOptions}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Alter des Wärmeerzeugers (Jahre)"
                type="number"
                value={formData.heatGeneratorAge}
                onChange={(e) => updateFormData('heatGeneratorAge', e.target.value)}
                placeholder="z.B. 8"
                min="0"
                max="50"
              />
              <Input
                label="Heizleistung (kW)"
                type="number"
                value={formData.heatGeneratorPower}
                onChange={(e) => updateFormData('heatGeneratorPower', e.target.value)}
                placeholder="z.B. 15"
                min="3"
                max="500"
                helperText="Falls bekannt - steht meist auf dem Typenschild"
              />
            </div>
            
            <Select
              label="Verteilsystem"
              value={formData.distributionSystem}
              onChange={(e) => updateFormData('distributionSystem', e.target.value)}
              options={heatingDistributionSystemOptions}
              helperText="Art der Rohrverlegung und Verteilung"
            />
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🔧 Pumpe & Regelung:</strong> Details zu Pumpe, Ventilen und aktuellen Einstellungen 
              sind wichtig für die Optimierung des Systems.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Typ der Umwälzpumpe"
                value={formData.pumpType}
                onChange={(e) => updateFormData('pumpType', e.target.value)}
                options={pumpTypeOptions}
              />
              <Input
                label="Alter der Pumpe (Jahre)"
                type="number"
                value={formData.pumpAge}
                onChange={(e) => updateFormData('pumpAge', e.target.value)}
                placeholder="z.B. 5"
                min="0"
                max="50"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Art der Ventile"
                value={formData.valveType}
                onChange={(e) => updateFormData('valveType', e.target.value)}
                options={valveTypeOptions}
              />
              <Select
                label="Heizkurven-Einstellung"
                value={formData.heatingCurve}
                onChange={(e) => updateFormData('heatingCurve', e.target.value)}
                options={heatingCurveOptions}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Aktuelle Vorlauftemperatur (°C)"
                type="number"
                value={formData.currentFlowTemperature}
                onChange={(e) => updateFormData('currentFlowTemperature', e.target.value)}
                placeholder="z.B. 70"
                min="30"
                max="90"
                helperText="Falls am Kessel ablesbar"
              />
              <Input
                label="Aktuelle Rücklauftemperatur (°C)"
                type="number"
                value={formData.currentReturnTemperature}
                onChange={(e) => updateFormData('currentReturnTemperature', e.target.value)}
                placeholder="z.B. 55"
                min="20"
                max="80"
                helperText="Falls am Kessel ablesbar"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RadioGroup
                label="Rücklauftemperaturregelung vorhanden?"
                name="hasReturnTemperatureControl"
                options={[
                  { value: 'ja', label: 'Ja' },
                  { value: 'nein', label: 'Nein' },
                  { value: 'unbekannt', label: 'Unbekannt' }
                ]}
                value={formData.hasReturnTemperatureControl}
                onChange={(e) => updateFormData('hasReturnTemperatureControl', e.target.value)}
                layout="horizontal"
              />
              <RadioGroup
                label="Differenzdruckregelung vorhanden?"
                name="hasDifferentialPressureControl"
                options={[
                  { value: 'ja', label: 'Ja' },
                  { value: 'nein', label: 'Nein' },
                  { value: 'unbekannt', label: 'Unbekannt' }
                ]}
                value={formData.hasDifferentialPressureControl}
                onChange={(e) => updateFormData('hasDifferentialPressureControl', e.target.value)}
                layout="horizontal"
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>📊 Bestandsaufnahme:</strong> Informationen zu Heizkreisen, Räumen und Verbrauch 
              für eine vollständige Heizlastberechnung nach Verfahren B.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Anzahl Heizkreise"
                type="number"
                value={formData.numberOfHeatingCircuits}
                onChange={(e) => updateFormData('numberOfHeatingCircuits', e.target.value)}
                placeholder="z.B. 8"
                min="1"
                max="50"
                helperText="Anzahl aller Heizkörper/Heizkreise"
              />
              <Input
                label="Größter Raum (m²)"
                type="number"
                value={formData.largestRoom}
                onChange={(e) => updateFormData('largestRoom', e.target.value)}
                placeholder="z.B. 45"
                min="5"
                max="200"
              />
              <Input
                label="Kleinster Raum (m²)"
                type="number"
                value={formData.smallestRoom}
                onChange={(e) => updateFormData('smallestRoom', e.target.value)}
                placeholder="z.B. 8"
                min="3"
                max="100"
              />
            </div>
            
            <Input
              label="Räume mit Heizproblemen"
              type="textarea"
              value={formData.problemRooms}
              onChange={(e) => updateFormData('problemRooms', e.target.value)}
              placeholder="z.B. Wohnzimmer wird nicht warm, Badezimmer braucht sehr lange..."
              rows={2}
            />
            
            <Input
              label="Räume, die besonders schlecht heizen"
              type="textarea"
              value={formData.roomsWithPoorHeating}
              onChange={(e) => updateFormData('roomsWithPoorHeating', e.target.value)}
              placeholder="z.B. Schlafzimmer Obergeschoss, Küche..."
              rows={2}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Systemdruck (bar)"
                type="number"
                step="0.1"
                value={formData.averageSystemPressure}
                onChange={(e) => updateFormData('averageSystemPressure', e.target.value)}
                placeholder="z.B. 1.5"
                min="0.5"
                max="3.0"
                helperText="Ablesbar am Manometer der Heizung"
              />
              <Input
                label="Jahresverbrauch (kWh oder Liter)"
                type="number"
                value={formData.energyConsumptionLastYear}
                onChange={(e) => updateFormData('energyConsumptionLastYear', e.target.value)}
                placeholder="z.B. 15000"
                helperText="Letzter bekannter Jahresverbrauch"
              />
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>✅ Kontakt & Abschluss:</strong> Zum Abschluss benötigen wir Ihre Kontaktdaten 
              für die weitere Bearbeitung und Terminvereinbarung.
            </HelpText>
            
            <Alert variant="info" title="Verfahren B - Förderung möglich">
              Wir führen den hydraulischen Abgleich nach Verfahren B mit Heizlastberechnung durch. 
              Dies ist förderfähig über BAFA (bis zu 20% Zuschuss bei iSFP).
            </Alert>
            
            <RadioGroup
              label="Verfahren für hydraulischen Abgleich"
              name="procedureType"
              options={[
                { value: 'verfahren-b', label: 'Verfahren B (mit Heizlastberechnung, förderfähig)' },
                { value: 'verfahren-a', label: 'Verfahren A (vereinfacht, schneller)' }
              ]}
              value={formData.procedureType}
              onChange={(e) => updateFormData('procedureType', e.target.value)}
              layout="vertical"
            />
            
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
                label="E-Mail"
                required
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="max.mustermann@email.de"
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Straße & Hausnummer"
                required
                value={formData.street}
                onChange={(e) => updateFormData('street', e.target.value)}
                placeholder="Musterstraße 123"
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
            
            <RadioGroup
              label="Besichtigung vor Ort erwünscht?"
              name="besichtigung"
              options={[
                { value: 'ja-erforderlich', label: 'Ja, für genaue Analyse erforderlich' },
                { value: 'ja-wuenschenswert', label: 'Ja, wünschenswert' },
                { value: 'nein', label: 'Nein, erstmal Angebot' }
              ]}
              value={formData.besichtigung}
              onChange={(e) => updateFormData('besichtigung', e.target.value)}
              layout="vertical"
            />
            
            {(formData.besichtigung === 'ja-erforderlich' || formData.besichtigung === 'ja-wuenschenswert') && (
              <Input
                label="Wunschtermin für Besichtigung"
                type="date"
                value={formData.besichtigungTermin}
                onChange={(e) => updateFormData('besichtigungTermin', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            )}
            
            <Input
              label="Zusätzliche Informationen"
              type="textarea"
              value={formData.additionalInfo}
              onChange={(e) => updateFormData('additionalInfo', e.target.value)}
              placeholder="Weitere wichtige Informationen zu Ihrer Heizungsanlage..."
              rows={3}
            />
            
            <div className="pt-6">
              <Button
                size="xl"
                onClick={handleSubmit}
                className="w-full"
              >
                Anfrage für hydraulischen Abgleich senden
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
            <div className="text-4xl mr-4">🔧</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Hydraulischer Abgleich</h1>
              <p className="text-lg text-gray-600">Optimierung Ihrer Heizungsanlage für maximale Effizienz</p>
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
            variant="outline"
            onClick={prevStep}
            disabled={isFirstStep}
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
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default HydraulicBalancingWizard 