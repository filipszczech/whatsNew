import React from 'react'
import ExploreNewsList from '../components/ExploreNewsList'

function ExploreContent( props ) {
    if(!props.dataLoaded){
        if(!props.isLoading)
            return (
                <div className='flex flex-col space-y-0 justify-center'>
                    <div className='w-2/3 h-1/2 mx-auto flex justify-center'>
                        <img className='h-4/5 my-auto object-cover' src={require('../assets/images/search.jpg')} alt='content-img' />
                    </div>
                    <div className='w-full text-center'>
                        <p className='my-navy-font text-2xl sm:text-3xl font-semibold'>Tu pojawią się wyniki</p>
                    </div>
                </div>
            )
        else if(props.isLoading)
            return (
                <div className='flex flex-col space-y-0 justify-center'>
                    <div className='w-2/3 h-1/2 mx-auto flex justify-center px-28 py-28'>
                        <img className='' src={require('../assets/images/spinner.gif')}  alt='spinner-img' />
                    </div>
                    <div className='w-full text-center'>
                        <p className='my-navy-font text-2xl sm:text-3xl font-semibold'>Pracujemy nad tym</p>
                    </div>
                </div>
        )
    }
    else{
        return (
                <div className='px-5 pt-5 lg:pt-10'>
                    <div className='mx-auto overflow-y-auto news-list' style={{ height: '75vh' }}>
                        <ExploreNewsList articles = { props.articles } setSingleArticle = { props.setSingleArticle } setIsModalOpen = { props.setIsModalOpen } />
                    </div>
                </div>
        )
    }
}

export default ExploreContent