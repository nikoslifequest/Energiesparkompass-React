import { Input, Select, RadioGroup, HelpText } from '../ui'
import {
  heatingSystemOptions,
  hotWaterSystemOptions,
  ventilationTypeOptions
} from '../../constants/formOptions'

const BuildingSystemsStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Anlagentechnik",
    description = "Heizung, Warmwasser, Lüftung",
    helpText = "Informationen zu Heizung, Warmwasser und Lüftung. Das Alter der Anlagen ist wichtig für die Effizienzberechnung.",
    fields = {
      heatingSystem: true,
      heatingAge: true,
      hotWaterSystem: true,
      ventilationType: true,
      renewableEnergy: true,
      renewableDetails: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>⚙️ {title}:</strong> {helpText}
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
        {fields.heatingSystem && (
          <Select
            label="Heizsystem"
            value={formData.heatingSystem}
            onChange={(e) => updateFormData('heatingSystem', e.target.value)}
            options={heatingSystemOptions}
          />
        )}
        {fields.heatingAge && (
          <Input
            label="Alter der Heizung (Jahre)"
            type="number"
            value={formData.heatingAge}
            onChange={(e) => updateFormData('heatingAge', e.target.value)}
            placeholder="z.B. 10"
            min="0"
            max="50"
          />
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.hotWaterSystem && (
          <Select
            label="Warmwasserbereitung"
            value={formData.hotWaterSystem}
            onChange={(e) => updateFormData('hotWaterSystem', e.target.value)}
            options={hotWaterSystemOptions}
          />
        )}
        {fields.ventilationType && (
          <Select
            label="Lüftungsart"
            value={formData.ventilationType}
            onChange={(e) => updateFormData('ventilationType', e.target.value)}
            options={ventilationTypeOptions}
          />
        )}
      </div>
      
      {fields.renewableEnergy && (
        <div className="space-y-4">
          <RadioGroup
            label="Erneuerbare Energien vorhanden?"
            name="hasRenewableEnergy"
            options={[
              { value: 'ja', label: 'Ja' },
              { value: 'nein', label: 'Nein' }
            ]}
            value={formData.hasRenewableEnergy}
            onChange={(e) => updateFormData('hasRenewableEnergy', e.target.value)}
            layout="horizontal"
          />
          
          {fields.renewableDetails && formData.hasRenewableEnergy === 'ja' && (
            <Input
              label="Details zu erneuerbaren Energien"
              value={formData.renewableDetails}
              onChange={(e) => updateFormData('renewableDetails', e.target.value)}
              placeholder="z.B. Solarthermie, Photovoltaik, etc."
            />
          )}
        </div>
      )}
    </div>
  )
}

export default BuildingSystemsStep 