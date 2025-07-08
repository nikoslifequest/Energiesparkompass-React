import { ModernWizard } from './ui'
import { gegWizardConfig } from '../config/wizards/gegWizardConfig'

const ModernGegWizard = ({ onBack }) => {
  return (
    <ModernWizard 
      wizardConfig={gegWizardConfig}
      onBack={onBack}
    />
  )
}

export default ModernGegWizard 