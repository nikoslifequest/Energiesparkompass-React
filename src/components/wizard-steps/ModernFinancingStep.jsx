import { ModernInput, ModernSelect, ModernRadioGroup } from '../ui'
import {
  investmentOptions,
  capitalOptions,
  fundingTypeOptions,
  timelineOptions
} from '../../constants/formOptions'

const ModernFinancingStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Finanzierung und Zeitplanung",
    description = "Informationen zu Ihrem Budget und Zeitvorstellungen",
    helpText = "Diese Angaben helfen uns dabei, die passenden Fördermöglichkeiten für Sie zu identifizieren."
  } = stepConfig

  return (
    <div className="space-y-8">
      {/* Info Box */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-800">
              {helpText}
            </p>
          </div>
        </div>
      </div>

      {/* Budget Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Budget und Investition
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ModernSelect
            label="Geplante Investitionssumme"
            options={investmentOptions}
            value={formData.investmentAmount || ''}
            onChange={(e) => updateFormData('investmentAmount', e.target.value)}
            placeholder="Bitte wählen..."
            helperText="Ungefährer Betrag für alle geplanten Maßnahmen"
          />
          
          <ModernSelect
            label="Verfügbares Eigenkapital"
            options={capitalOptions}
            value={formData.ownCapital || ''}
            onChange={(e) => updateFormData('ownCapital', e.target.value)}
            placeholder="Bitte wählen..."
            helperText="Wie viel können Sie selbst finanzieren?"
          />
        </div>
      </div>

      {/* Funding Type */}
      <div className="space-y-6">
        <ModernRadioGroup
          label="Welche Art der Förderung interessiert Sie?"
          name="fundingType"
          options={fundingTypeOptions}
          value={formData.fundingType || ''}
          onChange={(e) => updateFormData('fundingType', e.target.value)}
          layout="vertical"
        />
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        <ModernRadioGroup
          label="Wann möchten Sie mit der Umsetzung beginnen?"
          name="timeline"
          options={timelineOptions}
          value={formData.timeline || ''}
          onChange={(e) => updateFormData('timeline', e.target.value)}
          layout="grid"
        />
      </div>

      {/* Additional Info */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h4 className="text-base font-semibold text-gray-900 mb-3">
          Gut zu wissen
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Die Fördermittelberatung ist für Sie kostenlos
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Wir prüfen alle verfügbaren Bundes- und Landesförderprogramme
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Unterstützung bei der Antragstellung inklusive
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ModernFinancingStep 