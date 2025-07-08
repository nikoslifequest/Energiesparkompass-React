import { Select, Alert, HelpText } from '../ui'
import {
  consultationModuleOptions,
  consultationGoalOptions,
  specialRequirementsOptions,
  consultationLocationOptions
} from '../../constants/formOptions'

const NonResidentialConsultationStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Beratungswunsch",
    description = "Art und Ziel der Beratung",
    helpText = "Definieren Sie Art und Ziel der gewünschten Energieberatung. Die verschiedenen Module haben unterschiedliche Schwerpunkte und Förderhöhen.",
    fields = {
      consultationModule: true,
      consultationGoal: true,
      specialRequirements: true,
      consultationLocation: true,
      additionalNotes: true,
      moduleAlert: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🎯 {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      {fields.consultationModule && fields.consultationGoal && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Gewünschtes Beratungsmodul"
            value={formData.consultationModule}
            onChange={(e) => updateFormData('consultationModule', e.target.value)}
            options={consultationModuleOptions}
            helperText="Verschiedene BAFA-Module verfügbar"
          />
          <Select
            label="Beratungsziel"
            value={formData.consultationGoal}
            onChange={(e) => updateFormData('consultationGoal', e.target.value)}
            options={consultationGoalOptions}
          />
        </div>
      )}

      {fields.specialRequirements && fields.consultationLocation && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Besondere Anforderungen"
            value={formData.specialRequirements}
            onChange={(e) => updateFormData('specialRequirements', e.target.value)}
            options={specialRequirementsOptions}
          />
          <Select
            label="Bevorzugter Beratungsort"
            value={formData.consultationLocation}
            onChange={(e) => updateFormData('consultationLocation', e.target.value)}
            options={consultationLocationOptions}
          />
        </div>
      )}

      {fields.additionalNotes && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zusätzliche Informationen und Wünsche
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            rows="4"
            value={formData.additionalNotes}
            onChange={(e) => updateFormData('additionalNotes', e.target.value)}
            placeholder="z.B. spezielle Prozesse, geplante Umbauten, besondere Herausforderungen, gewünschte Schwerpunkte der Beratung..."
          />
        </div>
      )}

      {fields.moduleAlert && (
        <Alert variant="info" title="Hinweis zu den Beratungsmodulen">
          <div className="text-sm space-y-2">
            <div><strong>Modul 1 (Energieaudit):</strong> Systematische Erfassung und Bewertung des Energieeinsatzes</div>
            <div><strong>Modul 2 (Energieberatung):</strong> Sanierungskonzept nach DIN V 18599</div>
            <div><strong>Modul 3 (Contracting):</strong> Beratung zu Contracting-Modellen mit Einspargarantie</div>
          </div>
        </Alert>
      )}
    </div>
  )
}

export default NonResidentialConsultationStep 