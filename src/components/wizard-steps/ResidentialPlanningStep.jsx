import { Input, Select, Alert, HelpText } from '../ui'
import {
  implementationTimeOptions,
  urgencyOptions,
  financingOptions
} from '../../constants/formOptions'

const ResidentialPlanningStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Planung & Budget",
    description = "Zeitrahmen & Finanzierung",
    helpText = "Diese Informationen helfen uns bei der Beratungsvorbereitung und um passende Förderoptionen zu finden.",
    fields = {
      implementation: true,
      urgency: true,
      financing: true,
      budget: true,
      fundingAlert: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>📅 {title}:</strong> {helpText}
      </HelpText>

      {fields.implementation && fields.urgency && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Geplanter Umsetzungszeitraum"
            value={formData.implementation}
            onChange={(e) => updateFormData('implementation', e.target.value)}
            options={implementationTimeOptions}
          />
          <Select
            label="Dringlichkeit"
            value={formData.urgency}
            onChange={(e) => updateFormData('urgency', e.target.value)}
            options={urgencyOptions}
          />
        </div>
      )}

      {fields.financing && fields.budget && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Finanzierungsvorstellung"
            value={formData.financing}
            onChange={(e) => updateFormData('financing', e.target.value)}
            options={financingOptions}
          />
          <Input
            label="Grobes Budget (€)"
            value={formData.budget}
            onChange={(e) => updateFormData('budget', e.target.value)}
            placeholder="z.B. 50.000"
            helperText="Grobe Vorstellung (optional)"
          />
        </div>
      )}

      {fields.fundingAlert && (
        <Alert variant="info" title="Hinweis zu Förderungen">
          In der Beratung informieren wir Sie detailliert über aktuelle Förderprogramme wie 
          BAFA-Zuschüsse, KfW-Kredite und regionale Fördermöglichkeiten.
        </Alert>
      )}
    </div>
  )
}

export default ResidentialPlanningStep 