import { useState } from 'react'
import BaseWizard from './BaseWizard'
import { heatLoadCalculationWizardConfig } from '../config/wizards/heatLoadCalculationWizardConfig'
import { saveToAdminDashboard } from '../utils/adminHelpers'

const OptimizedHeatLoadCalculationWizard = ({ onBack }) => {
  const [submitState, setSubmitState] = useState({ 
    loading: false, error: null, success: false 
  })

  const handleSubmit = async (formData) => {
    setSubmitState({ loading: true, error: null, success: false })
    
    try {
      console.log('Heizlastberechnung Anfrage:', formData)
      
      saveToAdminDashboard(formData, 'Heizlastberechnung', {
        livingSpace: formData.livingSpace,
        calculationType: formData.calculationMethod,
        urgency: formData.timeframeUrgency,
        heatingSystemType: formData.heatingSystemPlan,
        insulationLevel: formData.buildingQuality
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
      config={heatLoadCalculationWizardConfig}
      onBack={onBack}
      customStepConfig={customStepConfig}
    />
  )
}

export default OptimizedHeatLoadCalculationWizard 