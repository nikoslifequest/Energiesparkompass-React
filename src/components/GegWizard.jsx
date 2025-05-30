import { Button, Input, Select, Card, Stepper, RadioGroup, Alert, HelpText } from './ui'
import { useWizard } from '../hooks/useWizard'
import {
  buildingTypeOptions,
  titleOptions,
  stateOptions,
  heatingTypeOptions,
  heatingStatusOptions,
  communityTypeOptions,
  heatPlanOptions,
  propertyTypeOptions,
  heatingUrgencyOptions,
  consultationReasonOptions,
  insulationStatusOptions,
  windowStatusOptions,
  budgetRangeOptions,
  contactPreferenceOptions,
  energyCertificateOptions,
  monumentOptions
} from '../constants/formOptions'

const GegWizard = ({ onBack }) => {
  const initialFormData = {
    // Grunddaten Gebäude & Lage
    buildingType: '', buildingYear: '', livingSpace: '', units: '',
    street: '', zipCode: '', city: '', communitySize: '', heatPlan: '',
    monument: '', energyCertificate: '',
    
    // Aktuelle Heizsituation
    heatingType: '', heatingAge: '', heatingStatus: '', energyConsumption: '',
    gasConnection: '', renewableEnergy: '',
    
    // Beratungsanlass & Planung
    consultationReason: '', heatingUrgency: '', propertyType: '',
    plannedMeasures: '', budgetRange: '',
    
    // Gebäudezustand (Kurzeinschätzung)
    insulationStatus: '', windowStatus: '', previousRenovations: '',
    
    // Kontaktdaten
    title: '', firstName: '', lastName: '', email: '', phone: '',
    contactPreference: '', availableTimes: '', notes: ''
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
    { id: 1, title: 'Gebäude & Lage', description: 'Grundinformationen zum Objekt' },
    { id: 2, title: 'Heizung', description: 'Aktuelle Heizsituation' },
    { id: 3, title: 'Beratungsgrund', description: 'Ihr Anliegen' },
    { id: 4, title: 'Gebäudezustand', description: 'Kurzeinschätzung' },
    { id: 5, title: 'Kontakt', description: 'Ihre Daten' },
    { id: 6, title: 'Zusammenfassung', description: 'Überprüfung' }
  ]

  const handleSubmit = () => {
    console.log('GEG Beratungsanfrage abgesendet:', formData)
    alert('Vielen Dank! Ihre Anfrage wurde übermittelt. Wir melden uns binnen 24 Stunden bei Ihnen.')
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🏠 Gebäudedaten:</strong> Bitte geben Sie die Grundinformationen zu Ihrem Gebäude ein. 
              Falls Sie nicht alle Angaben zur Hand haben, können Sie Felder frei lassen.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Gebäudetyp"
                value={formData.buildingType}
                onChange={(e) => updateFormData('buildingType', e.target.value)}
                options={buildingTypeOptions}
              />
              <Input
                label="Baujahr"
                type="number"
                value={formData.buildingYear}
                onChange={(e) => updateFormData('buildingYear', e.target.value)}
                placeholder="z.B. 1985"
                min="1800"
                max="2024"
              />
              <Input
                label="Wohnfläche (m²)"
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
              />
              <Input
                label="Ort"
                value={formData.city}
                onChange={(e) => updateFormData('city', e.target.value)}
                placeholder="Musterstadt"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Gemeindegröße"
                value={formData.communitySize}
                onChange={(e) => updateFormData('communitySize', e.target.value)}
                options={communityTypeOptions}
                helpText="Relevant für GEG-Fristen"
              />
              <Select
                label="Kommunaler Wärmeplan"
                value={formData.heatPlan}
                onChange={(e) => updateFormData('heatPlan', e.target.value)}
                options={heatPlanOptions}
                helpText="Beeinflusst GEG-Anforderungen"
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
        )

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🔥 Heizsituation:</strong> Diese Informationen helfen uns, Ihren Beratungsbedarf 
              einzuschätzen und relevante GEG-Bestimmungen zu berücksichtigen.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Aktueller Heizungstyp"
                value={formData.heatingType}
                onChange={(e) => updateFormData('heatingType', e.target.value)}
                options={heatingTypeOptions}
              />
              <Input
                label="Alter der Heizung (Jahre)"
                type="number"
                value={formData.heatingAge}
                onChange={(e) => updateFormData('heatingAge', e.target.value)}
                placeholder="z.B. 15"
                min="0"
                max="50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Status der Heizung"
                value={formData.heatingStatus}
                onChange={(e) => updateFormData('heatingStatus', e.target.value)}
                options={heatingStatusOptions}
              />
              <Input
                label="Energieverbrauch (kWh/Jahr)"
                type="number"
                value={formData.energyConsumption}
                onChange={(e) => updateFormData('energyConsumption', e.target.value)}
                placeholder="z.B. 15000"
                helpText="Optional - falls bekannt"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RadioGroup
                label="Gasanschluss vorhanden"
                name="gasConnection"
                options={[
                  { value: 'yes', label: 'Ja' },
                  { value: 'no', label: 'Nein' },
                  { value: 'unknown', label: 'Unbekannt' }
                ]}
                value={formData.gasConnection}
                onChange={(e) => updateFormData('gasConnection', e.target.value)}
                layout="horizontal"
              />
              <Input
                label="Erneuerbare Energien"
                value={formData.renewableEnergy}
                onChange={(e) => updateFormData('renewableEnergy', e.target.value)}
                placeholder="z.B. Solar, Wärmepumpe"
                helpText="Falls bereits vorhanden"
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>💡 Ihr Anliegen:</strong> Teilen Sie uns mit, was der Grund für Ihre Beratungsanfrage ist 
              und welche Pläne Sie haben.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Beratungsgrund"
                value={formData.consultationReason}
                onChange={(e) => updateFormData('consultationReason', e.target.value)}
                options={consultationReasonOptions}
              />
              <Select
                label="Zeitrahmen Heizungsaustausch"
                value={formData.heatingUrgency}
                onChange={(e) => updateFormData('heatingUrgency', e.target.value)}
                options={heatingUrgencyOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Eigentumsverhältnis"
                value={formData.propertyType}
                onChange={(e) => updateFormData('propertyType', e.target.value)}
                options={propertyTypeOptions}
              />
              <Select
                label="Budgetrahmen"
                value={formData.budgetRange}
                onChange={(e) => updateFormData('budgetRange', e.target.value)}
                options={budgetRangeOptions}
                helpText="Grobe Einschätzung"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Geplante Maßnahmen
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="3"
                value={formData.plannedMeasures}
                onChange={(e) => updateFormData('plannedMeasures', e.target.value)}
                placeholder="z.B. Heizungsaustausch, Dämmung, Fenster..."
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🏗️ Gebäudezustand:</strong> Eine grobe Einschätzung hilft uns bei der Vorbereitung 
              der Beratung. Lassen Sie Felder frei, wenn Sie unsicher sind.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Dämmzustand"
                value={formData.insulationStatus}
                onChange={(e) => updateFormData('insulationStatus', e.target.value)}
                options={insulationStatusOptions}
              />
              <Select
                label="Fensterqualität"
                value={formData.windowStatus}
                onChange={(e) => updateFormData('windowStatus', e.target.value)}
                options={windowStatusOptions}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bisherige Sanierungsmaßnahmen
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="3"
                value={formData.previousRenovations}
                onChange={(e) => updateFormData('previousRenovations', e.target.value)}
                placeholder="z.B. Dach gedämmt 2015, Fenster erneuert 2018..."
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>📞 Kontaktdaten:</strong> Damit wir Sie für die Beratung erreichen können.
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
              <Select
                label="Bevorzugte Kontaktart"
                value={formData.contactPreference}
                onChange={(e) => updateFormData('contactPreference', e.target.value)}
                options={contactPreferenceOptions}
              />
              <Input
                label="Verfügbare Zeiten"
                value={formData.availableTimes}
                onChange={(e) => updateFormData('availableTimes', e.target.value)}
                placeholder="z.B. Mo-Fr nachmittags"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zusätzliche Anmerkungen
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="3"
                value={formData.notes}
                onChange={(e) => updateFormData('notes', e.target.value)}
                placeholder="Besondere Wünsche, Fragen oder Anmerkungen..."
              />
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <Alert variant="success" title="Ihre GEG-Beratungsanfrage ist fast fertig!">
              Bitte überprüfen Sie Ihre Angaben und senden Sie das Formular ab.
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Gebäude & Heizung</h3>
                <div className="space-y-2 text-sm">
                  {formData.buildingType && <div><span className="font-medium">Typ:</span> {buildingTypeOptions.find(o => o.value === formData.buildingType)?.label}</div>}
                  {formData.buildingYear && <div><span className="font-medium">Baujahr:</span> {formData.buildingYear}</div>}
                  {formData.livingSpace && <div><span className="font-medium">Wohnfläche:</span> {formData.livingSpace} m²</div>}
                  {formData.heatingType && <div><span className="font-medium">Heizung:</span> {heatingTypeOptions.find(o => o.value === formData.heatingType)?.label}</div>}
                  {formData.heatingAge && <div><span className="font-medium">Alter:</span> {formData.heatingAge} Jahre</div>}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Kontakt & Beratung</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</div>
                  <div><span className="font-medium">E-Mail:</span> {formData.email}</div>
                  <div><span className="font-medium">Telefon:</span> {formData.phone}</div>
                  {formData.consultationReason && <div><span className="font-medium">Grund:</span> {consultationReasonOptions.find(o => o.value === formData.consultationReason)?.label}</div>}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                size="xl"
                onClick={handleSubmit}
                className="w-full"
              >
                GEG-Beratungsanfrage absenden
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
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
            <div className="text-4xl mr-4">⚖️</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">GEG-Beratung</h1>
              <p className="text-lg text-gray-600">Gebäudeenergiegesetz - Beratung & Kennenlernen</p>
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

export default GegWizard 