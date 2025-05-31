import { Button, Icon } from './ui'

const Features = () => {
  const features = [
    {
      icon: 'search',
      iconColor: 'white',
      title: 'Energieberatung vor Ort',
      description: 'Unsere dena-zertifizierten Energieberater analysieren Ihr Gebäude und erstellen einen individuellen Sanierungsfahrplan (iSFP) nach aktuellen GEG-Standards.'
    },
    {
      icon: 'currency',
      iconColor: 'white',
      title: 'BAFA & KfW Förderberatung',
      description: 'Wir helfen Ihnen bei der optimalen Nutzung von KfW 458, BAFA-Förderung und anderen Förderprogrammen. Bis zu 15.000€ Zuschuss möglich.'
    },
    {
      icon: 'leaf',
      iconColor: 'white',
      title: 'Wärmepumpen-Expertise',
      description: 'Professionelle Beratung zu Luft-Wasser-Wärmepumpen, Erdwärme und Hybrid-Systemen - auch für Altbauten geeignet.'
    },
    {
      icon: 'sun',
      iconColor: 'white',
      title: 'Photovoltaik & Speicher',
      description: 'Photovoltaik-Anlagen, Stromspeicher und intelligente Kombination mit Wärmepumpen für maximale Energieeffizienz.'
    },
    {
      icon: 'home',
      iconColor: 'white',
      title: 'Gebäudesanierung',
      description: 'Ganzheitliche Sanierungskonzepte: Dämmung, Fenster, Heizung und Smart-Home für KfW-Effizienzhaus-Standards.'
    },
    {
      icon: 'award',
      iconColor: 'white',
      title: 'Energieausweis & Zertifikate',
      description: 'Erstellung von Energieausweisen, Bedarfs- und Verbrauchsausweise sowie Nachweise nach Gebäudeenergiegesetz.'
    }
  ]

  return (
    <div id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Unsere Leistungen</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Energieberatung Berlin Brandenburg
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            Als zertifizierte Energieberater unterstützen wir Sie bei der energetischen Sanierung, 
            Heizungsoptimierung und nachhaltigen Gebäudetechnik. Von der Erstberatung bis zur 
            Umsetzung - alles aus einer Hand.
          </p>
        </div>

        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 shadow-lg">
                    <Icon 
                      name={feature.icon} 
                      size="lg" 
                      color={feature.iconColor}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 leading-relaxed">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* SEO-optimierter Content-Bereich */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Warum professionelle Energieberatung?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In Berlin und Brandenburg unterstützen wir Hausbesitzer dabei, ihre Energiekosten 
              nachhaltig zu senken und den Immobilienwert zu steigern.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600">70%</div>
              <div className="text-sm text-gray-600">Energiekosten-Ersparnis möglich</div>
            </div>
            <div className="text-center p-4 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600">15.000€</div>
              <div className="text-sm text-gray-600">Maximale Förderung</div>
            </div>
            <div className="text-center p-4 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-sm text-gray-600">Erfolgreich umgesetzte Projekte</div>
            </div>
            <div className="text-center p-4 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600">24h</div>
              <div className="text-sm text-gray-600">Angebot binnen 24 Stunden</div>
            </div>
          </div>
        </div>

        {/* Regionale SEO-Optimierung */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Energieberatung in Ihrer Region
          </h4>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Wir sind in ganz Berlin und Brandenburg für Sie da. Unsere Energieberater kennen 
            die regionalen Gegebenheiten und unterstützen Sie bei allen Fragen rund um 
            Energieeffizienz und Gebäudesanierung.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-8">
            <span className="bg-gray-100 px-3 py-1 rounded-full">Berlin</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Potsdam</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Brandenburg an der Havel</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Cottbus</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Frankfurt (Oder)</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Oranienburg</span>
          </div>

          <Button
            size="xl"
            onClick={() => document.getElementById('konfigurator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Jetzt kostenlose Energieberatung anfragen
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Features 