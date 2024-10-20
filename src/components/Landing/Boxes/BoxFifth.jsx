import React, { useEffect, useState } from 'react'
import { getNewsList } from '../../../core/services/api/newsTop'
import NewsTop from './newsTop'
import { Button } from '@nextui-org/react'

const BoxFifth = () => {

    const [news, setNews] = useState([])

    const [newsTop, setNewsTop] = useState([])
  
    const getNews = async () => {

        const response = await getNewsList()
        setNews(response)
        setNewsTop(response.news.slice(0,4))
    
    }

    const [viewBetter, setViewBetter] = useState(false);

    useEffect(() => {
        getNews()

        if(window.innerWidth > 768){
            setViewBetter(true)
        }
        else if(window.innerWidth <= 768) {
            setViewBetter(true)
        }

    }, [])


    return (
        <>
       <div className=' my-10 w-5/6 mx-auto flex flex-col gap-5 justify-center items-center md:flex-row overflow-hidden md:overflow-visible' 
       style={viewBetter ? {height: 'fit-content'} : {height: '800px'}}>
            {newsTop.map((item, index) => {
                return (
                    <NewsTop 
                        key={index}
                        id={item.id}
                        title={item.title}
                        newsCatregoryName={item.newsCatregoryName}
                        miniDescribe={item.miniDescribe}
                        currentDissLikeCount={item.currentDissLikeCount}
                        currentLikeCount={item.currentLikeCount}
                        addUserFullName={item.addUserFullName}
                        currentView={item.currentView}
                        image={item}
                        currentImageAddressTumb={item.currentImageAddressTumb}
                    /> 
                )
            })}
        </div>

            {/* <Button onClick={() => {viewBetter ? setViewBetter(false) : setViewBetter(true)}} className='text-white bg-blue-500 w-32 rounded-full mx-auto mb-20 md:hidden'>

                {viewBetter ? "نمایش کمتر" : "نمایش بیشتر"}

            </Button> */}
        </>    
  )
}

export default BoxFifth
