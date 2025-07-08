import BaseWizard from './BaseWizard'
import { gegWizardConfig } from '../config/wizards/gegWizardConfig'

const OptimizedGegWizard = ({ onBack }) => {
  return (
    <BaseWizard
      config={gegWizardConfig}
      onBack={onBack}
    />
  )
}

export default OptimizedGegWizard 