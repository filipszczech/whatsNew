import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

import AnalysisForm from '../components/AnalysisForm'
import AnalysisContent from '../components/AnalysisContent'

export const Analysis = () => {
    const [ article, setArticle ] = useState(null)            //filling var articles with data from api
    
    return (
      <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 w-full px-3 sm:px-5 pb-3 h-5/6 overflow-y-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          
          <AnalysisForm 
              article = { article } 
              setArticle = { setArticle }
          />
          
        <div class='px-5 pt-5 lg:pt-10'>
            <div class='mx-auto overflow-y-auto news-list' style={{ height: '75vh' }}>
    
                <AnalysisContent 
                    article = { article }
                />

            </div>
        </div>
      </motion.div>
    )
  }