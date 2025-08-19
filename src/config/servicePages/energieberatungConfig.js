export const energieberatungConfig = {
  navigation: {
    showQuickCheck: false,
    ctaText: "Kostenlose Beratung",
    ctaAction: () => window.open('tel:+49123456789', '_self')
  },

  hero: {
    badge: {
      text: "KfW-Förderfähige Energieberatung",
      variant: "primary",
      className: "bg-blue-100 text-blue-800 border-blue-200"
    },
    title: {
      main: "Professionelle Energieberatung",
      highlight: "bis zu 80% gefördert!"
    },
    subtitle: "Zertifizierte Vor-Ort-Beratung für Wohn- und Nichtwohngebäude",
    description: "Erhalten Sie Ihren individuellen Sanierungsfahrplan (iSFP) und sparen Sie bis zu 50% Energiekosten. BAFA-gefördert mit bis zu 80% Zuschuss.",
    features: [
      {
        text: "BAFA-Förderung",
        highlight: "bis zu 80%"
      },
      "Individueller Sanierungsfahrplan (iSFP)",
      "KfW-Effizienzhaus-Beratung", 
      "Vor-Ort-Analyse durch dena-Experten"
    ],
    primaryAction: {
      text: "Beratung anfragen",
      icon: "home",
      onClick: () => console.log("Energieberatung starten")
    },
    secondaryAction: {
      text: "Kostenlose Erstberatung",
      icon: "phone",
      onClick: () => window.open('tel:+49123456789', '_self')
    },
    image: {
      src: "/assets/images/beratung.png",
      alt: "Beratungsgespräch zur Energieberatung",
      overlay: "bg-gradient-to-br from-blue-600/20 to-green-600/10",
      content: {
        title: "Energieberatung & Sanierungsplanung",
        subtitle: "iSFP • KfW-Effizienzhaus • BAFA-Förderung"
      }
    }
  },

  sections: {
    features: {
      title: "Unsere Energieberatungsleistungen",
      description: "Als <strong>dena-zertifizierte Energieberater</strong> bieten wir Ihnen die komplette Bandbreite der <strong>KfW-förderfähigen Energieberatung</strong> für alle Gebäudetypen.",
      items: [
        {
          icon: "home",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          title: "Wohngebäude-Beratung",
          description: "Umfassende Energieberatung für Ein- und Mehrfamilienhäuser mit individuellem Sanierungsfahrplan (iSFP) und KfW-Effizienzhaus-Analyse."
        },
        {
          icon: "chart",
          iconBg: "bg-green-100", 
          iconColor: "text-green-600",
          title: "Nichtwohngebäude-Beratung",
          description: "Professionelle Energieberatung für Gewerbe, Büros und Industriegebäude mit detaillierter Wirtschaftlichkeitsberechnung."
        },
        {
          icon: "document",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600", 
          title: "Sanierungsfahrplan (iSFP)",
          description: "Individueller Sanierungsfahrplan mit Schritt-für-Schritt-Anleitung, Förderberatung und Priorisierung der Maßnahmen."
        }
      ],
      bottomContent: {
        title: "Warum eine professionelle Energieberatung?",
        description: "Eine fundierte Energieberatung ist der Schlüssel zu erfolgreichen Sanierungsprojekten. Sie spart nicht nur Geld durch optimale Planung, sondern sichert auch maximale Förderungen und vermeidet teure Fehlentscheidungen.",
        stats: [
          {
            value: "80%",
            label: "BAFA-Förderung möglich",
            bgColor: "bg-blue-100",
            textColor: "blue-600"
          },
          {
            value: "50%", 
            label: "Energieeinsparung erreichbar",
            bgColor: "bg-green-100",
            textColor: "green-600"
          },
          {
            value: "15.000€",
            label: "Zusätzliche KfW-Förderung",
            bgColor: "bg-purple-100",
            textColor: "purple-600"
          }
        ]
      }
    },

    stats: {
      title: "Energieberatung in Zahlen",
      description: "Über <strong>300 durchgeführte Energieberatungen</strong> mit einer Gesamtinvestition von über <strong>8 Millionen Euro</strong> sprechen für unsere Kompetenz.",
      items: [
        {
          icon: "home",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          value: "300+",
          valueColor: "blue-600",
          label: "Beratungen durchgeführt",
          sublabel: "Wohn- und Nichtwohngebäude"
        },
        {
          icon: "currency",
          iconBg: "bg-green-100",
          iconColor: "text-green-600", 
          value: "€8 Mio",
          valueColor: "green-600",
          label: "Investitionen begleitet",
          sublabel: "Sanierungsprojekte seit 2020"
        },
        {
          icon: "chart",
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          value: "45%",
          valueColor: "orange-600", 
          label: "Durchschnittliche Einsparung",
          sublabel: "Bei umgesetzten Maßnahmen"
        },
        {
          icon: "check",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
          value: "100%", 
          valueColor: "purple-600",
          label: "Förderung bewilligt",
          sublabel: "Bei allen BAFA-Anträgen"
        }
      ],
      detailSection: {
        title: "Förderungen und Einsparungen im Detail",
        description: "Übersicht der BAFA-Förderungen und realistischen Einsparpotenziale nach Gebäudetyp",
        items: [
          {
            title: "Wohngebäude",
            subtitle: "Ein- und Zweifamilienhäuser",
            details: [
              { label: "BAFA-Förderung", value: "bis zu 80%", color: "green-600", size: "lg" },
              { label: "Max. Fördersumme", value: "bis zu 1.300€", color: "green-600" },
              { label: "Eigenanteil ab", value: "260€", color: "blue-600" },
              { label: "Mögliche Einsparung", value: "30-50%", color: "orange-600" }
            ]
          },
          {
            title: "Mehrfamilienhaus", 
            subtitle: "Ab 3 Wohneinheiten",
            details: [
              { label: "BAFA-Förderung", value: "bis zu 80%", color: "green-600", size: "lg" },
              { label: "Max. Fördersumme", value: "bis zu 1.700€", color: "green-600" },
              { label: "Eigenanteil ab", value: "340€", color: "blue-600" },
              { label: "Mögliche Einsparung", value: "35-55%", color: "orange-600" }
            ]
          },
          {
            title: "Nichtwohngebäude",
            subtitle: "Gewerbe, Büro, Industrie", 
            details: [
              { label: "BAFA-Förderung", value: "bis zu 80%", color: "green-600", size: "lg" },
              { label: "Max. Fördersumme", value: "bis zu 8.000€", color: "green-600" },
              { label: "Eigenanteil ab", value: "1.600€", color: "blue-600" },
              { label: "Mögliche Einsparung", value: "25-45%", color: "orange-600" }
            ]
          }
        ],
        tip: {
          title: "Förder-Tipp",
          description: "Die BAFA-Förderung muss VOR der Energieberatung beantragt werden. Wir übernehmen die komplette Antragsstellung kostenlos für Sie."
        }
      }
    },

    process: {
      title: "Ihr Weg zur optimalen Energieberatung",
      description: "Unser <strong>bewährter 4-Schritt-Prozess</strong> führt Sie sicher von der ersten Anfrage bis zum detaillierten Sanierungsfahrplan.",
      phases: [
        {
          number: 1,
          badge: "Schritt 1",
          title: "Kostenlose Vorabberatung & BAFA-Antrag",
          duration: "15-30 Minuten kostenfrei",
          numberColor: "bg-blue-600",
          badgeStyle: "bg-blue-100 text-blue-800",
          durationColor: "blue-600",
          description: "In einem kostenlosen Telefongespräch klären wir Ihre Ziele und Wünsche. Anschließend stellen wir für Sie kostenfrei den BAFA-Förderantrag und vereinbaren den Vor-Ort-Termin.",
          checkList: {
            title: "Was passiert",
            items: [
              "Telefonische Vorabberatung (kostenfrei)",
              "Klärung Ihrer Ziele und Wünsche",
              "BAFA-Förderantrag (kostenfrei für Sie)",
              "Terminvereinbarung für Vor-Ort-Beratung",
              "Zusendung Vorbereitungsunterlagen"
            ]
          },
          image: {
            src: "/assets/images/telefonberatung.png",
            alt: "Kostenlose telefonische Vorabberatung zur Energieberatung",
            caption: "Kostenlose Vorabberatung"
          }
        },
        {
          number: 2,
          badge: "Schritt 2", 
          title: "Vor-Ort-Begehung & Gebäudeanalyse",
          duration: "2-4 Stunden vor Ort",
          numberColor: "bg-green-600",
          badgeStyle: "bg-green-100 text-green-800",
          durationColor: "green-600",
          description: "Unser dena-zertifizierter Energieberater kommt zu Ihnen und führt eine detaillierte Gebäudeanalyse durch. Mit professionellen Messgeräten werden alle energetischen Schwachstellen identifiziert.",
          checkList: {
            title: "Vor-Ort-Analyse",
            items: [
              "Komplette Gebäudebegehung mit Dokumentation",
              "Thermografie-Aufnahmen der Gebäudehülle", 
              "Heizungsanlagen-Check mit Effizienzanalyse",
              "Luftdichtheitsmessung (optional)",
              "Aufmaß und fotografische Dokumentation"
            ]
          },
          image: {
            src: "/assets/images/hausbesuch.png",
            alt: "Vor-Ort-Begehung: Hausbesuch durch Energieberater",
            caption: "Professionelle Vor-Ort-Analyse"
          }
        },
        {
          number: 3,
          badge: "Schritt 3",
          title: "Datenauswertung & Sanierungsplanung", 
          duration: "2-3 Wochen Bearbeitungszeit",
          numberColor: "bg-orange-600",
          badgeStyle: "bg-orange-100 text-orange-800",
          durationColor: "orange-600",
          description: "Alle gesammelten Daten werden in unserem Büro professionell ausgewertet. Es entsteht ein detaillierter Sanierungsfahrplan mit Wirtschaftlichkeitsberechnung und Förderberatung.",
          checkList: {
            title: "Auswertung & Planung",
            items: [
              "Energetische Bewertung des Ist-Zustands",
              "Entwicklung verschiedener Sanierungsszenarien", 
              "Wirtschaftlichkeitsberechnung aller Maßnahmen",
              "Priorisierung nach Effizienz und Budget",
              "Detaillierte Förderberatung zu allen Programmen"
            ]
          },
          image: {
            src: "/assets/images/heizungscheck-auswertung.jpg",
            alt: "Professionelle Datenauswertung und Sanierungsplanung",
            caption: "Detaillierte Auswertung"
          }
        },
        {
          number: 4,
          badge: "Schritt 4",
          title: "Beratungsreport & Nachbetreuung", 
          duration: "Übergabe + laufende Betreuung",
          numberColor: "bg-purple-600",
          badgeStyle: "bg-purple-100 text-purple-800",
          durationColor: "purple-600",
          description: "Sie erhalten Ihren ausführlichen Energieberatungsbericht inkl. individuellem Sanierungsfahrplan. Bei der Umsetzung stehen wir Ihnen weiterhin beratend zur Seite.",
          checkList: {
            title: "Ihr Beratungspaket",
            items: [
              "Ausführlicher Energieberatungsbericht (40-60 Seiten)",
              "Individueller Sanierungsfahrplan (iSFP)",
              "Förderübersicht mit konkreten Antragshinweisen", 
              "Handwerker-Empfehlungen aus unserem Netzwerk",
              "6 Monate kostenlose Nachbetreuung bei Fragen"
            ]
          },
          image: {
            src: "/assets/images/foerdermittelberatung-hero.png",
            alt: "Abschluss und Fördermittelberatung – Bericht & Nachbetreuung",
            caption: "Ihr Sanierungsfahrplan"
          }
        }
      ],
      cta: {
        title: "Starten Sie Ihre Energieberatung!",
        description: "Nutzen Sie die BAFA-Förderung von bis zu 80% und erhalten Sie Ihren professionellen Sanierungsfahrplan.",
        buttons: [
          {
            text: "Kostenlose Vorabberatung",
            icon: "phone",
            variant: "primary",
            onClick: () => window.open('tel:+49123456789', '_self')
          },
          {
            text: "Beratung anfragen",
            icon: "home", 
            variant: "outline",
            onClick: () => console.log("Energieberatung anfragen")
          }
        ]
      }
    }
  },

  seo: {
    name: "Energieberatung Berlin Brandenburg",
    description: "Professionelle KfW-förderfähige Energieberatung mit bis zu 80% BAFA-Förderung. Individueller Sanierungsfahrplan (iSFP) durch dena-zertifizierte Experten.",
    areaServed: ["Berlin", "Brandenburg"],
    additionalData: {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Energieberatung Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energieberatung Wohngebäude",
              "description": "BAFA-geförderte Energieberatung für Wohngebäude mit individuellem Sanierungsfahrplan"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energieberatung Nichtwohngebäude", 
              "description": "Professionelle Energieberatung für Gewerbe- und Industriegebäude"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Individueller Sanierungsfahrplan",
              "description": "Detaillierter iSFP mit Schritt-für-Schritt-Anleitung zur energetischen Sanierung"
            }
          }
        ]
      }
    }
  }
}