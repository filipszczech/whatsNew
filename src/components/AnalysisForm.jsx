import React from 'react'
import { useState } from 'react'
import axios from 'axios';


function AnalysisForm({ article, setArticle }) {
  const [ articleUrl, setArticleUrl ] = useState('')
  const [ errorActive, setErrorActive ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(false)       //waiting for data to load
  // let errorResponse = false

  const handleSubmit = (e) => {
    setErrorActive(false)
    if(articleUrl === ''){
        setErrorActive(true)
        return 0;
    }
    e.preventDefault()
    setIsLoading(true)
    fetchAnalysisArticle()
    setTimeout(() => {
        setIsLoading(false)
    }, 1000);
    }

    const fetchAnalysisArticle = async () => {
        try {
            const res = await axios.post(
                `http://analytics.eventregistry.org/api/v1/extractArticleInfo?`
                + `&url=${articleUrl}`
                + `&apiKey=da1595a0-0013-444e-8eb4-2e30d17dbe27`
            );
            console.log(res.data);
            setArticle(res.data)
            
        }
        catch(error) {
            console.log(`error: ${error}`);
            // errorResponse = true
        }
    }

  return (
    <div className='w-3/4 mx-auto my-auto'>
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-5'>
                <div className='w-full col-span-2'>
                    <label for="key-word"><p className='my-navy-font text-2xl sm:text-3xl font-semibold mb-2'>Wprowadź link artykułu do analizy:</p></label>
                    <br/>
                    <div className='flex justify-between gap-5'>
                        <input id="key-word"
                        className='border-2 rounded-md bg-transparent p-2 w-full border-indigo-900 active:border-yellow-500'
                            type="text"
                            value={articleUrl}
                            onChange={(e) => setArticleUrl(e.target.value)}  
                        />
                        <div className="py-2 hover:cursor-pointer my-hover-effect hover:scale-125">
                            <img className='h-7 w-7' src={require('../assets/images/clear.png')} onClick={() => { setArticleUrl('')}} alt='clear-img' />
                        </div>
                    </div>
                </div>
                <div className='mt-2'>
                    {!isLoading && <button className='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg hover:scale-105 my-hover-effect'>Wyszukaj</button>}
                    {isLoading && <button disabled className='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg opacity-75'>Wyszukaj</button>}
                </div>
                {errorActive && <div className='mt-2 py-1 text-lg text-red-700 text-end'>
                    Wprowadź adres url!
                </div>}
            </div>
        </form>
    </div>
  )
}

export default AnalysisForm