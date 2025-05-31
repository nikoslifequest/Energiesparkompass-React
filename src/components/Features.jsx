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
          <h2 className="text-base text-primary-600 font-semibold tracking-wider uppercase font-sans">Unsere Leistungen</h2>
          <p className="mt-3 text-3xl leading-8 font-heading font-bold tracking-tight text-gray-900 sm:text-4xl">
            Energieberatung Berlin Brandenburg
          </p>
          <p className="mt-5 max-w-3xl text-xl text-gray-600 lg:mx-auto font-normal leading-relaxed">
            Als zertifizierte Energieberater unterstützen wir Sie bei der energetischen Sanierung, 
            Heizungsoptimierung und nachhaltigen Gebäudetechnik. Von der Erstberatung bis zur 
            Umsetzung - alles aus einer Hand.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-14 w-14 rounded-xl bg-primary-500 shadow-lg">
                    <Icon 
                      name={feature.icon} 
                      size="lg" 
                      color={feature.iconColor}
                    />
                  </div>
                  <p className="ml-20 text-lg leading-6 font-heading font-semibold text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-3 ml-20 text-base text-gray-600 leading-relaxed font-normal">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* SEO-optimierter Content-Bereich */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-5">
              Warum professionelle Energieberatung?
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-normal leading-relaxed">
              In Berlin und Brandenburg unterstützen wir Hausbesitzer dabei, ihre Energiekosten 
              nachhaltig zu senken und den Immobilienwert zu steigern.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="text-4xl font-heading font-bold text-primary-600 mb-2">70%</div>
              <div className="text-sm text-gray-600 font-medium">Energiekosten-Ersparnis möglich</div>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="text-4xl font-heading font-bold text-primary-600 mb-2">15.000€</div>
              <div className="text-sm text-gray-600 font-medium">Maximale Förderung</div>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="text-4xl font-heading font-bold text-primary-600 mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Erfolgreich umgesetzte Projekte</div>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="text-4xl font-heading font-bold text-primary-600 mb-2">24h</div>
              <div className="text-sm text-gray-600 font-medium">Angebot binnen 24 Stunden</div>
            </div>
          </div>
        </div>

        {/* Regionale SEO-Optimierung */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-heading font-semibold text-gray-900 mb-5">
            Energieberatung in Ihrer Region
          </h4>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto font-normal text-lg leading-relaxed">
            Wir sind in ganz Berlin und Brandenburg für Sie da. Unsere Energieberater kennen 
            die regionalen Gegebenheiten und unterstützen Sie bei allen Fragen rund um 
            Energieeffizienz und Gebäudesanierung.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-10">
            <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">Berlin</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">Potsdam</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">Brandenburg an der Havel</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">Cottbus</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">Frankfurt (Oder)</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">Oranienburg</span>
          </div>

          <Button
            size="lg"
            onClick={() => document.getElementById('konfigurator')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-semibold"
          >
            Jetzt kostenlose Energieberatung anfragen
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Features 