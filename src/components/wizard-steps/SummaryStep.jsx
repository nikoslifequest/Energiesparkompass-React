import { Card, Button, HelpText } from '../ui'

const SummaryStep = ({ 
  formData, 
  updateFormData, 
  stepConfig = {},
  wizardConfig = {} 
}) => {
  const {
    title = "Zusammenfassung",
    description = "Überprüfen Sie Ihre Angaben",
    helpText = "Bitte prüfen Sie Ihre Angaben. Sie können jederzeit zu vorherigen Schritten zurückkehren und Änderungen vornehmen.",
    sections = [],
    showEditButtons = true,
    customSummary = null
  } = stepConfig

  // Default summary sections if none provided
  const defaultSections = [
    {
      title: "Gebäudedaten",
      fields: [
        { key: 'buildingType', label: 'Gebäudetyp' },
        { key: 'buildingYear', label: 'Baujahr' },
        { key: 'livingSpace', label: 'Wohnfläche', suffix: 'm²' },
        { key: 'street', label: 'Adresse' },
        { key: 'zipCode', label: 'PLZ' },
        { key: 'city', label: 'Ort' }
      ]
    },
    {
      title: "Kontaktdaten",
      fields: [
        { key: 'firstName', label: 'Vorname' },
        { key: 'lastName', label: 'Nachname' },
        { key: 'email', label: 'E-Mail' },
        { key: 'phone', label: 'Telefon' }
      ]
    }
  ]

  const summaryConfig = sections.length > 0 ? sections : defaultSections

  const formatValue = (value, field) => {
    if (!value) return 'Nicht angegeben'
    
    // Handle arrays (like measures)
    if (Array.isArray(value)) {
      return value.length > 0 ? value.join(', ') : 'Keine Auswahl'
    }
    
    // Add suffix if provided
    if (field.suffix) {
      return `${value} ${field.suffix}`
    }
    
    return value
  }

  if (customSummary) {
    return (
      <div className="space-y-6 animate-fade-in">
        <HelpText>
          <strong>📋 {title}:</strong> {helpText}
        </HelpText>
        {customSummary(formData, updateFormData)}
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>📋 {title}:</strong> {helpText}
      </HelpText>

      {summaryConfig.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {section.title}
            </h3>
            {showEditButtons && section.editStep && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  // This would need to be connected to the wizard's goToStep function
                  console.log(`Edit step ${section.editStep}`)
                }}
              >
                Bearbeiten
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.fields.map((field, fieldIndex) => {
              const value = formData[field.key]
              const displayValue = formatValue(value, field)
              
              return (
                <div key={fieldIndex} className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    {field.label}
                  </dt>
                  <dd className="text-sm text-gray-900">
                    {displayValue}
                  </dd>
                </div>
              )
            })}
          </div>
        </Card>
      ))}

      {/* Data Protection Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-900 mb-1">
              Ihre Daten sind sicher
            </h3>
            <p className="text-sm text-blue-700">
              Wir behandeln Ihre Daten vertraulich und verwenden sie ausschließlich zur Bearbeitung 
              Ihrer Anfrage. Nach Absendung erhalten Sie eine Kopie Ihrer Anfrage per E-Mail.
            </p>
          </div>
        </div>
      </div>

      {/* Final Submit Info */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          <strong>📞 Was passiert als nächstes?</strong><br />
          Nach dem Absenden erhalten Sie eine Bestätigung per E-Mail. 
          Unser Experte wird sich innerhalb von 24 Stunden bei Ihnen melden.
        </p>
      </div>
    </div>
  )
}

export default SummaryStep 