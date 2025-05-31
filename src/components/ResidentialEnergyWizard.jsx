import { Button, Input, Select, Card, Stepper, RadioGroup, Alert, HelpText } from './ui'
import { useWizard } from '../hooks/useWizard'
import { useState } from 'react'
import { saveToAdminDashboard } from '../utils/adminHelpers'
import {
  buildingTypeOptions,
  titleOptions,
  stateOptions,
  energyCertificateOptions,
  monumentOptions,
  heatingTypeOptions,
  heatingStatusOptions,
  consultationTypeOptions,
  priorityOptions,
  informationSourceOptions,
  heatingIssueOptions,
  comfortIssueOptions,
  experienceOptions,
  financingOptions,
  implementationTimeOptions,
  preferredMeetingOptions,
  consultationLocationOptions,
  contactPreferenceOptions,
  utilizationOptions,
  urgencyOptions
} from '../constants/formOptions'

const ResidentialEnergyWizard = ({ onBack }) => {
  const [submitState, setSubmitState] = useState({ loading: false, error: null, success: false })

  const initialFormData = {
    // Gebäudeinformationen
    buildingType: '', buildingYear: '', livingSpace: '', floors: '',
    street: '', zipCode: '', city: '', state: '', 
    monument: '', energyCertificate: '', utilization: '',
    
    // Heizsituation
    heatingType: '', heatingAge: '', heatingStatus: '', energyConsumption: '',
    heatingIssues: [], comfortIssues: [],
    
    // Beratungswunsch
    consultationType: '', priority: '', implementation: '',
    experience: '', financing: '',
    
    // Budgetvorstellungen 
    budget: '', urgency: '', informationSource: '',
    
    // Terminwünsche
    preferredMeeting: '', consultationLocation: '', additionalNotes: '',
    
    // Kontaktdaten
    title: '', firstName: '', lastName: '', email: '', phone: '',
    contactPreference: '', availableTimes: '', specialRequests: ''
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
    { id: 1, title: 'Gebäude', description: 'Grundinformationen zum Objekt' },
    { id: 2, title: 'Energiesituation', description: 'Heizung & Energieverbrauch' },
    { id: 3, title: 'Beratungswunsch', description: 'Art der gewünschten Beratung' },
    { id: 4, title: 'Planung & Budget', description: 'Zeitrahmen & Finanzierung' },
    { id: 5, title: 'Kontakt', description: 'Ihre Kontaktdaten' },
    { id: 6, title: 'Zusammenfassung', description: 'Überprüfung & Absendung' }
  ]

  const handleSubmit = async () => {
    setSubmitState({ loading: true, error: null, success: false })
    
    try {
      console.log('Wohngebäude-Energieberatung Anfrage:', formData)
      
      // Save to Admin Dashboard
      saveToAdminDashboard(formData, 'Energieberatung Wohngebäude', {
        livingSpace: formData.livingSpace,
        buildingAge: formData.buildingYear,
        consultationType: formData.consultationType,
        urgency: formData.urgency,
        currentEnergyRating: formData.currentEnergyRating
      })
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitState({ loading: false, error: null, success: true })
    } catch (error) {
      console.error('Fehler beim Verarbeiten der Anfrage:', error)
      setSubmitState({ 
        loading: false, 
        error: error.message || 'Ein unerwarteter Fehler ist aufgetreten', 
        success: false 
      })
    }
  }

  const toggleArrayValue = (array, value) => {
    if (array.includes(value)) {
      return array.filter(item => item !== value)
    } else {
      return [...array, value]
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🏠 Gebäudeinformationen:</strong> Bitte geben Sie die Grunddaten zu Ihrem Gebäude ein. 
              Diese helfen uns bei der Vorbereitung Ihrer individuellen Energieberatung.
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
                label="Anzahl Etagen"
                type="number"
                value={formData.floors}
                onChange={(e) => updateFormData('floors', e.target.value)}
                placeholder="z.B. 2"
                min="1"
                max="10"
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
                label="Nutzung"
                value={formData.utilization}
                onChange={(e) => updateFormData('utilization', e.target.value)}
                options={utilizationOptions}
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
              <strong>🔥 Energiesituation:</strong> Informationen zu Ihrer aktuellen Heizung und 
              eventuellen Problemen helfen uns bei der gezielten Beratung.
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
                helpText="Falls bekannt (siehe Abrechnung)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Probleme mit der Heizung (Mehrfachauswahl möglich)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {heatingIssueOptions.slice(1).map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.heatingIssues.includes(option.value)}
                      onChange={(e) => {
                        updateFormData('heatingIssues', 
                          toggleArrayValue(formData.heatingIssues, option.value)
                        )
                      }}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Komfortprobleme (Mehrfachauswahl möglich)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {comfortIssueOptions.slice(1).map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.comfortIssues.includes(option.value)}
                      onChange={(e) => {
                        updateFormData('comfortIssues', 
                          toggleArrayValue(formData.comfortIssues, option.value)
                        )
                      }}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>💡 Beratungswunsch:</strong> Teilen Sie uns mit, welche Art von Beratung Sie sich 
              vorstellen und was Ihre Hauptziele sind.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Art der Beratung"
                value={formData.consultationType}
                onChange={(e) => updateFormData('consultationType', e.target.value)}
                options={consultationTypeOptions}
                helpText="Was ist Ihr Hauptinteresse?"
              />
              <Select
                label="Hauptpriorität"
                value={formData.priority}
                onChange={(e) => updateFormData('priority', e.target.value)}
                options={priorityOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Ihre Erfahrung mit Sanierungen"
                value={formData.experience}
                onChange={(e) => updateFormData('experience', e.target.value)}
                options={experienceOptions}
              />
              <Select
                label="Wie sind Sie auf uns aufmerksam geworden?"
                value={formData.informationSource}
                onChange={(e) => updateFormData('informationSource', e.target.value)}
                options={informationSourceOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Bevorzugter Beratungsort"
                value={formData.consultationLocation}
                onChange={(e) => updateFormData('consultationLocation', e.target.value)}
                options={consultationLocationOptions}
              />
              <Select
                label="Bevorzugte Uhrzeit"
                value={formData.preferredMeeting}
                onChange={(e) => updateFormData('preferredMeeting', e.target.value)}
                options={preferredMeetingOptions}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Besondere Wünsche oder Fragen
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="3"
                value={formData.additionalNotes}
                onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                placeholder="z.B. spezielle Anforderungen, besondere Räume, bereits geplante Maßnahmen..."
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>📅 Planung & Budget:</strong> Diese Informationen helfen uns bei der 
              Beratungsvorbereitung und um passende Förderoptionen zu finden.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Geplanter Umsetzungszeitraum"
                value={formData.implementation}
                onChange={(e) => updateFormData('implementation', e.target.value)}
                options={implementationTimeOptions}
              />
              <Select
                label="Dringlichkeit"
                value={formData.urgency}
                onChange={(e) => updateFormData('urgency', e.target.value)}
                options={urgencyOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Finanzierungsvorstellung"
                value={formData.financing}
                onChange={(e) => updateFormData('financing', e.target.value)}
                options={financingOptions}
              />
              <Input
                label="Grobes Budget (€)"
                value={formData.budget}
                onChange={(e) => updateFormData('budget', e.target.value)}
                placeholder="z.B. 50.000"
                helpText="Grobe Vorstellung (optional)"
              />
            </div>

            <Alert variant="info" title="Hinweis zu Förderungen">
              In der Beratung informieren wir Sie detailliert über aktuelle Förderprogramme wie 
              BAFA-Zuschüsse, KfW-Kredite und regionale Fördermöglichkeiten.
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
                Besondere Anforderungen
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="3"
                value={formData.specialRequests}
                onChange={(e) => updateFormData('specialRequests', e.target.value)}
                placeholder="z.B. barrierefrei, Parkplatz erforderlich, Haustiere..."
              />
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <Alert variant="success" title="Ihre Energieberatungsanfrage ist fertig!">
              Bitte überprüfen Sie Ihre Angaben und senden Sie das Formular ab.
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Gebäude & Energie</h3>
                <div className="space-y-2 text-sm">
                  {formData.buildingType && <div><span className="font-medium">Typ:</span> {buildingTypeOptions.find(o => o.value === formData.buildingType)?.label}</div>}
                  {formData.buildingYear && <div><span className="font-medium">Baujahr:</span> {formData.buildingYear}</div>}
                  {formData.livingSpace && <div><span className="font-medium">Wohnfläche:</span> {formData.livingSpace} m²</div>}
                  {formData.heatingType && <div><span className="font-medium">Heizung:</span> {heatingTypeOptions.find(o => o.value === formData.heatingType)?.label}</div>}
                  {formData.consultationType && <div><span className="font-medium">Beratungsart:</span> {consultationTypeOptions.find(o => o.value === formData.consultationType)?.label}</div>}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Kontakt & Termine</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</div>
                  <div><span className="font-medium">E-Mail:</span> {formData.email}</div>
                  <div><span className="font-medium">Telefon:</span> {formData.phone}</div>
                  {formData.consultationLocation && <div><span className="font-medium">Beratungsort:</span> {consultationLocationOptions.find(o => o.value === formData.consultationLocation)?.label}</div>}
                  {formData.implementation && <div><span className="font-medium">Zeitrahmen:</span> {implementationTimeOptions.find(o => o.value === formData.implementation)?.label}</div>}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                size="xl"
                onClick={handleSubmit}
                className="w-full"
              >
                Energieberatungsanfrage absenden
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
            <div className="text-4xl mr-4">🏘️</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Energieberatung für Wohngebäude</h1>
              <p className="text-lg text-gray-600">BAFA-geförderte Vor-Ort-Beratung mit individuellem Sanierungsfahrplan</p>
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

export default ResidentialEnergyWizard 