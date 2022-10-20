import React from 'react'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Routes } from './components/Routes'

const App = () => {
  return (
    <div className='h-screen w-screen p-3 sm:p-4'  style={{background: "#000A67"}}>
        <div class="bg-gray-100 w-full h-full rounded-md">
          <Navbar />
        </div>
    </div>
  )
}

export default App