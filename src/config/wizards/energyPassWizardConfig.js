import { 
  BuildingDataStep, 
  ContactDataStep, 
  SummaryStep, 
  BuildingConstructionStep, 
  BuildingSystemsStep, 
  ConsumptionDataStep 
} from '../../components/wizard-steps'

export const energyPassWizardConfig = {
  serviceId: 2,
  title: 'Energieausweis Einfamilienhaus',
  description: 'Bedarfs- oder Verbrauchsausweis nach Ihren Anforderungen',
  
  initialFormData: {
    // Gebäude-Grunddaten
    buildingType: '', constructionYear: '', livingSpace: '', 
    floors: '', basement: '', utilization: '',
    
    // Konstruktion & Hülle
    wallConstruction: '', roofConstruction: '', windowType: '',
    wallThickness: '', insulationThickness: '', windowAge: '',
    
    // Anlagentechnik
    heatingSystem: '', heatingAge: '', hotWaterSystem: '',
    ventilationType: '', hasRenewableEnergy: '', renewableDetails: '',
    
    // Verbrauchsdaten (optional)
    lastYearHeating: '', lastYearElectricity: '', heatingCosts: '',
    electricityCosts: '', consumptionPeriod: '',
    
    // Kontakt & Abwicklung
    energyPassType: '', urgency: '',
    title: '', firstName: '', lastName: '', email: '', phone: '',
    street: '', zipCode: '', city: '', state: '',
    
    // Zusatzinfo
    specialFeatures: '', additionalInfo: ''
  },

  validationRules: {
    1: [], // Gebäude-Grunddaten - optional
    2: [], // Konstruktion & Hülle - optional
    3: [], // Anlagentechnik - optional
    4: [], // Verbrauchsdaten - optional
    5: ['firstName', 'lastName', 'email', 'phone', 'street', 'zipCode', 'city'], // Kontakt - erforderlich
    6: [] // Zusammenfassung
  },

  steps: [
    {
      id: 1,
      title: 'Gebäude-Grunddaten',
      description: 'Basisinformationen zum Gebäude',
      component: BuildingDataStep,
      fields: {
        buildingType: true,
        buildingYear: true,
        livingSpace: true,
        floors: true,
        basement: true,
        utilization: true
      },
      customOptions: {
        buildingType: 'energyPassBuildingTypeOptions',
        buildingYear: 'constructionYearOptions'
      }
    },
    {
      id: 2,
      title: 'Konstruktion & Hülle',
      description: 'Bauweise und Dämmung',
      component: BuildingConstructionStep,
      fields: {
        wallConstruction: true,
        roofConstruction: true,
        windowType: true,
        wallThickness: true,
        insulationThickness: true,
        windowAge: true
      }
    },
    {
      id: 3,
      title: 'Anlagentechnik',
      description: 'Heizung, Warmwasser, Lüftung',
      component: BuildingSystemsStep,
      fields: {
        heatingSystem: true,
        heatingAge: true,
        hotWaterSystem: true,
        ventilationType: true,
        renewableEnergy: true,
        renewableDetails: true
      }
    },
    {
      id: 4,
      title: 'Verbrauchsdaten',
      description: 'Energie- und Heizkosten (optional)',
      component: ConsumptionDataStep,
      fields: {
        heatingConsumption: true,
        electricityConsumption: true,
        heatingCosts: true,
        electricityCosts: true,
        consumptionPeriod: true
      }
    },
    {
      id: 5,
      title: 'Kontakt & Abwicklung',
      description: 'Ihre Daten und Ausweis-Typ',
      component: ContactDataStep,
      fields: {
        title: true,
        name: true,
        email: true,
        phone: true,
        address: true,
        state: true,
        additionalInfo: true
      },
      customFields: [
        {
          type: 'select',
          name: 'energyPassType',
          label: 'Gewünschter Ausweis-Typ',
          options: 'energyPassTypeOptions',
          required: true
        },
        {
          type: 'select',
          name: 'urgency',
          label: 'Zeitrahmen',
          options: 'urgencyOptions',
          required: false
        }
      ]
    },
    {
      id: 6,
      title: 'Zusammenfassung',
      description: 'Prüfung und Angebot anfordern',
      component: SummaryStep,
      sections: [
        {
          title: "Gebäudedaten",
          editStep: 1,
          fields: [
            { key: 'buildingType', label: 'Gebäudetyp' },
            { key: 'constructionYear', label: 'Baualter' },
            { key: 'livingSpace', label: 'Wohnfläche', suffix: 'm²' },
            { key: 'floors', label: 'Geschosse' },
            { key: 'utilization', label: 'Nutzung' }
          ]
        },
        {
          title: "Konstruktion & Hülle",
          editStep: 2,
          fields: [
            { key: 'wallConstruction', label: 'Außenwand' },
            { key: 'roofConstruction', label: 'Dach' },
            { key: 'windowType', label: 'Fenster' },
            { key: 'insulationThickness', label: 'Dämmstärke', suffix: 'cm' }
          ]
        },
        {
          title: "Anlagentechnik",
          editStep: 3,
          fields: [
            { key: 'heatingSystem', label: 'Heizsystem' },
            { key: 'heatingAge', label: 'Heizungsalter', suffix: 'Jahre' },
            { key: 'hotWaterSystem', label: 'Warmwasser' },
            { key: 'hasRenewableEnergy', label: 'Erneuerbare Energien' }
          ]
        },
        {
          title: "Kontakt & Abwicklung",
          editStep: 5,
          fields: [
            { key: 'firstName', label: 'Vorname' },
            { key: 'lastName', label: 'Nachname' },
            { key: 'email', label: 'E-Mail' },
            { key: 'phone', label: 'Telefon' },
            { key: 'energyPassType', label: 'Ausweis-Typ' },
            { key: 'urgency', label: 'Zeitrahmen' }
          ]
        }
      ]
    }
  ],

  adminDashboardConfig: {
    title: 'Energieausweis Einfamilienhaus',
    summary: (formData) => ({
      livingSpace: formData.livingSpace,
      buildingAge: formData.constructionYear,
      energyPassType: formData.energyPassType,
      urgency: formData.urgency,
      heatingSystem: formData.heatingSystem,
      specialFeatures: formData.specialFeatures
    })
  },

  onSubmit: async (formData) => {
    console.log('Energieausweis-Anfrage abgesendet:', formData)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    return {
      success: true,
      message: 'Energieausweis-Anfrage erfolgreich versendet!'
    }
  }
} 