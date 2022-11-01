import React from 'react'
import ExploreNewsList from '../components/ExploreNewsList'

function ExploreContent( props ) {
    if(!props.dataLoaded){
        if(!props.isLoading)
            return (
                <div className='flex flex-col space-y-0 justify-center'>
                    <div className='w-2/3 h-1/2 mx-auto flex justify-center'>
                        <img className='h-4/5 my-auto object-cover' src={require('../assets/images/search.jpg')} alt='homepage-main-img' />
                    </div>
                    <div className='w-full text-center'>
                        <p className='my-navy-font text-2xl sm:text-3xl font-semibold'>Tu pojawią się wyniki</p>
                    </div>
                </div>
            )
        else if(props.isLoading)
            return (
                <div className='flex flex-col space-y-0 justify-center'>
                    <div className='w-2/3 h-1/2 mx-auto flex justify-center'>
                        <img className='h-full object-cover' src={require('../assets/images/404_img.jpg')}  alt='homepage-main-img' />
                    </div>
                    <div className='w-full text-center'>
                        <p className='my-navy-font text-2xl sm:text-3xl font-semibold'>Pracujemy nad tym</p>
                    </div>
                </div>
        )
    }
    else{
        return (
                <div className='p-5'>
                    <div className='mx-auto h-auto overflow-y-scroll news-list'>
                        <ExploreNewsList articles = { props.articles } />
                    </div>
                </div>
        )
    }
}

export default ExploreContent