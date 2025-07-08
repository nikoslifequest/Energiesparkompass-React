import BaseWizard from './BaseWizard'
import { fundingWizardConfig } from '../config/wizards/fundingWizardConfig'

const OptimizedFundingWizard = ({ onBack }) => {
  return (
    <BaseWizard 
      wizardConfig={fundingWizardConfig}
      onBack={onBack}
    />
  )
}

export default OptimizedFundingWizard 