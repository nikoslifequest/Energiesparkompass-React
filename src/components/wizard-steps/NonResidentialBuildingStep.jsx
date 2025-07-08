import { Input, Select, RadioGroup, HelpText } from '../ui'
import {
  nonResidentialBuildingTypeOptions,
  stateOptions,
  energyCertificateOptions,
  monumentOptions,
  companyTypeOptions
} from '../../constants/formOptions'

const NonResidentialBuildingStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Gebäude & Unternehmen",
    description = "Grunddaten zum Objekt und Unternehmen",
    helpText = "Bitte geben Sie die Grunddaten zu Ihrem Gebäude und Unternehmen ein. Diese sind wichtig für die Bestimmung der Förderfähigkeit und Beratungsart.",
    fields = {
      buildingBasics: true,
      address: true,
      buildingDetails: true,
      companyInfo: true,
      energyCertificate: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🏢 {title}:</strong> {helpText}
      </HelpText>

      {fields.buildingBasics && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Gebäudetyp"
            value={formData.buildingType}
            onChange={(e) => updateFormData('buildingType', e.target.value)}
            options={nonResidentialBuildingTypeOptions}
          />
          <Input
            label="Baujahr"
            type="number"
            value={formData.buildingYear}
            onChange={(e) => updateFormData('buildingYear', e.target.value)}
            placeholder="z.B. 1995"
            min="1800"
            max="2024"
          />
          <Input
            label="Nettogrundfläche (m²)"
            type="number"
            value={formData.netFloorArea}
            onChange={(e) => updateFormData('netFloorArea', e.target.value)}
            placeholder="z.B. 500"
            min="1"
            helperText="Wichtig für Förderhöhe"
          />
          <Input
            label="Anzahl Etagen"
            type="number"
            value={formData.floors}
            onChange={(e) => updateFormData('floors', e.target.value)}
            placeholder="z.B. 3"
            min="1"
            max="20"
          />
        </div>
      )}

      {fields.address && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Straße & Hausnummer"
            value={formData.street}
            onChange={(e) => updateFormData('street', e.target.value)}
            placeholder="Gewerbestraße 123"
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
            label="Antragstellertyp"
            value={formData.companyType}
            onChange={(e) => updateFormData('companyType', e.target.value)}
            options={companyTypeOptions}
            helperText="Bestimmt Förderfähigkeit"
          />
        </div>
      )}

      {fields.companyInfo && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Firmenname"
            value={formData.companyName}
            onChange={(e) => updateFormData('companyName', e.target.value)}
            placeholder="Muster GmbH"
          />
          <Input
            label="Anzahl Mitarbeiter"
            type="number"
            value={formData.employees}
            onChange={(e) => updateFormData('employees', e.target.value)}
            placeholder="z.B. 25"
            min="1"
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

export default NonResidentialBuildingStep 