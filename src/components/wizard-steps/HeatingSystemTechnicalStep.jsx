import { Input, Select, HelpText } from '../ui'
import {
  heatingSystemDetailOptions,
  heatGeneratorOptions,
  heatingDistributionSystemOptions
} from '../../constants/formOptions'

const HeatingSystemTechnicalStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Heizsystem-Details",
    description = "Details zur Heizungsanlage",
    helpText = "Informationen zu Ihrer Heizungsanlage sind entscheidend für die Berechnung des optimalen hydraulischen Abgleichs.",
    fields = {
      heatingSystemType: true,
      heatGenerator: true,
      heatGeneratorAge: true,
      heatGeneratorPower: true,
      distributionSystem: true
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
        {fields.heatingSystemType && (
          <Select
            label="Art des Heizsystems"
            required
            value={formData.heatingSystemType}
            onChange={(e) => updateFormData('heatingSystemType', e.target.value)}
            options={heatingSystemDetailOptions}
          />
        )}
        {fields.heatGenerator && (
          <Select
            label="Wärmeerzeuger"
            required
            value={formData.heatGenerator}
            onChange={(e) => updateFormData('heatGenerator', e.target.value)}
            options={heatGeneratorOptions}
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.heatGeneratorAge && (
          <Input
            label="Alter des Wärmeerzeugers (Jahre)"
            type="number"
            value={formData.heatGeneratorAge}
            onChange={(e) => updateFormData('heatGeneratorAge', e.target.value)}
            placeholder="z.B. 8"
            min="0"
            max="50"
          />
        )}
        {fields.heatGeneratorPower && (
          <Input
            label="Heizleistung (kW)"
            type="number"
            value={formData.heatGeneratorPower}
            onChange={(e) => updateFormData('heatGeneratorPower', e.target.value)}
            placeholder="z.B. 15"
            min="3"
            max="500"
            helperText="Falls bekannt - steht meist auf dem Typenschild"
          />
        )}
      </div>

      {fields.distributionSystem && (
        <Select
          label="Verteilsystem"
          value={formData.distributionSystem}
          onChange={(e) => updateFormData('distributionSystem', e.target.value)}
          options={heatingDistributionSystemOptions}
          helperText="Art der Rohrverlegung und Verteilung"
        />
      )}
    </div>
  )
}

export default HeatingSystemTechnicalStep 