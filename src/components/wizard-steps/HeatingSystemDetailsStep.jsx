import { Input, Select, Alert, HelpText } from '../ui'
import {
  heatingSystemDetailOptions,
  constructionYearOptions
} from '../../constants/formOptions'

const HeatingSystemDetailsStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Heizungsanlage",
    description = "Details zur bestehenden Heizung",
    helpText = "Informationen zu Ihrer Heizungsanlage sind wichtig für die Bewertung der Effizienz und GEG-Konformität.",
    fields = {
      heatingSystemType: true,
      manufacturer: true,
      model: true,
      installationYear: true,
      fuelType: true,
      heatCarrier: true,
      heatingPower: true
    }
  } = stepConfig

  // Check for GEG §60b compliance requirement
  const showGegComplianceAlert = formData.heatCarrier === 'wasser' && parseInt(formData.numberOfUnits) >= 6

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>⚙️ {title}:</strong> {helpText}
      </HelpText>

      {fields.heatingSystemType && (
        <Select
          label="Heizungstyp"
          required
          value={formData.heatingSystemType}
          onChange={(e) => updateFormData('heatingSystemType', e.target.value)}
          options={heatingSystemDetailOptions}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.manufacturer && (
          <Input
            label="Hersteller"
            value={formData.manufacturer}
            onChange={(e) => updateFormData('manufacturer', e.target.value)}
            placeholder="z.B. Viessmann, Buderus, Vaillant"
          />
        )}

        {fields.model && (
          <Input
            label="Modell/Typenbezeichnung"
            value={formData.model}
            onChange={(e) => updateFormData('model', e.target.value)}
            placeholder="z.B. Vitocrossal 200"
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fields.installationYear && (
          <Select
            label="Einbaujahr Heizung"
            value={formData.installationYear}
            onChange={(e) => updateFormData('installationYear', e.target.value)}
            options={constructionYearOptions}
          />
        )}

        {fields.fuelType && (
          <Select
            label="Brennstoffart"
            required
            value={formData.fuelType}
            onChange={(e) => updateFormData('fuelType', e.target.value)}
            options={[
              { value: 'erdgas', label: 'Erdgas' },
              { value: 'fluessiggas', label: 'Flüssiggas' },
              { value: 'heizoel', label: 'Heizöl' },
              { value: 'pellets', label: 'Pellets' },
              { value: 'scheitholz', label: 'Scheitholz' },
              { value: 'strom', label: 'Strom (Wärmepumpe)' }
            ]}
          />
        )}

        {fields.heatCarrier && (
          <Select
            label="Wärmeträger"
            required
            value={formData.heatCarrier}
            onChange={(e) => updateFormData('heatCarrier', e.target.value)}
            options={[
              { value: 'wasser', label: 'Wasser' },
              { value: 'luft', label: 'Luft' },
              { value: 'sonstiges', label: 'Sonstiges' }
            ]}
            helperText="Wichtig für GEG §60b Pflichtbestimmung"
          />
        )}
      </div>

      {fields.heatingPower && (
        <Input
          label="Nennwärmeleistung (kW)"
          type="number"
          value={formData.heatingPower}
          onChange={(e) => updateFormData('heatingPower', e.target.value)}
          placeholder="z.B. 24"
          min="5"
          max="1000"
        />
      )}

      {showGegComplianceAlert && (
        <Alert variant="info">
          <strong>Hinweis:</strong> Diese Anlage unterliegt der Heizungscheck-Pflicht nach GEG §60b. 
          Die Prüfung muss spätestens bis zum 30.09.2027 (bei Einbau vor 01.10.2009) durchgeführt werden.
        </Alert>
      )}
    </div>
  )
}

export default HeatingSystemDetailsStep 