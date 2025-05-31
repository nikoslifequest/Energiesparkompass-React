import { useState } from 'react'
import MainHeader from './components/MainHeader'
import Hero from './components/Hero'
import Features from './components/Features'
import Configurator from './components/Configurator'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainHeader />
      <main>
        <Hero />
        <Features />
        <Configurator />
      </main>
      <Footer />
    </div>
  )
}

export default App 