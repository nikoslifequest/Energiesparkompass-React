# 🎨 Energiesparkompass Design System

Ein umfassendes, modulares Design System für konsistente und skalierbare UI-Entwicklung.

## 📋 Übersicht

Das Design System umfasst **20+ Komponenten** in 5 Hauptkategorien:

### 🧩 **Basis-Komponenten**
- `Button` - Vielseitige Schaltflächen (7 Varianten, 4 Größen)
- `Input` - Eingabefelder mit Validierung
- `Select` - Dropdown-Auswahlfelder
- `RadioGroup` - Radio-Button-Gruppen
- `Card` - Container mit konfigurierbaren Schatten
- `Badge` - Status- und Label-Anzeigen
- `Alert` - Benachrichtigungen (4 Varianten)

### 📝 **Typography-System**
```jsx
import { Heading, Text } from './ui'

// Heading Component
<Heading 
  as="h1"           // h1, h2, h3, h4, h5, h6
  size="4xl"        // xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl
  weight="bold"     // thin, light, normal, medium, semibold, bold, extrabold
  color="primary-600" // Alle Design-Token-Farben
>
  Titel
</Heading>

// Text Component  
<Text 
  as="p"            // p, span, div, etc.
  size="lg"         // xs, sm, base, lg, xl
  weight="medium"   // Wie bei Heading
  color="gray-700"  // Alle Design-Token-Farben
  leading="relaxed" // none, tight, normal, relaxed, loose
>
  Fließtext
</Text>
```

### 🏗️ **Layout-System**
```jsx
import { Container, Grid, Stack, Flex, Divider } from './ui'

// Container - Zentrierte Inhalte
<Container 
  size="lg"         // sm, md, lg, xl, full
  padding="md"      // none, sm, md, lg
>
  Content
</Container>

// Grid - CSS Grid Layout
<Grid 
  cols={3}          // 1, 2, 3, 4, 6, 12 (responsive)
  gap="md"          // none, sm, md, lg, xl
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>

// Stack - Vertikale Layouts
<Stack 
  spacing="lg"      // none, xs, sm, md, lg, xl
  align="center"    // start, center, end, stretch
>
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>

// Flex - Horizontale Layouts
<Flex 
  direction="row"   // row, row-reverse, col, col-reverse
  justify="between" // start, end, center, between, around, evenly
  align="center"    // start, end, center, baseline, stretch
  gap="md"          // none, xs, sm, md, lg, xl
  wrap={true}       // true, false
>
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>

// Divider - Trennlinien
<Divider 
  orientation="horizontal" // horizontal, vertical
  variant="solid"          // solid, dashed, dotted
  color="gray-200"         // Design-Token-Farben
/>
```

### 🎯 **Icon-System**
```jsx
import { Icon } from './ui'

<Icon 
  name="lightning"  // 20+ vordefinierte Icons
  size="lg"         // xs, sm, md, lg, xl, 2xl
  color="primary-600" // Alle Design-Token-Farben
/>
```

**Verfügbare Icons:**
- **Navigation:** `menu`, `close`, `chevron-left`, `chevron-right`, `chevron-down`
- **Status:** `check`, `warning`, `error`, `info`
- **Actions:** `phone`, `mail`, `download`, `upload`, `search`, `plus`, `minus`, `edit`, `trash`
- **Energy:** `lightning`, `home`, `chart`
- **Loading:** `spinner`

### 🎛️ **Spezialisierte Komponenten**
- `Stepper` - Multi-Step-Formulare
- `SelectableCard` - Klickbare Karten
- `MeasureSelector` - Maßnahmen-Auswahl
- `HelpText` - Hilfe-Tooltips

## 🎨 **Design Tokens**

### Farben
```javascript
// Primärfarben
primary-50, primary-500, primary-600, primary-700

// Graustufen
gray-50 bis gray-900

// Semantische Farben
green-600 (Success), red-600 (Error), yellow-600 (Warning), blue-600 (Info)
```

### Abstände
```javascript
// Spacing Scale
none: 0, xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px
```

### Schatten
```javascript
// Shadow Scale
none, sm, md, lg, xl, 2xl
```

## 💡 **Verwendungsbeispiele**

### Typische Seitensektion
```jsx
<Container size="lg">
  <Stack spacing="xl">
    <Heading as="h1" size="4xl" color="primary-600">
      Energiespar-Dashboard
    </Heading>
    
    <Text size="lg" color="gray-600">
      Übersicht Ihrer Energiespar-Maßnahmen
    </Text>
    
    <Grid cols={3} gap="lg">
      <Card padding="lg" shadow="md">
        <Stack spacing="md">
          <Flex align="center" gap="md">
            <Icon name="lightning" size="xl" color="primary-600" />
            <Heading as="h3" size="lg">Energieeinsparung</Heading>
          </Flex>
          <Text>25% weniger Verbrauch</Text>
        </Stack>
      </Card>
      
      <Card padding="lg" shadow="md">
        <Stack spacing="md">
          <Flex align="center" gap="md">
            <Icon name="chart" size="xl" color="green-600" />
            <Heading as="h3" size="lg">Kosteneinsparung</Heading>
          </Flex>
          <Text>€ 1.200 jährlich</Text>
        </Stack>
      </Card>
      
      <Card padding="lg" shadow="md">
        <Stack spacing="md">
          <Flex align="center" gap="md">
            <Icon name="home" size="xl" color="blue-600" />
            <Heading as="h3" size="lg">CO₂-Reduktion</Heading>
          </Flex>
          <Text>2.5t weniger CO₂</Text>
        </Stack>
      </Card>
    </Grid>
  </Stack>
</Container>
```

### Button-Kombinationen
```jsx
<Flex gap="md">
  <Button variant="primary">
    <Icon name="phone" size="sm" className="mr-2" />
    Anrufen
  </Button>
  
  <Button variant="outline">
    <Icon name="mail" size="sm" className="mr-2" />
    E-Mail
  </Button>
  
  <Button variant="ghost">
    <Icon name="download" size="sm" className="mr-2" />
    Download
  </Button>
</Flex>
```

### Responsive Grid
```jsx
<Grid cols={4} gap="md"> {/* 1 col mobile, 2 cols tablet, 4 cols desktop */}
  {services.map(service => (
    <Card key={service.id} padding="md" shadow="sm">
      <Stack spacing="sm" align="center">
        <Icon name={service.icon} size="2xl" color="primary-600" />
        <Heading as="h4" size="md">{service.title}</Heading>
        <Text size="sm" color="gray-600">{service.description}</Text>
      </Stack>
    </Card>
  ))}
</Grid>
```

## 🔧 **Technische Details**

### Import-Syntax
```jsx
// Einzelne Komponenten
import { Button, Card, Heading } from './components/ui'

// Alle Komponenten
import * as UI from './components/ui'
```

### Customization
Alle Komponenten unterstützen:
- `className` für zusätzliche Tailwind-Klassen
- `ref` via `forwardRef` für DOM-Zugriff
- Alle nativen HTML-Props via `...props`

### Performance
- **Tree-Shaking** - Nur verwendete Komponenten werden gebündelt
- **Optimierte Re-Renders** - Minimal re-renders durch React.memo
- **Keine Runtime-Dependencies** - Nur Tailwind CSS

## 🚀 **Vorteile**

✅ **Zentrale Änderungen** - Button-Stil in einer Datei → überall wirksam  
✅ **Typ-Sicherheit** - PropTypes und TypeScript-ready  
✅ **Accessibility** - ARIA-Labels, Keyboard-Navigation, Screen-Reader  
✅ **Performance** - Tree-Shaking, optimierte Bundles  
✅ **Consistency** - Einheitliche Spacing, Colors, Typography  
✅ **Developer Experience** - Intuitive API, ausführliche Dokumentation  

## 📈 **Erweiterungen**

Das System ist designed für einfache Erweiterungen:
- Neue Icons in `Icon.jsx` hinzufügen
- Neue Farben in `tailwind.config.js` definieren
- Custom Components nach dem gleichen Pattern erstellen

---

**Entwickelt für maximale Wiederverwendbarkeit und Wartbarkeit** 🌟 