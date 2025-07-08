import { Input, Select, HelpText } from '../ui'
import {
  hydraulicBalancingBuildingTypeOptions,
  constructionYearOptions,
  insulationLevelOptions
} from '../../constants/formOptions'

const HydraulicBuildingDataStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Gebäudedaten",
    description = "Grunddaten zum Gebäude",
    helpText = "Diese Informationen helfen uns, die Komplexität und den Umfang des hydraulischen Abgleichs zu bestimmen.",
    fields = {
      buildingType: true,
      constructionYear: true,
      totalLivingSpace: true,
      numberOfRooms: true,
      insulationLevel: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🏠 {title}:</strong> {helpText}
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
        {fields.buildingType && (
          <Select
            label="Gebäudetyp"
            required
            value={formData.buildingType}
            onChange={(e) => updateFormData('buildingType', e.target.value)}
            options={hydraulicBalancingBuildingTypeOptions}
          />
        )}
        {fields.constructionYear && (
          <Select
            label="Baujahr/Baualtersklasse"
            value={formData.constructionYear}
            onChange={(e) => updateFormData('constructionYear', e.target.value)}
            options={constructionYearOptions}
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.totalLivingSpace && (
          <Input
            label="Beheizte Wohnfläche (m²)"
            type="number"
            value={formData.totalLivingSpace}
            onChange={(e) => updateFormData('totalLivingSpace', e.target.value)}
            placeholder="z.B. 150"
            min="30"
            max="2000"
          />
        )}
        {fields.numberOfRooms && (
          <Input
            label="Anzahl der Räume"
            type="number"
            value={formData.numberOfRooms}
            onChange={(e) => updateFormData('numberOfRooms', e.target.value)}
            placeholder="z.B. 6"
            min="1"
            max="50"
          />
        )}
      </div>

      {fields.insulationLevel && (
        <Select
          label="Dämmstandard des Gebäudes"
          value={formData.insulationLevel}
          onChange={(e) => updateFormData('insulationLevel', e.target.value)}
          options={insulationLevelOptions}
          helperText="Beeinflusst die benötigten Systemtemperaturen"
        />
      )}
    </div>
  )
}

export default HydraulicBuildingDataStep 