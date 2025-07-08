import { useState } from 'react'
import BaseWizard from './BaseWizard'
import { nonResidentialEnergyWizardConfig } from '../config/wizards/nonResidentialEnergyWizardConfig'
import { saveToAdminDashboard } from '../utils/adminHelpers'

const OptimizedNonResidentialEnergyWizard = ({ onBack }) => {
  const [submitState, setSubmitState] = useState({ 
    loading: false, 
    error: null, 
    success: false 
  })

  const handleSubmit = async (formData) => {
    setSubmitState({ loading: true, error: null, success: false })
    
    try {
      console.log('Nicht-Wohngebäude Energieberatung Anfrage:', formData)
      
      // Save to Admin Dashboard
      saveToAdminDashboard(formData, 'Energieberatung Nicht-Wohngebäude', {
        buildingArea: formData.netFloorArea,
        buildingUsage: formData.buildingType,
        consultationType: formData.consultationModule,
        urgency: formData.urgency,
        energyStandard: formData.energyCertificate
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
      config={nonResidentialEnergyWizardConfig}
      onBack={onBack}
      customStepConfig={customStepConfig}
    />
  )
}

export default OptimizedNonResidentialEnergyWizard 