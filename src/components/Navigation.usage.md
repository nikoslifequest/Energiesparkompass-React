# Navigation Component - Modulare Wiederverwendung

Die Navigation-Komponente ist vollständig modular und kann auf allen Unterseiten verwendet werden.

## 🎯 **Standard-Verwendung (Hauptseite)**

```jsx
import { Navigation } from '../components'

function HomePage() {
  return (
    <div>
      <Navigation showQuickCheck={true} />
      {/* Rest der Seite */}
    </div>
  )
}
```

## 📄 **Verwendung auf Unterseiten ohne Quick-Check**

```jsx
import { Navigation } from '../components'

function AboutPage() {
  return (
    <div>
      <Navigation 
        showQuickCheck={false}
        ctaText="Kontakt"
        ctaAction={() => window.location.href = '/kontakt'}
      />
      {/* Seiteninhalt */}
    </div>
  )
}
```

## 🔧 **Benutzerdefinierte Navigation**

```jsx
import { Navigation } from '../components'

function ServicePage() {
  const customNavItems = [
    { href: "/", label: "Startseite", type: "link" },
    { href: "/leistungen", label: "Leistungen", type: "link" },
    { href: "/ueber-uns", label: "Über uns", type: "link" },
    { href: "/kontakt", label: "Kontakt", type: "link" }
  ]

  return (
    <div>
      <Navigation 
        customNavItems={customNavItems}
        showQuickCheck={false}
        ctaText="Angebot anfordern"
        ctaAction={() => console.log('Custom action')}
      />
      {/* Seiteninhalt */}
    </div>
  )
}
```

## ⚙️ **Verfügbare Props**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|--------------|
| `showQuickCheck` | boolean | `true` | Zeigt/versteckt Quick-Check Widget |
| `ctaText` | string | `"Beratung"` | Text des CTA-Buttons |
| `ctaAction` | function | `null` | Custom Aktion für CTA (Standard: Scroll zu Konfigurator) |
| `customNavItems` | array | `null` | Eigene Navigation-Items |
| `className` | string | `""` | Zusätzliche CSS-Klassen |

## 📋 **Navigation Items Format**

```jsx
const navItems = [
  { 
    href: "/link", 
    label: "Link Text", 
    type: "link" 
  },
  { 
    onClick: () => {}, 
    label: "Button Text", 
    type: "button" 
  }
]
```

## 🎨 **Styling Anpassungen**

```jsx
<Navigation 
  className="border-b border-gray-200"
  showQuickCheck={false}
/>
```

## 📱 **Features**

- ✅ **Responsive Design** - Mobile & Desktop optimiert
- ✅ **Quick-Check Widget** - Konfigurator-Vorschau (optional)
- ✅ **Flexible Navigation** - Custom Items möglich
- ✅ **Mobile Menu** - Vollständiges Mobile-Menü
- ✅ **CTA Anpassbar** - Text und Aktion konfigurierbar
- ✅ **Accessibility** - Screen Reader freundlich
- ✅ **Smooth Scrolling** - Animierte Navigation

## 🔄 **Wiederverwendung Beispiele**

### Produktseite
```jsx
<Navigation 
  showQuickCheck={true}
  ctaText="Jetzt kaufen"
  ctaAction={() => window.location.href = '/checkout'}
/>
```

### Blog-Seite
```jsx
<Navigation 
  showQuickCheck={false}
  ctaText="Newsletter"
  ctaAction={() => window.open('/newsletter')}
/>
```

### Kontakt-Seite
```jsx
<Navigation 
  showQuickCheck={false}
  ctaText="Anrufen"
  ctaAction={() => window.location.href = 'tel:+4930123456'}
/>
```

Die Navigation-Komponente ist vollständig selbstständig und bringt alle benötigten Funktionen mit! 