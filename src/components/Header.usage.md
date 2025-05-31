# Header Component Usage Guide

Der Header ist als wiederverwendbare Komponente gespeichert und kann auf allen Unterseiten verwendet werden.

## Standard-Verwendung (Hauptseite)
```jsx
import { Header } from '../components'

function App() {
  return (
    <div>
      <Header />
      {/* Rest der Seite */}
    </div>
  )
}
```

## Verwendung auf Unterseiten ohne Design Demo
```jsx
import { Header } from '../components'

function SubPage() {
  return (
    <div>
      <Header showDesignDemo={false} />
      {/* Seiteninhalt */}
    </div>
  )
}
```

## Verwendung mit benutzerdefinierter Navigation
```jsx
import { Header } from '../components'

function ServicePage() {
  const customNavigation = [
    { href: "/", label: "Startseite", type: "link" },
    { href: "/services", label: "Dienstleistungen", type: "link" },
    { href: "/about", label: "Über uns", type: "link" },
    { href: "/contact", label: "Kontakt", type: "link" }
  ]

  return (
    <div>
      <Header 
        showDesignDemo={false}
        customNavigationItems={customNavigation}
      />
      {/* Seiteninhalt */}
    </div>
  )
}
```

## Verwendung mit Logo-Click Handler
```jsx
import { Header } from '../components'
import { useNavigate } from 'react-router-dom'

function AnyPage() {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <div>
      <Header 
        onLogoClick={handleLogoClick}
        showDesignDemo={false}
      />
      {/* Seiteninhalt */}
    </div>
  )
}
```

## Props

| Prop | Type | Default | Beschreibung |
|------|------|---------|--------------|
| `showDesignDemo` | boolean | `true` | Zeigt den "Design Demo" Link an |
| `onLogoClick` | function | `null` | Callback für Logo-Klicks (überschreibt Standard-Link) |
| `customNavigationItems` | array | `null` | Benutzerdefinierte Navigation Items |
| `className` | string | `""` | Zusätzliche CSS Klassen |

## Navigation Item Format
```jsx
{
  href: "#section",        // Für Links
  label: "Link Text",
  type: "link",
  className: "optional-css-class"
}

// ODER für Buttons:
{
  onClick: handleClick,    // Für Buttons
  label: "Button Text", 
  type: "button",
  className: "optional-css-class"
}
```

## Import Optionen
```jsx
// Einzeln importieren
import Header from './components/Header'

// Über index importieren
import { Header } from './components'
``` 