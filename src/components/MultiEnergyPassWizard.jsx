import { Button, Input, Select, Card, Stepper, RadioGroup, Alert, HelpText } from './ui'
import ServiceIcon from '../utils/serviceIcons'
import { useWizard } from '../hooks/useWizard'
import { useState } from 'react'
import {
  multiEnergyPassBuildingTypeOptions,
  ownershipTypeOptions,
  heatingDistributionOptions,
  hotWaterDistributionOptions,
  constructionYearOptions,
  wallConstructionOptions,
  roofConstructionOptions,
  windowTypeOptions,
  heatingSystemOptions,
  ventilationTypeOptions,
  basementOptions,
  energyPassTypeOptions,
  utilizationOptions,
  urgencyOptions,
  titleOptions,
  stateOptions
} from '../constants/formOptions'
import { saveToAdminDashboard } from '../utils/adminHelpers'

const MultiEnergyPassWizard = ({ onBack }) => {
  const [submitState, setSubmitState] = useState({ loading: false, error: null, success: false })

  const initialFormData = {
    // Gebäude-Grunddaten (erweitert für MFH)
    buildingType: '', constructionYear: '', totalLivingSpace: '', 
    numberOfUnits: '', floors: '', basement: '', utilization: '',
    ownershipType: '', buildingHeight: '',
    
    // Konstruktion & Hülle
    wallConstruction: '', roofConstruction: '', windowType: '',
    wallThickness: '', insulationThickness: '', windowAge: '',
    commonAreas: '', elevators: '',
    
    // Anlagentechnik (erweitert für zentrale/dezentrale Systeme)
    heatingDistribution: '', centralHeatingSystem: '', heatingAge: '',
    hotWaterDistribution: '', ventilationType: '', hasRenewableEnergy: '', renewableDetails: '',
    
    // Verbrauchsdaten (Gesamtgebäude)
    totalHeatingConsumption: '', totalElectricityConsumption: '', 
    totalHeatingCosts: '', totalElectricityCosts: '', consumptionPeriod: '',
    heatingCostsBilling: '', // Art der Heizkostenabrechnung
    
    // Verwalter/Ansprechpartner
    hasPropertyManager: '', propertyManagerName: '', propertyManagerContact: '',
    
    // Kontakt & Abwicklung
    energyPassType: '', urgency: '',
    title: '', firstName: '', lastName: '', email: '', phone: '',
    street: '', zipCode: '', city: '', state: '',
    
    // Zusatzinfo
    specialFeatures: '', additionalInfo: ''
  }

  const validationRules = {
    1: ['buildingType', 'numberOfUnits'],
    2: [],
    3: ['heatingDistribution'],
    4: [],
    5: [],
    6: ['firstName', 'lastName', 'email', 'phone', 'street', 'zipCode', 'city'],
    7: []
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
    { id: 1, title: 'Gebäude-Grunddaten', description: 'Basisinformationen zum Mehrfamilienhaus' },
    { id: 2, title: 'Konstruktion & Hülle', description: 'Bauweise und Dämmung' },
    { id: 3, title: 'Anlagentechnik', description: 'Heizung, Warmwasser, Lüftung' },
    { id: 4, title: 'Verbrauchsdaten', description: 'Energie- und Heizkosten (optional)' },
    { id: 5, title: 'Verwaltung/Ansprechpartner', description: 'Hausverwaltung und Zuständigkeiten' },
    { id: 6, title: 'Kontakt & Abwicklung', description: 'Ihre Daten und Ausweis-Typ' },
    { id: 7, title: 'Zusammenfassung', description: 'Prüfung und Angebot anfordern' }
  ]

  const handleSubmit = async () => {
    setSubmitState({ loading: true, error: null, success: false })
    
    try {
      console.log('Energieausweis Mehrfamilienhaus-Anfrage abgesendet:', formData)
      
      // Save to Admin Dashboard
      saveToAdminDashboard(formData, 'Energieausweis Mehrfamilienhaus', {
        numberOfUnits: formData.numberOfUnits,
        totalArea: formData.totalArea,
        energyPassType: formData.energyPassType,
        urgency: formData.urgency,
        managementType: formData.managementType
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
              <strong>🏢 Mehrfamilienhaus-Grunddaten:</strong> Hier sammeln wir die wichtigsten Eckdaten zu Ihrem Mehrfamilienhaus. 
              Für Mehrfamilienhäuser gelten spezielle Anforderungen bei der Energieausweis-Erstellung.
            </HelpText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Gebäudetyp"
                required
                value={formData.buildingType}
                onChange={(e) => updateFormData('buildingType', e.target.value)}
                options={multiEnergyPassBuildingTypeOptions}
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
                label="Anzahl Wohneinheiten"
                type="number"
                required
                value={formData.numberOfUnits}
                onChange={(e) => updateFormData('numberOfUnits', e.target.value)}
                placeholder="z.B. 12"
                min="3"
                max="200"
              />
              <Input
                label="Gesamtwohnfläche (m²)"
                type="number"
                value={formData.totalLivingSpace}
                onChange={(e) => updateFormData('totalLivingSpace', e.target.value)}
                placeholder="z.B. 800"
                min="100"
              />
              <Input
                label="Anzahl Vollgeschosse"
                type="number"
                value={formData.floors}
                onChange={(e) => updateFormData('floors', e.target.value)}
                placeholder="z.B. 4"
                min="2"
                max="30"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Eigentümerschaft/Verwaltung"
                value={formData.ownershipType}
                onChange={(e) => updateFormData('ownershipType', e.target.value)}
                options={ownershipTypeOptions}
              />
              <Select
                label="Keller/Untergeschoss"
                value={formData.basement}
                onChange={(e) => updateFormData('basement', e.target.value)}
                options={basementOptions}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Nutzung des Gebäudes"
                value={formData.utilization}
                onChange={(e) => updateFormData('utilization', e.target.value)}
                options={utilizationOptions}
              />
              <Input
                label="Gebäudehöhe (m)"
                type="number"
                value={formData.buildingHeight}
                onChange={(e) => updateFormData('buildingHeight', e.target.value)}
                placeholder="z.B. 12"
                min="5"
                max="200"
                helperText="Ungefähre Höhe von Erdgeschoss bis Dach"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🔨 Konstruktionsdetails:</strong> Diese Angaben helfen bei der genauen Bewertung der Gebäudehülle des Mehrfamilienhauses. 
              Bei größeren Gebäuden ist oft eine Vor-Ort-Besichtigung erforderlich.
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
                label="Fenster-Art (überwiegend)"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Alter der Fenster (Jahre)"
                type="number"
                value={formData.windowAge}
                onChange={(e) => updateFormData('windowAge', e.target.value)}
                placeholder="z.B. 15"
                min="0"
                max="100"
              />
              <Input
                label="Gemeinschaftsflächen (m²)"
                type="number"
                value={formData.commonAreas}
                onChange={(e) => updateFormData('commonAreas', e.target.value)}
                placeholder="z.B. 150"
                min="0"
                helperText="Flur, Treppenhaus, Keller, etc."
              />
            </div>
            
            <RadioGroup
              label="Aufzug vorhanden"
              name="elevators"
              options={[
                { value: 'ja', label: 'Ja' },
                { value: 'nein', label: 'Nein' }
              ]}
              value={formData.elevators}
              onChange={(e) => updateFormData('elevators', e.target.value)}
              layout="horizontal"
            />
          </div>
        )

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>⚙️ Anlagentechnik Mehrfamilienhaus:</strong> Bei Mehrfamilienhäusern ist die Art der Versorgung 
              (zentral oder dezentral) entscheidend für die Energieausweis-Erstellung.
            </HelpText>
            
            <div className="space-y-6">
              <Select
                label="Heizungsverteilung"
                required
                value={formData.heatingDistribution}
                onChange={(e) => updateFormData('heatingDistribution', e.target.value)}
                options={heatingDistributionOptions}
              />
              
              {(formData.heatingDistribution === 'zentral-alle' || formData.heatingDistribution === 'zentral-teilweise') && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-blue-50 rounded-lg">
                  <Select
                    label="Zentrales Heizsystem"
                    value={formData.centralHeatingSystem}
                    onChange={(e) => updateFormData('centralHeatingSystem', e.target.value)}
                    options={heatingSystemOptions}
                  />
                  <Input
                    label="Alter der zentralen Heizung (Jahre)"
                    type="number"
                    value={formData.heatingAge}
                    onChange={(e) => updateFormData('heatingAge', e.target.value)}
                    placeholder="z.B. 10"
                    min="0"
                    max="50"
                  />
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Warmwasserversorgung"
                value={formData.hotWaterDistribution}
                onChange={(e) => updateFormData('hotWaterDistribution', e.target.value)}
                options={hotWaterDistributionOptions}
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
                label="Erneuerbare Energien vorhanden"
                name="hasRenewableEnergy"
                options={[
                  { value: 'ja', label: 'Ja' },
                  { value: 'nein', label: 'Nein' },
                  { value: 'geplant', label: 'Geplant' }
                ]}
                value={formData.hasRenewableEnergy}
                onChange={(e) => updateFormData('hasRenewableEnergy', e.target.value)}
                layout="horizontal"
              />
              
              {(formData.hasRenewableEnergy === 'ja' || formData.hasRenewableEnergy === 'geplant') && (
                <Input
                  label="Details zu erneuerbaren Energien"
                  value={formData.renewableDetails}
                  onChange={(e) => updateFormData('renewableDetails', e.target.value)}
                  placeholder="z.B. Solaranlage auf dem Dach, Wärmepumpe, etc."
                />
              )}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>📊 Verbrauchsdaten Mehrfamilienhaus:</strong> Diese Daten beziehen sich auf das gesamte Gebäude. 
              Für den Verbrauchsausweis sind die Verbrauchsdaten der letzten 3 Jahre erforderlich.
            </HelpText>
            
            <Alert variant="info" title="Hinweis zu Verbrauchsdaten">
              Bei Mehrfamilienhäusern werden die Gesamtverbrauchsdaten des Gebäudes benötigt, 
              nicht die einzelner Wohnungen. Diese finden Sie in der Heizkostenabrechnung.
            </Alert>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Gesamtheizenergieverbrauch (kWh/Jahr)"
                type="number"
                value={formData.totalHeatingConsumption}
                onChange={(e) => updateFormData('totalHeatingConsumption', e.target.value)}
                placeholder="z.B. 150000"
                min="0"
                helperText="Verbrauch des gesamten Gebäudes"
              />
              <Input
                label="Gesamtstromverbrauch Allgemeinstrom (kWh/Jahr)"
                type="number"
                value={formData.totalElectricityConsumption}
                onChange={(e) => updateFormData('totalElectricityConsumption', e.target.value)}
                placeholder="z.B. 25000"
                min="0"
                helperText="Beleuchtung, Aufzug, Pumpen, etc."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Gesamtheizkosten (€/Jahr)"
                type="number"
                value={formData.totalHeatingCosts}
                onChange={(e) => updateFormData('totalHeatingCosts', e.target.value)}
                placeholder="z.B. 12000"
                min="0"
              />
              <Input
                label="Stromkosten Allgemeinstrom (€/Jahr)"
                type="number"
                value={formData.totalElectricityCosts}
                onChange={(e) => updateFormData('totalElectricityCosts', e.target.value)}
                placeholder="z.B. 5000"
                min="0"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Abrechnungszeitraum"
                value={formData.consumptionPeriod}
                onChange={(e) => updateFormData('consumptionPeriod', e.target.value)}
                placeholder="z.B. 01.01.2023 - 31.12.2023"
              />
              <Select
                label="Art der Heizkostenabrechnung"
                value={formData.heatingCostsBilling}
                onChange={(e) => updateFormData('heatingCostsBilling', e.target.value)}
                options={[
                  { value: 'zentral', label: 'Zentrale Abrechnung' },
                  { value: 'verbrauchsabhängig', label: 'Verbrauchsabhängige Abrechnung' },
                  { value: 'pauschal', label: 'Pauschalabrechnung' },
                  { value: 'gemischt', label: 'Gemischte Abrechnung' }
                ]}
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <HelpText>
              <strong>🏢 Verwaltung und Ansprechpartner:</strong> Bei Mehrfamilienhäusern ist oft eine Hausverwaltung involviert. 
              Diese Informationen helfen bei der Koordination der Energieausweis-Erstellung.
            </HelpText>
            
            <RadioGroup
              label="Wird das Gebäude durch eine Hausverwaltung verwaltet?"
              name="hasPropertyManager"
              options={[
                { value: 'ja', label: 'Ja' },
                { value: 'nein', label: 'Nein' },
                { value: 'selbstverwaltet', label: 'Selbstverwaltet (WEG)' }
              ]}
              value={formData.hasPropertyManager}
              onChange={(e) => updateFormData('hasPropertyManager', e.target.value)}
              layout="vertical"
            />
            
            {formData.hasPropertyManager === 'ja' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-blue-50 rounded-lg">
                <Input
                  label="Name der Hausverwaltung"
                  value={formData.propertyManagerName}
                  onChange={(e) => updateFormData('propertyManagerName', e.target.value)}
                  placeholder="z.B. Mustermann Hausverwaltung GmbH"
                />
                <Input
                  label="Kontakt Hausverwaltung"
                  value={formData.propertyManagerContact}
                  onChange={(e) => updateFormData('propertyManagerContact', e.target.value)}
                  placeholder="Telefon oder E-Mail"
                />
              </div>
            )}
            
            <Alert variant="info" title="Koordination mit Hausverwaltung">
              Falls eine Hausverwaltung vorhanden ist, koordinieren wir gerne direkt mit dieser 
              für die Datenerhebung und Terminabstimmung.
            </Alert>
          </div>
        )

      case 6:
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
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="ihre.email@beispiel.de"
              />
              <Input
                label="Telefon"
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
            
            <div className="space-y-4">
              <Input
                label="Besonderheiten des Gebäudes"
                as="textarea"
                rows="3"
                value={formData.specialFeatures}
                onChange={(e) => updateFormData('specialFeatures', e.target.value)}
                placeholder="z.B. Denkmalschutz, besondere Bauweise, bereits durchgeführte Sanierungen..."
              />
              <Input
                label="Zusätzliche Informationen"
                as="textarea"
                rows="3"
                value={formData.additionalInfo}
                onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                placeholder="Weitere Anmerkungen oder spezielle Wünsche..."
              />
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6 animate-fade-in">
            <Alert variant="success" title="Ihre Energieausweis-Anfrage für das Mehrfamilienhaus ist bereit!">
              Prüfen Sie Ihre Angaben und fordern Sie Ihr individuelles Angebot an.
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Gebäudedaten</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Typ:</span> {multiEnergyPassBuildingTypeOptions.find(o => o.value === formData.buildingType)?.label || 'Nicht angegeben'}</div>
                  <div><span className="font-medium">Wohneinheiten:</span> {formData.numberOfUnits || 'Nicht angegeben'}</div>
                  <div><span className="font-medium">Gesamtwohnfläche:</span> {formData.totalLivingSpace ? `${formData.totalLivingSpace} m²` : 'Nicht angegeben'}</div>
                  <div><span className="font-medium">Baualter:</span> {constructionYearOptions.find(o => o.value === formData.constructionYear)?.label || 'Nicht angegeben'}</div>
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
                  {formData.hasPropertyManager === 'ja' && (
                    <div><span className="font-medium">Hausverwaltung:</span> {formData.propertyManagerName || 'Angegeben'}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                size="xl"
                onClick={handleSubmit}
                className="w-full"
              >
                Angebot für Energieausweis Mehrfamilienhaus anfordern
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
            <div className="mr-4">
                             <ServiceIcon 
                 serviceId={3} 
                 size={48} 
                 weight="duotone"
               />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Energieausweis Mehrfamilienhaus</h1>
              <p className="text-lg text-gray-600">Bedarfs- oder Verbrauchsausweis nach aktuellen Standards</p>
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

export default MultiEnergyPassWizard 