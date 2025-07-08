import { Input, Select, RadioGroup, HelpText, Alert, Button } from '../ui'
import { titleOptions, stateOptions } from '../../constants/formOptions'

const HydraulicContactStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Kontakt & Abschluss",
    description = "Ihre Kontaktdaten",
    helpText = "Zum Abschluss benötigen wir Ihre Kontaktdaten für die weitere Bearbeitung und Terminvereinbarung.",
    fields = {
      procedureType: true,
      personalData: true,
      address: true,
      state: true,
      inspection: true,
      inspectionDate: true,
      additionalInfo: true
    },
    submitState = { loading: false, error: null, success: false },
    onSubmit = () => {},
    onBack = () => {}
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>✅ {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      <Alert variant="info" title="Verfahren B - Förderung möglich">
        Wir führen den hydraulischen Abgleich nach Verfahren B mit Heizlastberechnung durch. 
        Dies ist förderfähig über BAFA (bis zu 20% Zuschuss bei iSFP).
      </Alert>

      {fields.procedureType && (
        <RadioGroup
          label="Verfahren für hydraulischen Abgleich"
          name="procedureType"
          options={[
            { value: 'verfahren-b', label: 'Verfahren B (mit Heizlastberechnung, förderfähig)' },
            { value: 'verfahren-a', label: 'Verfahren A (vereinfacht, schneller)' }
          ]}
          value={formData.procedureType}
          onChange={(e) => updateFormData('procedureType', e.target.value)}
          layout="vertical"
        />
      )}

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
              label="E-Mail"
              required
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              placeholder="max.mustermann@email.de"
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

      {fields.inspection && (
        <RadioGroup
          label="Besichtigung vor Ort erwünscht?"
          name="besichtigung"
          options={[
            { value: 'ja-erforderlich', label: 'Ja, für genaue Analyse erforderlich' },
            { value: 'ja-wuenschenswert', label: 'Ja, wünschenswert' },
            { value: 'nein', label: 'Nein, erstmal Angebot' }
          ]}
          value={formData.besichtigung}
          onChange={(e) => updateFormData('besichtigung', e.target.value)}
          layout="vertical"
        />
      )}

      {fields.inspectionDate && (formData.besichtigung === 'ja-erforderlich' || formData.besichtigung === 'ja-wuenschenswert') && (
        <Input
          label="Wunschtermin für Besichtigung"
          type="date"
          value={formData.besichtigungTermin}
          onChange={(e) => updateFormData('besichtigungTermin', e.target.value)}
          min={new Date().toISOString().split('T')[0]}
        />
      )}

      {fields.additionalInfo && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zusätzliche Informationen
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            rows="3"
            value={formData.additionalInfo}
            onChange={(e) => updateFormData('additionalInfo', e.target.value)}
            placeholder="Weitere wichtige Informationen zu Ihrer Heizungsanlage..."
          />
        </div>
      )}

      <div className="pt-6">
        {!submitState.success && !submitState.error && (
          <Alert variant="info" title="Bereit für hydraulischen Abgleich">
            Ihre Angaben sind vollständig. Wir erstellen Ihnen ein individuelles Angebot für den hydraulischen Abgleich nach Verfahren B.
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
              <p>Vielen Dank für Ihre Anfrage zum hydraulischen Abgleich!</p>
              <p className="text-sm">
                <strong>Unser Fachmann wird sich binnen 24 Stunden bei Ihnen melden.</strong>
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
            disabled={submitState.loading}
            className="w-full"
          >
            {submitState.loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Anfrage wird verarbeitet...
              </div>
            ) : (
              'Anfrage für hydraulischen Abgleich senden'
            )}
          </Button>
        )}
      </div>
    </div>
  )
}

export default HydraulicContactStep 