export const heizungscheckConfig = {
  navigation: {
    showQuickCheck: false,
    ctaText: "Beratung",
    ctaAction: () => window.open('tel:+49123456789', '_self')
  },

  hero: {
    badge: {
      text: "Heizungscheck 2.0",
      variant: "secondary",
      className: "bg-primary-100 text-primary-800 border-primary-200"
    },
    title: {
      main: "Effizienz prüfen,",
      highlight: "Gesetz erfüllen!"
    },
    subtitle: "Professionelle Heizungsoptimierung für maximale Effizienz",
    description: "Bringen Sie Ihre Heizungsanlage auf den Prüfstand – schnell, unkompliziert und mit echtem Mehrwert.",
    primaryAction: {
      text: "Heizungscheck starten",
      icon: "fire",
      onClick: () => console.log("Heizungscheck starten")
    },
    secondaryAction: {
      text: "Beratung anfordern", 
      icon: "phone",
      onClick: () => window.open('tel:+49123456789', '_self')
    },
    image: {
      src: "/assets/images/familie.png",
      alt: "Wohlfühl-Wärme für die Familie – Heizungscheck",
      overlay: "bg-gradient-to-br from-primary-600/20 to-primary-700/10",
      content: {
        title: "Heizungsoptimierung & Effizienz",
        subtitle: "Thermostat • Hydraulischer Abgleich • GEG-Konformität"
      }
    }
  },

  sections: {
    features: {
      title: "Was ist ein Heizungscheck?",
      description: "Der <strong>Heizungscheck 2.0</strong> ist eine umfassende Analyse Ihrer Heizungsanlage zur Optimierung der <strong>Energieeffizienz</strong> und Erfüllung der <strong>GEG-Anforderungen</strong>. Unsere zertifizierten Energieberater prüfen alle Komponenten Ihres Heizsystems systematisch vor Ort.",
      items: [
        {
          icon: "thermometer",
          iconBg: "bg-primary-100",
          iconColor: "text-primary-600",
          title: "Heizungsanlagen-Prüfung",
          description: "Detaillierte Untersuchung aller Heizungskomponenten von Kessel bis Thermostat mit professionellen Messgeräten und modernster Technik."
        },
        {
          icon: "chart",
          iconBg: "bg-green-100", 
          iconColor: "text-green-600",
          title: "Effizienz-Analyse",
          description: "Präzise Messung und Bewertung der aktuellen Heizungseffizienz mit konkreten Verbesserungsvorschlägen für optimale Leistung."
        },
        {
          icon: "document",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600", 
          title: "GEG-Dokumentation",
          description: "Rechtssichere Bescheinigung über die Erfüllung aller gesetzlichen Vorgaben des Gebäudeenergiegesetzes."
        }
      ],
      bottomContent: {
        title: "Warum ist ein Heizungscheck wichtig?",
        description: "Ein regelmäßiger Heizungscheck macht versteckte Schwachstellen sichtbar und schafft die Grundlage für Einsparungen von bis zu 15 Prozent bei Ihren Energiekosten. Gleichzeitig erfüllen Sie gesetzliche Anforderungen, erhöhen die Betriebssicherheit und verlängern die Lebensdauer Ihrer Heizungsanlage. Eine Investition, die sich auszahlt – für Ihren Geldbeutel und für das Klima.",
        stats: [
          {
            value: "15%",
            label: "Energiekosten sparen",
            bgColor: "bg-primary-100",
            textColor: "primary-600"
          },
          {
            value: "100%", 
            label: "GEG-konform",
            bgColor: "bg-green-100",
            textColor: "green-600"
          },
          {
            value: "5-10",
            label: "Jahre längere Lebensdauer",
            bgColor: "bg-blue-100",
            textColor: "blue-600"
          }
        ]
      }
    },

    stats: {
      title: "Heizungscheck in Zahlen",
      description: "Über <strong>150 durchgeführte Heizungschecks</strong> sprechen für sich – vertrauen Sie auf unsere Expertise und profitieren Sie von <strong>messbaren Ergebnissen</strong>.",
      items: [
        {
          icon: "fire",
          iconBg: "bg-primary-100",
          iconColor: "text-primary-600",
          value: "850+",
          valueColor: "primary-600",
          label: "Heizungschecks durchgeführt",
          sublabel: "Seit 2020 in Berlin & Brandenburg"
        },
        {
          icon: "currency",
          iconBg: "bg-green-100",
          iconColor: "text-green-600", 
          value: "bis zu 15%",
          valueColor: "green-600",
          label: "Durchschnittliche Einsparung"
        },
        {
          icon: "check",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          value: "98%",
          valueColor: "blue-600", 
          label: "Kundenzufriedenheit",
          sublabel: "Basierend auf 120+ Bewertungen"
        },
        {
          icon: "lightning",
          iconBg: "bg-amber-100",
          iconColor: "text-amber-600",
          value: "1 Jahr", 
          valueColor: "amber-600",
          label: "ROI-Amortisation",
          sublabel: "Check-Kosten refinanziert"
        }
      ],
      detailSection: {
        title: "Potenzielle Einsparungen nach Gebäudetyp",
        description: "Basierend auf real durchgeführten Heizungschecks und dokumentierten Optimierungsmaßnahmen",
        items: [
          {
            title: "Einfamilienhaus",
            subtitle: "bis 150m² Wohnfläche",
            details: [
              { label: "Jährliche Einsparung", value: "bis zu 300-600€", color: "green-600", size: "lg" },
              { label: "CO₂-Reduktion", value: "bis zu 0,5-1,2t", color: "green-600" },
              { label: "Check-Kosten", value: "150-200€", color: "gray-600" }
            ]
          },
          {
            title: "Zweifamilienhaus", 
            subtitle: "150-250m² Wohnfläche",
            details: [
              { label: "Jährliche Einsparung", value: "bis zu 500-900€", color: "green-600", size: "lg" },
              { label: "CO₂-Reduktion", value: "bis zu 0,8-1,8t", color: "green-600" },
              { label: "Check-Kosten", value: "200-250€", color: "gray-600" }
            ]
          },
          {
            title: "Mehrfamilienhaus",
            subtitle: "über 250m² Wohnfläche", 
            details: [
              { label: "Jährliche Einsparung", value: "bis zu 800-1.500€", color: "green-600", size: "lg" },
              { label: "CO₂-Reduktion", value: "bis zu 1,5-3,0t", color: "green-600" },
              { label: "Check-Kosten", value: "350-500€", color: "gray-600" }
            ]
          }
        ],
        tip: {
          title: "Expertentipp",
          description: "Die meisten Einsparungen werden bereits im ersten Jahr nach dem Heizungscheck erreicht. Weitere Optimierungen über die Jahre können die Einsparungen auf bis zu 25% steigern."
        }
      }
    },

    process: {
      title: "So läuft Ihr Heizungscheck ab",
      description: "Unser <strong>systematischer 3-Phasen-Prozess</strong> garantiert eine umfassende Analyse Ihrer Heizungsanlage mit sofortigen Optimierungsempfehlungen und <strong>rechtssicherer GEG-Dokumentation</strong>.",
      phases: [
        {
          number: 1,
          badge: "Phase 1",
          title: "Terminvereinbarung & Vor-Ort-Analyse",
          duration: "Dauer: 45-60 Minuten vor Ort",
          numberColor: "bg-primary-600",
          badgeStyle: "bg-primary-100 text-primary-800",
          durationColor: "primary-600",
          description: "Nach der <strong>unkomplizierten Terminvereinbarung</strong> kommt unser zertifizierter Energieberater zu Ihnen. Er führt eine detaillierte Untersuchung aller Heizungskomponenten durch – von Kessel über Pumpen bis hin zu Thermostatventilen.",
          checkList: {
            title: "Was wird geprüft",
            items: [
              "Sichtprüfung der gesamten Heizungsanlage",
              "Messung von Vor- und Rücklauftemperaturen", 
              "Kontrolle der Umwälzpumpen und Regelung",
              "Prüfung der Thermostatventile und Heizkörper",
              "Dokumentation der aktuellen Einstellungen"
            ]
          },
          image: {
            src: "/assets/images/heizungscheck-vorort.jpg",
            alt: "Energieberater prüft Heizungsanlage vor Ort beim Kunden",
            caption: "Vor-Ort beim Kunden"
          }
        },
        {
          number: 2,
          badge: "Phase 2", 
          title: "Datenauswertung & Analyse",
          duration: "Dauer: 2-3 Werktage",
          numberColor: "bg-green-600",
          badgeStyle: "bg-green-100 text-green-800",
          durationColor: "green-600",
          description: "In unserem Büro werden alle <strong>gemessenen Werte professionell ausgewertet</strong>. Wir vergleichen mit GEG-Vorgaben, berechnen Einsparpotenziale und entwickeln konkrete Optimierungsmaßnahmen für Ihre Anlage.",
          checkList: {
            title: "Was wird analysiert",
            items: [
              "Bewertung der aktuellen Heizungseffizienz",
              "Vergleich mit GEG-Anforderungen und Standards", 
              "Berechnung von Einsparpotenzialen",
              "Entwicklung von Optimierungsmaßnahmen",
              "Kostenschätzungen für Verbesserungen"
            ]
          },
          image: {
            src: "/assets/images/heizungscheck-auswertung.jpg",
            alt: "Professionelle Datenauswertung und Analyse der Heizungseffizienz",
            caption: "Professionelle Auswertung"
          }
        },
        {
          number: 3,
          badge: "Phase 3",
          title: "Ergebnisbericht & Beratung", 
          duration: "Übergabe + 30 Min. Beratung",
          numberColor: "bg-blue-600",
          badgeStyle: "bg-blue-100 text-blue-800",
          durationColor: "blue-600",
          description: "Sie erhalten einen <strong>detaillierten, GEG-konformen Bericht</strong> mit allen Ergebnissen. In einem persönlichen Beratungsgespräch erklären wir Ihnen die Optimierungsmöglichkeiten und unterstützen bei der Förderantragstellung.",
          checkList: {
            title: "Was Sie erhalten",
            items: [
              "Ausführlicher schriftlicher Heizungscheck-Bericht",
              "GEG-konforme Dokumentation für Behörden", 
              "Konkrete Handlungsempfehlungen mit Prioritäten",
              "Förderberatung und Unterstützung bei Anträgen"
            ]
          },
          image: {
            src: "/assets/images/heizungscheck-ergebnis.jpg",
            alt: "Persönliche Beratung und Übergabe des detaillierten Heizungscheck-Berichts",
            caption: "Detaillierter Bericht"
          }
        }
      ],
      cta: {
        title: "Bereit für Ihren Heizungscheck?",
        description: "Vereinbaren Sie jetzt einen unverbindlichen Termin und starten Sie in eine energieeffizientere Zukunft.",
        buttons: [
          {
            text: "Termin vereinbaren",
            icon: "phone",
            variant: "primary",
            onClick: () => window.open('tel:+49123456789', '_self')
          },
          {
            text: "Kostenlose Beratung",
            icon: "mail", 
            variant: "outline",
            onClick: () => window.open('mailto:info@energiesparkompass.de', '_self')
          }
        ]
      }
    }
  },

  seo: {
    name: "Heizungscheck 2.0",
    description: "Professioneller Heizungscheck nach GEG-Vorgaben für maximale Energieeffizienz",
    areaServed: ["Berlin", "Brandenburg"],
    additionalData: {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Heizungscheck Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Heizungscheck GEG",
              "description": "Gesetzlich vorgeschriebener Heizungscheck nach Gebäudeenergiegesetz"
            }
          }
        ]
      }
    }
  }
}