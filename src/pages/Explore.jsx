import React from 'react'
import { motion } from 'framer-motion'
import ExploreForm from '../components/ExploreForm'
import { useState } from 'react'

export const Explore = () => {
    const [ isLoading, setIsLoading ] = useState(false)
    
    return (
      <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 w-full px-3 sm:px-5 pb-3 h-5/6 overflow-y-hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
        <div className='absolute top-0 left-0 h-full w-1/2 opacity-50 my-bg-triangle z-0'></div>
          <ExploreForm isLoading={isLoading} setIsLoading={setIsLoading} />
        <div className='flex flex-col space-y-0 justify-center'>
          <div id="loading_div" className='w-2/3 h-1/2 mx-auto flex justify-center'>
            { !isLoading && <img className='h-4/5 my-auto object-cover' src={require('../assets/images/search.jpg')} alt='homepage-main-img' /> }
            { isLoading && <img className='h-full object-cover' src={require('../assets/images/404_img.jpg')}  alt='homepage-main-img' /> }
          </div>
          <div className='w-full text-center'>
            <p className='my-navy-font text-2xl sm:text-3xl font-semibold'>Tu się pojawią wyniki</p>
          </div>
        </div>
      </motion.div>
    )
  }