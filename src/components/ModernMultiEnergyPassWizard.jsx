import { ModernWizard } from './ui'
import { multiEnergyPassWizardConfig } from '../config/wizards/multiEnergyPassWizardConfig'

const ModernMultiEnergyPassWizard = ({ onBack }) => {
  return (
    <ModernWizard 
      wizardConfig={multiEnergyPassWizardConfig}
      onBack={onBack}
    />
  )
}

export default ModernMultiEnergyPassWizard 