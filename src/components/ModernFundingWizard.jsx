import { ModernWizard } from './ui'
import { fundingWizardConfig } from '../config/wizards/fundingWizardConfig'

const ModernFundingWizard = ({ onBack }) => {
  return (
    <ModernWizard 
      wizardConfig={fundingWizardConfig}
      onBack={onBack}
    />
  )
}

export default ModernFundingWizard 