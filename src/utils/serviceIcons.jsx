import {
  CurrencyDollar,
  House,
  Buildings,
  Wrench,
  Thermometer,
  Scales,
  HouseLine,
  Factory,
  Bank,
  ChartBar,
  ClipboardText
} from 'phosphor-react'

// Service Icon Mapping
export const serviceIconMap = {
  1: CurrencyDollar,  // Fördermittelberatung
  2: House,           // Energieausweis Einfamilienhaus
  3: Buildings,       // Energieausweis Mehrfamilienhaus
  4: Wrench,          // Hydraulischer Abgleich
  5: Thermometer,     // Heizungscheck 2.0
  6: Scales,          // GEG-Beratung
  7: HouseLine,       // Wohngebäude
  8: Factory,         // Nicht Wohngebäude
  9: Bank,            // Denkmalschutz
  10: ChartBar,       // Heizlastberechnung
  11: ClipboardText   // Energieberatung
}

// Service Icon Component
export const ServiceIcon = ({ serviceId, size = 32, color = "#16a34a", weight = "regular", className = "" }) => {
  const IconComponent = serviceIconMap[serviceId]
  
  if (!IconComponent) {
    return <div className={`w-8 h-8 ${className}`}>❓</div>
  }
  
  return (
    <IconComponent 
      size={size} 
      color={color} 
      weight={weight}
      className={className}
    />
  )
}

export default ServiceIcon 