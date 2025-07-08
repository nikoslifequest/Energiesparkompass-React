import BaseWizard from './BaseWizard'
import { multiEnergyPassWizardConfig } from '../config/wizards/multiEnergyPassWizardConfig'

const OptimizedMultiEnergyPassWizard = ({ onBack }) => {
  return (
    <BaseWizard 
      wizardConfig={multiEnergyPassWizardConfig}
      onBack={onBack}
    />
  )
}

export default OptimizedMultiEnergyPassWizard 