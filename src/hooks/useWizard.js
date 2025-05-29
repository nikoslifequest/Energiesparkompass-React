import { useState } from 'react'

export const useWizard = (initialData = {}, totalSteps = 1, validationRules = {}) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState(initialData)

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (step) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step)
    }
  }

  const isStepValid = () => {
    const rules = validationRules[currentStep]
    if (!rules) return true
    
    return rules.every(rule => {
      if (typeof rule === 'string') {
        return formData[rule] && formData[rule].trim() !== ''
      }
      if (typeof rule === 'function') {
        return rule(formData)
      }
      return true
    })
  }

  const resetWizard = () => {
    setCurrentStep(1)
    setFormData(initialData)
  }

  return {
    currentStep,
    formData,
    totalSteps,
    updateFormData,
    nextStep,
    prevStep,
    goToStep,
    isStepValid,
    resetWizard,
    isFirstStep: currentStep === 1,
    isLastStep: currentStep === totalSteps
  }
} 