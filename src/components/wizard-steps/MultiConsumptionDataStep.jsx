import { Input, Select, HelpText, Alert } from '../ui'

const MultiConsumptionDataStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Verbrauchsdaten Mehrfamilienhaus",
    description = "Energie- und Heizkosten (optional)",
    helpText = "Diese Daten beziehen sich auf das gesamte Gebäude. Für den Verbrauchsausweis sind die Verbrauchsdaten der letzten 3 Jahre erforderlich.",
    fields = {
      totalHeatingConsumption: true,
      totalElectricityConsumption: true,
      totalHeatingCosts: true,
      totalElectricityCosts: true,
      consumptionPeriod: true,
      heatingCostsBilling: true
    }
  } = stepConfig

  const heatingCostsBillingOptions = [
    { value: 'zentral', label: 'Zentrale Abrechnung' },
    { value: 'verbrauchsabhängig', label: 'Verbrauchsabhängige Abrechnung' },
    { value: 'pauschal', label: 'Pauschalabrechnung' },
    { value: 'gemischt', label: 'Gemischte Abrechnung' }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>📊 {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      <Alert variant="info" title="Hinweis zu Verbrauchsdaten">
        Bei Mehrfamilienhäusern werden die Gesamtverbrauchsdaten des Gebäudes benötigt, 
        nicht die einzelner Wohnungen. Diese finden Sie in der Heizkostenabrechnung.
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.totalHeatingConsumption && (
          <Input
            label="Gesamtheizenergieverbrauch (kWh/Jahr)"
            type="number"
            value={formData.totalHeatingConsumption}
            onChange={(e) => updateFormData('totalHeatingConsumption', e.target.value)}
            placeholder="z.B. 150000"
            min="0"
            helperText="Verbrauch des gesamten Gebäudes"
          />
        )}
        {fields.totalElectricityConsumption && (
          <Input
            label="Gesamtstromverbrauch Allgemeinstrom (kWh/Jahr)"
            type="number"
            value={formData.totalElectricityConsumption}
            onChange={(e) => updateFormData('totalElectricityConsumption', e.target.value)}
            placeholder="z.B. 25000"
            min="0"
            helperText="Beleuchtung, Aufzug, Pumpen, etc."
          />
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.totalHeatingCosts && (
          <Input
            label="Gesamtheizkosten (€/Jahr)"
            type="number"
            value={formData.totalHeatingCosts}
            onChange={(e) => updateFormData('totalHeatingCosts', e.target.value)}
            placeholder="z.B. 12000"
            min="0"
          />
        )}
        {fields.totalElectricityCosts && (
          <Input
            label="Stromkosten Allgemeinstrom (€/Jahr)"
            type="number"
            value={formData.totalElectricityCosts}
            onChange={(e) => updateFormData('totalElectricityCosts', e.target.value)}
            placeholder="z.B. 5000"
            min="0"
          />
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.consumptionPeriod && (
          <Input
            label="Abrechnungszeitraum"
            value={formData.consumptionPeriod}
            onChange={(e) => updateFormData('consumptionPeriod', e.target.value)}
            placeholder="z.B. 01.01.2023 - 31.12.2023"
          />
        )}
        {fields.heatingCostsBilling && (
          <Select
            label="Art der Heizkostenabrechnung"
            value={formData.heatingCostsBilling}
            onChange={(e) => updateFormData('heatingCostsBilling', e.target.value)}
            options={heatingCostsBillingOptions}
          />
        )}
      </div>
    </div>
  )
}

export default MultiConsumptionDataStep 