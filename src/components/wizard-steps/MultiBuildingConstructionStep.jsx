import { Input, Select, RadioGroup, HelpText } from '../ui'
import {
  wallConstructionOptions,
  roofConstructionOptions,
  windowTypeOptions
} from '../../constants/formOptions'

const MultiBuildingConstructionStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Konstruktion & Hülle",
    description = "Bauweise und Dämmung",
    helpText = "Diese Angaben helfen bei der genauen Bewertung der Gebäudehülle des Mehrfamilienhauses. Bei größeren Gebäuden ist oft eine Vor-Ort-Besichtigung erforderlich.",
    fields = {
      wallConstruction: true,
      roofConstruction: true,
      windowType: true,
      wallThickness: true,
      insulationThickness: true,
      windowAge: true,
      commonAreas: true,
      elevators: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🔨 {title}:</strong> {helpText}
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
        {fields.wallConstruction && (
          <Select
            label="Außenwand-Konstruktion"
            value={formData.wallConstruction}
            onChange={(e) => updateFormData('wallConstruction', e.target.value)}
            options={wallConstructionOptions}
          />
        )}
        {fields.roofConstruction && (
          <Select
            label="Dach-Konstruktion"
            value={formData.roofConstruction}
            onChange={(e) => updateFormData('roofConstruction', e.target.value)}
            options={roofConstructionOptions}
          />
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fields.windowType && (
          <Select
            label="Fenster-Art (überwiegend)"
            value={formData.windowType}
            onChange={(e) => updateFormData('windowType', e.target.value)}
            options={windowTypeOptions}
          />
        )}
        {fields.wallThickness && (
          <Input
            label="Wandstärke (cm)"
            type="number"
            value={formData.wallThickness}
            onChange={(e) => updateFormData('wallThickness', e.target.value)}
            placeholder="z.B. 24"
            min="10"
            max="100"
          />
        )}
        {fields.insulationThickness && (
          <Input
            label="Dämmstärke (cm)"
            type="number"
            value={formData.insulationThickness}
            onChange={(e) => updateFormData('insulationThickness', e.target.value)}
            placeholder="z.B. 12"
            min="0"
            max="50"
          />
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.windowAge && (
          <Input
            label="Alter der Fenster (Jahre)"
            type="number"
            value={formData.windowAge}
            onChange={(e) => updateFormData('windowAge', e.target.value)}
            placeholder="z.B. 15"
            min="0"
            max="100"
          />
        )}
        {fields.commonAreas && (
          <Input
            label="Gemeinschaftsflächen (m²)"
            type="number"
            value={formData.commonAreas}
            onChange={(e) => updateFormData('commonAreas', e.target.value)}
            placeholder="z.B. 150"
            min="0"
            helperText="Flur, Treppenhaus, Keller, etc."
          />
        )}
      </div>
      
      {fields.elevators && (
        <RadioGroup
          label="Aufzug vorhanden"
          name="elevators"
          options={[
            { value: 'ja', label: 'Ja' },
            { value: 'nein', label: 'Nein' }
          ]}
          value={formData.elevators}
          onChange={(e) => updateFormData('elevators', e.target.value)}
          layout="horizontal"
        />
      )}
    </div>
  )
}

export default MultiBuildingConstructionStep 