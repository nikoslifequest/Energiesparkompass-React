import { Button, Input, Select, Card, Stepper, RadioGroup, Alert, HelpText } from './ui'
import { useWizard } from '../hooks/useWizard'
import {
  nonResidentialBuildingTypeOptions,
  titleOptions,
  stateOptions,
  energyCertificateOptions,
  monumentOptions,
  companyTypeOptions,
  consultationModuleOptions,
  consultationGoalOptions,
  operatingHoursOptions,
  energyConsumptionRangeOptions,
  coolingSystemOptions,
  ventilationSystemOptions,
  lightingSystemOptions,
  itEquipmentOptions,
  productionProcessOptions,
  energyManagementOptions,
  lastEnergyConsultationOptions,
  investmentReadinessOptions,
  specialRequirementsOptions,
  heatingTypeOptions,
  heatingStatusOptions,
  contactPreferenceOptions,
  urgencyOptions,
  implementationTimeOptions,
  preferredMeetingOptions,
  consultationLocationOptions
} from '../constants/formOptions'

const NonResidentialEnergyWizard = ({ onBack }) => {
  const initialFormData = {
    // Gebäudeinformationen
    buildingType: '', buildingYear: '', netFloorArea: '', floors: '',
    street: '', zipCode: '', city: '', state: '',
    monument: '', energyCertificate: '', companyType: '',
    
    // Unternehmensinformationen
    companyName: '', industry: '', employees: '', operatingHours: '',
    energyConsumptionRange: '', lastEnergyConsultation: '', energyManagement: '',
    
    // Technische Ausstattung
    heatingType: '', heatingStatus: '', coolingSystem: '', ventilationSystem: '',
    lightingSystem: '', itEquipment: '', productionProcess: '',
    
    // Beratungswunsch
    consultationModule: '', consultationGoal: '', specialRequirements: '',
    investmentReadiness: '', implementation: '', urgency: '',
    
    // Terminwünsche
    preferredMeeting: '', consultationLocation: '', additionalNotes: '',
    
    // Kontaktdaten
    title: '', firstName: '', lastName: '', email: '', phone: '',
    contactPreference: '', availableTimes: '', companyDetails: ''
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
    { id: 1, title: 'Gebäude & Unternehmen', description: 'Grunddaten zum Objekt und Unternehmen' },
    { id: 2, title: 'Technische Ausstattung', description: 'Heizung, Kühlung, Lüftung & IT' },
    { id: 3, title: 'Beratungswunsch', description: 'Art und Ziel der Beratung' },
    { id: 4, title: 'Planung & Umsetzung', description: 'Zeitrahmen & Investitionsbereitschaft' },
    { id: 5, title: 'Kontakt', description: 'Ihre Kontaktdaten' },
    { id: 6, title: 'Zusammenfassung', description: 'Überprüfung & Absendung' }
  ]

  const handleSubmit = () => {
    console.log('Nicht-Wohngebäude Energieberatungsanfrage abgesendet:', formData)
    alert('Vielen Dank! Ihre Anfrage zur Energieberatung für Nicht-Wohngebäude wurde übermittelt. Wir melden uns binnen 24 Stunden bei Ihnen.')
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🏢 Gebäude & Unternehmen:</strong> Bitte geben Sie die Grunddaten zu Ihrem Gebäude und Unternehmen ein. 
              Diese sind wichtig für die Bestimmung der Förderfähigkeit und Beratungsart.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Gebäudetyp"
                value={formData.buildingType}
                onChange={(e) => updateFormData('buildingType', e.target.value)}
                options={nonResidentialBuildingTypeOptions}
              />
              <Input
                label="Baujahr"
                type="number"
                value={formData.buildingYear}
                onChange={(e) => updateFormData('buildingYear', e.target.value)}
                placeholder="z.B. 1995"
                min="1800"
                max="2024"
              />
              <Input
                label="Nettogrundfläche (m²)"
                type="number"
                value={formData.netFloorArea}
                onChange={(e) => updateFormData('netFloorArea', e.target.value)}
                placeholder="z.B. 500"
                min="1"
                helpText="Wichtig für Förderhöhe"
              />
              <Input
                label="Anzahl Etagen"
                type="number"
                value={formData.floors}
                onChange={(e) => updateFormData('floors', e.target.value)}
                placeholder="z.B. 3"
                min="1"
                max="20"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Straße & Hausnummer"
                value={formData.street}
                onChange={(e) => updateFormData('street', e.target.value)}
                placeholder="Gewerbestraße 123"
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Select
                label="Bundesland"
                value={formData.state}
                onChange={(e) => updateFormData('state', e.target.value)}
                options={stateOptions}
              />
              <RadioGroup
                label="Denkmalschutz"
                name="monument"
                options={monumentOptions}
                value={formData.monument}
                onChange={(e) => updateFormData('monument', e.target.value)}
                layout="horizontal"
              />
              <Select
                label="Antragstellertyp"
                value={formData.companyType}
                onChange={(e) => updateFormData('companyType', e.target.value)}
                options={companyTypeOptions}
                helpText="Bestimmt Förderfähigkeit"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Firmenname"
                value={formData.companyName}
                onChange={(e) => updateFormData('companyName', e.target.value)}
                placeholder="Muster GmbH"
              />
              <Input
                label="Anzahl Mitarbeiter"
                type="number"
                value={formData.employees}
                onChange={(e) => updateFormData('employees', e.target.value)}
                placeholder="z.B. 25"
                min="1"
              />
            </div>

            <div>
              <Select
                label="Energieausweis vorhanden"
                value={formData.energyCertificate}
                onChange={(e) => updateFormData('energyCertificate', e.target.value)}
                options={energyCertificateOptions}
                helpText="Falls vorhanden, erleichtert dies die Beratung"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>⚙️ Technische Ausstattung:</strong> Informationen zu den vorhandenen technischen Anlagen 
              helfen bei der gezielten Beratung und Identifikation von Effizienzpotenzialen.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Betriebszeiten"
                value={formData.operatingHours}
                onChange={(e) => updateFormData('operatingHours', e.target.value)}
                options={operatingHoursOptions}
              />
              <Select
                label="Energieverbrauch (grob)"
                value={formData.energyConsumptionRange}
                onChange={(e) => updateFormData('energyConsumptionRange', e.target.value)}
                options={energyConsumptionRangeOptions}
                helpText="Wichtig für Antragsberechtigung"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Heizungstyp"
                value={formData.heatingType}
                onChange={(e) => updateFormData('heatingType', e.target.value)}
                options={heatingTypeOptions}
              />
              <Select
                label="Status der Heizung"
                value={formData.heatingStatus}
                onChange={(e) => updateFormData('heatingStatus', e.target.value)}
                options={heatingStatusOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Kühlsystem"
                value={formData.coolingSystem}
                onChange={(e) => updateFormData('coolingSystem', e.target.value)}
                options={coolingSystemOptions}
              />
              <Select
                label="Lüftungssystem"
                value={formData.ventilationSystem}
                onChange={(e) => updateFormData('ventilationSystem', e.target.value)}
                options={ventilationSystemOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Beleuchtung"
                value={formData.lightingSystem}
                onChange={(e) => updateFormData('lightingSystem', e.target.value)}
                options={lightingSystemOptions}
              />
              <Select
                label="IT-Ausstattung"
                value={formData.itEquipment}
                onChange={(e) => updateFormData('itEquipment', e.target.value)}
                options={itEquipmentOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Produktionsprozesse"
                value={formData.productionProcess}
                onChange={(e) => updateFormData('productionProcess', e.target.value)}
                options={productionProcessOptions}
              />
              <Select
                label="Energiemanagement"
                value={formData.energyManagement}
                onChange={(e) => updateFormData('energyManagement', e.target.value)}
                options={energyManagementOptions}
                helpText="Zertifizierte Systeme"
              />
            </div>

            <div>
              <Select
                label="Letzte Energieberatung"
                value={formData.lastEnergyConsultation}
                onChange={(e) => updateFormData('lastEnergyConsultation', e.target.value)}
                options={lastEnergyConsultationOptions}
                helpText="Zwischen Beratungen müssen 4 Jahre liegen"
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🎯 Beratungswunsch:</strong> Definieren Sie Art und Ziel der gewünschten Energieberatung. 
              Die verschiedenen Module haben unterschiedliche Schwerpunkte und Förderhöhen.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Gewünschtes Beratungsmodul"
                value={formData.consultationModule}
                onChange={(e) => updateFormData('consultationModule', e.target.value)}
                options={consultationModuleOptions}
                helpText="Verschiedene BAFA-Module verfügbar"
              />
              <Select
                label="Beratungsziel"
                value={formData.consultationGoal}
                onChange={(e) => updateFormData('consultationGoal', e.target.value)}
                options={consultationGoalOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Besondere Anforderungen"
                value={formData.specialRequirements}
                onChange={(e) => updateFormData('specialRequirements', e.target.value)}
                options={specialRequirementsOptions}
              />
              <Select
                label="Bevorzugter Beratungsort"
                value={formData.consultationLocation}
                onChange={(e) => updateFormData('consultationLocation', e.target.value)}
                options={consultationLocationOptions}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zusätzliche Informationen und Wünsche
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="4"
                value={formData.additionalNotes}
                onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                placeholder="z.B. spezielle Prozesse, geplante Umbauten, besondere Herausforderungen, gewünschte Schwerpunkte der Beratung..."
              />
            </div>

            <Alert variant="info" title="Hinweis zu den Beratungsmodulen">
              <div className="text-sm space-y-2">
                <div><strong>Modul 1 (Energieaudit):</strong> Systematische Erfassung und Bewertung des Energieeinsatzes</div>
                <div><strong>Modul 2 (Energieberatung):</strong> Sanierungskonzept nach DIN V 18599</div>
                <div><strong>Modul 3 (Contracting):</strong> Beratung zu Contracting-Modellen mit Einspargarantie</div>
              </div>
            </Alert>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>📅 Planung & Umsetzung:</strong> Informationen zu Zeitrahmen und Investitionsbereitschaft 
              helfen bei der optimalen Beratungsgestaltung und Fördermittelplanung.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Investitionsbereitschaft"
                value={formData.investmentReadiness}
                onChange={(e) => updateFormData('investmentReadiness', e.target.value)}
                options={investmentReadinessOptions}
              />
              <Select
                label="Geplanter Umsetzungszeitraum"
                value={formData.implementation}
                onChange={(e) => updateFormData('implementation', e.target.value)}
                options={implementationTimeOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Dringlichkeit der Beratung"
                value={formData.urgency}
                onChange={(e) => updateFormData('urgency', e.target.value)}
                options={urgencyOptions}
              />
              <Select
                label="Bevorzugte Uhrzeit"
                value={formData.preferredMeeting}
                onChange={(e) => updateFormData('preferredMeeting', e.target.value)}
                options={preferredMeetingOptions}
              />
            </div>

            <Alert variant="info" title="Förderhöhen nach Nettogrundfläche">
              <div className="text-sm space-y-1">
                <div>• <strong>Unter 200 m²:</strong> max. 850 € (50% Zuschuss)</div>
                <div>• <strong>200-500 m²:</strong> max. 2.500 € (50% Zuschuss)</div>
                <div>• <strong>Über 500 m²:</strong> max. 4.000 € (50% Zuschuss)</div>
              </div>
            </Alert>

            <Alert variant="warning" title="Wichtiger Hinweis">
              Mit der Beratung darf erst nach Bewilligung des Antrags begonnen werden. 
              Planungsleistungen sind vor Antragstellung erlaubt.
            </Alert>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>📞 Kontaktdaten:</strong> Damit wir Sie für die Beratungsterminierung erreichen können.
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
                placeholder="ihre.email@unternehmen.de"
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
                placeholder="z.B. Mo-Fr 9-17 Uhr"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zusätzliche Firmenangaben
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="3"
                value={formData.companyDetails}
                onChange={(e) => updateFormData('companyDetails', e.target.value)}
                placeholder="z.B. Position im Unternehmen, Ansprechpartner vor Ort, besondere Zugangsregelungen..."
              />
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <Alert variant="success" title="Ihre Energieberatungsanfrage für Nicht-Wohngebäude ist fertig!">
              Bitte überprüfen Sie Ihre Angaben und senden Sie das Formular ab.
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Gebäude & Technik</h3>
                <div className="space-y-2 text-sm">
                  {formData.buildingType && <div><span className="font-medium">Typ:</span> {nonResidentialBuildingTypeOptions.find(o => o.value === formData.buildingType)?.label}</div>}
                  {formData.buildingYear && <div><span className="font-medium">Baujahr:</span> {formData.buildingYear}</div>}
                  {formData.netFloorArea && <div><span className="font-medium">Nettogrundfläche:</span> {formData.netFloorArea} m²</div>}
                  {formData.companyType && <div><span className="font-medium">Antragstellertyp:</span> {companyTypeOptions.find(o => o.value === formData.companyType)?.label}</div>}
                  {formData.consultationModule && <div><span className="font-medium">Beratungsmodul:</span> {consultationModuleOptions.find(o => o.value === formData.consultationModule)?.label}</div>}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Kontakt & Unternehmen</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</div>
                  <div><span className="font-medium">E-Mail:</span> {formData.email}</div>
                  <div><span className="font-medium">Telefon:</span> {formData.phone}</div>
                  {formData.companyName && <div><span className="font-medium">Unternehmen:</span> {formData.companyName}</div>}
                  {formData.consultationLocation && <div><span className="font-medium">Beratungsort:</span> {consultationLocationOptions.find(o => o.value === formData.consultationLocation)?.label}</div>}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                size="xl"
                onClick={handleSubmit}
                className="w-full"
              >
                Energieberatungsanfrage für Nicht-Wohngebäude absenden
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
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
            <div className="text-4xl mr-4">🏭</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Energieberatung für Nicht-Wohngebäude</h1>
              <p className="text-lg text-gray-600">BAFA-geförderte Beratung für Gewerbe-, Industrie- und öffentliche Gebäude</p>
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

export default NonResidentialEnergyWizard 