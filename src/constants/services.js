// Central services configuration
export const services = [
  {
    id: 1,
    title: 'Fördermittelberatung',
    description: 'Professionelle Beratung zu verfügbaren Fördermitteln und Zuschüssen',
    category: 'Förderung',
    hasFullConfigurator: true
  },
  {
    id: 2,
    title: 'Energieausweis Einfamilienhaus',
    description: 'Energieausweis für Ihr Einfamilienhaus nach aktuellen Standards',
    category: 'Energieausweis',
    hasFullConfigurator: true
  },
  {
    id: 3,
    title: 'Energieausweis Mehrfamilienhaus',
    description: 'Energieausweis für Mehrfamilienhäuser und größere Wohngebäude',
    category: 'Energieausweis',
    hasFullConfigurator: true
  },
  {
    id: 4,
    title: 'Hydraulischer Abgleich',
    description: 'Optimierung Ihrer Heizungsanlage für maximale Effizienz',
    category: 'Heizung',
    hasFullConfigurator: true
  },
  {
    id: 5,
    title: 'Heizungscheck 2.0',
    description: 'Umfassende Prüfung und Bewertung Ihrer Heizungsanlage',
    category: 'Heizung',
    hasFullConfigurator: true
  },
  {
    id: 6,
    title: 'GEG-Beratung',
    description: 'Beratung zum Gebäudeenergiegesetz und dessen Anforderungen',
    category: 'Beratung',
    hasFullConfigurator: true
  },
  {
    id: 7,
    title: 'Wohngebäude',
    description: 'Energieberatung für Wohngebäude aller Art',
    category: 'Gebäude',
    hasFullConfigurator: true
  },
  {
    id: 8,
    title: 'Nicht Wohngebäude',
    description: 'Energieberatung für Gewerbe- und Industriegebäude',
    category: 'Gebäude',
    hasFullConfigurator: true
  },
  {
    id: 9,
    title: 'Denkmalschutz',
    description: 'Spezielle Energieberatung für denkmalgeschützte Gebäude',
    category: 'Spezial',
    hasFullConfigurator: true
  },
  {
    id: 10,
    title: 'Heizlastberechnung',
    description: 'Präzise Berechnung des Heizwärmebedarfs Ihres Gebäudes',
    category: 'Berechnung',
    hasFullConfigurator: true
  },
  {
    id: 11,
    title: 'Energieberatung',
    description: 'KfW-förderfähige Vor-Ort-Beratung mit individuellem Sanierungsfahrplan',
    category: 'Beratung',
    hasFullConfigurator: true
  }
]

// Convert array to object for easy lookup
export const servicesById = services.reduce((acc, service) => {
  acc[service.id] = service
  return acc
}, {})

export default services 