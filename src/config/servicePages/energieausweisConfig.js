export const energieausweisConfig = {
  navigation: {
    showQuickCheck: false,
    ctaText: "Jetzt bestellen",
    ctaAction: () => window.open('tel:+49123456789', '_self')
  },

  hero: {
    badge: {
      text: "Gesetzlich vorgeschrieben",
      variant: "secondary",
      className: "bg-red-100 text-red-800 border-red-200"
    },
    title: {
      main: "Energieausweis",
      highlight: "ab 149€ online!"
    },
    subtitle: "Schnell, günstig und rechtssicher für Verkauf, Vermietung und Sanierung",
    description: "Erfüllen Sie die gesetzliche Pflicht mit unserem professionellen Energieausweis. Online-Bestellung, schnelle Bearbeitung, faire Preise.",
    features: [
      {
        text: "Bedarfsausweis",
        highlight: "ab 149€"
      },
      {
        text: "Verbrauchsausweis", 
        highlight: "ab 99€"
      },
      "10 Jahre gültig",
      "Online-Bestellung möglich",
      "Schnelle Bearbeitung in 3-5 Werktagen"
    ],
    primaryAction: {
      text: "Energieausweis bestellen",
      icon: "document",
      onClick: () => console.log("Energieausweis bestellen")
    },
    secondaryAction: {
      text: "Kostenlose Beratung",
      icon: "phone",
      onClick: () => window.open('tel:+49123456789', '_self')
    },
    image: {
      src: "/assets/images/energieausweis-hero.jpg",
      alt: "Offizieller Energieausweis für Wohngebäude",
      overlay: "bg-gradient-to-br from-red-600/20 to-orange-600/10",
      content: {
        title: "Energieausweis & Bewertung",
        subtitle: "Bedarfs- und Verbrauchsausweis • Rechtssicher • 10 Jahre gültig"
      }
    }
  },

  sections: {
    features: {
      title: "Welcher Energieausweis für wen?",
      description: "Der <strong>Energieausweis</strong> ist bei Verkauf und Vermietung <strong>gesetzlich vorgeschrieben</strong>. Wir erstellen beide Varianten: <strong>Verbrauchsausweis</strong> (günstiger) und <strong>Bedarfsausweis</strong> (genauer).",
      items: [
        {
          icon: "document",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          title: "Verbrauchsausweis",
          description: "Basiert auf dem tatsächlichen Energieverbrauch der letzten 3 Jahre. Günstiger und für die meisten Gebäude ausreichend. Ab 99€."
        },
        {
          icon: "chart",
          iconBg: "bg-blue-100", 
          iconColor: "text-blue-600",
          title: "Bedarfsausweis",
          description: "Basiert auf der technischen Gebäudeanalyse. Genauer und für Neubauten, sanierte Gebäude oder bei Verkauf empfohlen. Ab 149€."
        },
        {
          icon: "home",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600", 
          title: "Für alle Gebäudetypen",
          description: "Wir erstellen Energieausweise für Wohngebäude, Gewerbeimmobilien und öffentliche Gebäude aller Art."
        }
      ],
      bottomContent: {
        title: "Wann benötige ich einen Energieausweis?",
        description: "Der Energieausweis ist bei Verkauf, Vermietung oder Verpachtung von Immobilien gesetzlich vorgeschrieben. Auch für Sanierungsplanungen ist er hilfreich.",
        stats: [
          {
            value: "Pflicht",
            label: "Bei Verkauf & Vermietung",
            bgColor: "bg-red-100",
            textColor: "red-600"
          },
          {
            value: "10 Jahre", 
            label: "Gültigkeitsdauer",
            bgColor: "bg-green-100",
            textColor: "green-600"
          },
          {
            value: "3-5 Tage",
            label: "Schnelle Bearbeitung",
            bgColor: "bg-blue-100",
            textColor: "blue-600"
          }
        ]
      }
    },

    stats: {
      title: "Energieausweis-Service in Zahlen",
      description: "Über <strong>2.000 erstellte Energieausweise</strong> für zufriedene Kunden in Berlin und Brandenburg seit 2020.",
      items: [
        {
          icon: "document",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          value: "2.000+",
          valueColor: "green-600",
          label: "Energieausweise erstellt",
          sublabel: "Seit 2020 für B2B und B2C"
        },
        {
          icon: "clock",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600", 
          value: "3-5",
          valueColor: "blue-600",
          label: "Werktage Bearbeitung",
          sublabel: "Express in 24h möglich"
        },
        {
          icon: "check",
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          value: "100%",
          valueColor: "orange-600", 
          label: "Rechtssicherheit",
          sublabel: "Nach aktueller EnEV/GEG"
        },
        {
          icon: "currency",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
          value: "ab 99€", 
          valueColor: "purple-600",
          label: "Faire Preise",
          sublabel: "Transparent und günstig"
        }
      ],
      detailSection: {
        title: "Preise und Leistungen im Überblick",
        description: "Transparente Preisgestaltung für alle Energieausweis-Typen und Gebäudegrößen",
        items: [
          {
            title: "Verbrauchsausweis",
            subtitle: "Alle Wohngebäude",
            details: [
              { label: "Einfamilienhaus", value: "99€", color: "green-600", size: "lg" },
              { label: "Mehrfamilienhaus", value: "129€", color: "green-600" },
              { label: "Bearbeitungszeit", value: "3-5 Werktage", color: "blue-600" },
              { label: "Express-Service", value: "+50€ (24h)", color: "orange-600" }
            ]
          },
          {
            title: "Bedarfsausweis", 
            subtitle: "Detaillierte Analyse",
            details: [
              { label: "Einfamilienhaus", value: "149€", color: "green-600", size: "lg" },
              { label: "Mehrfamilienhaus", value: "199€", color: "green-600" },
              { label: "Bearbeitungszeit", value: "5-7 Werktage", color: "blue-600" },
              { label: "Inkl. Beratung", value: "Kostenlos", color: "orange-600" }
            ]
          },
          {
            title: "Gewerbeimmobilien",
            subtitle: "Nichtwohngebäude", 
            details: [
              { label: "Kleine Gebäude", value: "ab 199€", color: "green-600", size: "lg" },
              { label: "Große Komplexe", value: "auf Anfrage", color: "green-600" },
              { label: "Bearbeitungszeit", value: "7-10 Werktage", color: "blue-600" },
              { label: "Vor-Ort-Termin", value: "Inklusive", color: "orange-600" }
            ]
          }
        ],
        tip: {
          title: "Spar-Tipp",
          description: "Bei mehreren Einheiten im gleichen Gebäude gewähren wir Mengenrabatte. Auch Kombinationen mit Energieberatung sind günstiger möglich."
        }
      }
    },

    process: {
      title: "So einfach erhalten Sie Ihren Energieausweis",
      description: "Unser <strong>digitaler 3-Schritt-Prozess</strong> macht die Energieausweis-Erstellung so einfach und schnell wie nie zuvor.",
      phases: [
        {
          number: 1,
          badge: "Schritt 1",
          title: "Online-Bestellung & Datenaufnahme",
          duration: "5 Minuten online",
          numberColor: "bg-green-600",
          badgeStyle: "bg-green-100 text-green-800",
          durationColor: "green-600",
          description: "Bestellen Sie Ihren Energieausweis bequem online. Unser digitales Formular führt Sie durch alle erforderlichen Angaben - einfach und verständlich.",
          checkList: {
            title: "Was Sie benötigen",
            items: [
              "Grunddaten des Gebäudes (Baujahr, Fläche, etc.)",
              "Angaben zur Heizungsanlage",
              "Verbrauchsdaten der letzten 3 Jahre (bei Verbrauchsausweis)",
              "Bauunterlagen (bei Bedarfsausweis, falls vorhanden)",
              "Kontaktdaten für Rückfragen"
            ]
          },
          image: {
            src: "/assets/images/energieausweis-online-bestellung.jpg",
            alt: "Einfache Online-Bestellung des Energieausweises",
            caption: "Einfache Online-Bestellung"
          }
        },
        {
          number: 2,
          badge: "Schritt 2", 
          title: "Professionelle Bearbeitung",
          duration: "3-7 Werktage",
          numberColor: "bg-blue-600",
          badgeStyle: "bg-blue-100 text-blue-800",
          durationColor: "blue-600",
          description: "Unsere zertifizierten Energieberater prüfen Ihre Angaben und erstellen den rechtssicheren Energieausweis nach aktuellen Vorgaben. Bei Fragen melden wir uns.",
          checkList: {
            title: "Unser Service",
            items: [
              "Prüfung und Plausibilitätskontrolle Ihrer Angaben",
              "Professionelle Berechnung nach EnEV/GEG",
              "Qualitätssicherung durch zertifizierte Experten", 
              "Rückfragen bei unklaren Angaben",
              "Rechtssichere Erstellung nach aktuellen Standards"
            ]
          },
          image: {
            src: "/assets/images/energieausweis-bearbeitung.jpg",
            alt: "Professionelle Bearbeitung durch zertifizierte Energieberater",
            caption: "Professionelle Bearbeitung"
          }
        },
        {
          number: 3,
          badge: "Schritt 3",
          title: "Digitale Lieferung & Support", 
          duration: "Per Email + Post",
          numberColor: "bg-orange-600",
          badgeStyle: "bg-orange-100 text-orange-800",
          durationColor: "orange-600",
          description: "Sie erhalten Ihren fertigen Energieausweis digital per E-Mail und optional auch gedruckt per Post. Bei Fragen stehen wir auch nach der Lieferung zur Verfügung.",
          checkList: {
            title: "Was Sie erhalten",
            items: [
              "Offiziellen Energieausweis als PDF (sofort per Email)",
              "Gedrucktes Original per Post (optional)",
              "Erläuterung der wichtigsten Kennwerte",
              "Tipps für Energiesparmaßnahmen",
              "6 Monate kostenloser Support bei Fragen"
            ]
          },
          image: {
            src: "/assets/images/energieausweis-lieferung.jpg",
            alt: "Schnelle digitale Lieferung des fertigen Energieausweises",
            caption: "Schnelle Lieferung"
          }
        }
      ],
      cta: {
        title: "Jetzt Energieausweis bestellen!",
        description: "Erfüllen Sie die gesetzliche Pflicht schnell und günstig. Online-Bestellung in nur 5 Minuten.",
        buttons: [
          {
            text: "Jetzt online bestellen",
            icon: "document",
            variant: "primary",
            onClick: () => console.log("Energieausweis bestellen")
          },
          {
            text: "Kostenlose Beratung",
            icon: "phone", 
            variant: "outline",
            onClick: () => window.open('tel:+49123456789', '_self')
          }
        ]
      }
    }
  },

  seo: {
    name: "Energieausweis Berlin Brandenburg",
    description: "Energieausweis online bestellen ab 99€. Verbrauchsausweis und Bedarfsausweis für Verkauf und Vermietung. Schnell, günstig, rechtssicher.",
    areaServed: ["Berlin", "Brandenburg"],
    additionalData: {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Energieausweis Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Verbrauchsausweis",
              "description": "Energieausweis basierend auf dem Energieverbrauch - günstig und schnell"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bedarfsausweis", 
              "description": "Energieausweis basierend auf der Gebäudeanalyse - genau und detailliert"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gewerbe-Energieausweis",
              "description": "Energieausweis für Nichtwohngebäude und Gewerbeimmobilien"
            }
          }
        ]
      }
    }
  }
}