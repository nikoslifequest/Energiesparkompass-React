import { ModernRadioGroup } from '../ui'
import {
  availableMeasures,
  renovationScopeOptions
} from '../../constants/formOptions'

const ModernMeasuresSelectionStep = ({ formData, updateFormData, stepConfig = {} }) => {
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

  // Convert availableMeasures to modern format with icons
  const measuresOptions = availableMeasures.map(measure => ({
    value: measure.id,
    label: measure.label,
    description: measure.description || '',
    icon: () => <span className="text-2xl">{measure.icon}</span>
  }))

  // Convert renovationScopeOptions to modern format
  const renovationOptions = renovationScopeOptions.map(option => ({
    value: option.value,
    label: option.label,
    description: option.description || ''
  }))

  return (
    <div className="space-y-8">
      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-800">
              {helpText}
            </p>
          </div>
        </div>
      </div>

      {/* Measures Selection */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Welche Maßnahmen planen Sie?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {measuresOptions.map((measure) => (
            <div
              key={measure.value}
              className={`
                relative cursor-pointer transition-all duration-200
                rounded-2xl border-2 p-6 text-center
                hover:shadow-lg hover:scale-105
                ${formData.measures?.includes(measure.value)
                  ? 'border-primary-500 bg-primary-50 shadow-lg' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
                }
              `}
              onClick={() => toggleMeasure(measure.value)}
            >
              {/* Selection Indicator */}
              {formData.measures?.includes(measure.value) && (
                <div className="absolute top-3 right-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`flex justify-center mb-4 ${formData.measures?.includes(measure.value) ? 'text-primary-600' : 'text-gray-600'}`}>
                <measure.icon />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h4 className={`font-semibold text-base ${formData.measures?.includes(measure.value) ? 'text-primary-900' : 'text-gray-900'}`}>
                  {measure.label}
                </h4>
                
                {measure.description && (
                  <p className={`text-sm ${formData.measures?.includes(measure.value) ? 'text-primary-700' : 'text-gray-600'}`}>
                    {measure.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Renovation Scope */}
      <div className="space-y-6">
        <ModernRadioGroup
          label="Umfang der Sanierung"
          name="renovationScope"
          options={renovationOptions}
          value={formData.renovationScope || ''}
          onChange={(e) => updateFormData('renovationScope', e.target.value)}
          layout="vertical"
        />
      </div>
    </div>
  )
}

export default ModernMeasuresSelectionStep 