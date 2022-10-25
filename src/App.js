import React from 'react'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Routes } from './components/Routes'
import { Homepage } from './components/Homepage'

import './assets/global.css'

const App = () => {
  return (
    <div className='h-screen w-screen p-3 sm:p-4'  style={{background: "#000A67"}}>
        <div class="bg-white w-full h-full rounded-md relative">
          <Navbar />
          <Homepage />
          <Footer />
        </div>
    </div>
  )
}

export default App