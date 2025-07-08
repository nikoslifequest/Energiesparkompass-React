import { Select, HelpText } from '../ui'
import {
  insulationStatusOptions,
  windowStatusOptions
} from '../../constants/formOptions'

const BuildingConditionStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Gebäudezustand",
    description = "Kurzeinschätzung",
    helpText = "Eine grobe Einschätzung hilft uns bei der Vorbereitung der Beratung. Lassen Sie Felder frei, wenn Sie unsicher sind.",
    fields = {
      insulationStatus: true,
      windowStatus: true,
      previousRenovations: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🏗️ {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.insulationStatus && (
          <Select
            label="Dämmzustand"
            value={formData.insulationStatus}
            onChange={(e) => updateFormData('insulationStatus', e.target.value)}
            options={insulationStatusOptions}
          />
        )}
        {fields.windowStatus && (
          <Select
            label="Fensterqualität"
            value={formData.windowStatus}
            onChange={(e) => updateFormData('windowStatus', e.target.value)}
            options={windowStatusOptions}
          />
        )}
      </div>

      {fields.previousRenovations && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bisherige Sanierungsmaßnahmen
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            rows="3"
            value={formData.previousRenovations}
            onChange={(e) => updateFormData('previousRenovations', e.target.value)}
            placeholder="z.B. Dach gedämmt 2015, Fenster erneuert 2018..."
          />
        </div>
      )}
    </div>
  )
}

export default BuildingConditionStep 