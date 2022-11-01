import React from 'react'
import { motion } from 'framer-motion'
import ExploreForm from '../components/ExploreForm'
import ExploreContent from '../components/ExploreContent'
import { useState } from 'react'

export const Explore = () => {
    const [ isLoading, setIsLoading ] = useState(false)       //waiting for data to load
    const [ dataLoaded, setDataLoaded ] = useState(false)     //setting if data is loaded
    const [ articles, setArticles ] = useState([])            //filling var articles with data from api
    
    return (
      <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 w-full px-3 sm:px-5 pb-3 h-5/6 overflow-y-hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
        <div className='absolute top-0 left-0 h-full w-1/2 opacity-50 my-bg-triangle z-0'></div>
          
          <ExploreForm 
              isLoading={isLoading} 
              setIsLoading={setIsLoading} 
              articles = { articles } 
              setArticles = { setArticles } 
              dataLoaded = { dataLoaded } 
              setDataLoaded = { setDataLoaded }
          />
          
          <ExploreContent 
              isLoading={ isLoading } 
              dataLoaded = { dataLoaded } 
              setDataLoaded = { setDataLoaded } 
              articles = { articles }
          />
        
      </motion.div>
    )
  }