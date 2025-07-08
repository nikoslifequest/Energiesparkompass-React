import { Alert, Button, HelpText } from '../ui'
import {
  buildingTypeOptions,
  heatingTypeOptions,
  consultationTypeOptions,
  consultationLocationOptions,
  implementationTimeOptions
} from '../../constants/formOptions'

const ResidentialSummaryStep = ({ formData, updateFormData, stepConfig = {} }) => {
  const {
    title = "Zusammenfassung",
    description = "Überprüfung & Absendung",
    helpText = "Bitte überprüfen Sie Ihre Angaben und senden Sie das Formular ab.",
    fields = {
      summaryAlert: true,
      buildingSection: true,
      contactSection: true,
      submitButton: true
    },
    submitState = { loading: false, error: null, success: false },
    onSubmit = () => {},
    isStepValid = true
  } = stepConfig

  return (
    <div className="space-y-6 animate-fade-in">
      <HelpText>
        <strong>📋 {title}:</strong> {helpText}
      </HelpText>
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      {fields.summaryAlert && (
        <Alert variant="success" title="Ihre Energieberatungsanfrage ist fertig!">
          Bitte überprüfen Sie Ihre Angaben und senden Sie das Formular ab.
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {fields.buildingSection && (
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Gebäude & Energie</h3>
            <div className="space-y-2 text-sm">
              {formData.buildingType && (
                <div>
                  <span className="font-medium">Typ:</span> {buildingTypeOptions.find(o => o.value === formData.buildingType)?.label || formData.buildingType}
                </div>
              )}
              {formData.buildingYear && (
                <div>
                  <span className="font-medium">Baujahr:</span> {formData.buildingYear}
                </div>
              )}
              {formData.livingSpace && (
                <div>
                  <span className="font-medium">Wohnfläche:</span> {formData.livingSpace} m²
                </div>
              )}
              {formData.heatingType && (
                <div>
                  <span className="font-medium">Heizung:</span> {heatingTypeOptions.find(o => o.value === formData.heatingType)?.label || formData.heatingType}
                </div>
              )}
              {formData.consultationType && (
                <div>
                  <span className="font-medium">Beratungsart:</span> {consultationTypeOptions.find(o => o.value === formData.consultationType)?.label || formData.consultationType}
                </div>
              )}
            </div>
          </div>
        )}

        {fields.contactSection && (
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Kontakt & Termine</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
              </div>
              <div>
                <span className="font-medium">E-Mail:</span> {formData.email}
              </div>
              <div>
                <span className="font-medium">Telefon:</span> {formData.phone}
              </div>
              {formData.consultationLocation && (
                <div>
                  <span className="font-medium">Beratungsort:</span> {consultationLocationOptions.find(o => o.value === formData.consultationLocation)?.label || formData.consultationLocation}
                </div>
              )}
              {formData.implementation && (
                <div>
                  <span className="font-medium">Zeitrahmen:</span> {implementationTimeOptions.find(o => o.value === formData.implementation)?.label || formData.implementation}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {fields.submitButton && (
        <div className="pt-6">
          <Button
            size="xl"
            onClick={onSubmit}
            disabled={submitState.loading || !isStepValid}
            className="w-full"
          >
            {submitState.loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Anfrage wird verarbeitet...
              </div>
            ) : (
              'Energieberatungsanfrage absenden'
            )}
          </Button>
        </div>
      )}
    </div>
  )
}

export default ResidentialSummaryStep 