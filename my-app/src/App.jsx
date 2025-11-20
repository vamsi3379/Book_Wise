import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Fleet from './Components/Fleet'
import Clients from './Components/Clients'
import Safety from './Components/Safety'
import ProjectHighlights from './Components/ProjectHighlights'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Fleet />
              <Clients />
              <Safety />
              <ProjectHighlights />
              <Contact />
              {/* Other sections will go here */}
            </>
          } />
          {/* Add other routes later */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
