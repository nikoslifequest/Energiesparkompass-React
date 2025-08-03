export const hydraulischerAbgleichConfig = {
  navigation: {
    showQuickCheck: false,
    ctaText: "Kostenloses Angebot",
    ctaAction: () => window.open('tel:+49123456789', '_self')
  },

  hero: {
    badge: {
      text: "BAFA-Förderfähig",
      variant: "primary",
      className: "bg-orange-100 text-orange-800 border-orange-200"
    },
    title: {
      main: "Hydraulischer Abgleich",
      highlight: "bis zu 70% gefördert!"
    },
    subtitle: "Professionelle Heizungsoptimierung für maximale Effizienz und Komfort",
    description: "Sparen Sie bis zu 15% Heizkosten durch optimale Heizwasserverteilung. BAFA-gefördert mit bis zu 70% Zuschuss auf die Durchführung.",
    features: [
      {
        text: "BAFA-Förderung",
        highlight: "bis zu 70%"
      },
      "15% Heizkosten-Einsparung möglich",
      "Verbesserter Wohnkomfort",
      "Fachgerechte Durchführung nach VDI 2073"
    ],
    primaryAction: {
      text: "Angebot anfordern",
      icon: "wrench",
      onClick: () => console.log("Hydraulischer Abgleich anfragen")
    },
    secondaryAction: {
      text: "Kostenlose Beratung",
      icon: "phone",
      onClick: () => window.open('tel:+49123456789', '_self')
    },
    image: {
      src: "/assets/images/hydraulischer-abgleich-hero.jpg",
      alt: "Fachmann führt hydraulischen Abgleich an Heizkörperventil durch",
      overlay: "bg-gradient-to-br from-orange-600/20 to-red-600/10",
      content: {
        title: "Heizungsoptimierung & Effizienz",
        subtitle: "Hydraulischer Abgleich • Ventiltausch • Pumpenoptimierung"
      }
    }
  },

  sections: {
    features: {
      title: "Was ist ein hydraulischer Abgleich?",
      description: "Der <strong>hydraulische Abgleich</strong> ist eine präzise Einstellung Ihrer Heizungsanlage, die jedem Heizkörper exakt die <strong>benötigte Wassermenge</strong> zuteilt. Das Ergebnis: <strong>gleichmäßige Wärme, weniger Verbrauch, mehr Komfort</strong>.",
      items: [
        {
          icon: "thermometer",
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          title: "Optimale Wärmeverteilung",
          description: "Gleichmäßige Temperatur in allen Räumen durch präzise Volumenstromeinstellung an jedem Heizkörper."
        },
        {
          icon: "currency",
          iconBg: "bg-green-100", 
          iconColor: "text-green-600",
          title: "Bis zu 15% Energieeinsparung",
          description: "Reduzierte Heizkosten durch optimierte Systemeffizienz und vermiedene Überhitzung einzelner Räume."
        },
        {
          icon: "wrench",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600", 
          title: "BAFA-geförderte Maßnahme",
          description: "Bis zu 70% Förderung als Einzelmaßnahme oder Teil einer umfassenden Heizungsmodernisierung."
        }
      ],
      bottomContent: {
        title: "Wann ist ein hydraulischer Abgleich sinnvoll?",
        description: "Ein hydraulischer Abgleich ist besonders effektiv bei ungleichmäßiger Wärmeverteilung, hohen Heizkosten oder nach Sanierungsmaßnahmen. Er ist Voraussetzung für viele BAFA-Förderungen.",
        stats: [
          {
            value: "15%",
            label: "Energieeinsparung möglich",
            bgColor: "bg-green-100",
            textColor: "green-600"
          },
          {
            value: "70%", 
            label: "BAFA-Förderung",
            bgColor: "bg-orange-100",
            textColor: "orange-600"
          },
          {
            value: "100%",
            label: "Mehr Wohnkomfort",
            bgColor: "bg-blue-100",
            textColor: "blue-600"
          }
        ]
      }
    },

    stats: {
      title: "Hydraulischer Abgleich in Zahlen",
      description: "Über <strong>500 durchgeführte hydraulische Abgleiche</strong> mit einer durchschnittlichen <strong>Energieeinsparung von 12%</strong> sprechen für unsere Kompetenz.",
      items: [
        {
          icon: "wrench",
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          value: "500+",
          valueColor: "orange-600",
          label: "Abgleiche durchgeführt",
          sublabel: "Seit 2020 in Berlin & Brandenburg"
        },
        {
          icon: "currency",
          iconBg: "bg-green-100",
          iconColor: "text-green-600", 
          value: "12%",
          valueColor: "green-600",
          label: "Durchschnittliche Einsparung",
          sublabel: "Bei unseren Kunden gemessen"
        },
        {
          icon: "clock",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          value: "4-6h",
          valueColor: "blue-600", 
          label: "Durchführungszeit",
          sublabel: "Je nach Anlagengröße"
        },
        {
          icon: "check",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
          value: "100%", 
          valueColor: "purple-600",
          label: "VDI 2073 konform",
          sublabel: "Nach aktueller Norm"
        }
      ],
      detailSection: {
        title: "Kosten und Förderungen nach Gebäudetyp",
        description: "Übersicht der Durchführungskosten und möglichen BAFA-Förderungen",
        items: [
          {
            title: "Einfamilienhaus",
            subtitle: "bis 10 Heizkörper",
            details: [
              { label: "Gesamtkosten", value: "800-1.200€", color: "gray-600", size: "lg" },
              { label: "BAFA-Förderung", value: "bis zu 70%", color: "green-600" },
              { label: "Eigenanteil ab", value: "240€", color: "blue-600" },
              { label: "Jährliche Einsparung", value: "150-300€", color: "orange-600" }
            ]
          },
          {
            title: "Mehrfamilienhaus", 
            subtitle: "11-20 Heizkörper",
            details: [
              { label: "Gesamtkosten", value: "1.200-2.000€", color: "gray-600", size: "lg" },
              { label: "BAFA-Förderung", value: "bis zu 70%", color: "green-600" },
              { label: "Eigenanteil ab", value: "360€", color: "blue-600" },
              { label: "Jährliche Einsparung", value: "250-500€", color: "orange-600" }
            ]
          },
          {
            title: "Größere Objekte",
            subtitle: "über 20 Heizkörper", 
            details: [
              { label: "Gesamtkosten", value: "ab 2.000€", color: "gray-600", size: "lg" },
              { label: "BAFA-Förderung", value: "bis zu 70%", color: "green-600" },
              { label: "Eigenanteil ab", value: "600€", color: "blue-600" },
              { label: "Jährliche Einsparung", value: "400-800€", color: "orange-600" }
            ]
          }
        ],
        tip: {
          title: "Förder-Tipp",
          description: "Der hydraulische Abgleich ist oft Voraussetzung für andere BAFA-Förderungen wie Wärmepumpen oder Heizungsoptimierung. Lassen Sie sich vorab beraten!"
        }
      }
    },

    process: {
      title: "So läuft Ihr hydraulischer Abgleich ab",
      description: "Unser <strong>systematischer 3-Phasen-Prozess</strong> garantiert eine fachgerechte Durchführung nach VDI 2073 mit messbaren Ergebnissen.",
      phases: [
        {
          number: 1,
          badge: "Phase 1",
          title: "Bestandsaufnahme & Berechnung",
          duration: "Vor-Ort-Termin: 1-2 Stunden",
          numberColor: "bg-orange-600",
          badgeStyle: "bg-orange-100 text-orange-800",
          durationColor: "orange-600",
          description: "Unsere Fachkräfte nehmen Ihre Heizungsanlage genau unter die Lupe und berechnen die optimalen Volumenströme für jeden Heizkörper nach der aktuellen VDI 2073.",
          checkList: {
            title: "Was wird erfasst",
            items: [
              "Aufmaß aller Heizkörper und Rohrleitungen",
              "Heizlastberechnung nach DIN EN 12831",
              "Dokumentation der bestehenden Einstellungen",
              "Berechnung der optimalen Volumenströme",
              "Erstellung des Abgleichskonzepts"
            ]
          },
          image: {
            src: "/assets/images/hydraulischer-abgleich-bestandsaufnahme.jpg",
            alt: "Fachkraft bei der Bestandsaufnahme der Heizungsanlage",
            caption: "Professionelle Bestandsaufnahme"
          }
        },
        {
          number: 2,
          badge: "Phase 2", 
          title: "Durchführung & Einstellung",
          duration: "Arbeitszeit: 3-5 Stunden",
          numberColor: "bg-blue-600",
          badgeStyle: "bg-blue-100 text-blue-800",
          durationColor: "blue-600",
          description: "Präzise Einstellung aller Thermostatventile und der Umwälzpumpe entsprechend der Berechnungen. Bei Bedarf werden voreinstellbare Ventile eingebaut.",
          checkList: {
            title: "Durchgeführte Arbeiten",
            items: [
              "Einstellung aller Thermostatventile",
              "Optimierung der Umwälzpumpen-Einstellungen",
              "Einbau voreinstellbarer Ventile (bei Bedarf)", 
              "Entlüftung der gesamten Anlage",
              "Funktionstest und Feinjustierung"
            ]
          },
          image: {
            src: "/assets/images/hydraulischer-abgleich-durchfuehrung.jpg",
            alt: "Präzise Einstellung der Thermostatventile beim hydraulischen Abgleich",
            caption: "Fachgerechte Durchführung"
          }
        },
        {
          number: 3,
          badge: "Phase 3",
          title: "Dokumentation & Übergabe", 
          duration: "Abschlussdokumentation",
          numberColor: "bg-green-600",
          badgeStyle: "bg-green-100 text-green-800",
          durationColor: "green-600",
          description: "Sie erhalten eine vollständige Dokumentation der durchgeführten Arbeiten inklusive aller für die BAFA-Förderung erforderlichen Nachweise.",
          checkList: {
            title: "Ihre Unterlagen",
            items: [
              "Vollständiges Abgleichsprotokoll nach VDI 2073",
              "BAFA-fähige Fachunternehmererklärung",
              "Dokumentation aller Ventileinstellungen",
              "Anleitung für optimalen Anlagenbetrieb",
              "Empfehlungen für weitere Optimierungen"
            ]
          },
          image: {
            src: "/assets/images/hydraulischer-abgleich-dokumentation.jpg",
            alt: "Übergabe der vollständigen Abgleichsdokumentation",
            caption: "Vollständige Dokumentation"
          }
        }
      ],
      cta: {
        title: "Starten Sie Ihren hydraulischen Abgleich!",
        description: "Nutzen Sie die BAFA-Förderung von bis zu 70% und optimieren Sie Ihre Heizungsanlage nachhaltig.",
        buttons: [
          {
            text: "Kostenloses Angebot",
            icon: "wrench",
            variant: "primary",
            onClick: () => console.log("Hydraulischer Abgleich anfragen")
          },
          {
            text: "Beratung anfordern",
            icon: "phone", 
            variant: "outline",
            onClick: () => window.open('tel:+49123456789', '_self')
          }
        ]
      }
    }
  },

  seo: {
    name: "Hydraulischer Abgleich Berlin Brandenburg",
    description: "Professioneller hydraulischer Abgleich mit bis zu 70% BAFA-Förderung. Bis zu 15% Heizkosten sparen durch optimierte Wärmeverteilung.",
    areaServed: ["Berlin", "Brandenburg"],
    additionalData: {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hydraulischer Abgleich Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hydraulischer Abgleich nach VDI 2073",
              "description": "BAFA-förderfähiger hydraulischer Abgleich für optimale Heizungseffizienz"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Heizungsoptimierung", 
              "description": "Umfassende Optimierung der Heizungsanlage mit hydraulischem Abgleich"
            }
          }
        ]
      }
    }
  }
}