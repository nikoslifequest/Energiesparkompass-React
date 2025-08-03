// 🚀 Quick-Start Templates für häufige Service-Typen

// 🔥 Minimal Template - Für einfache Services
export const minimalServiceTemplate = {
  navigation: {
    showQuickCheck: false,
    ctaText: "Beratung"
  },
  
  hero: {
    badge: { text: "Ihr Service", variant: "primary" },
    title: { main: "Service-Name", highlight: "Ihr Vorteil" },
    subtitle: "Kurze, prägnante Beschreibung",
    description: "Was macht Ihren Service einzigartig und wertvoll für den Kunden?",
    primaryAction: {
      text: "Jetzt starten",
      icon: "lightning",
      onClick: () => console.log("Service starten")
    },
    secondaryAction: {
      text: "Mehr erfahren",
      icon: "phone",
      onClick: () => window.open('tel:+49123456789', '_self')
    },
    image: {
      src: "/assets/images/service-hero.jpg",
      alt: "Service-Beschreibung",
      overlay: "bg-gradient-to-br from-primary-600/20 to-blue-600/10"
    }
  },
  
  sections: {
    features: {
      title: "Warum [Service-Name]?",
      description: "Die wichtigsten Vorteile Ihres Services in einem Satz.",
      items: [
        {
          icon: "check",
          title: "Vorteil 1",
          description: "Kurze Beschreibung des ersten Hauptvorteils."
        },
        {
          icon: "lightning", 
          title: "Vorteil 2",
          description: "Kurze Beschreibung des zweiten Hauptvorteils."
        },
        {
          icon: "chart",
          title: "Vorteil 3", 
          description: "Kurze Beschreibung des dritten Hauptvorteils."
        }
      ]
    }
  },
  
  seo: {
    name: "Ihr Service",
    description: "Service-Beschreibung für Suchmaschinen"
  }
}

// 📊 Consulting Template - Für Beratungsleistungen
export const consultingServiceTemplate = {
  navigation: {
    showQuickCheck: false,
    ctaText: "Kostenlose Beratung"
  },
  
  hero: {
    badge: { text: "Expertenberatung", variant: "secondary" },
    title: { main: "Professionelle", highlight: "Beratung" },
    subtitle: "Individuelle Lösungen für Ihr Vorhaben",
    description: "Vertrauen Sie auf unsere Expertise und erreichen Sie Ihre Ziele schneller und effizienter.",
    features: [
      "Kostenlose Erstberatung",
      "Zertifizierte Experten",
      "Maßgeschneiderte Lösungen"
    ],
    primaryAction: {
      text: "Termin vereinbaren",
      icon: "phone",
      onClick: () => window.open('tel:+49123456789', '_self')
    },
    secondaryAction: {
      text: "Kostenlose Erstberatung",
      icon: "mail",
      onClick: () => window.open('mailto:info@energiesparkompass.de', '_self')
    }
  },
  
  sections: {
    features: {
      title: "Unsere Beratungsleistungen",
      description: "Comprehensive Beratung von A bis Z - <strong>transparent, kompetent, ergebnisorientiert</strong>.",
      items: [
        {
          icon: "document",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          title: "Analyse & Bewertung",
          description: "Detaillierte Untersuchung Ihrer aktuellen Situation mit professionellen Bewertungsmethoden."
        },
        {
          icon: "chart",
          iconBg: "bg-green-100", 
          iconColor: "text-green-600",
          title: "Strategieentwicklung",
          description: "Entwicklung maßgeschneiderter Lösungsstrategien basierend auf Ihren individuellen Zielen."
        },
        {
          icon: "check",
          iconBg: "bg-primary-100",
          iconColor: "text-primary-600",
          title: "Umsetzungsbegleitung",
          description: "Kontinuierliche Unterstützung bei der Realisierung bis zum erfolgreichen Abschluss."
        }
      ]
    },
    
    process: {
      title: "Unser Beratungsprozess",
      description: "Strukturiertes Vorgehen für <strong>maximalen Erfolg</strong> Ihres Projekts.",
      phases: [
        {
          number: 1,
          badge: "Schritt 1",
          title: "Kostenlose Erstberatung",
          duration: "30 Min. kostenfrei",
          description: "Wir analysieren Ihre Situation und identifizieren erste Handlungsfelder.",
          checkList: {
            title: "Inhalte",
            items: [
              "Analyse der aktuellen Situation",
              "Identifikation von Verbesserungspotenzialen",
              "Erste Lösungsansätze",
              "Kostenlose Ersteinschätzung"
            ]
          },
          image: {
            src: "/assets/images/beratung-erstgespraech.jpg",
            alt: "Kostenlose Erstberatung",
            caption: "Unverbindliches Erstgespräch"
          }
        },
        {
          number: 2,
          badge: "Schritt 2",
          title: "Detailanalyse & Strategie",
          duration: "1-2 Wochen",
          description: "Entwicklung einer maßgeschneiderten Strategie basierend auf detaillierter Analyse.",
          checkList: {
            title: "Leistungen",
            items: [
              "Umfassende Ist-Analyse",
              "Strategieentwicklung",
              "Maßnahmenkatalog",
              "Kosten-Nutzen-Bewertung"
            ]
          },
          image: {
            src: "/assets/images/beratung-analyse.jpg", 
            alt: "Detailanalyse und Strategieentwicklung",
            caption: "Professionelle Analyse"
          }
        },
        {
          number: 3,
          badge: "Schritt 3",
          title: "Umsetzung & Begleitung",
          duration: "Projektabhängig",
          description: "Kontinuierliche Begleitung bei der Umsetzung der entwickelten Strategie.",
          checkList: {
            title: "Support",
            items: [
              "Umsetzungsbegleitung",
              "Regelmäßige Erfolgskontrolle",
              "Anpassung bei Bedarf",
              "Dokumentation der Ergebnisse"
            ]
          },
          image: {
            src: "/assets/images/beratung-umsetzung.jpg",
            alt: "Umsetzungsbegleitung",
            caption: "Erfolgreiche Umsetzung"
          }
        }
      ],
      cta: {
        title: "Starten Sie jetzt!",
        description: "Vereinbaren Sie eine kostenlose Erstberatung und machen Sie den ersten Schritt zu Ihrem Erfolg.",
        buttons: [
          {
            text: "Kostenlose Beratung",
            icon: "phone",
            variant: "primary",
            onClick: () => window.open('tel:+49123456789', '_self')
          },
          {
            text: "E-Mail senden",
            icon: "mail",
            variant: "outline", 
            onClick: () => window.open('mailto:info@energiesparkompass.de', '_self')
          }
        ]
      }
    }
  },
  
  seo: {
    name: "Professionelle Beratung",
    description: "Expertenberatung für nachhaltige Lösungen"
  }
}

// 🏗️ Technical Service Template - Für technische Dienstleistungen
export const technicalServiceTemplate = {
  navigation: {
    showQuickCheck: false,
    ctaText: "Kostenloses Angebot"
  },
  
  hero: {
    badge: { text: "Technischer Service", variant: "primary" },
    title: { main: "Professionelle", highlight: "Installation" },
    subtitle: "Fachgerechte Umsetzung durch zertifizierte Experten",
    description: "Von der Planung bis zur Inbetriebnahme - wir setzen Ihr Projekt fachgerecht und termingerecht um.",
    primaryAction: {
      text: "Angebot anfordern",
      icon: "edit",
      onClick: () => console.log("Angebot anfordern")
    },
    secondaryAction: {
      text: "Beratung",
      icon: "phone", 
      onClick: () => window.open('tel:+49123456789', '_self')
    }
  },
  
  sections: {
    features: {
      title: "Unsere Leistungen",
      description: "Rundum-Service von der <strong>Planung bis zur Wartung</strong> - alles aus einer Hand.",
      items: [
        {
          icon: "edit",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600", 
          title: "Planung & Beratung",
          description: "Detaillierte Planung und fachkundige Beratung für optimale Ergebnisse."
        },
        {
          icon: "check",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          title: "Installation & Montage", 
          description: "Fachgerechte Installation durch zertifizierte Techniker mit langjähriger Erfahrung."
        },
        {
          icon: "chart",
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          title: "Service & Wartung",
          description: "Regelmäßige Wartung und schneller Service für dauerhaft optimale Leistung."
        }
      ]
    },
    
    stats: {
      title: "Vertrauen Sie unserer Erfahrung",
      description: "Über <strong>XXX erfolgreiche Projekte</strong> und <strong>XX Jahre Erfahrung</strong> sprechen für unsere Kompetenz.",
      items: [
        {
          icon: "check",
          value: "500+",
          label: "Abgeschlossene Projekte",
          sublabel: "Seit 2020"
        },
        {
          icon: "lightning",
          value: "98%",
          label: "Kundenzufriedenheit",
          sublabel: "Basierend auf Bewertungen"
        },
        {
          icon: "clock", 
          value: "24h",
          label: "Service-Garantie",
          sublabel: "Schnelle Hilfe bei Problemen"
        },
        {
          icon: "certificate",
          value: "ISO",
          label: "Zertifizierte Qualität",
          sublabel: "Nach DIN-Standards"
        }
      ]
    }
  },
  
  seo: {
    name: "Technischer Service",
    description: "Professionelle Installation und Wartung"
  }
}

// 📋 Service Type Identifier Helper
export const getTemplateByType = (serviceType) => {
  const templates = {
    'minimal': minimalServiceTemplate,
    'consulting': consultingServiceTemplate, 
    'technical': technicalServiceTemplate
  }
  
  return templates[serviceType] || minimalServiceTemplate
}

// 🎨 Template Customization Helper
export const customizeTemplate = (baseTemplate, overrides) => {
  return {
    ...baseTemplate,
    hero: {
      ...baseTemplate.hero,
      ...overrides.hero
    },
    sections: {
      ...baseTemplate.sections,
      ...overrides.sections
    },
    seo: {
      ...baseTemplate.seo,
      ...overrides.seo
    }
  }
}