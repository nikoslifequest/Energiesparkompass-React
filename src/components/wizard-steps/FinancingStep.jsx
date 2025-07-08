import { HelpText } from '../ui'
import {
  investmentOptions,
  capitalOptions,
  timelineOptions,
  fundingTypeOptions
} from '../../constants/formOptions'

const FinancingStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Finanzierung & Zeitplan",
    description = "Angaben zu Budget und Zeitvorstellungen helfen bei der Beratung.",
    helpText = "Diese Angaben sind optional, helfen aber bei einer gezielteren Beratung und Angebotserstellung."
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>💰 {title}:</strong> {helpText}
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Geplante Investitionssumme
          </label>
          <select
            value={formData.investmentAmount}
            onChange={(e) => updateFormData('investmentAmount', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Bitte wählen</option>
            {investmentOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Verfügbares Eigenkapital
          </label>
          <select
            value={formData.ownCapital}
            onChange={(e) => updateFormData('ownCapital', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Bitte wählen</option>
            {capitalOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gewünschte Förderart
          </label>
          <div className="space-y-2">
            {fundingTypeOptions.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="fundingType"
                  value={option.value}
                  checked={formData.fundingType === option.value}
                  onChange={(e) => updateFormData('fundingType', e.target.value)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zeitrahmen für Umsetzung
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => updateFormData('timeline', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Bitte wählen</option>
            {timelineOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Optional additional info */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>💡 Hinweis:</strong> Diese Angaben sind freiwillig und helfen uns dabei, 
          Ihnen die passenden Fördermöglichkeiten und Finanzierungsoptionen zu empfehlen.
        </p>
      </div>
    </div>
  )
}

export default FinancingStep 