 import { ModernWizard } from './ui'
import { monumentEnergyWizardConfig } from '../config/wizards/monumentEnergyWizardConfig'

const ModernMonumentEnergyWizard = ({ onBack }) => {
  return (
    <ModernWizard 
      wizardConfig={monumentEnergyWizardConfig}
      onBack={onBack}
    />
  )
}

export default ModernMonumentEnergyWizard 