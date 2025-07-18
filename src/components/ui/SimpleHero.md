# SimpleHero Component

Eine einfachere Hero-Komponente ohne SVG-Diagonal-Element und Trust-Signale für cleane, fokussierte Landingpages.

## 🎯 Wann verwenden?

**SimpleHero verwenden für:**
- Einfache Landingpages
- Service-spezifische Seiten (wie Heizungscheck)
- Wenn der Fokus nur auf dem Hauptinhalt liegen soll
- Weniger komplexe Layouts

**ModernHero verwenden für:**
- Hauptseite mit vielen Trust-Signalen
- Komplexere Hero-Bereiche mit Bewertungen/Zertifizierungen
- Wenn das SVG-Diagonal-Element gewünscht ist

## 🚫 Was SimpleHero NICHT hat

- ❌ **SVG-Diagonal-Element** (Blitzformmaske)
- ❌ **Trust-Signale** (Google Bewertungen, Zahlen, Zertifizierungen)
- ❌ **Asymmetrisches Layout** mit SVG-Übergang

## ✅ Was SimpleHero hat

- ✅ **Sauberes Layout** mit Grid-System
- ✅ **Badge-Support** für Labels
- ✅ **Title mit Highlights** (grüne Akzente)
- ✅ **Features-Liste** mit Checkmarks
- ✅ **Action-Buttons** (Primary/Secondary)
- ✅ **Bild-Integration** mit Overlay
- ✅ **Responsive Design**
- ✅ **Centered-Option** für zentrierte Layouts

## 📋 Props

### Basis-Props (wie ModernHero)
```jsx
badge={{
  text: "Service-Label",
  variant: "primary" | "secondary",
  className: "custom-styling"
}}

title="String" | {
  main: "Haupttitel",
  highlight: "Grüner Akzent"
}

subtitle="Untertitel"
description="Beschreibung..."

features={[
  "Einfacher String",
  {
    text: "Text mit",
    highlight: "Highlight"
  }
]}

primaryAction={{
  text: "Hauptaktion",
  icon: "icon-name",
  onClick: () => {}
}}

secondaryAction={{
  text: "Zweite Aktion", 
  icon: "icon-name",
  onClick: () => {}
}}
```

### Unique Props
```jsx
// Zentriertes Layout (optional)
centered={true} // Standard: false

// Bild (optional, aber mit rundem Design)
image={{
  src: "/path/to/image.jpg",
  alt: "Alt-Text",
  overlay: "bg-gradient-to-br from-primary-600/20 to-primary-700/10",
  content: {
    title: "Overlay-Titel",
    subtitle: "Overlay-Untertitel"
  }
}}
```

## 🚀 Verwendung

### Basis-Beispiel
```jsx
import { SimpleHero } from '../components/ui'

<SimpleHero 
  title="Heizungscheck 2.0"
  subtitle="Effiziente Heizungsoptimierung"
  description="Professionelle Analyse für maximale Effizienz..."
  primaryAction={{
    text: "Check starten",
    icon: "fire",
    onClick: () => navigate('/check')
  }}
/>
```

### Mit Bild und Features
```jsx
<SimpleHero 
  badge={{
    text: "Neu",
    variant: "primary"
  }}
  title={{
    main: "Service-Name",
    highlight: "Ihr Vorteil"
  }}
  subtitle="Kurze Beschreibung"
  description="Detaillierte Erklärung des Services..."
  features={[
    "Zertifizierte Beratung",
    {
      text: "Bis zu 15%",
      highlight: "Einsparungen"
    },
    "Vor-Ort-Analyse"
  ]}
  primaryAction={{
    text: "Jetzt starten",
    icon: "lightning",
    onClick: () => {}
  }}
  secondaryAction={{
    text: "Mehr erfahren",
    icon: "info",
    onClick: () => {}
  }}
  image={{
    src: "/assets/service-hero.jpg",
    alt: "Service-Bild",
    overlay: "bg-gradient-to-br from-primary-600/20 to-primary-700/10",
    content: {
      title: "Service-Bereich",
      subtitle: "Kompetenz • Qualität • Erfahrung"
    }
  }}
/>
```

### Zentriertes Layout
```jsx
<SimpleHero 
  centered={true}
  title="Zentrierter Titel"
  description="Für Seiten wo alles mittig stehen soll..."
  primaryAction={{
    text: "Hauptaktion",
    onClick: () => {}
  }}
/>
```

## 🎨 Design-Unterschiede zu ModernHero

### Layout
```
ModernHero:     [Text] [SVG-Diagonal] [Bild]
SimpleHero:     [Text]               [Bild]
```

### Struktur
- **Einfacheres Grid-Layout** ohne SVG-Übergang
- **Rundere Bilder** mit `rounded-xl` und Schatten
- **Flexiblere Zentrierung** mit `centered` prop
- **Cleaneres Design** ohne zusätzliche Elemente

### Abstände
- **Gleichmäßige Padding** ohne asymmetrische Anpassungen
- **Standard-Grids** ohne spezielle SVG-Berücksichtigung
- **Konsistente Margins** für alle Elemente

## 📱 Responsive Verhalten

- **Mobile**: Einspaltig, zentriert
- **Tablet**: Einspaltig mit größerer Schrift
- **Desktop**: Zweispaltig mit Grid-Layout
- **Bild**: Erscheint auf Mobile unten, Desktop rechts

## ✨ Beispiel-Vergleich

### ModernHero (komplex)
```jsx
<ModernHero 
  title="Energieberater Berlin"
  trustSignals={[...]} // ← Zusätzliche Komplexität
  // SVG-Diagonal wird automatisch gerendert
/>
```

### SimpleHero (einfach)
```jsx
<SimpleHero 
  title="Heizungscheck 2.0"
  // Kein SVG, keine Trust-Signale
  // Fokus nur auf Hauptinhalt
/>
```

## 🎯 Best Practices

1. **SimpleHero für Service-Pages** - Heizungscheck, Einzelberatungen
2. **ModernHero für Hauptseite** - Mit Trust-Signalen und Bewertungen
3. **Centered-Layout sparsam nutzen** - Nur wenn wirklich passend
4. **Bilder hochwertig** - Runde Ecken erfordern gute Bildqualität
5. **Features begrenzen** - Maximal 4 Punkte für beste Wirkung
6. **Klare Actions** - Primary-Action sollte immer vorhanden sein 