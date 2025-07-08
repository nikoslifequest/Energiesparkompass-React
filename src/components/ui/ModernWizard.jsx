import { useState } from 'react'
import { Button, Card, Alert } from './index'
import { useWizard } from '../../hooks/useWizard'
import { saveToAdminDashboard } from '../../utils/adminHelpers'
import ServiceIcon from '../../utils/serviceIcons'

const ModernWizard = ({ 
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
    <div className="text-center py-16">
      <div className="flex justify-center mb-6">
        <div className="bg-green-100 rounded-full p-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
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

  // Success State
  if (submitState.success) {
    return (
      <div className={`min-h-screen bg-gray-50 ${className}`}>
        <div className="max-w-2xl mx-auto px-4 py-16">
          <Card className="overflow-hidden shadow-lg">
            {renderSuccessState()}
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Modern Header - Compact & Clean */}
        <div className="bg-white rounded-2xl shadow-sm mb-6 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <ServiceIcon 
                  serviceId={wizardConfig.serviceId} 
                  size={28} 
                  weight="duotone"
                />
                <div>
                  <h1 className="text-lg font-bold text-gray-900">
                    {wizardConfig.title}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {wizardConfig.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              {currentStep} / {totalSteps}
            </div>
          </div>
        </div>

        {/* Modern Progress Bar */}
        <div className="bg-white rounded-2xl shadow-sm mb-6 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-900">
              {wizardConfig.steps[currentStep - 1].title}
            </h2>
            <div className="text-sm text-gray-500">
              Schritt {currentStep} von {totalSteps}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Error State */}
        {submitState.error && (
          <div className="mb-6">
            <Alert 
              variant="danger" 
              dismissible 
              onDismiss={() => setSubmitState(prev => ({ ...prev, error: null }))}
            >
              <strong>Fehler:</strong> {submitState.error}
            </Alert>
          </div>
        )}

        {/* Step Content - Modern Card */}
        <div className="bg-white rounded-2xl shadow-sm mb-6 p-8">
          {renderStep()}
        </div>

        {/* Modern Navigation */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={isFirstStep ? onBack : prevStep}
              disabled={submitState.loading}
              className="px-6 py-2"
            >
              {isFirstStep ? 'Zurück zur Übersicht' : 'Zurück'}
            </Button>
            
            <div className="flex space-x-3">
              {!isLastStep && (
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid || submitState.loading}
                  className="px-8 py-2"
                >
                  Weiter
                </Button>
              )}
              
              {isLastStep && (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid || submitState.loading}
                  loading={submitState.loading}
                  className="px-8 py-2"
                >
                  {submitState.loading ? 'Wird gesendet...' : 'Anfrage senden'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModernWizard 