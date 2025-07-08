import { useState } from 'react'
import BaseWizard from './BaseWizard'
import { monumentEnergyWizardConfig } from '../config/wizards/monumentEnergyWizardConfig'
import { saveToAdminDashboard } from '../utils/adminHelpers'

const OptimizedMonumentEnergyWizard = ({ onBack }) => {
  const [submitState, setSubmitState] = useState({ 
    loading: false, error: null, success: false 
  })

  const handleSubmit = async (formData) => {
    setSubmitState({ loading: true, error: null, success: false })
    
    try {
      console.log('Denkmalschutz Energieberatung Anfrage:', formData)
      
      saveToAdminDashboard(formData, 'Energieberatung Denkmalschutz', {
        livingSpace: formData.livingSpace,
        heritageStatus: formData.monumentProtectionLevel,
        consultationType: 'Denkmalschutz-Energieberatung',
        urgency: formData.urgency,
        specialRequirements: formData.monumentBuildingType
      })
      
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

  const customStepConfig = (step, formData, updateFormData, isStepValid) => {
    if (step.id === 5) {
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
      config={monumentEnergyWizardConfig}
      onBack={onBack}
      customStepConfig={customStepConfig}
    />
  )
}

export default OptimizedMonumentEnergyWizard 