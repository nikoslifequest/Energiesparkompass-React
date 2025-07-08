import { Select, Alert, HelpText } from '../ui'
import {
  heatingCheckServiceTypeOptions,
  heatingCheckUrgencyOptions,
  combinedServiceOptions
} from '../../constants/formOptions'

const HeatingCheckServiceStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Service-Art",
    description = "Art und Dringlichkeit des Heizungschecks",
    helpText = "Professionelle Überprüfung Ihrer Heizungsanlage auf Energieeffizienz und Optimierungspotentiale.",
    fields = {
      serviceType: true,
      combinedServices: true,
      urgency: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🔧 {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Heizungscheck 2.0 nach GEG §60b</h3>
        <p className="text-blue-800 text-sm">
          Professionelle Überprüfung Ihrer Heizungsanlage auf Energieeffizienz und Optimierungspotentiale. 
          Der Check kann mit anderen Serviceleistungen kombiniert werden, um Kosten zu sparen.
        </p>
      </div>

      {fields.serviceType && (
        <Select
          label="Art des Service"
          required
          value={formData.serviceType}
          onChange={(e) => updateFormData('serviceType', e.target.value)}
          options={heatingCheckServiceTypeOptions}
        />
      )}

      {fields.combinedServices && formData.serviceType?.includes('combined') && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zusätzliche Services (Mehrfachauswahl möglich)
          </label>
          <div className="space-y-2">
            {combinedServiceOptions.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  checked={formData.combinedServices?.includes(option.value)}
                  onChange={(e) => {
                    const current = formData.combinedServices || []
                    const newServices = e.target.checked
                      ? [...current, option.value]
                      : current.filter(s => s !== option.value)
                    updateFormData('combinedServices', newServices)
                  }}
                />
                <span className="ml-2 text-sm text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {fields.urgency && (
        <Select
          label="Dringlichkeit"
          required
          value={formData.urgency}
          onChange={(e) => updateFormData('urgency', e.target.value)}
          options={heatingCheckUrgencyOptions}
        />
      )}

      <Alert variant="info">
        <strong>Kostenvorteil:</strong> Bei kombinierten Services können Sie Anfahrtskosten sparen. 
        Der Heizungscheck lässt sich ideal mit anderen Wartungs- oder Prüfterminen verbinden.
      </Alert>
    </div>
  )
}

export default HeatingCheckServiceStep 