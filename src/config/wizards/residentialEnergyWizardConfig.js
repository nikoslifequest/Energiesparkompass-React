import {
  ResidentialBuildingDataStep,
  ResidentialEnergyStep,
  ResidentialConsultationStep,
  ResidentialPlanningStep,
  ResidentialContactStep,
  ResidentialSummaryStep
} from '../../components/wizard-steps'

import {
  buildingTypeOptions,
  titleOptions,
  stateOptions,
  energyCertificateOptions,
  monumentOptions,
  heatingTypeOptions,
  heatingStatusOptions,
  consultationTypeOptions,
  priorityOptions,
  informationSourceOptions,
  heatingIssueOptions,
  comfortIssueOptions,
  experienceOptions,
  financingOptions,
  implementationTimeOptions,
  preferredMeetingOptions,
  consultationLocationOptions,
  contactPreferenceOptions,
  utilizationOptions,
  urgencyOptions
} from '../../constants/formOptions'

export const residentialEnergyWizardConfig = {
  // Wizard metadata
  title: "Energieberatung für Wohngebäude",
  subtitle: "BAFA-geförderte Vor-Ort-Beratung mit individuellem Sanierungsfahrplan",
  serviceId: 7,
  totalSteps: 6,
  
  // Initial form data
  initialFormData: {
    // Gebäudeinformationen
    buildingType: '',
    buildingYear: '',
    livingSpace: '',
    floors: '',
    street: '',
    zipCode: '',
    city: '',
    state: '',
    monument: '',
    energyCertificate: '',
    utilization: '',
    
    // Heizsituation
    heatingType: '',
    heatingAge: '',
    heatingStatus: '',
    energyConsumption: '',
    heatingIssues: [],
    comfortIssues: [],
    
    // Beratungswunsch
    consultationType: '',
    priority: '',
    implementation: '',
    experience: '',
    financing: '',
    
    // Budgetvorstellungen 
    budget: '',
    urgency: '',
    informationSource: '',
    
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
    specialRequests: ''
  },
  
  // Validation rules per step
  validationRules: {
    1: [], // Gebäudeinformationen - alle optional
    2: [], // Energiesituation - alle optional
    3: [], // Beratungswunsch - alle optional
    4: [], // Planung & Budget - alle optional
    5: ['firstName', 'lastName', 'email', 'phone'], // Kontaktdaten - Pflichtfelder
    6: ['firstName', 'lastName', 'email', 'phone'] // Zusammenfassung - Pflichtfelder müssen noch erfüllt sein
  },
  
  // Step definitions
  steps: [
    {
      id: 1,
      title: 'Gebäude',
      description: 'Grundinformationen zum Objekt',
      component: ResidentialBuildingDataStep,
      config: {
        title: "Gebäudeinformationen",
        description: "Grundinformationen zum Objekt",
        helpText: "Bitte geben Sie die Grunddaten zu Ihrem Gebäude ein. Diese helfen uns bei der Vorbereitung Ihrer individuellen Energieberatung.",
        fields: {
          buildingBasics: true,
          address: true,
          buildingDetails: true,
          energyCertificate: true
        }
      }
    },
    {
      id: 2,
      title: 'Energiesituation',
      description: 'Heizung & Energieverbrauch',
      component: ResidentialEnergyStep,
      config: {
        title: "Energiesituation",
        description: "Heizung & Energieverbrauch",
        helpText: "Informationen zu Ihrer aktuellen Heizung und eventuellen Problemen helfen uns bei der gezielten Beratung.",
        fields: {
          heatingSystem: true,
          heatingIssues: true,
          comfortIssues: true
        }
      }
    },
    {
      id: 3,
      title: 'Beratungswunsch',
      description: 'Art der gewünschten Beratung',
      component: ResidentialConsultationStep,
      config: {
        title: "Beratungswunsch",
        description: "Art der gewünschten Beratung",
        helpText: "Teilen Sie uns mit, welche Art von Beratung Sie sich vorstellen und was Ihre Hauptziele sind.",
        fields: {
          consultationType: true,
          priority: true,
          experience: true,
          informationSource: true,
          meetingPreferences: true,
          additionalNotes: true
        }
      }
    },
    {
      id: 4,
      title: 'Planung & Budget',
      description: 'Zeitrahmen & Finanzierung',
      component: ResidentialPlanningStep,
      config: {
        title: "Planung & Budget",
        description: "Zeitrahmen & Finanzierung",
        helpText: "Diese Informationen helfen uns bei der Beratungsvorbereitung und um passende Förderoptionen zu finden.",
        fields: {
          implementation: true,
          urgency: true,
          financing: true,
          budget: true,
          fundingAlert: true
        }
      }
    },
    {
      id: 5,
      title: 'Kontakt',
      description: 'Ihre Kontaktdaten',
      component: ResidentialContactStep,
      config: {
        title: "Kontaktdaten",
        description: "Damit wir Sie für die Beratungsterminierung erreichen können",
        helpText: "Damit wir Sie für die Beratungsterminierung erreichen können.",
        fields: {
          personalData: true,
          contactMethods: true,
          preferences: true,
          specialRequests: true
        }
      }
    },
    {
      id: 6,
      title: 'Zusammenfassung',
      description: 'Überprüfung & Absendung',
      component: ResidentialSummaryStep,
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
    subject: "Energieberatung für Wohngebäude - Anfrage",
    template: "residential-energy-consultation",
    adminData: {
      livingSpace: 'livingSpace',
      buildingAge: 'buildingYear',
      consultationType: 'consultationType',
      urgency: 'urgency',
      currentEnergyRating: 'energyCertificate'
    }
  },
  
  // Custom behavior flags
  customBehavior: {
    hasEmbeddedSubmit: true, // Step 6 handles its own submit
    requiresSpecialSummaryStep: true
  }
} 