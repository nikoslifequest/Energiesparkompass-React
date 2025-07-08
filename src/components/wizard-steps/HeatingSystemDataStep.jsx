import { Input, Select, RadioGroup, HelpText } from '../ui'
import {
  heatingTypeOptions,
  heatingStatusOptions
} from '../../constants/formOptions'

const HeatingSystemDataStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Heizsituation",
    description = "Aktuelle Heizsituation",
    helpText = "Diese Informationen helfen uns, Ihren Beratungsbedarf einzuschätzen und relevante GEG-Bestimmungen zu berücksichtigen.",
    fields = {
      heatingType: true,
      heatingAge: true,
      heatingStatus: true,
      energyConsumption: true,
      gasConnection: true,
      renewableEnergy: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🔥 {title}:</strong> {helpText}
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
        {fields.heatingType && (
          <Select
            label="Aktueller Heizungstyp"
            value={formData.heatingType}
            onChange={(e) => updateFormData('heatingType', e.target.value)}
            options={heatingTypeOptions}
          />
        )}
        {fields.heatingAge && (
          <Input
            label="Alter der Heizung (Jahre)"
            type="number"
            value={formData.heatingAge}
            onChange={(e) => updateFormData('heatingAge', e.target.value)}
            placeholder="z.B. 15"
            min="0"
            max="50"
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.heatingStatus && (
          <Select
            label="Status der Heizung"
            value={formData.heatingStatus}
            onChange={(e) => updateFormData('heatingStatus', e.target.value)}
            options={heatingStatusOptions}
          />
        )}
        {fields.energyConsumption && (
          <Input
            label="Energieverbrauch (kWh/Jahr)"
            type="number"
            value={formData.energyConsumption}
            onChange={(e) => updateFormData('energyConsumption', e.target.value)}
            placeholder="z.B. 15000"
            helperText="Optional - falls bekannt"
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.gasConnection && (
          <RadioGroup
            label="Gasanschluss vorhanden"
            name="gasConnection"
            options={[
              { value: 'yes', label: 'Ja' },
              { value: 'no', label: 'Nein' },
              { value: 'unknown', label: 'Unbekannt' }
            ]}
            value={formData.gasConnection}
            onChange={(e) => updateFormData('gasConnection', e.target.value)}
            layout="horizontal"
          />
        )}
        {fields.renewableEnergy && (
          <Input
            label="Erneuerbare Energien"
            value={formData.renewableEnergy}
            onChange={(e) => updateFormData('renewableEnergy', e.target.value)}
            placeholder="z.B. Solar, Wärmepumpe"
            helperText="Falls bereits vorhanden"
          />
        )}
      </div>
    </div>
  )
}

export default HeatingSystemDataStep 