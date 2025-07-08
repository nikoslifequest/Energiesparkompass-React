import {
  HeatingCheckServiceStep,
  HeatingCheckBuildingStep,
  HeatingSystemDetailsStep,
  HeatingSettingsStep,
  DocumentationAccessStep,
  HeatingCheckContactStep
} from '../../components/wizard-steps'

import {
  heatingCheckServiceTypeOptions,
  heatingCheckUrgencyOptions,
  combinedServiceOptions,
  hydraulicBalancingBuildingTypeOptions,
  constructionYearOptions,
  heatingSystemDetailOptions,
  existingDocumentationOptions,
  heatingSystemAccessOptions,
  titleOptions,
  stateOptions
} from '../../constants/formOptions'

export const heatingCheckWizardConfig = {
  // Wizard metadata
  title: "Heizungscheck 2.0",
  subtitle: "Professioneller Heizungscheck durch qualifizierten Schornsteinfeger",
  serviceId: 5,
  totalSteps: 6,
  
  // Initial form data
  initialFormData: {
    // Schritt 1: Service-Art und Dringlichkeit
    serviceType: '',
    urgency: '',
    combinedServices: [],
    
    // Schritt 2: Gebäude-Grunddaten
    buildingType: '',
    constructionYear: '',
    numberOfUnits: '',
    heatedArea: '',
    numberOfRooms: '',
    
    // Schritt 3: Heizungsanlage
    heatingSystemType: '',
    manufacturer: '',
    model: '',
    installationYear: '',
    fuelType: '',
    heatingPower: '',
    heatCarrier: '', // Wichtig für GEG §60b Pflicht
    
    // Schritt 4: Aktuelle Einstellungen
    currentFlowTemperature: '',
    currentReturnTemperature: '',
    pumpType: '',
    pumpSetting: '',
    heatingCurve: '',
    nightSetback: '',
    summerShutdown: '',
    
    // Schritt 5: Dokumentation & Zugang
    existingDocumentation: [],
    accessType: '',
    accessNotes: '',
    lastMaintenanceDate: '',
    lastFlueGasTest: '',
    
    // Schritt 6: Kontaktdaten
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    zipCode: '',
    city: '',
    state: '',
    propertyRole: '',
    preferredContact: '',
    notes: ''
  },
  
  // Validation rules per step
  validationRules: {
    1: ['serviceType', 'urgency'], // Service-Art - beide erforderlich
    2: ['buildingType'], // Gebäudedaten - Gebäudetyp erforderlich
    3: ['heatingSystemType', 'fuelType', 'heatCarrier'], // Heizungsanlage - System, Brennstoff und Wärmeträger erforderlich
    4: [], // Einstellungen - alle optional
    5: ['accessType'], // Dokumentation - Zugang erforderlich
    6: ['firstName', 'lastName', 'email', 'phone', 'street', 'zipCode', 'city'] // Kontakt - vollständige Kontaktdaten erforderlich
  },
  
  // Step definitions
  steps: [
    {
      id: 1,
      title: 'Service-Art',
      description: 'Art und Dringlichkeit des Heizungschecks',
      component: HeatingCheckServiceStep,
      config: {
        title: "Service-Art",
        description: "Art und Dringlichkeit des Heizungschecks",
        helpText: "Professionelle Überprüfung Ihrer Heizungsanlage auf Energieeffizienz und Optimierungspotentiale.",
        fields: {
          serviceType: true,
          combinedServices: true,
          urgency: true
        }
      }
    },
    {
      id: 2,
      title: 'Gebäudedaten',
      description: 'Grundinformationen zum Gebäude',
      component: HeatingCheckBuildingStep,
      config: {
        title: "Gebäudedaten",
        description: "Grundinformationen zum Gebäude",
        helpText: "Diese Informationen helfen bei der Vorbereitung des Heizungschecks und der Bewertung der GEG §60b Pflicht.",
        fields: {
          buildingType: true,
          constructionYear: true,
          numberOfUnits: true,
          heatedArea: true,
          numberOfRooms: true
        }
      }
    },
    {
      id: 3,
      title: 'Heizungsanlage',
      description: 'Details zur bestehenden Heizung',
      component: HeatingSystemDetailsStep,
      config: {
        title: "Heizungsanlage",
        description: "Details zur bestehenden Heizung",
        helpText: "Informationen zu Ihrer Heizungsanlage sind wichtig für die Bewertung der Effizienz und GEG-Konformität.",
        fields: {
          heatingSystemType: true,
          manufacturer: true,
          model: true,
          installationYear: true,
          fuelType: true,
          heatCarrier: true,
          heatingPower: true
        }
      }
    },
    {
      id: 4,
      title: 'Einstellungen',
      description: 'Aktuelle Heizungseinstellungen',
      component: HeatingSettingsStep,
      config: {
        title: "Aktuelle Heizungseinstellungen",
        description: "Aktuelle Heizungseinstellungen",
        helpText: "Diese Informationen helfen dabei, die aktuelle Effizienz Ihrer Heizungsanlage zu bewerten und Verbesserungspotentiale zu identifizieren.",
        fields: {
          temperatures: true,
          pumpSettings: true,
          heatingCurve: true,
          scheduleSettings: true
        }
      }
    },
    {
      id: 5,
      title: 'Dokumentation',
      description: 'Zugang und vorhandene Unterlagen',
      component: DocumentationAccessStep,
      config: {
        title: "Dokumentation & Zugang",
        description: "Zugang und vorhandene Unterlagen",
        helpText: "Informationen zu vorhandenen Unterlagen und Zugangsmöglichkeiten zur Heizungsanlage.",
        fields: {
          existingDocumentation: true,
          accessType: true,
          accessNotes: true,
          maintenanceDates: true
        }
      }
    },
    {
      id: 6,
      title: 'Kontaktdaten',
      description: 'Ihre persönlichen Daten',
      component: HeatingCheckContactStep,
      config: {
        title: "Kontaktdaten",
        description: "Ihre persönlichen Daten",
        helpText: "Zum Abschluss benötigen wir Ihre Kontaktdaten für die weitere Bearbeitung.",
        fields: {
          personalData: true,
          address: true,
          state: true,
          propertyRole: true,
          preferredContact: true,
          notes: true
        }
      }
    }
  ],
  
  // Email configuration
  emailConfig: {
    subject: "Heizungscheck 2.0 Anfrage",
    template: "heating-check",
    adminData: {
      serviceType: 'serviceType',
      urgency: 'urgency',
      heatedArea: 'heatedArea',
      heatingSystemType: 'heatingSystemType',
      combinedServices: 'combinedServices'
    }
  },
  
  // Custom behavior flags
  customBehavior: {
    hasEmbeddedSubmit: true, // Step 6 handles its own submit
    requiresSpecialContactStep: true,
    hasGegCompliance: true // Special GEG §60b compliance logic
  }
} 