import { Input, Select, Alert, HelpText } from '../ui'
import {
  hydraulicBalancingBuildingTypeOptions,
  constructionYearOptions
} from '../../constants/formOptions'

const HeatingCheckBuildingStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Gebäudedaten",
    description = "Grundinformationen zum Gebäude",
    helpText = "Diese Informationen helfen bei der Vorbereitung des Heizungschecks und der Bewertung der GEG §60b Pflicht.",
    fields = {
      buildingType: true,
      constructionYear: true,
      numberOfUnits: true,
      heatedArea: true,
      numberOfRooms: true
    }
  } = stepConfig

  // Check for GEG §60b compliance requirement
  const showGegAlert = parseInt(formData.numberOfUnits) >= 6

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

      {fields.buildingType && (
        <Select
          label="Gebäudetyp"
          required
          value={formData.buildingType}
          onChange={(e) => updateFormData('buildingType', e.target.value)}
          options={hydraulicBalancingBuildingTypeOptions}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.constructionYear && (
          <Select
            label="Baujahr Gebäude"
            value={formData.constructionYear}
            onChange={(e) => updateFormData('constructionYear', e.target.value)}
            options={constructionYearOptions}
          />
        )}

        {fields.numberOfUnits && (
          <Input
            label="Anzahl Wohneinheiten"
            type="number"
            value={formData.numberOfUnits}
            onChange={(e) => updateFormData('numberOfUnits', e.target.value)}
            placeholder="z.B. 1"
            min="1"
            max="200"
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.heatedArea && (
          <Input
            label="Beheizte Fläche (m²)"
            type="number"
            value={formData.heatedArea}
            onChange={(e) => updateFormData('heatedArea', e.target.value)}
            placeholder="z.B. 150"
            min="30"
            max="2000"
          />
        )}

        {fields.numberOfRooms && (
          <Input
            label="Anzahl Räume"
            type="number"
            value={formData.numberOfRooms}
            onChange={(e) => updateFormData('numberOfRooms', e.target.value)}
            placeholder="z.B. 5"
            min="1"
            max="50"
          />
        )}
      </div>

      {showGegAlert && (
        <Alert variant="warning">
          <strong>GEG §60b Pflicht:</strong> Bei Gebäuden ab 6 Wohneinheiten mit Wasser als Wärmeträger 
          ist der Heizungscheck verpflichtend durchzuführen.
        </Alert>
      )}
    </div>
  )
}

export default HeatingCheckBuildingStep 