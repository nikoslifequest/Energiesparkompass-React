import { Input, Select, RadioGroup, HelpText } from '../ui'
import {
  problemDescriptionOptions,
  urgencyHydraulicOptions
} from '../../constants/formOptions'

const ProblemAnalysisStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Problem-Analyse",
    description = "Aktuelle Probleme beschreiben",
    helpText = "Beschreiben Sie die aktuellen Probleme mit Ihrer Heizung. Dies hilft bei der gezielten Optimierung.",
    fields = {
      problemDescription: true,
      urgency: true,
      currentComfortLevel: true,
      specificProblems: true,
      hasRecentChanges: true,
      recentChangesDetails: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🔍 {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      <div className="space-y-6">
        {fields.problemDescription && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Welche Probleme treten auf? (Mehrfachauswahl möglich)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {problemDescriptionOptions.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.problemDescription?.includes(option.value)}
                    onChange={(e) => {
                      const current = formData.problemDescription || []
                      if (e.target.checked) {
                        updateFormData('problemDescription', [...current, option.value])
                      } else {
                        updateFormData('problemDescription', current.filter(v => v !== option.value))
                      }
                    }}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
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
            options={urgencyHydraulicOptions}
          />
        )}

        {fields.currentComfortLevel && (
          <RadioGroup
            label="Aktueller Komfort in den Räumen"
            name="currentComfortLevel"
            options={[
              { value: 'sehr-schlecht', label: 'Sehr schlecht - manche Räume bleiben kalt' },
              { value: 'schlecht', label: 'Schlecht - ungleichmäßige Wärmeverteilung' },
              { value: 'mittelmäßig', label: 'Mittelmäßig - funktioniert, aber nicht optimal' },
              { value: 'gut', label: 'Gut - nur kleine Verbesserungen gewünscht' }
            ]}
            value={formData.currentComfortLevel}
            onChange={(e) => updateFormData('currentComfortLevel', e.target.value)}
            layout="vertical"
          />
        )}

        {fields.specificProblems && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Beschreibung spezifischer Probleme
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              rows="3"
              value={formData.specificProblems}
              onChange={(e) => updateFormData('specificProblems', e.target.value)}
              placeholder="z.B. Gluckern in den Leitungen, bestimmte Heizkörper werden nicht warm..."
            />
          </div>
        )}

        {fields.hasRecentChanges && (
          <RadioGroup
            label="Gab es kürzlich Änderungen am Heizsystem?"
            name="hasRecentChanges"
            options={[
              { value: 'ja', label: 'Ja' },
              { value: 'nein', label: 'Nein' }
            ]}
            value={formData.hasRecentChanges}
            onChange={(e) => updateFormData('hasRecentChanges', e.target.value)}
            layout="horizontal"
          />
        )}

        {fields.recentChangesDetails && formData.hasRecentChanges === 'ja' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Details zu den Änderungen
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              rows="2"
              value={formData.recentChangesDetails}
              onChange={(e) => updateFormData('recentChangesDetails', e.target.value)}
              placeholder="z.B. Neue Heizkörper, Rohrleitungen, Pumpe, Modernisierung..."
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProblemAnalysisStep 