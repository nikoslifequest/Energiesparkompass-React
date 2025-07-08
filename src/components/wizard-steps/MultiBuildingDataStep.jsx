import { Input, Select, RadioGroup, HelpText } from '../ui'
import {
  multiEnergyPassBuildingTypeOptions,
  constructionYearOptions,
  ownershipTypeOptions,
  basementOptions,
  utilizationOptions,
  stateOptions
} from '../../constants/formOptions'

const MultiBuildingDataStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Mehrfamilienhaus-Grunddaten",
    description = "Basisinformationen zum Mehrfamilienhaus",
    helpText = "Hier sammeln wir die wichtigsten Eckdaten zu Ihrem Mehrfamilienhaus. Für Mehrfamilienhäuser gelten spezielle Anforderungen bei der Energieausweis-Erstellung.",
    fields = {
      buildingType: true,
      constructionYear: true,
      numberOfUnits: true,
      totalLivingSpace: true,
      floors: true,
      ownershipType: true,
      basement: true,
      utilization: true,
      buildingHeight: true,
      commonAreas: true,
      elevators: true,
      address: false,
      state: false
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>🏢 {title}:</strong> {helpText}
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
            options={multiEnergyPassBuildingTypeOptions}
          />
        )}
        {fields.constructionYear && (
          <Select
            label="Baualtersklasse"
            value={formData.constructionYear}
            onChange={(e) => updateFormData('constructionYear', e.target.value)}
            options={constructionYearOptions}
          />
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fields.numberOfUnits && (
          <Input
            label="Anzahl Wohneinheiten"
            type="number"
            required
            value={formData.numberOfUnits}
            onChange={(e) => updateFormData('numberOfUnits', e.target.value)}
            placeholder="z.B. 12"
            min="3"
            max="200"
          />
        )}
        {fields.totalLivingSpace && (
          <Input
            label="Gesamtwohnfläche (m²)"
            type="number"
            value={formData.totalLivingSpace}
            onChange={(e) => updateFormData('totalLivingSpace', e.target.value)}
            placeholder="z.B. 800"
            min="100"
          />
        )}
        {fields.floors && (
          <Input
            label="Anzahl Vollgeschosse"
            type="number"
            value={formData.floors}
            onChange={(e) => updateFormData('floors', e.target.value)}
            placeholder="z.B. 4"
            min="2"
            max="30"
          />
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.ownershipType && (
          <Select
            label="Eigentümerschaft/Verwaltung"
            value={formData.ownershipType}
            onChange={(e) => updateFormData('ownershipType', e.target.value)}
            options={ownershipTypeOptions}
          />
        )}
        {fields.basement && (
          <Select
            label="Keller/Untergeschoss"
            value={formData.basement}
            onChange={(e) => updateFormData('basement', e.target.value)}
            options={basementOptions}
          />
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.utilization && (
          <Select
            label="Nutzung des Gebäudes"
            value={formData.utilization}
            onChange={(e) => updateFormData('utilization', e.target.value)}
            options={utilizationOptions}
          />
        )}
        {fields.buildingHeight && (
          <Input
            label="Gebäudehöhe (m)"
            type="number"
            value={formData.buildingHeight}
            onChange={(e) => updateFormData('buildingHeight', e.target.value)}
            placeholder="z.B. 12"
            min="5"
            max="200"
            helperText="Ungefähre Höhe von Erdgeschoss bis Dach"
          />
        )}
      </div>

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

      {fields.address && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Input
            label="Straße & Hausnummer"
            value={formData.street}
            onChange={(e) => updateFormData('street', e.target.value)}
            placeholder="Musterstraße 123"
            className="md:col-span-2"
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

      {fields.state && (
        <Select
          label="Bundesland"
          value={formData.state}
          onChange={(e) => updateFormData('state', e.target.value)}
          options={stateOptions}
        />
      )}
    </div>
  )
}

export default MultiBuildingDataStep 