import BaseWizard from './BaseWizard'
import { energyPassWizardConfig } from '../config/wizards/energyPassWizardConfig'

const OptimizedEnergyPassWizard = ({ onBack }) => {
  return (
    <BaseWizard 
      wizardConfig={energyPassWizardConfig}
      onBack={onBack}
    />
  )
}

export default OptimizedEnergyPassWizard 