import { Button, Input, Select, Card, Stepper, RadioGroup, Alert, MeasureSelector, HelpText } from './ui'
import { useWizard } from '../hooks/useWizard'
import { useState } from 'react'
import { EmailServices } from '../services/emailService'
import {
  buildingTypeOptions,
  energyCertificateOptions,
  titleOptions,
  ownershipOptions,
  householdSizeOptions,
  stateOptions,
  investmentOptions,
  capitalOptions,
  timelineOptions,
  monumentOptions,
  renovationScopeOptions,
  fundingTypeOptions,
  availableMeasures
} from '../constants/formOptions'
import { saveToAdminDashboard } from '../utils/adminHelpers'

const FundingWizard = ({ onBack }) => {
  const [submitState, setSubmitState] = useState({ loading: false, error: null, success: false })

  const initialFormData = {
    // Gebäudedaten
    buildingType: '', buildingYear: '', livingSpace: '', units: '',
    monument: '', energyCertificate: '',
    // Geplante Maßnahmen
    measures: [], renovationScope: '',
    // Kontakt & Antragsteller
    title: '', firstName: '', lastName: '', email: '', phone: '',
    street: '', zipCode: '', city: '', ownershipStatus: '', householdSize: '', income: '',
    // Regional & Finanzierung
    state: '', energyProvider: '', investmentAmount: '', ownCapital: '',
    fundingType: '', timeline: ''
  }

  const validationRules = {
    1: [],
    2: [(data) => data.measures.length > 0],
    3: ['firstName', 'lastName', 'email', 'phone', 'street', 'zipCode', 'city'],
    4: []
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
  } = useWizard(initialFormData, 5, validationRules)

  const steps = [
    { id: 1, title: 'Gebäudedaten', description: 'Grundinformationen zu Ihrem Gebäude' },
    { id: 2, title: 'Maßnahmen', description: 'Geplante Energiesparmaßnahmen' },
    { id: 3, title: 'Kontaktdaten', description: 'Ihre persönlichen Daten' },
    { id: 4, title: 'Details', description: 'Regionale und finanzielle Angaben' },
    { id: 5, title: 'Zusammenfassung', description: 'Überprüfung und Absendung' }
  ]

  const handleSubmit = async () => {
    setSubmitState({ loading: true, error: null, success: false })
    
    try {
      // Email Daten zusammenstellen
      const emailData = {
        // Personal data
        title: formData.title || 'Nicht angegeben',
        firstName: formData.firstName || 'Unbekannt',
        lastName: formData.lastName || 'Unbekannt',
        email: formData.email || 'keine@email.de',
        phone: formData.phone || 'Nicht angegeben',
        // Address
        street: formData.street || 'Nicht angegeben',
        zipCode: formData.zipCode || 'Nicht angegeben',
        city: formData.city || 'Nicht angegeben',
        // Building data
        buildingType: formData.buildingType || 'Nicht angegeben',
        buildingYear: formData.buildingYear || 'Nicht angegeben',
        livingSpace: formData.livingSpace || 'Nicht angegeben',
        units: formData.units || 'Nicht angegeben',
        monument: formData.monument || 'Nicht angegeben',
        energyCertificate: formData.energyCertificate || 'Nicht angegeben',
        // Renovation data
        measures: formData.measures && formData.measures.length > 0 
          ? formData.measures.join(', ') 
          : 'Keine Maßnahmen angegeben',
        renovationScope: formData.renovationScope || 'Nicht angegeben',
        ownership: formData.ownershipStatus || 'Nicht angegeben',
        householdSize: formData.householdSize || 'Nicht angegeben',
        // Regional and financial data
        state: formData.state || 'Nicht angegeben',
        energyProvider: formData.energyProvider || 'Nicht angegeben',
        investmentAmount: formData.investmentAmount || 'Nicht angegeben',
        availableCapital: formData.ownCapital || 'Nicht angegeben',
        fundingPreferences: formData.fundingType ? [formData.fundingType] : [],
        timeline: formData.timeline || 'Nicht angegeben'
      }

      console.log('📧 Versende Fördermittelberatungs-Anfrage...', emailData)

      // 1. Save to Admin Dashboard (localStorage)
      saveToAdminDashboard(emailData, 'Fördermittelberatung', {
        livingSpace: emailData.livingSpace,
        measures: emailData.measures,
        renovationScope: emailData.renovationScope,
        investmentAmount: emailData.investmentAmount,
        timeline: emailData.timeline
      })

      // 2. Send Email
      const result = await EmailServices.sendFundingConsultationEmail(emailData)

      if (result.success) {
        setSubmitState({ loading: false, error: null, success: true })
        console.log('✅ Email erfolgreich versendet:', result)
      } else {
        throw new Error(result.message || 'Email konnte nicht versendet werden')
      }

    } catch (error) {
      console.error('❌ Fehler beim Email-Versand:', error)
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
              <strong>💡 Tipp:</strong> Sie haben nicht alle Gebäudedaten zur Hand? Kein Problem! 
              Lassen Sie einfach die Felder frei, die Sie nicht ausfüllen können. 
              Unser Energieberater ermittelt fehlende Informationen gerne vor Ort.
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Geplante Maßnahmen *
                <span className="text-red-500 ml-1">*</span>
                <span className="text-gray-500 font-normal"> (Mehrfachauswahl möglich)</span>
              </label>
              <MeasureSelector
                measures={availableMeasures}
                selectedMeasures={formData.measures}
                onToggle={(measures) => updateFormData('measures', measures)}
              />
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
        )

      case 3:
        return (
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
        )

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>📋 Optional:</strong> Die folgenden Angaben helfen uns bei der Beratung, 
              sind aber nicht zwingend erforderlich. Lassen Sie Felder einfach frei, 
              wenn Sie unsicher sind oder die Information nicht verfügbar haben.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Bundesland"
                value={formData.state}
                onChange={(e) => updateFormData('state', e.target.value)}
                options={stateOptions}
              />
              <Input
                label="Energieversorger"
                value={formData.energyProvider}
                onChange={(e) => updateFormData('energyProvider', e.target.value)}
                placeholder="z.B. Stadtwerke München"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Geplante Investitionssumme"
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
                label="Zeitrahmen"
                value={formData.timeline}
                onChange={(e) => updateFormData('timeline', e.target.value)}
                options={timelineOptions}
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            {!submitState.success && !submitState.error && (
              <Alert variant="success" title="Ihre Anfrage ist fast fertig!">
                Bitte überprüfen Sie Ihre Angaben und senden Sie das Formular ab.
              </Alert>
            )}

            {submitState.error && (
              <Alert variant="danger" title="Fehler beim Versenden">
                {submitState.error}
                <div className="mt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setSubmitState({ loading: false, error: null, success: false })}
                  >
                    Erneut versuchen
                  </Button>
                </div>
              </Alert>
            )}

            {submitState.success && (
              <Alert variant="success" title="Anfrage erfolgreich versendet! 🎉">
                <div className="space-y-2">
                  <p>Vielen Dank für Ihre Anfrage zur Fördermittelberatung!</p>
                  <p className="text-sm">
                    <strong>Unser Energieberater wird sich binnen 24 Stunden bei Ihnen melden.</strong>
                  </p>
                  <div className="mt-4 space-y-1 text-sm text-gray-600">
                    <p>✅ Ihre Daten wurden sicher übertragen</p>
                    <p>✅ Email-Bestätigung versendet</p>
                    <p>✅ Bearbeitung bereits gestartet</p>
                  </div>
                  <div className="mt-4">
                    <Button 
                      variant="primary" 
                      onClick={onBack}
                      className="mr-2"
                    >
                      Weitere Services entdecken
                    </Button>
                  </div>
                </div>
              </Alert>
            )}

            {!submitState.success && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Gebäudedaten</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Typ:</span> {buildingTypeOptions.find(o => o.value === formData.buildingType)?.label}</div>
                      <div><span className="font-medium">Baujahr:</span> {formData.buildingYear}</div>
                      <div><span className="font-medium">Wohnfläche:</span> {formData.livingSpace} m²</div>
                      {formData.measures.length > 0 && (
                        <div>
                          <span className="font-medium">Geplante Maßnahmen:</span>
                          <ul className="mt-1 ml-4 list-disc list-inside">
                            {formData.measures.map((measure, index) => (
                              <li key={index} className="text-xs">{measure}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Kontakt</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</div>
                      <div><span className="font-medium">E-Mail:</span> {formData.email}</div>
                      <div><span className="font-medium">Telefon:</span> {formData.phone}</div>
                      <div><span className="font-medium">Adresse:</span> {formData.street}, {formData.zipCode} {formData.city}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    size="xl"
                    onClick={handleSubmit}
                    disabled={submitState.loading}
                    className="w-full"
                  >
                    {submitState.loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Anfrage wird gesendet...
                      </div>
                    ) : (
                      'Anfrage absenden'
                    )}
                  </Button>
                </div>
              </>
            )}
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
            <div className="text-4xl mr-4">💰</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fördermittelberatung</h1>
              <p className="text-lg text-gray-600">Professionelle Beratung zu verfügbaren Fördermitteln</p>
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

export default FundingWizard 