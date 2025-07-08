import { Input, Select, RadioGroup, HelpText } from '../ui'
import {
  buildingTypeOptions,
  communityTypeOptions,
  heatPlanOptions,
  monumentOptions,
  energyCertificateOptions
} from '../../constants/formOptions'

const GegBuildingDataStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Gebäude & Lage",
    description = "Grundinformationen zum Objekt",
    helpText = "Bitte geben Sie die Grundinformationen zu Ihrem Gebäude ein. Falls Sie nicht alle Angaben zur Hand haben, können Sie Felder frei lassen.",
    fields = {
      buildingType: true,
      buildingYear: true,
      livingSpace: true,
      units: true,
      address: true,
      communitySize: true,
      heatPlan: true,
      monument: true,
      energyCertificate: true
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
            value={formData.buildingType}
            onChange={(e) => updateFormData('buildingType', e.target.value)}
            options={buildingTypeOptions}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.communitySize && (
          <Select
            label="Gemeindegröße"
            value={formData.communitySize}
            onChange={(e) => updateFormData('communitySize', e.target.value)}
            options={communityTypeOptions}
            helperText="Relevant für GEG-Fristen"
          />
        )}
        {fields.heatPlan && (
          <Select
            label="Kommunaler Wärmeplan"
            value={formData.heatPlan}
            onChange={(e) => updateFormData('heatPlan', e.target.value)}
            options={heatPlanOptions}
            helperText="Beeinflusst GEG-Anforderungen"
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.monument && (
          <RadioGroup
            label="Denkmalschutz"
            name="monument"
            options={monumentOptions}
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
            options={energyCertificateOptions}
          />
        )}
      </div>
    </div>
  )
}

export default GegBuildingDataStep 