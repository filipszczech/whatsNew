import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


import { Homepage } from '../pages/Homepage'
import { Polska } from '../pages/Polska'
import { About } from '../pages/About'
import { Explore } from '../pages/Explore'
import { Random } from '../pages/Random'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname} >
            <Route path="/" element={<Homepage />} />
            <Route path="/polska" element={<Polska />} />
            <Route path="/o-projekcie" element={<About />} />
            <Route path="/random" element={<Random />} />
            <Route path="/odkrywaj" element={<Explore />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes