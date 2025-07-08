import { ModernWizard } from './ui'
import { hydraulicBalancingWizardConfig } from '../config/wizards/hydraulicBalancingWizardConfig'

const ModernHydraulicBalancingWizard = ({ onBack }) => {
  return (
    <ModernWizard 
      wizardConfig={hydraulicBalancingWizardConfig}
      onBack={onBack}
    />
  )
}

export default ModernHydraulicBalancingWizard 