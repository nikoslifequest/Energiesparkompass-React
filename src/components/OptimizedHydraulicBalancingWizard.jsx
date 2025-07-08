import { useState } from 'react'
import { Button, Card, Stepper } from './ui'
import ServiceIcon from '../utils/serviceIcons'
import { useWizard } from '../hooks/useWizard'
import { saveToAdminDashboard } from '../utils/adminHelpers'
import { hydraulicBalancingWizardConfig } from '../config/wizards/hydraulicBalancingWizardConfig'

const OptimizedHydraulicBalancingWizard = ({ onBack }) => {
  const [submitState, setSubmitState] = useState({ loading: false, error: null, success: false })
  const config = hydraulicBalancingWizardConfig

  const {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    isStepValid,
    isFirstStep,
    isLastStep
  } = useWizard(config.initialFormData, config.totalSteps, config.validationRules)

  const handleSubmit = async () => {
    setSubmitState({ loading: true, error: null, success: false })
    
    try {
      console.log('Hydraulischer Abgleich Anfrage:', formData)
      
      // Save to Admin Dashboard
      saveToAdminDashboard(formData, 'Hydraulischer Abgleich', {
        heatedArea: formData.totalLivingSpace,
        heatingSystemType: formData.heatingSystemType,
        numberOfRadiators: formData.numberOfHeatingCircuits,
        urgency: formData.urgency,
        currentIssues: formData.problemDescription?.join(', ') || 'Keine'
      })
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitState({ loading: false, error: null, success: true })
    } catch (error) {
      console.error('Fehler beim Verarbeiten der Anfrage:', error)
      setSubmitState({ 
        loading: false, 
        error: error.message || 'Ein unerwarteter Fehler ist aufgetreten', 
        success: false 
      })
    }
  }

  const renderCurrentStep = () => {
    const step = config.steps.find(s => s.id === currentStep)
    if (!step) return null

    const StepComponent = step.component
    const stepConfig = {
      ...step.config,
      // Special handling for the last step
      ...(isLastStep && {
        submitState,
        onSubmit: handleSubmit,
        onBack
      })
    }

    return (
      <StepComponent
        formData={formData}
        updateFormData={updateFormData}
        stepConfig={stepConfig}
      />
    )
  }

  return (
    <div className="wizard-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Button 
            variant="link"
            onClick={onBack}
            className="mb-6 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Service-Auswahl
          </Button>
          
          <div className="flex items-center justify-center mb-6">
            <div className="mr-4">
              <ServiceIcon 
                serviceId={config.serviceId} 
                size={48} 
                weight="duotone"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{config.title}</h1>
              <p className="text-lg text-gray-600">{config.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Progress Stepper */}
        <Stepper steps={config.steps} currentStep={currentStep} />

        {/* Form Content */}
        <Card padding="lg" shadow="xl" className="mb-8 transform transition-all duration-500">
          {renderCurrentStep()}
        </Card>

        {/* Navigation - Hidden on last step as it handles its own submit */}
        {!isLastStep && (
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={isFirstStep}
              className={isFirstStep ? 'invisible' : ''}
            >
              Zurück
            </Button>
            
            <Button
              onClick={nextStep}
              disabled={!isStepValid}
            >
              Weiter
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default OptimizedHydraulicBalancingWizard 