import { ModernWizard } from './ui'
import { nonResidentialEnergyWizardConfig } from '../config/wizards/nonResidentialEnergyWizardConfig'

const ModernNonResidentialEnergyWizard = ({ onBack }) => {
  return (
    <ModernWizard 
      wizardConfig={nonResidentialEnergyWizardConfig}
      onBack={onBack}
    />
  )
}

export default ModernNonResidentialEnergyWizard 