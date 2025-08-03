export const foerdermittelberatungConfig = {
  navigation: {
    showQuickCheck: false,
    ctaText: "Beratung",
    ctaAction: () => window.open('tel:+49123456789', '_self')
  },

  hero: {
    badge: {
      text: "Fördermittelberatung",
      variant: "primary",
      className: "bg-green-100 text-green-800 border-green-200"
    },
    title: {
      main: "Bis zu 15.000€",
      highlight: "Förderung sichern!"
    },
    subtitle: "Professionelle Beratung zu KfW, BAFA und regionalen Förderprogrammen",
    description: "Nutzen Sie alle verfügbaren Fördermittel optimal aus – wir kennen die Programme und unterstützen Sie bei der Antragstellung.",
    features: [
      {
        text: "KfW-Förderung",
        highlight: "bis zu 15.000€"
      },
      "BAFA-Zuschüsse für Wärmepumpen",
      "Regionale Förderprogramme Berlin/Brandenburg",
      "Komplette Antragsabwicklung"
    ],
    primaryAction: {
      text: "Fördercheck starten",
      icon: "currency",
      onClick: () => console.log("Fördercheck starten")
    },
    secondaryAction: {
      text: "Kostenlose Erstberatung",
      icon: "phone",
      onClick: () => window.open('tel:+49123456789', '_self')
    },
    image: {
      src: "/assets/images/foerdermittelberatung.png",
      alt: "Fördermittelberatung - Geld sparen bei Energiesanierung",
      overlay: "bg-gradient-to-br from-green-600/20 to-blue-600/10",
      content: {
        title: "Fördermittel & Zuschüsse",
        subtitle: "KfW • BAFA • Regionale Programme"
      }
    }
  },

  sections: {
    features: {
      title: "Welche Förderungen gibt es?",
      description: "Deutschland bietet zahlreiche <strong>Förderprogramme für Energiesanierungen</strong>. Wir kennen alle Programme und finden die <strong>optimale Förderkombination</strong> für Ihr Vorhaben.",
      items: [
        {
          icon: "currency",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          title: "KfW-Förderung",
          description: "Zinsgünstige Kredite und Zuschüsse für energetische Sanierungen. Bis zu 15.000€ für Einzelmaßnahmen oder 37.500€ für Komplettsanierung zum Effizienzhaus."
        },
        {
          icon: "fire",
          iconBg: "bg-orange-100", 
          iconColor: "text-orange-600",
          title: "BAFA-Zuschüsse",
          description: "Bis zu 70% Förderung für Wärmepumpen, Biomasseanlagen und Solarthermie. Zusätzliche Boni für Austausch alter Ölheizungen."
        },
        {
          icon: "home",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600", 
          title: "Regionale Programme",
          description: "Zusätzliche Förderungen von Berlin und Brandenburg für Energieberatung, Gebäudesanierung und erneuerbare Energien."
        }
      ],
      bottomContent: {
        title: "Warum professionelle Fördermittelberatung?",
        description: "Fördermittel sind komplex und ändern sich ständig. Unsere zertifizierten Energieberater kennen alle aktuellen Programme, Fristen und Kombinationsmöglichkeiten. So sichern Sie sich die maximale Förderung.",
        stats: [
          {
            value: "€15.000",
            label: "Maximale KfW-Förderung",
            bgColor: "bg-green-100",
            textColor: "green-600"
          },
          {
            value: "70%", 
            label: "BAFA-Förderung Wärmepumpe",
            bgColor: "bg-orange-100",
            textColor: "orange-600"
          },
          {
            value: "100%",
            label: "Erfolgsquote unserer Anträge",
            bgColor: "bg-blue-100",
            textColor: "blue-600"
          }
        ]
      }
    },

    stats: {
      title: "Fördermittelberatung in Zahlen",
      description: "Über <strong>200 erfolgreich begleitete Förderanträge</strong> mit einer Gesamtfördersumme von über <strong>2,5 Millionen Euro</strong> sprechen für unsere Expertise.",
      items: [
        {
          icon: "currency",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          value: "€2,5 Mio",
          valueColor: "green-600",
          label: "Bewilligte Fördersumme",
          sublabel: "Für unsere Kunden seit 2020"
        },
        {
          icon: "document",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600", 
          value: "200+",
          valueColor: "blue-600",
          label: "Erfolgreiche Förderanträge",
          sublabel: "KfW, BAFA und regionale Programme"
        },
        {
          icon: "check",
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          value: "100%",
          valueColor: "orange-600", 
          label: "Bewilligungsquote",
          sublabel: "Alle Anträge erfolgreich bewilligt"
        },
        {
          icon: "clock",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
          value: "14 Tage", 
          valueColor: "purple-600",
          label: "Durchschnittliche Bearbeitungszeit",
          sublabel: "Von Beratung bis Antragsstellung"
        }
      ],
      detailSection: {
        title: "Förderhöhen nach Maßnahmentyp",
        description: "Übersicht der maximalen Fördersummen für verschiedene energetische Sanierungsmaßnahmen",
        items: [
          {
            title: "Heizungstausch",
            subtitle: "Wärmepumpe, Biomasse, Brennstoffzelle",
            details: [
              { label: "BAFA-Zuschuss", value: "bis zu 70%", color: "green-600", size: "lg" },
              { label: "Maximale Fördersumme", value: "bis zu 21.000€", color: "green-600" },
              { label: "KfW-Kredit zusätzlich", value: "möglich", color: "blue-600" }
            ]
          },
          {
            title: "Gebäudehülle", 
            subtitle: "Dämmung, Fenster, Türen",
            details: [
              { label: "KfW-Zuschuss", value: "bis zu 20%", color: "green-600", size: "lg" },
              { label: "Maximale Fördersumme", value: "bis zu 12.000€", color: "green-600" },
              { label: "Pro Einzelmaßnahme", value: "bis zu 6.000€", color: "orange-600" }
            ]
          },
          {
            title: "Effizienzhaus",
            subtitle: "Komplettsanierung zum Standard", 
            details: [
              { label: "KfW-Zuschuss", value: "bis zu 37.500€", color: "green-600", size: "lg" },
              { label: "KfW-Kredit", value: "bis zu 150.000€", color: "blue-600" },
              { label: "Zinsvorteil", value: "bis zu 1,5% p.a.", color: "blue-600" }
            ]
          }
        ],
        tip: {
          title: "Förder-Tipp",
          description: "Die meisten Förderungen müssen VOR Beginn der Maßnahme beantragt werden. Eine frühzeitige Beratung ist daher essentiell für den Förder-Erfolg."
        }
      }
    },

    process: {
      title: "So erhalten Sie Ihre Förderung",
      description: "Unser <strong>4-Stufen-Prozess</strong> führt Sie sicher zur maximalen Förderung – von der ersten Beratung bis zur Auszahlung.",
      phases: [
        {
          number: 1,
          badge: "Schritt 1",
          title: "Kostenlose Erstberatung & Förderscan",
          duration: "Dauer: 30-45 Minuten",
          numberColor: "bg-green-600",
          badgeStyle: "bg-green-100 text-green-800",
          durationColor: "green-600",
          description: "In einem kostenlosen Beratungsgespräch analysieren wir Ihr Vorhaben und identifizieren alle verfügbaren Förderprogramme. Sie erhalten eine erste Einschätzung der möglichen Förderhöhe.",
          checkList: {
            title: "Was passiert",
            items: [
              "Analyse Ihres Sanierungsvorhabens",
              "Identifikation aller passenden Förderprogramme", 
              "Erste Förderhöhen-Einschätzung",
              "Aufklärung über Fristen und Voraussetzungen",
              "Kostenlose Ersteinschätzung der Erfolgschancen"
            ]
          },
          image: {
            src: "/assets/images/foerderberatung-erstberatung.jpg",
            alt: "Kostenlose Erstberatung zu Fördermitteln für Energiesanierung",
            caption: "Kostenlose Erstberatung"
          }
        },
        {
          number: 2,
          badge: "Schritt 2", 
          title: "Detailanalyse & Förderstrategie",
          duration: "Dauer: 1-2 Werktage",
          numberColor: "bg-blue-600",
          badgeStyle: "bg-blue-100 text-blue-800",
          durationColor: "blue-600",
          description: "Wir erstellen eine detaillierte Förderstrategie mit der optimalen Kombination aller verfügbaren Programme. Sie erhalten eine genaue Aufstellung der Förderhöhen und erforderlichen Unterlagen.",
          checkList: {
            title: "Ihre Unterlagen",
            items: [
              "Detaillierte Fördermittel-Strategie",
              "Genaue Berechnung der Förderhöhen", 
              "Zeitplan für die Antragsstellung",
              "Checkliste aller erforderlichen Unterlagen",
              "Kostenvoranschlag für unsere Dienstleistung"
            ]
          },
          image: {
            src: "/assets/images/foerderberatung-strategie.jpg",
            alt: "Detaillierte Förderstrategie und Berechnung der Fördermittel",
            caption: "Detaillierte Förderstrategie"
          }
        },
        {
          number: 3,
          badge: "Schritt 3",
          title: "Antragsstellung & Begleitung", 
          duration: "Dauer: 5-10 Werktage",
          numberColor: "bg-orange-600",
          badgeStyle: "bg-orange-100 text-orange-800",
          durationColor: "orange-600",
          description: "Wir übernehmen die komplette Antragsstellung bei KfW, BAFA und regionalen Fördergebern. Alle Unterlagen werden fachgerecht erstellt und fristgerecht eingereicht.",
          checkList: {
            title: "Unser Service",
            items: [
              "Komplette Antragsstellung bei allen Fördergebern",
              "Fachgerechte Erstellung aller Unterlagen", 
              "Fristgerechte Einreichung der Anträge",
              "Kommunikation mit den Förderstellen",
              "Laufende Information über den Bearbeitungsstand"
            ]
          },
          image: {
            src: "/assets/images/foerderberatung-antrag.jpg",
            alt: "Professionelle Antragsstellung bei KfW und BAFA",
            caption: "Professionelle Antragsstellung"
          }
        },
        {
          number: 4,
          badge: "Schritt 4",
          title: "Bewilligung & Auszahlung", 
          duration: "Nach Maßnahmenumsetzung",
          numberColor: "bg-purple-600",
          badgeStyle: "bg-purple-100 text-purple-800",
          durationColor: "purple-600",
          description: "Nach der Bewilligung begleiten wir Sie bei der Umsetzung und stellen die Auszahlungsanträge. Sie erhalten Ihre Förderung schnell und unkompliziert.",
          checkList: {
            title: "Bis zur Auszahlung",
            items: [
              "Begleitung bei der Maßnahmenumsetzung",
              "Kontrolle der förderfähigen Kosten", 
              "Erstellung der Verwendungsnachweise",
              "Auszahlungsanträge bei den Fördergebern",
              "Kommunikation bis zur finalen Auszahlung"
            ]
          },
          image: {
            src: "/assets/images/foerderberatung-auszahlung.jpg",
            alt: "Erfolgreiche Fördermittel-Auszahlung nach Sanierungsmaßnahme",
            caption: "Erfolgreiche Auszahlung"
          }
        }
      ],
      cta: {
        title: "Starten Sie Ihren Fördercheck!",
        description: "Vereinbaren Sie jetzt eine kostenlose Erstberatung und sichern Sie sich alle verfügbaren Fördermittel für Ihr Vorhaben.",
        buttons: [
          {
            text: "Kostenlose Erstberatung",
            icon: "phone",
            variant: "primary",
            onClick: () => window.open('tel:+49123456789', '_self')
          },
          {
            text: "Fördercheck starten",
            icon: "currency", 
            variant: "outline",
            onClick: () => console.log("Fördercheck starten")
          }
        ]
      }
    }
  },

  seo: {
    name: "Fördermittelberatung für Energiesanierung",
    description: "Professionelle Beratung zu KfW, BAFA und regionalen Förderprogrammen. Bis zu 15.000€ Förderung sichern.",
    areaServed: ["Berlin", "Brandenburg"],
    additionalData: {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Fördermittelberatung Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "KfW-Förderantrag",
              "description": "Professionelle Antragsstellung für KfW-Förderprogramme"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "BAFA-Förderantrag", 
              "description": "Antragsstellung für BAFA-Zuschüsse bei Heizungstausch"
            }
          }
        ]
      }
    }
  }
}