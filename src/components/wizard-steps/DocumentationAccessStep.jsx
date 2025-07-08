import { Input, Select, Alert, HelpText } from '../ui'
import {
  existingDocumentationOptions,
  heatingSystemAccessOptions
} from '../../constants/formOptions'

const DocumentationAccessStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Dokumentation & Zugang",
    description = "Zugang und vorhandene Unterlagen",
    helpText = "Informationen zu vorhandenen Unterlagen und Zugangsmöglichkeiten zur Heizungsanlage.",
    fields = {
      existingDocumentation: true,
      accessType: true,
      accessNotes: true,
      maintenanceDates: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
            <HelpText>
        <strong>📋 {title}:</strong> {helpText}
      </HelpText>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Wichtige Informationen</h3>
        <p className="text-blue-800 text-sm">
          {description}
        </p>
      </div>

      {fields.existingDocumentation && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vorhandene Dokumentation (Mehrfachauswahl möglich)
          </label>
          <div className="space-y-2">
            {existingDocumentationOptions.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  checked={formData.existingDocumentation?.includes(option.value)}
                  onChange={(e) => {
                    const current = formData.existingDocumentation || []
                    const newDocs = e.target.checked
                      ? [...current, option.value]
                      : current.filter(d => d !== option.value)
                    updateFormData('existingDocumentation', newDocs)
                  }}
                />
                <span className="ml-2 text-sm text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {fields.accessType && (
        <Select
          label="Zugang zur Heizungsanlage"
          required
          value={formData.accessType}
          onChange={(e) => updateFormData('accessType', e.target.value)}
          options={heatingSystemAccessOptions}
        />
      )}

      {fields.accessNotes && formData.accessType === 'besondere-umstaende' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Besondere Umstände beschreiben
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            rows="3"
            value={formData.accessNotes}
            onChange={(e) => updateFormData('accessNotes', e.target.value)}
            placeholder="Beschreiben Sie die besonderen Zugangsbedingungen"
          />
        </div>
      )}

      {fields.maintenanceDates && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Letzte Wartung"
            type="date"
            value={formData.lastMaintenanceDate}
            onChange={(e) => updateFormData('lastMaintenanceDate', e.target.value)}
            helperText="Falls bekannt"
          />

          <Input
            label="Letzte Abgasmessung"
            type="date"
            value={formData.lastFlueGasTest}
            onChange={(e) => updateFormData('lastFlueGasTest', e.target.value)}
            helperText="Falls Sie diese durchgeführt haben"
          />
        </div>
      )}

      <Alert variant="info">
        <strong>Professionelle Durchführung:</strong> Der Heizungscheck wird von qualifizierten Fachkräften durchgeführt, 
        die bereits Erfahrung mit Ihrer Anlage haben und auf vorhandene Mess- und Prüfdaten zurückgreifen können.
      </Alert>
    </div>
  )
}

export default DocumentationAccessStep 