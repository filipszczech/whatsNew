import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


import { Homepage } from '../pages/Homepage'
import { About } from '../pages/About'
import { Explore } from '../pages/Explore'
import { Analysis } from '../pages/Analysis'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname} >
            <Route path="/" element={<Homepage />} />
            <Route path="/analiza" element={<Analysis />} />
            <Route path="/o-projekcie" element={<About />} />
            <Route path="/odkrywaj" element={<Explore />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes