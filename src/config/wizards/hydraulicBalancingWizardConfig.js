import {
  HydraulicBuildingDataStep,
  ProblemAnalysisStep,
  HeatingSystemTechnicalStep,
  PumpRegulationStep,
  RoomAssessmentStep,
  HydraulicContactStep
} from '../../components/wizard-steps'

import {
  hydraulicBalancingBuildingTypeOptions,
  constructionYearOptions,
  insulationLevelOptions,
  problemDescriptionOptions,
  urgencyHydraulicOptions,
  heatingSystemDetailOptions,
  heatGeneratorOptions,
  heatingDistributionSystemOptions,
  pumpTypeOptions,
  valveTypeOptions,
  heatingCurveOptions,
  titleOptions,
  stateOptions
} from '../../constants/formOptions'

export const hydraulicBalancingWizardConfig = {
  // Wizard metadata
  title: "Hydraulischer Abgleich",
  subtitle: "Optimierung Ihrer Heizungsanlage für maximale Effizienz",
  serviceId: 4,
  totalSteps: 6,
  
  // Initial form data
  initialFormData: {
    // Schritt 1: Gebäude-Grunddaten
    buildingType: '',
    constructionYear: '',
    totalLivingSpace: '',
    numberOfRooms: '',
    insulationLevel: '',
    
    // Schritt 2: Problem-Analyse
    problemDescription: [],
    urgency: '',
    currentComfortLevel: '',
    specificProblems: '',
    hasRecentChanges: '',
    recentChangesDetails: '',
    
    // Schritt 3: Heizsystem-Details
    heatingSystemType: '',
    heatGenerator: '',
    heatGeneratorAge: '',
    heatGeneratorPower: '',
    distributionSystem: '',
    
    // Schritt 4: Pumpen & Regelung
    pumpType: '',
    pumpAge: '',
    valveType: '',
    heatingCurve: '',
    currentFlowTemperature: '',
    currentReturnTemperature: '',
    hasReturnTemperatureControl: '',
    hasDifferentialPressureControl: '',
    
    // Schritt 5: Bestandsaufnahme Räume
    numberOfHeatingCircuits: '',
    largestRoom: '',
    smallestRoom: '',
    problemRooms: '',
    roomsWithPoorHeating: '',
    averageSystemPressure: '',
    energyConsumptionLastYear: '',
    
    // Schritt 6: Kontaktdaten
    procedureType: '',
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    zipCode: '',
    city: '',
    state: '',
    besichtigung: '',
    besichtigungTermin: '',
    additionalInfo: ''
  },
  
  // Validation rules per step
  validationRules: {
    1: ['buildingType'], // Gebäudedaten - Gebäudetyp erforderlich
    2: ['urgency'], // Problem-Analyse - Dringlichkeit erforderlich
    3: ['heatingSystemType', 'heatGenerator'], // Heizsystem - System und Erzeuger erforderlich
    4: [], // Pumpe & Regelung - alle optional
    5: [], // Bestandsaufnahme - alle optional
    6: ['firstName', 'lastName', 'email', 'phone', 'street', 'zipCode', 'city'] // Kontakt - vollständige Adresse erforderlich
  },
  
  // Step definitions
  steps: [
    {
      id: 1,
      title: 'Gebäudedaten',
      description: 'Grunddaten zum Gebäude',
      component: HydraulicBuildingDataStep,
      config: {
        title: "Gebäudedaten",
        description: "Grunddaten zum Gebäude",
        helpText: "Diese Informationen helfen uns, die Komplexität und den Umfang des hydraulischen Abgleichs zu bestimmen.",
        fields: {
          buildingType: true,
          constructionYear: true,
          totalLivingSpace: true,
          numberOfRooms: true,
          insulationLevel: true
        }
      }
    },
    {
      id: 2,
      title: 'Problem-Analyse',
      description: 'Aktuelle Probleme beschreiben',
      component: ProblemAnalysisStep,
      config: {
        title: "Problem-Analyse",
        description: "Aktuelle Probleme beschreiben",
        helpText: "Beschreiben Sie die aktuellen Probleme mit Ihrer Heizung. Dies hilft bei der gezielten Optimierung.",
        fields: {
          problemDescription: true,
          urgency: true,
          currentComfortLevel: true,
          specificProblems: true,
          hasRecentChanges: true,
          recentChangesDetails: true
        }
      }
    },
    {
      id: 3,
      title: 'Heizsystem',
      description: 'Details zur Heizungsanlage',
      component: HeatingSystemTechnicalStep,
      config: {
        title: "Heizsystem-Details",
        description: "Details zur Heizungsanlage",
        helpText: "Informationen zu Ihrer Heizungsanlage sind entscheidend für die Berechnung des optimalen hydraulischen Abgleichs.",
        fields: {
          heatingSystemType: true,
          heatGenerator: true,
          heatGeneratorAge: true,
          heatGeneratorPower: true,
          distributionSystem: true
        }
      }
    },
    {
      id: 4,
      title: 'Pumpe & Regelung',
      description: 'Technische Komponenten',
      component: PumpRegulationStep,
      config: {
        title: "Pumpe & Regelung",
        description: "Technische Komponenten",
        helpText: "Details zu Pumpe, Ventilen und aktuellen Einstellungen sind wichtig für die Optimierung des Systems.",
        fields: {
          pumpType: true,
          pumpAge: true,
          valveType: true,
          heatingCurve: true,
          currentFlowTemperature: true,
          currentReturnTemperature: true,
          hasReturnTemperatureControl: true,
          hasDifferentialPressureControl: true
        }
      }
    },
    {
      id: 5,
      title: 'Bestandsaufnahme',
      description: 'Räume und Verbrauch',
      component: RoomAssessmentStep,
      config: {
        title: "Bestandsaufnahme",
        description: "Räume und Verbrauch",
        helpText: "Informationen zu Heizkreisen, Räumen und Verbrauch für eine vollständige Heizlastberechnung nach Verfahren B.",
        fields: {
          numberOfHeatingCircuits: true,
          largestRoom: true,
          smallestRoom: true,
          problemRooms: true,
          roomsWithPoorHeating: true,
          averageSystemPressure: true,
          energyConsumptionLastYear: true
        }
      }
    },
    {
      id: 6,
      title: 'Kontakt & Abschluss',
      description: 'Ihre Kontaktdaten',
      component: HydraulicContactStep,
      config: {
        title: "Kontakt & Abschluss",
        description: "Ihre Kontaktdaten",
        helpText: "Zum Abschluss benötigen wir Ihre Kontaktdaten für die weitere Bearbeitung und Terminvereinbarung.",
        fields: {
          procedureType: true,
          personalData: true,
          address: true,
          state: true,
          inspection: true,
          inspectionDate: true,
          additionalInfo: true
        }
      }
    }
  ],
  
  // Email configuration
  emailConfig: {
    subject: "Hydraulischer Abgleich Anfrage",
    template: "hydraulic-balancing",
    adminData: {
      heatedArea: 'totalLivingSpace',
      heatingSystemType: 'heatingSystemType',
      numberOfRadiators: 'numberOfHeatingCircuits',
      urgency: 'urgency',
      currentIssues: 'problemDescription'
    }
  },
  
  // Custom behavior flags
  customBehavior: {
    hasEmbeddedSubmit: true, // Step 6 handles its own submit
    requiresSpecialContactStep: true
  }
} 