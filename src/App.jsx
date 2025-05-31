import { useState } from 'react'
import MainHeader from './components/MainHeader'
import Hero from './components/Hero'
import Features from './components/Features'
import Configurator from './components/Configurator'
import Footer from './components/Footer'
import ModernDesignDemo from './components/ModernDesignDemo'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainHeader />
      <main>
        <Hero />
        <Features />
        <Configurator />
        
        {/* Design Demo Sektion */}
        <section id="design-demo">
          <ModernDesignDemo />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App 