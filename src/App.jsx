import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Configurator from './components/Configurator'
import Footer from './components/Footer'
import ModernDesignDemo from './components/ModernDesignDemo'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Configurator />
        
        {/* Neue Design Demo Sektion */}
        <section id="design-demo">
          <ModernDesignDemo />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App 