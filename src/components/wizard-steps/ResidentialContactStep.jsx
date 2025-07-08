import { Input, Select, HelpText } from '../ui'
import {
  titleOptions,
  contactPreferenceOptions
} from '../../constants/formOptions'

const ResidentialContactStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Kontaktdaten",
    description = "Damit wir Sie für die Beratungsterminierung erreichen können",
    helpText = "Damit wir Sie für die Beratungsterminierung erreichen können.",
    fields = {
      personalData: true,
      contactMethods: true,
      preferences: true,
      specialRequests: true
    }
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>📞 {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      {fields.personalData && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Select
            label="Anrede"
            value={formData.title}
            onChange={(e) => updateFormData('title', e.target.value)}
            options={titleOptions}
          />
          <Input
            label="Vorname"
            required
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            placeholder="Ihr Vorname"
          />
          <Input
            label="Nachname"
            required
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            placeholder="Ihr Nachname"
          />
        </div>
      )}

      {fields.contactMethods && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="E-Mail"
            required
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            placeholder="ihre.email@beispiel.de"
          />
          <Input
            label="Telefon"
            required
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            placeholder="+49 123 456789"
          />
        </div>
      )}

      {fields.preferences && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Bevorzugte Kontaktart"
            value={formData.contactPreference}
            onChange={(e) => updateFormData('contactPreference', e.target.value)}
            options={contactPreferenceOptions}
          />
          <Input
            label="Verfügbare Zeiten"
            value={formData.availableTimes}
            onChange={(e) => updateFormData('availableTimes', e.target.value)}
            placeholder="z.B. Mo-Fr nachmittags"
          />
        </div>
      )}

      {fields.specialRequests && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Besondere Anforderungen
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            rows="3"
            value={formData.specialRequests}
            onChange={(e) => updateFormData('specialRequests', e.target.value)}
            placeholder="z.B. barrierefrei, Parkplatz erforderlich, Haustiere..."
          />
        </div>
      )}
    </div>
  )
}

export default ResidentialContactStep 