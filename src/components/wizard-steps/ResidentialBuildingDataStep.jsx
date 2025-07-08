import { Input, Select, RadioGroup, HelpText } from '../ui'
import {
  buildingTypeOptions,
  stateOptions,
  energyCertificateOptions,
  monumentOptions,
  utilizationOptions
} from '../../constants/formOptions'

const ResidentialBuildingDataStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Gebäudeinformationen",
    description = "Grundinformationen zum Objekt",
    helpText = "Bitte geben Sie die Grunddaten zu Ihrem Gebäude ein. Diese helfen uns bei der Vorbereitung Ihrer individuellen Energieberatung.",
    fields = {
      buildingBasics: true,
      address: true,
      buildingDetails: true,
      energyCertificate: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🏠 {title}:</strong> {helpText}
      </HelpText>

      {fields.buildingBasics && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Gebäudetyp"
            value={formData.buildingType}
            onChange={(e) => updateFormData('buildingType', e.target.value)}
            options={buildingTypeOptions}
          />
          <Input
            label="Baujahr"
            type="number"
            value={formData.buildingYear}
            onChange={(e) => updateFormData('buildingYear', e.target.value)}
            placeholder="z.B. 1985"
            min="1800"
            max="2024"
          />
          <Input
            label="Wohnfläche (m²)"
            type="number"
            value={formData.livingSpace}
            onChange={(e) => updateFormData('livingSpace', e.target.value)}
            placeholder="z.B. 150"
            min="1"
          />
          <Input
            label="Anzahl Etagen"
            type="number"
            value={formData.floors}
            onChange={(e) => updateFormData('floors', e.target.value)}
            placeholder="z.B. 2"
            min="1"
            max="10"
          />
        </div>
      )}

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

      {fields.buildingDetails && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Select
            label="Bundesland"
            value={formData.state}
            onChange={(e) => updateFormData('state', e.target.value)}
            options={stateOptions}
          />
          <RadioGroup
            label="Denkmalschutz"
            name="monument"
            options={monumentOptions}
            value={formData.monument}
            onChange={(e) => updateFormData('monument', e.target.value)}
            layout="horizontal"
          />
          <Select
            label="Nutzung"
            value={formData.utilization}
            onChange={(e) => updateFormData('utilization', e.target.value)}
            options={utilizationOptions}
          />
        </div>
      )}

      {fields.energyCertificate && (
        <div>
          <Select
            label="Energieausweis vorhanden"
            value={formData.energyCertificate}
            onChange={(e) => updateFormData('energyCertificate', e.target.value)}
            options={energyCertificateOptions}
            helperText="Falls vorhanden, erleichtert dies die Beratung"
          />
        </div>
      )}
    </div>
  )
}

export default ResidentialBuildingDataStep 