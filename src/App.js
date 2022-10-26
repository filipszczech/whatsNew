import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Homepage } from './pages/Homepage'
import { Polska } from './pages/Polska'
import { About } from './pages/About'
import { Explore } from './pages/Explore'
import { Random } from './pages/Random'

import './assets/global.css'

const App = () => {
  return (
    <Router>
      <div className='h-screen w-screen p-3 sm:p-5'  style={{background: "#000A67"}}>
          <div class="bg-white w-full h-full rounded-md relative">
            <Navbar />

            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/polska" element={<Polska />} />
              <Route path="/o-projekcie" element={<About />} />
              <Route path="/random" element={<Random />} />
              <Route path="/odkrywaj" element={<Explore />} />
            </Routes>

            <Footer />
          </div>
      </div>
    </Router>
  )
}

export default App