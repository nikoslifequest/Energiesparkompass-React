// Service Page Configurations
export { heizungscheckConfig } from './heizungscheckConfig'
export { foerdermittelberatungConfig } from './foerdermittelberatungConfig'
export { energieberatungConfig } from './energieberatungConfig'
export { hydraulischerAbgleichConfig } from './hydraulischerAbgleichConfig'
export { energieausweisConfig } from './energieausweisConfig'

// Service Page Templates Registry
export const servicePageConfigs = {
  'heizungscheck': () => import('./heizungscheckConfig').then(m => m.heizungscheckConfig),
  'foerdermittelberatung': () => import('./foerdermittelberatungConfig').then(m => m.foerdermittelberatungConfig),
  'energieberatung': () => import('./energieberatungConfig').then(m => m.energieberatungConfig),
  'hydraulischer-abgleich': () => import('./hydraulischerAbgleichConfig').then(m => m.hydraulischerAbgleichConfig),
  'energieausweis': () => import('./energieausweisConfig').then(m => m.energieausweisConfig),
  // Weitere Services hier hinzufügen...
}

// Helper function to get config by service name
export const getServicePageConfig = async (serviceName) => {
  const configLoader = servicePageConfigs[serviceName]
  if (!configLoader) {
    throw new Error(`Service page config for "${serviceName}" not found`)
  }
  return await configLoader()
}

// Service metadata for navigation/routing
export const serviceMetadata = {
  heizungscheck: {
    title: 'Heizungscheck 2.0',
    path: '/heizungscheck',
    icon: 'fire',
    category: 'Heizung'
  },
  foerdermittelberatung: {
    title: 'Fördermittelberatung',
    path: '/foerdermittelberatung', 
    icon: 'currency',
    category: 'Förderung'
  },
  energieberatung: {
    title: 'Energieberatung',
    path: '/energieberatung',
    icon: 'home',
    category: 'Beratung'
  },
  hydraulischerAbgleich: {
    title: 'Hydraulischer Abgleich',
    path: '/hydraulischer-abgleich',
    icon: 'wrench',
    category: 'Heizung'
  },
  energieausweis: {
    title: 'Energieausweis',
    path: '/energieausweis',
    icon: 'document',
    category: 'Ausweis'
  }
}