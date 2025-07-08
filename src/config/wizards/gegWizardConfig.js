import {
  GegBuildingDataStep,
  HeatingSystemDataStep,
  ConsultationReasonStep,
  BuildingConditionStep,
  ContactDataStep,
  SummaryStep
} from '../../components/wizard-steps'

import {
  buildingTypeOptions,
  titleOptions,
  communityTypeOptions,
  heatPlanOptions,
  heatingTypeOptions,
  heatingStatusOptions,
  consultationReasonOptions,
  heatingUrgencyOptions,
  propertyTypeOptions,
  budgetRangeOptions,
  insulationStatusOptions,
  windowStatusOptions,
  contactPreferenceOptions
} from '../../constants/formOptions'

export const gegWizardConfig = {
  // Wizard metadata
  title: "GEG-Beratung",
  subtitle: "Gebäudeenergiegesetz - Beratung & Kennenlernen",
  serviceId: 6,
  totalSteps: 6,
  
  // Initial form data
  initialFormData: {
    // Grunddaten Gebäude & Lage
    buildingType: '',
    buildingYear: '',
    livingSpace: '',
    units: '',
    street: '',
    zipCode: '',
    city: '',
    communitySize: '',
    heatPlan: '',
    monument: '',
    energyCertificate: '',
    
    // Aktuelle Heizsituation
    heatingType: '',
    heatingAge: '',
    heatingStatus: '',
    energyConsumption: '',
    gasConnection: '',
    renewableEnergy: '',
    
    // Beratungsanlass & Planung
    consultationReason: '',
    heatingUrgency: '',
    propertyType: '',
    plannedMeasures: '',
    budgetRange: '',
    
    // Gebäudezustand (Kurzeinschätzung)
    insulationStatus: '',
    windowStatus: '',
    previousRenovations: '',
    
    // Kontaktdaten
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    contactPreference: '',
    availableTimes: '',
    notes: ''
  },
  
  // Validation rules per step
  validationRules: {
    1: [], // Gebäude & Lage - alle optional
    2: [], // Heizung - alle optional
    3: [], // Beratungsgrund - alle optional
    4: [], // Gebäudezustand - alle optional
    5: ['firstName', 'lastName', 'email', 'phone'], // Kontakt - erforderlich
    6: [] // Zusammenfassung
  },
  
  // Step definitions
  steps: [
    { 
      id: 1, 
      title: 'Gebäude & Lage', 
      description: 'Grundinformationen zum Objekt',
      component: GegBuildingDataStep,
      config: {
        title: "Gebäude & Lage",
        description: "Grundinformationen zum Objekt",
        helpText: "Bitte geben Sie die Grundinformationen zu Ihrem Gebäude ein. Falls Sie nicht alle Angaben zur Hand haben, können Sie Felder frei lassen.",
        fields: {
          buildingType: true,
          buildingYear: true,
          livingSpace: true,
          units: true,
          address: true,
          communitySize: true,
          heatPlan: true,
          monument: true,
          energyCertificate: true
        }
      }
    },
    { 
      id: 2, 
      title: 'Heizung', 
      description: 'Aktuelle Heizsituation',
      component: HeatingSystemDataStep,
      config: {
        title: "Heizsituation",
        description: "Aktuelle Heizsituation",
        helpText: "Diese Informationen helfen uns, Ihren Beratungsbedarf einzuschätzen und relevante GEG-Bestimmungen zu berücksichtigen.",
        fields: {
          heatingType: true,
          heatingAge: true,
          heatingStatus: true,
          energyConsumption: true,
          gasConnection: true,
          renewableEnergy: true
        }
      }
    },
    { 
      id: 3, 
      title: 'Beratungsgrund', 
      description: 'Ihr Anliegen',
      component: ConsultationReasonStep,
      config: {
        title: "Ihr Anliegen",
        description: "Beratungsgrund und Planung",
        helpText: "Teilen Sie uns mit, was der Grund für Ihre Beratungsanfrage ist und welche Pläne Sie haben.",
        fields: {
          consultationReason: true,
          heatingUrgency: true,
          propertyType: true,
          budgetRange: true,
          plannedMeasures: true
        }
      }
    },
    { 
      id: 4, 
      title: 'Gebäudezustand', 
      description: 'Kurzeinschätzung',
      component: BuildingConditionStep,
      config: {
        title: "Gebäudezustand",
        description: "Kurzeinschätzung",
        helpText: "Eine grobe Einschätzung hilft uns bei der Vorbereitung der Beratung. Lassen Sie Felder frei, wenn Sie unsicher sind.",
        fields: {
          insulationStatus: true,
          windowStatus: true,
          previousRenovations: true
        }
      }
    },
    { 
      id: 5, 
      title: 'Kontakt', 
      description: 'Ihre Daten',
      component: ContactDataStep,
      config: {
        title: "Kontakt",
        description: "Ihre Daten",
        helpText: "Damit wir Sie für die Beratung erreichen können.",
        fields: {
          title: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          contactPreference: true,
          availableTimes: true,
          notes: true
        }
      }
    },
    { 
      id: 6, 
      title: 'Zusammenfassung', 
      description: 'Überprüfung',
      component: SummaryStep,
      config: {
        title: "Zusammenfassung",
        description: "Überprüfung Ihrer Angaben",
        submitButtonText: "GEG-Beratungsanfrage absenden",
        submittingText: "Anfrage wird verarbeitet...",
        successTitle: "Anfrage erfolgreich versendet! 🎉",
        successMessage: "Vielen Dank für Ihre GEG-Beratungsanfrage!",
        successDetails: [
          "Unser Energieberater wird sich binnen 24 Stunden bei Ihnen melden.",
          "Ihre Daten wurden sicher übertragen",
          "Anfrage wurde registriert",
          "Bearbeitung bereits gestartet"
        ],
        summaryConfig: {
          sections: [
            {
              title: "Gebäude & Heizung",
              fields: [
                { key: 'buildingType', label: 'Typ', options: buildingTypeOptions },
                { key: 'buildingYear', label: 'Baujahr' },
                { key: 'livingSpace', label: 'Wohnfläche', unit: 'm²' },
                { key: 'heatingType', label: 'Heizung', options: heatingTypeOptions },
                { key: 'heatingAge', label: 'Alter', unit: 'Jahre' }
              ]
            },
            {
              title: "Kontakt & Beratung",
              fields: [
                { key: 'firstName', label: 'Vorname' },
                { key: 'lastName', label: 'Nachname' },
                { key: 'email', label: 'E-Mail' },
                { key: 'phone', label: 'Telefon' },
                { key: 'consultationReason', label: 'Grund', options: consultationReasonOptions }
              ]
            }
          ]
        }
      }
    }
  ],
  
  // Email configuration
  emailConfig: {
    subject: "GEG-Beratungsanfrage",
    template: "geg-consultation",
    adminData: {
      consultationReason: 'consultationReason',
      heatingType: 'heatingType',
      heatingAge: 'heatingAge',
      heatingUrgency: 'heatingUrgency',
      budgetRange: 'budgetRange',
      plannedMeasures: 'plannedMeasures'
    }
  }
} 