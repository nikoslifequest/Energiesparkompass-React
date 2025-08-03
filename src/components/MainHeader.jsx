import Navigation from './Navigation'

const MainHeader = ({ onNavigateToHeizungscheck, onNavigateToEnergie, onNavigateToHydraulisch, onNavigateToEnergieausweis, onNavigateToFoerder }) => {
  return (
    <Navigation 
      showQuickCheck={true} 
      onNavigateToHeizungscheck={onNavigateToHeizungscheck}
      onNavigateToEnergie={onNavigateToEnergie}
      onNavigateToHydraulisch={onNavigateToHydraulisch}
      onNavigateToEnergieausweis={onNavigateToEnergieausweis}
      onNavigateToFoerder={onNavigateToFoerder}
    />
  )
}

export default MainHeader 