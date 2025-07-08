import { ModernWizard } from './ui'
import { residentialEnergyWizardConfig } from '../config/wizards/residentialEnergyWizardConfig'

const ModernResidentialEnergyWizard = ({ onBack }) => {
  return (
    <ModernWizard 
      wizardConfig={residentialEnergyWizardConfig}
      onBack={onBack}
    />
  )
}

export default ModernResidentialEnergyWizard 