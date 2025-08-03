import ServicePageTemplate from '../components/ServicePageTemplate'
import { hydraulischerAbgleichConfig } from '../config/servicePages/hydraulischerAbgleichConfig'

const HydraulischerAbgleichPage = ({ 
  onBackToMain,
  onNavigateToHeizungscheck,
  onNavigateToEnergie,
  onNavigateToHydraulisch,
  onNavigateToEnergieausweis,
  onNavigateToFoerder 
}) => {
  return (
    <ServicePageTemplate 
      config={hydraulischerAbgleichConfig}
      onBackToMain={onBackToMain}
      onNavigateToHeizungscheck={onNavigateToHeizungscheck}
      onNavigateToEnergie={onNavigateToEnergie}
      onNavigateToHydraulisch={onNavigateToHydraulisch}
      onNavigateToEnergieausweis={onNavigateToEnergieausweis}
      onNavigateToFoerder={onNavigateToFoerder}
    />
  )
}

export default HydraulischerAbgleichPage