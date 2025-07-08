import { HelpText } from '../ui'
import {
  availableMeasures,
  renovationScopeOptions
} from '../../constants/formOptions'

const MeasuresSelectionStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Geplante Energiesparmaßnahmen",
    description = "Welche Maßnahmen planen Sie? Mehrfachauswahl möglich.",
    helpText = "Wählen Sie alle Maßnahmen aus, die Sie umsetzen möchten. Sie können mehrere Optionen kombinieren."
  } = stepConfig

  const toggleMeasure = (measureId) => {
    const currentMeasures = formData.measures || []
    if (currentMeasures.includes(measureId)) {
      updateFormData('measures', currentMeasures.filter(id => id !== measureId))
    } else {
      updateFormData('measures', [...currentMeasures, measureId])
    }
  }

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableMeasures.map((measure) => (
          <div
            key={measure.id}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              formData.measures?.includes(measure.id)
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => toggleMeasure(measure.id)}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{measure.icon}</div>
              <div className="font-medium text-gray-900">{measure.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Umfang der Sanierung
          </label>
          <div className="space-y-2">
            {renovationScopeOptions.map((option) => (
              <label key={option.value} className="flex items-start">
                <input
                  type="radio"
                  name="renovationScope"
                  value={option.value}
                  checked={formData.renovationScope === option.value}
                  onChange={(e) => updateFormData('renovationScope', e.target.value)}
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">{option.label}</div>
                  {option.description && (
                    <div className="text-xs text-gray-500">{option.description}</div>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeasuresSelectionStep 