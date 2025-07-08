import { Input, Select, RadioGroup, HelpText, Alert } from '../ui'
import {
  heatingDistributionOptions,
  hotWaterDistributionOptions,
  heatingSystemOptions,
  ventilationTypeOptions
} from '../../constants/formOptions'

const MultiBuildingSystemsStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Anlagentechnik Mehrfamilienhaus",
    description = "Heizung, Warmwasser, Lüftung",
    helpText = "Bei Mehrfamilienhäusern ist die Art der Versorgung (zentral oder dezentral) entscheidend für die Energieausweis-Erstellung.",
    fields = {
      heatingDistribution: true,
      centralHeatingSystem: true,
      heatingAge: true,
      hotWaterDistribution: true,
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

      <div className="space-y-6">
        {fields.heatingDistribution && (
          <Select
            label="Heizungsverteilung"
            required
            value={formData.heatingDistribution}
            onChange={(e) => updateFormData('heatingDistribution', e.target.value)}
            options={heatingDistributionOptions}
          />
        )}
        
        {(formData.heatingDistribution === 'zentral-alle' || formData.heatingDistribution === 'zentral-teilweise') && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-blue-50 rounded-lg">
            {fields.centralHeatingSystem && (
              <Select
                label="Zentrales Heizsystem"
                value={formData.centralHeatingSystem}
                onChange={(e) => updateFormData('centralHeatingSystem', e.target.value)}
                options={heatingSystemOptions}
              />
            )}
            {fields.heatingAge && (
              <Input
                label="Alter der zentralen Heizung (Jahre)"
                type="number"
                value={formData.heatingAge}
                onChange={(e) => updateFormData('heatingAge', e.target.value)}
                placeholder="z.B. 10"
                min="0"
                max="50"
              />
            )}
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.hotWaterDistribution && (
          <Select
            label="Warmwasserversorgung"
            value={formData.hotWaterDistribution}
            onChange={(e) => updateFormData('hotWaterDistribution', e.target.value)}
            options={hotWaterDistributionOptions}
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
            label="Erneuerbare Energien vorhanden"
            name="hasRenewableEnergy"
            options={[
              { value: 'ja', label: 'Ja' },
              { value: 'nein', label: 'Nein' },
              { value: 'geplant', label: 'Geplant' }
            ]}
            value={formData.hasRenewableEnergy}
            onChange={(e) => updateFormData('hasRenewableEnergy', e.target.value)}
            layout="horizontal"
          />
          
          {fields.renewableDetails && (formData.hasRenewableEnergy === 'ja' || formData.hasRenewableEnergy === 'geplant') && (
            <Input
              label="Details zu erneuerbaren Energien"
              value={formData.renewableDetails}
              onChange={(e) => updateFormData('renewableDetails', e.target.value)}
              placeholder="z.B. Solaranlage auf dem Dach, Wärmepumpe, etc."
            />
          )}
        </div>
      )}
    </div>
  )
}

export default MultiBuildingSystemsStep 