import { Input, HelpText } from '../ui'

const ConsumptionDataStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Verbrauchsdaten",
    description = "Energie- und Heizkosten (optional)",
    helpText = "Diese Daten verbessern die Genauigkeit des Energieausweises, sind aber nicht zwingend erforderlich. Für den Bedarfsausweis werden sie nicht benötigt.",
    fields = {
      heatingConsumption: true,
      electricityConsumption: true,
      heatingCosts: true,
      electricityCosts: true,
      consumptionPeriod: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>📊 {title} (optional):</strong> {helpText}
      </HelpText>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.heatingConsumption && (
          <Input
            label="Heizenergieverbrauch letztes Jahr (kWh)"
            type="number"
            value={formData.lastYearHeating}
            onChange={(e) => updateFormData('lastYearHeating', e.target.value)}
            placeholder="z.B. 15000"
            min="0"
          />
        )}
        {fields.electricityConsumption && (
          <Input
            label="Stromverbrauch letztes Jahr (kWh)"
            type="number"
            value={formData.lastYearElectricity}
            onChange={(e) => updateFormData('lastYearElectricity', e.target.value)}
            placeholder="z.B. 3500"
            min="0"
          />
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.heatingCosts && (
          <Input
            label="Heizkosten letztes Jahr (€)"
            type="number"
            value={formData.heatingCosts}
            onChange={(e) => updateFormData('heatingCosts', e.target.value)}
            placeholder="z.B. 1200"
            min="0"
          />
        )}
        {fields.electricityCosts && (
          <Input
            label="Stromkosten letztes Jahr (€)"
            type="number"
            value={formData.electricityCosts}
            onChange={(e) => updateFormData('electricityCosts', e.target.value)}
            placeholder="z.B. 800"
            min="0"
          />
        )}
      </div>
      
      {fields.consumptionPeriod && (
        <Input
          label="Abrechnungszeitraum"
          value={formData.consumptionPeriod}
          onChange={(e) => updateFormData('consumptionPeriod', e.target.value)}
          placeholder="z.B. 01.01.2023 - 31.12.2023"
        />
      )}
    </div>
  )
}

export default ConsumptionDataStep 