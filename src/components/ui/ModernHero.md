# ModernHero Component

Eine moderne, wiederverwendbare Hero-Komponente basierend auf dem Design der Hauptseite.

## 🎯 Features

- **Weißer Hintergrund** mit SVG-Diagonal-Element für modernen Look
- **Konfigurierbare Inhalte** für verschiedene Seiten
- **Grüne Akzente** nur bei spezifischen Elementen (konsistent mit Design-System)
- **Responsive Design** für alle Bildschirmgrößen
- **Trust-Signale** für erhöhte Glaubwürdigkeit
- **Flexible Bild-Integration** mit Overlay-Optionen

## 📋 Props

### Badge (optional)
```jsx
badge={{
  text: "Heizungscheck 2.0",
  variant: "secondary", // 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  className: "bg-primary-100 text-primary-800 border-primary-200"
}}
```

### Title (required)
```jsx
// Einfacher String
title="Mein Titel"

// Objekt mit Highlight
title={{
  main: "Effizienz prüfen,",
  highlight: "Gesetz erfüllen!" // Wird in Primary-Grün dargestellt
}}
```

### Subtitle (optional)
```jsx
subtitle="Professionelle Heizungsoptimierung für maximale Effizienz"
```

### Description (optional)
```jsx
description="Mit dem Heizungscheck 2.0 bringen Sie Ihre Heizungsanlage auf den Prüfstand – schnell, unkompliziert und mit echtem Mehrwert."
```

### Features (optional)
```jsx
features={[
  // Einfacher String
  "Zertifizierte Energieberater vor Ort",
  
  // Objekt mit Highlight
  {
    text: "Bis zu 15% Energiekosteneinsparung durch",
    highlight: "professionelle Optimierung"
  }
]}
```

### Actions (optional)
```jsx
primaryAction={{
  text: "Heizungscheck starten",
  icon: "fire", // Icon-Name aus der Icon-Bibliothek
  onClick: () => console.log("Primary Action"),
  className: "custom-classes" // Optional
}}

secondaryAction={{
  text: "Beratung anfordern",
  icon: "phone",
  onClick: () => window.open('tel:+49123456789', '_self')
}}
```

### Trust Signals (optional)
```jsx
trustSignals={[
  // Bewertung mit Sternen
  {
    rating: "5.0",
    text: "Google Bewertungen"
  },
  
  // Nummer mit Text
  {
    number: "1000+",
    text: "durchgeführte Checks"
  },
  
  // Zertifizierung
  {
    certification: "GEG",
    text: "zertifiziert"
  }
]}
```

### Image (optional)
```jsx
image={{
  src: "/assets/images/heizungscheck-hero.jpg",
  alt: "Moderne Heizungsanlage", // Für Accessibility
  overlay: "bg-gradient-to-br from-primary-600/20 to-primary-700/10", // Tailwind-Klassen
  content: {
    title: "Heizungsoptimierung & Effizienz",
    subtitle: "Wärmepumpen • Hydraulischer Abgleich • GEG-Konformität"
  }
}}
```

## 🚀 Verwendung

### Basis-Beispiel
```jsx
import { ModernHero } from '../components/ui'

<ModernHero 
  title="Mein Service"
  subtitle="Professionelle Beratung"
  description="Beschreibung des Services..."
  primaryAction={{
    text: "Jetzt starten",
    onClick: () => console.log("Started")
  }}
/>
```

### Vollständiges Beispiel
```jsx
<ModernHero 
  badge={{
    text: "Neu",
    variant: "primary"
  }}
  title={{
    main: "Energieberatung",
    highlight: "Berlin Brandenburg"
  }}
  subtitle="Professionelle Beratung für Ihr Zuhause"
  description="Zertifizierte Energieberatung für maximale Effizienz..."
  features={[
    {
      text: "Zertifizierte",
      highlight: "Energieberater"
    },
    "Vor-Ort-Analyse",
    "Förderberatung"
  ]}
  primaryAction={{
    text: "Beratung starten",
    icon: "lightning",
    onClick: () => navigate('/konfigurator')
  }}
  secondaryAction={{
    text: "Mehr erfahren",
    icon: "info",
    onClick: () => scrollToSection('features')
  }}
  trustSignals={[
    {
      rating: "5.0",
      text: "Google Bewertungen"
    },
    {
      number: "500+",
      text: "erfolgreiche Projekte"
    },
    {
      certification: "ISO 9001",
      text: "zertifiziert"
    }
  ]}
  image={{
    src: "/assets/images/hero-image.jpg",
    alt: "Energieeffizientes Haus",
    overlay: "bg-gradient-to-br from-primary-600/20 to-primary-700/10",
    content: {
      title: "Energieeffizienz",
      subtitle: "Photovoltaik • Wärmepumpen • Dämmung"
    }
  }}
/>
```

## 🎨 Design-Prinzipien

### Farbschema
- **Haupthintergrund**: Weiß für sauberen, modernen Look
- **Akzente**: Primary-Grün nur für Highlights und wichtige Elemente
- **Text**: Grau-Abstufungen für gute Lesbarkeit
- **Buttons**: Primary-Grün für Hauptaktion, Grau für Sekundäraktion

### Typography
- **Titel**: Große, fette Schrift mit optionalem grünen Highlight
- **Untertitel**: Mittlere Größe, semibold
- **Beschreibung**: Normale Größe, gut lesbar
- **Features**: Kleine Schrift mit grünen Checkmarks

### Layout
- **Responsive**: Mobile-first Ansatz
- **Asymmetrisch**: Linke Seite Text, rechte Seite Bild
- **SVG-Element**: Diagonaler Übergang für modernen Look
- **Whitespace**: Großzügige Abstände für bessere Lesbarkeit

## 🔧 Anpassungen

### Eigene Klassen
```jsx
<ModernHero 
  className="my-custom-hero"
  // ... andere Props
/>
```

### Button-Styling
```jsx
primaryAction={{
  text: "Custom Button",
  className: "bg-red-600 hover:bg-red-700", // Überschreibt Standard-Styling
  onClick: () => {}
}}
```

### Badge-Styling
```jsx
badge={{
  text: "Special",
  className: "bg-yellow-100 text-yellow-800 border-yellow-200"
}}
```

## 📱 Responsive Verhalten

- **Mobile**: Einspaltig, zentrierter Text
- **Tablet**: Noch einspaltig, aber größere Schrift
- **Desktop**: Zweispaltig mit Bild rechts
- **Large Desktop**: Maximale Breite mit optimalen Proportionen

## ♿ Accessibility

- **Semantische HTML-Struktur** mit korrekten Überschriften
- **Alt-Texte** für Bilder
- **Keyboard-Navigation** für alle interaktiven Elemente
- **Fokus-Indikatoren** für bessere Bedienbarkeit
- **Kontraste** erfüllen WCAG-Standards

## 🎯 Best Practices

1. **Titel kurz halten** - Maximal 2 Zeilen
2. **Highlight sparsam nutzen** - Nur für wichtigste Begriffe
3. **Features begrenzen** - Maximal 4-5 Punkte
4. **Bilder optimieren** - WebP-Format für bessere Performance
5. **Actions klar definieren** - Eindeutige Call-to-Actions
6. **Trust-Signale relevant** - Nur echte, überprüfbare Daten 