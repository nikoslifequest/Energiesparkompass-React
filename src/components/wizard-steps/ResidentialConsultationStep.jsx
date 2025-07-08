import { Select, HelpText } from '../ui'
import {
  consultationTypeOptions,
  priorityOptions,
  experienceOptions,
  informationSourceOptions,
  consultationLocationOptions,
  preferredMeetingOptions
} from '../../constants/formOptions'

const ResidentialConsultationStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Beratungswunsch",
    description = "Art der gewünschten Beratung",
    helpText = "Teilen Sie uns mit, welche Art von Beratung Sie sich vorstellen und was Ihre Hauptziele sind.",
    fields = {
      consultationType: true,
      priority: true,
      experience: true,
      informationSource: true,
      meetingPreferences: true,
      additionalNotes: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>💡 {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      {fields.consultationType && fields.priority && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Art der Beratung"
            value={formData.consultationType}
            onChange={(e) => updateFormData('consultationType', e.target.value)}
            options={consultationTypeOptions}
            helperText="Was ist Ihr Hauptinteresse?"
          />
          <Select
            label="Hauptpriorität"
            value={formData.priority}
            onChange={(e) => updateFormData('priority', e.target.value)}
            options={priorityOptions}
          />
        </div>
      )}

      {fields.experience && fields.informationSource && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Ihre Erfahrung mit Sanierungen"
            value={formData.experience}
            onChange={(e) => updateFormData('experience', e.target.value)}
            options={experienceOptions}
          />
          <Select
            label="Wie sind Sie auf uns aufmerksam geworden?"
            value={formData.informationSource}
            onChange={(e) => updateFormData('informationSource', e.target.value)}
            options={informationSourceOptions}
          />
        </div>
      )}

      {fields.meetingPreferences && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Bevorzugter Beratungsort"
            value={formData.consultationLocation}
            onChange={(e) => updateFormData('consultationLocation', e.target.value)}
            options={consultationLocationOptions}
          />
          <Select
            label="Bevorzugte Uhrzeit"
            value={formData.preferredMeeting}
            onChange={(e) => updateFormData('preferredMeeting', e.target.value)}
            options={preferredMeetingOptions}
          />
        </div>
      )}

      {fields.additionalNotes && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Besondere Wünsche oder Fragen
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            rows="3"
            value={formData.additionalNotes}
            onChange={(e) => updateFormData('additionalNotes', e.target.value)}
            placeholder="z.B. spezielle Anforderungen, besondere Räume, bereits geplante Maßnahmen..."
          />
        </div>
      )}
    </div>
  )
}

export default ResidentialConsultationStep 