import { ModernWizard } from './ui'
import { heatLoadCalculationWizardConfig } from '../config/wizards/heatLoadCalculationWizardConfig'

const ModernHeatLoadCalculationWizard = ({ onBack }) => {
  return (
    <ModernWizard 
      wizardConfig={heatLoadCalculationWizardConfig}
      onBack={onBack}
    />
  )
}

export default ModernHeatLoadCalculationWizard 