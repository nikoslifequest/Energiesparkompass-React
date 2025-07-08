import { ModernInput, ModernSelect, ModernRadioGroup } from '../ui'
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

const ModernContactDataStep = ({ 
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
    customOptions = {}
  } = stepConfig

  // Merge custom options with defaults
  const options = {
    title: customOptions.title || titleOptions,
    ownership: customOptions.ownership || ownershipOptions,
    contactPreference: customOptions.contactPreference || contactPreferenceOptions,
    ...customOptions
  }

  return (
    <div className="space-y-8">
      {/* Info Box */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-800">
              {helpText}
            </p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Persönliche Angaben
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fields.title && (
            <ModernSelect
              label="Anrede"
              options={options.title}
              value={formData.title || ''}
              onChange={(e) => updateFormData('title', e.target.value)}
              required
              placeholder="Bitte wählen..."
            />
          )}
          
          {fields.name && (
            <>
              <ModernInput
                label="Vorname"
                value={formData.firstName || ''}
                onChange={(e) => updateFormData('firstName', e.target.value)}
                placeholder="Max"
                required
              />
              <ModernInput
                label="Nachname"
                value={formData.lastName || ''}
                onChange={(e) => updateFormData('lastName', e.target.value)}
                placeholder="Mustermann"
                required
              />
            </>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Kontaktinformationen
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.email && (
            <ModernInput
              label="E-Mail-Adresse"
              type="email"
              value={formData.email || ''}
              onChange={(e) => updateFormData('email', e.target.value)}
              placeholder="max@example.com"
              required
              helperText="Für die Zusendung von Unterlagen"
            />
          )}
          
          {fields.phone && (
            <ModernInput
              label="Telefonnummer"
              type="tel"
              value={formData.phone || ''}
              onChange={(e) => updateFormData('phone', e.target.value)}
              placeholder="+49 123 456789"
              required
              helperText="Für Rückfragen und Terminabsprachen"
            />
          )}
        </div>
      </div>

      {/* Address Information */}
      {fields.address && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Ihre Adresse
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ModernInput
              label="Straße & Hausnummer"
              value={formData.street || ''}
              onChange={(e) => updateFormData('street', e.target.value)}
              placeholder="Musterstraße 123"
              className="md:col-span-2"
            />
            <ModernInput
              label="PLZ"
              value={formData.zipCode || ''}
              onChange={(e) => updateFormData('zipCode', e.target.value)}
              placeholder="12345"
            />
            <ModernInput
              label="Ort"
              value={formData.city || ''}
              onChange={(e) => updateFormData('city', e.target.value)}
              placeholder="Musterstadt"
              className="md:col-span-2"
            />
          </div>
        </div>
      )}

      {/* Additional Information */}
      {(fields.ownership || fields.contactPreference) && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Weitere Angaben
          </h3>
          
          {fields.ownership && (
            <ModernRadioGroup
              label="Eigentumsart"
              name="ownership"
              options={options.ownership}
              value={formData.ownershipStatus || ''}
              onChange={(e) => updateFormData('ownershipStatus', e.target.value)}
              layout="horizontal"
            />
          )}
          
          {fields.contactPreference && (
            <ModernRadioGroup
              label="Bevorzugte Kontaktart"
              name="contactPreference"
              options={options.contactPreference}
              value={formData.contactPreference || ''}
              onChange={(e) => updateFormData('contactPreference', e.target.value)}
              layout="horizontal"
            />
          )}
        </div>
      )}

      {/* Availability */}
      {fields.availability && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Verfügbarkeit
          </h3>
          
          <ModernInput
            label="Wann sind Sie am besten erreichbar?"
            value={formData.availableTimes || ''}
            onChange={(e) => updateFormData('availableTimes', e.target.value)}
            placeholder="z.B. Montag bis Freitag 9-17 Uhr"
            helperText="Für die Terminabsprache eines Beratungsgesprächs"
          />
        </div>
      )}

      {/* Additional Information */}
      {fields.additionalInfo && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Weitere Informationen
          </h3>
          
          <div>
            <label className="block text-base font-semibold text-gray-900 mb-3">
              Zusätzliche Anmerkungen (optional)
            </label>
            <textarea
              value={formData.additionalInfo || ''}
              onChange={(e) => updateFormData('additionalInfo', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-white border-2 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 border-gray-200 hover:border-gray-300"
              placeholder="Haben Sie noch weitere Fragen oder spezielle Wünsche?"
            />
          </div>
        </div>
      )}

      {/* Privacy Notice */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Datenschutz & Sicherheit
            </h4>
            <p className="text-sm text-gray-600">
              Ihre Daten werden vertraulich behandelt und nur zur Bearbeitung 
              Ihrer Anfrage verwendet. Sie können jederzeit Auskunft über Ihre 
              gespeicherten Daten verlangen oder deren Löschung beantragen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModernContactDataStep 