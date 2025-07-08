import {
  MonumentProtectionStep,
  ResidentialBuildingDataStep,
  ResidentialEnergyStep,
  ResidentialContactStep,
  ResidentialSummaryStep
} from '../../components/wizard-steps'

export const monumentEnergyWizardConfig = {
  title: "Energieberatung für Denkmalschutz",
  subtitle: "Spezialisierte Beratung für denkmalgeschützte Gebäude mit erhöhten Fördermöglichkeiten",
  serviceId: 9,
  totalSteps: 5,
  
  initialFormData: {
    // Denkmalschutz-spezifisch
    monumentProtectionLevel: '', monumentBuildingType: '', constructionPeriod: '',
    heritageAuthority: '', previousApprovals: '',
    
    // Gebäudedaten (wiederverwendet)
    buildingType: '', buildingYear: '', livingSpace: '', floors: '',
    street: '', zipCode: '', city: '', state: '', utilization: '',
    
    // Energiesituation (wiederverwendet)
    heatingType: '', heatingAge: '', heatingStatus: '', energyConsumption: '',
    heatingIssues: [], comfortIssues: [],
    
    // Kontakt (wiederverwendet)
    title: '', firstName: '', lastName: '', email: '', phone: '',
    contactPreference: '', availableTimes: '', specialRequests: ''
  },
  
  validationRules: {
    1: ['monumentProtectionLevel'],
    2: [], 3: [], 4: ['firstName', 'lastName', 'email', 'phone'], 5: []
  },
  
  steps: [
    {
      id: 1, title: 'Denkmalschutz-Status', description: 'Rechtlicher Status und Behörden',
      component: MonumentProtectionStep,
      config: { fundingAlert: true }
    },
    {
      id: 2, title: 'Gebäudedaten', description: 'Grundinformationen zum Objekt',
      component: ResidentialBuildingDataStep,
      config: { 
        title: "Gebäudedaten", 
        helpText: "Grunddaten zum denkmalgeschützten Gebäude für die passgenaue Beratung unter Berücksichtigung der historischen Bausubstanz." 
      }
    },
    {
      id: 3, title: 'Energiesituation', description: 'Aktuelle Heizung & Probleme',
      component: ResidentialEnergyStep,
      config: { 
        title: "Energiesituation",
        helpText: "Informationen zur aktuellen Energiesituation in Ihrem denkmalgeschützten Gebäude." 
      }
    },
    {
      id: 4, title: 'Kontakt', description: 'Ihre Kontaktdaten',
      component: ResidentialContactStep,
      config: { 
        title: "Kontaktdaten",
        helpText: "Damit unser spezialisierter Denkmalschutz-Energieberater Sie erreichen kann." 
      }
    },
    {
      id: 5, title: 'Zusammenfassung', description: 'Überprüfung & Absendung',
      component: ResidentialSummaryStep,
      config: { 
        title: "Zusammenfassung",
        fields: { 
          summaryAlert: { title: "Ihre Denkmalschutz-Energieberatungsanfrage ist fertig!" },
          submitButton: { text: "Denkmalschutz-Energieberatungsanfrage absenden" }
        }
      }
    }
  ],
  
  emailConfig: {
    subject: "Energieberatung für Denkmalschutz - Anfrage",
    template: "monument-energy-consultation"
  },
  
  customBehavior: { hasEmbeddedSubmit: true }
} 