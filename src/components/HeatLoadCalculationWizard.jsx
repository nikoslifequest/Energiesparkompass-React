import { Button, Input, Select, Card, Stepper, RadioGroup, Alert, HelpText } from './ui'
import { useWizard } from '../hooks/useWizard'
import {
  buildingTypeOptions,
  titleOptions,
  stateOptions,
  energyCertificateOptions,
  monumentOptions,
  calculationMethodOptions,
  calculationPurposeOptions,
  heatingSystemPlanOptions,
  currentHeatingSystemOptions,
  buildingQualityOptions,
  occupancyProfileOptions,
  roomTemperaturePreferencesOptions,
  buildingComplexityOptions,
  timeframeUrgencyOptions,
  previousCalculationsOptions,
  dataAvailabilityOptions,
  specialBuildingFeaturesOptions,
  softwarePreferenceOptions,
  contactPreferenceOptions,
  urgencyOptions,
  implementationTimeOptions,
  preferredMeetingOptions,
  consultationLocationOptions,
  utilizationOptions,
  constructionYearOptions
} from '../constants/formOptions'

const HeatLoadCalculationWizard = ({ onBack }) => {
  const initialFormData = {
    // Gebäudeinformationen
    buildingType: '', buildingYear: '', livingSpace: '', floors: '',
    street: '', zipCode: '', city: '', state: '',
    monument: '', energyCertificate: '', utilization: '',
    buildingQuality: '', buildingComplexity: '', specialFeatures: '',
    
    // Aktuelle Heizsituation & Planung
    currentHeatingSystem: '', heatingSystemPlan: '', occupancyProfile: '',
    roomTemperatures: '', energyConsumption: '', comfortIssues: '',
    
    // Berechnungsanforderungen
    calculationMethod: '', calculationPurpose: '', timeframeUrgency: '',
    previousCalculations: '', dataAvailability: '', softwarePreference: '',
    specificRequirements: '', accuracyLevel: '',
    
    // Projektdetails
    projectType: '', budgetRange: '', implementation: '',
    heatingSystemBudget: '', additionalServices: '',
    
    // Datengrundlage
    buildingPlans: '', uValues: '', consumptionData: '',
    thermalImages: '', buildingSurvey: '', climateData: '',
    
    // Kontaktdaten
    title: '', firstName: '', lastName: '', email: '', phone: '',
    contactPreference: '', company: '', position: '', preferredMeeting: '',
    consultationLocation: '', availableTimes: '', projectNotes: ''
  }

  const validationRules = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: ['firstName', 'lastName', 'email', 'phone']
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
    { id: 1, title: 'Gebäude & Projekt', description: 'Grunddaten und Projektziel' },
    { id: 2, title: 'Heizung & Komfort', description: 'Aktuelle & geplante Heizsysteme' },
    { id: 3, title: 'Berechnungsart', description: 'Methode und Anforderungen' },
    { id: 4, title: 'Datengrundlage', description: 'Verfügbare Unterlagen' },
    { id: 5, title: 'Kontakt', description: 'Ihre Kontaktdaten' },
    { id: 6, title: 'Zusammenfassung', description: 'Überprüfung & Absendung' }
  ]

  const handleSubmit = () => {
    console.log('Heizlastberechnung Anfrage abgesendet:', formData)
    alert('Vielen Dank! Ihre Anfrage zur Heizlastberechnung wurde übermittelt. Ein Fachingenieur wird sich binnen 24 Stunden bei Ihnen melden.')
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🏠 Gebäude & Projekt:</strong> Grundinformationen zu Ihrem Gebäude und dem 
              geplanten Projekt. Diese Daten helfen uns bei der Auswahl der optimalen Berechnungsmethode.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Gebäudetyp"
                value={formData.buildingType}
                onChange={(e) => updateFormData('buildingType', e.target.value)}
                options={buildingTypeOptions}
              />
              <Select
                label="Baujahr"
                value={formData.buildingYear}
                onChange={(e) => updateFormData('buildingYear', e.target.value)}
                options={constructionYearOptions}
                helpText="Wichtig für energetische Bewertung"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Wohn-/Nutzfläche (m²)"
                type="number"
                value={formData.livingSpace}
                onChange={(e) => updateFormData('livingSpace', e.target.value)}
                placeholder="z.B. 150"
                min="1"
              />
              <Input
                label="Anzahl Etagen"
                type="number"
                value={formData.floors}
                onChange={(e) => updateFormData('floors', e.target.value)}
                placeholder="z.B. 2"
                min="1"
                max="10"
              />
              <Input
                label="Raumhöhe (m)"
                type="number"
                step="0.1"
                value={formData.roomHeight}
                onChange={(e) => updateFormData('roomHeight', e.target.value)}
                placeholder="z.B. 2.5"
                helpText="Durchschnittliche Höhe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Straße & Hausnummer"
                value={formData.street}
                onChange={(e) => updateFormData('street', e.target.value)}
                placeholder="Musterstraße 123"
              />
              <Input
                label="PLZ"
                value={formData.zipCode}
                onChange={(e) => updateFormData('zipCode', e.target.value)}
                placeholder="12345"
                maxLength="5"
                helpText="Für Klimadaten nach DIN 12831"
              />
              <Input
                label="Ort"
                value={formData.city}
                onChange={(e) => updateFormData('city', e.target.value)}
                placeholder="Musterstadt"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Select
                label="Bundesland"
                value={formData.state}
                onChange={(e) => updateFormData('state', e.target.value)}
                options={stateOptions}
              />
              <Select
                label="Nutzung"
                value={formData.utilization}
                onChange={(e) => updateFormData('utilization', e.target.value)}
                options={utilizationOptions}
              />
              <RadioGroup
                label="Denkmalschutz"
                name="monument"
                options={monumentOptions}
                value={formData.monument}
                onChange={(e) => updateFormData('monument', e.target.value)}
                layout="horizontal"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Gebäudequalität (energetisch)"
                value={formData.buildingQuality}
                onChange={(e) => updateFormData('buildingQuality', e.target.value)}
                options={buildingQualityOptions}
                helpText="Einschätzung des Dämmstandards"
              />
              <Select
                label="Gebäudekomplexität"
                value={formData.buildingComplexity}
                onChange={(e) => updateFormData('buildingComplexity', e.target.value)}
                options={buildingComplexityOptions}
                helpText="Beeinflusst Berechnungsaufwand"
              />
            </div>

            <Alert variant="info" title="Hinweis zur Heizlastberechnung">
              <div className="text-sm space-y-1">
                <div>• <strong>DIN EN 12831:</strong> Normgerechte Berechnung für Heizungsauslegung</div>
                <div>• <strong>Raumweise Berechnung:</strong> Präzise Ermittlung für jeden Raum</div>
                <div>• <strong>Klimadaten:</strong> Standortspezifische Auslegungstemperaturen</div>
                <div>• <strong>Wärmebrücken:</strong> Berücksichtigung von Konstruktionsdetails</div>
              </div>
            </Alert>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🔥 Heizung & Komfort:</strong> Informationen zur aktuellen und geplanten 
              Heizsituation sowie zu Ihren Komfortansprüchen.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Aktuelle Heizung"
                value={formData.currentHeatingSystem}
                onChange={(e) => updateFormData('currentHeatingSystem', e.target.value)}
                options={currentHeatingSystemOptions}
              />
              <Select
                label="Geplantes Heizsystem"
                value={formData.heatingSystemPlan}
                onChange={(e) => updateFormData('heatingSystemPlan', e.target.value)}
                options={heatingSystemPlanOptions}
                helpText="Für optimale Dimensionierung"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Nutzungsprofil"
                value={formData.occupancyProfile}
                onChange={(e) => updateFormData('occupancyProfile', e.target.value)}
                options={occupancyProfileOptions}
                helpText="Beeinflusst Heizlastberechnung"
              />
              <Select
                label="Temperaturwünsche"
                value={formData.roomTemperatures}
                onChange={(e) => updateFormData('roomTemperatures', e.target.value)}
                options={roomTemperaturePreferencesOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Aktueller Energieverbrauch (kWh/Jahr)"
                type="number"
                value={formData.energyConsumption}
                onChange={(e) => updateFormData('energyConsumption', e.target.value)}
                placeholder="z.B. 15000"
                helpText="Falls bekannt (Heizung + Warmwasser)"
              />
              <Select
                label="Besondere Gebäudemerkmale"
                value={formData.specialFeatures}
                onChange={(e) => updateFormData('specialFeatures', e.target.value)}
                options={specialBuildingFeaturesOptions}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bekannte Komfort- oder Heizprobleme
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="3"
                value={formData.comfortIssues}
                onChange={(e) => updateFormData('comfortIssues', e.target.value)}
                placeholder="z.B. kalte Räume, ungleichmäßige Erwärmung, Zugluft, hohe Heizkosten..."
              />
            </div>

            <Alert variant="warning" title="Wichtig für Wärmepumpen">
              <div className="text-sm">
                Bei Wärmepumpen ist eine präzise Heizlastberechnung besonders wichtig, da sie bei 
                Überdimensionierung ineffizient arbeiten und bei Unterdimensionierung die 
                gewünschte Raumtemperatur nicht erreichen.
              </div>
            </Alert>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>📊 Berechnungsart:</strong> Wählen Sie die gewünschte Berechnungsmethode 
              und definieren Sie die Anforderungen an die Heizlastberechnung.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Zweck der Berechnung"
                value={formData.calculationPurpose}
                onChange={(e) => updateFormData('calculationPurpose', e.target.value)}
                options={calculationPurposeOptions}
                helpText="Bestimmt die erforderliche Genauigkeit"
              />
              <Select
                label="Gewünschte Berechnungsmethode"
                value={formData.calculationMethod}
                onChange={(e) => updateFormData('calculationMethod', e.target.value)}
                options={calculationMethodOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Zeitrahmen / Dringlichkeit"
                value={formData.timeframeUrgency}
                onChange={(e) => updateFormData('timeframeUrgency', e.target.value)}
                options={timeframeUrgencyOptions}
              />
              <Select
                label="Vorherige Berechnungen"
                value={formData.previousCalculations}
                onChange={(e) => updateFormData('previousCalculations', e.target.value)}
                options={previousCalculationsOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Software-Präferenz"
                value={formData.softwarePreference}
                onChange={(e) => updateFormData('softwarePreference', e.target.value)}
                options={softwarePreferenceOptions}
                helpText="Falls gewünscht"
              />
              <Select
                label="Geplanter Umsetzungszeitraum"
                value={formData.implementation}
                onChange={(e) => updateFormData('implementation', e.target.value)}
                options={implementationTimeOptions}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Spezielle Anforderungen an die Berechnung
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="3"
                value={formData.specificRequirements}
                onChange={(e) => updateFormData('specificRequirements', e.target.value)}
                placeholder="z.B. Berücksichtigung von Wärmebrücken, raumweise Aufstellung, Heizkörperauslegung, hydraulischer Abgleich..."
              />
            </div>

            <Alert variant="info" title="Berechnungsmethoden im Vergleich">
              <div className="text-sm space-y-2">
                <div><strong>DIN EN 12831 detailliert:</strong> Höchste Genauigkeit, alle Parameter berücksichtigt</div>
                <div><strong>DIN EN 12831 vereinfacht:</strong> Schneller, für Standardgebäude ausreichend</div>
                <div><strong>DIN EN 15378 überschlägig:</strong> Grobe Schätzung, erste Orientierung</div>
              </div>
            </Alert>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>📋 Datengrundlage:</strong> Verfügbare Unterlagen und Daten bestimmen die 
              Qualität und den Aufwand der Heizlastberechnung.
            </HelpText>
            
            <div>
              <Select
                label="Verfügbare Unterlagen"
                value={formData.dataAvailability}
                onChange={(e) => updateFormData('dataAvailability', e.target.value)}
                options={dataAvailabilityOptions}
                helpText="Bestimmt Berechnungsansatz"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RadioGroup
                label="Baupläne vorhanden"
                name="buildingPlans"
                options={[
                  { value: 'complete', label: 'Vollständig' },
                  { value: 'partial', label: 'Teilweise' },
                  { value: 'none', label: 'Keine' }
                ]}
                value={formData.buildingPlans}
                onChange={(e) => updateFormData('buildingPlans', e.target.value)}
                layout="horizontal"
              />
              <RadioGroup
                label="U-Werte bekannt"
                name="uValues"
                options={[
                  { value: 'measured', label: 'Gemessen' },
                  { value: 'calculated', label: 'Berechnet' },
                  { value: 'estimated', label: 'Geschätzt' },
                  { value: 'unknown', label: 'Unbekannt' }
                ]}
                value={formData.uValues}
                onChange={(e) => updateFormData('uValues', e.target.value)}
                layout="horizontal"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RadioGroup
                label="Verbrauchsdaten verfügbar"
                name="consumptionData"
                options={[
                  { value: 'detailed', label: 'Detailliert (mehrere Jahre)' },
                  { value: 'basic', label: 'Grunddaten vorhanden' },
                  { value: 'estimates', label: 'Nur Schätzungen' },
                  { value: 'none', label: 'Keine Daten' }
                ]}
                value={formData.consumptionData}
                onChange={(e) => updateFormData('consumptionData', e.target.value)}
                layout="horizontal"
              />
              <RadioGroup
                label="Energieausweis"
                name="energyCertificate"
                options={energyCertificateOptions}
                value={formData.energyCertificate}
                onChange={(e) => updateFormData('energyCertificate', e.target.value)}
                layout="horizontal"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RadioGroup
                label="Thermografieaufnahmen"
                name="thermalImages"
                options={[
                  { value: 'available', label: 'Vorhanden' },
                  { value: 'planned', label: 'Geplant' },
                  { value: 'none', label: 'Nicht vorhanden' }
                ]}
                value={formData.thermalImages}
                onChange={(e) => updateFormData('thermalImages', e.target.value)}
                layout="horizontal"
              />
              <RadioGroup
                label="Gebäudeaufnahme"
                name="buildingSurvey"
                options={[
                  { value: 'professional', label: 'Professionell durchgeführt' },
                  { value: 'owner_made', label: 'Eigene Aufnahme' },
                  { value: 'needed', label: 'Wird benötigt' }
                ]}
                value={formData.buildingSurvey}
                onChange={(e) => updateFormData('buildingSurvey', e.target.value)}
                layout="horizontal"
              />
            </div>

            <Alert variant="warning" title="Datenqualität bestimmt Ergebnis">
              <div className="text-sm">
                Je vollständiger und genauer die verfügbaren Daten, desto präziser kann die 
                Heizlastberechnung durchgeführt werden. Fehlende Daten werden über 
                Standardwerte bzw. konservative Annahmen abgedeckt.
              </div>
            </Alert>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>📞 Kontaktdaten:</strong> Damit unser Fachingenieur Sie für die 
              Heizlastberechnung und Rückfragen erreichen kann.
            </HelpText>
            
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Firma/Unternehmen"
                value={formData.company}
                onChange={(e) => updateFormData('company', e.target.value)}
                placeholder="Optional"
              />
              <Input
                label="Position/Funktion"
                value={formData.position}
                onChange={(e) => updateFormData('position', e.target.value)}
                placeholder="z.B. Planer, Architekt, Eigentümer"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Bevorzugte Kontaktart"
                value={formData.contactPreference}
                onChange={(e) => updateFormData('contactPreference', e.target.value)}
                options={contactPreferenceOptions}
              />
              <Select
                label="Bevorzugte Uhrzeit"
                value={formData.preferredMeeting}
                onChange={(e) => updateFormData('preferredMeeting', e.target.value)}
                options={preferredMeetingOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Beratungsort"
                value={formData.consultationLocation}
                onChange={(e) => updateFormData('consultationLocation', e.target.value)}
                options={consultationLocationOptions}
              />
              <Input
                label="Verfügbare Zeiten"
                value={formData.availableTimes}
                onChange={(e) => updateFormData('availableTimes', e.target.value)}
                placeholder="z.B. Mo-Fr 9-17 Uhr"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zusätzliche Hinweise zum Projekt
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="3"
                value={formData.projectNotes}
                onChange={(e) => updateFormData('projectNotes', e.target.value)}
                placeholder="z.B. Besonderheiten des Gebäudes, spezielle Anforderungen, Terminwünsche..."
              />
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <Alert variant="success" title="Ihre Heizlastberechnung-Anfrage ist fertig!">
              Bitte überprüfen Sie Ihre Angaben und senden Sie das Formular ab.
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Gebäude & Berechnung</h3>
                <div className="space-y-2 text-sm">
                  {formData.buildingType && <div><span className="font-medium">Typ:</span> {buildingTypeOptions.find(o => o.value === formData.buildingType)?.label}</div>}
                  {formData.livingSpace && <div><span className="font-medium">Fläche:</span> {formData.livingSpace} m²</div>}
                  {formData.calculationPurpose && <div><span className="font-medium">Zweck:</span> {calculationPurposeOptions.find(o => o.value === formData.calculationPurpose)?.label}</div>}
                  {formData.calculationMethod && <div><span className="font-medium">Methode:</span> {calculationMethodOptions.find(o => o.value === formData.calculationMethod)?.label}</div>}
                  {formData.heatingSystemPlan && <div><span className="font-medium">Geplante Heizung:</span> {heatingSystemPlanOptions.find(o => o.value === formData.heatingSystemPlan)?.label}</div>}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Kontakt & Zeitrahmen</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</div>
                  <div><span className="font-medium">E-Mail:</span> {formData.email}</div>
                  <div><span className="font-medium">Telefon:</span> {formData.phone}</div>
                  {formData.company && <div><span className="font-medium">Firma:</span> {formData.company}</div>}
                  {formData.timeframeUrgency && <div><span className="font-medium">Zeitrahmen:</span> {timeframeUrgencyOptions.find(o => o.value === formData.timeframeUrgency)?.label}</div>}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                size="xl"
                onClick={handleSubmit}
                className="w-full"
              >
                Heizlastberechnung beauftragen
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="wizard-background">
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
            <div className="text-4xl mr-4">📊</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Heizlastberechnung</h1>
              <p className="text-lg text-gray-600">Normgerechte Berechnung nach DIN EN 12831 für optimale Heizungsauslegung</p>
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

export default HeatLoadCalculationWizard 