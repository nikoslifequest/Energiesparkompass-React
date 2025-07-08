import { Select, HelpText } from '../ui'
import {
  operatingHoursOptions,
  energyConsumptionRangeOptions,
  heatingTypeOptions,
  heatingStatusOptions,
  coolingSystemOptions,
  ventilationSystemOptions,
  lightingSystemOptions,
  itEquipmentOptions,
  productionProcessOptions,
  energyManagementOptions,
  lastEnergyConsultationOptions
} from '../../constants/formOptions'

const NonResidentialTechnicalStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Technische Ausstattung",
    description = "Heizung, Kühlung, Lüftung & IT",
    helpText = "Informationen zu den vorhandenen technischen Anlagen helfen bei der gezielten Beratung und Identifikation von Effizienzpotenzialen.",
    fields = {
      operationInfo: true,
      heatingSystem: true,
      coolingVentilation: true,
      lightingIT: true,
      productionEnergy: true,
      lastConsultation: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>⚙️ {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      {fields.operationInfo && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Betriebszeiten"
            value={formData.operatingHours}
            onChange={(e) => updateFormData('operatingHours', e.target.value)}
            options={operatingHoursOptions}
          />
          <Select
            label="Energieverbrauch (grob)"
            value={formData.energyConsumptionRange}
            onChange={(e) => updateFormData('energyConsumptionRange', e.target.value)}
            options={energyConsumptionRangeOptions}
            helperText="Wichtig für Antragsberechtigung"
          />
        </div>
      )}

      {fields.heatingSystem && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Heizungstyp"
            value={formData.heatingType}
            onChange={(e) => updateFormData('heatingType', e.target.value)}
            options={heatingTypeOptions}
          />
          <Select
            label="Status der Heizung"
            value={formData.heatingStatus}
            onChange={(e) => updateFormData('heatingStatus', e.target.value)}
            options={heatingStatusOptions}
          />
        </div>
      )}

      {fields.coolingVentilation && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Kühlsystem"
            value={formData.coolingSystem}
            onChange={(e) => updateFormData('coolingSystem', e.target.value)}
            options={coolingSystemOptions}
          />
          <Select
            label="Lüftungssystem"
            value={formData.ventilationSystem}
            onChange={(e) => updateFormData('ventilationSystem', e.target.value)}
            options={ventilationSystemOptions}
          />
        </div>
      )}

      {fields.lightingIT && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Beleuchtung"
            value={formData.lightingSystem}
            onChange={(e) => updateFormData('lightingSystem', e.target.value)}
            options={lightingSystemOptions}
          />
          <Select
            label="IT-Ausstattung"
            value={formData.itEquipment}
            onChange={(e) => updateFormData('itEquipment', e.target.value)}
            options={itEquipmentOptions}
          />
        </div>
      )}

      {fields.productionEnergy && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Produktionsprozesse"
            value={formData.productionProcess}
            onChange={(e) => updateFormData('productionProcess', e.target.value)}
            options={productionProcessOptions}
          />
          <Select
            label="Energiemanagement"
            value={formData.energyManagement}
            onChange={(e) => updateFormData('energyManagement', e.target.value)}
            options={energyManagementOptions}
            helperText="Zertifizierte Systeme"
          />
        </div>
      )}

      {fields.lastConsultation && (
        <div>
          <Select
            label="Letzte Energieberatung"
            value={formData.lastEnergyConsultation}
            onChange={(e) => updateFormData('lastEnergyConsultation', e.target.value)}
            options={lastEnergyConsultationOptions}
            helperText="Zwischen Beratungen müssen 4 Jahre liegen"
          />
        </div>
      )}
    </div>
  )
}

export default NonResidentialTechnicalStep 