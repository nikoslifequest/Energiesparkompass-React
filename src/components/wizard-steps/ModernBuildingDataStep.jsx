import { ModernInput, ModernSelect, ModernRadioGroup } from '../ui'
import {
  buildingTypeOptions,
  stateOptions,
  monumentOptions,
  energyCertificateOptions,
  utilizationOptions
} from '../../constants/formOptions'

const ModernBuildingDataStep = ({ 
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
    customOptions = {}
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
    <div className="space-y-8">
      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-800">
              {helpText}
            </p>
          </div>
        </div>
      </div>

      {/* Basic Building Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Grunddaten des Gebäudes
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.buildingType && (
            <ModernSelect
              label="Gebäudetyp"
              options={options.buildingType}
              value={formData.buildingType || ''}
              onChange={(e) => updateFormData('buildingType', e.target.value)}
              required
              placeholder="Bitte wählen..."
            />
          )}
          
          {fields.buildingYear && (
            <ModernInput
              label="Baujahr"
              type="number"
              value={formData.buildingYear || ''}
              onChange={(e) => updateFormData('buildingYear', e.target.value)}
              placeholder="z.B. 1985"
              helperText="Jahr der Fertigstellung"
            />
          )}
          
          {fields.livingSpace && (
            <ModernInput
              label="Wohnfläche (m²)"
              type="number"
              value={formData.livingSpace || ''}
              onChange={(e) => updateFormData('livingSpace', e.target.value)}
              placeholder="z.B. 150"
              helperText="Gesamte beheizte Wohnfläche"
            />
          )}
          
          {fields.floors && (
            <ModernInput
              label="Anzahl Geschosse"
              type="number"
              value={formData.floors || ''}
              onChange={(e) => updateFormData('floors', e.target.value)}
              placeholder="z.B. 2"
              helperText="Oberirdische Geschosse"
            />
          )}
          
          {fields.units && (
            <ModernInput
              label="Anzahl Wohneinheiten"
              type="number"
              value={formData.units || ''}
              onChange={(e) => updateFormData('units', e.target.value)}
              placeholder="z.B. 1"
              helperText="Separate Wohneinheiten im Gebäude"
            />
          )}
        </div>
      </div>

      {/* Address Information */}
      {fields.address && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Adresse
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ModernInput
              label="Straße & Hausnummer"
              value={formData.street || ''}
              onChange={(e) => updateFormData('street', e.target.value)}
              placeholder="Musterstraße 123"
              className="md:col-span-2"
            />
            <ModernInput
              label="PLZ"
              value={formData.zipCode || ''}
              onChange={(e) => updateFormData('zipCode', e.target.value)}
              placeholder="12345"
            />
            <ModernInput
              label="Ort"
              value={formData.city || ''}
              onChange={(e) => updateFormData('city', e.target.value)}
              placeholder="Musterstadt"
              className="md:col-span-2"
            />
          </div>
        </div>
      )}

      {/* Additional Information */}
      {(fields.state || fields.monument || fields.energyCertificate || fields.utilization) && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Weitere Angaben
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.state && (
              <ModernSelect
                label="Bundesland"
                options={options.state}
                value={formData.state || ''}
                onChange={(e) => updateFormData('state', e.target.value)}
                placeholder="Bitte wählen..."
                helperText="Für regionale Förderprogramme"
              />
            )}
            
            {fields.energyCertificate && (
              <ModernSelect
                label="Energieausweis vorhanden"
                options={options.energyCertificate}
                value={formData.energyCertificate || ''}
                onChange={(e) => updateFormData('energyCertificate', e.target.value)}
                placeholder="Bitte wählen..."
                helperText="Aktueller Energieausweis verfügbar?"
              />
            )}
            
            {fields.utilization && (
              <ModernSelect
                label="Nutzung des Gebäudes"
                options={options.utilization}
                value={formData.utilization || ''}
                onChange={(e) => updateFormData('utilization', e.target.value)}
                placeholder="Bitte wählen..."
                helperText="Hauptsächliche Nutzungsart"
              />
            )}
          </div>
          
          {fields.monument && (
            <div className="space-y-6">
              <ModernRadioGroup
                label="Steht das Gebäude unter Denkmalschutz?"
                name="monument"
                options={options.monument}
                value={formData.monument || ''}
                onChange={(e) => updateFormData('monument', e.target.value)}
                layout="horizontal"
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ModernBuildingDataStep 