import React from 'react'
import { useState } from 'react'
import loading_img from '../assets/images/404_img.jpg';
import search_img from '../assets/images/search.jpg';

function ExploreForm() {
  const [ keyWord, setKeyWord ] = useState('')
  const [ category, setCategory ] = useState('arts')
  const [ country, setCountry ] = useState('english')
  const [ resultsCount, setResultsCount ] = useState('10')
  const [ isLoading, setIsLoading ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const loading_div = document.getElementById('loading_div')
    const searchParams = { keyWord, category, country, resultsCount }
    console.log(searchParams)
    loading_div.innerHTML= `<img src="${loading_img}" alt='homepage-main-img' />`
    setIsLoading(true)
    setTimeout(() => {
        loading_div.innerHTML= `<img src="${search_img}" alt='homepage-main-img' />`
        setIsLoading(false)
      }, 3000);
  }

  return (
    <div className='w-3/4 mx-auto my-auto z-10'>
        <form onSubmit={handleSubmit}>
            <p className='my-navy-font text-2xl sm:text-3xl font-semibold mb-8'>Jakie wiadomości Cię interesują?</p>
            <div className='grid grid-cols-2 gap-5'>
                <div className='w-full'>
                    <label>Słowo klucz:</label>
                    <br></br>
                    <input 
                        className='border-2 rounded-md my-navy-border bg-transparent p-2 w-full' 
                        type="text"
                        value={keyWord}
                        onChange={(e) => setKeyWord(e.target.value)}
                    />
                </div>
                <div className='w-full'>
                    <label>kategoria:</label>
                    <br></br>
                    <select 
                        className='border-2 rounded-md my-navy-border bg-transparent p-2 w-full'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="arts">sztuka</option>
                        <option value="business">biznes</option>
                        <option value="computers">IT</option>
                    </select>
                </div>
                <div className='w-full'>
                    <label>Język:</label>
                    <br></br>
                    <select 
                        className='border-2 rounded-md my-navy-border bg-transparent p-2 w-full'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        <option value="english">angielski</option>
                        <option value="polish">polski</option>
                        <option value="spanish">hiszpański</option>
                        <option value="german">niemiecki</option>
                    </select>
                </div>
                <div className='w-full'>
                    <label>Liczba wyników:</label>
                    <br></br>
                    <select className='border-2 rounded-md my-navy-border bg-transparent p-2 w-full'
                        value={resultsCount}
                        onChange={(e) => setResultsCount(e.target.value)}
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <div className='mt-3'>
                    {!isLoading && <button className='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg hover:scale-105 my-hover-effect'>Wyszukaj</button>}
                    {isLoading && <button disabled className='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg opacity-75'>Wyszukaj</button>}
                </div>
            </div>
        </form>
    </div>
  )
}

export default ExploreForm