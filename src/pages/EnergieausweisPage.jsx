import ServicePageTemplate from '../components/ServicePageTemplate'
import { energieausweisConfig } from '../config/servicePages/energieausweisConfig'

const EnergieausweisPage = ({ 
  onBackToMain,
  onNavigateToHeizungscheck,
  onNavigateToEnergie,
  onNavigateToHydraulisch,
  onNavigateToEnergieausweis,
  onNavigateToFoerder 
}) => {
  return (
    <ServicePageTemplate 
      config={energieausweisConfig}
      onBackToMain={onBackToMain}
      onNavigateToHeizungscheck={onNavigateToHeizungscheck}
      onNavigateToEnergie={onNavigateToEnergie}
      onNavigateToHydraulisch={onNavigateToHydraulisch}
      onNavigateToEnergieausweis={onNavigateToEnergieausweis}
      onNavigateToFoerder={onNavigateToFoerder}
    />
  )
}

export default EnergieausweisPage