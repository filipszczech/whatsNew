import React from 'react'
import { motion } from 'framer-motion'

export const Homepage = () => {
  return (
    <motion.div 
     className='grid grid-cols-1 md:grid-cols-2 w-full px-3 sm:px-5 pb-3 h-5/6'
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}>
      <div className='absolute top-0 left-0 h-full w-1/2 opacity-50 my-bg-triangle z-0'></div>
      <div className='my-auto flex flex-col space-y-12 z-10'>
        <div className='mx-auto w-3/5 text-center'>
          <h1 className='my-navy-font text-2xl sm:text-3xl md:text-4xl font-bold'>
              Newsy z całego świata zebrane w jednym miejscu
          </h1>
        </div>
        <div className='grid grid-cols-2 gap-6 my-navy-font w-2/3 mx-auto'>
            <div className='text-center'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold'>12</p>
                <p className='text-sm md:text-base lg:text-xl font-semibold'>języków z całego globu</p>
            </div>
            <div className='text-center'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold'>7</p>
                <p className='text-sm md:text-base lg:text-xl font-semibold'>dostępnych kategorii</p>
            </div>
            <div className='text-center'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold'>1200</p>
                <p className='text-sm md:text-base lg:text-xl font-semibold'>zarejestrowanych źródeł</p>
            </div>
            <div className='text-center'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold'>0</p>
                <p className='text-sm md:text-base lg:text-xl font-semibold'>dopasowań i filtrów</p>
            </div>
        </div>
        <div className='mx-auto'>
            <button className='py-2 px-5 text-center text-white rounded-md text-2xl hover:scale-105 my-hover-effect my-yellow-bg'>Rozpocznij przeglądanie</button>
        </div>
      </div>
      <div className='mt-20'>
        <img src={require('../assets/images/bg-ilustration.jpg')} alt="homepage-main-img" />
      </div>
    </motion.div>
  )
}
