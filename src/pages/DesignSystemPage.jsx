import { useState } from 'react'
import {
  Button,
  Input,
  Select,
  ModernInput,
  ModernSelect,
  ModernCheckbox,
  ModernRadioGroup,
  Alert,
  Badge,
  Card,
  Icon,
  SelectableCard,
  Stepper,
  HelpText,
  Heading,
  Text
} from '../components/ui'
import { tokens } from '../components/ui/tokens'

const DesignSystemPage = ({ onBackToMain }) => {
  const [selectedSection, setSelectedSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Übersicht', icon: '🎨' },
    { id: 'colors', title: 'Farben', icon: '🌈' },
    { id: 'typography', title: 'Typography', icon: '✍️' },
    { id: 'tokens', title: 'Design Tokens', icon: '🎯' },
    { id: 'components', title: 'UI Komponenten', icon: '🧩' },
    { id: 'layout', title: 'Layout', icon: '📐' }
  ]

  const colorPalette = {
    primary: ['50', '500', '600', '700'],
    gray: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    semantic: { success: 'green', warning: 'yellow', error: 'red', info: 'blue' }
  }

  const ComponentDemo = ({ title, children, code }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="p-6 bg-white">
        {children}
      </div>
      {code && (
        <div className="bg-gray-900 text-gray-100 p-4 text-sm font-mono overflow-x-auto">
          <pre>{code}</pre>
        </div>
      )}
    </div>
  )

  const ColorSwatch = ({ color, name, className }) => (
    <div className="flex flex-col items-center text-center space-y-2">
      <div 
        className={`w-16 h-16 rounded-lg border border-gray-200 ${className}`}
        title={`${name} - ${className}`}
      />
      <div className="space-y-1">
        <p className="text-xs text-gray-600 font-medium">{name}</p>
        <p className="text-xs text-gray-400">{className}</p>
      </div>
    </div>
  )

  const renderOverview = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Energiesparkompass Design System</h2>
        <p className="text-lg text-gray-600 mb-6">
          Unser einheitliches Design System für konsistente, zugängliche und schöne Benutzeroberflächen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.slice(1).map((section) => (
          <div 
            key={section.id}
            onClick={() => setSelectedSection(section.id)}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="text-2xl mb-3">{section.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{section.title}</h3>
            <p className="text-gray-600 text-sm">
              {section.id === 'colors' && 'Farbpalette und semantische Farben'}
              {section.id === 'typography' && 'Schriftarten, Größen und Stile'}
              {section.id === 'tokens' && 'Design-Tokens für Spacing, Shadows, etc.'}
              {section.id === 'components' && 'Alle UI-Komponenten und Form Controls'}
              {section.id === 'layout' && 'Layout-Komponenten und Grid-System'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )

  const renderColors = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Farbpalette</h2>
        <p className="text-gray-600">Unsere Farbpalette basiert auf Tailwind CSS mit angepassten Primary-Farben.</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Primary Colors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {colorPalette.primary.map((shade) => (
            <ColorSwatch 
              key={shade}
              color="primary"
              name={`Primary ${shade}`}
              className={`bg-primary-${shade}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Gray Scale</h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 gap-6">
          {colorPalette.gray.map((shade) => (
            <ColorSwatch 
              key={shade}
              color="gray"
              name={`Gray ${shade}`}
              className={`bg-gray-${shade}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Semantic Colors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {Object.entries(colorPalette.semantic).map(([name, color]) => (
            <ColorSwatch 
              key={name}
              color={color}
              name={name.charAt(0).toUpperCase() + name.slice(1)}
              className={`bg-${color}-600`}
            />
          ))}
        </div>
      </div>
    </div>
  )

  const renderTypography = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Typography</h2>
        <p className="text-gray-600">Unser Typography-System basiert auf einer modularen Skala.</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Font Sizes</h3>
        <div className="space-y-4">
          {Object.entries(tokens.typography.sizes).map(([name, className]) => (
            <div key={name} className="flex items-baseline space-x-4">
              <span className="w-16 text-sm text-gray-500">{name}</span>
              <span className={className}>The quick brown fox jumps over the lazy dog</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Font Weights</h3>
        <div className="space-y-2">
          {Object.entries(tokens.typography.weights).map(([name, className]) => (
            <div key={name} className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">{name}</span>
              <span className={`text-lg ${className}`}>Sample Text</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderTokens = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Tokens</h2>
        <p className="text-gray-600">Zentrale Designwerte für konsistente Gestaltung.</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Spacing Scale</h3>
        <div className="space-y-2">
          {Object.entries(tokens.spacing).map(([name, value]) => (
            <div key={name} className="flex items-center space-x-4">
              <span className="w-12 text-sm text-gray-500">{name}</span>
              <div className={`bg-blue-200 h-4 w-${value}`}></div>
              <span className="text-sm text-gray-600">w-{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Border Radius</h3>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(tokens.radius).map(([name, className]) => (
            <div key={name} className="text-center">
              <div className={`w-16 h-16 bg-gray-300 ${className} mx-auto mb-2`}></div>
              <p className="text-xs text-gray-600">{name}</p>
              <p className="text-xs text-gray-400">{className}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Shadows</h3>
        <div className="grid grid-cols-3 gap-6">
          {Object.entries(tokens.shadows).map(([name, className]) => (
            <div key={name} className="text-center">
              <div className={`w-20 h-20 bg-white ${className} mx-auto mb-2`}></div>
              <p className="text-xs text-gray-600">{name}</p>
              <p className="text-xs text-gray-400">{className}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderComponents = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">UI Komponenten</h2>
        <p className="text-gray-600">Unsere wiederverwendbaren UI-Komponenten und Form Controls.</p>
      </div>

      <ComponentDemo 
        title="Buttons"
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>`}
      >
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </ComponentDemo>

      <ComponentDemo 
        title="Alerts"
        code={`<Alert variant="success">Success message</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="error">Error message</Alert>`}
      >
        <div className="space-y-4">
          <Alert variant="success">This is a success message</Alert>
          <Alert variant="warning">This is a warning message</Alert>
          <Alert variant="error">This is an error message</Alert>
          <Alert variant="info">This is an info message</Alert>
        </div>
      </ComponentDemo>

      <ComponentDemo 
        title="Badges"
        code={`<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>`}
      >
        <div className="flex flex-wrap gap-4">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </ComponentDemo>

      <ComponentDemo 
        title="Form Controls"
        code={`<ModernInput label="Text Input" placeholder="Enter text..." />
<ModernSelect label="Select" options={options} />
<ModernCheckbox label="Accept terms" />
<ModernRadioGroup label="Options" options={radioOptions} />`}
      >
        <div className="space-y-6 max-w-md">
          <ModernInput 
            label="Text Input" 
            placeholder="Enter text..." 
          />
          <ModernSelect 
            label="Select Dropdown" 
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' }
            ]}
          />
          <ModernInput 
            label="Email Input" 
            type="email"
            placeholder="email@example.com" 
          />
          <ModernInput 
            label="Password Input" 
            type="password"
            placeholder="Enter password..." 
          />
          <ModernCheckbox 
            label="Accept terms and conditions" 
          />
          <ModernRadioGroup 
            label="Choose option"
            name="demo-radio"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' }
            ]}
          />
        </div>
      </ComponentDemo>

      <ComponentDemo title="Cards">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Basic Card</h3>
            <p className="text-gray-600 text-sm">This is a basic card component.</p>
          </Card>
          <SelectableCard className="p-4">
            <h3 className="font-semibold mb-2">Selectable Card</h3>
            <p className="text-gray-600 text-sm">This card can be selected.</p>
          </SelectableCard>
          <Card className="p-4 border-primary-200 bg-primary-50">
            <h3 className="font-semibold mb-2 text-primary-700">Highlighted Card</h3>
            <p className="text-primary-600 text-sm">This card is highlighted.</p>
          </Card>
        </div>
      </ComponentDemo>

      <ComponentDemo title="Stepper">
        <Stepper 
          steps={[
            { id: 1, title: 'Step 1', description: 'First step' },
            { id: 2, title: 'Step 2', description: 'Second step' },
            { id: 3, title: 'Step 3', description: 'Third step' }
          ]}
          currentStep={2}
        />
      </ComponentDemo>

      <ComponentDemo title="Help Text">
        <HelpText>
          <strong>💡 Helpful Information:</strong> This is a help text component that provides 
          additional context and guidance to users.
        </HelpText>
      </ComponentDemo>
    </div>
  )

  

  const renderLayout = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Layout System</h2>
        <p className="text-gray-600">Grid-System und Layout-Komponenten für konsistente Layouts.</p>
      </div>

      <ComponentDemo title="Grid System">
        <div className="space-y-4">
          <div className="grid grid-cols-12 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-primary-100 text-primary-700 text-center py-2 text-sm">
                {i + 1}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 text-center">1/3</div>
            <div className="bg-gray-100 p-4 text-center">2/3</div>
            <div className="bg-gray-100 p-4 text-center">3/3</div>
          </div>
        </div>
      </ComponentDemo>

      <ComponentDemo title="Spacing Examples">
        <div className="space-y-4">
          <div className="bg-gray-100 p-4">Padding: p-4 (16px)</div>
          <div className="bg-gray-100 p-6">Padding: p-6 (24px)</div>
          <div className="bg-gray-100 p-8">Padding: p-8 (32px)</div>
        </div>
      </ComponentDemo>
    </div>
  )

  const renderContent = () => {
    switch (selectedSection) {
      case 'overview': return renderOverview()
      case 'colors': return renderColors()
      case 'typography': return renderTypography()
      case 'tokens': return renderTokens()
      case 'components': return renderComponents()
      case 'layout': return renderLayout()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBackToMain}
                className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Icon name="arrow-left" size="sm" className="mr-2" />
                Zurück zur Website
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">
                🎨 Design System
              </h1>
            </div>
            <Badge variant="primary">v1.0</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setSelectedSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedSection === section.id
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignSystemPage 