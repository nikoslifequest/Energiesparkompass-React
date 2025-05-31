import { Button, Input, Select, Card, Stepper, RadioGroup, Alert, HelpText } from './ui'
import { useWizard } from '../hooks/useWizard'
import { useState } from 'react'
import { saveToAdminDashboard } from '../utils/adminHelpers'
import {
  monumentProtectionLevelOptions,
  monumentBuildingTypeOptions,
  constructionPeriodOptions,
  buildingTypeOptions,
  titleOptions,
  stateOptions,
  energyCertificateOptions,
  heritageAuthorityOptions,
  previousApprovalsOptions,
  technicalRestrictionsOptions,
  monumentConditionOptions,
  specialFeaturesOptions,
  expertiseAvailableOptions,
  priorityAspectsOptions,
  fundingAwarenessOptions,
  heatingTypeOptions,
  heatingStatusOptions,
  insulationStatusOptions,
  windowStatusOptions,
  budgetRangeOptions,
  contactPreferenceOptions,
  urgencyOptions,
  implementationTimeOptions,
  preferredMeetingOptions,
  consultationLocationOptions,
  utilizationOptions
} from '../constants/formOptions'

const MonumentEnergyWizard = ({ onBack }) => {
  const [submitState, setSubmitState] = useState({ loading: false, error: null, success: false })

  const initialFormData = {
    // Denkmalschutz-spezifische Informationen
    monumentProtectionLevel: '', monumentBuildingType: '', constructionPeriod: '',
    heritageAuthority: '', previousApprovals: '', technicalRestrictions: '',
    monumentCondition: '', specialFeatures: '', expertiseAvailable: '',
    
    // Gebäudeinformationen
    buildingYear: '', livingSpace: '', floors: '',
    street: '', zipCode: '', city: '', state: '',
    energyCertificate: '', utilization: '',
    
    // Technische Ausstattung
    heatingType: '', heatingStatus: '', insulationStatus: '', windowStatus: '',
    
    // Beratungswunsch
    priorityAspects: '', fundingAwareness: '', urgency: '', implementation: '',
    consultationLocation: '', preferredMeeting: '', additionalChallenges: '',
    
    // Budgetierung
    budgetRange: '', availableDocuments: '', previousExperience: '',
    
    // Kontaktdaten
    title: '', firstName: '', lastName: '', email: '', phone: '',
    contactPreference: '', availableTimes: '', specialNotes: ''
  }

  const validationRules = {
    1: ['monumentProtectionLevel'],
    2: [],
    3: [],
    4: [],
    5: [],
    6: ['firstName', 'lastName', 'email', 'phone']
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
  } = useWizard(initialFormData, 7, validationRules)

  const steps = [
    { id: 1, title: 'Denkmalschutz-Status', description: 'Rechtlicher Status und Behörden' },
    { id: 2, title: 'Gebäude & Bauzeit', description: 'Grunddaten und Bauepochen' },
    { id: 3, title: 'Zustand & Technik', description: 'Erhaltungszustand und Ausstattung' },
    { id: 4, title: 'Einschränkungen', description: 'Bekannte Auflagen und Restriktionen' },
    { id: 5, title: 'Beratungsziel', description: 'Prioritäten und Umsetzung' },
    { id: 6, title: 'Kontakt', description: 'Ihre Kontaktdaten' },
    { id: 7, title: 'Zusammenfassung', description: 'Überprüfung & Absendung' }
  ]

  const handleSubmit = async () => {
    setSubmitState({ loading: true, error: null, success: false })
    
    try {
      console.log('Denkmalschutz Energieausweis-Anfrage abgesendet:', formData)
      
      // Save to Admin Dashboard
      saveToAdminDashboard(formData, 'Energieausweis Denkmalschutz', {
        livingSpace: formData.livingSpace,
        heritageStatus: formData.heritageStatus,
        energyPassType: formData.energyPassType,
        urgency: formData.urgency,
        specialRequirements: formData.specialRequirements
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🏛️ Denkmalschutz-Status:</strong> Der rechtliche Status Ihres Gebäudes bestimmt 
              maßgeblich die Möglichkeiten und Fördermittel für energetische Maßnahmen.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Denkmalschutz-Status"
                required
                value={formData.monumentProtectionLevel}
                onChange={(e) => updateFormData('monumentProtectionLevel', e.target.value)}
                options={monumentProtectionLevelOptions}
                helpText="Entscheidend für Fördermöglichkeiten"
              />
              <Select
                label="Art des Denkmals"
                value={formData.monumentBuildingType}
                onChange={(e) => updateFormData('monumentBuildingType', e.target.value)}
                options={monumentBuildingTypeOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Bauzeit / Stilepoche"
                value={formData.constructionPeriod}
                onChange={(e) => updateFormData('constructionPeriod', e.target.value)}
                options={constructionPeriodOptions}
                helpText="Wichtig für technische Ansätze"
              />
              <Select
                label="Zuständige Denkmalschutzbehörde"
                value={formData.heritageAuthority}
                onChange={(e) => updateFormData('heritageAuthority', e.target.value)}
                options={heritageAuthorityOptions}
              />
            </div>

            <div>
              <Select
                label="Bisherige Erfahrungen mit Genehmigungen"
                value={formData.previousApprovals}
                onChange={(e) => updateFormData('previousApprovals', e.target.value)}
                options={previousApprovalsOptions}
                helpText="Hilft bei der Einschätzung der Genehmigungsfähigkeit"
              />
            </div>

            <Alert variant="info" title="Denkmalschutz-Förderung">
              <div className="text-sm space-y-1">
                <div>• <strong>Erhöhte Förderquoten:</strong> Bis zu 25% statt 20% bei BAFA-Förderung</div>
                <div>• <strong>Zusätzliche Programme:</strong> Denkmalschutz-AfA, regionale Förderprogramme</div>
                <div>• <strong>Steuervorteile:</strong> Erhöhte Abschreibungsmöglichkeiten</div>
              </div>
            </Alert>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🏠 Gebäude & Bauzeit:</strong> Grunddaten zum Gebäude für die passgenaue 
              Beratung unter Berücksichtigung der historischen Bausubstanz.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Baujahr"
                type="number"
                value={formData.buildingYear}
                onChange={(e) => updateFormData('buildingYear', e.target.value)}
                placeholder="z.B. 1890"
                min="1200"
                max="2024"
              />
              <Input
                label="Wohn-/Nutzfläche (m²)"
                type="number"
                value={formData.livingSpace}
                onChange={(e) => updateFormData('livingSpace', e.target.value)}
                placeholder="z.B. 180"
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
                placeholder="Denkmalstraße 123"
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
                label="Bundesland"
                value={formData.state}
                onChange={(e) => updateFormData('state', e.target.value)}
                options={stateOptions}
                helpText="Bundesländer haben unterschiedliche Denkmalförderungen"
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
                helpText="Bei Denkmälern oft schwierig zu erstellen"
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🔍 Zustand & Technik:</strong> Der Erhaltungszustand und die technische 
              Ausstattung bestimmen die möglichen energetischen Maßnahmen.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Zustand des Denkmals"
                value={formData.monumentCondition}
                onChange={(e) => updateFormData('monumentCondition', e.target.value)}
                options={monumentConditionOptions}
              />
              <Select
                label="Besondere Merkmale"
                value={formData.specialFeatures}
                onChange={(e) => updateFormData('specialFeatures', e.target.value)}
                options={specialFeaturesOptions}
                helpText="Prägt die Lösungsansätze"
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
                helpText="Originalfenster oft erhaltenswert"
              />
            </div>

            <div>
              <Select
                label="Verfügbare Expertise"
                value={formData.expertiseAvailable}
                onChange={(e) => updateFormData('expertiseAvailable', e.target.value)}
                options={expertiseAvailableOptions}
                helpText="Spezialisierte Fachkräfte sind wichtig"
              />
            </div>

            <Alert variant="warning" title="Besonderheiten bei Denkmälern">
              <div className="text-sm">
                Historische Bausubstanz erfordert besondere Sorgfalt. Nicht alle modernen 
                Dämmmaterialien sind für denkmalgeschützte Gebäude geeignet.
              </div>
            </Alert>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>⚠️ Einschränkungen:</strong> Bekannte Auflagen und Restriktionen 
              helfen bei der Entwicklung realisierbarer Lösungsansätze.
            </HelpText>
            
            <div>
              <Select
                label="Bekannte technische Einschränkungen"
                value={formData.technicalRestrictions}
                onChange={(e) => updateFormData('technicalRestrictions', e.target.value)}
                options={technicalRestrictionsOptions}
                helpText="Was darf definitiv nicht verändert werden?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Besondere Herausforderungen und Auflagen
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="4"
                value={formData.additionalChallenges}
                onChange={(e) => updateFormData('additionalChallenges', e.target.value)}
                placeholder="z.B. spezielle Materialvorgaben, Farbauflagen, Zugangsrestriktionen, saisonale Beschränkungen, touristische Nutzung, etc."
              />
            </div>

            <Alert variant="info" title="Typische Einschränkungen bei Denkmälern">
              <div className="text-sm space-y-2">
                <div><strong>Fassade:</strong> Oft keine Außendämmung möglich → Innendämmung oder Fenstererneuerung</div>
                <div><strong>Dach:</strong> Dachform meist geschützt → Dämmung zwischen/unter den Sparren</div>
                <div><strong>Fenster:</strong> Originalfenster erhalten → Ertüchtigung oder denkmalgerechte Fenster</div>
                <div><strong>Heizung:</strong> Leitungsführung oft problematisch → Innovative Konzepte nötig</div>
              </div>
            </Alert>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🎯 Beratungsziel:</strong> Ihre Prioritäten und Ziele bestimmen den 
              Fokus der Energieberatung unter Denkmalschutzaspekten.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Hauptpriorität"
                value={formData.priorityAspects}
                onChange={(e) => updateFormData('priorityAspects', e.target.value)}
                options={priorityAspectsOptions}
              />
              <Select
                label="Kenntnis über Denkmalförderung"
                value={formData.fundingAwareness}
                onChange={(e) => updateFormData('fundingAwareness', e.target.value)}
                options={fundingAwarenessOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Geplanter Umsetzungszeitraum"
                value={formData.implementation}
                onChange={(e) => updateFormData('implementation', e.target.value)}
                options={implementationTimeOptions}
                helpText="Denkmalschutzgenehmigungen dauern länger"
              />
              <Select
                label="Dringlichkeit der Beratung"
                value={formData.urgency}
                onChange={(e) => updateFormData('urgency', e.target.value)}
                options={urgencyOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Budgetrahmen"
                value={formData.budgetRange}
                onChange={(e) => updateFormData('budgetRange', e.target.value)}
                options={budgetRangeOptions}
                helpText="Denkmalsanierung oft kostspieliger"
              />
              <Select
                label="Bevorzugter Beratungsort"
                value={formData.consultationLocation}
                onChange={(e) => updateFormData('consultationLocation', e.target.value)}
                options={consultationLocationOptions}
              />
            </div>

            <Alert variant="success" title="Vorteile der Denkmalsanierung">
              <div className="text-sm space-y-1">
                <div>• <strong>Steuervorteile:</strong> Denkmal-AfA über 8-12 Jahre</div>
                <div>• <strong>Erhöhte Förderung:</strong> 25% statt 20% bei BAFA-Maßnahmen</div>
                <div>• <strong>Wertsteigerung:</strong> Fachgerechte Sanierung erhöht den Immobilienwert erheblich</div>
                <div>• <strong>Komfortgewinn:</strong> Behaglichkeit auch bei niedrigeren Temperaturen</div>
              </div>
            </Alert>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>📞 Kontaktdaten:</strong> Damit unser spezialisierter Denkmalschutz-Energieberater 
              Sie für die Beratungsterminierung erreichen kann.
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
                placeholder="ihre.email@example.com"
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
              <Select
                label="Bevorzugte Uhrzeit"
                value={formData.preferredMeeting}
                onChange={(e) => updateFormData('preferredMeeting', e.target.value)}
                options={preferredMeetingOptions}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Besondere Hinweise für den Denkmalschutz-Energieberater
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="3"
                value={formData.specialNotes}
                onChange={(e) => updateFormData('specialNotes', e.target.value)}
                placeholder="z.B. spezielle Termine, Zugangsregelungen, bereits vorhandene Gutachten, konkrete Fragen..."
              />
            </div>

            <Alert variant="info" title="Ihr Denkmalschutz-Spezialist">
              Unsere Energieberater verfügen über spezielle Expertise in der denkmalgerechten 
              energetischen Sanierung und kennen die komplexen Förderstrukturen.
            </Alert>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6 animate-fade-in">
            <Alert variant="success" title="Ihre Denkmalschutz-Energieberatungsanfrage ist fertig!">
              Bitte überprüfen Sie Ihre Angaben und senden Sie das Formular ab.
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Denkmal & Gebäude</h3>
                <div className="space-y-2 text-sm">
                  {formData.monumentProtectionLevel && <div><span className="font-medium">Status:</span> {monumentProtectionLevelOptions.find(o => o.value === formData.monumentProtectionLevel)?.label}</div>}
                  {formData.monumentBuildingType && <div><span className="font-medium">Typ:</span> {monumentBuildingTypeOptions.find(o => o.value === formData.monumentBuildingType)?.label}</div>}
                  {formData.constructionPeriod && <div><span className="font-medium">Bauzeit:</span> {constructionPeriodOptions.find(o => o.value === formData.constructionPeriod)?.label}</div>}
                  {formData.livingSpace && <div><span className="font-medium">Fläche:</span> {formData.livingSpace} m²</div>}
                  {formData.priorityAspects && <div><span className="font-medium">Priorität:</span> {priorityAspectsOptions.find(o => o.value === formData.priorityAspects)?.label}</div>}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Kontakt & Planung</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</div>
                  <div><span className="font-medium">E-Mail:</span> {formData.email}</div>
                  <div><span className="font-medium">Telefon:</span> {formData.phone}</div>
                  {formData.urgency && <div><span className="font-medium">Dringlichkeit:</span> {urgencyOptions.find(o => o.value === formData.urgency)?.label}</div>}
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
                Denkmalschutz-Energieberatungsanfrage absenden
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
            <div className="text-4xl mr-4">🏛️</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Energieberatung für Denkmalschutz</h1>
              <p className="text-lg text-gray-600">Spezialisierte Beratung für denkmalgeschützte Gebäude mit erhöhten Fördermöglichkeiten</p>
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

export default MonumentEnergyWizard 