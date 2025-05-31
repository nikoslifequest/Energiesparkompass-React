import { Button } from './ui'

const Hero = () => {
  const scrollToConfigurator = () => {
    const configuratorElement = document.getElementById('konfigurator')
    if (configuratorElement) {
      configuratorElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      // Fallback: scroll to bottom if element not found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  const scrollToFeatures = () => {
    const featuresElement = document.getElementById('features')
    if (featuresElement) {
      featuresElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Energie sparen</span>{' '}
                <span className="block text-primary-600 xl:inline">leicht gemacht</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Entdecken Sie mit unserem intelligenten Konfigurator die besten Möglichkeiten, 
                Energie zu sparen und Ihre Kosten zu reduzieren. Individuell angepasst an Ihre 
                Bedürfnisse und Ihr Zuhause.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Button
                  size="xl"
                  onClick={scrollToConfigurator}
                >
                  Konfigurator starten
                </Button>
                <Button
                  variant="secondary"
                  size="xl"
                  onClick={scrollToFeatures}
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div 
          className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/images/hero1.png')`
          }}
        >
          {/* Grüne Maske/Overlay für professionellen Look */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 to-primary-700/70"></div>
          
          {/* Optional: Subtle pattern overlay für mehr Textur */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
          
          {/* Content Overlay - optional für zusätzliche Informationen */}
          <div className="absolute inset-0 flex items-end justify-center p-8">
            <div className="text-white text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm font-medium mb-1">Moderne Energielösungen</div>
              <div className="text-xs opacity-90">Nachhaltig • Effizient • Zukunftssicher</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 