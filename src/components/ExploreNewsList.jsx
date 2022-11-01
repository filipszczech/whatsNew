import React from 'react'

function ExploreNewsList( props ) {
  return (
    <div>
        {props.articles.map((article) => (
            <div className='w-full grid grid-cols-4 gap-3 mb-5' key = { article.uri }>
                <div className='rounded-md'>
                    <img className='h-full w-full rounded-md object-cover' src={ article.image } alt='article-img'/>
                </div>
                <div className='col-span-3'>
                    <a href={ article.url }><p className='text-lg mb-3'>{ article.title }</p></a>
                    <p className='text-sm text-justify'>{ article.body }</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ExploreNewsList