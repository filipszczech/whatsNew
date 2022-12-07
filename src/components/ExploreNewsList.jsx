import React from 'react'
import axios from 'axios';

function ExploreNewsList( props ) {
   const loadArticle = (article) =>{
        fetchSingleNews(article)
        setTimeout(() => {
            props.setIsModalOpen(true)
          }, 300);
   }

  const fetchSingleNews = async (uri) => {
    const res = await axios.post(
            `https://eventregistry.org/api/v1/article/getArticle?`
            + `articleUri=${ uri }`
            + `&infoArticleBodyLen=-1`
            + `&resultType=info`
            + `&apiKey=da1595a0-0013-444e-8eb4-2e30d17dbe27`
        );
    console.log(res.data[uri].info)
    props.setSingleArticle(res.data[uri].info)
  }

  return (
    <div>
        {props.articles.map((article) => (
            <div className='w-full grid grid-cols-4 gap-3 mb-5 lg:mb-8 border-t-4 my-navy-border rounded-tl-md bg-gray-100' key = { article.uri }>
                <div className='rounded-bl-md my-navy-border border-4 border-t-0 overflow-hidden'>
                    <a href={ article.url } target="_blank" rel="noopener noreferrer"><img className='h-full w-full object-cover hover:scale-110 transition-all duration-300 ease-in-out' src={ article.image } alt='article-img'/></a>
                </div>
                <div className='col-span-3'>
                    <a href={ article.url } target="_blank" rel="noopener noreferrer"><p className='my-navy-font text-lg lg:text-xl font-semibold mb-3'>{ article.title }</p></a>
                    <p className='text-sm text-justify pr-2'>{ article.body }</p>
                    <div class="w-full flex justify-end">
                        <button onClick={() => loadArticle(article.uri)} className='py-1 px-5 text-center text-gray-100 rounded-md my-navy-bg opacity-80 hover:scale-105 my-hover-effect my-3 mr-3'>Przeczytaj u nas</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ExploreNewsList