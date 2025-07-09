# 🎨 Energiesparkompass Design System

Ein einheitliches Design System für konsistente, zugängliche und schöne Benutzeroberflächen.

## 🚀 Quick Start

### Zugriff auf die Design System Dokumentation

1. **Live-Dokumentation**: Besuchen Sie die Website und klicken Sie auf das 🎨 Symbol (unten rechts)
2. **Entwicklung**: `npm run dev` und navigieren Sie zur Design System Seite

### Komponenten verwenden

```jsx
import { Button, Alert, ModernInput, ModernSelect, ModernCheckbox } from '../components/ui'

// Button
<Button variant="primary" size="lg">Click me</Button>

// Form Controls (Modern)
<ModernInput label="Name" placeholder="Ihr Name..." />
<ModernSelect label="Auswahl" options={options} />
<ModernCheckbox label="Zustimmen" />

// Alert Message
<Alert variant="success">Erfolgreich gespeichert!</Alert>
```

## 📚 Komponenten-Übersicht

### UI Components
- **Button** - Primary, Secondary, Outline Variants
- **Alert** - Success, Warning, Error, Info Messages
- **Badge** - Status und Kategorie-Labels
- **Card** - Container für Content-Bereiche
- **Stepper** - Fortschritts-Anzeige

### Form Controls
- **ModernInput** - Text, Email, Password, Number Inputs
- **ModernSelect** - Moderne Dropdown-Menüs  
- **ModernCheckbox** - Stylisierte Checkboxen
- **ModernRadioGroup** - Moderne Radio-Buttons

### Layout & Wizard
- **ModernWizard** - Multi-Step Form Container
- **HelpText** - Hilfe- und Info-Texte
- **SelectableCard** - Interaktive Karten
- **Icon** - Icon-System
- **MeasureSelector** - Spezielle Auswahl-Komponente

## 🎯 Design Tokens

### Farben
```js
// Primary Colors
bg-primary-50   // Sehr hell
bg-primary-500  // Standard
bg-primary-600  // Dunkel
bg-primary-700  // Sehr dunkel

// Semantic Colors
bg-green-600    // Success
bg-yellow-600   // Warning  
bg-red-600      // Error
bg-blue-600     // Info
```

### Spacing
```js
// Spacing Scale (Tailwind-basiert)
p-1   // 4px
p-2   // 8px
p-4   // 16px
p-6   // 24px
p-8   // 32px
p-12  // 48px
p-16  // 64px
```

### Typography
```js
text-xs    // 12px
text-sm    // 14px
text-base  // 16px
text-lg    // 18px
text-xl    // 20px
text-2xl   // 24px
text-3xl   // 30px
```

## 🛠️ Entwicklung

### Neue Komponenten erstellen

1. **Komponente erstellen**: `src/components/ui/MyComponent.jsx`
2. **Exports hinzufügen**: `src/components/ui/index.js`
3. **Dokumentation**: Design System Seite aktualisieren

### Best Practices

```jsx
// ✅ Gut - Moderne Form Controls verwenden
<ModernInput 
  label="Name" 
  placeholder="Ihr Name..." 
  value={formData.name}
  onChange={(e) => setFormData({...formData, name: e.target.value})}
/>

// ✅ Gut - Konsistente Button-Varianten
<Button variant="primary" size="lg" disabled={loading}>
  {loading ? 'Lädt...' : 'Speichern'}
</Button>

// ✅ Gut - Design Tokens verwenden
<div className="p-6 bg-primary-50 rounded-lg">
  Content
</div>

// ❌ Schlecht - Alte Input-Komponenten
<Input label="Name" placeholder="Name..." />

// ❌ Schlecht - Inline Styles
<button style={{backgroundColor: '#blue', padding: '10px'}}>
  Button
</button>

// ❌ Schlecht - Inkonsistente Abstände
<div style={{marginTop: '13px', paddingLeft: '7px'}}>
  Content
</div>
```

### Komponenten-Struktur

```jsx
import { forwardRef } from 'react'

const MyComponent = forwardRef(({ 
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...props 
}, ref) => {
  const baseStyles = "base-classes-here"
  const variantStyles = {
    default: "default-styles",
    primary: "primary-styles"
  }
  
  const combinedClasses = [
    baseStyles, 
    variantStyles[variant], 
    className
  ].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={combinedClasses} {...props}>
      {children}
    </div>
  )
})

MyComponent.displayName = 'MyComponent'
export default MyComponent
```

## 🎨 Design Principles

### 1. Konsistenz
- Einheitliche Abstände und Größen
- Konsistente Farbverwendung  
- Standardisierte Interaktionen

### 2. Zugänglichkeit
- Keyboard-Navigation
- Screen Reader Support
- Ausreichende Kontraste
- Focus-Management

### 3. Performance
- Optimierte Bundle-Größe
- Lazy Loading wo möglich
- Effiziente Re-Renders

### 4. Developer Experience
- Intuitive APIs
- TypeScript Support (geplant)
- Ausführliche Dokumentation
- Live-Beispiele

## 📖 Weitere Ressourcen

- **Tailwind CSS**: [https://tailwindcss.com/](https://tailwindcss.com/)
- **React**: [https://react.dev/](https://react.dev/)
- **Accessibility**: [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)

## 🔄 Versioning

- **v1.0** - Initial Design System
- Semantic Versioning für Breaking Changes
- Changelog in jeder Release

---

**Entwickelt mit ❤️ für das Energiesparkompass Team** 