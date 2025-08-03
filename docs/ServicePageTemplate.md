# 🎨 Service Page Template System

Ein wiederverwendbares Template-System für Service-Landingpages, basierend auf der erfolgreichen Heizungscheck 2.0 Seite.

## 🚀 Warum ein Template-System?

**✅ Vorteile:**
- **Konsistente UX** - Alle Service-Seiten haben das gleiche Layout
- **Schnelle Entwicklung** - Neue Seiten in Minuten statt Stunden
- **Wartbarkeit** - Zentrale Updates wirken auf alle Seiten
- **Bewährte Patterns** - Conversion-optimierte Struktur
- **SEO-Ready** - Eingebaute Structured Data

## 📋 Template-Struktur

Das Template besteht aus **4 konfigurierbaren Bereichen:**

### 1. **Navigation**
```jsx
navigation: {
  showQuickCheck: false,
  ctaText: "Beratung",
  ctaAction: () => window.open('tel:+49123456789', '_self')
}
```

### 2. **Hero-Sektion** (SimpleHero)
```jsx
hero: {
  badge: { text: "Service-Name", variant: "primary" },
  title: { main: "Haupttitel", highlight: "Highlight" },
  subtitle: "Untertitel",
  description: "Beschreibung...",
  features: ["Feature 1", "Feature 2"],
  primaryAction: { text: "Aktion", icon: "icon", onClick: () => {} },
  secondaryAction: { text: "Aktion 2", icon: "icon", onClick: () => {} },
  image: { src: "/path/image.jpg", alt: "Alt text", overlay: "gradient" }
}
```

### 3. **Content-Sektionen**
```jsx
sections: {
  features: { /* 3-spaltige Feature-Übersicht */ },
  stats: { /* 4-spaltige Statistiken */ },
  process: { /* 3-4 Phasen Prozess */ },
  custom: [ /* Beliebige custom sections */ ]
}
```

### 4. **SEO-Konfiguration**
```jsx
seo: {
  name: "Service-Name",
  description: "Service-Beschreibung",
  areaServed: ["Berlin", "Brandenburg"],
  additionalData: { /* Schema.org data */ }
}
```

## 🛠️ Neue Service-Seite erstellen

### Schritt 1: Konfiguration erstellen
```jsx
// src/config/servicePages/meinServiceConfig.js
export const meinServiceConfig = {
  navigation: {
    showQuickCheck: false,
    ctaText: "Beratung"
  },
  
  hero: {
    badge: { text: "Mein Service", variant: "primary" },
    title: { main: "Service-Titel", highlight: "Benefit" },
    subtitle: "Kurze Beschreibung",
    description: "Detaillierte Beschreibung des Services...",
    primaryAction: {
      text: "Service starten",
      icon: "lightning",
      onClick: () => console.log("Service starten")
    },
    image: {
      src: "/assets/images/mein-service-hero.jpg",
      alt: "Service-Bild",
      overlay: "bg-gradient-to-br from-primary-600/20 to-blue-600/10"
    }
  },
  
  sections: {
    features: {
      title: "Was bietet der Service?",
      description: "Service-Beschreibung mit <strong>Highlights</strong>...",
      items: [
        {
          icon: "chart",
          iconBg: "bg-primary-100",
          iconColor: "text-primary-600",
          title: "Feature 1",
          description: "Feature-Beschreibung..."
        },
        // ... weitere Features
      ]
    },
    
    stats: {
      title: "Service in Zahlen",
      description: "Über <strong>X durchgeführte</strong> Services...",
      items: [
        {
          icon: "check",
          value: "100+",
          label: "Erfolgreiche Projekte",
          sublabel: "Seit 2020"
        },
        // ... weitere Stats
      ]
    },
    
    process: {
      title: "So läuft der Service ab",
      description: "Unser <strong>3-Schritt-Prozess</strong>...",
      phases: [
        {
          number: 1,
          badge: "Schritt 1",
          title: "Erstberatung",
          duration: "30 Min kostenlos",
          description: "Beschreibung des ersten Schritts...",
          checkList: {
            title: "Was passiert",
            items: ["Punkt 1", "Punkt 2", "Punkt 3"]
          },
          image: {
            src: "/assets/images/step1.jpg",
            alt: "Erster Schritt",
            caption: "Kostenlose Beratung"
          }
        },
        // ... weitere Phasen
      ],
      cta: {
        title: "Bereit zu starten?",
        description: "Vereinbaren Sie jetzt...",
        buttons: [
          {
            text: "Termin buchen",
            icon: "phone",
            variant: "primary",
            onClick: () => {}
          }
        ]
      }
    }
  },
  
  seo: {
    name: "Mein Service",
    description: "Service-Beschreibung für SEO",
    areaServed: ["Berlin", "Brandenburg"]
  }
}
```

### Schritt 2: Seiten-Komponente erstellen
```jsx
// src/pages/MeinServicePage.jsx
import ServicePageTemplate from '../components/ServicePageTemplate'
import { meinServiceConfig } from '../config/servicePages/meinServiceConfig'

const MeinServicePage = ({ onBackToMain }) => {
  return (
    <ServicePageTemplate 
      config={meinServiceConfig}
      onBackToMain={onBackToMain}
    />
  )
}

export default MeinServicePage
```

### Schritt 3: In App.jsx einbinden
```jsx
// src/App.jsx
import MeinServicePage from './pages/MeinServicePage'

// ... im Component
{currentPage === 'mein-service' && (
  <MeinServicePage onBackToMain={handleBackToMain} />
)}
```

**Das war's! 🎉** Neue Service-Seite fertig in wenigen Minuten.

## 📊 Verfügbare Sektionen

### **Features Section**
```jsx
sections: {
  features: {
    title: "Section-Titel",
    description: "Section-Beschreibung mit <strong>HTML</strong>",
    items: [
      {
        icon: "thermometer" | "chart" | "document" | "fire" | "currency" | ...,
        iconBg: "bg-primary-100" | "bg-green-100" | "bg-blue-100" | ...,
        iconColor: "text-primary-600" | "text-green-600" | ...,
        title: "Feature-Titel",
        description: "Feature-Beschreibung"
      }
    ],
    bottomContent: {
      title: "Zusätzlicher Bereich",
      description: "Beschreibung...",
      stats: [
        {
          value: "15%",
          label: "Einsparung",
          bgColor: "bg-primary-100",
          textColor: "primary-600"
        }
      ]
    }
  }
}
```

### **Stats Section**
```jsx
sections: {
  stats: {
    title: "Zahlen & Fakten",
    description: "Beschreibung der Statistiken...",
    items: [
      {
        icon: "currency",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        value: "€2,5 Mio",
        valueColor: "green-600",
        label: "Bewilligte Summe",
        sublabel: "Seit 2020"
      }
    ],
    detailSection: {
      title: "Detaillierte Aufschlüsselung",
      description: "Weitere Details...",
      items: [
        {
          title: "Kategorie 1",
          subtitle: "Untertitel",
          details: [
            { label: "Metrik", value: "Wert", color: "green-600", size: "lg" }
          ]
        }
      ],
      tip: {
        title: "Expertentipp",
        description: "Tipp-Text..."
      }
    }
  }
}
```

### **Process Section**
```jsx
sections: {
  process: {
    title: "Prozess-Titel",
    description: "Prozess-Beschreibung...",
    phases: [
      {
        number: 1,
        badge: "Phase 1",
        title: "Phasen-Titel",
        duration: "Zeitangabe",
        numberColor: "bg-primary-600",
        badgeStyle: "bg-primary-100 text-primary-800",
        durationColor: "primary-600",
        description: "Phasen-Beschreibung...",
        checkList: {
          title: "Was passiert",
          items: ["Punkt 1", "Punkt 2"]
        },
        image: {
          src: "/path/image.jpg",
          alt: "Alt-Text",
          caption: "Bild-Beschreibung"
        }
      }
    ],
    cta: {
      title: "CTA-Titel",
      description: "CTA-Beschreibung",
      buttons: [
        {
          text: "Button-Text",
          icon: "phone",
          variant: "primary",
          onClick: () => {}
        }
      ]
    }
  }
}
```

### **Custom Sections**
```jsx
sections: {
  custom: [
    {
      className: "py-16 lg:py-20 bg-blue-50",
      content: (
        <div>
          {/* Beliebiger JSX-Content */}
          <h2>Custom Section</h2>
          <p>Eigener Inhalt...</p>
        </div>
      )
    }
  ]
}
```

## 🎨 Design-Tokens

### **Verfügbare Icons:**
```
thermometer, chart, document, fire, currency, check, 
lightning, phone, mail, home, clock, edit, search,
plus, minus, warning, error, info, spinner
```

### **Farb-Varianten:**
```
primary-100, primary-600, green-100, green-600,
blue-100, blue-600, orange-100, orange-600,
purple-100, purple-600, amber-100, amber-600
```

### **Button-Varianten:**
```
primary, secondary, outline, ghost, success, danger, link
```

## 📝 Best Practices

### **Content-Struktur:**
1. **Hero:** Klarer Nutzen + CTA
2. **Features:** 3 Haupt-Benefits
3. **Stats:** 4 Key-Metriken
4. **Process:** 3-4 Schritte
5. **CTA:** Wiederholung der Hauptaktion

### **Copy-Writing:**
- **Benefits über Features** - Was hat der Kunde davon?
- **Konkrete Zahlen** - "15% Einsparung" statt "deutliche Einsparung"
- **Social Proof** - Erfahrungen, Bewertungen, Anzahl Kunden
- **Urgency/Scarcity** - Deadlines, begrenzte Verfügbarkeit

### **Bilder:**
- **Hochauflösend** - Mindestens 1200px Breite
- **WebP-Format** - Für beste Performance
- **Alt-Texte** - Immer aussagekräftig für SEO
- **Aspect Ratio** - 16:9 für Hero, 4:3 für Process

### **SEO:**
- **Strukturierte Daten** - Automatisch durch Template
- **H1-H6 Hierarchie** - Korrekte Überschriften-Struktur
- **Keywords** - In Titeln und Beschreibungen
- **Meta-Description** - In SEO-Config definieren

## 🔧 Erweiterte Konfiguration

### **Conditional Sections:**
```jsx
// Sektionen optional machen
sections: {
  features: hasFeatures ? featuresConfig : undefined,
  stats: showStats ? statsConfig : undefined,
  process: needsProcess ? processConfig : undefined
}
```

### **Dynamic Content:**
```jsx
// Inhalte basierend auf Props anpassen
const generateConfig = (serviceType) => ({
  hero: {
    title: {
      main: serviceType === 'premium' ? 'Premium Service' : 'Standard Service'
    }
  }
})
```

### **Custom Hooks Integration:**
```jsx
// In der Konfiguration
primaryAction: {
  text: "Service buchen",
  onClick: () => {
    // Custom Logic hier
    analytics.track('service_cta_clicked')
    navigateToBooking()
  }
}
```

## 🚀 Nächste Schritte

1. **Weitere Templates** - Wizard-Pages, Vergleichsseiten
2. **A/B Testing** - Verschiedene Hero-Varianten
3. **Analytics Integration** - Event-Tracking für CTAs
4. **Performance** - Lazy Loading für Bilder
5. **Animations** - Scroll-basierte Animations

---

**Entwickelt für maximale Wiederverwendbarkeit und Effizienz** 🌟