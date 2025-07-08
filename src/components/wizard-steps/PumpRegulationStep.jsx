import { Input, Select, RadioGroup, HelpText } from '../ui'
import {
  pumpTypeOptions,
  valveTypeOptions,
  heatingCurveOptions
} from '../../constants/formOptions'

const PumpRegulationStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Pumpe & Regelung",
    description = "Technische Komponenten",
    helpText = "Details zu Pumpe, Ventilen und aktuellen Einstellungen sind wichtig für die Optimierung des Systems.",
    fields = {
      pumpType: true,
      pumpAge: true,
      valveType: true,
      heatingCurve: true,
      currentFlowTemperature: true,
      currentReturnTemperature: true,
      hasReturnTemperatureControl: true,
      hasDifferentialPressureControl: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🔧 {title}:</strong> {helpText}
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
        {fields.pumpType && (
          <Select
            label="Typ der Umwälzpumpe"
            value={formData.pumpType}
            onChange={(e) => updateFormData('pumpType', e.target.value)}
            options={pumpTypeOptions}
          />
        )}
        {fields.pumpAge && (
          <Input
            label="Alter der Pumpe (Jahre)"
            type="number"
            value={formData.pumpAge}
            onChange={(e) => updateFormData('pumpAge', e.target.value)}
            placeholder="z.B. 5"
            min="0"
            max="50"
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.valveType && (
          <Select
            label="Art der Ventile"
            value={formData.valveType}
            onChange={(e) => updateFormData('valveType', e.target.value)}
            options={valveTypeOptions}
          />
        )}
        {fields.heatingCurve && (
          <Select
            label="Heizkurven-Einstellung"
            value={formData.heatingCurve}
            onChange={(e) => updateFormData('heatingCurve', e.target.value)}
            options={heatingCurveOptions}
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.currentFlowTemperature && (
          <Input
            label="Aktuelle Vorlauftemperatur (°C)"
            type="number"
            value={formData.currentFlowTemperature}
            onChange={(e) => updateFormData('currentFlowTemperature', e.target.value)}
            placeholder="z.B. 70"
            min="30"
            max="90"
            helperText="Falls am Kessel ablesbar"
          />
        )}
        {fields.currentReturnTemperature && (
          <Input
            label="Aktuelle Rücklauftemperatur (°C)"
            type="number"
            value={formData.currentReturnTemperature}
            onChange={(e) => updateFormData('currentReturnTemperature', e.target.value)}
            placeholder="z.B. 55"
            min="20"
            max="80"
            helperText="Falls am Kessel ablesbar"
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.hasReturnTemperatureControl && (
          <RadioGroup
            label="Rücklauftemperaturregelung vorhanden?"
            name="hasReturnTemperatureControl"
            options={[
              { value: 'ja', label: 'Ja' },
              { value: 'nein', label: 'Nein' },
              { value: 'unbekannt', label: 'Unbekannt' }
            ]}
            value={formData.hasReturnTemperatureControl}
            onChange={(e) => updateFormData('hasReturnTemperatureControl', e.target.value)}
            layout="horizontal"
          />
        )}
        {fields.hasDifferentialPressureControl && (
          <RadioGroup
            label="Differenzdruckregelung vorhanden?"
            name="hasDifferentialPressureControl"
            options={[
              { value: 'ja', label: 'Ja' },
              { value: 'nein', label: 'Nein' },
              { value: 'unbekannt', label: 'Unbekannt' }
            ]}
            value={formData.hasDifferentialPressureControl}
            onChange={(e) => updateFormData('hasDifferentialPressureControl', e.target.value)}
            layout="horizontal"
          />
        )}
      </div>
    </div>
  )
}

export default PumpRegulationStep 