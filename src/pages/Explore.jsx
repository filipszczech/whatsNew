import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

import ExploreForm from '../components/ExploreForm'
import ExploreContent from '../components/ExploreContent'
import ArticleModal from '../components/ArticleModal'

export const Explore = () => {
    const [ isLoading, setIsLoading ] = useState(false)       //waiting for data to load
    const [ isModalOpen, setIsModalOpen ] = useState(false)       //waiting for data to load
    const [ dataLoaded, setDataLoaded ] = useState(false)     //setting if data is loaded
    const [ articles, setArticles ] = useState([])            //filling var articles with data from api
    const [ singleArticle, setSingleArticle ] = useState()            //filling var articles with data from api
    
    return (
      <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 w-full mt-7 lg:mt-0 px-3 sm:px-5 pb-3 space-y-9 h-5/6 overflow-y-hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          
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
              setIsModalOpen = { setIsModalOpen }
              setSingleArticle = { setSingleArticle }
          />

          <ArticleModal
              isModalOpen = { isModalOpen }
              setIsModalOpen = { setIsModalOpen }
              article = { singleArticle }
          />
        
      </motion.div>
    )
  }