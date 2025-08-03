import ServicePageTemplate from '../components/ServicePageTemplate'
import { foerdermittelberatungConfig } from '../config/servicePages/foerdermittelberatungConfig'

const FoerdermittelberatungPage = ({ 
  onBackToMain,
  onNavigateToHeizungscheck,
  onNavigateToEnergie,
  onNavigateToHydraulisch,
  onNavigateToEnergieausweis,
  onNavigateToFoerder 
}) => {
  return (
    <ServicePageTemplate 
      config={foerdermittelberatungConfig}
      onBackToMain={onBackToMain}
      onNavigateToHeizungscheck={onNavigateToHeizungscheck}
      onNavigateToEnergie={onNavigateToEnergie}
      onNavigateToHydraulisch={onNavigateToHydraulisch}
      onNavigateToEnergieausweis={onNavigateToEnergieausweis}
      onNavigateToFoerder={onNavigateToFoerder}
    />
  )
}

export default FoerdermittelberatungPage