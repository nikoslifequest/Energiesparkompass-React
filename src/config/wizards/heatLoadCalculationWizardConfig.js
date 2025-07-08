import {
  ResidentialBuildingDataStep,
  ResidentialEnergyStep,
  HeatLoadCalculationStep,
  ResidentialContactStep,
  ResidentialSummaryStep
} from '../../components/wizard-steps'

export const heatLoadCalculationWizardConfig = {
  title: "Heizlastberechnung",
  subtitle: "Normgerechte Berechnung nach DIN EN 12831 für optimale Heizungsauslegung",
  serviceId: 10,
  totalSteps: 5,
  
  initialFormData: {
    // Gebäudedaten (wiederverwendet)
    buildingType: '', buildingYear: '', livingSpace: '', floors: '',
    street: '', zipCode: '', city: '', state: '', utilization: '',
    monument: '', energyCertificate: '',
    
    // Heizsituation (erweitert)
    currentHeatingSystem: '', heatingSystemPlan: '', occupancyProfile: '',
    roomTemperatures: '', energyConsumption: '', comfortIssues: '',
    
    // Berechnungsanforderungen (spezifisch)
    calculationMethod: '', calculationPurpose: '', timeframeUrgency: '',
    previousCalculations: '', softwarePreference: '', implementation: '',
    specificRequirements: '',
    
    // Kontakt (erweitert)
    title: '', firstName: '', lastName: '', email: '', phone: '',
    contactPreference: '', company: '', position: '', availableTimes: '', projectNotes: ''
  },
  
  validationRules: {
    1: [], 2: [], 3: [], 4: ['firstName', 'lastName', 'email', 'phone'], 5: []
  },
  
  steps: [
    {
      id: 1, title: 'Gebäude & Projekt', description: 'Grunddaten und Projektziel',
      component: ResidentialBuildingDataStep,
      config: { 
        title: "Gebäude & Projekt",
        helpText: "Grundinformationen zu Ihrem Gebäude und dem geplanten Projekt. Diese Daten helfen uns bei der Auswahl der optimalen Berechnungsmethode.",
        fields: { buildingBasics: true, address: true, buildingDetails: true, energyCertificate: true }
      }
    },
    {
      id: 2, title: 'Heizung & Komfort', description: 'Aktuelle & geplante Heizsysteme',
      component: ResidentialEnergyStep,
      config: { 
        title: "Heizung & Komfort",
        helpText: "Informationen zur aktuellen und geplanten Heizsituation sowie zu Ihren Komfortansprüchen.",
        fields: { heatingSystem: true, comfortIssues: true }
      }
    },
    {
      id: 3, title: 'Berechnungsart', description: 'Methode und Anforderungen',
      component: HeatLoadCalculationStep,
      config: { methodAlert: true }
    },
    {
      id: 4, title: 'Kontakt', description: 'Ihre Kontaktdaten',
      component: ResidentialContactStep,
      config: { 
        title: "Kontaktdaten",
        helpText: "Damit unser Fachingenieur Sie für die Heizlastberechnung und Rückfragen erreichen kann.",
        fields: { personalData: true, contactMethods: true, preferences: true, specialRequests: true }
      }
    },
    {
      id: 5, title: 'Zusammenfassung', description: 'Überprüfung & Absendung',
      component: ResidentialSummaryStep,
      config: { 
        title: "Zusammenfassung",
        fields: { 
          summaryAlert: { title: "Ihre Heizlastberechnung-Anfrage ist fertig!" },
          submitButton: { text: "Heizlastberechnung beauftragen" }
        }
      }
    }
  ],
  
  emailConfig: {
    subject: "Heizlastberechnung - Anfrage",
    template: "heat-load-calculation"
  },
  
  customBehavior: { hasEmbeddedSubmit: true }
} 