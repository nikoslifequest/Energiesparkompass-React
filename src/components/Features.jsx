import { Button } from './ui'

const Features = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Intelligente Analyse',
      description: 'Unser System analysiert Ihr Zuhause und identifiziert die besten Einsparpotentiale.'
    },
    {
      icon: '💰',
      title: 'Kostenersparnis',
      description: 'Reduzieren Sie Ihre Energiekosten um bis zu 40% mit unseren maßgeschneiderten Lösungen.'
    },
    {
      icon: '🌱',
      title: 'Umweltfreundlich',
      description: 'Leisten Sie einen Beitrag zum Klimaschutz durch reduzierten Energieverbrauch.'
    },
    {
      icon: '⚙️',
      title: 'Einfache Umsetzung',
      description: 'Schritt-für-Schritt Anleitungen für die praktische Umsetzung aller Maßnahmen.'
    },
    {
      icon: '📊',
      title: 'Detaillierte Berichte',
      description: 'Erhalten Sie ausführliche Analysen und Empfehlungen für Ihr Energiesparpotential.'
    },
    {
      icon: '🏆',
      title: 'Bewährte Methoden',
      description: 'Profitieren Sie von erprobten Energiesparmaßnahmen und Expertenwissen.'
    }
  ]

  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Warum Energiesparkompass?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Entdecken Sie die Vorteile unserer intelligenten Energiespar-Plattform und starten Sie noch heute 
            in eine energieeffiziente Zukunft.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white text-2xl">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 text-center">
          <Button
            size="xl"
            onClick={() => document.getElementById('konfigurator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Jetzt kostenlos testen
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Features 