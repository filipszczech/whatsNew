import React from 'react'

function AnalysisContent({ article }) {
    if(!article){
        return (
            <div className='w-full h-full rounded-xl border-4 p-5 mx-auto my-auto relative border-gray-100 shadow-sm transiton-all duration-700 ease-in-out'>
                    <div className='h-full w-full flex items-center rounded-xl'>
                        <img className='mx-auto scale-75' src={require('../assets/images/news_placeholder.png')} alt="analysis-main-img" />
                    </div>
            </div>
        )
    }
    else{
        if(article == 'wrong'){
            return(
                <div className='w-full h-full rounded-xl border-4 py-5 px-12 mx-auto my-auto relative border-gray-100 shadow-sm transiton-all duration-700 ease-in-out'>
                    <div className='h-full rounded-xl flex content-center text-4xl text-center font-semibold my-navy-font'>
                        <div className='my-auto mx-auto'>Analiza zakończyła się niepowodzeniem :(</div>
                    </div>
            </div>
            )
        }
        else{
            return (
                <div className='w-full h-full rounded-xl border-4 p-5 mx-auto my-auto relative border-gray-100 shadow-sm transiton-all duration-700 ease-in-out'>
                        <div className='grid grid-cols-6 gap-5 w-full h-1/4 mb-5 rounded-xl'>
                            <div className="col-span-2 rounded-md shadow-lg overflow-hidden">
                                <img className='h-full w-full object-cover' src={ article.image } alt='article-img'/>
                            </div>
                            <div className='h-full flex flex-col justify-between col-span-4 my-navy-font'>
                                <div className='text-2xl md:text-3xl font-bold'>
                                    { article.title }
                                </div>
                                <div className='text-base'>
                                    <p><b>Data publikacji:</b> { article.date }</p>
                                    <p><b>źródło:</b> { article.source.title }</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-3/5 overflow-y-auto'>
                            <p className='text-base text-justify mt-5 pr-5'>{ article.body }</p>
                        </div>
                        <div>
                            <a href={ article.url } target="_blank" rel="noopener noreferrer"><button className='py-1 px-5 text-center text-gray-100 rounded-md my-yellow-bg hover:scale-105 my-hover-effect absolute right-5 bottom-5'>Przejdź do źródła</button></a>
                        </div>
                </div>
            )
        }
    }
}


export default AnalysisContent