import { Input, Select, RadioGroup, HelpText } from '../ui'
import {
  titleOptions,
  ownershipOptions
} from '../../constants/formOptions'

// Fallback if contactPreferenceOptions doesn't exist
const contactPreferenceOptions = [
  { value: 'email', label: 'E-Mail' },
  { value: 'phone', label: 'Telefon' },
  { value: 'both', label: 'E-Mail und Telefon' }
]

const ContactDataStep = ({ 
  formData, 
  updateFormData, 
  stepConfig = {},
  wizardConfig = {} 
}) => {
  const {
    title = "Kontaktdaten",
    description = "Ihre persönlichen Daten",
    helpText = "Bitte geben Sie Ihre Kontaktdaten ein. Diese benötigen wir für die Beratung und Angebotserstellung.",
    fields = {
      title: true,
      name: true,
      email: true,
      phone: true,
      address: false,
      ownership: false,
      contactPreference: false,
      availability: false,
      additionalInfo: false
    },
    customOptions = {},
    layout = "default"
  } = stepConfig

  // Merge custom options with defaults
  const options = {
    title: customOptions.title || titleOptions,
    ownership: customOptions.ownership || ownershipOptions,
    contactPreference: customOptions.contactPreference || contactPreferenceOptions,
    ...customOptions
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>📞 {title}:</strong> {helpText}
      </HelpText>

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fields.title && (
          <Select
            label="Anrede"
            value={formData.title}
            onChange={(e) => updateFormData('title', e.target.value)}
            options={options.title}
            required
          />
        )}
        
        {fields.name && (
          <>
            <Input
              label="Vorname"
              value={formData.firstName}
              onChange={(e) => updateFormData('firstName', e.target.value)}
              placeholder="Max"
              required
            />
            <Input
              label="Nachname"
              value={formData.lastName}
              onChange={(e) => updateFormData('lastName', e.target.value)}
              placeholder="Mustermann"
              required
            />
          </>
        )}
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.email && (
          <Input
            label="E-Mail-Adresse"
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            placeholder="max@example.com"
            required
          />
        )}
        
        {fields.phone && (
          <Input
            label="Telefonnummer"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            placeholder="+49 123 456789"
            required
          />
        )}
      </div>

      {/* Address Information */}
      {fields.address && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Straße & Hausnummer"
            value={formData.street}
            onChange={(e) => updateFormData('street', e.target.value)}
            placeholder="Musterstraße 123"
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

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.ownership && (
          <RadioGroup
            label="Eigentümerschaft"
            name="ownership"
            options={options.ownership}
            value={formData.ownershipStatus}
            onChange={(e) => updateFormData('ownershipStatus', e.target.value)}
            layout="horizontal"
          />
        )}
        
        {fields.contactPreference && (
          <RadioGroup
            label="Bevorzugte Kontaktart"
            name="contactPreference"
            options={options.contactPreference}
            value={formData.contactPreference}
            onChange={(e) => updateFormData('contactPreference', e.target.value)}
            layout="horizontal"
          />
        )}
      </div>

      {/* Availability */}
      {fields.availability && (
        <div className="space-y-4">
          <Input
            label="Verfügbarkeit für Terminabsprache"
            value={formData.availableTimes}
            onChange={(e) => updateFormData('availableTimes', e.target.value)}
            placeholder="z.B. Montag bis Freitag 9-17 Uhr"
            helperText="Wann sind Sie am besten für ein Beratungsgespräch erreichbar?"
          />
        </div>
      )}

      {/* Additional Information */}
      {fields.additionalInfo && (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Zusätzliche Informationen (optional)
          </label>
          <textarea
            value={formData.additionalInfo}
            onChange={(e) => updateFormData('additionalInfo', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Haben Sie noch weitere Fragen oder Anmerkungen?"
          />
        </div>
      )}

      {/* Privacy Notice */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>🔒 Datenschutz:</strong> Ihre Daten werden vertraulich behandelt und nur zur Bearbeitung 
          Ihrer Anfrage verwendet. Sie können jederzeit Auskunft über Ihre gespeicherten Daten verlangen.
        </p>
      </div>
    </div>
  )
}

export default ContactDataStep 