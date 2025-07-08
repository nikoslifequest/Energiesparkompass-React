import { SummaryStep } from '../../components/wizard-steps'
import ModernBuildingDataStep from '../../components/wizard-steps/ModernBuildingDataStep'
import ModernMeasuresSelectionStep from '../../components/wizard-steps/ModernMeasuresSelectionStep'
import ModernFinancingStep from '../../components/wizard-steps/ModernFinancingStep'
import ModernContactDataStep from '../../components/wizard-steps/ModernContactDataStep'
import { EmailServices } from '../../services/emailService'

export const fundingWizardConfig = {
  serviceId: 1,
  title: 'Fördermittelberatung',
  description: 'Professionelle Beratung zu verfügbaren Fördermitteln und Zuschüssen',
  
  initialFormData: {
    // Gebäudedaten
    buildingType: '', buildingYear: '', livingSpace: '', units: '',
    monument: '', energyCertificate: '', street: '', zipCode: '', city: '', state: '',
    
    // Geplante Maßnahmen
    measures: [], renovationScope: '',
    
    // Finanzierung
    investmentAmount: '', ownCapital: '', fundingType: '', timeline: '',
    
    // Kontakt
    title: '', firstName: '', lastName: '', email: '', phone: '',
    ownershipStatus: '', householdSize: '', income: ''
  },

  validationRules: {
    1: [], // Gebäudedaten - optional
    2: [(data) => data.measures.length > 0], // Mindestens eine Maßnahme
    3: [], // Finanzierung - optional
    4: ['firstName', 'lastName', 'email', 'phone'], // Kontakt - erforderlich
    5: [] // Zusammenfassung
  },

  steps: [
    {
      id: 1,
      title: 'Gebäudedaten',
      description: 'Grundinformationen zu Ihrem Gebäude',
      component: ModernBuildingDataStep,
      fields: {
        buildingType: true,
        buildingYear: true,
        livingSpace: true,
        units: true,
        address: true,
        state: true,
        monument: true,
        energyCertificate: true
      }
    },
    {
      id: 2,
      title: 'Maßnahmen',
      description: 'Geplante Energiesparmaßnahmen',
      component: ModernMeasuresSelectionStep
    },
    {
      id: 3,
      title: 'Finanzierung',
      description: 'Budget und Zeitvorstellungen',
      component: ModernFinancingStep
    },
    {
      id: 4,
      title: 'Kontaktdaten',
      description: 'Ihre persönlichen Daten',
      component: ModernContactDataStep,
      fields: {
        title: true,
        name: true,
        email: true,
        phone: true,
        ownership: true,
        additionalInfo: true
      }
    },
    {
      id: 5,
      title: 'Zusammenfassung',
      description: 'Überprüfung und Absendung',
      component: SummaryStep,
      sections: [
        {
          title: "Gebäudedaten",
          editStep: 1,
          fields: [
            { key: 'buildingType', label: 'Gebäudetyp' },
            { key: 'buildingYear', label: 'Baujahr' },
            { key: 'livingSpace', label: 'Wohnfläche', suffix: 'm²' },
            { key: 'street', label: 'Adresse' },
            { key: 'city', label: 'Ort' },
            { key: 'monument', label: 'Denkmalschutz' }
          ]
        },
        {
          title: "Geplante Maßnahmen",
          editStep: 2,
          fields: [
            { key: 'measures', label: 'Ausgewählte Maßnahmen' },
            { key: 'renovationScope', label: 'Umfang der Sanierung' }
          ]
        },
        {
          title: "Finanzierung",
          editStep: 3,
          fields: [
            { key: 'investmentAmount', label: 'Geplante Investition' },
            { key: 'ownCapital', label: 'Eigenkapital' },
            { key: 'fundingType', label: 'Gewünschte Förderart' },
            { key: 'timeline', label: 'Zeitrahmen' }
          ]
        },
        {
          title: "Kontaktdaten",
          editStep: 4,
          fields: [
            { key: 'firstName', label: 'Vorname' },
            { key: 'lastName', label: 'Nachname' },
            { key: 'email', label: 'E-Mail' },
            { key: 'phone', label: 'Telefon' }
          ]
        }
      ]
    }
  ],

  adminDashboardConfig: {
    title: 'Fördermittelberatung',
    summary: (formData) => ({
      livingSpace: formData.livingSpace,
      measures: formData.measures?.join(', ') || 'Keine',
      renovationScope: formData.renovationScope,
      investmentAmount: formData.investmentAmount,
      timeline: formData.timeline
    })
  },

  onSubmit: async (formData) => {
    const emailData = {
      title: formData.title || 'Nicht angegeben',
      firstName: formData.firstName || 'Unbekannt',
      lastName: formData.lastName || 'Unbekannt',
      email: formData.email || 'keine@email.de',
      phone: formData.phone || 'Nicht angegeben',
      street: formData.street || 'Nicht angegeben',
      zipCode: formData.zipCode || 'Nicht angegeben',
      city: formData.city || 'Nicht angegeben',
      buildingType: formData.buildingType || 'Nicht angegeben',
      buildingYear: formData.buildingYear || 'Nicht angegeben',
      livingSpace: formData.livingSpace || 'Nicht angegeben',
      units: formData.units || 'Nicht angegeben',
      monument: formData.monument || 'Nicht angegeben',
      energyCertificate: formData.energyCertificate || 'Nicht angegeben',
      measures: formData.measures && formData.measures.length > 0 
        ? formData.measures.join(', ') 
        : 'Keine Maßnahmen angegeben',
      renovationScope: formData.renovationScope || 'Nicht angegeben',
      ownership: formData.ownershipStatus || 'Nicht angegeben',
      householdSize: formData.householdSize || 'Nicht angegeben',
      state: formData.state || 'Nicht angegeben',
      investmentAmount: formData.investmentAmount || 'Nicht angegeben',
      availableCapital: formData.ownCapital || 'Nicht angegeben',
      fundingPreferences: formData.fundingType ? [formData.fundingType] : [],
      timeline: formData.timeline || 'Nicht angegeben'
    }

    const result = await EmailServices.sendFundingConsultationEmail(emailData)
    
    if (!result.success) {
      throw new Error(result.message || 'Email konnte nicht versendet werden')
    }
    
    return result
  }
} 