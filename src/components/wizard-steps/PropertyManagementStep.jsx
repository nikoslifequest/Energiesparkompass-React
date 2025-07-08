import { Input, RadioGroup, HelpText, Alert } from '../ui'

const PropertyManagementStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Verwaltung und Ansprechpartner",
    description = "Hausverwaltung und Zuständigkeiten",
    helpText = "Bei Mehrfamilienhäusern ist oft eine Hausverwaltung involviert. Diese Informationen helfen bei der Koordination der Energieausweis-Erstellung.",
    fields = {
      hasPropertyManager: true,
      propertyManagerName: true,
      propertyManagerContact: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🏢 {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      {fields.hasPropertyManager && (
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
      )}
      
      {formData.hasPropertyManager === 'ja' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-blue-50 rounded-lg">
          {fields.propertyManagerName && (
            <Input
              label="Name der Hausverwaltung"
              value={formData.propertyManagerName}
              onChange={(e) => updateFormData('propertyManagerName', e.target.value)}
              placeholder="z.B. Mustermann Hausverwaltung GmbH"
            />
          )}
          {fields.propertyManagerContact && (
            <Input
              label="Kontakt Hausverwaltung"
              value={formData.propertyManagerContact}
              onChange={(e) => updateFormData('propertyManagerContact', e.target.value)}
              placeholder="Telefon oder E-Mail"
            />
          )}
        </div>
      )}
      
      <Alert variant="info" title="Koordination mit Hausverwaltung">
        Falls eine Hausverwaltung vorhanden ist, koordinieren wir gerne direkt mit dieser 
        für die Datenerhebung und Terminabstimmung.
      </Alert>
    </div>
  )
}

export default PropertyManagementStep 