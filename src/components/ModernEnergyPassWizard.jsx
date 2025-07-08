import { ModernWizard } from './ui'
import { energyPassWizardConfig } from '../config/wizards/energyPassWizardConfig'

const ModernEnergyPassWizard = ({ onBack }) => {
  return (
    <ModernWizard 
      wizardConfig={energyPassWizardConfig}
      onBack={onBack}
    />
  )
}

export default ModernEnergyPassWizard 