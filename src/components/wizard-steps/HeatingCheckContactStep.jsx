import { Input, Select, Alert, Button, HelpText } from '../ui'
import { titleOptions, stateOptions } from '../../constants/formOptions'

const HeatingCheckContactStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Kontaktdaten",
    description = "Ihre persönlichen Daten",
    helpText = "Zum Abschluss benötigen wir Ihre Kontaktdaten für die weitere Bearbeitung.",
    fields = {
      personalData: true,
      address: true,
      state: true,
      propertyRole: true,
      preferredContact: true,
      notes: true
    },
    submitState = { loading: false, error: null, success: false },
    onSubmit = () => {},
    onBack = () => {},
    isStepValid = true
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>👤 {title}:</strong> {helpText}
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
        <>
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
              placeholder="Max"
            />

            <Input
              label="Nachname"
              required
              value={formData.lastName}
              onChange={(e) => updateFormData('lastName', e.target.value)}
              placeholder="Mustermann"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="E-Mail-Adresse"
              type="email"
              required
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              placeholder="max@mustermann.de"
            />

            <Input
              label="Telefonnummer"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              placeholder="0123 456789"
            />
          </div>
        </>
      )}

      {fields.address && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Straße & Hausnummer"
            required
            value={formData.street}
            onChange={(e) => updateFormData('street', e.target.value)}
            placeholder="Musterstraße 123"
            className="md:col-span-1"
          />

          <Input
            label="PLZ"
            required
            value={formData.zipCode}
            onChange={(e) => updateFormData('zipCode', e.target.value)}
            placeholder="12345"
            maxLength="5"
          />

          <Input
            label="Ort"
            required
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.propertyRole && (
          <Select
            label="Eigentümer/Mieter"
            value={formData.propertyRole}
            onChange={(e) => updateFormData('propertyRole', e.target.value)}
            options={[
              { value: 'eigentuemer', label: 'Eigentümer' },
              { value: 'mieter', label: 'Mieter' },
              { value: 'verwalter', label: 'Hausverwalter' },
              { value: 'bevollmaechtigter', label: 'Bevollmächtigter' }
            ]}
          />
        )}

        {fields.preferredContact && (
          <Select
            label="Bevorzugter Kontakt"
            value={formData.preferredContact}
            onChange={(e) => updateFormData('preferredContact', e.target.value)}
            options={[
              { value: 'telefon', label: 'Telefon' },
              { value: 'email', label: 'E-Mail' },
              { value: 'beide', label: 'Telefon und E-Mail' }
            ]}
          />
        )}
      </div>

      {fields.notes && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Anmerkungen
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            rows="3"
            value={formData.notes}
            onChange={(e) => updateFormData('notes', e.target.value)}
            placeholder="Besondere Wünsche oder Anmerkungen zum Heizungscheck..."
          />
        </div>
      )}

      <div className="pt-6">
        {!submitState.success && !submitState.error && (
          <Alert variant="info" title="Bereit für Heizungscheck">
            Ihre Angaben sind vollständig. Wir erstellen Ihnen ein individuelles Angebot für den professionellen Heizungscheck.
          </Alert>
        )}

        {submitState.error && (
          <Alert variant="danger" title="Fehler beim Versenden">
            {submitState.error}
            <div className="mt-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => window.location.reload()}
              >
                Erneut versuchen
              </Button>
            </div>
          </Alert>
        )}

        {submitState.success && (
          <Alert variant="success" title="Anfrage erfolgreich versendet! 🎉">
            <div className="space-y-2">
              <p>Vielen Dank für Ihre Heizungscheck-Anfrage!</p>
              <p className="text-sm">
                <strong>Unser qualifizierter Schornsteinfeger wird sich binnen 24 Stunden bei Ihnen melden.</strong>
              </p>
              <div className="mt-4 space-y-1 text-sm text-gray-600">
                <p>✅ Ihre Daten wurden sicher übertragen</p>
                <p>✅ Anfrage wurde registriert</p>
                <p>✅ Bearbeitung bereits gestartet</p>
              </div>
              <div className="mt-4">
                <Button 
                  variant="primary" 
                  onClick={onBack}
                  className="mr-2"
                >
                  Weitere Services entdecken
                </Button>
              </div>
            </div>
          </Alert>
        )}

        {!submitState.success && (
          <Button
            size="xl"
            onClick={onSubmit}
            disabled={submitState.loading || !isStepValid}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            {submitState.loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Anfrage wird verarbeitet...
              </div>
            ) : (
              'Heizungscheck beauftragen'
            )}
          </Button>
        )}
      </div>
    </div>
  )
}

export default HeatingCheckContactStep 