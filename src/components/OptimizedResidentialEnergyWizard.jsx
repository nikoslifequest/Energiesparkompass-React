import { useState } from 'react'
import BaseWizard from './BaseWizard'
import { residentialEnergyWizardConfig } from '../config/wizards/residentialEnergyWizardConfig'
import { saveToAdminDashboard } from '../utils/adminHelpers'

const OptimizedResidentialEnergyWizard = ({ onBack }) => {
  const [submitState, setSubmitState] = useState({ 
    loading: false, 
    error: null, 
    success: false 
  })

  const handleSubmit = async (formData) => {
    setSubmitState({ loading: true, error: null, success: false })
    
    try {
      console.log('Wohngebäude-Energieberatung Anfrage:', formData)
      
      // Save to Admin Dashboard
      saveToAdminDashboard(formData, 'Energieberatung Wohngebäude', {
        livingSpace: formData.livingSpace,
        buildingAge: formData.buildingYear,
        consultationType: formData.consultationType,
        urgency: formData.urgency,
        currentEnergyRating: formData.energyCertificate
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
        isStepValid
      }
    }
    return step.config
  }

  return (
    <BaseWizard
      config={residentialEnergyWizardConfig}
      onBack={onBack}
      customStepConfig={customStepConfig}
    />
  )
}

export default OptimizedResidentialEnergyWizard 