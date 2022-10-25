import React from 'react'

export const Homepage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full px-3 sm:px-5 pb-3 h-4/5'>
      <div className='my-auto flex flex-col space-y-12'>
        <h1 className='my-navy-font text-2xl sm:text-3xl md:text-4xl font-bold'>
            Newsy z całego świata<br></br>
            zebrane w jednym miejscu
        </h1>
        <div>
            <button className='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg'>Rozpocznij przeglądanie</button>
        </div>
        <div className='flex flex-row space-y-12 my-navy-font'>
            <div className='text-center'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold'>12</p>
                <p className='text-sm md:text-base lg:text-lg'>języków z całego globu</p>
            </div>
            <div className='text-center'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold'>7</p>
                <p className='text-sm md:text-base lg:text-lg'>dostępnych kategorii</p>
            </div>
        </div>
        <div className='flex flex-row space-y-12 my-navy-font'>
            <div className='text-center'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold'>1200</p>
                <p className='text-sm md:text-base lg:text-lg'>zarejestrowanych źródeł</p>
            </div>
            <div className='text-center'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold'>0</p>
                <p className='text-sm md:text-base lg:text-lg'>dopasowań i filtrów</p>
            </div>
        </div>
      </div>
      <div className='mt-20'>
        <img src={require('../assets/images/bg-ilustration.jpg')} alt="homepage-main-img" />
      </div>
    </div>
  )
}
