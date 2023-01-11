import React from 'react'

export default function ArticleModal(props) {
  if(props.isModalOpen){
    return (
        <div className='absolute top-0 bg-gray-100 left-0 w-full h-full flex content-center z-50'>
            <div onClick={() => props.setIsModalOpen(false)} className='absolute right-10 top-8 my-navy-font text-3xl font-bold cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'>✕</div>
            <div className='w-3/5 h-4/5 rounded-md border-4 my-navy-border bg-white p-5 mx-auto my-auto shadow-2xl relative'>
                <div className='grid grid-cols-5 gap-5 w-full h-1/4 mb-5'>
                    <div class="col-span-1 rounded-md shadow-lg overflow-hidden">
                        <img className='h-full w-full object-cover' src={ props.article.image } alt='article-img'/>
                    </div>
                    <div className='h-full flex flex-col justify-between col-span-4 my-navy-font'>
                        <div className='text-2xl md:text-3xl font-bold'>
                            { props.article.title }
                        </div>
                        <div className='text-base'>
                            <p><b>Data publikacji:</b> { props.article.date }</p>
                            <p><b>źródło:</b> { props.article.source.title }</p>
                        </div>
                    </div>
                </div>
                <div className='h-3/5 overflow-y-auto'>
                    <p className='text-base text-justify mt-5 mr-2'>{ props.article.body }</p>
                </div>
                <div>
                    <a href={ props.article.url } target="_blank" rel="noopener noreferrer"><button className='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg hover:scale-105 my-hover-effect absolute right-5 bottom-5'>Przejdź do źródła</button></a>
                </div>
            </div>
        </div>
    )
  }
  else{
    return null
  }
}
