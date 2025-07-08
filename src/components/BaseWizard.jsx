import { useState } from 'react'
import { Button, Card, Stepper, Alert } from './ui'
import { useWizard } from '../hooks/useWizard'
import { saveToAdminDashboard } from '../utils/adminHelpers'
import ServiceIcon from '../utils/serviceIcons'

const BaseWizard = ({ 
  wizardConfig, 
  onBack, 
  className = '' 
}) => {
  const [submitState, setSubmitState] = useState({ 
    loading: false, 
    error: null, 
    success: false 
  })

  const {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    isStepValid,
    isFirstStep,
    isLastStep,
    totalSteps
  } = useWizard(
    wizardConfig.initialFormData, 
    wizardConfig.steps.length, 
    wizardConfig.validationRules
  )

  const handleSubmit = async () => {
    setSubmitState({ loading: true, error: null, success: false })
    
    try {
      // Save to Admin Dashboard
      if (wizardConfig.adminDashboardConfig) {
        saveToAdminDashboard(
          formData, 
          wizardConfig.adminDashboardConfig.title,
          wizardConfig.adminDashboardConfig.summary?.(formData) || {}
        )
      }

      // Execute custom submit logic
      if (wizardConfig.onSubmit) {
        await wizardConfig.onSubmit(formData)
      }

      setSubmitState({ loading: false, error: null, success: true })
    } catch (error) {
      console.error(`❌ ${wizardConfig.title} submission error:`, error)
      setSubmitState({ 
        loading: false, 
        error: error.message || 'Ein unerwarteter Fehler ist aufgetreten', 
        success: false 
      })
    }
  }

  const renderStep = () => {
    const currentStepConfig = wizardConfig.steps[currentStep - 1]
    const StepComponent = currentStepConfig.component
    
    return (
      <StepComponent 
        formData={formData}
        updateFormData={updateFormData}
        stepConfig={currentStepConfig}
        wizardConfig={wizardConfig}
      />
    )
  }

  const renderSuccessState = () => (
    <div className="text-center py-12">
      <div className="flex justify-center mb-6">
        <div className="bg-green-100 rounded-full p-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
        Anfrage erfolgreich gesendet!
      </h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Vielen Dank für Ihre Anfrage. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          onClick={() => window.open('tel:+49123456789', '_self')}
          className="font-semibold"
        >
          Sofort anrufen
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={onBack}
          className="font-medium"
        >
          Zurück zur Startseite
        </Button>
      </div>
    </div>
  )

  if (submitState.success) {
    return (
      <div className={`py-16 bg-gray-50 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            {renderSuccessState()}
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 sm:px-8 sm:py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <ServiceIcon 
                    serviceId={wizardConfig.serviceId} 
                    size={32} 
                    weight="duotone"
                  />
                  <div>
                    <h1 className="text-xl font-heading font-bold text-gray-900">
                      {wizardConfig.title}
                    </h1>
                    <p className="text-sm text-gray-600">
                      {wizardConfig.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Schritt {currentStep} von {totalSteps}
              </div>
            </div>
          </div>

          {/* Progress Stepper */}
          <div className="bg-gray-50 px-6 py-4 sm:px-8">
            <Stepper 
              steps={wizardConfig.steps} 
              currentStep={currentStep} 
              className="max-w-2xl mx-auto"
              showStepInfo={false}
            />
          </div>

          {/* Error State */}
          {submitState.error && (
            <div className="px-6 py-4 sm:px-8">
              <Alert 
                variant="danger" 
                dismissible 
                onDismiss={() => setSubmitState(prev => ({ ...prev, error: null }))}
              >
                <strong>Fehler:</strong> {submitState.error}
              </Alert>
            </div>
          )}

          {/* Step Content */}
          <div className="px-6 py-6 sm:px-8 sm:py-8">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 px-6 py-4 sm:px-8 flex justify-between items-center border-t border-gray-200">
            <Button
              variant="secondary"
              onClick={isFirstStep ? onBack : prevStep}
              disabled={submitState.loading}
            >
              {isFirstStep ? 'Zurück zur Übersicht' : 'Zurück'}
            </Button>
            
            <div className="flex space-x-3">
              {!isLastStep && (
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid || submitState.loading}
                >
                  Weiter
                </Button>
              )}
              
              {isLastStep && (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid || submitState.loading}
                  loading={submitState.loading}
                >
                  {submitState.loading ? 'Wird gesendet...' : 'Anfrage senden'}
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default BaseWizard 