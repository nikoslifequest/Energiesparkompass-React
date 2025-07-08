import { Select, Alert, HelpText } from '../ui'
import {
  calculationMethodOptions,
  calculationPurposeOptions,
  timeframeUrgencyOptions,
  previousCalculationsOptions,
  softwarePreferenceOptions,
  implementationTimeOptions
} from '../../constants/formOptions'

const HeatLoadCalculationStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Berechnungsart",
    description = "Methode und Anforderungen",
    helpText = "Wählen Sie die gewünschte Berechnungsmethode und definieren Sie die Anforderungen an die Heizlastberechnung.",
    fields = {
      calculationSpecs: true,
      timeframe: true,
      software: true,
      implementation: true,
      specificRequirements: true,
      methodAlert: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>📊 {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      {fields.calculationSpecs && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Zweck der Berechnung"
            value={formData.calculationPurpose}
            onChange={(e) => updateFormData('calculationPurpose', e.target.value)}
            options={calculationPurposeOptions}
            helperText="Bestimmt die erforderliche Genauigkeit"
          />
          <Select
            label="Gewünschte Berechnungsmethode"
            value={formData.calculationMethod}
            onChange={(e) => updateFormData('calculationMethod', e.target.value)}
            options={calculationMethodOptions}
          />
        </div>
      )}

      {fields.timeframe && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Zeitrahmen / Dringlichkeit"
            value={formData.timeframeUrgency}
            onChange={(e) => updateFormData('timeframeUrgency', e.target.value)}
            options={timeframeUrgencyOptions}
          />
          <Select
            label="Vorherige Berechnungen"
            value={formData.previousCalculations}
            onChange={(e) => updateFormData('previousCalculations', e.target.value)}
            options={previousCalculationsOptions}
          />
        </div>
      )}

      {fields.software && fields.implementation && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Software-Präferenz"
            value={formData.softwarePreference}
            onChange={(e) => updateFormData('softwarePreference', e.target.value)}
            options={softwarePreferenceOptions}
            helperText="Falls gewünscht"
          />
          <Select
            label="Geplanter Umsetzungszeitraum"
            value={formData.implementation}
            onChange={(e) => updateFormData('implementation', e.target.value)}
            options={implementationTimeOptions}
          />
        </div>
      )}

      {fields.specificRequirements && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Spezielle Anforderungen an die Berechnung
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            rows="3"
            value={formData.specificRequirements}
            onChange={(e) => updateFormData('specificRequirements', e.target.value)}
            placeholder="z.B. Berücksichtigung von Wärmebrücken, raumweise Aufstellung, Heizkörperauslegung, hydraulischer Abgleich..."
          />
        </div>
      )}

      {fields.methodAlert && (
        <Alert variant="info" title="Berechnungsmethoden im Vergleich">
          <div className="text-sm space-y-2">
            <div><strong>DIN EN 12831 detailliert:</strong> Höchste Genauigkeit, alle Parameter berücksichtigt</div>
            <div><strong>DIN EN 12831 vereinfacht:</strong> Schneller, für Standardgebäude ausreichend</div>
            <div><strong>DIN EN 15378 überschlägig:</strong> Grobe Schätzung, erste Orientierung</div>
          </div>
        </Alert>
      )}
    </div>
  )
}

export default HeatLoadCalculationStep 