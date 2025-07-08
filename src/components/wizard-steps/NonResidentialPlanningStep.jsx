import { Select, Alert, HelpText } from '../ui'
import {
  investmentReadinessOptions,
  implementationTimeOptions,
  urgencyOptions,
  preferredMeetingOptions
} from '../../constants/formOptions'

const NonResidentialPlanningStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Planung & Umsetzung",
    description = "Zeitrahmen & Investitionsbereitschaft",
    helpText = "Informationen zu Zeitrahmen und Investitionsbereitschaft helfen bei der optimalen Beratungsgestaltung und Fördermittelplanung.",
    fields = {
      investment: true,
      implementation: true,
      urgency: true,
      preferredMeeting: true,
      fundingAlert: true,
      importantNotice: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>📅 {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      {fields.investment && fields.implementation && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Investitionsbereitschaft"
            value={formData.investmentReadiness}
            onChange={(e) => updateFormData('investmentReadiness', e.target.value)}
            options={investmentReadinessOptions}
          />
          <Select
            label="Geplanter Umsetzungszeitraum"
            value={formData.implementation}
            onChange={(e) => updateFormData('implementation', e.target.value)}
            options={implementationTimeOptions}
          />
        </div>
      )}

      {fields.urgency && fields.preferredMeeting && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Dringlichkeit der Beratung"
            value={formData.urgency}
            onChange={(e) => updateFormData('urgency', e.target.value)}
            options={urgencyOptions}
          />
          <Select
            label="Bevorzugte Uhrzeit"
            value={formData.preferredMeeting}
            onChange={(e) => updateFormData('preferredMeeting', e.target.value)}
            options={preferredMeetingOptions}
          />
        </div>
      )}

      {fields.fundingAlert && (
        <Alert variant="info" title="Förderhöhen nach Nettogrundfläche">
          <div className="text-sm space-y-1">
            <div>• <strong>Unter 200 m²:</strong> max. 850 € (50% Zuschuss)</div>
            <div>• <strong>200-500 m²:</strong> max. 2.500 € (50% Zuschuss)</div>
            <div>• <strong>Über 500 m²:</strong> max. 4.000 € (50% Zuschuss)</div>
          </div>
        </Alert>
      )}

      {fields.importantNotice && (
        <Alert variant="warning" title="Wichtiger Hinweis">
          Mit der Beratung darf erst nach Bewilligung des Antrags begonnen werden. 
          Planungsleistungen sind vor Antragstellung erlaubt.
        </Alert>
      )}
    </div>
  )
}

export default NonResidentialPlanningStep 