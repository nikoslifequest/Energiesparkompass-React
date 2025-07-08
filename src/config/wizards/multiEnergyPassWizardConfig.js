import { 
  MultiBuildingDataStep,
  MultiBuildingConstructionStep,
  MultiBuildingSystemsStep,
  MultiConsumptionDataStep,
  PropertyManagementStep,
  ContactDataStep, 
  SummaryStep
} from '../../components/wizard-steps'

export const multiEnergyPassWizardConfig = {
  serviceId: 3,
  title: 'Energieausweis Mehrfamilienhaus',
  description: 'Bedarfs- oder Verbrauchsausweis nach aktuellen Standards',
  
  initialFormData: {
    // Gebäude-Grunddaten (erweitert für MFH)
    buildingType: '', constructionYear: '', totalLivingSpace: '', 
    numberOfUnits: '', floors: '', basement: '', utilization: '',
    ownershipType: '', buildingHeight: '',
    
    // Konstruktion & Hülle
    wallConstruction: '', roofConstruction: '', windowType: '',
    wallThickness: '', insulationThickness: '', windowAge: '',
    commonAreas: '', elevators: '',
    
    // Anlagentechnik (erweitert für zentrale/dezentrale Systeme)
    heatingDistribution: '', centralHeatingSystem: '', heatingAge: '',
    hotWaterDistribution: '', ventilationType: '', hasRenewableEnergy: '', renewableDetails: '',
    
    // Verbrauchsdaten (Gesamtgebäude)
    totalHeatingConsumption: '', totalElectricityConsumption: '', 
    totalHeatingCosts: '', totalElectricityCosts: '', consumptionPeriod: '',
    heatingCostsBilling: '',
    
    // Verwalter/Ansprechpartner
    hasPropertyManager: '', propertyManagerName: '', propertyManagerContact: '',
    
    // Kontakt & Abwicklung
    energyPassType: '', urgency: '',
    title: '', firstName: '', lastName: '', email: '', phone: '',
    street: '', zipCode: '', city: '', state: '',
    
    // Zusatzinfo
    specialFeatures: '', additionalInfo: ''
  },

  validationRules: {
    1: ['buildingType', 'numberOfUnits'], // Gebäude-Grunddaten - Typ und Anzahl Einheiten erforderlich
    2: [], // Konstruktion & Hülle - optional
    3: ['heatingDistribution'], // Anlagentechnik - Heizungsverteilung erforderlich
    4: [], // Verbrauchsdaten - optional
    5: [], // Verwaltung/Ansprechpartner - optional
    6: ['firstName', 'lastName', 'email', 'phone', 'street', 'zipCode', 'city'], // Kontakt - erforderlich
    7: [] // Zusammenfassung
  },

  steps: [
    {
      id: 1,
      title: 'Gebäude-Grunddaten',
      description: 'Basisinformationen zum Mehrfamilienhaus',
      component: MultiBuildingDataStep,
      fields: {
        buildingType: true,
        constructionYear: true,
        numberOfUnits: true,
        totalLivingSpace: true,
        floors: true,
        ownershipType: true,
        basement: true,
        utilization: true,
        buildingHeight: true,
        commonAreas: false,
        elevators: false
      }
    },
    {
      id: 2,
      title: 'Konstruktion & Hülle',
      description: 'Bauweise und Dämmung',
      component: MultiBuildingConstructionStep,
      fields: {
        wallConstruction: true,
        roofConstruction: true,
        windowType: true,
        wallThickness: true,
        insulationThickness: true,
        windowAge: true,
        commonAreas: true,
        elevators: true
      }
    },
    {
      id: 3,
      title: 'Anlagentechnik',
      description: 'Heizung, Warmwasser, Lüftung',
      component: MultiBuildingSystemsStep,
      fields: {
        heatingDistribution: true,
        centralHeatingSystem: true,
        heatingAge: true,
        hotWaterDistribution: true,
        ventilationType: true,
        renewableEnergy: true,
        renewableDetails: true
      }
    },
    {
      id: 4,
      title: 'Verbrauchsdaten',
      description: 'Energie- und Heizkosten (optional)',
      component: MultiConsumptionDataStep,
      fields: {
        totalHeatingConsumption: true,
        totalElectricityConsumption: true,
        totalHeatingCosts: true,
        totalElectricityCosts: true,
        consumptionPeriod: true,
        heatingCostsBilling: true
      }
    },
    {
      id: 5,
      title: 'Verwaltung/Ansprechpartner',
      description: 'Hausverwaltung und Zuständigkeiten',
      component: PropertyManagementStep,
      fields: {
        hasPropertyManager: true,
        propertyManagerName: true,
        propertyManagerContact: true
      }
    },
    {
      id: 6,
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
      id: 7,
      title: 'Zusammenfassung',
      description: 'Prüfung und Angebot anfordern',
      component: SummaryStep,
      sections: [
        {
          title: "Gebäudedaten",
          editStep: 1,
          fields: [
            { key: 'buildingType', label: 'Gebäudetyp' },
            { key: 'numberOfUnits', label: 'Wohneinheiten' },
            { key: 'totalLivingSpace', label: 'Gesamtwohnfläche', suffix: 'm²' },
            { key: 'constructionYear', label: 'Baualter' },
            { key: 'ownershipType', label: 'Verwaltung' }
          ]
        },
        {
          title: "Konstruktion & Hülle",
          editStep: 2,
          fields: [
            { key: 'wallConstruction', label: 'Außenwand' },
            { key: 'roofConstruction', label: 'Dach' },
            { key: 'windowType', label: 'Fenster' },
            { key: 'elevators', label: 'Aufzug' }
          ]
        },
        {
          title: "Anlagentechnik",
          editStep: 3,
          fields: [
            { key: 'heatingDistribution', label: 'Heizungsverteilung' },
            { key: 'centralHeatingSystem', label: 'Zentrales Heizsystem' },
            { key: 'hotWaterDistribution', label: 'Warmwasser' },
            { key: 'hasRenewableEnergy', label: 'Erneuerbare Energien' }
          ]
        },
        {
          title: "Verwaltung",
          editStep: 5,
          fields: [
            { key: 'hasPropertyManager', label: 'Hausverwaltung' },
            { key: 'propertyManagerName', label: 'Name Verwaltung' }
          ]
        },
        {
          title: "Kontakt & Abwicklung",
          editStep: 6,
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
    title: 'Energieausweis Mehrfamilienhaus',
    summary: (formData) => ({
      numberOfUnits: formData.numberOfUnits,
      totalArea: formData.totalLivingSpace,
      energyPassType: formData.energyPassType,
      urgency: formData.urgency,
      managementType: formData.hasPropertyManager
    })
  },

  onSubmit: async (formData) => {
    console.log('Energieausweis Mehrfamilienhaus-Anfrage abgesendet:', formData)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    return {
      success: true,
      message: 'Energieausweis Mehrfamilienhaus-Anfrage erfolgreich versendet!'
    }
  }
} 