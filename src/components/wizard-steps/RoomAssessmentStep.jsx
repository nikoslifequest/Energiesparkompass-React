import { Input, HelpText } from '../ui'

const RoomAssessmentStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Bestandsaufnahme",
    description = "Räume und Verbrauch",
    helpText = "Informationen zu Heizkreisen, Räumen und Verbrauch für eine vollständige Heizlastberechnung nach Verfahren B.",
    fields = {
      numberOfHeatingCircuits: true,
      largestRoom: true,
      smallestRoom: true,
      problemRooms: true,
      roomsWithPoorHeating: true,
      averageSystemPressure: true,
      energyConsumptionLastYear: true
    }
  } = stepConfig

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fields.numberOfHeatingCircuits && (
          <Input
            label="Anzahl Heizkreise"
            type="number"
            value={formData.numberOfHeatingCircuits}
            onChange={(e) => updateFormData('numberOfHeatingCircuits', e.target.value)}
            placeholder="z.B. 8"
            min="1"
            max="50"
            helperText="Anzahl aller Heizkörper/Heizkreise"
          />
        )}
        {fields.largestRoom && (
          <Input
            label="Größter Raum (m²)"
            type="number"
            value={formData.largestRoom}
            onChange={(e) => updateFormData('largestRoom', e.target.value)}
            placeholder="z.B. 45"
            min="5"
            max="200"
          />
        )}
        {fields.smallestRoom && (
          <Input
            label="Kleinster Raum (m²)"
            type="number"
            value={formData.smallestRoom}
            onChange={(e) => updateFormData('smallestRoom', e.target.value)}
            placeholder="z.B. 8"
            min="3"
            max="100"
          />
        )}
      </div>

      {fields.problemRooms && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Räume mit Heizproblemen
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            rows="2"
            value={formData.problemRooms}
            onChange={(e) => updateFormData('problemRooms', e.target.value)}
            placeholder="z.B. Wohnzimmer wird nicht warm, Badezimmer braucht sehr lange..."
          />
        </div>
      )}

      {fields.roomsWithPoorHeating && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Räume, die besonders schlecht heizen
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            rows="2"
            value={formData.roomsWithPoorHeating}
            onChange={(e) => updateFormData('roomsWithPoorHeating', e.target.value)}
            placeholder="z.B. Schlafzimmer Obergeschoss, Küche..."
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.averageSystemPressure && (
          <Input
            label="Systemdruck (bar)"
            type="number"
            step="0.1"
            value={formData.averageSystemPressure}
            onChange={(e) => updateFormData('averageSystemPressure', e.target.value)}
            placeholder="z.B. 1.5"
            min="0.5"
            max="3.0"
            helperText="Ablesbar am Manometer der Heizung"
          />
        )}
        {fields.energyConsumptionLastYear && (
          <Input
            label="Jahresverbrauch (kWh oder Liter)"
            type="number"
            value={formData.energyConsumptionLastYear}
            onChange={(e) => updateFormData('energyConsumptionLastYear', e.target.value)}
            placeholder="z.B. 15000"
            helperText="Letzter bekannter Jahresverbrauch"
          />
        )}
      </div>
    </div>
  )
}

export default RoomAssessmentStep 