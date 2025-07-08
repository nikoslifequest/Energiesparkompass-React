import { useState } from 'react'
import BaseWizard from './BaseWizard'
import { heatingCheckWizardConfig } from '../config/wizards/heatingCheckWizardConfig'
import { saveToAdminDashboard } from '../utils/adminHelpers'

const OptimizedHeatingCheckWizard = ({ onBack }) => {
  const [submitState, setSubmitState] = useState({ 
    loading: false, 
    error: null, 
    success: false 
  })

  const handleSubmit = async (formData) => {
    setSubmitState({ loading: true, error: null, success: false })
    
    try {
      console.log('Heizungscheck 2.0 Daten:', formData)
      
      // Save to Admin Dashboard
      saveToAdminDashboard(formData, 'Heizungscheck 2.0', {
        serviceType: formData.serviceType,
        urgency: formData.urgency,
        heatedArea: formData.heatedArea,
        heatingSystemType: formData.heatingSystemType,
        combinedServices: formData.combinedServices?.join(', ') || 'Keine'
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

  // Override step config for final step to include submit handling
  const customStepConfig = (step, formData, updateFormData, isStepValid) => {
    if (step.id === 6) {
      return {
        ...step.config,
        submitState,
        onSubmit: () => handleSubmit(formData),
        onBack,
        isStepValid
      }
    }
    return step.config
  }

  return (
    <BaseWizard
      config={heatingCheckWizardConfig}
      onBack={onBack}
      customStepConfig={customStepConfig}
    />
  )
}

export default OptimizedHeatingCheckWizard 