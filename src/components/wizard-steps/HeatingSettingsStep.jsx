import { Input, Select, HelpText } from '../ui'

const HeatingSettingsStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Aktuelle Heizungseinstellungen",
    description = "Aktuelle Heizungseinstellungen",
    helpText = "Diese Informationen helfen dabei, die aktuelle Effizienz Ihrer Heizungsanlage zu bewerten und Verbesserungspotentiale zu identifizieren.",
    fields = {
      temperatures: true,
      pumpSettings: true,
      heatingCurve: true,
      scheduleSettings: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🔧 {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-medium text-yellow-900 mb-2">Optimale Heizungseinstellungen</h4>
        <p className="text-yellow-800 text-sm">
          Diese Informationen helfen dabei, die aktuelle Effizienz Ihrer Heizungsanlage zu bewerten 
          und Verbesserungspotentiale zu identifizieren.
        </p>
      </div>

      {fields.temperatures && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Vorlauftemperatur (°C)"
            type="number"
            value={formData.currentFlowTemperature}
            onChange={(e) => updateFormData('currentFlowTemperature', e.target.value)}
            placeholder="z.B. 70"
            min="30"
            max="90"
            helperText="Aktuelle Einstellung"
          />

          <Input
            label="Rücklauftemperatur (°C)"
            type="number"
            value={formData.currentReturnTemperature}
            onChange={(e) => updateFormData('currentReturnTemperature', e.target.value)}
            placeholder="z.B. 50"
            min="20"
            max="80"
            helperText="Gemessener Wert"
          />
        </div>
      )}

      {fields.pumpSettings && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Select
            label="Umwälzpumpe"
            value={formData.pumpType}
            onChange={(e) => updateFormData('pumpType', e.target.value)}
            options={[
              { value: 'hocheffizienz', label: 'Hocheffizienzpumpe' },
              { value: 'standard', label: 'Standardpumpe' },
              { value: 'alt', label: 'Alte ungerade Pumpe' },
              { value: 'unbekannt', label: 'Unbekannt' }
            ]}
          />

          <Input
            label="Pumpenstufe"
            value={formData.pumpSetting}
            onChange={(e) => updateFormData('pumpSetting', e.target.value)}
            placeholder="z.B. Stufe 2"
          />

          {fields.heatingCurve && (
            <Input
              label="Heizkurve"
              value={formData.heatingCurve}
              onChange={(e) => updateFormData('heatingCurve', e.target.value)}
              placeholder="z.B. 1.2"
              helperText="Steigung der Heizkurve"
            />
          )}
        </div>
      )}

      {fields.scheduleSettings && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Nachtabsenkung"
            value={formData.nightSetback}
            onChange={(e) => updateFormData('nightSetback', e.target.value)}
            options={[
              { value: 'aktiv', label: 'Aktiv' },
              { value: 'inaktiv', label: 'Nicht aktiv' },
              { value: 'unbekannt', label: 'Unbekannt' }
            ]}
          />

          <Select
            label="Sommerabschaltung"
            value={formData.summerShutdown}
            onChange={(e) => updateFormData('summerShutdown', e.target.value)}
            options={[
              { value: 'aktiv', label: 'Aktiv' },
              { value: 'inaktiv', label: 'Nicht aktiv' },
              { value: 'unbekannt', label: 'Unbekannt' }
            ]}
          />
        </div>
      )}
    </div>
  )
}

export default HeatingSettingsStep 