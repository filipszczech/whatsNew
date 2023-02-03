import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const Homepage = () => {
  let navigate = useNavigate()
  return (
    <motion.div 
     className='grid grid-cols-1 md:grid-cols-2 w-full px-3 sm:px-5 pb-3 h-auto md:h-5/6 overflow-y-scroll'
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}>
      <div className='my-auto flex flex-col space-y-12 z-10 py-12 mx-14 lg:mx-24 border-2 border-gray-100 shadow-xl hover:shadow-2xl transiton-all duration-700 ease-in-out rounded-xl'>
        <div className='mx-auto w-3/4'>
          <h1 className='my-navy-font text-2xl sm:text-3xl md:text-4xl font-medium'>
              Newsy z całego świata <br></br>zebrane w jednym miejscu
          </h1>
        </div>
        {/* <div className='grid grid-cols-2 gap-6 my-navy-font w-2/3 mx-auto'>
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
        </div> */}
        <div className='mx-auto w-3/4'>
            <button onClick={() => { navigate("/odkrywaj")}} className='py-3 px-auto w-1/2 opacity-90 text-center text-white font-medium shadow-lg text-lg hover:scale-105 my-hover-effect my-yellow-bg rounded-sm border-gray-200'>Rozpocznij przeglądanie</button>
        </div>
      </div>
      <div className='mt-20'>
        <img src={require('../assets/images/bg-ilustration.jpg')} alt="homepage-main-img" />
      </div>
    </motion.div>
  )
}
