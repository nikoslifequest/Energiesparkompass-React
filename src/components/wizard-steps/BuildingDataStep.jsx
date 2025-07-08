import { Input, Select, RadioGroup, HelpText } from '../ui'
import {
  buildingTypeOptions,
  stateOptions,
  monumentOptions,
  energyCertificateOptions,
  utilizationOptions
} from '../../constants/formOptions'

const BuildingDataStep = ({ 
  formData, 
  updateFormData, 
  stepConfig = {},
  wizardConfig = {} 
}) => {
  const {
    title = "Gebäudedaten",
    description = "Grundinformationen zu Ihrem Gebäude",
    helpText = "Bitte geben Sie die Grunddaten zu Ihrem Gebäude ein. Falls Sie einzelne Angaben nicht haben, können Sie diese Felder einfach freilassen.",
    fields = {
      buildingType: true,
      buildingYear: true,
      livingSpace: true,
      address: true,
      state: true,
      monument: false,
      energyCertificate: false,
      utilization: false,
      floors: false,
      units: false
    },
    customOptions = {},
    layout = "default"
  } = stepConfig

  // Merge custom options with defaults
  const options = {
    buildingType: customOptions.buildingType || buildingTypeOptions,
    state: customOptions.state || stateOptions,
    monument: customOptions.monument || monumentOptions,
    energyCertificate: customOptions.energyCertificate || energyCertificateOptions,
    utilization: customOptions.utilization || utilizationOptions,
    ...customOptions
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🏠 {title}:</strong> {helpText}
      </HelpText>

      {/* Basic Building Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.buildingType && (
          <Select
            label="Gebäudetyp"
            value={formData.buildingType}
            onChange={(e) => updateFormData('buildingType', e.target.value)}
            options={options.buildingType}
            required
          />
        )}
        
        {fields.buildingYear && (
          <Input
            label="Baujahr"
            type="number"
            value={formData.buildingYear}
            onChange={(e) => updateFormData('buildingYear', e.target.value)}
            placeholder="z.B. 1985"
            min="1800"
            max="2024"
          />
        )}
        
        {fields.livingSpace && (
          <Input
            label="Wohnfläche (m²)"
            type="number"
            value={formData.livingSpace}
            onChange={(e) => updateFormData('livingSpace', e.target.value)}
            placeholder="z.B. 150"
            min="1"
          />
        )}
        
        {fields.floors && (
          <Input
            label="Anzahl Geschosse"
            type="number"
            value={formData.floors}
            onChange={(e) => updateFormData('floors', e.target.value)}
            placeholder="z.B. 2"
            min="1"
            max="10"
          />
        )}
        
        {fields.units && (
          <Input
            label="Anzahl Wohneinheiten"
            type="number"
            value={formData.units}
            onChange={(e) => updateFormData('units', e.target.value)}
            placeholder="z.B. 1"
            min="1"
          />
        )}
      </div>

      {/* Address Information */}
      {fields.address && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Straße & Hausnummer"
            value={formData.street}
            onChange={(e) => updateFormData('street', e.target.value)}
            placeholder="Musterstraße 123"
          />
          <Input
            label="PLZ"
            value={formData.zipCode}
            onChange={(e) => updateFormData('zipCode', e.target.value)}
            placeholder="12345"
            maxLength="5"
          />
          <Input
            label="Ort"
            value={formData.city}
            onChange={(e) => updateFormData('city', e.target.value)}
            placeholder="Musterstadt"
          />
        </div>
      )}

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.state && (
          <Select
            label="Bundesland"
            value={formData.state}
            onChange={(e) => updateFormData('state', e.target.value)}
            options={options.state}
          />
        )}
        
        {fields.monument && (
          <RadioGroup
            label="Denkmalschutz"
            name="monument"
            options={options.monument}
            value={formData.monument}
            onChange={(e) => updateFormData('monument', e.target.value)}
            layout="horizontal"
          />
        )}
        
        {fields.energyCertificate && (
          <Select
            label="Energieausweis vorhanden"
            value={formData.energyCertificate}
            onChange={(e) => updateFormData('energyCertificate', e.target.value)}
            options={options.energyCertificate}
          />
        )}
        
        {fields.utilization && (
          <Select
            label="Nutzung des Gebäudes"
            value={formData.utilization}
            onChange={(e) => updateFormData('utilization', e.target.value)}
            options={options.utilization}
          />
        )}
      </div>
    </div>
  )
}

export default BuildingDataStep 