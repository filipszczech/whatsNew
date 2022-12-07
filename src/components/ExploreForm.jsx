import React from 'react'
import { useState } from 'react'
import axios from 'axios';


function ExploreForm({ isLoading, setIsLoading, articles, setArticles, dataLoaded, setDataLoaded }) {
  const [ keyWord, setKeyWord ] = useState('')
  const [ category, setCategory ] = useState('arts')
  const [ country, setCountry ] = useState('eng')
  const [ resultsCount, setResultsCount ] = useState('10')

  const handleSubmit = (e) => {
    if(dataLoaded){
        setDataLoaded(false)
    }
    e.preventDefault()
    const searchParams = { keyWord, category, country, resultsCount }
    console.log(searchParams)
    setIsLoading(true)
    fetchFilteredNews()
    setTimeout(() => {
        setIsLoading(false)
        setDataLoaded(true)
      }, 2000);
  }

  const fetchFilteredNews = async () => {
	// const config = {
	// 	headers: {
    //         "resultType": "articles",
    //         "articlesSortBy": "rel",
    //         "articlesCount": "10",
    //         "lang": "eng",
    //         "includeArticleCategories": true,
    //         "articleBodyLen": -1,
    //         "apiKey": "da1595a0-0013-444e-8eb4-2e30d17dbe27"
	// 	}
	// };
	const res = await axios.post(
		`https://eventregistry.org/api/v1/article/getArticles?`
         + `resultType=articles`
         + `&keyword=${keyWord}`
         + `&categoryUri=${category}` 
         + `&keywordOper=or`
         + `&lang=${country}`
         + `&articlesSortBy=date`
         + `&includeArticleConcepts=true`
         + `&includeArticleCategories=true`
         + `&articleBodyLen=300`
         + `&articlesCount=${resultsCount}`
         + `&isDuplicateFilter=skipDuplicates`
         + `&articlesSortBy=rel`
         + `&apiKey=da1595a0-0013-444e-8eb4-2e30d17dbe27`
	);
    setArticles(res.data.articles.results)
	console.log(articles)
};

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
                        <option value="dmoz/Computers">IT</option>
                        <option value="dmoz/Arts">sztuka</option>
                        <option value="dmoz/Business">biznes</option>
                        <option value="news/Politics">Polityka</option>
                        <option value="dmoz/Arts/Music">Muzyka</option>
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
                        <option value="eng">angielski</option>
                        <option value="pol">polski</option>
                        <option value="spa">hiszpański</option>
                        <option value="deu">niemiecki</option>
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