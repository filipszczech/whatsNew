import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'

import './assets/global.css'

const App = () => {
  return (
    <Router>
      <div className='h-screen w-screen p-3 sm:p-5'  style={{background: "#000A67"}}>
          <div className="bg-white w-full h-full rounded-md relative overflow-hidden">
            <Navbar />

            <AnimatedRoutes />

            <Footer />
          </div>
      </div>
    </Router>
  )
}

export default App