import { Input, Select, HelpText } from '../ui'
import {
  heatingTypeOptions,
  heatingStatusOptions,
  heatingIssueOptions,
  comfortIssueOptions
} from '../../constants/formOptions'

const ResidentialEnergyStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Energiesituation",
    description = "Heizung & Energieverbrauch",
    helpText = "Informationen zu Ihrer aktuellen Heizung und eventuellen Problemen helfen uns bei der gezielten Beratung.",
    fields = {
      heatingSystem: true,
      heatingIssues: true,
      comfortIssues: true
    }
  } = stepConfig

  const toggleArrayValue = (array, value) => {
    const currentArray = array || []
    if (currentArray.includes(value)) {
      return currentArray.filter(item => item !== value)
    } else {
      return [...currentArray, value]
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🔥 {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      {fields.heatingSystem && (
        <>
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
              helperText="Falls bekannt (siehe Abrechnung)"
            />
          </div>
        </>
      )}

      {fields.heatingIssues && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Probleme mit der Heizung (Mehrfachauswahl möglich)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {heatingIssueOptions.slice(1).map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.heatingIssues?.includes(option.value)}
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
      )}

      {fields.comfortIssues && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Komfortprobleme (Mehrfachauswahl möglich)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {comfortIssueOptions.slice(1).map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.comfortIssues?.includes(option.value)}
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
      )}
    </div>
  )
}

export default ResidentialEnergyStep 