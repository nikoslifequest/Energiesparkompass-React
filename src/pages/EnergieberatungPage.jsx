import ServicePageTemplate from '../components/ServicePageTemplate'
import { energieberatungConfig } from '../config/servicePages/energieberatungConfig'

const EnergieberatungPage = ({ 
  onBackToMain,
  onNavigateToHeizungscheck,
  onNavigateToEnergie,
  onNavigateToHydraulisch,
  onNavigateToEnergieausweis,
  onNavigateToFoerder 
}) => {
  return (
    <ServicePageTemplate 
      config={energieberatungConfig}
      onBackToMain={onBackToMain}
      onNavigateToHeizungscheck={onNavigateToHeizungscheck}
      onNavigateToEnergie={onNavigateToEnergie}
      onNavigateToHydraulisch={onNavigateToHydraulisch}
      onNavigateToEnergieausweis={onNavigateToEnergieausweis}
      onNavigateToFoerder={onNavigateToFoerder}
    />
  )
}

export default EnergieberatungPage