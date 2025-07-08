import { Input, Select, HelpText } from '../ui'
import {
  consultationReasonOptions,
  heatingUrgencyOptions,
  propertyTypeOptions,
  budgetRangeOptions
} from '../../constants/formOptions'

const ConsultationReasonStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Ihr Anliegen",
    description = "Beratungsgrund und Planung",
    helpText = "Teilen Sie uns mit, was der Grund für Ihre Beratungsanfrage ist und welche Pläne Sie haben.",
    fields = {
      consultationReason: true,
      heatingUrgency: true,
      propertyType: true,
      budgetRange: true,
      plannedMeasures: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>💡 {title}:</strong> {helpText}
      </HelpText>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.consultationReason && (
          <Select
            label="Beratungsgrund"
            value={formData.consultationReason}
            onChange={(e) => updateFormData('consultationReason', e.target.value)}
            options={consultationReasonOptions}
          />
        )}
        {fields.heatingUrgency && (
          <Select
            label="Zeitrahmen Heizungsaustausch"
            value={formData.heatingUrgency}
            onChange={(e) => updateFormData('heatingUrgency', e.target.value)}
            options={heatingUrgencyOptions}
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.propertyType && (
          <Select
            label="Eigentumsverhältnis"
            value={formData.propertyType}
            onChange={(e) => updateFormData('propertyType', e.target.value)}
            options={propertyTypeOptions}
          />
        )}
        {fields.budgetRange && (
          <Select
            label="Budgetrahmen"
            value={formData.budgetRange}
            onChange={(e) => updateFormData('budgetRange', e.target.value)}
            options={budgetRangeOptions}
            helperText="Grobe Einschätzung"
          />
        )}
      </div>

      {fields.plannedMeasures && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Geplante Maßnahmen
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            rows="3"
            value={formData.plannedMeasures}
            onChange={(e) => updateFormData('plannedMeasures', e.target.value)}
            placeholder="z.B. Heizungsaustausch, Dämmung, Fenster..."
          />
        </div>
      )}
    </div>
  )
}

export default ConsultationReasonStep 