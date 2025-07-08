import { ModernWizard } from './ui'
import { heatingCheckWizardConfig } from '../config/wizards/heatingCheckWizardConfig'

const ModernHeatingCheckWizard = ({ onBack }) => {
  return (
    <ModernWizard 
      wizardConfig={heatingCheckWizardConfig}
      onBack={onBack}
    />
  )
}

export default ModernHeatingCheckWizard 