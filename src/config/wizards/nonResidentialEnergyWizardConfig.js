import {
  NonResidentialBuildingStep,
  NonResidentialTechnicalStep,
  NonResidentialConsultationStep,
  NonResidentialPlanningStep,
  NonResidentialContactStep,
  NonResidentialSummaryStep
} from '../../components/wizard-steps'

import {
  nonResidentialBuildingTypeOptions,
  titleOptions,
  stateOptions,
  energyCertificateOptions,
  monumentOptions,
  companyTypeOptions,
  consultationModuleOptions,
  consultationGoalOptions,
  operatingHoursOptions,
  energyConsumptionRangeOptions,
  coolingSystemOptions,
  ventilationSystemOptions,
  lightingSystemOptions,
  itEquipmentOptions,
  productionProcessOptions,
  energyManagementOptions,
  lastEnergyConsultationOptions,
  investmentReadinessOptions,
  specialRequirementsOptions,
  heatingTypeOptions,
  heatingStatusOptions,
  contactPreferenceOptions,
  urgencyOptions,
  implementationTimeOptions,
  preferredMeetingOptions,
  consultationLocationOptions
} from '../../constants/formOptions'

export const nonResidentialEnergyWizardConfig = {
  // Wizard metadata
  title: "Energieberatung für Nicht-Wohngebäude",
  subtitle: "BAFA-geförderte Beratung für Gewerbe-, Industrie- und öffentliche Gebäude",
  serviceId: 8,
  totalSteps: 6,
  
  // Initial form data
  initialFormData: {
    // Gebäudeinformationen
    buildingType: '',
    buildingYear: '',
    netFloorArea: '',
    floors: '',
    street: '',
    zipCode: '',
    city: '',
    state: '',
    monument: '',
    energyCertificate: '',
    companyType: '',
    
    // Unternehmensinformationen
    companyName: '',
    industry: '',
    employees: '',
    operatingHours: '',
    energyConsumptionRange: '',
    lastEnergyConsultation: '',
    energyManagement: '',
    
    // Technische Ausstattung
    heatingType: '',
    heatingStatus: '',
    coolingSystem: '',
    ventilationSystem: '',
    lightingSystem: '',
    itEquipment: '',
    productionProcess: '',
    
    // Beratungswunsch
    consultationModule: '',
    consultationGoal: '',
    specialRequirements: '',
    investmentReadiness: '',
    implementation: '',
    urgency: '',
    
    // Terminwünsche
    preferredMeeting: '',
    consultationLocation: '',
    additionalNotes: '',
    
    // Kontaktdaten
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    contactPreference: '',
    availableTimes: '',
    companyDetails: ''
  },
  
  // Validation rules per step
  validationRules: {
    1: [], // Gebäude & Unternehmen - alle optional
    2: [], // Technische Ausstattung - alle optional
    3: [], // Beratungswunsch - alle optional
    4: [], // Planung & Umsetzung - alle optional
    5: ['firstName', 'lastName', 'email', 'phone'], // Kontaktdaten - Pflichtfelder
    6: ['firstName', 'lastName', 'email', 'phone'] // Zusammenfassung - Pflichtfelder müssen noch erfüllt sein
  },
  
  // Step definitions
  steps: [
    {
      id: 1,
      title: 'Gebäude & Unternehmen',
      description: 'Grunddaten zum Objekt und Unternehmen',
      component: NonResidentialBuildingStep,
      config: {
        title: "Gebäude & Unternehmen",
        description: "Grunddaten zum Objekt und Unternehmen",
        helpText: "Bitte geben Sie die Grunddaten zu Ihrem Gebäude und Unternehmen ein. Diese sind wichtig für die Bestimmung der Förderfähigkeit und Beratungsart.",
        fields: {
          buildingBasics: true,
          address: true,
          buildingDetails: true,
          companyInfo: true,
          energyCertificate: true
        }
      }
    },
    {
      id: 2,
      title: 'Technische Ausstattung',
      description: 'Heizung, Kühlung, Lüftung & IT',
      component: NonResidentialTechnicalStep,
      config: {
        title: "Technische Ausstattung",
        description: "Heizung, Kühlung, Lüftung & IT",
        helpText: "Informationen zu den vorhandenen technischen Anlagen helfen bei der gezielten Beratung und Identifikation von Effizienzpotenzialen.",
        fields: {
          operationInfo: true,
          heatingSystem: true,
          coolingVentilation: true,
          lightingIT: true,
          productionEnergy: true,
          lastConsultation: true
        }
      }
    },
    {
      id: 3,
      title: 'Beratungswunsch',
      description: 'Art und Ziel der Beratung',
      component: NonResidentialConsultationStep,
      config: {
        title: "Beratungswunsch",
        description: "Art und Ziel der Beratung",
        helpText: "Definieren Sie Art und Ziel der gewünschten Energieberatung. Die verschiedenen Module haben unterschiedliche Schwerpunkte und Förderhöhen.",
        fields: {
          consultationModule: true,
          consultationGoal: true,
          specialRequirements: true,
          consultationLocation: true,
          additionalNotes: true,
          moduleAlert: true
        }
      }
    },
    {
      id: 4,
      title: 'Planung & Umsetzung',
      description: 'Zeitrahmen & Investitionsbereitschaft',
      component: NonResidentialPlanningStep,
      config: {
        title: "Planung & Umsetzung",
        description: "Zeitrahmen & Investitionsbereitschaft",
        helpText: "Informationen zu Zeitrahmen und Investitionsbereitschaft helfen bei der optimalen Beratungsgestaltung und Fördermittelplanung.",
        fields: {
          investment: true,
          implementation: true,
          urgency: true,
          preferredMeeting: true,
          fundingAlert: true,
          importantNotice: true
        }
      }
    },
    {
      id: 5,
      title: 'Kontakt',
      description: 'Ihre Kontaktdaten',
      component: NonResidentialContactStep,
      config: {
        title: "Kontaktdaten",
        description: "Damit wir Sie für die Beratungsterminierung erreichen können",
        helpText: "Damit wir Sie für die Beratungsterminierung erreichen können.",
        fields: {
          personalData: true,
          contactMethods: true,
          preferences: true,
          companyDetails: true
        }
      }
    },
    {
      id: 6,
      title: 'Zusammenfassung',
      description: 'Überprüfung & Absendung',
      component: NonResidentialSummaryStep,
      config: {
        title: "Zusammenfassung",
        description: "Überprüfung & Absendung",
        helpText: "Bitte überprüfen Sie Ihre Angaben und senden Sie das Formular ab.",
        fields: {
          summaryAlert: true,
          buildingSection: true,
          contactSection: true,
          submitButton: true
        }
      }
    }
  ],
  
  // Email configuration
  emailConfig: {
    subject: "Energieberatung für Nicht-Wohngebäude - Anfrage",
    template: "non-residential-energy-consultation",
    adminData: {
      buildingArea: 'netFloorArea',
      buildingUsage: 'buildingType',
      consultationType: 'consultationModule',
      urgency: 'urgency',
      energyStandard: 'energyCertificate'
    }
  },
  
  // Custom behavior flags
  customBehavior: {
    hasEmbeddedSubmit: true, // Step 6 handles its own submit
    requiresSpecialSummaryStep: true
  }
} 